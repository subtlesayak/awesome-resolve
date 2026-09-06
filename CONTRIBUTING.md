# Contributing

Suggest additions and corrections through an issue or pull request.

- Link to the original public GitHub repository with a clear DaVinci Resolve or Fusion connection.
- Choose the most relevant category; list each repository once.
- Give a short, factual description of what the project provides.
- Check upstream licensing before using **Free**. Use **Public** when access is known but licensing has not been established; use **Mixed** for combined free and paid offerings.
- Record important edition, operating-system, dependency, cost, and maintenance limitations. Distinguish project cost from Resolve Studio and external-service requirements.
- Update both `README.md` and `data/repositories.csv`, including category and total counts when entries change.
- Set `research_snapshot` to the date the entry was researched. Do not advance it for formatting-only edits or imply installation testing without evidence.
- Preserve upstream credits. Exclude cracks, unauthorized installers, duplicate links, and unchanged forks without a distinct purpose.

Before submitting, confirm that repository URLs are unique, README and CSV entries agree, and links contain no tracking parameters or local file paths.

To refresh stars and latest repository push dates, authenticate the GitHub CLI and run `pwsh -File scripts/update-metadata.ps1` from the repository. This refreshes both files from GitHub and records a UTC fetch timestamp. It does not revalidate descriptions, access labels, or compatibility notes. Review the changes before committing.
