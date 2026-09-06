# Contributing

Suggest additions and corrections through an issue or pull request.

**Reports are local-only.** Do not commit or upload audit, research, or discovery reports. Keep them in the ignored report paths and show them locally. Publish catalogue entries and structured source data only; public documentation must not link to ignored reports.

Use **Node.js 22 or newer** for the generators and tests (`Map.groupBy` is required). Metadata refresh also requires PowerShell 7 and authenticated GitHub CLI. There are no npm package dependencies. Run `node scripts/build-community-report.mjs`, `node scripts/build-update-report.mjs`, then `node scripts/build-catalogue.mjs` to regenerate all pages. Run `node --test scripts/*.test.mjs` afterward.

The community section in `data/external-tools.md` ends at `<!-- end community discoveries -->`. Keep hand-written notes outside that generated region; the generator refuses an unterminated region. Local `.research/` and `.release-notes/` folders are ignored and must not be published.

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

Maintain external websites and stores in `data/external-tools.md`, then run `node scripts/build-catalogue.mjs`. The generator includes every external entry in one alphabetical **🌐 External resources** category in the README, preserving direct links, descriptions, access conditions, and platform notes. Edit the source directory rather than the generated README rows.

To refresh stars and latest repository push dates, install Node.js, authenticate the GitHub CLI, and run `pwsh -File scripts/update-metadata.ps1` from the repository. This refreshes the CSV, README, and sorted views from GitHub and records a UTC fetch timestamp. It does not revalidate descriptions, access labels, or compatibility notes. Review the changes before committing.

Relative ages (such as `1 week back`) are calculated as of the metadata-check timestamp, so static GitHub pages do not imply a live clock. Sorting always uses exact timestamps or numeric star counts. **Type** is the catalogue category, not a claim about a project's plugin format. Access badges preserve the original access qualifiers and do not imply that every public project is free.

Run `node --test scripts/catalogue.test.mjs` to verify sorting, relative dates, data preservation, and generated links before submitting.

To audit upstream updates, run `node scripts/check-updates.mjs --github`, then `node scripts/check-updates.mjs --github-changelogs`, and `node scripts/check-updates.mjs --external`. These read-only checks write research output under `.research/update-check`; keep raw research out of commits. GitHub checks require authenticated `gh`. External checks use unauthenticated public pages and may encounter challenges or JavaScript shells. Root changelog discovery is deliberately bounded and does not crawl every nested documentation link.

Community additions live in `data/community-discoveries.json`; the separate Reactor manifest inventory is `data/reactor-inventory.json`. Run `node scripts/build-community-report.mjs` after reviewed edits. Do not count inventory folders as curated plugins: many are dependencies, host installers or legacy companions. Preserve historical audit scope; later additions have their own dated evidence rather than retroactively claiming an earlier audit checked them. Run `node --test scripts/*.test.mjs` for the complete validation suite.

Review primary sources before editing `data/update-audit.json`. Extract product versions only from explicit release entries or product metadata. Do not turn page modification, refund-policy, copyright, host-compatibility, or store publication dates into product release dates. Record ambiguous dates, per-platform releases, prereleases, and blocked pages explicitly. Then run `node scripts/build-update-report.mjs` and `node --test scripts/*.test.mjs`. The evidence ledger is reviewed data; regeneration formats it without silently promoting scraping heuristics into verified release claims.

Platform fields are maintained separately from GitHub star metadata. Use semicolon-separated values in `platforms`: `Windows`, `macOS`, `Linux`, `iPadOS`, `Reference`, or `Unverified`. Assign operating systems only when upstream support statements, installation instructions, or release packages establish them. Use `Reference` for documentation-only resources; absence of an OS is not proof that it is unsupported. Keep partial support, untested platforms, architecture limits, and server-host distinctions in `platform_notes`. Record the supporting URL in `platform_source` and the review date in `platform_checked_at`. Do not infer all-platform support from a DCTL, Python, Lua, or container label alone.

Create a GitHub release only when adding a new provider or recording a verified update from an existing provider. Providers include the creators and maintainers of listed repositories, tools, and external resources. Existing-provider updates can include new tools, published versions, features, fixes, or documented changes to availability, pricing, licensing, and compatibility. Verify each update against the provider's own repository, release notes, or website.

For each qualifying update, add a dated entry to `CHANGELOG.md` naming the provider and every added or updated resource, explaining what changed, and linking to the supporting source. Include purpose, access conditions, and compatibility caveats where relevant. Group all qualifying changes in one catalogue update into one GitHub release. Use versions starting at `v1.0` and increment the minor version for each release (`v1.1`, `v1.2`, and so on), regardless of the date. Release notes should contain only the provider additions and updates included in that release.

README edits, credits, layout, sorting, documentation corrections, tooling changes, routine star/date refreshes, and audits that discover no new provider updates use ordinary commits without a GitHub release. Maintenance snapshots may remain as Git tags only; preserve existing tag numbers and commit targets. Do not reuse or renumber tags to close gaps in the release list. A repository push or metadata refresh alone is not evidence of a provider update. Tag the verified catalogue commit, and keep unresolved leads clearly labelled. Catalogue releases do not imply installation testing or replace the providers' own release notes.
