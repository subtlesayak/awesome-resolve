# Contributing

Suggest additions and corrections through an issue or pull request.

Each README category starts with a complete repository list sorted A–Z by repository name. Linked GitHub-owner subheadings follow for creators with multiple entries, repeating their repositories as a secondary browsing option. Creator groups and their repositories sort A–Z. Single-entry creators appear only in the complete list. Use the repository owner as the grouping key; do not merge different accounts based on similar names. The five alternate sort views retain their catalogue-wide ordering.

- Link to the original public GitHub repository with a clear DaVinci Resolve or Fusion connection.
- Choose the most relevant category; list each repository once.
- Give a short, factual description of what the project provides.
- Check upstream licensing before using **Free**. Use **Public** when access is known but licensing has not been established; use **Mixed** for combined free and paid offerings.
- Record important edition, operating-system, dependency, cost, and maintenance limitations. Distinguish project cost from Resolve Studio and external-service requirements.
- Edit `data/repositories.csv`, then run `node scripts/build-catalogue.mjs` to regenerate README tables and all five sorted views. Update the introductory total if the number of entries changes. Category counts are generated automatically.
- Set `research_snapshot` to the date the entry was researched. Do not advance it for formatting-only edits or imply installation testing without evidence.
- Preserve upstream credits. Exclude cracks, unauthorized installers, duplicate links, and unchanged forks without a distinct purpose.

Before submitting, confirm that repository URLs are unique, README and CSV entries agree, and links contain no tracking parameters or local file paths.

To refresh stars and latest repository push dates, install Node.js, authenticate the GitHub CLI, and run `pwsh -File scripts/update-metadata.ps1` from the repository. This refreshes the CSV, README, and sorted views from GitHub and records a UTC fetch timestamp. It does not revalidate descriptions, access labels, or compatibility notes. Review the changes before committing.

Relative ages (such as `1 week back`) are calculated as of the metadata-check timestamp, so static GitHub pages do not imply a live clock. Sorting always uses exact timestamps or numeric star counts. **Type** is the catalogue category, not a claim about a project's plugin format. Access badges preserve the original access qualifiers and do not imply that every public project is free.

Run `node --test scripts/catalogue.test.mjs` to verify sorting, relative dates, data preservation, and generated links before submitting.

Platform fields are maintained separately from GitHub star metadata. Use semicolon-separated values in `platforms`: `Windows`, `macOS`, `Linux`, `iPadOS`, `Reference`, or `Unverified`. Assign operating systems only when upstream support statements, installation instructions, or release packages establish them. Use `Reference` for documentation-only resources; absence of an OS is not proof that it is unsupported. Keep partial support, untested platforms, architecture limits, and server-host distinctions in `platform_notes`. Record the supporting URL in `platform_source` and the review date in `platform_checked_at`. Do not infer all-platform support from a DCTL, Python, Lua, or container label alone.

For each catalogue update, add a dated entry to `CHANGELOG.md` listing every added resource, its purpose, access conditions, compatibility caveats, and discovery source. Group the update into one GitHub release using those notes; start at `v1.0` and increment the minor version for each catalogue update (`v1.1`, `v1.2`, and so on), regardless of the date. Tag the verified catalogue commit, and keep unresolved leads clearly labelled. Catalogue releases do not imply upstream software releases or installation testing.
