# 🎬 Awesome Resolve (AI-assisted List)

A curated directory of **225 public GitHub repositories** for DaVinci Resolve and Fusion, covering color grading, visual effects, subtitles, automation, Linux support, development, and hardware.

Browse the categories below or download the [CSV catalogue](data/repositories.csv) for filtering and importing into a spreadsheet. Explore [🌐 tools beyond GitHub](data/external-tools.md), the [🔎 web discovery report](data/web-discovery-report.md), [plugin wiki discoveries](data/wiki-discovery-report.md), and the [changelog](CHANGELOG.md).

## Access labels

- **Free**: the research identified explicit free availability or an open-source license.
- **Public**: repository files are accessible; licensing, commercial reuse rights, and ready-made binaries have not been fully audited.
- **Mixed**: separate paid editions, optional paid services, or a catalogue containing commercial products.

Qualifiers identify separate service, infrastructure, or hardware costs. Resolve Studio requirements are separate from the price of a listed project. Public availability does not necessarily mean open source. Consult each upstream repository for current requirements and licensing.

## Contents

### ↕️ Sort the catalogue

[🕒 Latest updated](views/latest-updated.md) · [🔤 Name](views/name.md) · [🏷️ Type](views/type.md) · [⭐ Stars](views/stars.md) · [💰 Access](views/access.md)

Each category starts with an all-repositories list sorted A–Z by repository name. Creator subheadings follow for owners with multiple repositories, ordered A–Z by GitHub owner; their tools also sort A–Z. These repeat entries from the complete list for browsing by creator. Choose a view above for a catalogue-wide sort. **Type** means the catalogue category.

### 🏷️ Labels

![Free](assets/badges/free.svg) Explicit free availability or open-source license · ![Public](assets/badges/public.svg) Public files; licensing not fully audited · ![Mixed](assets/badges/mixed.svg) Free and paid offerings.

Access qualifiers and compatibility details remain in each entry. Stars and relative ages use the metadata-check timestamp recorded in the CSV.

<a id="platforms-supported"></a>

### 💻 Platforms supported

| Platform | Meaning |
| --- | --- |
| 🪟 Windows | Windows support or installation documented upstream. |
| 🍎 macOS | Mac support or installation documented upstream; check Intel/Apple Silicon notes. |
| 🐧 Linux | Linux support or installation documented upstream; distribution and GPU requirements vary. |
| 📱 iPadOS | An iPad workflow is explicitly documented; Resolve version restrictions may apply. |
| 📖 Reference | Documentation or a directory, not a desktop-platform compatibility claim. |
| ❔ Unverified | Platform support has not been established from the reviewed documentation. |

Click an entry's platform labels for its upstream source. Labels reflect documented support or installation instructions, not our own installation tests. Omitted platforms are unverified, not necessarily unsupported. Untested, partial, hardware, and server-host limitations are shown beside the labels. Platform review dates and sources are recorded separately in the CSV; refreshing stars does not recheck platform support.

### 🗂️ Browse by category

- [🎨 Color grading, DCTLs, film looks, and color science](#category-1) (49)
- [✨ Fusion, motion graphics, visual effects, and package management](#category-2) (46)
- [💬 Subtitles, transcription, dialogue cleanup, and automatic editing](#category-3) (19)
- [🤖 AI assistants, MCP servers, and ComfyUI integrations](#category-4) (8)
- [🛠️ Productivity scripts, workflow bridges, and integrations](#category-5) (46)
- [🎞️ Encoding, codecs, proxy generation, rendering, and project servers](#category-6) (18)
- [🐧 Linux installation, compatibility, and troubleshooting](#category-7) (11)
- [📚 Developer libraries and scripting references](#category-8) (12)
- [🎛️ Hardware, control surfaces, MIDI, and Speed Editor tools](#category-9) (11)
- [🧭 Directories covering free and commercial products](#category-10) (5)
- [⚠️ Compatibility notes](#compatibility-notes)
- [🤝 Contributing](#contributing)

<a id="category-1"></a>

## 🎨 Color grading, DCTLs, film looks, and color science

49 repositories.

### All repositories

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [thatcherfreeman/aces-transforms](https://github.com/thatcherfreeman/aces-transforms) | Custom ACES input and output transforms. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS](https://github.com/thatcherfreeman/aces-transforms#readme) | 60 | 1 week back |
| [baldavenger/ACES_DCTL](https://github.com/baldavenger/ACES_DCTL) | ACES color transforms implemented as DCTLs for Resolve Studio. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/baldavenger/ACES_DCTL#readme) | 73 | 5 years back |
| [sobotka/AgX-Resolve](https://github.com/sobotka/AgX-Resolve) | AgX picture-formation/display transform for Resolve—not simply a film-look LUT. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/sobotka/AgX-Resolve#readme) | 110 | 1 year back |
| [EaryChow/Blender-AgX-Resolve](https://github.com/EaryChow/Blender-AgX-Resolve) | Experimental AgX fork with defaults aimed at Blender matching, separate working primaries, and added controls. Distinct from sobotka/AgX-Resolve; not installation-tested. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/EaryChow/Blender-AgX-Resolve#readme) | 3 | 11 months back |
| [ciqueira/ColorEqualizer](https://github.com/ciqueira/ColorEqualizer) | Ten-band hue, saturation, and brightness OpenFX equalizer inspired by darktable. Requires a free GitHub-linked activation key through MCNexus. | ![Free](assets/badges/free.svg) Free; source-available, activation required | [🪟 Windows · 🍎 macOS](https://github.com/ciqueira/ColorEqualizer#readme)<br><sub>Windows x64 and macOS Intel/Apple Silicon documented.</sub> | 9 | 2 days back |
| [exones/davinci](https://github.com/exones/davinci) | Custom Resolve DCTL effects. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/exones/davinci#readme) | 2 | 1 year back |
| [Georj01/davinci-dctl](https://github.com/Georj01/davinci-dctl) | Minimalist DCTL visual tools and effects. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS](https://github.com/Georj01/davinci-dctl#readme) | 2 | 1 month back |
| [KaurHendrikson/DaVinci-Resolve-DCTLs](https://github.com/KaurHendrikson/DaVinci-Resolve-DCTLs) | DCTL boilerplates, reusable code snippets, example effects, and camera/intermediate transfer functions. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/KaurHendrikson/DaVinci-Resolve-DCTLs#readme) | 39 | 1 year back |
| [OwenYou/DavinciResolveDCTL_ChromaticAdaptation](https://github.com/OwenYou/DavinciResolveDCTL_ChromaticAdaptation) | Chromatic-adaptation DCTL. Upstream testing covers Resolve 15; current-version compatibility unverified. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/OwenYou/DavinciResolveDCTL_ChromaticAdaptation#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 9 | 2 years back |
| [OwenYou/DavinciResolveDCTL_HKEstimation](https://github.com/OwenYou/DavinciResolveDCTL_HKEstimation) | Helmholtz-Kohlrausch effect estimation and compensation using four methods. Requires ACES2065-1 AP0/linear input; documented for Resolve 17. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/OwenYou/DavinciResolveDCTL_HKEstimation#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 14 | 4 years back |
| [OwenYou/DavinciResolveDCTL_RemoveColorMask](https://github.com/OwenYou/DavinciResolveDCTL_RemoveColorMask) | Interactive film color-mask removal DCTL. Upstream testing covers Resolve 15; current-version compatibility unverified. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/OwenYou/DavinciResolveDCTL_RemoveColorMask#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 12 | 2 years back |
| [caryknoop/DCTL](https://github.com/caryknoop/DCTL) | Diagnostic tools for marking and analyzing image changes through nodes. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/caryknoop/DCTL#readme) | 30 | 1 year back |
| [JuanPabloZambrano/DCTL](https://github.com/JuanPabloZambrano/DCTL) | Creative and technical DCTLs and Fusion Fuses, including the 2499 display rendering transform. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS](https://github.com/JuanPabloZambrano/DCTL#readme)<br><sub>Installation paths documented; individual tools have separate requirements.</sub> | 320 | 10 months back |
| [roukou3/DCTL](https://github.com/roukou3/DCTL) | Fisheye correction and projection conversion DCTL for Resolve Studio. Older documented Resolve versions and macOS GPU compatibility caveats. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/roukou3/DCTL#readme)<br><sub>README warns of macOS Metal compatibility problems; supported OS matrix is not established.</sub> | 37 | 3 years back |
| [olduvai-jp/DCTL-MLAA](https://github.com/olduvai-jp/DCTL-MLAA) | Morphological anti-aliasing in DCTL and Fuse forms. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS](https://github.com/olduvai-jp/DCTL-MLAA#readme) | 13 | 6 months back |
| [ra100/dctl-utils](https://github.com/ra100/dctl-utils) | Skin-tone indicator DCTL with hue, saturation, and luminance tolerances. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/ra100/dctl-utils#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 19 | 2 years back |
| [baldavenger/DCTLs](https://github.com/baldavenger/DCTLs) | Technical transforms, charts, noise, convolution, and grading utilities. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/baldavenger/DCTLs#readme) | 350 | 2 years back |
| [Demystify-Color/DCTLs](https://github.com/Demystify-Color/DCTLs) | DCTL tools and examples accompanying color-science tutorials; useful for learning and customization. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/Demystify-Color/DCTLs#readme) | 159 | 3 months back |
| [jai-panjwani/DCTLS](https://github.com/jai-panjwani/DCTLS) | Additional Resolve DCTL scripts. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/jai-panjwani/DCTLS#readme) | 22 | 1 year back |
| [kubabar/DCTLs](https://github.com/kubabar/DCTLs) | Technical color-space conversion tools, including XYZ conversion. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/kubabar/DCTLs#readme) | 2 | 2 years back |
| [MoazElgabry/DCTLs](https://github.com/MoazElgabry/DCTLs) | Look-development tools including filmic contrast, ratio shaping, localized contrast, and hue controls. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/MoazElgabry/DCTLs#readme) | 66 | 2 months back |
| [Xaryen/DCTLs](https://github.com/Xaryen/DCTLs) | Minimax-style DCTL for comparing effects with After Effects. Slow at larger values; author recommends Alpha Matte Shrink and Grow OFX for production. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/Xaryen/DCTLs#readme) | 1 | 2 years back |
| [thatcherfreeman/dwg-transforms](https://github.com/thatcherfreeman/dwg-transforms) | DCTL input transforms from camera and other color spaces into DaVinci Wide Gamut/Intermediate, including a GoPro GP-Log transform. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/thatcherfreeman/dwg-transforms#readme) | 109 | 1 month back |
| [fabiocolor/Faded-Balancer-DCTL](https://github.com/fabiocolor/Faded-Balancer-DCTL) | Rebalances faded film scans. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS](https://github.com/fabiocolor/Faded-Balancer-DCTL#readme) | 22 | 1 month back |
| [helios1138/filmeon](https://github.com/helios1138/filmeon) | Filmeon color-negative inversion DCTL for linear scans. Original DCTL workflow has been superseded by the developer's standalone web application. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS](https://github.com/helios1138/filmeon#readme)<br><sub>DCTL installation documented; use non-color-managed linear scan input.</sub> | 27 | 3 months back |
| [bobtronic73/free-DCTL](https://github.com/bobtronic73/free-DCTL) | 3x3 color-matrix and inverse-matrix DCTLs with a reusable color-math header. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/bobtronic73/free-DCTL#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 19 | 1 year back |
| [jedypod/gamut-compress](https://github.com/jedypod/gamut-compress) | Out-of-gamut color handling; includes DCTL and Fusion implementations. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/jedypod/gamut-compress#readme) | 110 | 4 years back |
| [hotgluebanjo/halation-dctl](https://github.com/hotgluebanjo/halation-dctl) | Adjustable halation with exponential falloff. Requires scene-linear input and the DCTL OFX effect; licensing not established. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/hotgluebanjo/halation-dctl#readme) | 103 | 2 years back |
| [LCS-VSP/LCS-DCTLs](https://github.com/LCS-VSP/LCS-DCTLs) | Creative color-science DCTL collection shared by LCS-VSP. Consult individual tools for working-space requirements. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/LCS-VSP/LCS-DCTLs#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 23 | 2 years back |
| [lakravana/Martis-Bleach-Bypass](https://github.com/lakravana/Martis-Bleach-Bypass) | Bleach-bypass-style DCTL look. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/lakravana/Martis-Bleach-Bypass#readme) | 0 | 1 month back |
| [MoazElgabry/ME_OpenDRT-OFX](https://github.com/MoazElgabry/ME_OpenDRT-OFX) | OpenDRT 1.1 port to OpenFX with UI controls and presets. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/MoazElgabry/ME_OpenDRT-OFX#readme)<br><sub>GPU backend varies by OS; macOS Intel and Apple Silicon documented.</sub> | 11 | 1 month back |
| [Wavechaser/NamiColor](https://github.com/Wavechaser/NamiColor) | Linearizes film scans and aligns channels for scene-referred grading. Studio required. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/Wavechaser/NamiColor#readme) | 122 | 2 years back |
| [nikita-petrovich/np-public-dctl](https://github.com/nikita-petrovich/np-public-dctl) | Experimental Lazy Bleach, Lazy Grain, and saturation DCTLs. Resolve Studio 19.1+; proof-of-concept tools. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/nikita-petrovich/np-public-dctl#readme)<br><sub>NVIDIA and Apple Silicon documented; other GPUs are untested.</sub> | 10 | 2 months back |
| [jedypod/open-display-transform](https://github.com/jedypod/open-display-transform) | Scene-linear, wide-gamut image rendering for SDR/HDR; includes Resolve Studio DCTLs. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/jedypod/open-display-transform#readme) | 517 | 6 months back |
| [mikaelsundell/photographic-dctls](https://github.com/mikaelsundell/photographic-dctls) | Photographic color-science experiments involving LogC, Cineon, negative inversion, and tone/color transforms. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS](https://github.com/mikaelsundell/photographic-dctls#readme) | 78 | 3 months back |
| [geoffsmithBK/primera-suite](https://github.com/geoffsmithBK/primera-suite) | Primera grading suite for exposure, contrast, hue, split toning, and skin adjustments. Resolve Studio; follow the color-managed input requirements. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/geoffsmithBK/primera-suite#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 2 | 1 week back |
| [xtremestuff/protune-transforms](https://github.com/xtremestuff/protune-transforms) | GoPro Protune and GP-Log transforms for managed color workflows. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux · 📱 iPadOS](https://github.com/xtremestuff/protune-transforms#readme)<br><sub>iPad workflow restrictions vary with Resolve version.</sub> | 176 | 3 months back |
| [Senthil360/RenderHub-DCTLs](https://github.com/Senthil360/RenderHub-DCTLs) | Creative and film-look DCTL collection for Resolve Studio. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS](https://github.com/Senthil360/RenderHub-DCTLs#readme) | 25 | 5 days back |
| [xtremestuff/resolve-aces](https://github.com/xtremestuff/resolve-aces) | Custom ACES input and output transforms. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux · 📱 iPadOS](https://github.com/xtremestuff/resolve-aces#readme)<br><sub>iPad requires Resolve 18.6.2 or newer.</sub> | 22 | 2 years back |
| [xtremestuff/resolve-dctl](https://github.com/xtremestuff/resolve-dctl) | Technical and utility DCTL library. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux · 📱 iPadOS](https://github.com/xtremestuff/resolve-dctl#readme) | 161 | 4 months back |
| [mitkunz/resolve_DCTLs](https://github.com/mitkunz/resolve_DCTLs) | Grading DCTLs including Technicolor-style RGB mixing, film saturation, adjustable grey cards, and letterboxing. GPL-3.0. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/mitkunz/resolve_DCTLs#readme) | 21 | 1 year back |
| [50asa/shitsukan-diffusion-kit](https://github.com/50asa/shitsukan-diffusion-kit) | Shitsukan multi-tap optical diffusion DCTL kit. Requires Resolve Studio and a scene-linear, four-tap blur node setup. | ![Free](assets/badges/free.svg) Free; MIT stated upstream | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/50asa/shitsukan-diffusion-kit#readme) | 9 | 3 months back |
| [Lo1s-pgn/Simple-LUT-Generator](https://github.com/Lo1s-pgn/Simple-LUT-Generator) | OpenFX pair for generating a color grid and exporting sampled LUTs. LUTs cannot faithfully capture spatial or temporal effects. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/Lo1s-pgn/Simple-LUT-Generator#readme)<br><sub>Windows and macOS 11+ universal builds.</sub> | 4 | 3 days back |
| [npeason/Tetra-DCTLOFX](https://github.com/npeason/Tetra-DCTLOFX) | Tetrahedral color manipulation through Resolve’s DCTL effect interface. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/npeason/Tetra-DCTLOFX#readme) | 197 | 5 years back |
| [xavijulez/Tetrahedral-Interpolation-DCTL](https://github.com/xavijulez/Tetrahedral-Interpolation-DCTL) | CIE XYZ tetrahedral color transformation ported to DCTL, with credits to the earlier Nuke and Fusion implementations. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/xavijulez/Tetrahedral-Interpolation-DCTL#readme) | 17 | 5 years back |
| [hotgluebanjo/TetraInterp-DCTL](https://github.com/hotgluebanjo/TetraInterp-DCTL) | Tetrahedral-interpolation-based color manipulation. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/hotgluebanjo/TetraInterp-DCTL#readme) | 78 | 2 years back |
| [RichardUffy/Uffy-PhotoChemical-Look-Process-for-DaVinci-Resolve-Studio](https://github.com/RichardUffy/Uffy-PhotoChemical-Look-Process-for-DaVinci-Resolve-Studio) | Film-look system combining DCTLs, LUTs, and PowerGrades in a Studio/DWG workflow. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/RichardUffy/Uffy-PhotoChemical-Look-Process-for-DaVinci-Resolve-Studio#readme) | 0 | 1 year back |
| [thatcherfreeman/utility-dctls](https://github.com/thatcherfreeman/utility-dctls) | Extensive creative and technical tools for exposure, contrast, saturation, diagnostics, and image effects. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/thatcherfreeman/utility-dctls#readme) | 412 | 5 days back |
| [shenmintao/V-Log-Alchemy](https://github.com/shenmintao/V-Log-Alchemy) | Film-look/color tools aimed at V-Log footage. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/shenmintao/V-Log-Alchemy#readme) | 357 | 2 weeks back |

### 👤 [baldavenger](https://github.com/baldavenger)

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [baldavenger/ACES_DCTL](https://github.com/baldavenger/ACES_DCTL) | ACES color transforms implemented as DCTLs for Resolve Studio. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/baldavenger/ACES_DCTL#readme) | 73 | 5 years back |
| [baldavenger/DCTLs](https://github.com/baldavenger/DCTLs) | Technical transforms, charts, noise, convolution, and grading utilities. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/baldavenger/DCTLs#readme) | 350 | 2 years back |

### 👤 [hotgluebanjo](https://github.com/hotgluebanjo)

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [hotgluebanjo/halation-dctl](https://github.com/hotgluebanjo/halation-dctl) | Adjustable halation with exponential falloff. Requires scene-linear input and the DCTL OFX effect; licensing not established. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/hotgluebanjo/halation-dctl#readme) | 103 | 2 years back |
| [hotgluebanjo/TetraInterp-DCTL](https://github.com/hotgluebanjo/TetraInterp-DCTL) | Tetrahedral-interpolation-based color manipulation. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/hotgluebanjo/TetraInterp-DCTL#readme) | 78 | 2 years back |

### 👤 [jedypod](https://github.com/jedypod)

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [jedypod/gamut-compress](https://github.com/jedypod/gamut-compress) | Out-of-gamut color handling; includes DCTL and Fusion implementations. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/jedypod/gamut-compress#readme) | 110 | 4 years back |
| [jedypod/open-display-transform](https://github.com/jedypod/open-display-transform) | Scene-linear, wide-gamut image rendering for SDR/HDR; includes Resolve Studio DCTLs. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/jedypod/open-display-transform#readme) | 517 | 6 months back |

### 👤 [MoazElgabry](https://github.com/MoazElgabry)

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [MoazElgabry/DCTLs](https://github.com/MoazElgabry/DCTLs) | Look-development tools including filmic contrast, ratio shaping, localized contrast, and hue controls. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/MoazElgabry/DCTLs#readme) | 66 | 2 months back |
| [MoazElgabry/ME_OpenDRT-OFX](https://github.com/MoazElgabry/ME_OpenDRT-OFX) | OpenDRT 1.1 port to OpenFX with UI controls and presets. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/MoazElgabry/ME_OpenDRT-OFX#readme)<br><sub>GPU backend varies by OS; macOS Intel and Apple Silicon documented.</sub> | 11 | 1 month back |

### 👤 [OwenYou](https://github.com/OwenYou)

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [OwenYou/DavinciResolveDCTL_ChromaticAdaptation](https://github.com/OwenYou/DavinciResolveDCTL_ChromaticAdaptation) | Chromatic-adaptation DCTL. Upstream testing covers Resolve 15; current-version compatibility unverified. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/OwenYou/DavinciResolveDCTL_ChromaticAdaptation#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 9 | 2 years back |
| [OwenYou/DavinciResolveDCTL_HKEstimation](https://github.com/OwenYou/DavinciResolveDCTL_HKEstimation) | Helmholtz-Kohlrausch effect estimation and compensation using four methods. Requires ACES2065-1 AP0/linear input; documented for Resolve 17. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/OwenYou/DavinciResolveDCTL_HKEstimation#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 14 | 4 years back |
| [OwenYou/DavinciResolveDCTL_RemoveColorMask](https://github.com/OwenYou/DavinciResolveDCTL_RemoveColorMask) | Interactive film color-mask removal DCTL. Upstream testing covers Resolve 15; current-version compatibility unverified. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/OwenYou/DavinciResolveDCTL_RemoveColorMask#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 12 | 2 years back |

### 👤 [thatcherfreeman](https://github.com/thatcherfreeman)

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [thatcherfreeman/aces-transforms](https://github.com/thatcherfreeman/aces-transforms) | Custom ACES input and output transforms. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS](https://github.com/thatcherfreeman/aces-transforms#readme) | 60 | 1 week back |
| [thatcherfreeman/dwg-transforms](https://github.com/thatcherfreeman/dwg-transforms) | DCTL input transforms from camera and other color spaces into DaVinci Wide Gamut/Intermediate, including a GoPro GP-Log transform. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/thatcherfreeman/dwg-transforms#readme) | 109 | 1 month back |
| [thatcherfreeman/utility-dctls](https://github.com/thatcherfreeman/utility-dctls) | Extensive creative and technical tools for exposure, contrast, saturation, diagnostics, and image effects. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/thatcherfreeman/utility-dctls#readme) | 412 | 5 days back |

### 👤 [xtremestuff](https://github.com/xtremestuff)

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [xtremestuff/protune-transforms](https://github.com/xtremestuff/protune-transforms) | GoPro Protune and GP-Log transforms for managed color workflows. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux · 📱 iPadOS](https://github.com/xtremestuff/protune-transforms#readme)<br><sub>iPad workflow restrictions vary with Resolve version.</sub> | 176 | 3 months back |
| [xtremestuff/resolve-aces](https://github.com/xtremestuff/resolve-aces) | Custom ACES input and output transforms. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux · 📱 iPadOS](https://github.com/xtremestuff/resolve-aces#readme)<br><sub>iPad requires Resolve 18.6.2 or newer.</sub> | 22 | 2 years back |
| [xtremestuff/resolve-dctl](https://github.com/xtremestuff/resolve-dctl) | Technical and utility DCTL library. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux · 📱 iPadOS](https://github.com/xtremestuff/resolve-dctl#readme) | 161 | 4 months back |

<a id="category-2"></a>

## ✨ Fusion, motion graphics, visual effects, and package management

46 repositories.

### All repositories

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [neezr/Anchor-Point-Corners-for-DaVinci-Resolve](https://github.com/neezr/Anchor-Point-Corners-for-DaVinci-Resolve) | Set Fusion anchor points to corners and edges. Studio instructions; timeline keyframes are unsupported. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/neezr/Anchor-Point-Corners-for-DaVinci-Resolve#readme) | 6 | 4 months back |
| [neezr/Auto-Rename-for-DaVinci-Resolve](https://github.com/neezr/Auto-Rename-for-DaVinci-Resolve) | Auto-rename Fusion MediaIn, Background, Text, and MultiMerge nodes based on their contents. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/neezr/Auto-Rename-for-DaVinci-Resolve#readme) | 17 | 4 months back |
| [baldavenger/BaldavengerPlugins](https://github.com/baldavenger/BaldavengerPlugins) | OpenFX image-processing and grading plugins; check older binaries against your system. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/baldavenger/BaldavengerPlugins#readme) | 148 | 5 years back |
| [Kartopod/BMD-FusionExtras](https://github.com/Kartopod/BMD-FusionExtras) | Fusion quality-of-life scripts including Blender-style viewer transform shortcuts and node workflow helpers. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/Kartopod/BMD-FusionExtras#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 20 | 7 months back |
| [Microck/boilify](https://github.com/Microck/boilify) | Line-boil OpenFX effect for hand-drawn jitter. Resolve Studio 20+ documented. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/Microck/boilify#readme) | 8 | 1 month back |
| [LudwigKienle/buckswood-post-plugins](https://github.com/LudwigKienle/buckswood-post-plugins) | Buckswood OpenFX/DCTL collection for lens effects, film emulation, cinematic effects, and debanding. Check current public release assets. | ![Free](assets/badges/free.svg) Free; original code MIT, third-party terms separate | [🪟 Windows · 🍎 macOS](https://github.com/LudwigKienle/buckswood-post-plugins#readme)<br><sub>Resolve build targets documented; Linux references apply to Baselight, not confirmed Resolve support.</sub> | 7 | 3 weeks back |
| [raghavdhin/CapitalEase](https://github.com/raghavdhin/CapitalEase) | Easing presets and live curve editing. Its UI requires Studio on Resolve 19.1+. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/raghavdhin/CapitalEase#readme) | 1 | 1 month back |
| [Mr-Robby/chat-generator-fuse](https://github.com/Mr-Robby/chat-generator-fuse) | Animated chat/message overlays. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/Mr-Robby/chat-generator-fuse#readme) | 0 | 11 months back |
| [silverqsy/cine-immersive-stabilizer](https://github.com/silverqsy/cine-immersive-stabilizer) | Convert URSA Cine Immersive BRAW gyro/IMU data into Fusion PanoMap rotation keyframes. | ![Public](assets/badges/public.svg) | [🍎 macOS](https://github.com/silverqsy/cine-immersive-stabilizer#readme)<br><sub>macOS 13+ on Apple Silicon documented.</sub> | 10 | 4 months back |
| [alexandremendoncaalvaro/CorridorKey-Runtime](https://github.com/alexandremendoncaalvaro/CorridorKey-Runtime) | Local AI keying with OpenFX, command-line, and desktop interfaces. Check its GPU support matrix. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/alexandremendoncaalvaro/CorridorKey-Runtime#readme)<br><sub>Windows NVIDIA RTX; macOS Apple Silicon. Other GPU tracks vary.</sub> | 745 | 1 month back |
| [rne1223/DaFusion](https://github.com/rne1223/DaFusion) | Learning-oriented/sample Fusion Fuses. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/rne1223/DaFusion#readme) | 1 | 5 years back |
| [andrewbry/DasGrainFusion](https://github.com/andrewbry/DasGrainFusion) | Experimental Fusion port of DasGrain. Incomplete features and known analysis/Lua issues remain. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/andrewbry/DasGrainFusion#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 8 | 8 months back |
| [mrJohnHolt/davinci-resolve-fusion-expressions](https://github.com/mrJohnHolt/davinci-resolve-fusion-expressions) | Expressions, macros, and reusable visual templates. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/mrJohnHolt/davinci-resolve-fusion-expressions#readme) | 2 | 3 months back |
| [Creative-Crafter/davinci-shortform-overlays](https://github.com/Creative-Crafter/davinci-shortform-overlays) | Fusion generator with switchable TikTok, Shorts, and Reels safe-zone overlays; distributed as a .drfx template. Check guides against current platform layouts. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/Creative-Crafter/davinci-shortform-overlays#readme) | 5 | 2 weeks back |
| [Dec18studios/Dec18-Plugin-Manager](https://github.com/Dec18studios/Dec18-Plugin-Manager) | Plugin download/update manager with hash checks and backups. Individual plugins have separate licenses and may be paid. | ![Mixed](assets/badges/mixed.svg) Mixed; plugin licenses separate | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/Dec18studios/Dec18-Plugin-Manager#readme) | 6 | 3 weeks back |
| [Demystify-Color/DMC-BaldavengerOFX-MacOSarm64](https://github.com/Demystify-Color/DMC-BaldavengerOFX-MacOSarm64) | Baldavenger OpenFX collection rebuilt as macOS universal binaries. A distinct distribution port of the original plugins. | ![Free](assets/badges/free.svg) | [🍎 macOS](https://github.com/Demystify-Color/DMC-BaldavengerOFX-MacOSarm64#readme)<br><sub>Intel and Apple Silicon universal builds.</sub> | 13 | 3 months back |
| [brunocbreis/FuAlign](https://github.com/brunocbreis/FuAlign) | Align and distribute visual elements in Fusion compositions. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS](https://github.com/brunocbreis/FuAlign#readme) | 33 | 4 years back |
| [AntonChernov86/Fuses](https://github.com/AntonChernov86/Fuses) | Custom Fusion Fuse collection. | ![Public](assets/badges/public.svg) | [🪟 Windows](https://github.com/AntonChernov86/Fuses#readme) | 0 | 2 years back |
| [bryab/fusion-for-cartoons](https://github.com/bryab/fusion-for-cartoons) | Fusion macros for cartoon and animation compositing, including procedural rim-light masks. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/bryab/fusion-for-cartoons#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 6 | 1 year back |
| [fabiof17/Fusion-tools](https://github.com/fabiof17/Fusion-tools) | Fusion macros including color compression and expansion helpers. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/fabiof17/Fusion-tools#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 15 | 5 years back |
| [Spicy-Acorn/fusionjson](https://github.com/Spicy-Acorn/fusionjson) | Fusion nodes for JSON file reading, writing, and value manipulation. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/Spicy-Acorn/fusionjson#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 9 | 6 years back |
| [Spicy-Acorn/fusionmatrix](https://github.com/Spicy-Acorn/fusionmatrix) | Fusion matrix-math Fuse library; requires the separate lua-matrix dependency. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/Spicy-Acorn/fusionmatrix#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 7 | 6 years back |
| [Spicy-Acorn/fusionnumber](https://github.com/Spicy-Acorn/fusionnumber) | Fusion numeric arithmetic nodes exposed as a Fuse library. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/Spicy-Acorn/fusionnumber#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 6 | 5 years back |
| [Spicy-Acorn/fusiontext](https://github.com/Spicy-Acorn/fusiontext) | Fusion Fuse nodes for string creation, joining, formatting, and length operations. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/Spicy-Acorn/fusiontext#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 11 | 5 years back |
| [Spicy-Acorn/fusionvector](https://github.com/Spicy-Acorn/fusionvector) | Fusion vector-math nodes; requires the FusionMatrix dependency. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/Spicy-Acorn/fusionvector#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 4 | 6 years back |
| [ChrisRidings/GifSaverFuse](https://github.com/ChrisRidings/GifSaverFuse) | GIF saving/export from Fusion. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS](https://github.com/ChrisRidings/GifSaverFuse#readme) | 18 | 5 years back |
| [VladasTamosiunas/GPX-Visualization-Davinci](https://github.com/VladasTamosiunas/GPX-Visualization-Davinci) | Generate Fusion map and GPS-track overlays from GPX data synchronized to video. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/VladasTamosiunas/GPX-Visualization-Davinci#readme) | 14 | 1 year back |
| [gyroflow/gyroflow-plugins](https://github.com/gyroflow/gyroflow-plugins) | Gyro-data-driven stabilization through OpenFX and other plugin formats. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/gyroflow/gyroflow-plugins#readme) | 122 | 4 days back |
| [EmberLightVFX/Gyroflow-to-CSV](https://github.com/EmberLightVFX/Gyroflow-to-CSV) | Gyro telemetry export for Fusion camera/data-driven workflows. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/EmberLightVFX/Gyroflow-to-CSV#readme) | 18 | 3 years back |
| [hiroshisaito/HS_fusionTools](https://github.com/hiroshisaito/HS_fusionTools) | Environment relighting and latlong/angular image-mapping macros. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/hiroshisaito/HS_fusionTools#readme)<br><sub>Tested in Fusion 16; upstream describes Resolve compatibility as probable, not verified.</sub> | 9 | 6 years back |
| [Kartaverse/Kartaverse-Docs](https://github.com/Kartaverse/Kartaverse-Docs) | KartaVR and immersive-workflow documentation. KartaVR active support ended in January 2026, although packages remain available through Reactor. | ![Free](assets/badges/free.svg) Free reference | [📖 Reference](https://github.com/Kartaverse/Kartaverse-Docs#readme) | 11 | 1 month back |
| [murtazatunio/lenscorrect-ofx](https://github.com/murtazatunio/lenscorrect-ofx) | Lensfun/DNG-based lens distortion, vignetting, and lateral chromatic-aberration correction OpenFX. | ![Free](assets/badges/free.svg) | [🍎 macOS](https://github.com/murtazatunio/lenscorrect-ofx#readme)<br><sub>macOS 12+ on Apple Silicon only; Windows is planned.</sub> | 9 | 1 month back |
| [BasketOfNekos/Midi-based-Animation-Iterator-For-DaVinci-Resolve](https://github.com/BasketOfNekos/Midi-based-Animation-Iterator-For-DaVinci-Resolve) | Drives Fusion animation from MIDI data. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/BasketOfNekos/Midi-based-Animation-Iterator-For-DaVinci-Resolve#readme) | 7 | 1 month back |
| [ntsc-rs/ntsc-rs](https://github.com/ntsc-rs/ntsc-rs) | VHS, NTSC, and analog-video effects, including an OpenFX plugin. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/ntsc-rs/ntsc-rs/releases/latest) | 2552 | Today |
| [nikita-petrovich/OFX-QRCoder](https://github.com/nikita-petrovich/OFX-QRCoder) | Proof-of-concept QR-code generator for Resolve and other OpenFX hosts. macOS distribution; Windows support and performance optimization remain on the upstream to-do list. | ![Free](assets/badges/free.svg) | [🍎 macOS](https://github.com/nikita-petrovich/OFX-QRCoder#readme)<br><sub>Windows version is listed as future work.</sub> | 7 | 1 year back |
| [purzbeats/purzos-ofx](https://github.com/purzbeats/purzos-ofx) | Purzos collection of retro, analog, glitch, CRT, and VHS OpenFX effects. | ![Free](assets/badges/free.svg) Free; MIT stated upstream | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/purzbeats/purzos-ofx#readme)<br><sub>Windows/Linux x64 and macOS ARM64 packages; macOS builds are unsigned.</sub> | 23 | 1 month back |
| [Kartaverse/Reactor-Standalone](https://github.com/Kartaverse/Reactor-Standalone) | Standalone desktop package manager for community Fusion/Resolve tools. Beta; package compatibility varies. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/Kartaverse/Reactor-Standalone#readme) | 95 | 1 week back |
| [Akascape/Rembg-Fuse](https://github.com/Akascape/Rembg-Fuse) | AI background removal inside Fusion using external Python/model dependencies. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/Akascape/Rembg-Fuse#readme) | 208 | 2 months back |
| [Akascape/RemObj-Fuse](https://github.com/Akascape/RemObj-Fuse) | Masked object removal/inpainting using LaMa; README supports Free and Studio. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/Akascape/RemObj-Fuse#readme) | 20 | 2 months back |
| [nmbr73/Shaderfuse](https://github.com/nmbr73/Shaderfuse) | Shadertoy-style GPU shaders converted into Fusion Fuses. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS](https://github.com/nmbr73/Shaderfuse#readme) | 78 | 1 day back |
| [J-i-P-i/Shadertoys](https://github.com/J-i-P-i/Shadertoys) | Experimental Shadertoy-to-Fusion shader collection/incubator. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/J-i-P-i/Shadertoys#readme) | 4 | 3 years back |
| [brunocbreis/SplitScreener](https://github.com/brunocbreis/SplitScreener) | SplitScreener layout generator producing Fusion compositions for split-screen grids; distinct from its in-composition script version. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/brunocbreis/SplitScreener#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 8 | 4 years back |
| [brunocbreis/SS-CompScript](https://github.com/brunocbreis/SS-CompScript) | In-composition SplitScreener interface for arranging Fusion split-screen layouts. Beta documentation targets Resolve/Fusion 18. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS](https://github.com/brunocbreis/SS-CompScript#readme) | 11 | 4 years back |
| [Akascape/Super-Style-Transfer-Fuse](https://github.com/Akascape/Super-Style-Transfer-Fuse) | Neural artistic style transfer inside Fusion. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/Akascape/Super-Style-Transfer-Fuse#readme) | 3 | 1 week back |
| [EmberLightVFX/Tetrahedral-Interpolation-for-Fusion](https://github.com/EmberLightVFX/Tetrahedral-Interpolation-for-Fusion) | Fusion implementation of tetrahedral color manipulation. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/EmberLightVFX/Tetrahedral-Interpolation-for-Fusion#readme) | 32 | 5 years back |
| [Kartaverse/VonkUltra](https://github.com/Kartaverse/VonkUltra) | Data-driven and generative node tools for Fusion. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/Kartaverse/VonkUltra#readme) | 11 | 1 month back |

### 👤 [Akascape](https://github.com/Akascape)

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [Akascape/Rembg-Fuse](https://github.com/Akascape/Rembg-Fuse) | AI background removal inside Fusion using external Python/model dependencies. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/Akascape/Rembg-Fuse#readme) | 208 | 2 months back |
| [Akascape/RemObj-Fuse](https://github.com/Akascape/RemObj-Fuse) | Masked object removal/inpainting using LaMa; README supports Free and Studio. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/Akascape/RemObj-Fuse#readme) | 20 | 2 months back |
| [Akascape/Super-Style-Transfer-Fuse](https://github.com/Akascape/Super-Style-Transfer-Fuse) | Neural artistic style transfer inside Fusion. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/Akascape/Super-Style-Transfer-Fuse#readme) | 3 | 1 week back |

### 👤 [brunocbreis](https://github.com/brunocbreis)

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [brunocbreis/FuAlign](https://github.com/brunocbreis/FuAlign) | Align and distribute visual elements in Fusion compositions. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS](https://github.com/brunocbreis/FuAlign#readme) | 33 | 4 years back |
| [brunocbreis/SplitScreener](https://github.com/brunocbreis/SplitScreener) | SplitScreener layout generator producing Fusion compositions for split-screen grids; distinct from its in-composition script version. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/brunocbreis/SplitScreener#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 8 | 4 years back |
| [brunocbreis/SS-CompScript](https://github.com/brunocbreis/SS-CompScript) | In-composition SplitScreener interface for arranging Fusion split-screen layouts. Beta documentation targets Resolve/Fusion 18. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS](https://github.com/brunocbreis/SS-CompScript#readme) | 11 | 4 years back |

### 👤 [EmberLightVFX](https://github.com/EmberLightVFX)

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [EmberLightVFX/Gyroflow-to-CSV](https://github.com/EmberLightVFX/Gyroflow-to-CSV) | Gyro telemetry export for Fusion camera/data-driven workflows. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/EmberLightVFX/Gyroflow-to-CSV#readme) | 18 | 3 years back |
| [EmberLightVFX/Tetrahedral-Interpolation-for-Fusion](https://github.com/EmberLightVFX/Tetrahedral-Interpolation-for-Fusion) | Fusion implementation of tetrahedral color manipulation. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/EmberLightVFX/Tetrahedral-Interpolation-for-Fusion#readme) | 32 | 5 years back |

### 👤 [Kartaverse](https://github.com/Kartaverse)

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [Kartaverse/Kartaverse-Docs](https://github.com/Kartaverse/Kartaverse-Docs) | KartaVR and immersive-workflow documentation. KartaVR active support ended in January 2026, although packages remain available through Reactor. | ![Free](assets/badges/free.svg) Free reference | [📖 Reference](https://github.com/Kartaverse/Kartaverse-Docs#readme) | 11 | 1 month back |
| [Kartaverse/Reactor-Standalone](https://github.com/Kartaverse/Reactor-Standalone) | Standalone desktop package manager for community Fusion/Resolve tools. Beta; package compatibility varies. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/Kartaverse/Reactor-Standalone#readme) | 95 | 1 week back |
| [Kartaverse/VonkUltra](https://github.com/Kartaverse/VonkUltra) | Data-driven and generative node tools for Fusion. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/Kartaverse/VonkUltra#readme) | 11 | 1 month back |

### 👤 [neezr](https://github.com/neezr)

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [neezr/Anchor-Point-Corners-for-DaVinci-Resolve](https://github.com/neezr/Anchor-Point-Corners-for-DaVinci-Resolve) | Set Fusion anchor points to corners and edges. Studio instructions; timeline keyframes are unsupported. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/neezr/Anchor-Point-Corners-for-DaVinci-Resolve#readme) | 6 | 4 months back |
| [neezr/Auto-Rename-for-DaVinci-Resolve](https://github.com/neezr/Auto-Rename-for-DaVinci-Resolve) | Auto-rename Fusion MediaIn, Background, Text, and MultiMerge nodes based on their contents. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/neezr/Auto-Rename-for-DaVinci-Resolve#readme) | 17 | 4 months back |

### 👤 [Spicy-Acorn](https://github.com/Spicy-Acorn)

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [Spicy-Acorn/fusionjson](https://github.com/Spicy-Acorn/fusionjson) | Fusion nodes for JSON file reading, writing, and value manipulation. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/Spicy-Acorn/fusionjson#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 9 | 6 years back |
| [Spicy-Acorn/fusionmatrix](https://github.com/Spicy-Acorn/fusionmatrix) | Fusion matrix-math Fuse library; requires the separate lua-matrix dependency. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/Spicy-Acorn/fusionmatrix#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 7 | 6 years back |
| [Spicy-Acorn/fusionnumber](https://github.com/Spicy-Acorn/fusionnumber) | Fusion numeric arithmetic nodes exposed as a Fuse library. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/Spicy-Acorn/fusionnumber#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 6 | 5 years back |
| [Spicy-Acorn/fusiontext](https://github.com/Spicy-Acorn/fusiontext) | Fusion Fuse nodes for string creation, joining, formatting, and length operations. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/Spicy-Acorn/fusiontext#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 11 | 5 years back |
| [Spicy-Acorn/fusionvector](https://github.com/Spicy-Acorn/fusionvector) | Fusion vector-math nodes; requires the FusionMatrix dependency. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/Spicy-Acorn/fusionvector#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 4 | 6 years back |

<a id="category-3"></a>

## 💬 Subtitles, transcription, dialogue cleanup, and automatic editing

19 repositories.

### All repositories

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [WyattBlue/auto-editor](https://github.com/WyattBlue/auto-editor) | Standalone automatic editing with NLE timeline-export workflows; not a native Resolve plugin. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/WyattBlue/auto-editor#readme) | 5164 | 3 days back |
| [YourAverageMo/auto-silence-cut](https://github.com/YourAverageMo/auto-silence-cut) | Automatic silence cutting with an editable Resolve workflow. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS](https://github.com/YourAverageMo/auto-silence-cut#readme) | 24 | 11 months back |
| [tmoroney/auto-subs](https://github.com/tmoroney/auto-subs) | Local transcription and styled/animated subtitle workflows, with standalone and Resolve integration. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/tmoroney/auto-subs#readme) | 4137 | Today |
| [acrilique/automarker-clay](https://github.com/acrilique/automarker-clay) | Music-tempo beat detection and timeline markers for Resolve Studio, Premiere Pro, and After Effects. Successor to the archived AutoMarker. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/acrilique/automarker-clay#readme)<br><sub>Linux AppImage exists, but upstream discourages Linux use because testing is limited.</sub> | 10 | 8 months back |
| [ikm-san/autotitles-community](https://github.com/ikm-san/autotitles-community) | CLI/API subtitle-to-Fusion-title workflow for Studio. Free for commercial video work, but not open source; separate GUI editions exist. | ![Mixed](assets/badges/mixed.svg) | [❔ Unverified](https://github.com/ikm-san/autotitles-community#readme) | 0 | 1 month back |
| [veritus-git/BadWords](https://github.com/veritus-git/BadWords) | Local transcript-based rough cutting, including silence, filler-word, and retake handling. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/veritus-git/BadWords#readme) | 31 | 1 day back |
| [Nusscookie/clautter](https://github.com/Nusscookie/clautter) | AI-assisted talking-head cleanup. Beta. A paid installer is planned, while the plugin remains free. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/Nusscookie/clautter#readme)<br><sub>macOS and Linux are listed but untested by the maintainer.</sub> | 1 | 2 months back |
| [randyrektor/DaVinci-Gate](https://github.com/randyrektor/DaVinci-Gate) | Analyze per-speaker podcast silence and rebuild gated audio tracks after preview. Requires Resolve 20+ and FFmpeg. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/randyrektor/DaVinci-Gate#readme) | 10 | 2 months back |
| [2445868686/DaVinci-Resolve-TTS](https://github.com/2445868686/DaVinci-Resolve-TTS) | Text-to-speech integrations with external voice providers; provider usage can cost money. | ![Mixed](assets/badges/mixed.svg) | [🪟 Windows · 🍎 macOS](https://github.com/2445868686/DaVinci-Resolve-TTS#readme) | 19 | 1 year back |
| [2445868686/DaVinci-Resolve-Whisper](https://github.com/2445868686/DaVinci-Resolve-Whisper) | Whisper transcription through local or cloud-backed workflows. | ![Public](assets/badges/public.svg) Public; optional service costs | [🪟 Windows · 🍎 macOS](https://github.com/2445868686/DaVinci-Resolve-Whisper#readme) | 10 | 1 year back |
| [abhirup780/fast-autocut](https://github.com/abhirup780/fast-autocut) | Silence removal that builds a new timeline while retaining externally recorded audio sync. Windows, Resolve Studio 18.5+, Python, and FFmpeg required. | ![Free](assets/badges/free.svg) | [🪟 Windows](https://github.com/abhirup780/fast-autocut#readme)<br><sub>Windows 10/11 only.</sub> | 1 | 2 months back |
| [oliwoli/HushCut](https://github.com/oliwoli/HushCut) | Silence-based editing helper for Resolve workflows. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/oliwoli/HushCut#readme) | 19 | 8 months back |
| [david-ca6/Resolve-OpenCaptions](https://github.com/david-ca6/Resolve-OpenCaptions) | Converts subtitles into editable Text+ clips; explicitly supports Free and Studio. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/david-ca6/Resolve-OpenCaptions#readme) | 30 | 3 weeks back |
| [postflows/resolve-text-index](https://github.com/postflows/resolve-text-index) | Search, edit, and CSV-round-trip Text+, MultiText, and subtitle text. Studio 20+, Python/PySide6; optional LanguageTool spell-check uses a local server or public API. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/postflows/resolve-text-index#readme) | 0 | 5 months back |
| [JiginJayaprakash/resolve-textplus-srt-importer](https://github.com/JiginJayaprakash/resolve-textplus-srt-importer) | Imports SRT subtitles as styled Fusion Text+ clips. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/JiginJayaprakash/resolve-textplus-srt-importer#readme) | 2 | 5 months back |
| [cutbypham/snap-captions](https://github.com/cutbypham/snap-captions) | Community Snap Captions distribution and additional caption styles. The older licitfree link redirects here. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/cutbypham/snap-captions#readme) | 27 | 1 year back |
| [in03/squawk](https://github.com/in03/squawk) | Archived Whisper subtitle integration that renders timeline audio, transcribes it, and imports subtitles. Resolve 18 only; no longer maintained. | ![Free](assets/badges/free.svg) Free; archived | [❔ Unverified](https://github.com/in03/squawk#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 40 | 1 year back |
| [atmosfar/srt_to_textplus](https://github.com/atmosfar/srt_to_textplus) | Generate animated Fusion TextPlus titles from SRT subtitles. Legacy external Python 2.7 workflow. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/atmosfar/srt_to_textplus#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 12 | 5 years back |
| [octimot/StoryToolkitAI](https://github.com/octimot/StoryToolkitAI) | Transcription, translation, search, and story-oriented editing. Local features are free; direct Resolve integration requires Studio. | ![Free](assets/badges/free.svg) Free; optional paid services | [❔ Unverified](https://github.com/octimot/StoryToolkitAI#readme) | 1009 | 1 month back |

### 👤 [2445868686](https://github.com/2445868686)

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [2445868686/DaVinci-Resolve-TTS](https://github.com/2445868686/DaVinci-Resolve-TTS) | Text-to-speech integrations with external voice providers; provider usage can cost money. | ![Mixed](assets/badges/mixed.svg) | [🪟 Windows · 🍎 macOS](https://github.com/2445868686/DaVinci-Resolve-TTS#readme) | 19 | 1 year back |
| [2445868686/DaVinci-Resolve-Whisper](https://github.com/2445868686/DaVinci-Resolve-Whisper) | Whisper transcription through local or cloud-backed workflows. | ![Public](assets/badges/public.svg) Public; optional service costs | [🪟 Windows · 🍎 macOS](https://github.com/2445868686/DaVinci-Resolve-Whisper#readme) | 10 | 1 year back |

<a id="category-4"></a>

## 🤖 AI assistants, MCP servers, and ComfyUI integrations

8 repositories.

### All repositories

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [barckley75/comfyUI_DaVinciResolve](https://github.com/barckley75/comfyUI_DaVinciResolve) | ComfyUI nodes connecting generative workflows to Resolve. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/barckley75/comfyUI_DaVinciResolve#readme) | 46 | 2 years back |
| [CelaviiHQ/cutmaster-ai](https://github.com/CelaviiHQ/cutmaster-ai) | MCP toolkit and Resolve workflow panel. The public toolkit is separate from the paid CutMaster Studio macOS app. | ![Mixed](assets/badges/mixed.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/CelaviiHQ/cutmaster-ai#readme)<br><sub>Public toolkit platforms; the separate paid Studio app is macOS-only.</sub> | 3 | 1 month back |
| [hoyt-harness/davinci-mcp-professional](https://github.com/hoyt-harness/davinci-mcp-professional) | MCP automation organized around Resolve workflows/domains. “Professional” is the project name, not proof of a paid license. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/hoyt-harness/davinci-mcp-professional#readme) | 24 | 2 days back |
| [apvlv/davinci-resolve-mcp](https://github.com/apvlv/davinci-resolve-mcp) | Another Resolve/Fusion MCP implementation; capabilities differ from the other servers. | ![Public](assets/badges/public.svg) Public; AI costs separate | [❔ Unverified](https://github.com/apvlv/davinci-resolve-mcp#readme) | 77 | 5 months back |
| [samuelgursky/davinci-resolve-mcp](https://github.com/samuelgursky/davinci-resolve-mcp) | AI-client access to media, timeline, rendering, and other Resolve operations through MCP. Studio workflow. | ![Public](assets/badges/public.svg) Public; AI costs separate | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/samuelgursky/davinci-resolve-mcp#readme) | 2414 | Today |
| [WDegan/metafootage-davinci-resolve](https://github.com/WDegan/metafootage-davinci-resolve) | Generate footage keywords and descriptions using Gemini or OpenAI. Selected frames are sent to the provider; API usage may cost extra. | ![Free](assets/badges/free.svg) Free; external API fees may apply | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/WDegan/metafootage-davinci-resolve#readme) | 4 | 7 months back |
| [barckley75/resolve-claude-mcp](https://github.com/barckley75/resolve-claude-mcp) | Claude/MCP integration for Resolve automation. | ![Public](assets/badges/public.svg) Public; AI costs separate | [🍎 macOS](https://github.com/barckley75/resolve-claude-mcp#readme)<br><sub>Tested on Apple Silicon only; Windows/Linux core tools unverified. Transcription and screenshots are macOS-only.</sub> | 350 | 3 months back |
| [wassermanproductions/unofficial-davinci-mcp](https://github.com/wassermanproductions/unofficial-davinci-mcp) | MCP integration with live Studio control and a Free-edition interchange workflow using FCPXML/LUTs. Studio 21 verified upstream. | ![Free](assets/badges/free.svg) | [🍎 macOS · 🐧 Linux](https://github.com/wassermanproductions/unofficial-davinci-mcp#readme) | 32 | 1 month back |

### 👤 [barckley75](https://github.com/barckley75)

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [barckley75/comfyUI_DaVinciResolve](https://github.com/barckley75/comfyUI_DaVinciResolve) | ComfyUI nodes connecting generative workflows to Resolve. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/barckley75/comfyUI_DaVinciResolve#readme) | 46 | 2 years back |
| [barckley75/resolve-claude-mcp](https://github.com/barckley75/resolve-claude-mcp) | Claude/MCP integration for Resolve automation. | ![Public](assets/badges/public.svg) Public; AI costs separate | [🍎 macOS](https://github.com/barckley75/resolve-claude-mcp#readme)<br><sub>Tested on Apple Silicon only; Windows/Linux core tools unverified. Transcription and screenshots are macOS-only.</sub> | 350 | 3 months back |

<a id="category-5"></a>

## 🛠️ Productivity scripts, workflow bridges, and integrations

46 repositories.

### All repositories

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [IgorRidanovic/AfterEffects_to_DaVinci_Resolve](https://github.com/IgorRidanovic/AfterEffects_to_DaVinci_Resolve) | Brings After Effects renders into Resolve workflows. | ![Public](assets/badges/public.svg) | [🪟 Windows](https://github.com/IgorRidanovic/AfterEffects_to_DaVinci_Resolve#readme)<br><sub>Distributed Windows version; other platforms require customization.</sub> | 39 | 7 years back |
| [vulture-s/arkiv](https://github.com/vulture-s/arkiv) | Local-first footage indexing, semantic search, metadata, and Resolve import/marker workflows. PolyForm Perimeter source-available licence; not MIT. Requires external local AI/media dependencies. | ![Free](assets/badges/free.svg) Free; source-available, restricted competing-product use | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/vulture-s/arkiv#readme)<br><sub>Prebuilt apps: Windows x64 and macOS Apple Silicon. Linux and Intel Mac require source setup.</sub> | 71 | 1 day back |
| [ynput/ayon-resolve](https://github.com/ynput/ayon-resolve) | Resolve integration addon for the AYON production pipeline. Requires an AYON deployment; infrastructure terms are separate. | ![Free](assets/badges/free.svg) Free; AYON infrastructure separate | [❔ Unverified](https://github.com/ynput/ayon-resolve#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 13 | 3 days back |
| [ambustion/BSafe_Resolve](https://github.com/ambustion/BSafe_Resolve) | Scan rendered video for broadcast-safe exceptions and generate reports, markers, and previews. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/ambustion/BSafe_Resolve#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 7 | 5 years back |
| [ambustion/CDL2Resolve](https://github.com/ambustion/CDL2Resolve) | Import folders of CDL color decisions into a Resolve timeline. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/ambustion/CDL2Resolve#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 6 | 5 years back |
| [IgorRidanovic/ChangeClipTimecode](https://github.com/IgorRidanovic/ChangeClipTimecode) | Batch-change source clip start timecodes in the current bin. Requires Resolve Studio. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/IgorRidanovic/ChangeClipTimecode#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 15 | 5 years back |
| [Poechant/davinci-resolve-cli](https://github.com/Poechant/davinci-resolve-cli) | Command-line control of Resolve projects, media, timelines, and rendering. Resolve 18+; Studio recommended. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/Poechant/davinci-resolve-cli#readme)<br><sub>macOS is the primary verified environment; Windows/Linux real-Resolve smoke tests remain pending; Linux needs Studio.</sub> | 51 | 3 months back |
| [bryanrandell/DaVinci-Resolve-LUT-Explorer](https://github.com/bryanrandell/DaVinci-Resolve-LUT-Explorer) | Preview LUTs on current footage through a dedicated explorer. Upstream specifies Resolve 17.x only. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/bryanrandell/DaVinci-Resolve-LUT-Explorer#readme) | 18 | 4 years back |
| [X-Raym/DaVinci-Resolve-Scripts](https://github.com/X-Raym/DaVinci-Resolve-Scripts) | Free scripts for editing, markers, properties, and project workflows. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/X-Raym/DaVinci-Resolve-Scripts#readme) | 94 | 10 months back |
| [bryanrandell/DaVinci-Resolve-Timeline-Utility](https://github.com/bryanrandell/DaVinci-Resolve-Timeline-Utility) | List, filter, and switch Resolve timelines. Documentation targets Resolve 17 and FFmpeg 5.0. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/bryanrandell/DaVinci-Resolve-Timeline-Utility#readme) | 22 | 3 years back |
| [jjsawdon/DaVinci-Resolve-Utilities](https://github.com/jjsawdon/DaVinci-Resolve-Utilities) | Proxy/cache utilities, YouTube chapter export, and project-template helpers. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/jjsawdon/DaVinci-Resolve-Utilities#readme) | 44 | 1 year back |
| [LucasHT22/davinci-resolve-wakatime](https://github.com/LucasHT22/davinci-resolve-wakatime) | WakaTime activity-tracking integration. External service terms are separate. | ![Public](assets/badges/public.svg) Public + service | [🪟 Windows](https://github.com/LucasHT22/davinci-resolve-wakatime#readme)<br><sub>Windows checked in upstream table; Mac remains unconfirmed.</sub> | 23 | 1 year back |
| [IgorRidanovic/DaVinciResolve-ClipLister](https://github.com/IgorRidanovic/DaVinciResolve-ClipLister) | Export bin clip metadata as CSV or HTML. Legacy example of the Resolve 15 scripting API. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/IgorRidanovic/DaVinciResolve-ClipLister#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 32 | 7 years back |
| [IgorRidanovic/DaVinciResolve-DynamicText](https://github.com/IgorRidanovic/DaVinciResolve-DynamicText) | Dynamic title/text scripting. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/IgorRidanovic/DaVinciResolve-DynamicText#readme) | 25 | 6 years back |
| [deric/DaVinciResolve-metadata](https://github.com/deric/DaVinciResolve-metadata) | Synchronize camera EXIF metadata into the Resolve Media Pool using ExifTool. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/deric/DaVinciResolve-metadata#readme) | 70 | 10 months back |
| [fukco/DaVinciResolveScript](https://github.com/fukco/DaVinciResolveScript) | Metadata and workflow scripting tools; check separately advertised products independently. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS](https://github.com/fukco/DaVinciResolveScript#readme) | 57 | 5 months back |
| [oliwiergesla/editorscripts](https://github.com/oliwiergesla/editorscripts) | Lua workflow suite for marker reports, stills, renaming, reframing, nodes, settings, and script launching. Resolve Studio 20+. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/oliwiergesla/editorscripts#readme)<br><sub>Linux is explicitly untested.</sub> | 0 | 1 month back |
| [MansiVisuals/Font-Scanner-and-Installer-for-DaVinci-Resolve](https://github.com/MansiVisuals/Font-Scanner-and-Installer-for-DaVinci-Resolve) | Helps locate/install fonts for Resolve workflows. Font licenses remain separate. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/MansiVisuals/Font-Scanner-and-Installer-for-DaVinci-Resolve#readme)<br><sub>Fully tested only on macOS; basic Windows/Linux support.</sub> | 5 | 1 year back |
| [postflows/Fusion-MediaIn-ID-Update-](https://github.com/postflows/Fusion-MediaIn-ID-Update-) | Repair Fusion MediaIn IDs after transferring projects by matching files in the current Media Pool. Filename collisions can choose the wrong source. | ![Free](assets/badges/free.svg) Free; MIT stated upstream | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/postflows/Fusion-MediaIn-ID-Update-#readme) | 2 | 4 months back |
| [h9d6hrbzyn-debug/Marker-Madness-Suite-for-Davinci-Resolve](https://github.com/h9d6hrbzyn-debug/Marker-Madness-Suite-for-Davinci-Resolve) | Five-tool suite for marker management, clip renaming, tracks, running-time planning, and clip collection. Upstream claims Resolve 18+ Free/Studio; Python 3 required for scripts. | ![Free](assets/badges/free.svg) Free; upstream download terms | [🪟 Windows · 🍎 macOS](https://github.com/h9d6hrbzyn-debug/Marker-Madness-Suite-for-Davinci-Resolve#readme) | 2 | 1 week back |
| [Googleholic/Media_Relinker_for_Davinci_Resolve](https://github.com/Googleholic/Media_Relinker_for_Davinci_Resolve) | Matches renamed or moved offline media using metadata, with match review and relink history. Studio 19.1+ and ExifTool required; Windows/macOS/Linux documented. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/Googleholic/Media_Relinker_for_Davinci_Resolve#readme)<br><sub>ExifTool dependency setup differs by platform.</sub> | 0 | 4 months back |
| [FranzWegner/multicam-logger](https://github.com/FranzWegner/multicam-logger) | Logs camera switching into edit lists for post-production workflows. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/FranzWegner/multicam-logger#readme) | 38 | 3 years back |
| [horshack-dpreview/RefreshResolveMedia](https://github.com/horshack-dpreview/RefreshResolveMedia) | Force Resolve to refresh stale media after files are edited outside Resolve. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/horshack-dpreview/RefreshResolveMedia#readme) | 14 | 1 year back |
| [heyJordanParker/resolve-advanced-importer](https://github.com/heyJordanParker/resolve-advanced-importer) | Watch a folder and import new media into a selected Resolve bin. Requires external scripting enabled locally. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/heyJordanParker/resolve-advanced-importer#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 16 | 4 years back |
| [postflows/resolve-batch-rename](https://github.com/postflows/resolve-batch-rename) | Batch-rename Media Pool clips and timelines with previews, counters, and filename restoration. Resolve Studio 20+. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/postflows/resolve-batch-rename#readme) | 2 | 5 months back |
| [postflows/resolve-clip-marker-tool](https://github.com/postflows/resolve-clip-marker-tool) | Create and modify clip/duration markers by clip type, track, and color. Resolve Studio 20+. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/postflows/resolve-clip-marker-tool#readme) | 0 | 5 months back |
| [Pinionist/Resolve-Conform-tools](https://github.com/Pinionist/Resolve-Conform-tools) | Resolve Studio Lua tools for VFX conforming, plate publishing, clip renaming, and version switching. Timeline renamer requires 20.2; see upstream retime/keyframe caveat. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/Pinionist/Resolve-Conform-tools#readme) | 14 | 3 months back |
| [postflows/resolve-find-clip-on-timelines](https://github.com/postflows/resolve-find-clip-on-timelines) | Find a Media Pool clip across all project timelines and highlight matching instances. Resolve Studio 20+. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/postflows/resolve-find-clip-on-timelines#readme) | 0 | 5 months back |
| [postflows/resolve-font-fallback](https://github.com/postflows/resolve-font-fallback) | Detect and replace missing Text+/MultiText fonts with restoration tags. Resolve Studio 20+; optional pyperclip for clipboard export. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/postflows/resolve-font-fallback#readme) | 0 | 5 months back |
| [adrian-goe/resolve-immich-export](https://github.com/adrian-goe/resolve-immich-export) | Uploads completed Resolve renders to an Immich server and selected album. Beta; Studio 21+, an Immich instance, and API key required. README release links contain placeholders. | ![Public](assets/badges/public.svg) Public; Immich hosting separate | [🪟 Windows · 🍎 macOS](https://github.com/adrian-goe/resolve-immich-export#readme) | 0 | 4 months back |
| [postflows/resolve-marker-metadata-workflow](https://github.com/postflows/resolve-marker-metadata-workflow) | Export markers, clip metadata, and optional stills for CSV/HTML review; import feedback into marker notes/colors. Studio 20+. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/postflows/resolve-marker-metadata-workflow#readme)<br><sub>Linux is untested; still capture requires upstream gallery-label settings.</sub> | 1 | 5 months back |
| [postflows/resolve-media-organizer](https://github.com/postflows/resolve-media-organizer) | Organize Media Pool clips into bins by type and keyword, with optional empty-bin cleanup. Resolve Studio 20+. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/postflows/resolve-media-organizer#readme) | 0 | 5 months back |
| [postflows/resolve-multicam-angle-colorizer](https://github.com/postflows/resolve-multicam-angle-colorizer) | Color-code multicam clips by camera-angle names on audio/video tracks. Resolve Studio 20+. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/postflows/resolve-multicam-angle-colorizer#readme) | 0 | 5 months back |
| [eric-with-a-c/resolve-otio](https://github.com/eric-with-a-c/resolve-otio) | OpenTimelineIO interoperability with Resolve. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/eric-with-a-c/resolve-otio#readme)<br><sub>Windows instructions provided, but Windows is explicitly untested.</sub> | 27 | 4 years back |
| [thatcherfreeman/resolve-scripts](https://github.com/thatcherfreeman/resolve-scripts) | Everyday Resolve/Fusion automation: timeline, metadata, render, relinking, and other helpers. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/thatcherfreeman/resolve-scripts#readme)<br><sub>Collection-level installation paths; individual scripts can be platform-specific.</sub> | 17 | 1 month back |
| [postflows/resolve-timeline-creator](https://github.com/postflows/resolve-timeline-creator) | Create timelines from track-count, track-name, and start-timecode presets. Requires Resolve Studio. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/postflows/resolve-timeline-creator#readme) | 0 | 6 months back |
| [postflows/resolve-title-manager](https://github.com/postflows/resolve-title-manager) | Copy selected Text+ styles and Fusion macro parameters across clips. Studio required; selected-clip sourcing needs 21.0.4+, with playhead fallback on older versions. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/postflows/resolve-title-manager#readme) | 0 | 1 week back |
| [postflows/resolve-vfx-marker-tool](https://github.com/postflows/resolve-vfx-marker-tool) | Create VFX shot markers with naming templates and sequential/intermediate numbering. Resolve Studio 20+. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/postflows/resolve-vfx-marker-tool#readme) | 0 | 5 months back |
| [ChristyKail/resolve_auto_import](https://github.com/ChristyKail/resolve_auto_import) | Finder Quick Action that imports camera rolls into bins and creates per-card timelines. Studio external scripting; tested 19.0.3–20.2.2. | ![Public](assets/badges/public.svg) | [🍎 macOS](https://github.com/ChristyKail/resolve_auto_import#readme) | 10 | 2 months back |
| [jdanna/Resolve_Tools_Public](https://github.com/jdanna/Resolve_Tools_Public) | Free scripts, DCTLs, and Fusion resources. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/jdanna/Resolve_Tools_Public#readme) | 4 | 1 week back |
| [DMiradakis/resolver](https://github.com/DMiradakis/resolver) | CLI for self-contained Resolve project workflows: scaffold project folders, export render artifacts, and archive projects. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/DMiradakis/resolver#readme) | 5 | 2 months back |
| [in03/snapper](https://github.com/in03/snapper) | Timeline snapshot utility using the Resolve scripting API. Studio with local scripting; current documentation targets Resolve 18. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/in03/snapper#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 8 | 5 days back |
| [VilleOlof/Toolbox](https://github.com/VilleOlof/Toolbox) | Modular Resolve productivity toolbox. Archived—treat as legacy. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS](https://github.com/VilleOlof/Toolbox#readme)<br><sub>Archived. Upstream excludes Linux workflow integrations.</sub> | 61 | 1 year back |
| [ambustion/Useful.Resolve](https://github.com/ambustion/Useful.Resolve) | Colorist workflow helpers including gallery still capture at markers. Legacy Python 3.6-era setup. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/ambustion/Useful.Resolve#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 23 | 4 years back |
| [tonyflo/videoflo](https://github.com/tonyflo/videoflo) | Python helpers for organizing and automating YouTube video production in Resolve. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/tonyflo/videoflo#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 95 | 3 years back |
| [tin2tin/VSE_OTIO_Export](https://github.com/tin2tin/VSE_OTIO_Export) | Blender Video Sequence Editor timeline export through OpenTimelineIO. | ![Public](assets/badges/public.svg) | [🪟 Windows](https://github.com/tin2tin/VSE_OTIO_Export#readme)<br><sub>Windows setup documented; other platforms not established in this review.</sub> | 32 | 2 years back |

### 👤 [ambustion](https://github.com/ambustion)

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [ambustion/BSafe_Resolve](https://github.com/ambustion/BSafe_Resolve) | Scan rendered video for broadcast-safe exceptions and generate reports, markers, and previews. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/ambustion/BSafe_Resolve#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 7 | 5 years back |
| [ambustion/CDL2Resolve](https://github.com/ambustion/CDL2Resolve) | Import folders of CDL color decisions into a Resolve timeline. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/ambustion/CDL2Resolve#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 6 | 5 years back |
| [ambustion/Useful.Resolve](https://github.com/ambustion/Useful.Resolve) | Colorist workflow helpers including gallery still capture at markers. Legacy Python 3.6-era setup. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/ambustion/Useful.Resolve#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 23 | 4 years back |

### 👤 [bryanrandell](https://github.com/bryanrandell)

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [bryanrandell/DaVinci-Resolve-LUT-Explorer](https://github.com/bryanrandell/DaVinci-Resolve-LUT-Explorer) | Preview LUTs on current footage through a dedicated explorer. Upstream specifies Resolve 17.x only. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/bryanrandell/DaVinci-Resolve-LUT-Explorer#readme) | 18 | 4 years back |
| [bryanrandell/DaVinci-Resolve-Timeline-Utility](https://github.com/bryanrandell/DaVinci-Resolve-Timeline-Utility) | List, filter, and switch Resolve timelines. Documentation targets Resolve 17 and FFmpeg 5.0. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/bryanrandell/DaVinci-Resolve-Timeline-Utility#readme) | 22 | 3 years back |

### 👤 [IgorRidanovic](https://github.com/IgorRidanovic)

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [IgorRidanovic/AfterEffects_to_DaVinci_Resolve](https://github.com/IgorRidanovic/AfterEffects_to_DaVinci_Resolve) | Brings After Effects renders into Resolve workflows. | ![Public](assets/badges/public.svg) | [🪟 Windows](https://github.com/IgorRidanovic/AfterEffects_to_DaVinci_Resolve#readme)<br><sub>Distributed Windows version; other platforms require customization.</sub> | 39 | 7 years back |
| [IgorRidanovic/ChangeClipTimecode](https://github.com/IgorRidanovic/ChangeClipTimecode) | Batch-change source clip start timecodes in the current bin. Requires Resolve Studio. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/IgorRidanovic/ChangeClipTimecode#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 15 | 5 years back |
| [IgorRidanovic/DaVinciResolve-ClipLister](https://github.com/IgorRidanovic/DaVinciResolve-ClipLister) | Export bin clip metadata as CSV or HTML. Legacy example of the Resolve 15 scripting API. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/IgorRidanovic/DaVinciResolve-ClipLister#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 32 | 7 years back |
| [IgorRidanovic/DaVinciResolve-DynamicText](https://github.com/IgorRidanovic/DaVinciResolve-DynamicText) | Dynamic title/text scripting. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/IgorRidanovic/DaVinciResolve-DynamicText#readme) | 25 | 6 years back |

### 👤 [postflows](https://github.com/postflows)

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [postflows/Fusion-MediaIn-ID-Update-](https://github.com/postflows/Fusion-MediaIn-ID-Update-) | Repair Fusion MediaIn IDs after transferring projects by matching files in the current Media Pool. Filename collisions can choose the wrong source. | ![Free](assets/badges/free.svg) Free; MIT stated upstream | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/postflows/Fusion-MediaIn-ID-Update-#readme) | 2 | 4 months back |
| [postflows/resolve-batch-rename](https://github.com/postflows/resolve-batch-rename) | Batch-rename Media Pool clips and timelines with previews, counters, and filename restoration. Resolve Studio 20+. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/postflows/resolve-batch-rename#readme) | 2 | 5 months back |
| [postflows/resolve-clip-marker-tool](https://github.com/postflows/resolve-clip-marker-tool) | Create and modify clip/duration markers by clip type, track, and color. Resolve Studio 20+. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/postflows/resolve-clip-marker-tool#readme) | 0 | 5 months back |
| [postflows/resolve-find-clip-on-timelines](https://github.com/postflows/resolve-find-clip-on-timelines) | Find a Media Pool clip across all project timelines and highlight matching instances. Resolve Studio 20+. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/postflows/resolve-find-clip-on-timelines#readme) | 0 | 5 months back |
| [postflows/resolve-font-fallback](https://github.com/postflows/resolve-font-fallback) | Detect and replace missing Text+/MultiText fonts with restoration tags. Resolve Studio 20+; optional pyperclip for clipboard export. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/postflows/resolve-font-fallback#readme) | 0 | 5 months back |
| [postflows/resolve-marker-metadata-workflow](https://github.com/postflows/resolve-marker-metadata-workflow) | Export markers, clip metadata, and optional stills for CSV/HTML review; import feedback into marker notes/colors. Studio 20+. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/postflows/resolve-marker-metadata-workflow#readme)<br><sub>Linux is untested; still capture requires upstream gallery-label settings.</sub> | 1 | 5 months back |
| [postflows/resolve-media-organizer](https://github.com/postflows/resolve-media-organizer) | Organize Media Pool clips into bins by type and keyword, with optional empty-bin cleanup. Resolve Studio 20+. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/postflows/resolve-media-organizer#readme) | 0 | 5 months back |
| [postflows/resolve-multicam-angle-colorizer](https://github.com/postflows/resolve-multicam-angle-colorizer) | Color-code multicam clips by camera-angle names on audio/video tracks. Resolve Studio 20+. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/postflows/resolve-multicam-angle-colorizer#readme) | 0 | 5 months back |
| [postflows/resolve-timeline-creator](https://github.com/postflows/resolve-timeline-creator) | Create timelines from track-count, track-name, and start-timecode presets. Requires Resolve Studio. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/postflows/resolve-timeline-creator#readme) | 0 | 6 months back |
| [postflows/resolve-title-manager](https://github.com/postflows/resolve-title-manager) | Copy selected Text+ styles and Fusion macro parameters across clips. Studio required; selected-clip sourcing needs 21.0.4+, with playhead fallback on older versions. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/postflows/resolve-title-manager#readme) | 0 | 1 week back |
| [postflows/resolve-vfx-marker-tool](https://github.com/postflows/resolve-vfx-marker-tool) | Create VFX shot markers with naming templates and sequential/intermediate numbering. Resolve Studio 20+. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/postflows/resolve-vfx-marker-tool#readme) | 0 | 5 months back |

<a id="category-6"></a>

## 🎞️ Encoding, codecs, proxy generation, rendering, and project servers

18 repositories.

### All repositories

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [Toxblh/davinci-linux-aac-codec](https://github.com/Toxblh/davinci-linux-aac-codec) | AAC encoding plugin for Resolve Studio on Linux. | ![Public](assets/badges/public.svg) | [🐧 Linux](https://github.com/Toxblh/davinci-linux-aac-codec#readme) | 117 | 1 year back |
| [sethgoldin/davinci-resolve-postgresql-workflow-tools](https://github.com/sethgoldin/davinci-resolve-postgresql-workflow-tools) | Automatic project-database backups and maintenance. | ![Public](assets/badges/public.svg) | [🍎 macOS · 🐧 Linux](https://github.com/sethgoldin/davinci-resolve-postgresql-workflow-tools#readme)<br><sub>PostgreSQL server hosts; macOS and RHEL workflows.</sub> | 101 | 3 years back |
| [IgorRidanovic/DaVinciResolve-ExportProjects](https://github.com/IgorRidanovic/DaVinciResolve-ExportProjects) | Export projects as DRP files and then DELETE the source projects from the project manager. Resolve Studio 16+; this is a destructive archive/move workflow. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/IgorRidanovic/DaVinciResolve-ExportProjects#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 19 | 4 years back |
| [Puppetworks-Animation-Studio/deadline-davinci-resolve](https://github.com/Puppetworks-Animation-Studio/deadline-davinci-resolve) | Thinkbox Deadline render-farm integration. Check current compatibility carefully. | ![Public](assets/badges/public.svg) Public; infrastructure separate | [❔ Unverified](https://github.com/Puppetworks-Animation-Studio/deadline-davinci-resolve#readme) | 38 | 5 years back |
| [elliotmatson/Docker-Davinci-Resolve-Project-Server](https://github.com/elliotmatson/Docker-Davinci-Resolve-Project-Server) | Containerized PostgreSQL project server with automatic backups. | ![Free](assets/badges/free.svg) Free; infrastructure separate | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/elliotmatson/Docker-Davinci-Resolve-Project-Server#readme)<br><sub>Docker server hosts, not Resolve desktop-client compatibility.</sub> | 313 | 1 month back |
| [nowrep/dvcp-vaapi](https://github.com/nowrep/dvcp-vaapi) | VAAPI video encoder plugin. Check hardware, driver, and Resolve requirements. | ![Public](assets/badges/public.svg) | [🐧 Linux](https://github.com/nowrep/dvcp-vaapi#readme) | 39 | 1 year back |
| [ctsrc/ffmpeg-extract-clips-davinci-resolve-edl](https://github.com/ctsrc/ffmpeg-extract-clips-davinci-resolve-edl) | Rust/FFmpeg utility that extracts source clip ranges from a Resolve EDL. Documentation targets Resolve 16. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/ctsrc/ffmpeg-extract-clips-davinci-resolve-edl#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 16 | 1 year back |
| [EdvinNilsson/ffmpeg_encoder_plugin](https://github.com/EdvinNilsson/ffmpeg_encoder_plugin) | FFmpeg-powered export/encoding plugin for Resolve Studio. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/EdvinNilsson/ffmpeg_encoder_plugin#readme) | 230 | 3 weeks back |
| [veryqiang/footbrake](https://github.com/veryqiang/footbrake) | Archived GUI for media/timeline automation, rendering, transcoding, and XML/AAF workflows. | ![Free](assets/badges/free.svg) Free; archived | [🍎 macOS](https://github.com/veryqiang/footbrake#readme)<br><sub>Legacy testing covers macOS 10.15 and Resolve 16.1.2/16.2 only.</sub> | 13 | 6 years back |
| [in03/patchwork](https://github.com/in03/patchwork) | Early prototype for patching changed render segments with Resolve and FFmpeg. Roadmap still lists codec patching and automatic change detection as unfinished. | ![Free](assets/badges/free.svg) Free; prototype | [❔ Unverified](https://github.com/in03/patchwork#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 7 | 2 years back |
| [in03/proxima](https://github.com/in03/proxima) | Queues, distributes, encodes, and automatically links proxy media across workers. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/in03/proxima#readme) | 74 | 5 days back |
| [IgorRidanovic/Resolve-backup-Postgres](https://github.com/IgorRidanovic/Resolve-backup-Postgres) | PostgreSQL backup scripts for Resolve project databases. Legacy documentation warns about cross-OS restoration limitations. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/IgorRidanovic/Resolve-backup-Postgres#readme) | 25 | 8 years back |
| [austinwitherspoon/resolve-bulk-exporter](https://github.com/austinwitherspoon/resolve-bulk-exporter) | Queue multiple timelines for bulk export using the Resolve Python API. | ![Free](assets/badges/free.svg) | [🪟 Windows](https://github.com/austinwitherspoon/resolve-bulk-exporter#readme)<br><sub>Tested only on Windows 10 with Resolve 17 Studio.</sub> | 13 | 5 years back |
| [hexitnz/Resolve-Linux-Studio-AAC-FDK-Encoder-plugin](https://github.com/hexitnz/Resolve-Linux-Studio-AAC-FDK-Encoder-plugin) | FDK-based AAC audio encoding on Linux. Studio required. | ![Public](assets/badges/public.svg) | [🐧 Linux](https://github.com/hexitnz/Resolve-Linux-Studio-AAC-FDK-Encoder-plugin#readme) | 29 | 2 months back |
| [postflows/resolve-markers-to-render-queue](https://github.com/postflows/resolve-markers-to-render-queue) | Queue renders from single or duration markers, with naming presets and per-render folders. Requires Studio and a configured render preset. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS](https://github.com/postflows/resolve-markers-to-render-queue#readme) | 1 | 5 months back |
| [jonnyhyman/ResolveCollaboration](https://github.com/jonnyhyman/ResolveCollaboration) | Utilities extending older live-collaboration workflows; compare against newer native options. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS](https://github.com/jonnyhyman/ResolveCollaboration#readme)<br><sub>Windows/macOS downloads; Linux still requests beta testers.</sub> | 36 | 4 years back |
| [walter-arrighetti/ResolveDB_backup](https://github.com/walter-arrighetti/ResolveDB_backup) | Scheduled PostgreSQL project-server backups. Requires server administration and matching PostgreSQL configuration. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/walter-arrighetti/ResolveDB_backup#readme) | 13 | 5 years back |
| [lightsailvr/ResolveOFX_NDIOutput](https://github.com/lightsailvr/ResolveOFX_NDIOutput) | NDI HDR network-video output through OpenFX. Resolve 17+; building from source requires the NDI Advanced SDK. | ![Free](assets/badges/free.svg) Free; SDK terms separate | [🪟 Windows · 🍎 macOS](https://github.com/lightsailvr/ResolveOFX_NDIOutput#readme)<br><sub>Windows 10/11 x64; macOS 13+ Intel/Apple Silicon.</sub> | 5 | 4 days back |

### 👤 [IgorRidanovic](https://github.com/IgorRidanovic)

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [IgorRidanovic/DaVinciResolve-ExportProjects](https://github.com/IgorRidanovic/DaVinciResolve-ExportProjects) | Export projects as DRP files and then DELETE the source projects from the project manager. Resolve Studio 16+; this is a destructive archive/move workflow. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/IgorRidanovic/DaVinciResolve-ExportProjects#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 19 | 4 years back |
| [IgorRidanovic/Resolve-backup-Postgres](https://github.com/IgorRidanovic/Resolve-backup-Postgres) | PostgreSQL backup scripts for Resolve project databases. Legacy documentation warns about cross-OS restoration limitations. | ![Free](assets/badges/free.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/IgorRidanovic/Resolve-backup-Postgres#readme) | 25 | 8 years back |

### 👤 [in03](https://github.com/in03)

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [in03/patchwork](https://github.com/in03/patchwork) | Early prototype for patching changed render segments with Resolve and FFmpeg. Roadmap still lists codec patching and automatic change detection as unfinished. | ![Free](assets/badges/free.svg) Free; prototype | [❔ Unverified](https://github.com/in03/patchwork#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 7 | 2 years back |
| [in03/proxima](https://github.com/in03/proxima) | Queues, distributes, encodes, and automatically links proxy media across workers. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/in03/proxima#readme) | 74 | 5 days back |

<a id="category-7"></a>

## 🐧 Linux installation, compatibility, and troubleshooting

11 repositories.

### All repositories

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [psygreg/autoresolvedeb](https://github.com/psygreg/autoresolvedeb) | Automates downloading and repackaging Resolve through MakeResolveDeb. | ![Public](assets/badges/public.svg) | [🐧 Linux](https://github.com/psygreg/autoresolvedeb#readme) | 29 | 1 week back |
| [H3rz3n/davinci-helper](https://github.com/H3rz3n/davinci-helper) | Linux companion utilities for Resolve. | ![Public](assets/badges/public.svg) | [🐧 Linux](https://github.com/H3rz3n/davinci-helper#readme)<br><sub>Fedora family only; Debian support is planned.</sub> | 313 | 1 year back |
| [Ashark/davinci-resolve-checker](https://github.com/Ashark/davinci-resolve-checker) | Checks system configuration and hardware suitability for Resolve. | ![Public](assets/badges/public.svg) | [🐧 Linux](https://github.com/Ashark/davinci-resolve-checker#readme) | 174 | 5 months back |
| [flolu/davinci-resolve-linux](https://github.com/flolu/davinci-resolve-linux) | Setup instructions and import/export workarounds. | ![Public](assets/badges/public.svg) | [🐧 Linux](https://github.com/flolu/davinci-resolve-linux#readme)<br><sub>Debian/Ubuntu guide.</sub> | 263 | 1 year back |
| [zelikos/davincibox](https://github.com/zelikos/davincibox) | Containerized Resolve dependencies using Distrobox/Podman; particularly aimed at atomic/image-based distributions. | ![Free](assets/badges/free.svg) | [🐧 Linux](https://github.com/zelikos/davincibox#readme) | 980 | 1 week back |
| [gohny/davinconv](https://github.com/gohny/davinconv) | FFmpeg Bash conversion helper for preparing footage for Resolve on Linux. | ![Free](assets/badges/free.svg) | [🐧 Linux](https://github.com/gohny/davinconv#readme) | 24 | 7 months back |
| [fedsfarm/drwrap](https://github.com/fedsfarm/drwrap) | Resolve wrapper for codec conversion, clipboard, and drag-and-drop workarounds. | ![Free](assets/badges/free.svg) | [🐧 Linux](https://github.com/fedsfarm/drwrap#readme)<br><sub>Tested on Arch/Hyprland with Studio 21; feature support varies by desktop.</sub> | 26 | 1 month back |
| [yioannides/fedora-resolve](https://github.com/yioannides/fedora-resolve) | Fedora installation scripts. The maintainer warns the method may already be obsolete. | ![Free](assets/badges/free.svg) Free; legacy warning | [🐧 Linux](https://github.com/yioannides/fedora-resolve#readme)<br><sub>Fedora; legacy method may be obsolete.</sub> | 26 | 4 weeks back |
| [fat-tire/resolve](https://github.com/fat-tire/resolve) | Container scripts for building and running Resolve on Linux. | ![Public](assets/badges/public.svg) | [🐧 Linux](https://github.com/fat-tire/resolve#readme)<br><sub>Linux x86-64 with NVIDIA.</sub> | 298 | 1 year back |
| [Chillsmeit/resolve-tumbleweed](https://github.com/Chillsmeit/resolve-tumbleweed) | openSUSE Tumbleweed fixes. Maintainer no longer uses that distribution. | ![Free](assets/badges/free.svg) Free; maintenance caution | [🐧 Linux](https://github.com/Chillsmeit/resolve-tumbleweed#readme)<br><sub>openSUSE Tumbleweed; maintainer no longer uses this distribution.</sub> | 21 | 1 month back |
| [JaySNL/VSTForResolveLinux](https://github.com/JaySNL/VSTForResolveLinux) | Experimental VST2/VST3/CLAP bridge for Resolve Studio 21 on Linux. Patches process memory and may crash Resolve; Windows plugins need patched yabridge. See current latency limitations. | ![Free](assets/badges/free.svg) | [🐧 Linux](https://github.com/JaySNL/VSTForResolveLinux#readme)<br><sub>Unofficial integration; upstream targets Resolve Studio 21.</sub> | 8 | 1 day back |

<a id="category-8"></a>

## 📚 Developer libraries and scripting references

12 repositories.

### All repositories

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [diop/davinci-resolve-api](https://github.com/diop/davinci-resolve-api) | Community Python API documentation. Treat it as a reference, not the latest official SDK. | ![Free](assets/badges/free.svg) Free reference | [📖 Reference](https://github.com/diop/davinci-resolve-api#readme) | 98 | 7 years back |
| [FusionPixelStudio/Davinci-Resolve-Functions-Toolkit](https://github.com/FusionPixelStudio/Davinci-Resolve-Functions-Toolkit) | VS Code toolkit with Resolve API snippets and scripting templates for Lua, Python, and JavaScript. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/FusionPixelStudio/Davinci-Resolve-Functions-Toolkit#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 11 | 1 year back |
| [ctcwired/dctl-matrix-maker](https://github.com/ctcwired/dctl-matrix-maker) | Python color-matrix solver using paired ColorChecker images; generates a DCTL. Requires colour-science; linear image data is preferred. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/ctcwired/dctl-matrix-maker#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 20 | 2 years back |
| [thatcherfreeman/dctl-text-rendering](https://github.com/thatcherfreeman/dctl-text-rendering) | DCTL text-rendering example and Python font-header generator for tool developers. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/thatcherfreeman/dctl-text-rendering#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 11 | 1 year back |
| [thatcherfreeman/dctl-tutorial](https://github.com/thatcherfreeman/dctl-tutorial) | DCTL programming tutorial notes and supporting code. | ![Public](assets/badges/public.svg) | [📖 Reference](https://github.com/thatcherfreeman/dctl-tutorial#readme) | 29 | 1 year back |
| [MokshC/easyDCTL](https://github.com/MokshC/easyDCTL) | Interface/tooling for creating DCTLs. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/MokshC/easyDCTL#readme) | 4 | 1 year back |
| [AndrewHazelden/Fusion-Studio-FuScript-IDE-Tools-and-Pipeline-Scripts](https://github.com/AndrewHazelden/Fusion-Studio-FuScript-IDE-Tools-and-Pipeline-Scripts) | IDE and pipeline scripting integrations, including macOS/BBEdit-oriented workflows. | ![Public](assets/badges/public.svg) | [🍎 macOS](https://github.com/AndrewHazelden/Fusion-Studio-FuScript-IDE-Tools-and-Pipeline-Scripts#readme) | 9 | 7 years back |
| [czukowski/fusionscript-stubs](https://github.com/czukowski/fusionscript-stubs) | Python type stubs providing IDE completion for the Fusion scripting API. | ![Free](assets/badges/free.svg) | [📖 Reference](https://github.com/czukowski/fusionscript-stubs#readme) | 16 | 1 month back |
| [gingray/openfx-template](https://github.com/gingray/openfx-template) | C++ OpenFX starter template for plugin developers. | ![Public](assets/badges/public.svg) | [🍎 macOS](https://github.com/gingray/openfx-template#readme)<br><sub>Only macOS builds documented; Windows support is future work.</sub> | 16 | 5 years back |
| [WheheoHu/pybmd](https://github.com/WheheoHu/pybmd) | Python wrapper around the Resolve API. | ![Public](assets/badges/public.svg) | [🪟 Windows · 🍎 macOS](https://github.com/WheheoHu/pybmd#readme) | 34 | 1 month back |
| [pedrolabonia/pydavinci](https://github.com/pedrolabonia/pydavinci) | Higher-level Python package for scripting Resolve. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/pedrolabonia/pydavinci#readme) | 181 | 5 months back |
| [brunocbreis/pysion](https://github.com/brunocbreis/pysion) | Python framework for generating Fusion compositions from dictionaries and reusable constructs. | ![Free](assets/badges/free.svg) | [❔ Unverified](https://github.com/brunocbreis/pysion#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 26 | 2 years back |

### 👤 [thatcherfreeman](https://github.com/thatcherfreeman)

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [thatcherfreeman/dctl-text-rendering](https://github.com/thatcherfreeman/dctl-text-rendering) | DCTL text-rendering example and Python font-header generator for tool developers. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/thatcherfreeman/dctl-text-rendering#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 11 | 1 year back |
| [thatcherfreeman/dctl-tutorial](https://github.com/thatcherfreeman/dctl-tutorial) | DCTL programming tutorial notes and supporting code. | ![Public](assets/badges/public.svg) | [📖 Reference](https://github.com/thatcherfreeman/dctl-tutorial#readme) | 29 | 1 year back |

<a id="category-9"></a>

## 🎛️ Hardware, control surfaces, MIDI, and Speed Editor tools

11 repositories.

### All repositories

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [RudyB24/AutoHotKey_Bome_MIDI_2_Key](https://github.com/RudyB24/AutoHotKey_Bome_MIDI_2_Key) | Maps incoming MIDI messages to Resolve keyboard shortcuts. | ![Public](assets/badges/public.svg) Public; dependencies separate | [🪟 Windows](https://github.com/RudyB24/AutoHotKey_Bome_MIDI_2_Key#readme) | 21 | 3 years back |
| [KipJM/blackmacro-hardware](https://github.com/KipJM/blackmacro-hardware) | Configurable DIY editing keyboard based on Raspberry Pi Pico 2W. | ![Public](assets/badges/public.svg) Public; build cost | [❔ Unverified](https://github.com/KipJM/blackmacro-hardware#readme) | 23 | 1 week back |
| [KipJM/blackmacro-lib](https://github.com/KipJM/blackmacro-lib) | USB Speed Editor emulation firmware for custom microcontroller/macropad projects. Hardware required; Bluetooth and iPad support are absent. | ![Free](assets/badges/free.svg) Free; AGPLv3 stated upstream, hardware separate | [❔ Unverified](https://github.com/KipJM/blackmacro-lib#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 12 | 2 months back |
| [FoxDanger/Control-Booster-OpenSourceCode](https://github.com/FoxDanger/Control-Booster-OpenSourceCode) | Source release of the Control Booster OSC/Tangent mapping utility built with AutoHotkey. | ![Public](assets/badges/public.svg) | [🪟 Windows](https://github.com/FoxDanger/Control-Booster-OpenSourceCode#readme)<br><sub>Windows implementation; macOS code is an early prototype.</sub> | 8 | 2 years back |
| [shaise/DiSE](https://github.com/shaise/DiSE) | DIY speed-editor hardware for Resolve and other video-editing applications. | ![Public](assets/badges/public.svg) Public; build cost | [❔ Unverified](https://github.com/shaise/DiSE#readme) | 60 | 3 years back |
| [ra100/micro-color-panel-controller](https://github.com/ra100/micro-color-panel-controller) | Prototype controller support for using the Blackmagic Micro Color Panel outside Resolve. Requires the physical panel. | ![Free](assets/badges/free.svg) Free; MIT stated upstream, hardware separate | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/ra100/micro-color-panel-controller#readme) | 10 | 10 months back |
| [OlliV/resolve-hui-tc-updater](https://github.com/OlliV/resolve-hui-tc-updater) | Update a HUI/MCU controller's timecode display from Resolve using sendmidi. Tested with X-Touch One; updates can occasionally fail. | ![Public](assets/badges/public.svg) | [❔ Unverified](https://github.com/OlliV/resolve-hui-tc-updater#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 4 | 4 years back |
| [JamesBalazs/speed-editor-client](https://github.com/JamesBalazs/speed-editor-client) | Go HID client for using the Speed Editor outside Resolve, with a volume-control example. Requires the physical controller. | ![Free](assets/badges/free.svg) Free; hardware separate | [🪟 Windows · 🍎 macOS · 🐧 Linux](https://github.com/JamesBalazs/speed-editor-client#readme) | 9 | 4 months back |
| [derwok/SpeedEditorCheatSheet](https://github.com/derwok/SpeedEditorCheatSheet) | Printable Speed Editor reference/cheat sheet. | ![Free](assets/badges/free.svg) Free reference | [📖 Reference](https://github.com/derwok/SpeedEditorCheatSheet#readme) | 41 | 2 years back |
| [PuzzleEmptyM/Unbound-editor-device-customizer](https://github.com/PuzzleEmptyM/Unbound-editor-device-customizer) | Remaps controller buttons and jog-wheel actions outside Resolve; Windows/macOS builds. | ![Public](assets/badges/public.svg) Public; hardware separate | [🪟 Windows · 🍎 macOS](https://github.com/PuzzleEmptyM/Unbound-editor-device-customizer#readme)<br><sub>Windows 10/11; macOS 13+ with Intel and Apple Silicon builds.</sub> | 43 | 5 months back |
| [fashberg/XTouchMini-Davinci-Resolve-Midi-Adapter](https://github.com/fashberg/XTouchMini-Davinci-Resolve-Midi-Adapter) | Uses a Behringer X-Touch Mini to control Resolve through Windows hotkeys. | ![Public](assets/badges/public.svg) Public; hardware separate | [🪟 Windows](https://github.com/fashberg/XTouchMini-Davinci-Resolve-Midi-Adapter#readme) | 30 | 5 years back |

### 👤 [KipJM](https://github.com/KipJM)

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [KipJM/blackmacro-hardware](https://github.com/KipJM/blackmacro-hardware) | Configurable DIY editing keyboard based on Raspberry Pi Pico 2W. | ![Public](assets/badges/public.svg) Public; build cost | [❔ Unverified](https://github.com/KipJM/blackmacro-hardware#readme) | 23 | 1 week back |
| [KipJM/blackmacro-lib](https://github.com/KipJM/blackmacro-lib) | USB Speed Editor emulation firmware for custom microcontroller/macropad projects. Hardware required; Bluetooth and iPad support are absent. | ![Free](assets/badges/free.svg) Free; AGPLv3 stated upstream, hardware separate | [❔ Unverified](https://github.com/KipJM/blackmacro-lib#readme)<br><sub>OS support not established by the reviewed documentation.</sub> | 12 | 2 months back |

<a id="category-10"></a>

## 🧭 Directories covering free and commercial products

5 repositories.

### All repositories

| Repository | What it provides | 💰 Access | 💻 Platforms | ⭐ Stars | 🕒 Last updated |
| --- | --- | --- | --- | ---: | --- |
| [cutbypham/awesome-davinci-resolve](https://github.com/cutbypham/awesome-davinci-resolve) | Plugins, scripts, assets, and editing resources. Bundled copies may be older than upstream releases. | ![Mixed](assets/badges/mixed.svg) Free/paid resource directory | [📖 Reference](https://github.com/cutbypham/awesome-davinci-resolve#readme) | 63 | 1 week back |
| [Greenysmac/awesome-davinci-resolve](https://github.com/Greenysmac/awesome-davinci-resolve) | Broad community directory spanning AI tools, audio, DCTLs, effects, templates, and workflows. | ![Mixed](assets/badges/mixed.svg) Free/paid product directory | [📖 Reference](https://github.com/Greenysmac/awesome-davinci-resolve#readme) | 284 | 3 months back |
| [hassaancode/Fx-Library](https://github.com/hassaancode/Fx-Library) | Resolve/After Effects effects and creative-resource directory. | ![Mixed](assets/badges/mixed.svg) | [❔ Unverified](https://github.com/hassaancode/Fx-Library#readme) | 2 | 8 months back |
| [Akascape/PluginLibrary-Resolve](https://github.com/Akascape/PluginLibrary-Resolve) | Launcher/catalogue linking to free and commercial plugins; it does not grant paid-product licenses. | ![Mixed](assets/badges/mixed.svg) | [❔ Unverified](https://github.com/Akascape/PluginLibrary-Resolve#readme) | 10 | 1 week back |
| [CommandPost/ResolveCafe](https://github.com/CommandPost/ResolveCafe) | Community references, developer material, and website source. Archived in May 2025. | ![Free](assets/badges/free.svg) Free reference; archived | [📖 Reference](https://github.com/CommandPost/ResolveCafe#readme) | 20 | 2 years back |

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
