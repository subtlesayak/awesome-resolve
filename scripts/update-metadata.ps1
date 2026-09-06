param()

$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path $PSScriptRoot -Parent
$csvPath = Join-Path $repoRoot 'data/repositories.csv'
Get-Command node -ErrorAction Stop | Out-Null
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
    $pushedAt = if ($item.pushedAt) { ([DateTimeOffset]$item.pushedAt).UtcDateTime.ToString('yyyy-MM-ddTHH:mm:ssZ') } else { '' }
    $entry | Add-Member -Force NoteProperty last_pushed_at $pushedAt
    $entry | Add-Member -Force NoteProperty metadata_checked_at $checkedAt
}

$utf8 = [System.Text.UTF8Encoding]::new($false)
$csv = $entries | ConvertTo-Csv -NoTypeInformation
[System.IO.File]::WriteAllText($csvPath, ($csv -join "`n") + "`n", $utf8)
& node (Join-Path $PSScriptRoot 'build-catalogue.mjs')
if ($LASTEXITCODE -ne 0) { throw 'Metadata saved to CSV, but catalogue generation failed. Run node scripts/build-catalogue.mjs after fixing the error.' }
Write-Output "Updated stars and latest push dates for $($entries.Count) repositories."
