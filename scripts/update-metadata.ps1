param()

$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path $PSScriptRoot -Parent
$csvPath = Join-Path $repoRoot 'data/repositories.csv'
$readmePath = Join-Path $repoRoot 'README.md'
$entries = @(Import-Csv -LiteralPath $csvPath -Encoding UTF8)
$checkedAt = [DateTime]::UtcNow.ToString('yyyy-MM-ddTHH:mm:ssZ')
$metadata = @{}

# Only public upstream owner/repository identifiers are sent to GitHub.
# Requires an authenticated GitHub CLI (gh).
for ($start = 0; $start -lt $entries.Count; $start += 20) {
    $end = [Math]::Min($start + 19, $entries.Count - 1)
    $fields = for ($index = $start; $index -le $end; $index++) {
        $parts = $entries[$index].repository.Split('/')
        if ($parts.Count -ne 2 -or $entries[$index].repository -notmatch '^[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+$') {
            throw 'Unexpected repository identifier.'
        }
        'r' + $index + ': repository(owner:"' + $parts[0] + '", name:"' + $parts[1] + '") { stargazerCount pushedAt }'
    }
    $query = 'query { ' + ($fields -join ' ') + ' }'
    $payload = @{ query = $query } | ConvertTo-Json -Compress
    $responseText = $payload | & gh api graphql --input -
    if ($LASTEXITCODE -ne 0) { throw 'GitHub metadata request failed; catalogue files were not modified.' }
    $response = ($responseText -join "`n") | ConvertFrom-Json
    if ($response.errors) { throw 'GitHub returned errors; catalogue files were not modified.' }
    for ($index = $start; $index -le $end; $index++) {
        $item = $response.data.PSObject.Properties['r' + $index].Value
        if ($null -eq $item) { throw 'Repository metadata missing; catalogue files were not modified.' }
        $metadata[$entries[$index].url] = $item
    }
}

foreach ($entry in $entries) {
    $item = $metadata[$entry.url]
    $entry | Add-Member -Force NoteProperty stars ([int]$item.stargazerCount)
    $entry | Add-Member -Force NoteProperty last_pushed_at $item.pushedAt
    $entry | Add-Member -Force NoteProperty metadata_checked_at $checkedAt
}

$readme = Get-Content -Raw -LiteralPath $readmePath -Encoding UTF8
$lines = foreach ($line in ($readme -split '\r?\n')) {
    if ($line -match '^\| Repository \|') {
        '| Repository | What it provides | Access | Stars | Last updated (UTC) |'
    } elseif ($line -match '^\| --- \|') {
        '| --- | --- | --- | ---: | --- |'
    } elseif ($line -match '^\| \[[^\]]+\]\((https://github\.com/[^)]+)\)') {
        $item = $metadata[$Matches[1]]
        if ($null -eq $item) { throw 'README repository missing from CSV.' }
        $cells = $line.Split('|')
        $date = if ($item.pushedAt) { ([DateTimeOffset]::Parse($item.pushedAt)).UtcDateTime.ToString('yyyy-MM-dd') } else { 'Unavailable' }
        '| ' + $cells[1].Trim() + ' | ' + $cells[2].Trim() + ' | ' + $cells[3].Trim() + ' | ' + $item.stargazerCount + ' | ' + $date + ' |'
    } elseif ($line -match '^\*\*GitHub metadata checked:') {
        '**GitHub metadata checked: ' + $checkedAt + '.** Stars are a snapshot. Last updated is GitHub''s latest repository push date (`pushedAt`), not the latest release date; full UTC timestamps are in the CSV.'
    } else {
        $line
    }
}

$utf8 = [System.Text.UTF8Encoding]::new($false)
$csv = $entries | ConvertTo-Csv -NoTypeInformation
[System.IO.File]::WriteAllText($csvPath, ($csv -join "`n") + "`n", $utf8)
[System.IO.File]::WriteAllText($readmePath, ($lines -join "`n").TrimEnd() + "`n", $utf8)
Write-Output "Updated stars and latest push dates for $($entries.Count) repositories."
