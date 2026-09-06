# Project audit — 2026-09-06

Audited the catalogue at `f65b043`, its generators, collection scripts, evidence ledgers, documentation, tests, and public release state. Confirmed issues below were fixed in this maintenance change. No new provider release is required under the contribution policy.

## Findings

| Severity | Finding | Resolution |
|---|---|---|
| Medium | Community regeneration split the external directory at its heading and discarded everything after it, including any subsequently appended editorial notes. | Added an explicit end marker and a bounded replacement helper. Unterminated regions fail before writing; regression test verifies preservation of trailing notes. |
| Medium | Historical audit tests required current stars, push dates and check timestamps to equal the old snapshot. The documented metadata refresh would therefore fail validation unless historical evidence was rewritten. | Allow later metadata checks while retaining exact equality for the same snapshot; reject metadata older than the audit. |
| Medium | Raw research and release-note scratch directories were untracked but not ignored, making accidental inclusion by broad staging possible. | Added targeted ignore rules and a check that these directories remain untracked. Existing scratch was preserved. |
| Low | The update report covered 72 external entries, while the current catalogue contained 104; readers had no direct pointer to later update evidence. | Added an explicit historical-scope note and link to the 32-entry community evidence report. |
| Low | Generators use `Map.groupBy`, but the required Node runtime and complete regeneration order were undocumented. | Documented Node 22+, PowerShell/GitHub CLI requirements, regeneration order and full-suite command. |

## Verification

- **225 unique GitHub repositories**, **104 unique external directory URLs**, and **707 unique Reactor package IDs** reconcile with their ledgers. Creator repeats in README are intentional.
- All 707 inventory records have names, creators, categories, versions and date strings; none has a declared date after the snapshot. This checks recorded metadata, not independent release provenance.
- All three generators reproduce their current outputs deterministically. README includes every external entry once, sorted alphabetically; the five GitHub sort views preserve the repository data.
- **21 tests pass**, covering data relationships, dates, sorting, platform labels, evidence links, regeneration, all tracked Markdown file links, local section anchors, and scratch exclusions.
- Metadata refresh collects all GitHub responses before writing the CSV and rejects API errors/missing repositories. If page generation fails after the write, its error explicitly states that the CSV has already been saved; this operation is not a multi-file transaction.
- Collection scripts were reviewed as read-only upstream requests. External HTML extraction is heuristic research output and is not automatically promoted into the reviewed evidence ledger. No fetched code is evaluated.
- Common credential/private-path pattern checks found no matches in the reviewed catalogue, documentation and scripts. This is not an exhaustive secret-history audit.
- GitHub reports the canonical repository as `subtlesayak/awesome-resolve-list`. At audit time, public `main` and tag `v1.10` both pointed to `f65b0436e591949dde4796e7239fd0c3d1c1319c`; the release was published. Release gaps are intentional under the current maintenance-tag policy.

## Remaining limitations

- **Repository licensing is unspecified:** no LICENSE file is present. Contributor permission and reuse terms should be chosen by the owner; no license was invented during this audit. Upstream resources retain their own terms.
- **Compatibility evidence remains incomplete:** 29 of the 32 community additions have no established OS matrix. The older 72-resource snapshot has 57 entries without a verified product date and 16 initial direct-request blocks. These are explicitly labelled, not inferred to work or to be abandoned.
- The 707-item inventory includes dependencies, historical host installers and non-Resolve companions. It must not be advertised as 707 verified Resolve plugins.
- Online verification in this audit covered repository identity and release state. The earlier upstream link checks were reviewed as dated evidence; all external websites were not freshly recrawled, and no Resolve/Fusion installations, binaries or plugin behavior were tested.
- No CI workflow currently runs validation on pull requests. The full local command is `node --test scripts/*.test.mjs`; automated enforcement remains an optional project improvement.

**Result:** structural and maintenance checks pass after the fixes. Upstream compatibility, current product availability and repository licensing retain the limits above.
