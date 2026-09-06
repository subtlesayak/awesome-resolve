# Resolve subreddit discovery report

Researched: 2026-09-06.

Targeted web searches and accessible r/davinciresolve posts/comments; public GitHub API metadata and upstream READMEs checked. Not a complete subreddit scrape: bulk JSON was unavailable; wiki subpages could not be fetched.

Added **16 repositories**, expanding the catalogue from **114 to 130**. Each addition was deduplicated against the existing CSV. No software was installed or executed; upstream requirements are documentation claims, not runtime verification.

Only public resource links and summaries are retained. No Reddit usernames, user profiles, or full comment dumps are stored.

## Added repositories

| Repository | Purpose and requirements | Discovery source | Review note |
| --- | --- | --- | --- |
| [vulture-s/arkiv](https://github.com/vulture-s/arkiv) | Local-first footage indexing, semantic search, metadata, and Resolve import/marker workflows. PolyForm Perimeter source-available licence; not MIT. Requires external local AI/media dependencies. | [Reddit thread](https://www.reddit.com/r/davinciresolve/comments/1t0uqd3/may_devtools_monthly_megathread_for_tool_builders/) | Reddit advertised MIT; current upstream README specifies PolyForm Perimeter and free commercial use with competing-product restrictions. |
| [abhirup780/fast-autocut](https://github.com/abhirup780/fast-autocut) | Silence removal that builds a new timeline while retaining externally recorded audio sync. Windows, Resolve Studio 18.5+, Python, and FFmpeg required. | [Reddit thread](https://www.reddit.com/r/davinciresolve/comments/1t0uqd3/may_devtools_monthly_megathread_for_tool_builders/) | Distinct from the SyncPass product discussed nearby in the same thread. |
| [Creative-Crafter/davinci-shortform-overlays](https://github.com/Creative-Crafter/davinci-shortform-overlays) | Fusion generator with switchable TikTok, Shorts, and Reels safe-zone overlays; distributed as a .drfx template. Check guides against current platform layouts. | [Reddit thread](https://www.reddit.com/r/davinciresolve/comments/1t0uqd3/may_devtools_monthly_megathread_for_tool_builders/) | Upstream describes safe-zone guides, not a general pack of animated short-form effects. |
| [JaySNL/VSTForResolveLinux](https://github.com/JaySNL/VSTForResolveLinux) | Experimental VST2/VST3/CLAP bridge for Resolve Studio 21 on Linux. Patches process memory and may crash Resolve; Windows plugins need patched yabridge. See current latency limitations. | [Reddit thread](https://www.reddit.com/r/davinciresolve/comments/1vywcqr/vst_plugins_now_work_in_fairlight_on_linux_i/) | Current README reports latency compensation since v0.2.9; the original Reddit post's no-compensation warning is outdated. Playback-start silence and dynamic-latency caveats remain. |
| [roukou3/DCTL](https://github.com/roukou3/DCTL) | Fisheye correction and projection conversion DCTL for Resolve Studio. Older documented Resolve versions and macOS GPU compatibility caveats. | [Reddit thread](https://www.reddit.com/r/davinciresolve/comments/1pnrx5w/list_of_current_dctls_for_davinci_resolve/) | MIT; upstream documents Studio 16/17, not a current-version test. |
| [Xaryen/DCTLs](https://github.com/Xaryen/DCTLs) | Minimax-style DCTL for comparing effects with After Effects. Slow at larger values; author recommends Alpha Matte Shrink and Grow OFX for production. | [Reddit thread](https://www.reddit.com/r/davinciresolve/comments/1pnrx5w/list_of_current_dctls_for_davinci_resolve/) | No licence identified by GitHub metadata; retain Public. |
| [mitkunz/resolve_DCTLs](https://github.com/mitkunz/resolve_DCTLs) | Grading DCTLs including Technicolor-style RGB mixing, film saturation, adjustable grey cards, and letterboxing. GPL-3.0. | [Reddit thread](https://www.reddit.com/r/davinciresolve/comments/1pnrx5w/list_of_current_dctls_for_davinci_resolve/) | Upstream README and GPL-3.0 metadata checked. |
| [xavijulez/Tetrahedral-Interpolation-DCTL](https://github.com/xavijulez/Tetrahedral-Interpolation-DCTL) | CIE XYZ tetrahedral color transformation ported to DCTL, with credits to the earlier Nuke and Fusion implementations. | [Reddit thread](https://www.reddit.com/r/davinciresolve/comments/1pnrx5w/list_of_current_dctls_for_davinci_resolve/) | MIT; an actual DCTL port rather than the Nuke-only source reference. |
| [hotgluebanjo/halation-dctl](https://github.com/hotgluebanjo/halation-dctl) | Adjustable halation with exponential falloff. Requires scene-linear input and the DCTL OFX effect; licensing not established. | [Reddit thread](https://www.reddit.com/r/davinciresolve/comments/1pnrx5w/list_of_current_dctls_for_davinci_resolve/) | Upstream input requirements checked; do not apply directly to log-encoded footage. |
| [EaryChow/Blender-AgX-Resolve](https://github.com/EaryChow/Blender-AgX-Resolve) | Experimental AgX fork with defaults aimed at Blender matching, separate working primaries, and added controls. Distinct from sobotka/AgX-Resolve; not installation-tested. | [Reddit thread](https://www.reddit.com/r/davinciresolve/comments/1vo2zmd/dctl_causes_crash_upon_usage_need_help_with/) | Fork retained because upstream explicitly documents Blender matching changes. Discovered in a crash-help thread; discovery is not a compatibility endorsement. |
| [thatcherfreeman/dwg-transforms](https://github.com/thatcherfreeman/dwg-transforms) | DCTL input transforms from camera and other color spaces into DaVinci Wide Gamut/Intermediate, including a GoPro GP-Log transform. | [Reddit thread](https://www.reddit.com/r/davinciresolve/comments/1vq3pk5/studio_version_for_ipad_mini_and_gptune_transform/) | Repository metadata and Reddit file link checked. No root README returned; licence not established. |
| [DMiradakis/resolver](https://github.com/DMiradakis/resolver) | CLI for self-contained Resolve project workflows: scaffold project folders, export render artifacts, and archive projects. | [Reddit thread](https://www.reddit.com/r/davinciresolve/comments/1qbdbdf/introducing_resolver_a_small_open_source_cli_for/) | MIT; upstream README confirms the three workflows. |
| [adrian-goe/resolve-immich-export](https://github.com/adrian-goe/resolve-immich-export) | Uploads completed Resolve renders to an Immich server and selected album. Beta; Studio 21+, an Immich instance, and API key required. README release links contain placeholders. | [Reddit thread](https://www.reddit.com/r/davinciresolve/comments/1se5hyi/april_developertool_creator_thread_building_or/) | No licence identified; README install links still reference yourname. Listing is not a verified installer recommendation. |
| [Googleholic/Media_Relinker_for_Davinci_Resolve](https://github.com/Googleholic/Media_Relinker_for_Davinci_Resolve) | Matches renamed or moved offline media using metadata, with match review and relink history. Studio 19.1+ and ExifTool required; Windows/macOS/Linux documented. | [Reddit thread](https://www.reddit.com/r/davinciresolve/comments/1se5hyi/april_developertool_creator_thread_building_or/) | Upstream describes relinking, not the effect-library deletion utility mentioned elsewhere in the thread. |
| [Pinionist/Resolve-Conform-tools](https://github.com/Pinionist/Resolve-Conform-tools) | Resolve Studio Lua tools for VFX conforming, plate publishing, clip renaming, and version switching. Timeline renamer requires 20.2; see upstream retime/keyframe caveat. | [Reddit thread](https://www.reddit.com/r/davinciresolve/comments/1qv4i68/davinci_resolve_bulk_rename_script/) | Credits to Thatcher Freeman preserved upstream; licence not established. |
| [nikita-petrovich/OFX-QRCoder](https://github.com/nikita-petrovich/OFX-QRCoder) | Proof-of-concept QR-code generator for Resolve and other OpenFX hosts. macOS distribution; Windows support and performance optimization remain on the upstream to-do list. | [Reddit thread](https://www.reddit.com/r/davinciresolve/comments/1tlfbqa/do_you_know_this_open_source_ofx_qr_code_generator/) | MIT; macOS installation documented. No installer or binary executed. |

## Additional websites and learning resources

These resources are outside the GitHub-only catalogue. Verification status is explicit; Reddit-only pricing and compatibility claims are not treated as current facts.

| Resource | Status | Notes | Discovery source |
| --- | --- | --- | --- |
| [Resolve Directory](https://resolve.directory/) | Official page checked | Directory for free PowerGrades, LUTs, and camera log LUTs; individual downloads and licences not audited. | [Reddit source](https://www.reddit.com/r/davinciresolve/comments/1t0uqd3/may_devtools_monthly_megathread_for_tool_builders/) |
| [DCTLs.info / Colorist Resources](https://dctls.info/) | Page title reachable; content unavailable | DCTL discovery lead; current catalogue contents and pricing need manual review. | [Reddit source](https://www.reddit.com/r/davinciresolve/comments/1pnrx5w/list_of_current_dctls_for_davinci_resolve/) |
| [FrameSeek](https://frameseek.app/) | Official page checked | Apple Silicon/macOS 15+ footage search with FCPXML/EDL export. Current page lists $59 one-time, superseding Reddit's $39. Local processing plus optional Gemini API; not unconditionally offline. | [Reddit source](https://www.reddit.com/r/davinciresolve/comments/1t0uqd3/may_devtools_monthly_megathread_for_tool_builders/) |
| [SafeFrame](https://creovanta.com/plugins/safeframe-davinci-resolve) | Reddit lead; upstream fetch failed | Creator describes free platform safe-zone guides for Resolve Free and Studio; current availability and terms unverified. | [Reddit source](https://www.reddit.com/r/davinciresolve/comments/1t0uqd3/may_devtools_monthly_megathread_for_tool_builders/) |
| [Tagger for Resolve](https://www.tagger.mov/) | Reddit lead; upstream fetch failed | Creator describes AI metadata tagging for Resolve Studio on macOS with a limited demo; current price and data handling unverified. | [Reddit source](https://www.reddit.com/r/davinciresolve/comments/1t0uqd3/may_devtools_monthly_megathread_for_tool_builders/) |
| [SyncPass](https://jklediting.com/syncpass) | Reddit lead only | Windows/Studio text-based editing beta with a time-limited trial in the post. Current availability and terms unverified; separate from Fast AutoCut. | [Reddit source](https://www.reddit.com/r/davinciresolve/comments/1t0uqd3/may_devtools_monthly_megathread_for_tool_builders/) |
| [Subreddit wiki](https://www.reddit.com/r/davinciresolve/wiki/index/) | Index checked; plugin/resource subpages unavailable | Starting points for training, Free versus Studio, media import, offline media, playback issues, and plugins. | [Reddit source](https://www.reddit.com/r/davinciresolve/wiki/index/) |

## Deduplication and exclusions

Rediscovered entries already present: `Akascape/Rembg-Fuse`, `Kartaverse/Reactor-Standalone`, `thatcherfreeman/utility-dctls`, `xtremestuff/resolve-dctl`, `Wavechaser/NamiColor`, `npeason/Tetra-DCTLOFX`, `EmberLightVFX/Tetrahedral-Interpolation-for-Fusion`, `veritus-git/BadWords`, `tmoroney/auto-subs`.

- [calvinsilly/Tetrahedral-Interpolation](https://github.com/calvinsilly/Tetrahedral-Interpolation): Nuke expression/BlinkScript implementation; retain as provenance for the DCTL port, not a native Resolve addition. [Source thread](https://www.reddit.com/r/davinciresolve/comments/1pnrx5w/list_of_current_dctls_for_davinci_resolve/).

## Coverage and follow-up

This was a bounded discovery pass across developer megathreads, DCTL recommendations, plugin posts, troubleshooting discussions, and the wiki index. Search results can be incomplete or stale, and no claim is made that all posts or comments were retrieved. Bulk Reddit JSON and two wiki subpages were unavailable.

For repeat research, start with the source threads below, follow their outbound project links, check the original repository and licence, and compare URLs case-insensitively against the CSV before adding entries. Use upstream requirements when they differ from Reddit, and retain unresolved resources as leads.

- [may](https://www.reddit.com/r/davinciresolve/comments/1t0uqd3/may_devtools_monthly_megathread_for_tool_builders/)
- [april](https://www.reddit.com/r/davinciresolve/comments/1se5hyi/april_developertool_creator_thread_building_or/)
- [dctl](https://www.reddit.com/r/davinciresolve/comments/1pnrx5w/list_of_current_dctls_for_davinci_resolve/)
- [linux audio](https://www.reddit.com/r/davinciresolve/comments/1vywcqr/vst_plugins_now_work_in_fairlight_on_linux_i/)
- [agx](https://www.reddit.com/r/davinciresolve/comments/1vo2zmd/dctl_causes_crash_upon_usage_need_help_with/)
- [dwg](https://www.reddit.com/r/davinciresolve/comments/1vq3pk5/studio_version_for_ipad_mini_and_gptune_transform/)
- [resolver](https://www.reddit.com/r/davinciresolve/comments/1qbdbdf/introducing_resolver_a_small_open_source_cli_for/)
- [rename](https://www.reddit.com/r/davinciresolve/comments/1qv4i68/davinci_resolve_bulk_rename_script/)
- [qr](https://www.reddit.com/r/davinciresolve/comments/1tlfbqa/do_you_know_this_open_source_ofx_qr_code_generator/)
- [plugins](https://www.reddit.com/r/davinciresolve/comments/1nxgc8r/the_best_plugins_for_davinci_resolve_2025_that/)
- [recommendations](https://www.reddit.com/r/davinciresolve/comments/1nw4cu6/what_are_the_free_best_plugins_to_install/)
- [rembg](https://www.reddit.com/r/davinciresolve/comments/1mw79tb/free_ai_plugin_for_background_removal_in_resolve/)
- [wiki](https://www.reddit.com/r/davinciresolve/wiki/index/)

Structured provenance: [reddit-discoveries.json](reddit-discoveries.json).
