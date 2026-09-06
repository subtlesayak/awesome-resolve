# Changelog

Each catalogue update is published as one GitHub release. Every added resource has its own entry in that update. Versions identify catalogue snapshots, not upstream software releases.

## [v2026.09.06.2](https://github.com/subtlesayak/awesome-resolve/releases/tag/v2026.09.06.2) — 2026-09-06

### Changed

- Added a **Platforms supported** legend and platform columns to the README and all five sorted catalogue views: 🪟 Windows, 🍎 macOS, 🐧 Linux, 📱 iPadOS, 📖 Reference, and ❔ Unverified.
- Reviewed upstream documentation for platform claims across the 130-entry catalogue. Each entry links to its source and records a separate platform-review date in the CSV. Missing evidence remains unverified.
- Preserved caveats for untested platforms, Apple Silicon requirements, Linux distributions, source-only builds, and server-host support. OS omissions do not imply unsupported platforms.
- Kept all 130 repositories and existing descriptions/access classifications. This update adds no repositories.
- Refreshed stars and latest push dates; normalized push dates to ISO 8601 UTC and added a regression check against locale-formatted timestamps.
- Verified platform rendering, source links, sort order, relative ages, and deterministic regeneration with six passing checks. Platform labels reflect upstream documentation, not installation testing.

## [v2026.09.06.1](https://github.com/subtlesayak/awesome-resolve/releases/tag/v2026.09.06.1) — 2026-09-06

## Added

16 repositories added, expanding the catalogue from 114 to 130.

- **[vulture-s/arkiv](https://github.com/vulture-s/arkiv)** — Local-first footage indexing, semantic search, metadata, and Resolve import/marker workflows. PolyForm Perimeter source-available licence; not MIT. Requires external local AI/media dependencies. Access: Free; source-available, restricted competing-product use. [Discovery source](https://www.reddit.com/r/davinciresolve/comments/1t0uqd3/may_devtools_monthly_megathread_for_tool_builders/).
- **[abhirup780/fast-autocut](https://github.com/abhirup780/fast-autocut)** — Silence removal that builds a new timeline while retaining externally recorded audio sync. Windows, Resolve Studio 18.5+, Python, and FFmpeg required. Access: Free. [Discovery source](https://www.reddit.com/r/davinciresolve/comments/1t0uqd3/may_devtools_monthly_megathread_for_tool_builders/).
- **[Creative-Crafter/davinci-shortform-overlays](https://github.com/Creative-Crafter/davinci-shortform-overlays)** — Fusion generator with switchable TikTok, Shorts, and Reels safe-zone overlays; distributed as a .drfx template. Check guides against current platform layouts. Access: Free. [Discovery source](https://www.reddit.com/r/davinciresolve/comments/1t0uqd3/may_devtools_monthly_megathread_for_tool_builders/).
- **[JaySNL/VSTForResolveLinux](https://github.com/JaySNL/VSTForResolveLinux)** — Experimental VST2/VST3/CLAP bridge for Resolve Studio 21 on Linux. Patches process memory and may crash Resolve; Windows plugins need patched yabridge. See current latency limitations. Access: Free. [Discovery source](https://www.reddit.com/r/davinciresolve/comments/1vywcqr/vst_plugins_now_work_in_fairlight_on_linux_i/).
- **[roukou3/DCTL](https://github.com/roukou3/DCTL)** — Fisheye correction and projection conversion DCTL for Resolve Studio. Older documented Resolve versions and macOS GPU compatibility caveats. Access: Free. [Discovery source](https://www.reddit.com/r/davinciresolve/comments/1pnrx5w/list_of_current_dctls_for_davinci_resolve/).
- **[Xaryen/DCTLs](https://github.com/Xaryen/DCTLs)** — Minimax-style DCTL for comparing effects with After Effects. Slow at larger values; author recommends Alpha Matte Shrink and Grow OFX for production. Access: Public. [Discovery source](https://www.reddit.com/r/davinciresolve/comments/1pnrx5w/list_of_current_dctls_for_davinci_resolve/).
- **[mitkunz/resolve_DCTLs](https://github.com/mitkunz/resolve_DCTLs)** — Grading DCTLs including Technicolor-style RGB mixing, film saturation, adjustable grey cards, and letterboxing. GPL-3.0. Access: Free. [Discovery source](https://www.reddit.com/r/davinciresolve/comments/1pnrx5w/list_of_current_dctls_for_davinci_resolve/).
- **[xavijulez/Tetrahedral-Interpolation-DCTL](https://github.com/xavijulez/Tetrahedral-Interpolation-DCTL)** — CIE XYZ tetrahedral color transformation ported to DCTL, with credits to the earlier Nuke and Fusion implementations. Access: Free. [Discovery source](https://www.reddit.com/r/davinciresolve/comments/1pnrx5w/list_of_current_dctls_for_davinci_resolve/).
- **[hotgluebanjo/halation-dctl](https://github.com/hotgluebanjo/halation-dctl)** — Adjustable halation with exponential falloff. Requires scene-linear input and the DCTL OFX effect; licensing not established. Access: Public. [Discovery source](https://www.reddit.com/r/davinciresolve/comments/1pnrx5w/list_of_current_dctls_for_davinci_resolve/).
- **[EaryChow/Blender-AgX-Resolve](https://github.com/EaryChow/Blender-AgX-Resolve)** — Experimental AgX fork with defaults aimed at Blender matching, separate working primaries, and added controls. Distinct from sobotka/AgX-Resolve; not installation-tested. Access: Public. [Discovery source](https://www.reddit.com/r/davinciresolve/comments/1vo2zmd/dctl_causes_crash_upon_usage_need_help_with/).
- **[thatcherfreeman/dwg-transforms](https://github.com/thatcherfreeman/dwg-transforms)** — DCTL input transforms from camera and other color spaces into DaVinci Wide Gamut/Intermediate, including a GoPro GP-Log transform. Access: Public. [Discovery source](https://www.reddit.com/r/davinciresolve/comments/1vq3pk5/studio_version_for_ipad_mini_and_gptune_transform/).
- **[DMiradakis/resolver](https://github.com/DMiradakis/resolver)** — CLI for self-contained Resolve project workflows: scaffold project folders, export render artifacts, and archive projects. Access: Free. [Discovery source](https://www.reddit.com/r/davinciresolve/comments/1qbdbdf/introducing_resolver_a_small_open_source_cli_for/).
- **[adrian-goe/resolve-immich-export](https://github.com/adrian-goe/resolve-immich-export)** — Uploads completed Resolve renders to an Immich server and selected album. Beta; Studio 21+, an Immich instance, and API key required. README release links contain placeholders. Access: Public; Immich hosting separate. [Discovery source](https://www.reddit.com/r/davinciresolve/comments/1se5hyi/april_developertool_creator_thread_building_or/).
- **[Googleholic/Media_Relinker_for_Davinci_Resolve](https://github.com/Googleholic/Media_Relinker_for_Davinci_Resolve)** — Matches renamed or moved offline media using metadata, with match review and relink history. Studio 19.1+ and ExifTool required; Windows/macOS/Linux documented. Access: Free. [Discovery source](https://www.reddit.com/r/davinciresolve/comments/1se5hyi/april_developertool_creator_thread_building_or/).
- **[Pinionist/Resolve-Conform-tools](https://github.com/Pinionist/Resolve-Conform-tools)** — Resolve Studio Lua tools for VFX conforming, plate publishing, clip renaming, and version switching. Timeline renamer requires 20.2; see upstream retime/keyframe caveat. Access: Public. [Discovery source](https://www.reddit.com/r/davinciresolve/comments/1qv4i68/davinci_resolve_bulk_rename_script/).
- **[nikita-petrovich/OFX-QRCoder](https://github.com/nikita-petrovich/OFX-QRCoder)** — Proof-of-concept QR-code generator for Resolve and other OpenFX hosts. macOS distribution; Windows support and performance optimization remain on the upstream to-do list. Access: Free. [Discovery source](https://www.reddit.com/r/davinciresolve/comments/1tlfbqa/do_you_know_this_open_source_ofx_qr_code_generator/).

## Additional resources

- **[Resolve Directory](https://resolve.directory/)** — Official page checked. Directory for free PowerGrades, LUTs, and camera log LUTs; individual downloads and licences not audited.
- **[DCTLs.info / Colorist Resources](https://dctls.info/)** — Page title reachable; content unavailable. DCTL discovery lead; current catalogue contents and pricing need manual review.
- **[FrameSeek](https://frameseek.app/)** — Official page checked. Apple Silicon/macOS 15+ footage search with FCPXML/EDL export. Current page lists $59 one-time, superseding Reddit's $39. Local processing plus optional Gemini API; not unconditionally offline.
- **[SafeFrame](https://creovanta.com/plugins/safeframe-davinci-resolve)** — Reddit lead; upstream fetch failed. Creator describes free platform safe-zone guides for Resolve Free and Studio; current availability and terms unverified.
- **[Tagger for Resolve](https://www.tagger.mov/)** — Reddit lead; upstream fetch failed. Creator describes AI metadata tagging for Resolve Studio on macOS with a limited demo; current price and data handling unverified.
- **[SyncPass](https://jklediting.com/syncpass)** — Reddit lead only. Windows/Studio text-based editing beta with a time-limited trial in the post. Current availability and terms unverified; separate from Fast AutoCut.
- **[Subreddit wiki](https://www.reddit.com/r/davinciresolve/wiki/index/)** — Index checked; plugin/resource subpages unavailable. Starting points for training, Free versus Studio, media import, offline media, playback issues, and plugins.

## Updated

- Refreshed GitHub stars and repository push dates for all 130 entries.
- Regenerated the category tables and five sorted catalogue views.
- Added a discovery report and structured provenance, including licence changes, compatibility limits, duplicates, and exclusions.

## Verification

Upstream metadata and documentation checked; no plugins installed or tested in Resolve. This is a targeted scan of accessible Reddit threads, not a complete historical scrape. Catalogue generation and consistency tests passed.
