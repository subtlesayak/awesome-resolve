# 🔎 Web discovery report — 6 September 2026

[← Main catalogue](../README.md) · [🌐 Tools beyond GitHub](external-tools.md) · [Structured evidence](web-discoveries.json)

Added **95 repositories**, taking the catalogue from **130 to 225**. The fourteen GitHub API searches below returned **741 distinct repository results** after case-insensitive deduplication. A shortlist of **107 repositories** received upstream metadata/README review: 95 were added and 12 were held or replaced by successors. The separate external directory covers **11 official destinations**, including overlapping collections; it is not an additional repository count.

## Search coverage

Searches covered color science/DCTLs, Fusion Fuses and macros, subtitles and beat detection, OFX, workflow scripting, encoding and project servers, Linux compatibility, developer APIs, control surfaces, and AI integrations. General web results led to original repositories and developer websites. Blackmagic/We Suck Less community links and the existing Reddit findings provided additional discovery paths. The canonical Reactor GitLab repository was checked, but its Atom tree returned a loading shell; no complete Atom-package scrape is claimed. Codeberg-focused queries did not produce a verified addition.

GitHub searches requested up to 100 repositories per query, sorted by stars descending. Reported matches are GitHub's counts at retrieval, not numbers read or verified. Large result sets were capped, so this can miss low-star projects. Web indexes, private/deleted repositories, search ranking, inaccessible pages, and unindexed forum posts prevent exhaustive coverage. No software was downloaded for execution or installation-tested.

| GitHub search | Reported matches | Retrieved |
| --- | ---: | ---: |
| [topic:davinci-resolve fork:false](https://github.com/search?type=repositories&q=topic%3Adavinci-resolve%20fork%3Afalse) | 311 | 100 |
| [topic:dctl fork:false](https://github.com/search?type=repositories&q=topic%3Adctl%20fork%3Afalse) | 37 | 37 |
| [davinci resolve scripts fork:false](https://github.com/search?type=repositories&q=davinci%20resolve%20scripts%20fork%3Afalse) | 312 | 100 |
| [fusion fuse blackmagic fork:false](https://github.com/search?type=repositories&q=fusion%20fuse%20blackmagic%20fork%3Afalse) | 6 | 6 |
| [resolve plugin fork:false](https://github.com/search?type=repositories&q=resolve%20plugin%20fork%3Afalse) | 1560 | 100 |
| [davinci subtitle fork:false](https://github.com/search?type=repositories&q=davinci%20subtitle%20fork%3Afalse) | 47 | 47 |
| [davinci workflow integration fork:false](https://github.com/search?type=repositories&q=davinci%20workflow%20integration%20fork%3Afalse) | 16 | 16 |
| [davinci resolve linux fork:false](https://github.com/search?type=repositories&q=davinci%20resolve%20linux%20fork%3Afalse) | 175 | 100 |
| [dctl in:name fork:false](https://github.com/search?type=repositories&q=dctl%20in%3Aname%20fork%3Afalse) | 199 | 100 |
| [blackmagic fusion in:description fork:false](https://github.com/search?type=repositories&q=blackmagic%20fusion%20in%3Adescription%20fork%3Afalse) | 47 | 47 |
| [davinci resolve ofx fork:false](https://github.com/search?type=repositories&q=davinci%20resolve%20ofx%20fork%3Afalse) | 38 | 38 |
| ["DaVinci Resolve" language:Lua fork:false](https://github.com/search?type=repositories&q=%22DaVinci%20Resolve%22%20language%3ALua%20fork%3Afalse) | 104 | 100 |
| ["DaVinci Resolve" language:Python stars:>=3 fork:false](https://github.com/search?type=repositories&q=%22DaVinci%20Resolve%22%20language%3APython%20stars%3A%3E%3D3%20fork%3Afalse) | 165 | 100 |
| [davinci resolve controller fork:false](https://github.com/search?type=repositories&q=davinci%20resolve%20controller%20fork%3Afalse) | 10 | 10 |

Representative web queries are recorded in the structured evidence file. Primary websites inspected include [Resolve Tools](https://resolve-tools.com/), [PostFlows](https://postflows.github.io/), [Retrograde Tools](https://retrograde.tools/tools), [Reactor](https://gitlab.com/WeSuckLess/Reactor), [Krokodove](https://www.komkomdoorn.com/krokodove/), [PixelTools](https://pixeltoolspost.com/collections/free-tools), [Meta Fide](https://www.metafide.com/?product=computer-vision), [MrAlexTech](https://www.mralextech.com/), [709 Media Room](https://709mediaroom.com/en/new-davinci-dctls-available-for-free-download/), [Shutter Encoder](https://www.shutterencoder.com/), and [Voukoder](https://www.voukoder.org/).

## Verification and deduplication

Repository identity, stars, latest push, archival status, and GitHub-recognized licensing were checked through the GitHub API. Purposes, requirements, and platform statements were checked against upstream README documentation. Explicit free-use or license statements can establish a Free label even when GitHub's license detector returns null or NOASSERTION; this distinction is recorded in each access qualifier and the ledger. Public means accessible source, not a license grant. GitHub's fork flag alone is insufficient: distinct ports are described as ports and unchanged mirrors are held.

Repository URLs were compared case-insensitively with all 130 existing entries and with one another. Already-listed projects such as jdanna/Resolve_Tools_Public, gyroflow/gyroflow-plugins, Kartaverse/Reactor-Standalone, and the earlier Reddit additions were not counted again. Supersession was followed to the canonical project when it could be verified. Earlier catalogue descriptions retain their existing research status; only metadata was refreshed across the whole list.

The CSV contains exact UTC push times. Human-readable ages, such as “1 week back”, are calculated at the metadata-check timestamp. “Last updated” is a repository push, not a release or a promise of active maintenance. Platform review dates remain separate; absent evidence is marked ❔ Unverified. Upstream version claims are reported as documentation, not independent compatibility tests.

## New repositories

Each repository and platform link below is a primary-source link. The ledger records discovery queries and source sites separately.

### 🎨 Color / DCTL

| Repository | Purpose / caveats | Access | Platform evidence |
| --- | --- | --- | --- |
| [50asa/shitsukan-diffusion-kit](https://github.com/50asa/shitsukan-diffusion-kit) | Shitsukan multi-tap optical diffusion DCTL kit. Requires Resolve Studio and a scene-linear, four-tap blur node setup. | Free; MIT stated upstream | [Windows, macOS, Linux](https://github.com/50asa/shitsukan-diffusion-kit#readme) |
| [bobtronic73/free-DCTL](https://github.com/bobtronic73/free-DCTL) | 3x3 color-matrix and inverse-matrix DCTLs with a reusable color-math header. | Free | [Unverified](https://github.com/bobtronic73/free-DCTL#readme) — OS support not established by the reviewed documentation. |
| [ciqueira/ColorEqualizer](https://github.com/ciqueira/ColorEqualizer) | Ten-band hue, saturation, and brightness OpenFX equalizer inspired by darktable. Requires a free GitHub-linked activation key through MCNexus. | Free; source-available, activation required | [Windows, macOS](https://github.com/ciqueira/ColorEqualizer#readme) — Windows x64 and macOS Intel/Apple Silicon documented. |
| [geoffsmithBK/primera-suite](https://github.com/geoffsmithBK/primera-suite) | Primera grading suite for exposure, contrast, hue, split toning, and skin adjustments. Resolve Studio; follow the color-managed input requirements. | Free | [Unverified](https://github.com/geoffsmithBK/primera-suite#readme) — OS support not established by the reviewed documentation. |
| [helios1138/filmeon](https://github.com/helios1138/filmeon) | Filmeon color-negative inversion DCTL for linear scans. Original DCTL workflow has been superseded by the developer's standalone web application. | Public | [Windows, macOS](https://github.com/helios1138/filmeon#readme) — DCTL installation documented; use non-color-managed linear scan input. |
| [JuanPabloZambrano/DCTL](https://github.com/JuanPabloZambrano/DCTL) | Creative and technical DCTLs and Fusion Fuses, including the 2499 display rendering transform. | Public | [Windows, macOS](https://github.com/JuanPabloZambrano/DCTL#readme) — Installation paths documented; individual tools have separate requirements. |
| [KaurHendrikson/DaVinci-Resolve-DCTLs](https://github.com/KaurHendrikson/DaVinci-Resolve-DCTLs) | DCTL boilerplates, reusable code snippets, example effects, and camera/intermediate transfer functions. | Free | [Windows, macOS, Linux](https://github.com/KaurHendrikson/DaVinci-Resolve-DCTLs#readme) |
| [LCS-VSP/LCS-DCTLs](https://github.com/LCS-VSP/LCS-DCTLs) | Creative color-science DCTL collection shared by LCS-VSP. Consult individual tools for working-space requirements. | Public | [Unverified](https://github.com/LCS-VSP/LCS-DCTLs#readme) — OS support not established by the reviewed documentation. |
| [Lo1s-pgn/Simple-LUT-Generator](https://github.com/Lo1s-pgn/Simple-LUT-Generator) | OpenFX pair for generating a color grid and exporting sampled LUTs. LUTs cannot faithfully capture spatial or temporal effects. | Free | [Windows, macOS](https://github.com/Lo1s-pgn/Simple-LUT-Generator#readme) — Windows and macOS 11+ universal builds. |
| [MoazElgabry/ME_OpenDRT-OFX](https://github.com/MoazElgabry/ME_OpenDRT-OFX) | OpenDRT 1.1 port to OpenFX with UI controls and presets. | Free | [Windows, macOS, Linux](https://github.com/MoazElgabry/ME_OpenDRT-OFX#readme) — GPU backend varies by OS; macOS Intel and Apple Silicon documented. |
| [nikita-petrovich/np-public-dctl](https://github.com/nikita-petrovich/np-public-dctl) | Experimental Lazy Bleach, Lazy Grain, and saturation DCTLs. Resolve Studio 19.1+; proof-of-concept tools. | Free | [Windows, macOS, Linux](https://github.com/nikita-petrovich/np-public-dctl#readme) — NVIDIA and Apple Silicon documented; other GPUs are untested. |
| [OwenYou/DavinciResolveDCTL_ChromaticAdaptation](https://github.com/OwenYou/DavinciResolveDCTL_ChromaticAdaptation) | Chromatic-adaptation DCTL. Upstream testing covers Resolve 15; current-version compatibility unverified. | Free | [Unverified](https://github.com/OwenYou/DavinciResolveDCTL_ChromaticAdaptation#readme) — OS support not established by the reviewed documentation. |
| [OwenYou/DavinciResolveDCTL_HKEstimation](https://github.com/OwenYou/DavinciResolveDCTL_HKEstimation) | Helmholtz-Kohlrausch effect estimation and compensation using four methods. Requires ACES2065-1 AP0/linear input; documented for Resolve 17. | Free | [Unverified](https://github.com/OwenYou/DavinciResolveDCTL_HKEstimation#readme) — OS support not established by the reviewed documentation. |
| [OwenYou/DavinciResolveDCTL_RemoveColorMask](https://github.com/OwenYou/DavinciResolveDCTL_RemoveColorMask) | Interactive film color-mask removal DCTL. Upstream testing covers Resolve 15; current-version compatibility unverified. | Free | [Unverified](https://github.com/OwenYou/DavinciResolveDCTL_RemoveColorMask#readme) — OS support not established by the reviewed documentation. |
| [ra100/dctl-utils](https://github.com/ra100/dctl-utils) | Skin-tone indicator DCTL with hue, saturation, and luminance tolerances. | Free | [Unverified](https://github.com/ra100/dctl-utils#readme) — OS support not established by the reviewed documentation. |

### ✨ Fusion / VFX

| Repository | Purpose / caveats | Access | Platform evidence |
| --- | --- | --- | --- |
| [andrewbry/DasGrainFusion](https://github.com/andrewbry/DasGrainFusion) | Experimental Fusion port of DasGrain. Incomplete features and known analysis/Lua issues remain. | Free | [Unverified](https://github.com/andrewbry/DasGrainFusion#readme) — OS support not established by the reviewed documentation. |
| [brunocbreis/SplitScreener](https://github.com/brunocbreis/SplitScreener) | SplitScreener layout generator producing Fusion compositions for split-screen grids; distinct from its in-composition script version. | Public | [Unverified](https://github.com/brunocbreis/SplitScreener#readme) — OS support not established by the reviewed documentation. |
| [brunocbreis/SS-CompScript](https://github.com/brunocbreis/SS-CompScript) | In-composition SplitScreener interface for arranging Fusion split-screen layouts. Beta documentation targets Resolve/Fusion 18. | Public | [Windows, macOS](https://github.com/brunocbreis/SS-CompScript#readme) |
| [bryab/fusion-for-cartoons](https://github.com/bryab/fusion-for-cartoons) | Fusion macros for cartoon and animation compositing, including procedural rim-light masks. | Public | [Unverified](https://github.com/bryab/fusion-for-cartoons#readme) — OS support not established by the reviewed documentation. |
| [Dec18studios/Dec18-Plugin-Manager](https://github.com/Dec18studios/Dec18-Plugin-Manager) | Plugin download/update manager with hash checks and backups. Individual plugins have separate licenses and may be paid. | Mixed; plugin licenses separate | [Windows, macOS, Linux](https://github.com/Dec18studios/Dec18-Plugin-Manager#readme) |
| [Demystify-Color/DMC-BaldavengerOFX-MacOSarm64](https://github.com/Demystify-Color/DMC-BaldavengerOFX-MacOSarm64) | Baldavenger OpenFX collection rebuilt as macOS universal binaries. A distinct distribution port of the original plugins. | Free | [macOS](https://github.com/Demystify-Color/DMC-BaldavengerOFX-MacOSarm64#readme) — Intel and Apple Silicon universal builds. |
| [fabiof17/Fusion-tools](https://github.com/fabiof17/Fusion-tools) | Fusion macros including color compression and expansion helpers. | Public | [Unverified](https://github.com/fabiof17/Fusion-tools#readme) — OS support not established by the reviewed documentation. |
| [hiroshisaito/HS_fusionTools](https://github.com/hiroshisaito/HS_fusionTools) | Environment relighting and latlong/angular image-mapping macros. | Free | [Windows, macOS, Linux](https://github.com/hiroshisaito/HS_fusionTools#readme) — Tested in Fusion 16; upstream describes Resolve compatibility as probable, not verified. |
| [Kartopod/BMD-FusionExtras](https://github.com/Kartopod/BMD-FusionExtras) | Fusion quality-of-life scripts including Blender-style viewer transform shortcuts and node workflow helpers. | Free | [Unverified](https://github.com/Kartopod/BMD-FusionExtras#readme) — OS support not established by the reviewed documentation. |
| [LudwigKienle/buckswood-post-plugins](https://github.com/LudwigKienle/buckswood-post-plugins) | Buckswood OpenFX/DCTL collection for lens effects, film emulation, cinematic effects, and debanding. Check current public release assets. | Free; original code MIT, third-party terms separate | [Windows, macOS](https://github.com/LudwigKienle/buckswood-post-plugins#readme) — Resolve build targets documented; Linux references apply to Baselight, not confirmed Resolve support. |
| [Microck/boilify](https://github.com/Microck/boilify) | Line-boil OpenFX effect for hand-drawn jitter. Resolve Studio 20+ documented. | Free | [Windows, macOS, Linux](https://github.com/Microck/boilify#readme) |
| [murtazatunio/lenscorrect-ofx](https://github.com/murtazatunio/lenscorrect-ofx) | Lensfun/DNG-based lens distortion, vignetting, and lateral chromatic-aberration correction OpenFX. | Free | [macOS](https://github.com/murtazatunio/lenscorrect-ofx#readme) — macOS 12+ on Apple Silicon only; Windows is planned. |
| [neezr/Anchor-Point-Corners-for-DaVinci-Resolve](https://github.com/neezr/Anchor-Point-Corners-for-DaVinci-Resolve) | Set Fusion anchor points to corners and edges. Studio instructions; timeline keyframes are unsupported. | Public | [Windows, macOS, Linux](https://github.com/neezr/Anchor-Point-Corners-for-DaVinci-Resolve#readme) |
| [neezr/Auto-Rename-for-DaVinci-Resolve](https://github.com/neezr/Auto-Rename-for-DaVinci-Resolve) | Auto-rename Fusion MediaIn, Background, Text, and MultiMerge nodes based on their contents. | Public | [Windows, macOS, Linux](https://github.com/neezr/Auto-Rename-for-DaVinci-Resolve#readme) |
| [purzbeats/purzos-ofx](https://github.com/purzbeats/purzos-ofx) | Purzos collection of retro, analog, glitch, CRT, and VHS OpenFX effects. | Free; MIT stated upstream | [Windows, macOS, Linux](https://github.com/purzbeats/purzos-ofx#readme) — Windows/Linux x64 and macOS ARM64 packages; macOS builds are unsigned. |
| [silverqsy/cine-immersive-stabilizer](https://github.com/silverqsy/cine-immersive-stabilizer) | Convert URSA Cine Immersive BRAW gyro/IMU data into Fusion PanoMap rotation keyframes. | Public | [macOS](https://github.com/silverqsy/cine-immersive-stabilizer#readme) — macOS 13+ on Apple Silicon documented. |
| [Spicy-Acorn/fusionjson](https://github.com/Spicy-Acorn/fusionjson) | Fusion nodes for JSON file reading, writing, and value manipulation. | Free | [Unverified](https://github.com/Spicy-Acorn/fusionjson#readme) — OS support not established by the reviewed documentation. |
| [Spicy-Acorn/fusionmatrix](https://github.com/Spicy-Acorn/fusionmatrix) | Fusion matrix-math Fuse library; requires the separate lua-matrix dependency. | Free | [Unverified](https://github.com/Spicy-Acorn/fusionmatrix#readme) — OS support not established by the reviewed documentation. |
| [Spicy-Acorn/fusionnumber](https://github.com/Spicy-Acorn/fusionnumber) | Fusion numeric arithmetic nodes exposed as a Fuse library. | Free | [Unverified](https://github.com/Spicy-Acorn/fusionnumber#readme) — OS support not established by the reviewed documentation. |
| [Spicy-Acorn/fusiontext](https://github.com/Spicy-Acorn/fusiontext) | Fusion Fuse nodes for string creation, joining, formatting, and length operations. | Free | [Unverified](https://github.com/Spicy-Acorn/fusiontext#readme) — OS support not established by the reviewed documentation. |
| [Spicy-Acorn/fusionvector](https://github.com/Spicy-Acorn/fusionvector) | Fusion vector-math nodes; requires the FusionMatrix dependency. | Free | [Unverified](https://github.com/Spicy-Acorn/fusionvector#readme) — OS support not established by the reviewed documentation. |
| [VladasTamosiunas/GPX-Visualization-Davinci](https://github.com/VladasTamosiunas/GPX-Visualization-Davinci) | Generate Fusion map and GPS-track overlays from GPX data synchronized to video. | Free | [Windows, macOS, Linux](https://github.com/VladasTamosiunas/GPX-Visualization-Davinci#readme) |

### 💬 Captions / Editing

| Repository | Purpose / caveats | Access | Platform evidence |
| --- | --- | --- | --- |
| [acrilique/automarker-clay](https://github.com/acrilique/automarker-clay) | Music-tempo beat detection and timeline markers for Resolve Studio, Premiere Pro, and After Effects. Successor to the archived AutoMarker. | Free | [Windows, macOS, Linux](https://github.com/acrilique/automarker-clay#readme) — Linux AppImage exists, but upstream discourages Linux use because testing is limited. |
| [atmosfar/srt_to_textplus](https://github.com/atmosfar/srt_to_textplus) | Generate animated Fusion TextPlus titles from SRT subtitles. Legacy external Python 2.7 workflow. | Public | [Unverified](https://github.com/atmosfar/srt_to_textplus#readme) — OS support not established by the reviewed documentation. |
| [in03/squawk](https://github.com/in03/squawk) | Archived Whisper subtitle integration that renders timeline audio, transcribes it, and imports subtitles. Resolve 18 only; no longer maintained. | Free; archived | [Unverified](https://github.com/in03/squawk#readme) — OS support not established by the reviewed documentation. |
| [postflows/resolve-text-index](https://github.com/postflows/resolve-text-index) | Search, edit, and CSV-round-trip Text+, MultiText, and subtitle text. Studio 20+, Python/PySide6; optional LanguageTool spell-check uses a local server or public API. | Free | [Windows, macOS](https://github.com/postflows/resolve-text-index#readme) |
| [randyrektor/DaVinci-Gate](https://github.com/randyrektor/DaVinci-Gate) | Analyze per-speaker podcast silence and rebuild gated audio tracks after preview. Requires Resolve 20+ and FFmpeg. | Public | [Windows, macOS, Linux](https://github.com/randyrektor/DaVinci-Gate#readme) |

### 🤖 AI / MCP

| Repository | Purpose / caveats | Access | Platform evidence |
| --- | --- | --- | --- |
| [wassermanproductions/unofficial-davinci-mcp](https://github.com/wassermanproductions/unofficial-davinci-mcp) | MCP integration with live Studio control and a Free-edition interchange workflow using FCPXML/LUTs. Studio 21 verified upstream. | Free | [macOS, Linux](https://github.com/wassermanproductions/unofficial-davinci-mcp#readme) |
| [WDegan/metafootage-davinci-resolve](https://github.com/WDegan/metafootage-davinci-resolve) | Generate footage keywords and descriptions using Gemini or OpenAI. Selected frames are sent to the provider; API usage may cost extra. | Free; external API fees may apply | [Windows, macOS, Linux](https://github.com/WDegan/metafootage-davinci-resolve#readme) |

### 🛠️ Workflow / Scripts

| Repository | Purpose / caveats | Access | Platform evidence |
| --- | --- | --- | --- |
| [ambustion/BSafe_Resolve](https://github.com/ambustion/BSafe_Resolve) | Scan rendered video for broadcast-safe exceptions and generate reports, markers, and previews. | Free | [Unverified](https://github.com/ambustion/BSafe_Resolve#readme) — OS support not established by the reviewed documentation. |
| [ambustion/CDL2Resolve](https://github.com/ambustion/CDL2Resolve) | Import folders of CDL color decisions into a Resolve timeline. | Free | [Unverified](https://github.com/ambustion/CDL2Resolve#readme) — OS support not established by the reviewed documentation. |
| [ambustion/Useful.Resolve](https://github.com/ambustion/Useful.Resolve) | Colorist workflow helpers including gallery still capture at markers. Legacy Python 3.6-era setup. | Free | [Unverified](https://github.com/ambustion/Useful.Resolve#readme) — OS support not established by the reviewed documentation. |
| [bryanrandell/DaVinci-Resolve-LUT-Explorer](https://github.com/bryanrandell/DaVinci-Resolve-LUT-Explorer) | Preview LUTs on current footage through a dedicated explorer. Upstream specifies Resolve 17.x only. | Free | [Windows, macOS](https://github.com/bryanrandell/DaVinci-Resolve-LUT-Explorer#readme) |
| [bryanrandell/DaVinci-Resolve-Timeline-Utility](https://github.com/bryanrandell/DaVinci-Resolve-Timeline-Utility) | List, filter, and switch Resolve timelines. Documentation targets Resolve 17 and FFmpeg 5.0. | Free | [Windows, macOS](https://github.com/bryanrandell/DaVinci-Resolve-Timeline-Utility#readme) |
| [ChristyKail/resolve_auto_import](https://github.com/ChristyKail/resolve_auto_import) | Finder Quick Action that imports camera rolls into bins and creates per-card timelines. Studio external scripting; tested 19.0.3–20.2.2. | Public | [macOS](https://github.com/ChristyKail/resolve_auto_import#readme) |
| [deric/DaVinciResolve-metadata](https://github.com/deric/DaVinciResolve-metadata) | Synchronize camera EXIF metadata into the Resolve Media Pool using ExifTool. | Free | [Windows, macOS, Linux](https://github.com/deric/DaVinciResolve-metadata#readme) |
| [h9d6hrbzyn-debug/Marker-Madness-Suite-for-Davinci-Resolve](https://github.com/h9d6hrbzyn-debug/Marker-Madness-Suite-for-Davinci-Resolve) | Five-tool suite for marker management, clip renaming, tracks, running-time planning, and clip collection. Upstream claims Resolve 18+ Free/Studio; Python 3 required for scripts. | Free; upstream download terms | [Windows, macOS](https://github.com/h9d6hrbzyn-debug/Marker-Madness-Suite-for-Davinci-Resolve#readme) |
| [heyJordanParker/resolve-advanced-importer](https://github.com/heyJordanParker/resolve-advanced-importer) | Watch a folder and import new media into a selected Resolve bin. Requires external scripting enabled locally. | Free | [Unverified](https://github.com/heyJordanParker/resolve-advanced-importer#readme) — OS support not established by the reviewed documentation. |
| [horshack-dpreview/RefreshResolveMedia](https://github.com/horshack-dpreview/RefreshResolveMedia) | Force Resolve to refresh stale media after files are edited outside Resolve. | Free | [Windows, macOS](https://github.com/horshack-dpreview/RefreshResolveMedia#readme) |
| [IgorRidanovic/ChangeClipTimecode](https://github.com/IgorRidanovic/ChangeClipTimecode) | Batch-change source clip start timecodes in the current bin. Requires Resolve Studio. | Free | [Unverified](https://github.com/IgorRidanovic/ChangeClipTimecode#readme) — OS support not established by the reviewed documentation. |
| [IgorRidanovic/DaVinciResolve-ClipLister](https://github.com/IgorRidanovic/DaVinciResolve-ClipLister) | Export bin clip metadata as CSV or HTML. Legacy example of the Resolve 15 scripting API. | Free | [Unverified](https://github.com/IgorRidanovic/DaVinciResolve-ClipLister#readme) — OS support not established by the reviewed documentation. |
| [in03/snapper](https://github.com/in03/snapper) | Timeline snapshot utility using the Resolve scripting API. Studio with local scripting; current documentation targets Resolve 18. | Free | [Unverified](https://github.com/in03/snapper#readme) — OS support not established by the reviewed documentation. |
| [oliwiergesla/editorscripts](https://github.com/oliwiergesla/editorscripts) | Lua workflow suite for marker reports, stills, renaming, reframing, nodes, settings, and script launching. Resolve Studio 20+. | Free | [Windows, macOS](https://github.com/oliwiergesla/editorscripts#readme) — Linux is explicitly untested. |
| [Poechant/davinci-resolve-cli](https://github.com/Poechant/davinci-resolve-cli) | Command-line control of Resolve projects, media, timelines, and rendering. Resolve 18+; Studio recommended. | Free | [Windows, macOS, Linux](https://github.com/Poechant/davinci-resolve-cli#readme) — macOS is the primary verified environment; Windows/Linux real-Resolve smoke tests remain pending; Linux needs Studio. |
| [postflows/Fusion-MediaIn-ID-Update-](https://github.com/postflows/Fusion-MediaIn-ID-Update-) | Repair Fusion MediaIn IDs after transferring projects by matching files in the current Media Pool. Filename collisions can choose the wrong source. | Free; MIT stated upstream | [Windows, macOS, Linux](https://github.com/postflows/Fusion-MediaIn-ID-Update-#readme) |
| [postflows/resolve-batch-rename](https://github.com/postflows/resolve-batch-rename) | Batch-rename Media Pool clips and timelines with previews, counters, and filename restoration. Resolve Studio 20+. | Free | [Windows, macOS](https://github.com/postflows/resolve-batch-rename#readme) |
| [postflows/resolve-clip-marker-tool](https://github.com/postflows/resolve-clip-marker-tool) | Create and modify clip/duration markers by clip type, track, and color. Resolve Studio 20+. | Free | [Windows, macOS](https://github.com/postflows/resolve-clip-marker-tool#readme) |
| [postflows/resolve-find-clip-on-timelines](https://github.com/postflows/resolve-find-clip-on-timelines) | Find a Media Pool clip across all project timelines and highlight matching instances. Resolve Studio 20+. | Free | [Windows, macOS](https://github.com/postflows/resolve-find-clip-on-timelines#readme) |
| [postflows/resolve-font-fallback](https://github.com/postflows/resolve-font-fallback) | Detect and replace missing Text+/MultiText fonts with restoration tags. Resolve Studio 20+; optional pyperclip for clipboard export. | Free | [Windows, macOS](https://github.com/postflows/resolve-font-fallback#readme) |
| [postflows/resolve-marker-metadata-workflow](https://github.com/postflows/resolve-marker-metadata-workflow) | Export markers, clip metadata, and optional stills for CSV/HTML review; import feedback into marker notes/colors. Studio 20+. | Free | [Windows, macOS](https://github.com/postflows/resolve-marker-metadata-workflow#readme) — Linux is untested; still capture requires upstream gallery-label settings. |
| [postflows/resolve-media-organizer](https://github.com/postflows/resolve-media-organizer) | Organize Media Pool clips into bins by type and keyword, with optional empty-bin cleanup. Resolve Studio 20+. | Free | [Windows, macOS](https://github.com/postflows/resolve-media-organizer#readme) |
| [postflows/resolve-multicam-angle-colorizer](https://github.com/postflows/resolve-multicam-angle-colorizer) | Color-code multicam clips by camera-angle names on audio/video tracks. Resolve Studio 20+. | Free | [Windows, macOS](https://github.com/postflows/resolve-multicam-angle-colorizer#readme) |
| [postflows/resolve-timeline-creator](https://github.com/postflows/resolve-timeline-creator) | Create timelines from track-count, track-name, and start-timecode presets. Requires Resolve Studio. | Free | [Windows, macOS](https://github.com/postflows/resolve-timeline-creator#readme) |
| [postflows/resolve-title-manager](https://github.com/postflows/resolve-title-manager) | Copy selected Text+ styles and Fusion macro parameters across clips. Studio required; selected-clip sourcing needs 21.0.4+, with playhead fallback on older versions. | Free | [Windows, macOS](https://github.com/postflows/resolve-title-manager#readme) |
| [postflows/resolve-vfx-marker-tool](https://github.com/postflows/resolve-vfx-marker-tool) | Create VFX shot markers with naming templates and sequential/intermediate numbering. Resolve Studio 20+. | Free | [Windows, macOS](https://github.com/postflows/resolve-vfx-marker-tool#readme) |
| [tonyflo/videoflo](https://github.com/tonyflo/videoflo) | Python helpers for organizing and automating YouTube video production in Resolve. | Public | [Unverified](https://github.com/tonyflo/videoflo#readme) — OS support not established by the reviewed documentation. |
| [ynput/ayon-resolve](https://github.com/ynput/ayon-resolve) | Resolve integration addon for the AYON production pipeline. Requires an AYON deployment; infrastructure terms are separate. | Free; AYON infrastructure separate | [Unverified](https://github.com/ynput/ayon-resolve#readme) — OS support not established by the reviewed documentation. |

### 🎞️ Encoding / Servers

| Repository | Purpose / caveats | Access | Platform evidence |
| --- | --- | --- | --- |
| [austinwitherspoon/resolve-bulk-exporter](https://github.com/austinwitherspoon/resolve-bulk-exporter) | Queue multiple timelines for bulk export using the Resolve Python API. | Free | [Windows](https://github.com/austinwitherspoon/resolve-bulk-exporter#readme) — Tested only on Windows 10 with Resolve 17 Studio. |
| [ctsrc/ffmpeg-extract-clips-davinci-resolve-edl](https://github.com/ctsrc/ffmpeg-extract-clips-davinci-resolve-edl) | Rust/FFmpeg utility that extracts source clip ranges from a Resolve EDL. Documentation targets Resolve 16. | Free | [Unverified](https://github.com/ctsrc/ffmpeg-extract-clips-davinci-resolve-edl#readme) — OS support not established by the reviewed documentation. |
| [IgorRidanovic/DaVinciResolve-ExportProjects](https://github.com/IgorRidanovic/DaVinciResolve-ExportProjects) | Export projects as DRP files and then DELETE the source projects from the project manager. Resolve Studio 16+; this is a destructive archive/move workflow. | Free | [Unverified](https://github.com/IgorRidanovic/DaVinciResolve-ExportProjects#readme) — OS support not established by the reviewed documentation. |
| [IgorRidanovic/Resolve-backup-Postgres](https://github.com/IgorRidanovic/Resolve-backup-Postgres) | PostgreSQL backup scripts for Resolve project databases. Legacy documentation warns about cross-OS restoration limitations. | Free | [Windows, macOS, Linux](https://github.com/IgorRidanovic/Resolve-backup-Postgres#readme) |
| [in03/patchwork](https://github.com/in03/patchwork) | Early prototype for patching changed render segments with Resolve and FFmpeg. Roadmap still lists codec patching and automatic change detection as unfinished. | Free; prototype | [Unverified](https://github.com/in03/patchwork#readme) — OS support not established by the reviewed documentation. |
| [lightsailvr/ResolveOFX_NDIOutput](https://github.com/lightsailvr/ResolveOFX_NDIOutput) | NDI HDR network-video output through OpenFX. Resolve 17+; building from source requires the NDI Advanced SDK. | Free; SDK terms separate | [Windows, macOS](https://github.com/lightsailvr/ResolveOFX_NDIOutput#readme) — Windows 10/11 x64; macOS 13+ Intel/Apple Silicon. |
| [postflows/resolve-markers-to-render-queue](https://github.com/postflows/resolve-markers-to-render-queue) | Queue renders from single or duration markers, with naming presets and per-render folders. Requires Studio and a configured render preset. | Free | [Windows, macOS](https://github.com/postflows/resolve-markers-to-render-queue#readme) |
| [veryqiang/footbrake](https://github.com/veryqiang/footbrake) | Archived GUI for media/timeline automation, rendering, transcoding, and XML/AAF workflows. | Free; archived | [macOS](https://github.com/veryqiang/footbrake#readme) — Legacy testing covers macOS 10.15 and Resolve 16.1.2/16.2 only. |
| [walter-arrighetti/ResolveDB_backup](https://github.com/walter-arrighetti/ResolveDB_backup) | Scheduled PostgreSQL project-server backups. Requires server administration and matching PostgreSQL configuration. | Free | [Windows, macOS, Linux](https://github.com/walter-arrighetti/ResolveDB_backup#readme) |

### 🐧 Linux

| Repository | Purpose / caveats | Access | Platform evidence |
| --- | --- | --- | --- |
| [fedsfarm/drwrap](https://github.com/fedsfarm/drwrap) | Resolve wrapper for codec conversion, clipboard, and drag-and-drop workarounds. | Free | [Linux](https://github.com/fedsfarm/drwrap#readme) — Tested on Arch/Hyprland with Studio 21; feature support varies by desktop. |
| [gohny/davinconv](https://github.com/gohny/davinconv) | FFmpeg Bash conversion helper for preparing footage for Resolve on Linux. | Free | [Linux](https://github.com/gohny/davinconv#readme) |

### 📚 Development

| Repository | Purpose / caveats | Access | Platform evidence |
| --- | --- | --- | --- |
| [brunocbreis/pysion](https://github.com/brunocbreis/pysion) | Python framework for generating Fusion compositions from dictionaries and reusable constructs. | Free | [Unverified](https://github.com/brunocbreis/pysion#readme) — OS support not established by the reviewed documentation. |
| [ctcwired/dctl-matrix-maker](https://github.com/ctcwired/dctl-matrix-maker) | Python color-matrix solver using paired ColorChecker images; generates a DCTL. Requires colour-science; linear image data is preferred. | Free | [Unverified](https://github.com/ctcwired/dctl-matrix-maker#readme) — OS support not established by the reviewed documentation. |
| [czukowski/fusionscript-stubs](https://github.com/czukowski/fusionscript-stubs) | Python type stubs providing IDE completion for the Fusion scripting API. | Free | [Reference](https://github.com/czukowski/fusionscript-stubs#readme) |
| [FusionPixelStudio/Davinci-Resolve-Functions-Toolkit](https://github.com/FusionPixelStudio/Davinci-Resolve-Functions-Toolkit) | VS Code toolkit with Resolve API snippets and scripting templates for Lua, Python, and JavaScript. | Free | [Unverified](https://github.com/FusionPixelStudio/Davinci-Resolve-Functions-Toolkit#readme) — OS support not established by the reviewed documentation. |
| [gingray/openfx-template](https://github.com/gingray/openfx-template) | C++ OpenFX starter template for plugin developers. | Public | [macOS](https://github.com/gingray/openfx-template#readme) — Only macOS builds documented; Windows support is future work. |
| [thatcherfreeman/dctl-text-rendering](https://github.com/thatcherfreeman/dctl-text-rendering) | DCTL text-rendering example and Python font-header generator for tool developers. | Public | [Unverified](https://github.com/thatcherfreeman/dctl-text-rendering#readme) — OS support not established by the reviewed documentation. |
| [thatcherfreeman/dctl-tutorial](https://github.com/thatcherfreeman/dctl-tutorial) | DCTL programming tutorial notes and supporting code. | Public | [Reference](https://github.com/thatcherfreeman/dctl-tutorial#readme) |

### 🎛️ Hardware / MIDI

| Repository | Purpose / caveats | Access | Platform evidence |
| --- | --- | --- | --- |
| [FoxDanger/Control-Booster-OpenSourceCode](https://github.com/FoxDanger/Control-Booster-OpenSourceCode) | Source release of the Control Booster OSC/Tangent mapping utility built with AutoHotkey. | Public | [Windows](https://github.com/FoxDanger/Control-Booster-OpenSourceCode#readme) — Windows implementation; macOS code is an early prototype. |
| [JamesBalazs/speed-editor-client](https://github.com/JamesBalazs/speed-editor-client) | Go HID client for using the Speed Editor outside Resolve, with a volume-control example. Requires the physical controller. | Free; hardware separate | [Windows, macOS, Linux](https://github.com/JamesBalazs/speed-editor-client#readme) |
| [KipJM/blackmacro-lib](https://github.com/KipJM/blackmacro-lib) | USB Speed Editor emulation firmware for custom microcontroller/macropad projects. Hardware required; Bluetooth and iPad support are absent. | Free; AGPLv3 stated upstream, hardware separate | [Unverified](https://github.com/KipJM/blackmacro-lib#readme) — OS support not established by the reviewed documentation. |
| [OlliV/resolve-hui-tc-updater](https://github.com/OlliV/resolve-hui-tc-updater) | Update a HUI/MCU controller's timecode display from Resolve using sendmidi. Tested with X-Touch One; updates can occasionally fail. | Public | [Unverified](https://github.com/OlliV/resolve-hui-tc-updater#readme) — OS support not established by the reviewed documentation. |
| [ra100/micro-color-panel-controller](https://github.com/ra100/micro-color-panel-controller) | Prototype controller support for using the Blackmagic Micro Color Panel outside Resolve. Requires the physical panel. | Free; MIT stated upstream, hardware separate | [Windows, macOS, Linux](https://github.com/ra100/micro-color-panel-controller#readme) |

## Held and superseded leads

These twelve candidates are not additions. Missing root READMEs do not prove that useful documentation is absent elsewhere.

| Repository | Reason |
| --- | --- |
| [DiodeFilms/DCTLs](https://github.com/DiodeFilms/DCTLs) | No root README was returned; purpose, licensing, and compatibility need a file-level review. |
| [rodrigomas/DCTLs](https://github.com/rodrigomas/DCTLs) | Root README is too sparse for a useful tool-level description; retained for follow-up. |
| [npeason/Nicks_DCTLs](https://github.com/npeason/Nicks_DCTLs) | No root README was returned; do not infer capabilities from the repository name. |
| [hsbobeck/public-dctls](https://github.com/hsbobeck/public-dctls) | Minimal root documentation; individual files and licensing need review. |
| [Dec18studios/DCTLs](https://github.com/Dec18studios/DCTLs) | No root README was returned; individual DCTLs need review. |
| [bryab/fusion-fuse-examples](https://github.com/bryab/fusion-fuse-examples) | Archived mirror of legacy Eyeon/VFXPedia examples; avoid presenting mirrored reference material as a new maintained tool. |
| [MansiVisuals/SureBeat-Aubio](https://github.com/MansiVisuals/SureBeat-Aubio) | README redirects development to MansiVisuals/SureBeat, which the GitHub API could not resolve. Successor availability remains unverified. |
| [snorkem/xls-to-resolve-edl](https://github.com/snorkem/xls-to-resolve-edl) | Repository description suggests spreadsheet-to-EDL conversion, but no root README was returned. |
| [acrilique/AutoMarker](https://github.com/acrilique/AutoMarker) | Archived predecessor; added the documented successor acrilique/automarker-clay instead. |
| [34j/DaVinciResolve.TTSTools](https://github.com/34j/DaVinciResolve.TTSTools) | No root README was returned; TTS-engine and host compatibility need further verification. |
| [34j/DaVinciResolve.TypeHints](https://github.com/34j/DaVinciResolve.TypeHints) | No root README was returned; generated annotations need a closer source review. |
| [postflows/resolve-textplus-manager](https://github.com/postflows/resolve-textplus-manager) | Archived and renamed; added the canonical resolve-title-manager instead. |

Unrelated dependency resolvers, unauthorized installers/cracks, generic download mirrors, and thin duplicates were excluded at search-result screening. Their links are not promoted. Existing legacy tools retained in this release are explicitly labelled archived, version-limited, or prototype where applicable.

## Follow-up paths

Review the twelve held leads at file level, paginate the high-volume GitHub queries beyond the first 100 results, and inspect individual Reactor Atoms through the package manager or a working GitLab tree. Future passes should include low-star/recently-created sorting and additional language-specific communities. Recheck upstream source statements before upgrading an Unverified platform label or claiming a ready-to-install build.
