# 🎬 Awesome Resolve

A curated directory of **114 public GitHub repositories** for DaVinci Resolve and Fusion, covering color grading, visual effects, subtitles, automation, Linux support, development, and hardware.

Browse the categories below or download the [CSV catalogue](data/repositories.csv) for filtering and importing into a spreadsheet.

**GitHub metadata checked: 2026-09-06T11:12:24Z.** Stars and relative ages are a snapshot as of this date. Last updated means GitHub's latest repository push (`pushedAt`), not the latest release; exact UTC timestamps are in the CSV.

**Research snapshot: 6 September 2026.** Descriptions, access labels, and compatibility notes come from the supplied research catalogue. They have not been independently revalidated during this import. These are researched listings, not installation tests or security audits; this directory does not claim exhaustive coverage.

## Access labels

- **Free**: the research identified explicit free availability or an open-source license.
- **Public**: repository files are accessible; licensing, commercial reuse rights, and ready-made binaries have not been fully audited.
- **Mixed**: separate paid editions, optional paid services, or a catalogue containing commercial products.

Qualifiers identify separate service, infrastructure, or hardware costs. Resolve Studio requirements are separate from the price of a listed project. Public availability does not necessarily mean open source. Consult each upstream repository for current requirements and licensing.

## Contents

### ↕️ Sort the catalogue

[🕒 Latest updated](views/latest-updated.md) · [🔤 Name](views/name.md) · [🏷️ Type](views/type.md) · [⭐ Stars](views/stars.md) · [💰 Access](views/access.md)

Choose a view to browse all projects in that order. These are pre-sorted GitHub pages; table headers are labels. **Type** means the catalogue category. Name sorts by project name, then owner.

### 🏷️ Labels

![Free](assets/badges/free.svg) Explicit free availability or open-source license · ![Public](assets/badges/public.svg) Public files; licensing not fully audited · ![Mixed](assets/badges/mixed.svg) Free and paid offerings.

Access qualifiers and compatibility details remain in each entry. Stars and dates use the metadata snapshot above.

### 🗂️ Browse by category

- [🎨 Color grading, DCTLs, film looks, and color science](#category-1) (27)
- [✨ Fusion, motion graphics, visual effects, and package management](#category-2) (22)
- [💬 Subtitles, transcription, dialogue cleanup, and automatic editing](#category-3) (13)
- [🤖 AI assistants, MCP servers, and ComfyUI integrations](#category-4) (6)
- [🛠️ Productivity scripts, workflow bridges, and integrations](#category-5) (13)
- [🎞️ Encoding, codecs, proxy generation, rendering, and project servers](#category-6) (9)
- [🐧 Linux installation, compatibility, and troubleshooting](#category-7) (8)
- [📚 Developer libraries and scripting references](#category-8) (5)
- [🎛️ Hardware, control surfaces, MIDI, and Speed Editor tools](#category-9) (6)
- [🧭 Directories covering free and commercial products](#category-10) (5)
- [⚠️ Compatibility notes](#compatibility-notes)
- [🤝 Contributing](#contributing)

<a id="category-1"></a>

## 🎨 Color grading, DCTLs, film looks, and color science

27 repositories.

| Repository | What it provides | 💰 Access | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | ---: | --- |
| [thatcherfreeman/utility-dctls](https://github.com/thatcherfreeman/utility-dctls) | Extensive creative and technical tools for exposure, contrast, saturation, diagnostics, and image effects. | ![Free](assets/badges/free.svg) | 412 | 5 days back |
| [baldavenger/DCTLs](https://github.com/baldavenger/DCTLs) | Technical transforms, charts, noise, convolution, and grading utilities. | ![Free](assets/badges/free.svg) | 350 | 2 years back |
| [baldavenger/ACES_DCTL](https://github.com/baldavenger/ACES_DCTL) | ACES color transforms implemented as DCTLs for Resolve Studio. | ![Free](assets/badges/free.svg) | 73 | 5 years back |
| [Demystify-Color/DCTLs](https://github.com/Demystify-Color/DCTLs) | DCTL tools and examples accompanying color-science tutorials; useful for learning and customization. | ![Free](assets/badges/free.svg) | 159 | 3 months back |
| [xtremestuff/resolve-dctl](https://github.com/xtremestuff/resolve-dctl) | Technical and utility DCTL library. | ![Public](assets/badges/public.svg) | 161 | 4 months back |
| [xtremestuff/protune-transforms](https://github.com/xtremestuff/protune-transforms) | GoPro Protune and GP-Log transforms for managed color workflows. | ![Public](assets/badges/public.svg) | 176 | 3 months back |
| [xtremestuff/resolve-aces](https://github.com/xtremestuff/resolve-aces) | Custom ACES input and output transforms. | ![Public](assets/badges/public.svg) | 22 | 2 years back |
| [MoazElgabry/DCTLs](https://github.com/MoazElgabry/DCTLs) | Look-development tools including filmic contrast, ratio shaping, localized contrast, and hue controls. | ![Free](assets/badges/free.svg) | 66 | 2 months back |
| [hotgluebanjo/TetraInterp-DCTL](https://github.com/hotgluebanjo/TetraInterp-DCTL) | Tetrahedral-interpolation-based color manipulation. | ![Public](assets/badges/public.svg) | 78 | 2 years back |
| [npeason/Tetra-DCTLOFX](https://github.com/npeason/Tetra-DCTLOFX) | Tetrahedral color manipulation through Resolve’s DCTL effect interface. | ![Free](assets/badges/free.svg) | 197 | 5 years back |
| [sobotka/AgX-Resolve](https://github.com/sobotka/AgX-Resolve) | AgX picture-formation/display transform for Resolve—not simply a film-look LUT. | ![Public](assets/badges/public.svg) | 110 | 1 year back |
| [jedypod/open-display-transform](https://github.com/jedypod/open-display-transform) | Scene-linear, wide-gamut image rendering for SDR/HDR; includes Resolve Studio DCTLs. | ![Free](assets/badges/free.svg) | 517 | 6 months back |
| [jedypod/gamut-compress](https://github.com/jedypod/gamut-compress) | Out-of-gamut color handling; includes DCTL and Fusion implementations. | ![Public](assets/badges/public.svg) | 110 | 4 years back |
| [mikaelsundell/photographic-dctls](https://github.com/mikaelsundell/photographic-dctls) | Photographic color-science experiments involving LogC, Cineon, negative inversion, and tone/color transforms. | ![Public](assets/badges/public.svg) | 78 | 3 months back |
| [Wavechaser/NamiColor](https://github.com/Wavechaser/NamiColor) | Linearizes film scans and aligns channels for scene-referred grading. Studio required. | ![Free](assets/badges/free.svg) | 122 | 2 years back |
| [fabiocolor/Faded-Balancer-DCTL](https://github.com/fabiocolor/Faded-Balancer-DCTL) | Rebalances faded film scans. | ![Public](assets/badges/public.svg) | 22 | 1 month back |
| [caryknoop/DCTL](https://github.com/caryknoop/DCTL) | Diagnostic tools for marking and analyzing image changes through nodes. | ![Free](assets/badges/free.svg) | 30 | 1 year back |
| [jai-panjwani/DCTLS](https://github.com/jai-panjwani/DCTLS) | Additional Resolve DCTL scripts. | ![Public](assets/badges/public.svg) | 22 | 1 year back |
| [Senthil360/RenderHub-DCTLs](https://github.com/Senthil360/RenderHub-DCTLs) | Creative and film-look DCTL collection for Resolve Studio. | ![Public](assets/badges/public.svg) | 25 | 5 days back |
| [thatcherfreeman/aces-transforms](https://github.com/thatcherfreeman/aces-transforms) | Custom ACES input and output transforms. | ![Public](assets/badges/public.svg) | 60 | 1 week back |
| [exones/davinci](https://github.com/exones/davinci) | Custom Resolve DCTL effects. | ![Free](assets/badges/free.svg) | 2 | 1 year back |
| [Georj01/davinci-dctl](https://github.com/Georj01/davinci-dctl) | Minimalist DCTL visual tools and effects. | ![Public](assets/badges/public.svg) | 2 | 1 month back |
| [kubabar/DCTLs](https://github.com/kubabar/DCTLs) | Technical color-space conversion tools, including XYZ conversion. | ![Free](assets/badges/free.svg) | 2 | 2 years back |
| [olduvai-jp/DCTL-MLAA](https://github.com/olduvai-jp/DCTL-MLAA) | Morphological anti-aliasing in DCTL and Fuse forms. | ![Public](assets/badges/public.svg) | 13 | 6 months back |
| [RichardUffy/Uffy-PhotoChemical-Look-Process-for-DaVinci-Resolve-Studio](https://github.com/RichardUffy/Uffy-PhotoChemical-Look-Process-for-DaVinci-Resolve-Studio) | Film-look system combining DCTLs, LUTs, and PowerGrades in a Studio/DWG workflow. | ![Public](assets/badges/public.svg) | 0 | 1 year back |
| [lakravana/Martis-Bleach-Bypass](https://github.com/lakravana/Martis-Bleach-Bypass) | Bleach-bypass-style DCTL look. | ![Public](assets/badges/public.svg) | 0 | 1 month back |
| [shenmintao/V-Log-Alchemy](https://github.com/shenmintao/V-Log-Alchemy) | Film-look/color tools aimed at V-Log footage. | ![Public](assets/badges/public.svg) | 357 | 2 weeks back |

<a id="category-2"></a>

## ✨ Fusion, motion graphics, visual effects, and package management

22 repositories.

| Repository | What it provides | 💰 Access | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | ---: | --- |
| [Kartaverse/Reactor-Standalone](https://github.com/Kartaverse/Reactor-Standalone) | Standalone desktop package manager for community Fusion/Resolve tools. Beta; package compatibility varies. | ![Free](assets/badges/free.svg) | 95 | 1 week back |
| [Kartaverse/VonkUltra](https://github.com/Kartaverse/VonkUltra) | Data-driven and generative node tools for Fusion. | ![Public](assets/badges/public.svg) | 11 | 1 month back |
| [Kartaverse/Kartaverse-Docs](https://github.com/Kartaverse/Kartaverse-Docs) | KartaVR and immersive-workflow documentation. KartaVR active support ended in January 2026, although packages remain available through Reactor. | ![Free](assets/badges/free.svg) Free reference | 11 | 1 month back |
| [nmbr73/Shaderfuse](https://github.com/nmbr73/Shaderfuse) | Shadertoy-style GPU shaders converted into Fusion Fuses. | ![Public](assets/badges/public.svg) | 78 | 1 day back |
| [J-i-P-i/Shadertoys](https://github.com/J-i-P-i/Shadertoys) | Experimental Shadertoy-to-Fusion shader collection/incubator. | ![Public](assets/badges/public.svg) | 4 | 3 years back |
| [baldavenger/BaldavengerPlugins](https://github.com/baldavenger/BaldavengerPlugins) | OpenFX image-processing and grading plugins; check older binaries against your system. | ![Public](assets/badges/public.svg) | 148 | 5 years back |
| [ntsc-rs/ntsc-rs](https://github.com/ntsc-rs/ntsc-rs) | VHS, NTSC, and analog-video effects, including an OpenFX plugin. | ![Free](assets/badges/free.svg) | 2552 | Today |
| [gyroflow/gyroflow-plugins](https://github.com/gyroflow/gyroflow-plugins) | Gyro-data-driven stabilization through OpenFX and other plugin formats. | ![Free](assets/badges/free.svg) | 122 | 4 days back |
| [alexandremendoncaalvaro/CorridorKey-Runtime](https://github.com/alexandremendoncaalvaro/CorridorKey-Runtime) | Local AI keying with OpenFX, command-line, and desktop interfaces. Check its GPU support matrix. | ![Free](assets/badges/free.svg) | 745 | 1 month back |
| [Akascape/Rembg-Fuse](https://github.com/Akascape/Rembg-Fuse) | AI background removal inside Fusion using external Python/model dependencies. | ![Free](assets/badges/free.svg) | 208 | 2 months back |
| [Akascape/Super-Style-Transfer-Fuse](https://github.com/Akascape/Super-Style-Transfer-Fuse) | Neural artistic style transfer inside Fusion. | ![Free](assets/badges/free.svg) | 3 | 1 week back |
| [Akascape/RemObj-Fuse](https://github.com/Akascape/RemObj-Fuse) | Masked object removal/inpainting using LaMa; README supports Free and Studio. | ![Free](assets/badges/free.svg) | 20 | 2 months back |
| [brunocbreis/FuAlign](https://github.com/brunocbreis/FuAlign) | Align and distribute visual elements in Fusion compositions. | ![Public](assets/badges/public.svg) | 33 | 4 years back |
| [EmberLightVFX/Tetrahedral-Interpolation-for-Fusion](https://github.com/EmberLightVFX/Tetrahedral-Interpolation-for-Fusion) | Fusion implementation of tetrahedral color manipulation. | ![Free](assets/badges/free.svg) | 32 | 5 years back |
| [AntonChernov86/Fuses](https://github.com/AntonChernov86/Fuses) | Custom Fusion Fuse collection. | ![Public](assets/badges/public.svg) | 0 | 2 years back |
| [ChrisRidings/GifSaverFuse](https://github.com/ChrisRidings/GifSaverFuse) | GIF saving/export from Fusion. | ![Public](assets/badges/public.svg) | 18 | 5 years back |
| [rne1223/DaFusion](https://github.com/rne1223/DaFusion) | Learning-oriented/sample Fusion Fuses. | ![Free](assets/badges/free.svg) | 1 | 5 years back |
| [Mr-Robby/chat-generator-fuse](https://github.com/Mr-Robby/chat-generator-fuse) | Animated chat/message overlays. | ![Public](assets/badges/public.svg) | 0 | 11 months back |
| [BasketOfNekos/Midi-based-Animation-Iterator-For-DaVinci-Resolve](https://github.com/BasketOfNekos/Midi-based-Animation-Iterator-For-DaVinci-Resolve) | Drives Fusion animation from MIDI data. | ![Public](assets/badges/public.svg) | 7 | 1 month back |
| [mrJohnHolt/davinci-resolve-fusion-expressions](https://github.com/mrJohnHolt/davinci-resolve-fusion-expressions) | Expressions, macros, and reusable visual templates. | ![Public](assets/badges/public.svg) | 2 | 3 months back |
| [EmberLightVFX/Gyroflow-to-CSV](https://github.com/EmberLightVFX/Gyroflow-to-CSV) | Gyro telemetry export for Fusion camera/data-driven workflows. | ![Public](assets/badges/public.svg) | 18 | 3 years back |
| [raghavdhin/CapitalEase](https://github.com/raghavdhin/CapitalEase) | Easing presets and live curve editing. Its UI requires Studio on Resolve 19.1+. | ![Free](assets/badges/free.svg) | 1 | 1 month back |

<a id="category-3"></a>

## 💬 Subtitles, transcription, dialogue cleanup, and automatic editing

13 repositories.

| Repository | What it provides | 💰 Access | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | ---: | --- |
| [tmoroney/auto-subs](https://github.com/tmoroney/auto-subs) | Local transcription and styled/animated subtitle workflows, with standalone and Resolve integration. | ![Free](assets/badges/free.svg) | 4137 | Today |
| [octimot/StoryToolkitAI](https://github.com/octimot/StoryToolkitAI) | Transcription, translation, search, and story-oriented editing. Local features are free; direct Resolve integration requires Studio. | ![Free](assets/badges/free.svg) Free; optional paid services | 1009 | 1 month back |
| [david-ca6/Resolve-OpenCaptions](https://github.com/david-ca6/Resolve-OpenCaptions) | Converts subtitles into editable Text+ clips; explicitly supports Free and Studio. | ![Free](assets/badges/free.svg) | 30 | 3 weeks back |
| [cutbypham/snap-captions](https://github.com/cutbypham/snap-captions) | Community Snap Captions distribution and additional caption styles. The older licitfree link redirects here. | ![Public](assets/badges/public.svg) | 27 | 1 year back |
| [veritus-git/BadWords](https://github.com/veritus-git/BadWords) | Local transcript-based rough cutting, including silence, filler-word, and retake handling. | ![Free](assets/badges/free.svg) | 31 | 1 day back |
| [oliwoli/HushCut](https://github.com/oliwoli/HushCut) | Silence-based editing helper for Resolve workflows. | ![Public](assets/badges/public.svg) | 19 | 8 months back |
| [YourAverageMo/auto-silence-cut](https://github.com/YourAverageMo/auto-silence-cut) | Automatic silence cutting with an editable Resolve workflow. | ![Public](assets/badges/public.svg) | 24 | 11 months back |
| [2445868686/DaVinci-Resolve-TTS](https://github.com/2445868686/DaVinci-Resolve-TTS) | Text-to-speech integrations with external voice providers; provider usage can cost money. | ![Mixed](assets/badges/mixed.svg) | 19 | 1 year back |
| [2445868686/DaVinci-Resolve-Whisper](https://github.com/2445868686/DaVinci-Resolve-Whisper) | Whisper transcription through local or cloud-backed workflows. | ![Public](assets/badges/public.svg) Public; optional service costs | 10 | 1 year back |
| [Nusscookie/clautter](https://github.com/Nusscookie/clautter) | AI-assisted talking-head cleanup. Beta. A paid installer is planned, while the plugin remains free. | ![Free](assets/badges/free.svg) | 1 | 2 months back |
| [ikm-san/autotitles-community](https://github.com/ikm-san/autotitles-community) | CLI/API subtitle-to-Fusion-title workflow for Studio. Free for commercial video work, but not open source; separate GUI editions exist. | ![Mixed](assets/badges/mixed.svg) | 0 | 1 month back |
| [WyattBlue/auto-editor](https://github.com/WyattBlue/auto-editor) | Standalone automatic editing with NLE timeline-export workflows; not a native Resolve plugin. | ![Public](assets/badges/public.svg) | 5164 | 3 days back |
| [JiginJayaprakash/resolve-textplus-srt-importer](https://github.com/JiginJayaprakash/resolve-textplus-srt-importer) | Imports SRT subtitles as styled Fusion Text+ clips. | ![Free](assets/badges/free.svg) | 2 | 5 months back |

<a id="category-4"></a>

## 🤖 AI assistants, MCP servers, and ComfyUI integrations

6 repositories.

| Repository | What it provides | 💰 Access | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | ---: | --- |
| [samuelgursky/davinci-resolve-mcp](https://github.com/samuelgursky/davinci-resolve-mcp) | AI-client access to media, timeline, rendering, and other Resolve operations through MCP. Studio workflow. | ![Public](assets/badges/public.svg) Public; AI costs separate | 2414 | Today |
| [barckley75/resolve-claude-mcp](https://github.com/barckley75/resolve-claude-mcp) | Claude/MCP integration for Resolve automation. | ![Public](assets/badges/public.svg) Public; AI costs separate | 350 | 3 months back |
| [apvlv/davinci-resolve-mcp](https://github.com/apvlv/davinci-resolve-mcp) | Another Resolve/Fusion MCP implementation; capabilities differ from the other servers. | ![Public](assets/badges/public.svg) Public; AI costs separate | 77 | 5 months back |
| [hoyt-harness/davinci-mcp-professional](https://github.com/hoyt-harness/davinci-mcp-professional) | MCP automation organized around Resolve workflows/domains. “Professional” is the project name, not proof of a paid license. | ![Public](assets/badges/public.svg) | 24 | 2 days back |
| [barckley75/comfyUI_DaVinciResolve](https://github.com/barckley75/comfyUI_DaVinciResolve) | ComfyUI nodes connecting generative workflows to Resolve. | ![Public](assets/badges/public.svg) | 46 | 2 years back |
| [CelaviiHQ/cutmaster-ai](https://github.com/CelaviiHQ/cutmaster-ai) | MCP toolkit and Resolve workflow panel. The public toolkit is separate from the paid CutMaster Studio macOS app. | ![Mixed](assets/badges/mixed.svg) | 3 | 1 month back |

<a id="category-5"></a>

## 🛠️ Productivity scripts, workflow bridges, and integrations

13 repositories.

| Repository | What it provides | 💰 Access | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | ---: | --- |
| [thatcherfreeman/resolve-scripts](https://github.com/thatcherfreeman/resolve-scripts) | Everyday Resolve/Fusion automation: timeline, metadata, render, relinking, and other helpers. | ![Public](assets/badges/public.svg) | 17 | 1 month back |
| [X-Raym/DaVinci-Resolve-Scripts](https://github.com/X-Raym/DaVinci-Resolve-Scripts) | Free scripts for editing, markers, properties, and project workflows. | ![Free](assets/badges/free.svg) | 94 | 10 months back |
| [jjsawdon/DaVinci-Resolve-Utilities](https://github.com/jjsawdon/DaVinci-Resolve-Utilities) | Proxy/cache utilities, YouTube chapter export, and project-template helpers. | ![Free](assets/badges/free.svg) | 44 | 1 year back |
| [fukco/DaVinciResolveScript](https://github.com/fukco/DaVinciResolveScript) | Metadata and workflow scripting tools; check separately advertised products independently. | ![Public](assets/badges/public.svg) | 57 | 5 months back |
| [VilleOlof/Toolbox](https://github.com/VilleOlof/Toolbox) | Modular Resolve productivity toolbox. Archived—treat as legacy. | ![Public](assets/badges/public.svg) | 61 | 1 year back |
| [jdanna/Resolve_Tools_Public](https://github.com/jdanna/Resolve_Tools_Public) | Free scripts, DCTLs, and Fusion resources. | ![Free](assets/badges/free.svg) | 4 | 1 week back |
| [IgorRidanovic/AfterEffects_to_DaVinci_Resolve](https://github.com/IgorRidanovic/AfterEffects_to_DaVinci_Resolve) | Brings After Effects renders into Resolve workflows. | ![Public](assets/badges/public.svg) | 39 | 7 years back |
| [IgorRidanovic/DaVinciResolve-DynamicText](https://github.com/IgorRidanovic/DaVinciResolve-DynamicText) | Dynamic title/text scripting. | ![Public](assets/badges/public.svg) | 25 | 6 years back |
| [FranzWegner/multicam-logger](https://github.com/FranzWegner/multicam-logger) | Logs camera switching into edit lists for post-production workflows. | ![Public](assets/badges/public.svg) | 38 | 3 years back |
| [eric-with-a-c/resolve-otio](https://github.com/eric-with-a-c/resolve-otio) | OpenTimelineIO interoperability with Resolve. | ![Public](assets/badges/public.svg) | 27 | 4 years back |
| [tin2tin/VSE_OTIO_Export](https://github.com/tin2tin/VSE_OTIO_Export) | Blender Video Sequence Editor timeline export through OpenTimelineIO. | ![Public](assets/badges/public.svg) | 32 | 2 years back |
| [MansiVisuals/Font-Scanner-and-Installer-for-DaVinci-Resolve](https://github.com/MansiVisuals/Font-Scanner-and-Installer-for-DaVinci-Resolve) | Helps locate/install fonts for Resolve workflows. Font licenses remain separate. | ![Free](assets/badges/free.svg) | 5 | 1 year back |
| [LucasHT22/davinci-resolve-wakatime](https://github.com/LucasHT22/davinci-resolve-wakatime) | WakaTime activity-tracking integration. External service terms are separate. | ![Public](assets/badges/public.svg) Public + service | 23 | 1 year back |

<a id="category-6"></a>

## 🎞️ Encoding, codecs, proxy generation, rendering, and project servers

9 repositories.

| Repository | What it provides | 💰 Access | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | ---: | --- |
| [EdvinNilsson/ffmpeg_encoder_plugin](https://github.com/EdvinNilsson/ffmpeg_encoder_plugin) | FFmpeg-powered export/encoding plugin for Resolve Studio. | ![Free](assets/badges/free.svg) | 230 | 3 weeks back |
| [Toxblh/davinci-linux-aac-codec](https://github.com/Toxblh/davinci-linux-aac-codec) | AAC encoding plugin for Resolve Studio on Linux. | ![Public](assets/badges/public.svg) | 117 | 1 year back |
| [hexitnz/Resolve-Linux-Studio-AAC-FDK-Encoder-plugin](https://github.com/hexitnz/Resolve-Linux-Studio-AAC-FDK-Encoder-plugin) | FDK-based AAC audio encoding on Linux. Studio required. | ![Public](assets/badges/public.svg) | 29 | 2 months back |
| [nowrep/dvcp-vaapi](https://github.com/nowrep/dvcp-vaapi) | VAAPI video encoder plugin. Check hardware, driver, and Resolve requirements. | ![Public](assets/badges/public.svg) | 39 | 1 year back |
| [in03/proxima](https://github.com/in03/proxima) | Queues, distributes, encodes, and automatically links proxy media across workers. | ![Public](assets/badges/public.svg) | 74 | 5 days back |
| [Puppetworks-Animation-Studio/deadline-davinci-resolve](https://github.com/Puppetworks-Animation-Studio/deadline-davinci-resolve) | Thinkbox Deadline render-farm integration. Check current compatibility carefully. | ![Public](assets/badges/public.svg) Public; infrastructure separate | 38 | 5 years back |
| [elliotmatson/Docker-Davinci-Resolve-Project-Server](https://github.com/elliotmatson/Docker-Davinci-Resolve-Project-Server) | Containerized PostgreSQL project server with automatic backups. | ![Free](assets/badges/free.svg) Free; infrastructure separate | 313 | 1 month back |
| [sethgoldin/davinci-resolve-postgresql-workflow-tools](https://github.com/sethgoldin/davinci-resolve-postgresql-workflow-tools) | Automatic project-database backups and maintenance. | ![Public](assets/badges/public.svg) | 101 | 3 years back |
| [jonnyhyman/ResolveCollaboration](https://github.com/jonnyhyman/ResolveCollaboration) | Utilities extending older live-collaboration workflows; compare against newer native options. | ![Public](assets/badges/public.svg) | 36 | 4 years back |

<a id="category-7"></a>

## 🐧 Linux installation, compatibility, and troubleshooting

8 repositories.

| Repository | What it provides | 💰 Access | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | ---: | --- |
| [zelikos/davincibox](https://github.com/zelikos/davincibox) | Containerized Resolve dependencies using Distrobox/Podman; particularly aimed at atomic/image-based distributions. | ![Free](assets/badges/free.svg) | 980 | 1 week back |
| [fat-tire/resolve](https://github.com/fat-tire/resolve) | Container scripts for building and running Resolve on Linux. | ![Public](assets/badges/public.svg) | 298 | 1 year back |
| [H3rz3n/davinci-helper](https://github.com/H3rz3n/davinci-helper) | Linux companion utilities for Resolve. | ![Public](assets/badges/public.svg) | 313 | 1 year back |
| [flolu/davinci-resolve-linux](https://github.com/flolu/davinci-resolve-linux) | Setup instructions and import/export workarounds. | ![Public](assets/badges/public.svg) | 263 | 1 year back |
| [Ashark/davinci-resolve-checker](https://github.com/Ashark/davinci-resolve-checker) | Checks system configuration and hardware suitability for Resolve. | ![Public](assets/badges/public.svg) | 174 | 5 months back |
| [psygreg/autoresolvedeb](https://github.com/psygreg/autoresolvedeb) | Automates downloading and repackaging Resolve through MakeResolveDeb. | ![Public](assets/badges/public.svg) | 29 | 1 week back |
| [yioannides/fedora-resolve](https://github.com/yioannides/fedora-resolve) | Fedora installation scripts. The maintainer warns the method may already be obsolete. | ![Free](assets/badges/free.svg) Free; legacy warning | 26 | 4 weeks back |
| [Chillsmeit/resolve-tumbleweed](https://github.com/Chillsmeit/resolve-tumbleweed) | openSUSE Tumbleweed fixes. Maintainer no longer uses that distribution. | ![Free](assets/badges/free.svg) Free; maintenance caution | 21 | 1 month back |

<a id="category-8"></a>

## 📚 Developer libraries and scripting references

5 repositories.

| Repository | What it provides | 💰 Access | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | ---: | --- |
| [pedrolabonia/pydavinci](https://github.com/pedrolabonia/pydavinci) | Higher-level Python package for scripting Resolve. | ![Public](assets/badges/public.svg) | 181 | 5 months back |
| [WheheoHu/pybmd](https://github.com/WheheoHu/pybmd) | Python wrapper around the Resolve API. | ![Public](assets/badges/public.svg) | 34 | 1 month back |
| [diop/davinci-resolve-api](https://github.com/diop/davinci-resolve-api) | Community Python API documentation. Treat it as a reference, not the latest official SDK. | ![Free](assets/badges/free.svg) Free reference | 98 | 7 years back |
| [MokshC/easyDCTL](https://github.com/MokshC/easyDCTL) | Interface/tooling for creating DCTLs. | ![Public](assets/badges/public.svg) | 4 | 1 year back |
| [AndrewHazelden/Fusion-Studio-FuScript-IDE-Tools-and-Pipeline-Scripts](https://github.com/AndrewHazelden/Fusion-Studio-FuScript-IDE-Tools-and-Pipeline-Scripts) | IDE and pipeline scripting integrations, including macOS/BBEdit-oriented workflows. | ![Public](assets/badges/public.svg) | 9 | 7 years back |

<a id="category-9"></a>

## 🎛️ Hardware, control surfaces, MIDI, and Speed Editor tools

6 repositories.

| Repository | What it provides | 💰 Access | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | ---: | --- |
| [PuzzleEmptyM/Unbound-editor-device-customizer](https://github.com/PuzzleEmptyM/Unbound-editor-device-customizer) | Remaps controller buttons and jog-wheel actions outside Resolve; Windows/macOS builds. | ![Public](assets/badges/public.svg) Public; hardware separate | 43 | 5 months back |
| [fashberg/XTouchMini-Davinci-Resolve-Midi-Adapter](https://github.com/fashberg/XTouchMini-Davinci-Resolve-Midi-Adapter) | Uses a Behringer X-Touch Mini to control Resolve through Windows hotkeys. | ![Public](assets/badges/public.svg) Public; hardware separate | 30 | 5 years back |
| [RudyB24/AutoHotKey_Bome_MIDI_2_Key](https://github.com/RudyB24/AutoHotKey_Bome_MIDI_2_Key) | Maps incoming MIDI messages to Resolve keyboard shortcuts. | ![Public](assets/badges/public.svg) Public; dependencies separate | 21 | 3 years back |
| [shaise/DiSE](https://github.com/shaise/DiSE) | DIY speed-editor hardware for Resolve and other video-editing applications. | ![Public](assets/badges/public.svg) Public; build cost | 60 | 3 years back |
| [KipJM/blackmacro-hardware](https://github.com/KipJM/blackmacro-hardware) | Configurable DIY editing keyboard based on Raspberry Pi Pico 2W. | ![Public](assets/badges/public.svg) Public; build cost | 23 | 1 week back |
| [derwok/SpeedEditorCheatSheet](https://github.com/derwok/SpeedEditorCheatSheet) | Printable Speed Editor reference/cheat sheet. | ![Free](assets/badges/free.svg) Free reference | 41 | 2 years back |

<a id="category-10"></a>

## 🧭 Directories covering free and commercial products

5 repositories.

| Repository | What it provides | 💰 Access | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | ---: | --- |
| [Greenysmac/awesome-davinci-resolve](https://github.com/Greenysmac/awesome-davinci-resolve) | Broad community directory spanning AI tools, audio, DCTLs, effects, templates, and workflows. | ![Mixed](assets/badges/mixed.svg) Free/paid product directory | 284 | 3 months back |
| [cutbypham/awesome-davinci-resolve](https://github.com/cutbypham/awesome-davinci-resolve) | Plugins, scripts, assets, and editing resources. Bundled copies may be older than upstream releases. | ![Mixed](assets/badges/mixed.svg) Free/paid resource directory | 63 | 1 week back |
| [Akascape/PluginLibrary-Resolve](https://github.com/Akascape/PluginLibrary-Resolve) | Launcher/catalogue linking to free and commercial plugins; it does not grant paid-product licenses. | ![Mixed](assets/badges/mixed.svg) | 10 | 1 week back |
| [hassaancode/Fx-Library](https://github.com/hassaancode/Fx-Library) | Resolve/After Effects effects and creative-resource directory. | ![Mixed](assets/badges/mixed.svg) | 2 | 8 months back |
| [CommandPost/ResolveCafe](https://github.com/CommandPost/ResolveCafe) | Community references, developer material, and website source. Archived in May 2025. | ![Free](assets/badges/free.svg) Free reference; archived | 20 | 2 years back |

## Compatibility notes

These notes reflect the research snapshot; check upstream documentation against the exact Resolve version, edition, operating system, and distribution you use.

- **Free versus Studio:** older Free-edition compatibility statements may not apply to newer versions. The supplied research reports that CapitalEase's UI excludes Resolve Free 19.1 onward; ordinary Fuses and standalone applications may have different requirements.
- **Mac App Store builds:** the supplied research reports that AutoSubs and BadWords exclude the Mac App Store distribution from their integrations.
- **Linux AAC:** the listed AAC plugins provide encoding. Do not assume they also add audio importing or decoding.
- **Color pipelines:** display transforms such as AgX and Open Display Transform serve a different purpose from creative LUT packs.
- **AI and automation:** external scripting requirements, model dependencies, GPU support, and AI-service charges vary by project.
- **Directories:** a commercial plugin appearing in a GitHub directory does not imply that its source is public or that a license is included.
- **Maintenance:** archived, beta, and legacy notes describe the research snapshot and may change over time.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for additions and corrections. Keep the README and CSV catalogue synchronized and link to the original upstream repository.

## Scope and attribution

Badge styling is inspired by [Greenysmac's awesome-davinci-resolve](https://github.com/Greenysmac/awesome-davinci-resolve). Badge assets are stored in this repository; access classifications follow this catalogue's own research notes.

All listed projects belong to their respective authors and retain their own licenses. This directory links to upstream repositories and does not redistribute their code, binaries, or assets. Inclusion does not imply endorsement or affiliation with Blackmagic Design or the listed maintainers.
