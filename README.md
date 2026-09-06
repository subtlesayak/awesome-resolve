# Awesome Resolve

A curated directory of **114 public GitHub repositories** for DaVinci Resolve and Fusion, covering color grading, visual effects, subtitles, automation, Linux support, development, and hardware.

Browse the categories below or download the [CSV catalogue](data/repositories.csv) for filtering and importing into a spreadsheet.

**GitHub metadata checked: 2026-09-06T11:02:51Z.** Stars are a snapshot. Last updated is GitHub's latest repository push date (`pushedAt`), not the latest release date; full UTC timestamps are in the CSV.

**Research snapshot: 6 September 2026.** Descriptions, access labels, and compatibility notes come from the supplied research catalogue. They have not been independently revalidated during this import. These are researched listings, not installation tests or security audits; this directory does not claim exhaustive coverage.

## Access labels

- **Free**: the research identified explicit free availability or an open-source license.
- **Public**: repository files are accessible; licensing, commercial reuse rights, and ready-made binaries have not been fully audited.
- **Mixed**: separate paid editions, optional paid services, or a catalogue containing commercial products.

Qualifiers identify separate service, infrastructure, or hardware costs. Resolve Studio requirements are separate from the price of a listed project. Public availability does not necessarily mean open source. Consult each upstream repository for current requirements and licensing.

## Contents

- [Color grading, DCTLs, film looks, and color science](#category-1) (27)
- [Fusion, motion graphics, visual effects, and package management](#category-2) (22)
- [Subtitles, transcription, dialogue cleanup, and automatic editing](#category-3) (13)
- [AI assistants, MCP servers, and ComfyUI integrations](#category-4) (6)
- [Productivity scripts, workflow bridges, and integrations](#category-5) (13)
- [Encoding, codecs, proxy generation, rendering, and project servers](#category-6) (9)
- [Linux installation, compatibility, and troubleshooting](#category-7) (8)
- [Developer libraries and scripting references](#category-8) (5)
- [Hardware, control surfaces, MIDI, and Speed Editor tools](#category-9) (6)
- [Directories covering free and commercial products](#category-10) (5)
- [Compatibility notes](#compatibility-notes)
- [Contributing](#contributing)

<a id="category-1"></a>

## Color grading, DCTLs, film looks, and color science

27 repositories.

| Repository | What it provides | Access | Stars | Last updated (UTC) |
| --- | --- | --- | ---: | --- |
| [thatcherfreeman/utility-dctls](https://github.com/thatcherfreeman/utility-dctls) | Extensive creative and technical tools for exposure, contrast, saturation, diagnostics, and image effects. | Free | 412 | 2026-09-01 |
| [baldavenger/DCTLs](https://github.com/baldavenger/DCTLs) | Technical transforms, charts, noise, convolution, and grading utilities. | Free | 350 | 2023-12-06 |
| [baldavenger/ACES_DCTL](https://github.com/baldavenger/ACES_DCTL) | ACES color transforms implemented as DCTLs for **Resolve Studio**. | Free | 73 | 2021-08-30 |
| [Demystify-Color/DCTLs](https://github.com/Demystify-Color/DCTLs) | DCTL tools and examples accompanying color-science tutorials; useful for learning and customization. | Free | 159 | 2026-05-22 |
| [xtremestuff/resolve-dctl](https://github.com/xtremestuff/resolve-dctl) | Technical and utility DCTL library. | Public | 161 | 2026-04-10 |
| [xtremestuff/protune-transforms](https://github.com/xtremestuff/protune-transforms) | GoPro Protune and GP-Log transforms for managed color workflows. | Public | 176 | 2026-05-24 |
| [xtremestuff/resolve-aces](https://github.com/xtremestuff/resolve-aces) | Custom ACES input and output transforms. | Public | 22 | 2023-10-25 |
| [MoazElgabry/DCTLs](https://github.com/MoazElgabry/DCTLs) | Look-development tools including filmic contrast, ratio shaping, localized contrast, and hue controls. | Free | 66 | 2026-06-13 |
| [hotgluebanjo/TetraInterp-DCTL](https://github.com/hotgluebanjo/TetraInterp-DCTL) | Tetrahedral-interpolation-based color manipulation. | Public | 78 | 2024-08-23 |
| [npeason/Tetra-DCTLOFX](https://github.com/npeason/Tetra-DCTLOFX) | Tetrahedral color manipulation through Resolve’s DCTL effect interface. | Free | 197 | 2021-03-13 |
| [sobotka/AgX-Resolve](https://github.com/sobotka/AgX-Resolve) | AgX picture-formation/display transform for Resolve—not simply a film-look LUT. | Public | 110 | 2024-11-25 |
| [jedypod/open-display-transform](https://github.com/jedypod/open-display-transform) | Scene-linear, wide-gamut image rendering for SDR/HDR; includes **Resolve Studio DCTLs**. | Free | 517 | 2026-02-09 |
| [jedypod/gamut-compress](https://github.com/jedypod/gamut-compress) | Out-of-gamut color handling; includes DCTL and Fusion implementations. | Public | 110 | 2022-05-27 |
| [mikaelsundell/photographic-dctls](https://github.com/mikaelsundell/photographic-dctls) | Photographic color-science experiments involving LogC, Cineon, negative inversion, and tone/color transforms. | Public | 78 | 2026-06-05 |
| [Wavechaser/NamiColor](https://github.com/Wavechaser/NamiColor) | Linearizes film scans and aligns channels for scene-referred grading. **Studio required.** | Free | 122 | 2024-05-12 |
| [fabiocolor/Faded-Balancer-DCTL](https://github.com/fabiocolor/Faded-Balancer-DCTL) | Rebalances faded film scans. | Public | 22 | 2026-07-11 |
| [caryknoop/DCTL](https://github.com/caryknoop/DCTL) | Diagnostic tools for marking and analyzing image changes through nodes. | Free | 30 | 2025-01-15 |
| [jai-panjwani/DCTLS](https://github.com/jai-panjwani/DCTLS) | Additional Resolve DCTL scripts. | Public | 22 | 2024-10-05 |
| [Senthil360/RenderHub-DCTLs](https://github.com/Senthil360/RenderHub-DCTLs) | Creative and film-look DCTL collection for **Resolve Studio**. | Public | 25 | 2026-09-01 |
| [thatcherfreeman/aces-transforms](https://github.com/thatcherfreeman/aces-transforms) | Custom ACES input and output transforms. | Public | 60 | 2026-08-23 |
| [exones/davinci](https://github.com/exones/davinci) | Custom Resolve DCTL effects. | Free | 2 | 2025-03-14 |
| [Georj01/davinci-dctl](https://github.com/Georj01/davinci-dctl) | Minimalist DCTL visual tools and effects. | Public | 2 | 2026-07-16 |
| [kubabar/DCTLs](https://github.com/kubabar/DCTLs) | Technical color-space conversion tools, including XYZ conversion. | Free | 2 | 2024-03-03 |
| [olduvai-jp/DCTL-MLAA](https://github.com/olduvai-jp/DCTL-MLAA) | Morphological anti-aliasing in DCTL and Fuse forms. | Public | 13 | 2026-03-06 |
| [Uffy PhotoChemical Look Process](https://github.com/RichardUffy/Uffy-PhotoChemical-Look-Process-for-DaVinci-Resolve-Studio) | Film-look system combining DCTLs, LUTs, and PowerGrades in a **Studio/DWG workflow**. | Public | 0 | 2025-04-10 |
| [lakravana/Martis-Bleach-Bypass](https://github.com/lakravana/Martis-Bleach-Bypass) | Bleach-bypass-style DCTL look. | Public | 0 | 2026-07-10 |
| [shenmintao/V-Log-Alchemy](https://github.com/shenmintao/V-Log-Alchemy) | Film-look/color tools aimed at V-Log footage. | Public | 357 | 2026-08-17 |

<a id="category-2"></a>

## Fusion, motion graphics, visual effects, and package management

22 repositories.

| Repository | What it provides | Access | Stars | Last updated (UTC) |
| --- | --- | --- | ---: | --- |
| [Kartaverse/Reactor-Standalone](https://github.com/Kartaverse/Reactor-Standalone) | Standalone desktop package manager for community Fusion/Resolve tools. **Beta; package compatibility varies.** | Free | 95 | 2026-08-30 |
| [Kartaverse/VonkUltra](https://github.com/Kartaverse/VonkUltra) | Data-driven and generative node tools for Fusion. | Public | 11 | 2026-07-27 |
| [Kartaverse/Kartaverse-Docs](https://github.com/Kartaverse/Kartaverse-Docs) | KartaVR and immersive-workflow documentation. **KartaVR active support ended in January 2026**, although packages remain available through Reactor. | Free reference | 11 | 2026-07-08 |
| [nmbr73/Shaderfuse](https://github.com/nmbr73/Shaderfuse) | Shadertoy-style GPU shaders converted into Fusion Fuses. | Public | 78 | 2026-09-04 |
| [J-i-P-i/Shadertoys](https://github.com/J-i-P-i/Shadertoys) | Experimental Shadertoy-to-Fusion shader collection/incubator. | Public | 4 | 2022-11-09 |
| [baldavenger/BaldavengerPlugins](https://github.com/baldavenger/BaldavengerPlugins) | OpenFX image-processing and grading plugins; check older binaries against your system. | Public | 148 | 2021-09-01 |
| [ntsc-rs/ntsc-rs](https://github.com/ntsc-rs/ntsc-rs) | VHS, NTSC, and analog-video effects, including an OpenFX plugin. | Free | 2552 | 2026-09-05 |
| [gyroflow/gyroflow-plugins](https://github.com/gyroflow/gyroflow-plugins) | Gyro-data-driven stabilization through OpenFX and other plugin formats. | Free | 122 | 2026-09-01 |
| [CorridorKey-Runtime](https://github.com/alexandremendoncaalvaro/CorridorKey-Runtime) | Local AI keying with OpenFX, command-line, and desktop interfaces. Check its GPU support matrix. | Free | 745 | 2026-08-05 |
| [Akascape/Rembg-Fuse](https://github.com/Akascape/Rembg-Fuse) | AI background removal inside Fusion using external Python/model dependencies. | Free | 208 | 2026-07-05 |
| [Akascape/Super-Style-Transfer-Fuse](https://github.com/Akascape/Super-Style-Transfer-Fuse) | Neural artistic style transfer inside Fusion. | Free | 3 | 2026-08-23 |
| [Akascape/RemObj-Fuse](https://github.com/Akascape/RemObj-Fuse) | Masked object removal/inpainting using LaMa; README supports Free and Studio. | Free | 20 | 2026-07-05 |
| [brunocbreis/FuAlign](https://github.com/brunocbreis/FuAlign) | Align and distribute visual elements in Fusion compositions. | Public | 33 | 2022-08-22 |
| [Tetrahedral Interpolation for Fusion](https://github.com/EmberLightVFX/Tetrahedral-Interpolation-for-Fusion) | Fusion implementation of tetrahedral color manipulation. | Free | 32 | 2021-04-19 |
| [AntonChernov86/Fuses](https://github.com/AntonChernov86/Fuses) | Custom Fusion Fuse collection. | Public | 0 | 2023-11-09 |
| [ChrisRidings/GifSaverFuse](https://github.com/ChrisRidings/GifSaverFuse) | GIF saving/export from Fusion. | Public | 18 | 2021-02-27 |
| [rne1223/DaFusion](https://github.com/rne1223/DaFusion) | Learning-oriented/sample Fusion Fuses. | Free | 1 | 2021-02-26 |
| [Mr-Robby/chat-generator-fuse](https://github.com/Mr-Robby/chat-generator-fuse) | Animated chat/message overlays. | Public | 0 | 2025-10-01 |
| [MIDI-based Animation Iterator](https://github.com/BasketOfNekos/Midi-based-Animation-Iterator-For-DaVinci-Resolve) | Drives Fusion animation from MIDI data. | Public | 7 | 2026-07-22 |
| [mrJohnHolt/davinci-resolve-fusion-expressions](https://github.com/mrJohnHolt/davinci-resolve-fusion-expressions) | Expressions, macros, and reusable visual templates. | Public | 2 | 2026-06-05 |
| [EmberLightVFX/Gyroflow-to-CSV](https://github.com/EmberLightVFX/Gyroflow-to-CSV) | Gyro telemetry export for Fusion camera/data-driven workflows. | Public | 18 | 2023-01-05 |
| [raghavdhin/CapitalEase](https://github.com/raghavdhin/CapitalEase) | Easing presets and live curve editing. **Its UI requires Studio on Resolve 19.1+.** | Free | 1 | 2026-07-16 |

<a id="category-3"></a>

## Subtitles, transcription, dialogue cleanup, and automatic editing

13 repositories.

| Repository | What it provides | Access | Stars | Last updated (UTC) |
| --- | --- | --- | ---: | --- |
| [tmoroney/auto-subs](https://github.com/tmoroney/auto-subs) | Local transcription and styled/animated subtitle workflows, with standalone and Resolve integration. | Free | 4137 | 2026-09-05 |
| [octimot/StoryToolkitAI](https://github.com/octimot/StoryToolkitAI) | Transcription, translation, search, and story-oriented editing. **Local features are free; direct Resolve integration requires Studio.** | Free; optional paid services | 1009 | 2026-07-28 |
| [david-ca6/Resolve-OpenCaptions](https://github.com/david-ca6/Resolve-OpenCaptions) | Converts subtitles into editable Text+ clips; explicitly supports Free and Studio. | Free | 30 | 2026-08-10 |
| [cutbypham/snap-captions](https://github.com/cutbypham/snap-captions) | Community Snap Captions distribution and additional caption styles. The older licitfree link redirects here. | Public | 27 | 2025-03-22 |
| [veritus-git/BadWords](https://github.com/veritus-git/BadWords) | Local transcript-based rough cutting, including silence, filler-word, and retake handling. | Free | 31 | 2026-09-04 |
| [oliwoli/HushCut](https://github.com/oliwoli/HushCut) | Silence-based editing helper for Resolve workflows. | Public | 19 | 2025-12-30 |
| [YourAverageMo/auto-silence-cut](https://github.com/YourAverageMo/auto-silence-cut) | Automatic silence cutting with an editable Resolve workflow. | Public | 24 | 2025-09-24 |
| [2445868686/DaVinci-Resolve-TTS](https://github.com/2445868686/DaVinci-Resolve-TTS) | Text-to-speech integrations with external voice providers; provider usage can cost money. | Mixed | 19 | 2025-09-01 |
| [2445868686/DaVinci-Resolve-Whisper](https://github.com/2445868686/DaVinci-Resolve-Whisper) | Whisper transcription through local or cloud-backed workflows. | Public; optional service costs | 10 | 2025-09-03 |
| [Nusscookie/clautter](https://github.com/Nusscookie/clautter) | AI-assisted talking-head cleanup. **Beta.** A paid installer is planned, while the plugin remains free. | Free | 1 | 2026-06-22 |
| [ikm-san/autotitles-community](https://github.com/ikm-san/autotitles-community) | CLI/API subtitle-to-Fusion-title workflow for **Studio**. Free for commercial video work, but **not open source**; separate GUI editions exist. | Mixed | 0 | 2026-07-09 |
| [WyattBlue/auto-editor](https://github.com/WyattBlue/auto-editor) | Standalone automatic editing with NLE timeline-export workflows; not a native Resolve plugin. | Public | 5164 | 2026-09-03 |
| [resolve-textplus-srt-importer](https://github.com/JiginJayaprakash/resolve-textplus-srt-importer) | Imports SRT subtitles as styled Fusion Text+ clips. | Free | 2 | 2026-03-19 |

<a id="category-4"></a>

## AI assistants, MCP servers, and ComfyUI integrations

6 repositories.

| Repository | What it provides | Access | Stars | Last updated (UTC) |
| --- | --- | --- | ---: | --- |
| [samuelgursky/davinci-resolve-mcp](https://github.com/samuelgursky/davinci-resolve-mcp) | AI-client access to media, timeline, rendering, and other Resolve operations through MCP. **Studio workflow.** | Public; AI costs separate | 2414 | 2026-09-06 |
| [barckley75/resolve-claude-mcp](https://github.com/barckley75/resolve-claude-mcp) | Claude/MCP integration for Resolve automation. | Public; AI costs separate | 350 | 2026-05-14 |
| [apvlv/davinci-resolve-mcp](https://github.com/apvlv/davinci-resolve-mcp) | Another Resolve/Fusion MCP implementation; capabilities differ from the other servers. | Public; AI costs separate | 77 | 2026-04-07 |
| [hoyt-harness/davinci-mcp-professional](https://github.com/hoyt-harness/davinci-mcp-professional) | MCP automation organized around Resolve workflows/domains. “Professional” is the project name, not proof of a paid license. | Public | 24 | 2026-09-03 |
| [barckley75/comfyUI_DaVinciResolve](https://github.com/barckley75/comfyUI_DaVinciResolve) | ComfyUI nodes connecting generative workflows to Resolve. | Public | 46 | 2024-06-21 |
| [CelaviiHQ/cutmaster-ai](https://github.com/CelaviiHQ/cutmaster-ai) | MCP toolkit and Resolve workflow panel. **The public toolkit is separate from the paid CutMaster Studio macOS app.** | Mixed | 3 | 2026-07-20 |

<a id="category-5"></a>

## Productivity scripts, workflow bridges, and integrations

13 repositories.

| Repository | What it provides | Access | Stars | Last updated (UTC) |
| --- | --- | --- | ---: | --- |
| [thatcherfreeman/resolve-scripts](https://github.com/thatcherfreeman/resolve-scripts) | Everyday Resolve/Fusion automation: timeline, metadata, render, relinking, and other helpers. | Public | 17 | 2026-08-05 |
| [X-Raym/DaVinci-Resolve-Scripts](https://github.com/X-Raym/DaVinci-Resolve-Scripts) | Free scripts for editing, markers, properties, and project workflows. | Free | 94 | 2025-10-13 |
| [jjsawdon/DaVinci-Resolve-Utilities](https://github.com/jjsawdon/DaVinci-Resolve-Utilities) | Proxy/cache utilities, YouTube chapter export, and project-template helpers. | Free | 44 | 2025-02-14 |
| [fukco/DaVinciResolveScript](https://github.com/fukco/DaVinciResolveScript) | Metadata and workflow scripting tools; check separately advertised products independently. | Public | 57 | 2026-04-02 |
| [VilleOlof/Toolbox](https://github.com/VilleOlof/Toolbox) | Modular Resolve productivity toolbox. **Archived—treat as legacy.** | Public | 61 | 2024-09-27 |
| [jdanna/Resolve_Tools_Public](https://github.com/jdanna/Resolve_Tools_Public) | Free scripts, DCTLs, and Fusion resources. | Free | 4 | 2026-08-24 |
| [IgorRidanovic/AfterEffects_to_DaVinci_Resolve](https://github.com/IgorRidanovic/AfterEffects_to_DaVinci_Resolve) | Brings After Effects renders into Resolve workflows. | Public | 39 | 2019-04-03 |
| [IgorRidanovic/DaVinciResolve-DynamicText](https://github.com/IgorRidanovic/DaVinciResolve-DynamicText) | Dynamic title/text scripting. | Public | 25 | 2020-07-05 |
| [FranzWegner/multicam-logger](https://github.com/FranzWegner/multicam-logger) | Logs camera switching into edit lists for post-production workflows. | Public | 38 | 2022-12-11 |
| [eric-with-a-c/resolve-otio](https://github.com/eric-with-a-c/resolve-otio) | OpenTimelineIO interoperability with Resolve. | Public | 27 | 2022-01-01 |
| [tin2tin/VSE_OTIO_Export](https://github.com/tin2tin/VSE_OTIO_Export) | Blender Video Sequence Editor timeline export through OpenTimelineIO. | Public | 32 | 2023-11-02 |
| [Font Scanner and Installer](https://github.com/MansiVisuals/Font-Scanner-and-Installer-for-DaVinci-Resolve) | Helps locate/install fonts for Resolve workflows. **Font licenses remain separate.** | Free | 5 | 2025-05-21 |
| [LucasHT22/davinci-resolve-wakatime](https://github.com/LucasHT22/davinci-resolve-wakatime) | WakaTime activity-tracking integration. External service terms are separate. | Public + service | 23 | 2025-06-16 |

<a id="category-6"></a>

## Encoding, codecs, proxy generation, rendering, and project servers

9 repositories.

| Repository | What it provides | Access | Stars | Last updated (UTC) |
| --- | --- | --- | ---: | --- |
| [EdvinNilsson/ffmpeg_encoder_plugin](https://github.com/EdvinNilsson/ffmpeg_encoder_plugin) | FFmpeg-powered export/encoding plugin for **Resolve Studio**. | Free | 230 | 2026-08-10 |
| [Toxblh/davinci-linux-aac-codec](https://github.com/Toxblh/davinci-linux-aac-codec) | AAC **encoding** plugin for Resolve Studio on Linux. | Public | 117 | 2025-08-13 |
| [Resolve Linux Studio AAC FDK Encoder](https://github.com/hexitnz/Resolve-Linux-Studio-AAC-FDK-Encoder-plugin) | FDK-based AAC audio encoding on Linux. **Studio required.** | Public | 29 | 2026-06-21 |
| [nowrep/dvcp-vaapi](https://github.com/nowrep/dvcp-vaapi) | VAAPI video encoder plugin. Check hardware, driver, and Resolve requirements. | Public | 39 | 2025-05-18 |
| [in03/proxima](https://github.com/in03/proxima) | Queues, distributes, encodes, and automatically links proxy media across workers. | Public | 74 | 2026-08-31 |
| [deadline-davinci-resolve](https://github.com/Puppetworks-Animation-Studio/deadline-davinci-resolve) | Thinkbox Deadline render-farm integration. Check current compatibility carefully. | Public; infrastructure separate | 38 | 2020-12-02 |
| [Docker DaVinci Resolve Project Server](https://github.com/elliotmatson/Docker-Davinci-Resolve-Project-Server) | Containerized PostgreSQL project server with automatic backups. | Free; infrastructure separate | 313 | 2026-08-06 |
| [PostgreSQL Workflow Tools](https://github.com/sethgoldin/davinci-resolve-postgresql-workflow-tools) | Automatic project-database backups and maintenance. | Public | 101 | 2023-03-16 |
| [jonnyhyman/ResolveCollaboration](https://github.com/jonnyhyman/ResolveCollaboration) | Utilities extending older live-collaboration workflows; compare against newer native options. | Public | 36 | 2022-04-20 |

<a id="category-7"></a>

## Linux installation, compatibility, and troubleshooting

8 repositories.

| Repository | What it provides | Access | Stars | Last updated (UTC) |
| --- | --- | --- | ---: | --- |
| [zelikos/davincibox](https://github.com/zelikos/davincibox) | Containerized Resolve dependencies using Distrobox/Podman; particularly aimed at atomic/image-based distributions. | Free | 980 | 2026-08-29 |
| [fat-tire/resolve](https://github.com/fat-tire/resolve) | Container scripts for building and running Resolve on Linux. | Public | 298 | 2025-08-30 |
| [H3rz3n/davinci-helper](https://github.com/H3rz3n/davinci-helper) | Linux companion utilities for Resolve. | Public | 313 | 2025-07-29 |
| [flolu/davinci-resolve-linux](https://github.com/flolu/davinci-resolve-linux) | Setup instructions and import/export workarounds. | Public | 263 | 2025-03-31 |
| [Ashark/davinci-resolve-checker](https://github.com/Ashark/davinci-resolve-checker) | Checks system configuration and hardware suitability for Resolve. | Public | 174 | 2026-03-13 |
| [psygreg/autoresolvedeb](https://github.com/psygreg/autoresolvedeb) | Automates downloading and repackaging Resolve through MakeResolveDeb. | Public | 29 | 2026-08-29 |
| [yioannides/fedora-resolve](https://github.com/yioannides/fedora-resolve) | Fedora installation scripts. **The maintainer warns the method may already be obsolete.** | Free; legacy warning | 26 | 2026-08-08 |
| [Chillsmeit/resolve-tumbleweed](https://github.com/Chillsmeit/resolve-tumbleweed) | openSUSE Tumbleweed fixes. **Maintainer no longer uses that distribution.** | Free; maintenance caution | 21 | 2026-08-03 |

<a id="category-8"></a>

## Developer libraries and scripting references

5 repositories.

| Repository | What it provides | Access | Stars | Last updated (UTC) |
| --- | --- | --- | ---: | --- |
| [pedrolabonia/pydavinci](https://github.com/pedrolabonia/pydavinci) | Higher-level Python package for scripting Resolve. | Public | 181 | 2026-04-01 |
| [WheheoHu/pybmd](https://github.com/WheheoHu/pybmd) | Python wrapper around the Resolve API. | Public | 34 | 2026-07-10 |
| [diop/davinci-resolve-api](https://github.com/diop/davinci-resolve-api) | Community Python API documentation. Treat it as a reference, not the latest official SDK. | Free reference | 98 | 2019-03-12 |
| [MokshC/easyDCTL](https://github.com/MokshC/easyDCTL) | Interface/tooling for creating DCTLs. | Public | 4 | 2024-10-02 |
| [Fusion Studio FuScript IDE Tools](https://github.com/AndrewHazelden/Fusion-Studio-FuScript-IDE-Tools-and-Pipeline-Scripts) | IDE and pipeline scripting integrations, including macOS/BBEdit-oriented workflows. | Public | 9 | 2018-09-18 |

<a id="category-9"></a>

## Hardware, control surfaces, MIDI, and Speed Editor tools

6 repositories.

| Repository | What it provides | Access | Stars | Last updated (UTC) |
| --- | --- | --- | ---: | --- |
| [Unbound Editor Device Customizer](https://github.com/PuzzleEmptyM/Unbound-editor-device-customizer) | Remaps controller buttons and jog-wheel actions outside Resolve; Windows/macOS builds. | Public; hardware separate | 43 | 2026-04-01 |
| [XTouchMini Resolve MIDI Adapter](https://github.com/fashberg/XTouchMini-Davinci-Resolve-Midi-Adapter) | Uses a Behringer X-Touch Mini to control Resolve through Windows hotkeys. | Public; hardware separate | 30 | 2021-02-14 |
| [RudyB24/AutoHotKey_Bome_MIDI_2_Key](https://github.com/RudyB24/AutoHotKey_Bome_MIDI_2_Key) | Maps incoming MIDI messages to Resolve keyboard shortcuts. | Public; dependencies separate | 21 | 2022-11-08 |
| [shaise/DiSE](https://github.com/shaise/DiSE) | DIY speed-editor hardware for Resolve and other video-editing applications. | Public; build cost | 60 | 2023-02-08 |
| [KipJM/blackmacro-hardware](https://github.com/KipJM/blackmacro-hardware) | Configurable DIY editing keyboard based on Raspberry Pi Pico 2W. | Public; build cost | 23 | 2026-08-23 |
| [derwok/SpeedEditorCheatSheet](https://github.com/derwok/SpeedEditorCheatSheet) | Printable Speed Editor reference/cheat sheet. | Free reference | 41 | 2024-01-09 |

<a id="category-10"></a>

## Directories covering free and commercial products

5 repositories.

| Repository | What it provides | Access | Stars | Last updated (UTC) |
| --- | --- | --- | ---: | --- |
| [Greenysmac/awesome-davinci-resolve](https://github.com/Greenysmac/awesome-davinci-resolve) | Broad community directory spanning AI tools, audio, DCTLs, effects, templates, and workflows. | Free/paid product directory | 284 | 2026-05-20 |
| [cutbypham/awesome-davinci-resolve](https://github.com/cutbypham/awesome-davinci-resolve) | Plugins, scripts, assets, and editing resources. Bundled copies may be older than upstream releases. | Free/paid resource directory | 63 | 2026-08-27 |
| [Akascape/PluginLibrary-Resolve](https://github.com/Akascape/PluginLibrary-Resolve) | Launcher/catalogue linking to free and commercial plugins; it does not grant paid-product licenses. | Mixed | 10 | 2026-08-23 |
| [hassaancode/Fx-Library](https://github.com/hassaancode/Fx-Library) | Resolve/After Effects effects and creative-resource directory. | Mixed | 2 | 2025-12-21 |
| [CommandPost/ResolveCafe](https://github.com/CommandPost/ResolveCafe) | Community references, developer material, and website source. **Archived in May 2025.** | Free reference; archived | 20 | 2024-05-23 |

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

All listed projects belong to their respective authors and retain their own licenses. This directory links to upstream repositories and does not redistribute their code, binaries, or assets. Inclusion does not imply endorsement or affiliation with Blackmagic Design or the listed maintainers.
