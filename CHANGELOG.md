# Changelog

Each catalogue update is published as one GitHub release. Every added resource has its own entry in that update. Versions identify catalogue snapshots, not upstream software releases.

## [v1.2](https://github.com/subtlesayak/awesome-resolve/releases/tag/v1.2) — 2026-09-06

### Changed

- Added a **Platforms supported** legend and platform columns to the README and all five sorted catalogue views: 🪟 Windows, 🍎 macOS, 🐧 Linux, 📱 iPadOS, 📖 Reference, and ❔ Unverified.
- Reviewed upstream documentation for platform claims across the 130-entry catalogue. Each entry links to its source and records a separate platform-review date in the CSV. Missing evidence remains unverified.
- Preserved caveats for untested platforms, Apple Silicon requirements, Linux distributions, source-only builds, and server-host support. OS omissions do not imply unsupported platforms.
- Kept all 130 repositories and existing descriptions/access classifications. This update adds no repositories.
- Refreshed stars and latest push dates; normalized push dates to ISO 8601 UTC and added a regression check against locale-formatted timestamps.
- Verified platform rendering, source links, sort order, relative ages, and deterministic regeneration with six passing checks. Platform labels reflect upstream documentation, not installation testing.

## [v1.1](https://github.com/subtlesayak/awesome-resolve/releases/tag/v1.1) — 2026-09-06

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

## [v1.0](https://github.com/subtlesayak/awesome-resolve/releases/tag/v1.0) — 2026-09-06

### Added

The initial catalogue contains **114 public GitHub repositories**, covering all additions before the 16 Reddit discoveries.

#### Color grading, DCTLs, film looks, and color science (27)

- **[thatcherfreeman/utility-dctls](https://github.com/thatcherfreeman/utility-dctls)** — Extensive creative and technical tools for exposure, contrast, saturation, diagnostics, and image effects. Access: Free.
- **[baldavenger/DCTLs](https://github.com/baldavenger/DCTLs)** — Technical transforms, charts, noise, convolution, and grading utilities. Access: Free.
- **[baldavenger/ACES_DCTL](https://github.com/baldavenger/ACES_DCTL)** — ACES color transforms implemented as DCTLs for Resolve Studio. Access: Free.
- **[Demystify-Color/DCTLs](https://github.com/Demystify-Color/DCTLs)** — DCTL tools and examples accompanying color-science tutorials; useful for learning and customization. Access: Free.
- **[xtremestuff/resolve-dctl](https://github.com/xtremestuff/resolve-dctl)** — Technical and utility DCTL library. Access: Public.
- **[xtremestuff/protune-transforms](https://github.com/xtremestuff/protune-transforms)** — GoPro Protune and GP-Log transforms for managed color workflows. Access: Public.
- **[xtremestuff/resolve-aces](https://github.com/xtremestuff/resolve-aces)** — Custom ACES input and output transforms. Access: Public.
- **[MoazElgabry/DCTLs](https://github.com/MoazElgabry/DCTLs)** — Look-development tools including filmic contrast, ratio shaping, localized contrast, and hue controls. Access: Free.
- **[hotgluebanjo/TetraInterp-DCTL](https://github.com/hotgluebanjo/TetraInterp-DCTL)** — Tetrahedral-interpolation-based color manipulation. Access: Public.
- **[npeason/Tetra-DCTLOFX](https://github.com/npeason/Tetra-DCTLOFX)** — Tetrahedral color manipulation through Resolve’s DCTL effect interface. Access: Free.
- **[sobotka/AgX-Resolve](https://github.com/sobotka/AgX-Resolve)** — AgX picture-formation/display transform for Resolve—not simply a film-look LUT. Access: Public.
- **[jedypod/open-display-transform](https://github.com/jedypod/open-display-transform)** — Scene-linear, wide-gamut image rendering for SDR/HDR; includes Resolve Studio DCTLs. Access: Free.
- **[jedypod/gamut-compress](https://github.com/jedypod/gamut-compress)** — Out-of-gamut color handling; includes DCTL and Fusion implementations. Access: Public.
- **[mikaelsundell/photographic-dctls](https://github.com/mikaelsundell/photographic-dctls)** — Photographic color-science experiments involving LogC, Cineon, negative inversion, and tone/color transforms. Access: Public.
- **[Wavechaser/NamiColor](https://github.com/Wavechaser/NamiColor)** — Linearizes film scans and aligns channels for scene-referred grading. Studio required. Access: Free.
- **[fabiocolor/Faded-Balancer-DCTL](https://github.com/fabiocolor/Faded-Balancer-DCTL)** — Rebalances faded film scans. Access: Public.
- **[caryknoop/DCTL](https://github.com/caryknoop/DCTL)** — Diagnostic tools for marking and analyzing image changes through nodes. Access: Free.
- **[jai-panjwani/DCTLS](https://github.com/jai-panjwani/DCTLS)** — Additional Resolve DCTL scripts. Access: Public.
- **[Senthil360/RenderHub-DCTLs](https://github.com/Senthil360/RenderHub-DCTLs)** — Creative and film-look DCTL collection for Resolve Studio. Access: Public.
- **[thatcherfreeman/aces-transforms](https://github.com/thatcherfreeman/aces-transforms)** — Custom ACES input and output transforms. Access: Public.
- **[exones/davinci](https://github.com/exones/davinci)** — Custom Resolve DCTL effects. Access: Free.
- **[Georj01/davinci-dctl](https://github.com/Georj01/davinci-dctl)** — Minimalist DCTL visual tools and effects. Access: Public.
- **[kubabar/DCTLs](https://github.com/kubabar/DCTLs)** — Technical color-space conversion tools, including XYZ conversion. Access: Free.
- **[olduvai-jp/DCTL-MLAA](https://github.com/olduvai-jp/DCTL-MLAA)** — Morphological anti-aliasing in DCTL and Fuse forms. Access: Public.
- **[RichardUffy/Uffy-PhotoChemical-Look-Process-for-DaVinci-Resolve-Studio](https://github.com/RichardUffy/Uffy-PhotoChemical-Look-Process-for-DaVinci-Resolve-Studio)** — Film-look system combining DCTLs, LUTs, and PowerGrades in a Studio/DWG workflow. Access: Public.
- **[lakravana/Martis-Bleach-Bypass](https://github.com/lakravana/Martis-Bleach-Bypass)** — Bleach-bypass-style DCTL look. Access: Public.
- **[shenmintao/V-Log-Alchemy](https://github.com/shenmintao/V-Log-Alchemy)** — Film-look/color tools aimed at V-Log footage. Access: Public.

#### Fusion, motion graphics, visual effects, and package management (22)

- **[Kartaverse/Reactor-Standalone](https://github.com/Kartaverse/Reactor-Standalone)** — Standalone desktop package manager for community Fusion/Resolve tools. Beta; package compatibility varies. Access: Free.
- **[Kartaverse/VonkUltra](https://github.com/Kartaverse/VonkUltra)** — Data-driven and generative node tools for Fusion. Access: Public.
- **[Kartaverse/Kartaverse-Docs](https://github.com/Kartaverse/Kartaverse-Docs)** — KartaVR and immersive-workflow documentation. KartaVR active support ended in January 2026, although packages remain available through Reactor. Access: Free reference.
- **[nmbr73/Shaderfuse](https://github.com/nmbr73/Shaderfuse)** — Shadertoy-style GPU shaders converted into Fusion Fuses. Access: Public.
- **[J-i-P-i/Shadertoys](https://github.com/J-i-P-i/Shadertoys)** — Experimental Shadertoy-to-Fusion shader collection/incubator. Access: Public.
- **[baldavenger/BaldavengerPlugins](https://github.com/baldavenger/BaldavengerPlugins)** — OpenFX image-processing and grading plugins; check older binaries against your system. Access: Public.
- **[ntsc-rs/ntsc-rs](https://github.com/ntsc-rs/ntsc-rs)** — VHS, NTSC, and analog-video effects, including an OpenFX plugin. Access: Free.
- **[gyroflow/gyroflow-plugins](https://github.com/gyroflow/gyroflow-plugins)** — Gyro-data-driven stabilization through OpenFX and other plugin formats. Access: Free.
- **[alexandremendoncaalvaro/CorridorKey-Runtime](https://github.com/alexandremendoncaalvaro/CorridorKey-Runtime)** — Local AI keying with OpenFX, command-line, and desktop interfaces. Check its GPU support matrix. Access: Free.
- **[Akascape/Rembg-Fuse](https://github.com/Akascape/Rembg-Fuse)** — AI background removal inside Fusion using external Python/model dependencies. Access: Free.
- **[Akascape/Super-Style-Transfer-Fuse](https://github.com/Akascape/Super-Style-Transfer-Fuse)** — Neural artistic style transfer inside Fusion. Access: Free.
- **[Akascape/RemObj-Fuse](https://github.com/Akascape/RemObj-Fuse)** — Masked object removal/inpainting using LaMa; README supports Free and Studio. Access: Free.
- **[brunocbreis/FuAlign](https://github.com/brunocbreis/FuAlign)** — Align and distribute visual elements in Fusion compositions. Access: Public.
- **[EmberLightVFX/Tetrahedral-Interpolation-for-Fusion](https://github.com/EmberLightVFX/Tetrahedral-Interpolation-for-Fusion)** — Fusion implementation of tetrahedral color manipulation. Access: Free.
- **[AntonChernov86/Fuses](https://github.com/AntonChernov86/Fuses)** — Custom Fusion Fuse collection. Access: Public.
- **[ChrisRidings/GifSaverFuse](https://github.com/ChrisRidings/GifSaverFuse)** — GIF saving/export from Fusion. Access: Public.
- **[rne1223/DaFusion](https://github.com/rne1223/DaFusion)** — Learning-oriented/sample Fusion Fuses. Access: Free.
- **[Mr-Robby/chat-generator-fuse](https://github.com/Mr-Robby/chat-generator-fuse)** — Animated chat/message overlays. Access: Public.
- **[BasketOfNekos/Midi-based-Animation-Iterator-For-DaVinci-Resolve](https://github.com/BasketOfNekos/Midi-based-Animation-Iterator-For-DaVinci-Resolve)** — Drives Fusion animation from MIDI data. Access: Public.
- **[mrJohnHolt/davinci-resolve-fusion-expressions](https://github.com/mrJohnHolt/davinci-resolve-fusion-expressions)** — Expressions, macros, and reusable visual templates. Access: Public.
- **[EmberLightVFX/Gyroflow-to-CSV](https://github.com/EmberLightVFX/Gyroflow-to-CSV)** — Gyro telemetry export for Fusion camera/data-driven workflows. Access: Public.
- **[raghavdhin/CapitalEase](https://github.com/raghavdhin/CapitalEase)** — Easing presets and live curve editing. Its UI requires Studio on Resolve 19.1+. Access: Free.

#### Subtitles, transcription, dialogue cleanup, and automatic editing (13)

- **[tmoroney/auto-subs](https://github.com/tmoroney/auto-subs)** — Local transcription and styled/animated subtitle workflows, with standalone and Resolve integration. Access: Free.
- **[octimot/StoryToolkitAI](https://github.com/octimot/StoryToolkitAI)** — Transcription, translation, search, and story-oriented editing. Local features are free; direct Resolve integration requires Studio. Access: Free; optional paid services.
- **[david-ca6/Resolve-OpenCaptions](https://github.com/david-ca6/Resolve-OpenCaptions)** — Converts subtitles into editable Text+ clips; explicitly supports Free and Studio. Access: Free.
- **[cutbypham/snap-captions](https://github.com/cutbypham/snap-captions)** — Community Snap Captions distribution and additional caption styles. The older licitfree link redirects here. Access: Public.
- **[veritus-git/BadWords](https://github.com/veritus-git/BadWords)** — Local transcript-based rough cutting, including silence, filler-word, and retake handling. Access: Free.
- **[oliwoli/HushCut](https://github.com/oliwoli/HushCut)** — Silence-based editing helper for Resolve workflows. Access: Public.
- **[YourAverageMo/auto-silence-cut](https://github.com/YourAverageMo/auto-silence-cut)** — Automatic silence cutting with an editable Resolve workflow. Access: Public.
- **[2445868686/DaVinci-Resolve-TTS](https://github.com/2445868686/DaVinci-Resolve-TTS)** — Text-to-speech integrations with external voice providers; provider usage can cost money. Access: Mixed.
- **[2445868686/DaVinci-Resolve-Whisper](https://github.com/2445868686/DaVinci-Resolve-Whisper)** — Whisper transcription through local or cloud-backed workflows. Access: Public; optional service costs.
- **[Nusscookie/clautter](https://github.com/Nusscookie/clautter)** — AI-assisted talking-head cleanup. Beta. A paid installer is planned, while the plugin remains free. Access: Free.
- **[ikm-san/autotitles-community](https://github.com/ikm-san/autotitles-community)** — CLI/API subtitle-to-Fusion-title workflow for Studio. Free for commercial video work, but not open source; separate GUI editions exist. Access: Mixed.
- **[WyattBlue/auto-editor](https://github.com/WyattBlue/auto-editor)** — Standalone automatic editing with NLE timeline-export workflows; not a native Resolve plugin. Access: Public.
- **[JiginJayaprakash/resolve-textplus-srt-importer](https://github.com/JiginJayaprakash/resolve-textplus-srt-importer)** — Imports SRT subtitles as styled Fusion Text+ clips. Access: Free.

#### AI assistants, MCP servers, and ComfyUI integrations (6)

- **[samuelgursky/davinci-resolve-mcp](https://github.com/samuelgursky/davinci-resolve-mcp)** — AI-client access to media, timeline, rendering, and other Resolve operations through MCP. Studio workflow. Access: Public; AI costs separate.
- **[barckley75/resolve-claude-mcp](https://github.com/barckley75/resolve-claude-mcp)** — Claude/MCP integration for Resolve automation. Access: Public; AI costs separate.
- **[apvlv/davinci-resolve-mcp](https://github.com/apvlv/davinci-resolve-mcp)** — Another Resolve/Fusion MCP implementation; capabilities differ from the other servers. Access: Public; AI costs separate.
- **[hoyt-harness/davinci-mcp-professional](https://github.com/hoyt-harness/davinci-mcp-professional)** — MCP automation organized around Resolve workflows/domains. “Professional” is the project name, not proof of a paid license. Access: Public.
- **[barckley75/comfyUI_DaVinciResolve](https://github.com/barckley75/comfyUI_DaVinciResolve)** — ComfyUI nodes connecting generative workflows to Resolve. Access: Public.
- **[CelaviiHQ/cutmaster-ai](https://github.com/CelaviiHQ/cutmaster-ai)** — MCP toolkit and Resolve workflow panel. The public toolkit is separate from the paid CutMaster Studio macOS app. Access: Mixed.

#### Productivity scripts, workflow bridges, and integrations (13)

- **[thatcherfreeman/resolve-scripts](https://github.com/thatcherfreeman/resolve-scripts)** — Everyday Resolve/Fusion automation: timeline, metadata, render, relinking, and other helpers. Access: Public.
- **[X-Raym/DaVinci-Resolve-Scripts](https://github.com/X-Raym/DaVinci-Resolve-Scripts)** — Free scripts for editing, markers, properties, and project workflows. Access: Free.
- **[jjsawdon/DaVinci-Resolve-Utilities](https://github.com/jjsawdon/DaVinci-Resolve-Utilities)** — Proxy/cache utilities, YouTube chapter export, and project-template helpers. Access: Free.
- **[fukco/DaVinciResolveScript](https://github.com/fukco/DaVinciResolveScript)** — Metadata and workflow scripting tools; check separately advertised products independently. Access: Public.
- **[VilleOlof/Toolbox](https://github.com/VilleOlof/Toolbox)** — Modular Resolve productivity toolbox. Archived—treat as legacy. Access: Public.
- **[jdanna/Resolve_Tools_Public](https://github.com/jdanna/Resolve_Tools_Public)** — Free scripts, DCTLs, and Fusion resources. Access: Free.
- **[IgorRidanovic/AfterEffects_to_DaVinci_Resolve](https://github.com/IgorRidanovic/AfterEffects_to_DaVinci_Resolve)** — Brings After Effects renders into Resolve workflows. Access: Public.
- **[IgorRidanovic/DaVinciResolve-DynamicText](https://github.com/IgorRidanovic/DaVinciResolve-DynamicText)** — Dynamic title/text scripting. Access: Public.
- **[FranzWegner/multicam-logger](https://github.com/FranzWegner/multicam-logger)** — Logs camera switching into edit lists for post-production workflows. Access: Public.
- **[eric-with-a-c/resolve-otio](https://github.com/eric-with-a-c/resolve-otio)** — OpenTimelineIO interoperability with Resolve. Access: Public.
- **[tin2tin/VSE_OTIO_Export](https://github.com/tin2tin/VSE_OTIO_Export)** — Blender Video Sequence Editor timeline export through OpenTimelineIO. Access: Public.
- **[MansiVisuals/Font-Scanner-and-Installer-for-DaVinci-Resolve](https://github.com/MansiVisuals/Font-Scanner-and-Installer-for-DaVinci-Resolve)** — Helps locate/install fonts for Resolve workflows. Font licenses remain separate. Access: Free.
- **[LucasHT22/davinci-resolve-wakatime](https://github.com/LucasHT22/davinci-resolve-wakatime)** — WakaTime activity-tracking integration. External service terms are separate. Access: Public + service.

#### Encoding, codecs, proxy generation, rendering, and project servers (9)

- **[EdvinNilsson/ffmpeg_encoder_plugin](https://github.com/EdvinNilsson/ffmpeg_encoder_plugin)** — FFmpeg-powered export/encoding plugin for Resolve Studio. Access: Free.
- **[Toxblh/davinci-linux-aac-codec](https://github.com/Toxblh/davinci-linux-aac-codec)** — AAC encoding plugin for Resolve Studio on Linux. Access: Public.
- **[hexitnz/Resolve-Linux-Studio-AAC-FDK-Encoder-plugin](https://github.com/hexitnz/Resolve-Linux-Studio-AAC-FDK-Encoder-plugin)** — FDK-based AAC audio encoding on Linux. Studio required. Access: Public.
- **[nowrep/dvcp-vaapi](https://github.com/nowrep/dvcp-vaapi)** — VAAPI video encoder plugin. Check hardware, driver, and Resolve requirements. Access: Public.
- **[in03/proxima](https://github.com/in03/proxima)** — Queues, distributes, encodes, and automatically links proxy media across workers. Access: Public.
- **[Puppetworks-Animation-Studio/deadline-davinci-resolve](https://github.com/Puppetworks-Animation-Studio/deadline-davinci-resolve)** — Thinkbox Deadline render-farm integration. Check current compatibility carefully. Access: Public; infrastructure separate.
- **[elliotmatson/Docker-Davinci-Resolve-Project-Server](https://github.com/elliotmatson/Docker-Davinci-Resolve-Project-Server)** — Containerized PostgreSQL project server with automatic backups. Access: Free; infrastructure separate.
- **[sethgoldin/davinci-resolve-postgresql-workflow-tools](https://github.com/sethgoldin/davinci-resolve-postgresql-workflow-tools)** — Automatic project-database backups and maintenance. Access: Public.
- **[jonnyhyman/ResolveCollaboration](https://github.com/jonnyhyman/ResolveCollaboration)** — Utilities extending older live-collaboration workflows; compare against newer native options. Access: Public.

#### Linux installation, compatibility, and troubleshooting (8)

- **[zelikos/davincibox](https://github.com/zelikos/davincibox)** — Containerized Resolve dependencies using Distrobox/Podman; particularly aimed at atomic/image-based distributions. Access: Free.
- **[fat-tire/resolve](https://github.com/fat-tire/resolve)** — Container scripts for building and running Resolve on Linux. Access: Public.
- **[H3rz3n/davinci-helper](https://github.com/H3rz3n/davinci-helper)** — Linux companion utilities for Resolve. Access: Public.
- **[flolu/davinci-resolve-linux](https://github.com/flolu/davinci-resolve-linux)** — Setup instructions and import/export workarounds. Access: Public.
- **[Ashark/davinci-resolve-checker](https://github.com/Ashark/davinci-resolve-checker)** — Checks system configuration and hardware suitability for Resolve. Access: Public.
- **[psygreg/autoresolvedeb](https://github.com/psygreg/autoresolvedeb)** — Automates downloading and repackaging Resolve through MakeResolveDeb. Access: Public.
- **[yioannides/fedora-resolve](https://github.com/yioannides/fedora-resolve)** — Fedora installation scripts. The maintainer warns the method may already be obsolete. Access: Free; legacy warning.
- **[Chillsmeit/resolve-tumbleweed](https://github.com/Chillsmeit/resolve-tumbleweed)** — openSUSE Tumbleweed fixes. Maintainer no longer uses that distribution. Access: Free; maintenance caution.

#### Developer libraries and scripting references (5)

- **[pedrolabonia/pydavinci](https://github.com/pedrolabonia/pydavinci)** — Higher-level Python package for scripting Resolve. Access: Public.
- **[WheheoHu/pybmd](https://github.com/WheheoHu/pybmd)** — Python wrapper around the Resolve API. Access: Public.
- **[diop/davinci-resolve-api](https://github.com/diop/davinci-resolve-api)** — Community Python API documentation. Treat it as a reference, not the latest official SDK. Access: Free reference.
- **[MokshC/easyDCTL](https://github.com/MokshC/easyDCTL)** — Interface/tooling for creating DCTLs. Access: Public.
- **[AndrewHazelden/Fusion-Studio-FuScript-IDE-Tools-and-Pipeline-Scripts](https://github.com/AndrewHazelden/Fusion-Studio-FuScript-IDE-Tools-and-Pipeline-Scripts)** — IDE and pipeline scripting integrations, including macOS/BBEdit-oriented workflows. Access: Public.

#### Hardware, control surfaces, MIDI, and Speed Editor tools (6)

- **[PuzzleEmptyM/Unbound-editor-device-customizer](https://github.com/PuzzleEmptyM/Unbound-editor-device-customizer)** — Remaps controller buttons and jog-wheel actions outside Resolve; Windows/macOS builds. Access: Public; hardware separate.
- **[fashberg/XTouchMini-Davinci-Resolve-Midi-Adapter](https://github.com/fashberg/XTouchMini-Davinci-Resolve-Midi-Adapter)** — Uses a Behringer X-Touch Mini to control Resolve through Windows hotkeys. Access: Public; hardware separate.
- **[RudyB24/AutoHotKey_Bome_MIDI_2_Key](https://github.com/RudyB24/AutoHotKey_Bome_MIDI_2_Key)** — Maps incoming MIDI messages to Resolve keyboard shortcuts. Access: Public; dependencies separate.
- **[shaise/DiSE](https://github.com/shaise/DiSE)** — DIY speed-editor hardware for Resolve and other video-editing applications. Access: Public; build cost.
- **[KipJM/blackmacro-hardware](https://github.com/KipJM/blackmacro-hardware)** — Configurable DIY editing keyboard based on Raspberry Pi Pico 2W. Access: Public; build cost.
- **[derwok/SpeedEditorCheatSheet](https://github.com/derwok/SpeedEditorCheatSheet)** — Printable Speed Editor reference/cheat sheet. Access: Free reference.

#### Directories covering free and commercial products (5)

- **[Greenysmac/awesome-davinci-resolve](https://github.com/Greenysmac/awesome-davinci-resolve)** — Broad community directory spanning AI tools, audio, DCTLs, effects, templates, and workflows. Access: Free/paid product directory.
- **[cutbypham/awesome-davinci-resolve](https://github.com/cutbypham/awesome-davinci-resolve)** — Plugins, scripts, assets, and editing resources. Bundled copies may be older than upstream releases. Access: Free/paid resource directory.
- **[Akascape/PluginLibrary-Resolve](https://github.com/Akascape/PluginLibrary-Resolve)** — Launcher/catalogue linking to free and commercial plugins; it does not grant paid-product licenses. Access: Mixed.
- **[hassaancode/Fx-Library](https://github.com/hassaancode/Fx-Library)** — Resolve/After Effects effects and creative-resource directory. Access: Mixed.
- **[CommandPost/ResolveCafe](https://github.com/CommandPost/ResolveCafe)** — Community references, developer material, and website source. Archived in May 2025. Access: Free reference; archived.

### Catalogue features

- Categorized README and downloadable CSV with descriptions, access labels, GitHub stars, and repository push dates.
- Five sorted views: latest updated, name, type, stars, and access.
- Emoji labels, access badges, compatibility notes, and contribution guidance.

### Scope

This release points to the final 114-repository snapshot before the Reddit additions. Research descriptions and compatibility claims were imported from the supplied catalogue; listings are not installation tests or security audits.
