# 🌐 Tools beyond the GitHub catalogue

[← Main catalogue](../README.md) · [🕒 Earlier update audit: 72 resources](update-audit.json) · [Web source ledger](web-discoveries.json)

**157 external destinations** with reviews through **7 September 2026** (individual review dates are retained in the source data). These include individual products, collections, and companion applications; their count is separate from the GitHub repository count. Collections can overlap the main catalogue. Stars and repository-push ages are not invented for websites.

## 🖥️ Platforms supported

🪟 Windows · 🍎 macOS · 🐧 Linux · ❔ Not established. Platform labels follow the linked developer documentation; version, architecture, and beta limitations matter. Each resource name links to its primary source. No download, purchase, signup, or installation was performed.

## 🏢 Official Blackmagic Design resources
#### 👤 Blackmagic Design

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [Blackmagic developer resources](https://www.blackmagicdesign.com/developer/products/capture-and-playback/overview) | 📦 Public SDK resources; hardware and license terms apply | 📖 Reference | Desktop Video SDK, capture/playback integration resources and links to developer support. Relevant to DeckLink and UltraStudio workflows; this SDK is separate from the Resolve scripting API. |
| [DaVinci Resolve — official downloads](https://www.blackmagicdesign.com/products/davinciresolve) | 🆓 Free edition; 💰 Studio license | 🪟 Windows · 🍎 macOS · 🐧 Linux | Official host downloads and edition overview. The official download feed lists Resolve and Resolve Studio 21.0.4, released August 5, 2026. Check installer-specific requirements. |
| [DaVinci Resolve training and lesson files](https://www.blackmagicdesign.com/products/davinciresolve/training) | 🆓 Public videos, PDFs and lesson downloads | 📖 Reference; lesson requirements vary | Official editing, color, Fairlight and Fusion training with downloadable practice media. The reviewed book collection includes Resolve 20 editions; the collection has no single software version. |
| [Fairlight Sound Library and audio guide](https://documents.blackmagicdesign.com/UserManuals/DaVinciResolveFairlightAudioPost.pdf) | 🆓 Library for use in projects; original terms apply | 📖 Reference; library installation requirements vary | Official Resolve 20 audio guide explains downloading the Fairlight Sound Library from the Sound Library panel. Includes over 500 Foley sounds; project-use permission does not establish permission to redistribute the library. |
| [Fusion Fuse SDK guide and reference](https://documents.blackmagicdesign.com/UserManuals/Fusion_Fuse_SDK.pdf) | 🆓 Public PDF; original terms apply | 📖 Reference | Official Fuse API guide and reference, dated June 2023 on its cover. Covers Lua-based Fuse development; a document edition is not the current Fusion application version. |
| [Fusion Studio — official product](https://www.blackmagicdesign.com/products/fusion) | 💰 Licensed software | 🪟 Windows · 🍎 macOS · 🐧 Linux | Standalone node-based compositing application. The official download feed lists Fusion Studio 21.0.4, released August 5, 2026, for Windows, macOS and Linux. A compatible license is required. |
| [Resolve and Fusion Support Center](https://www.blackmagicdesign.com/support/family/davinci-resolve-and-fusion) | 📦 Public support; download conditions vary | 📖 Reference; select the correct OS download | Official destination for installers, manuals, support notes and release information. The public download feed was reviewed separately to establish the exact Resolve and Fusion patch releases shown in their entries. |
<!-- end official resources -->

## 🎨 Color tools

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [PixelTools free tools](https://pixeltoolspost.com/collections/free-tools) | 🆓 Free; email required for download | 🪟 🍎 | Checker, Chart/Tool, Exposure/Chart, and PQ Tester DCTLs. Installer supports macOS/Windows. The vendor distinguishes Studio/native-DCTL and DCTL-OFX loading paths; check the exact tool and host requirements. |
| [709 Media Room DCTLs](https://709mediaroom.com/en/new-davinci-dctls-available-for-free-download/) | 🆓 Free; registered-user download area | 🪟 🍎 | Primary controls, blue shadows, and ACES CDL-style adjustments. Author testing covers Resolve 19 on Windows/macOS, with no ongoing support promised. DCTL adjustments do not export as ordinary CDL decisions. |

## ✨ Fusion, animation, and effects

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [Krokodove](https://www.komkomdoorn.com/krokodove/) | 📂 Public download; consult package terms | 🪟 🍎 🐧 | Collection of Fusion/Resolve 2D, 3D, vector, and data tools. Studio required. The published matrix is version-specific: 18.5–19 Windows; 17–18 Windows/macOS; Linux appears in older 8–9 builds. Do not read the icons as current all-platform support. |
| [Meta Fide Computer Vision](https://www.metafide.com/?product=computer-vision) | 🆓 Free product; checkout workflow | 🪟 🍎 🐧 | ASCII-art Fusion Effect and Fuse for Resolve 15+. Version 1.1 addresses Resolve 19 compatibility; Linux is available by custom order. |
| [MrAlexTech toolkit](https://www.mralextech.com/) | 💰 Mixed; product terms vary | ❔ Per product | Animation, grading, and storyboard tools. The current site links commercial MagicGrade/MagicStoryboard and a new MagicAnimate OFX. Older MagicAnimate, MagicZoom, and MagicSubtitles remain on the [legacy site](https://mralextech.podia.com/); do not assume a legacy free offer covers a new product. |
| [Reactor](https://gitlab.com/WeSuckLess/Reactor) | 📦 Public package manager; package terms vary | ❔ Per package | Canonical GitLab home of the Fusion/Resolve Atom package ecosystem. Browse the [Atom tree](https://gitlab.com/WeSuckLess/Reactor/-/tree/master/Atoms) and [community forum](https://www.steakunderwater.com/wesuckless/). The browser tree returned a loading shell; a later API scan retrieved all 707 manifests. See the [package inventory](https://github.com/subtlesayak/awesome-resolve/blob/main/data/reactor-inventory.md); compatibility still varies by package. Related standalone tooling is already in the GitHub catalogue. |

## 🛠️ Script collections and workflow tools

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [Resolve Tools / Marker Madness Suite](https://resolve-tools.com/) | 🆓 Free | 🪟 🍎 | Five tools for markers, clip renaming, tracks, running-time planning, and clip collection. Python scripts plus a standalone Reel Time Plus app. The [source repository](https://github.com/h9d6hrbzyn-debug/Marker-Madness-Suite-for-Davinci-Resolve) is also included in the catalogue. |
| [Retrograde Tools](https://retrograde.tools/tools) | 🆓 Free collection; download flows vary | 🪟 🍎 🐧 | Resolve scripts, DCTLs, and Fusion utilities, including XMLnotch, project search, timeline duplication, QC helpers, and slates. Install paths cover these systems, but individual tools differ. Its [public source collection](https://github.com/jdanna/Resolve_Tools_Public) was already listed. |
| [PostFlows](https://postflows.github.io/) | 🆓 Free / MIT scripts; Studio requirements vary | 🪟 🍎 | Script directory for text, fonts, markers, media bins, and timelines. The repository READMEs take precedence over older website requirements. TextPlus Manager has moved to [Title Manager](https://github.com/postflows/resolve-title-manager). Thirteen current tool repositories were added individually. |

## 🎞️ Encoding and delivery

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [Shutter Encoder](https://www.shutterencoder.com/) | 🆓 Free; optional donations | 🪟 🍎 🐧 | Standalone FFmpeg-based media preparation and delivery companion: DNxHR/ProRes conversion, rewrap, subtitles, cut detection, EDL export, and QC functions. Official builds include Windows x64, macOS Intel/Apple Silicon, and Linux. This is a companion application, not a Resolve plugin. |
| [Voukoder Pro](https://www.voukoder.org/) | 💳 Paid; trial available | 🪟 🍎 | FFmpeg-based encoding service with a Resolve Studio connector. The current connector matrix supports Windows x64 and macOS Apple Silicon beta; Windows ARM64 and Linux connectors remain in development. Current Pro licensing is paid despite older articles describing the predecessor as free. |

For previously discovered websites and unresolved community leads, see the [Reddit source ledger](reddit-discoveries.json).


## 🔎 Wiki and supplied-link discoveries

Twenty-one additional products, collections, and integrations reviewed through the [Reddit plugin wiki](https://www.reddit.com/r/davinciresolve/wiki/plugins/) and supplied public resource links. See the [source ledger](wiki-discoveries.json) for duplicates, redirects, and unresolved leads. Audio platform icons describe vendor builds; they do not certify Fairlight compatibility on every platform.

### 🎨 Color / Film

#### 👤 FilmConvert

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [CineMatch](https://www.filmconvert.com/plugin/cinematch) | Paid; watermarked trial | ❔ Confirm current installer | Camera-profile matching with exposure, white balance, and LUT generation. FilmConvert lists Resolve support; select its Resolve download rather than another host's package. |
| [FilmConvert tools](https://www.filmconvert.com/) | Commercial products; trials available | ❔ Per product | Nitrate film emulation, Hazy diffusion, and Halation, with Resolve integrations. Product and host licenses differ; this collection does not establish every product's OS support. |

#### Other creators

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [Basic Node Tree](https://www.veresdenialex.com/product-page/davinci-resolve-basic-node-tree) | Free; store download | ❔ Unverified | Reusable fixed grading node tree imported through the PowerGrades gallery. The product page does not establish an OS support matrix. |
| [CinePrint35](https://www.tombolles.net/cineprint35) | Paid PowerGrades; separate LUT offering | 🪟 Windows · 🍎 macOS | Film-emulation PowerGrades with native Resolve nodes. Free Resolve can use the grades with the Studio-only Grain node disabled. The supplied CinePrint16 URL redirects here. |
| [Filmbox Pro](https://videovillage.com/filmbox/) | Paid; 14-day trial listed | 🪟 Windows · 🍎 macOS · 🐧 Linux | Film-emulation plugin for Resolve and other hosts. Current vendor documentation lists all three desktop OSes, superseding the wiki's older macOS-only description. Edition and activation terms differ. |
| [MONONODES](https://mononodes.com/dctl-and-more/) | Mixed; free tools and demos alongside commercial tools | ❔ Per tool | DCTL collection and technical reference; free examples include Middle Gray, Border, and Color Gradient Test Ramps. Confirm each tool's edition and GPU requirements. |

### ✨ Effects / Fusion

#### 👤 Boris FX

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [Boris FX Sapphire](https://borisfx.com/products/sapphire/) | Paid; trial available | 🪟 Windows · 🍎 macOS · 🐧 Linux | VFX and transition suite with documented Resolve and Fusion Studio OFX support. Check host, GPU, and Linux-distribution requirements for the selected release. |
| [Boris FX SynthEyes](https://borisfx.com/products/syntheyes/) | Commercial standalone tool | 🪟 Windows · 🍎 macOS · 🐧 Linux | Camera/object tracking and matchmoving with Fusion/Resolve scene export. This is a standalone pipeline companion. Linux documentation specifies RHEL 8+ or compatible x86_64 distributions. |

#### Other creators

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [Digital Anarchy Resolve tools](https://digitalanarchy.com/) | Commercial products; separate free products exist | ❔ Per product | Resolve/OFX downloads are listed for Beauty Box Video, Flicker Free, Samurai Sharpen, and Data Storyteller. Do not assume the vendor's AE/FCP-only or free products also support Resolve. |
| [Filmworkz OFX DVO](https://filmworkz.com/ofx/) | Commercial; subscription options | 🪟 Windows · 🍎 macOS · 🐧 Linux | Restoration and correction plugin pack for Resolve, Mistika, and Scratch. Current vendor page documents desktop OS support and the updated Performance Pack with DVO Despeckle. |
| [Gaussian Splatting for DaVinci Resolve](https://aescripts.com/gaussian-splatting-for-davinci-resolve/) | Commercial licensed plugin; check current offer | ❔ Unverified | Import, manipulate, and GPU-render Gaussian-splat PLY scenes, including depth output. Product compatibility lists Resolve 18–21; OS requirements were not established in the retrieved page. |
| [Neat Video](https://www.neatvideo.com/) | Commercial plugin | ❔ Confirm Resolve edition | Noise and flicker reduction with documented Resolve support. Select the matching host/version package and verify its OS/GPU requirements. |
| [RE:Vision Effects for Resolve](https://revisionfx.com/products/for/resolve/) | Commercial products and bundles | ❔ Per product | Resolve-specific product directory covering Twixtor retiming, ReelSmart Motion Blur, DEFlicker, DE:Noise, and other effects. Compatibility and licensing vary by product. |
| [WippTemplates EditorCollection](https://wipptemplates.com/products/editorcollection) | Paid collection | ❔ Unverified | Editing and animation toolkit for Resolve Free and Studio; current product page lists Resolve 20 and 21. Individual effects can carry a rendering-performance cost. |

### 🎧 Audio / Fairlight companions

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [Auburn Sounds Renegate](https://www.auburnsounds.com/products/Renegate.html) | Free edition; paid full edition | 🪟 Windows · 🍎 macOS · 🐧 Linux | Audio gate with VST/AU and other builds. Icons describe available plugin builds; Linux availability does not establish native Fairlight Linux hosting compatibility. |
| [End Boost](https://alexaudiobutler.com/) | Paid standalone app | 🪟 Windows · 🍎 macOS | Automatic audio mixing, denoising, and loudness mastering. The Alex Audio Butler website now presents End Boost as a standalone application usable with Resolve workflows. |
| [TBProAudio dpMeter](https://www.tbproaudio.de/products/dpmeter) | Free | 🪟 Windows · 🍎 macOS | Multichannel audio metering with VST/VST3/AU builds; macOS Intel and ARM downloads are listed. Choose a 64-bit format supported by the installed Resolve host. |
| [Valhalla Supermassive](https://valhalladsp.com/shop/reverb/valhalla-supermassive/) | Free | 🪟 Windows · 🍎 macOS | Reverb and delay effect with official Windows and native Intel/Apple Silicon Mac builds. Resolve host compatibility still depends on plugin format and host version. |

### 🛠️ Workflow / Media management

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [EditShare FLOW panel](https://editshare.com/editshares-flow-panel-for-davinci-resolve-studio-creates-gateway-to-wider-media-ecosystem-and-remote-proxy-editing/) | Enterprise product; confirm current licensing | ❔ Confirm deployment | FLOW asset/metadata access, proxy switching, and review workflows inside Resolve Studio. The checked announcement targets FLOW 2021 and Resolve 17; current deployment compatibility remains unverified. |
| [Simon Says for Resolve](https://www.simonsaysai.com/blackmagic-davinci-resolve-extension) | Service pricing; introductory credit listed | 🪟 Windows · 🍎 macOS | Transcription, speaker-colored markers, captions, and translated subtitles. Retrieved download instructions name Resolve 16–18 on Mac and Studio 17–18 on Windows; newer-version support needs confirmation. |
| [SNS ShareBrowser integration](https://www.studionetworksolutions.com/sns-unveils-sharebrowser-workflow-integration-plugin-for-davinci-resolve/) | Included with paid EVO infrastructure | ❔ Confirm deployment | Media search, preview, tagging, and import through ShareBrowser. Vendor announcement specifies EVO users and Resolve Studio 17+; the integration is not a standalone free MAM service. |

## 🛍️ Marketplace and creator-store discoveries

Forty additions from Gumroad, Superhive, Sellfy, Ko-fi, itch.io, plugin stores, and template libraries. See the [source ledger](marketplace-discoveries.json) for evidence quality and exclusions. Listed support is publisher-stated, not installation-tested. 📱 means iPadOS.

### ✨ Effects and animation

#### 👤 Akascape

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [BlobTrackingFuse](https://akascape.gumroad.com/l/blobtracker) | 💳 Paid | ❔ Not established | Motion-responsive lines, rectangles, and text effects. Resolve 17+ Free or Studio. Creator warns that AMD devices may not work properly. |
| [BlockGlitch](https://akascape.gumroad.com/l/blockglitch) | 🆓 Free; store download | ❔ Not established | Block-glitch Fuse for Resolve 17+ Free or Studio. The creator explicitly offers a free download; the amount field can show a suggested donation. |
| [SupaScale](https://akascape.gumroad.com/l/supascale) | 💳 Paid full edition; free trial | 🪟 Windows · 🍎 macOS · 🐧 Linux | AI upscaling/restoration Fuse with multiple models. Resolve 19+ Free or Studio. Trial includes a limited model; test compatibility before purchase. |
| [SuperGlitch](https://akascape.gumroad.com/l/superglitch) | 🆓 Free; store download | ❔ Not established | Glitch-effect Fuse for Resolve 17+ Free or Studio. The creator explicitly offers a free download; check the selected amount at checkout. |
| [SuperModulation](https://akascape.gumroad.com/l/supermodulation) | 💰 Free edition / paid full edition | ❔ Not established | Frequency-modulation Fuse. V1 is free; V2+ adds controls including colored modulation and direction. Supports Resolve Free and Studio. |
| [SuperPixelSort](https://akascape.gumroad.com/l/superpixelsort) | 💰 Free edition / paid full edition | ❔ Not established | Pixel-sorting Fuse with displacement and rank modes. Free edition has fewer features; Resolve 17+ Free or Studio. |
| [SuperPolygons](https://akascape.gumroad.com/l/super-polygons-beta) | 🆓 Free; store download | ❔ Not established | Low-poly, triangulation, Voronoi, and tile effects inside Fusion. Resolve 17+ Free or Studio; suggested donations are optional. |
| [SuperSlitScanner](https://akascape.gumroad.com/l/superslitscanner) | 💳 Paid | ❔ Not established | Slit-scan Fuse with wave, stretch, time-warp, and modulation modes. Resolve 17+ Free or Studio. |
| [SuperTrails](https://akascape.gumroad.com/l/supertrails) | 💰 Free edition / paid full edition | ❔ Not established | Ghost-trail mode is free; the full edition adds trail modes. Resolve 17+ Free or Studio. |
| [SuperVHS](https://akascape.gumroad.com/l/supervhs) | 💳 Paid | ❔ Not established | VHS-style bloom, distortion, and color damage inside Fusion. Resolve 17+ Free or Studio. Previously unresolved wiki lead, now supported by its indexed creator listing. |

<!-- additional entries: Akascape -->
| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [DatamoshFuse](https://akascape.gumroad.com/l/datamoshfuse) | 💰 Paid | ❔ Not established | Bundle of Datamosh Classic and Datamosh Live Fuses for video-corruption and frame-repetition effects. Requires FFmpeg; works with Resolve Free or Studio. |
| [DreamyFlare](https://akascape.gumroad.com/l/dreamyflare) | 💰 Paid | ❔ Not established | Creates horizontal and vertical anamorphic-style flares with color, intensity and spread controls. Requires Resolve 17+ Free or Studio. |
| [ExtremeGlitch](https://akascape.gumroad.com/l/extremeglitch) | 💰 Paid | ❔ Not established | Combines RGB splitting, noise, interlacing, pixel sorting, waves and block glitches. Requires Resolve 17+ Free or Studio. |
| [Pixel Dither](https://akascape.gumroad.com/l/pixeldither) | 💰 Paid | ❔ Not established | Produces pixelated, dithered imagery inspired by low-color handheld-game displays. Requires Resolve 17+ Free or Studio. |
| [RuttEtra](https://akascape.gumroad.com/l/ruttetra) | 💰 Paid | ❔ Not established | Creates image-derived line geometry displaced according to brightness for a Rutt-Etra-style effect. Requires Resolve 18+ Free or Studio. |
| [ShakeGlitch](https://akascape.gumroad.com/l/shakeglitch) | 💰 Paid | ❔ Not established | Creates animated RGB-split glitch effects inside Fusion. Requires Resolve 17+ Free or Studio. |
| [SuperASCII Fuse](https://akascape.gumroad.com/l/superascii) | 💰 Paid | ❔ Not established | Converts footage to ASCII-style imagery with configurable characters, size, spacing and custom bitmap symbols. Requires Resolve 17+ Free or Studio. |
| [SuperBokeh](https://akascape.gumroad.com/l/superbokeh) | 💰 Paid | ❔ Not established | Lens-blur Fusion Fuse with circular, disc, ring and polygonal bokeh modes and focus controls. Requires Resolve 17+ Free or Studio. |
| [SuperCRT](https://akascape.gumroad.com/l/supercrt) | 💰 Paid | ❔ Not established | Recreates CRT display effects inside Fusion. Requires Resolve 17+ Free or Studio. |
| [SuperDelusion](https://akascape.gumroad.com/l/superdelusion) | 💰 Paid | ❔ Not established | Four psychedelic visual-effect modes with color, pattern and distortion controls. Requires Resolve 17+ Free or Studio. |
| [SuperLCD](https://akascape.gumroad.com/l/superlcd) | 💰 Paid | ❔ Not established | Simulates LCD pixel layouts, including RGB stripes and Pentile-style screen patterns. Requires Resolve 17+ Free or Studio. |
| [SuperMatrixRain](https://akascape.gumroad.com/l/supermatrixrain) | 💰 Paid | ❔ Not established | Generates animated code-rain graphics with 2D layers and a simulated 3D camera mode. Requires Resolve 18+ Free or Studio. |
| [SuperMesh](https://akascape.gumroad.com/l/supermesh) | 💰 Paid | ❔ Not established | Generates grid, wireframe and topographic-style image effects inside Fusion. Requires Resolve 17+ Free or Studio. |
| [SuperNTSC](https://akascape.gumroad.com/l/superntsc) | 💰 Paid | ❔ Not established | Simulates analog television signal effects inside Fusion. Requires Resolve 17+ Free or Studio. |
| [SuperPaperTear](https://akascape.gumroad.com/l/superpapertear) | 💰 Paid | ❔ Not established | Procedural paper-tear and cutout effects with edge fibers, texture, fold marks and shadows. Requires Resolve 17+ Free or Studio. |
| [SuperPrintFX](https://akascape.gumroad.com/l/superprintfx) | 💰 Paid | ❔ Not established | Print-style Fusion effects including halftone, duotone, guilloche and newspaper dithering. Requires Resolve 17+ Free or Studio. |
| [Upscaler Fuse](https://akascape.gumroad.com/l/upscaler) | 💰 Paid; trial available | ❔ Not established | Texture upscaling and sharpening Fuse based on AMD FSR and CAS algorithms. A trial is available; GPU support is not limited to AMD. Requires Resolve 17+; edition requirements should be checked. |
| [WaterMemory](https://akascape.gumroad.com/l/watermemory) | 💰 Paid | ❔ Not established | Creates experimental dissolving and flowing motion effects inside Fusion. Requires Resolve 17+ Free or Studio. |
<!-- end additional entries: Akascape -->

#### 👤 Gabriel Grenier

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [Amalgam](https://aescripts.com/amalgam/) | 💳 Paid; trial available | 🍎 macOS confirmed; other OS unverified | Frequency-based image blending OFX; compatibility lists Resolve 16–21. Mac support is evidenced by the release notes. The separate Premiere transition feature is not a Resolve guarantee. |

#### 👤 MotionVFX

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [mTitle Refined DVR](https://www.motionvfx.com/store,mtitle-refined-dvr,p4849.html) | 💳 Paid | 🪟 Windows · 🍎 macOS · 📱 iPadOS | Animated typography pack. Desktop requires Resolve 19.1, 16 GB RAM and 4 GB VRAM; vendor recommends 32/8 GB for 4K and lists iPad compatibility. |
| [mTransition Movie DVR](https://www.motionvfx.com/store,mtransition-movie-dvr,p4005.html) | 💳 Paid | 🪟 Windows · 🍎 macOS · 📱 iPadOS | Cinema-inspired transition pack. Desktop requires Resolve 18.1.2+; vendor also labels the DVR edition iPad-compatible. Select the DVR product. |

#### 👤 sh4rk

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [Audio Visualiser Plugin](https://sh4rkk.com/visualiser-plugin) | 💰 Free edition / paid full edition | ❔ Not established | Audio-reactive Fusion toolkit and Edit-page visualizers. Supports Resolve 19.1–21 Free and Studio. Uses the supplied audio-converter workflow; current creator site supersedes the Ko-fi listing. |

#### 👤 StirlingSupplyCo.

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [Easier Ease](https://stirlingsupply.co/products/easier-ease) | 🆓 Free; store download | ❔ Not established | Applies easing to position, scale, and rotation keyframes. Requires Resolve 19.1+. A separate paid Pro edition exists. |
| [Edit Page Masks](https://stirlingsupply.co/products/edit-page-masks) | 🆓 Free; store download | ❔ Not established | Drag-and-drop Edit-page masks with outline and shape controls. Current listing does not establish a minimum version or OS matrix. |
| [Proto V3](https://stirlingsupply.co/products/proto-v3) | 💳 Paid | ❔ Not established | Distortion and glow effects with presets. Current release requires Resolve 20. |
| [TextBox+](https://stirlingsupply.co/products/textbox) | 💳 Paid | ❔ Not established | Animated text-box preset for Resolve. Consult current installation requirements; no OS matrix was established. |

### 🎨 Color and PowerGrades

#### 👤 Colourlab.ai

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [Colourlab AI for Resolve](https://colourlab.ai/colourlab-ai-for-davinci-resolve/) | 💳 Subscription plans | 🪟 Windows · 🍎 macOS | Reference matching through a Resolve plugin and desktop app. Official page specifies Resolve 18–20, including Free. Pro adds LookDesigner and GrainLab; newer-host support needs confirmation. |

#### 👤 Dehancer

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [Dehancer Pro](https://www.dehancer.com/shop/davinci_resolve/pro) | 💳 Commercial; trial offered | 🪟 Windows · 🍎 macOS · 🐧 Linux | Film-emulation OFX with grain, halation, bloom, and color-pipeline controls. Current page lists all three OSes; displayed Mac requirements are macOS 13+, Metal GPU, Resolve 19+. |

#### 👤 James Miller / DELUTS

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [DELUTS Universe DCTLs](https://jamesmiller.sellfy.store/p/davinci-resolve-studio-dctl/) | 💳 Paid; demo sets available | 🪟 Windows · 🍎 macOS · 🐧 Linux | Studio DCTL collection for color, lens effects, film texture, and utilities. Installation paths cover three OSes; test the demo for GPU compatibility. The listed minimum-version text is ambiguous. |

#### 👤 Mark Bone + Nik Pilecki

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [MB+NP PowerGrade](https://mark-bone.sellfy.store/p/power-grade-mbnp/) | 💳 Paid | ❔ Not established | Resolve PowerGrade, LUT suite, and grading masterclass with multiple camera color-space workflows. Current listing does not establish Free/Studio or OS requirements. |

#### 👤 Night Owl Stories

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [C.R.A.F.T. PowerGrade](https://nightowlstories.gumroad.com/l/craft-powergrade) | 🆓 Free early access; mailing-list enrollment | ❔ Not established | Kodak/Fuji PowerGrade variants with a setup guide. Preconfigured for Sony S-Log3; input CST can be changed. Free/Studio compatible; texture is a placeholder. |

#### 👤 Nx Color

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [Nx LiquidGlass](https://ko-fi.com/s/8d429085e2) | 🆓 Free; store download | 🪟 Windows · 🍎 macOS · 🐧 Linux | Refraction and magnification DCTL. Requires Resolve Studio 19+; creator lists Metal, CUDA, and OpenCL support. Ko-fi listing points to the creator’s website download. |

#### 👤 open iso

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [Cine16](https://openiso.sellfy.store/p/film-emulation-powergrade/) | 💳 Paid | ❔ Not established | 16 mm-inspired color PowerGrade with tutorial and test clips. All features require Resolve Studio. |
| [Timeless](https://openiso.sellfy.store/p/timeless-film-emulation-powergrade/) | 💳 Paid | ❔ Not established | Black-and-white PowerGrade with tutorial and test clips. All features require Resolve Studio. Distinct from similarly named products by other creators. |

#### 👤 Ravengrade

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [Ravengrade tools](https://ravengrade.com/) | 💳 Paid perpetual licenses or subscription | ❔ Not established | Collection of Resolve film-look, contrast, subtractive-color tools, and LUTs. Check each product’s Studio, GPU, and version requirements; collection membership does not establish shared compatibility. |

#### 👤 The Jake Fisher

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [TJF PowerGrade](https://thejakefisher.sellfy.store/p/tjf-powergrade/) | 💳 Paid | ❔ Not established | Modular film-inspired grade with tutorial. Free Resolve is supported with noise reduction and grain disabled; Studio enables those features. |

#### 👤 Tool&KITS

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [Sony S-Log3 Cine Film Emulation PowerGrade](https://toolandkits.gumroad.com/l/wfczb) | 🆓 Free; store download | ❔ Not established | Node-based film-inspired starting point for Sony S-Log3 / S-Gamut3.Cine. Built for Resolve Free with its included film LUTs; not an exact film-stock reproduction. |

#### 👤 yesjmo

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [PowerGrade Library](https://yesjmo.gumroad.com/l/powergradelibrary) | 💳 Paid | ❔ Not established | Modular grading library, signature looks, and guides. Resolve 19+ Free or Studio; designed for DaVinci Wide Gamut with Rec.709 output. |

### 📚 Templates and discovery

#### 👤 Editors Lab

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [Editors Lab](https://editorslab.store/) | 📂 Public directory; verify creator terms | ❔ Not established | Community discovery hub for Resolve macros, Fuses, presets, and tutorials. Follow original creator listings for licenses and compatibility; its entries overlap other resources here. |

#### 👤 Envato

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [Envato Resolve templates](https://elements.envato.com/video-templates/compatible-with-davinci-resolve) | 💳 Subscription catalogue | ❔ Not established | Resolve-specific template marketplace. Check item-level version, plugin, font, and media requirements; preview footage/music may be excluded. |

#### 👤 Mixkit

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [Mixkit Resolve templates](https://mixkit.co/free-davinci-resolve-templates/) | 🆓 Free under Mixkit License; no signup | ❔ Not established | Titles, callouts, lower thirds, transitions, and social templates. FAQ says designed for Resolve 16; newer-version compatibility needs checking per template. |

#### 👤 Motion Array

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [Motion Array free Resolve templates](https://motionarray.com/davinci-resolve-templates/free/) | 🆓 Free selection; broader catalogue has paid plans | ❔ Not established | Resolve-filtered titles, logos, promos, and other templates. Use the software-version filter and inspect each item’s requirements and download/license conditions. |

### 🛠️ Workflow and pipeline

#### 👤 BelAmiMax

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [BlenderEXR](https://superhivemarket.com/products/blenderexr) | 💳 Paid | 🪟 Windows · 🍎 macOS | Installs Blender OCIO configuration and a Fusion EXR/pass template. Windows 10/11 or Apple Silicon Mac; Resolve 19–21. Intel Mac support is not established. |

#### 👤 CStudio.ao

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [Pipeline Studio Manager](https://superhivemarket.com/products/pipeline-studio-manager) | 💳 Paid | ❔ Not established | Blender production-management add-on with structured Resolve handoff packages. A pipeline companion, not an in-Resolve plugin. Listing specifies Blender 4.0–5.2; live collaboration is beta. |

#### 👤 imk-design

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [AE Fusion 3D Bridge](https://aescripts.com/ae-fusion-3d-bridge/) | 💳 Paid; trial available | 🪟 Windows · 🍎 macOS | Transfers supported 3D layouts, cameras, and baked animation between After Effects and Fusion/Resolve. Does not embed media or reproduce the entire rendered appearance. |

#### 👤 Jumper

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [Jumper](https://getjumper.io/) | 💳 Commercial; free trial | 🪟 Windows · 🍎 macOS | Local visual and spoken-content search for editors, with Resolve integration. Vendor states processing stays on device. Confirm current host/version requirements for the chosen installer. |

#### 👤 Limitless Creative

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [Blender to Resolve Bridge](https://superhivemarket.com/products/blender-to-resolve-bridge) | 💳 Paid; time-limited updates/support | 🪟 Windows | Blender render handoff with bins, timeline settings, and color transforms. Windows 10/11, Blender 4.2+, Resolve 19. Studio auto-push needs Python 3.11/3.12; Free uses a browser workflow. |

#### 👤 ValueFactory

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [VideoRemap](https://valuef.itch.io/videoremap) | 💳 Paid; patterned-output demo | 🪟 Windows | Remaps footage from Resolume Advanced Output XML inside Resolve Free or Studio. Windows 10+ x86_64 and NVIDIA CUDA required; ARM unsupported. Resolume need not be installed. |

## 🔎 Community discoveries
**85 later additions**, including resources grouped under existing creators above, from the [community source data](community-discoveries.json). [Versions and package dates](community-discoveries.json) are recorded separately from the earlier audit.

#### 👤 A Blackbird Called Sue

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [Free Analog Counter](https://www.patreon.com/ablackbirdcalledsue/posts/free-analog-for-98697066) | 🆓 Free template | ❔ Not established | Animated analog-counter Fusion composition. Creator explicitly shares a free template; current host/edition compatibility is not specified. |

#### 👤 Aedan / spektrafilm OFX

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [spektrafilm OFX](https://spektrafilm.114c.de/) | 🆓 Free beta | 🪟 Windows · 🍎 macOS · 🐧 Linux | Beta spectral film-emulation OFX with negative, print and scan stages. Official install instructions require Resolve Studio; possible macOS Free behavior is unconfirmed. Linux packaging information differs between the site and repository instructions. |

#### 👤 AlbertoGZ

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [ColorLabels](https://gitlab.com/WeSuckLess/Reactor/-/blob/master/Atoms/com.AlbertoGZ.ColorLabels/com.AlbertoGZ.ColorLabels.atom) | 📦 Public Reactor package; check package license | ❔ Not established | Assigns node tile/text colors using palettes. Python script for Fusion; current Resolve edition requirements are unverified. |
| [ReloadLoaders](https://gitlab.com/WeSuckLess/Reactor/-/blob/master/Atoms/com.AlbertoGZ.ReloadLoaders/com.AlbertoGZ.ReloadLoaders.atom) | 📦 Public Reactor package; check package license | ❔ Not established | Refreshes all or selected Fusion Loader nodes by rereading their clip paths. Python and current host compatibility must be checked. |

#### 👤 Alexey Bogomolov

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [Attribute Spreadsheet](https://gitlab.com/WeSuckLess/Reactor/-/blob/master/Atoms/com.AlexBogomolov.AttributeSpreadsheet/com.AlexBogomolov.AttributeSpreadsheet.atom) | 🆓 MIT | ❔ Not established | Edits and links multiple Fusion node inputs in a spreadsheet. Requires Fusion/Resolve 18, Python 3.8+ and PySide6. Avoid circular expression links: the author documents a crash. |

#### 👤 ARISDA

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [ARISDA Bridge](https://arisdabridge.com/) | 💰 Business-only single-PC license | 🪟 Windows 11 | Timecode display, work-time tracking and studio clock companion. Creator-tested scope is Resolve Studio 21 on Windows 11. NTSC frame rates are unsupported; optional LTC routing and PunchLight hardware have separate setup requirements. |

#### 👤 AutoCut

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [AutoCut](https://www.autocut.com/en/) | 💰 Paid plans; 14-day free trial | 🪟 Windows · 🍎 macOS | Automates silence removal, captions, zooms and other editing tasks. The download page lists Resolve 18.6, 19, 20 and 21; check feature and subscription requirements before use. |

#### 👤 Blackmagic forum community

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [Creating Scripts for DaVinci Resolve — examples thread](https://forum.blackmagicdesign.com/viewtopic.php?t=175315) | 📦 Public examples; per-author terms apply | 📖 Reference; snippet requirements vary | Community examples for timeline, Media Pool and marker automation. Individual posts can contain API limitations and destructive changes, such as losing marker keywords; review each script before running. Forum hosting is not BMD endorsement. |

#### 👤 BUTTERY LUTs

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [BUTTERY LUTs collections](https://www.butteryluts.com/) | 💰 Paid LUT collections | ❔ Check camera profile and host LUT support | Camera-specific log-to-Rec.709 conversions and creative LUT collections. Choose the pack for the source camera and log profile; collections have no single plugin version. |

#### 👤 Calver - Digital Creative School

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [Calver Glow V2 Lite](https://www.patreon.com/calverschool/posts/calver-glow-v2-123021297) | 🆓 Public Lite download; separate full edition | ❔ Not established | Glow effect with curve-controlled threshold and look, distributed as a DRFX for Resolve and Fusion. Public Lite download link is present; the full edition is separate. |

#### 👤 Catharsis

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [Nintendo Direct Graphics Pack](https://www.patreon.com/CatharsisYT/posts/catharsis-direct-119187139) | 🆓 Free public pack | ❔ Not established | Bumper, lower-third and transition assets with three editable Fusion compositions. Creator calls the pack free/public but has not confirmed Resolve Free compatibility. |

#### 👤 Chris Roy Films

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [PostSync](https://chrisroyfilms.com/postsync/) | 💰 Paid; 30-day trial | 🍎 macOS | Synchronizes workstation presets and settings and backs up or transfers Resolve preferences. Includes scheduling, share mounting and configurable cache cleanup; review selected folders before enabling cleanup. |
| [PostWatch](https://chrisroyfilms.com/postwatch/) | 💰 Paid; Pushover terms apply | 🍎 macOS | Sends export, application and system alerts to Pushover on a phone or tablet. Resolve is among the listed supported applications. Requires macOS permissions and Pushover setup; notification delivery is separate from rendering. |

#### 👤 CinePacks

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [CinePacks free samples](https://cinepacks.store/collections/free-packs) | 🆓 Sample packs; 💰 Full collections | ❔ Check individual asset formats | Free sample collections of overlays, textures, LUTs and sound effects for editing. These are media assets rather than a shared Resolve plugin; check each pack’s format and usage terms. |

#### 👤 Cutpoint Labs

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [CutDetect](https://cutpointlabs.com/cutdetect/) | 📦 Public listing; price/download access not established | 🍎 macOS | Standalone hard-cut detection with visual review, manual adjustment and CMX3600 EDL export for conform workflows. Processes media locally. A versioned demonstration does not establish the latest downloadable build. |
| [CutMatch](https://cutpointlabs.com/cutmatch/) | 🆓 Preview; 📦 Full-product access not established | 🍎 macOS | Matches flattened reference sections to source footage and exports a CMX3600 conform EDL. Requires a reference cut-list EDL and manual match review; unmatched events are omitted. Creator lists a free Mac App Store Preview. |
| [LUT Tuner](https://cutpointlabs.com/lut-tuner/) | 📦 Public listing; price/download access not established | 🍎 macOS | Edits, previews, compares and resizes .cube LUTs, with export of tunable DCTL approximations for Resolve. DCTL output approximates the LUT; review the fit measurements before using it in a color pipeline. |

#### 👤 Dan De'Etremont

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [Fringe Fighter Turbo](https://gitlab.com/WeSuckLess/Reactor/-/blob/master/Atoms/com.MuseVFX.FringeFighterTurbo/com.MuseVFX.FringeFighterTurbo.atom) | 📦 Public Reactor package; check package license | ❔ Not established | Emulates a Disjoint Over composite to address edge artifacts when combining smoke and rendered holdout geometry. |

#### 👤 DaVinci Kit

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [Map Engine](https://davincikit.com/product/map-engine/) | 💰 Perpetual license; external map-service terms apply | 🪟 Windows · 🍎 macOS | Fusion map animation with location search, GeoJSON shapes, routes and custom tile styles. Requires Studio 18.6+; Free compatibility is limited to 18.6–19.0.3. Internet is required for tiles and licensing, and map-provider attribution is required. |

#### 👤 Emilio Sapia - Millolab

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [FastExpoGlow](https://gitlab.com/WeSuckLess/Reactor/-/blob/master/Atoms/com.Millolab.FastExpoGlow/com.Millolab.FastExpoGlow.atom) | 📦 Public Reactor package; check package license | ❔ Not established | Fusion glow macro with Fibonacci mode, glow mask/output and highlight rolloff. Manifest discusses Fusion 16 optimization. |
| [SkinCorrector](https://gitlab.com/WeSuckLess/Reactor/-/blob/master/Atoms/com.Millolab.SkinCorrector/com.Millolab.SkinCorrector.atom) | 📦 Public Reactor package; check package license | ❔ Not established | Frequency-separation macro for skin retouching and beauty work in Fusion. |
| [VolumeHaze](https://gitlab.com/WeSuckLess/Reactor/-/blob/master/Atoms/com.Millolab.VolumeHaze/com.Millolab.VolumeHaze.atom) | 📦 Public Reactor package; check package license | ❔ Not established | Compositing macro that spills background light over foreground elements in atmospheric scenes. |

#### 👤 FireCut

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [FireCut](https://firecut.ai/pricing/davinci-resolve/) | 🆓 Basic tools; 💰 Paid plans with 7-day trial | 🪟 Windows · 🍎 macOS · 🐧 Linux | Free tools cover silence removal, multichannel audio splitting and marker management. Paid plans add captions and AI editing features. Supports Resolve Free; online AI, transcription and asset services require internet access. |

#### 👤 Fractale

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [Cheetah Video Proxy Generator](https://fractale.itch.io/cheetah-video-proxy-generator) | 📦 Public download; store terms may differ | 🪟 Windows · 🍎 macOS | Creates H.264/H.265, DNxHR and ProRes proxies for Resolve, including portrait-aware sizing. macOS requires a separate FFmpeg installation. Windows is also distributed through Microsoft Store. |

#### 👤 framechart

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [framechart](https://framechart.com/) | 🆓 Watermarked free tier; 💰 License removes watermark | 🪟 Windows · 🍎 macOS · 🐧 Linux | Renders animated bar, line, table and race charts from CSV data inside Resolve. OFX plugin for Resolve Free or Studio; the free tier includes all chart features with a watermark. |

#### 👤 FrameTools

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [FrameTools CapCut Caption Pack](https://gitlab.com/WeSuckLess/Reactor/-/blob/master/Atoms/com.FrameTools.CapCutCaptions/com.FrameTools.CapCutCaptions.atom) | 🆓 Free templates | ❔ Not established | Eight animated Edit-page caption/title templates built from standard Fusion nodes. Manifest explicitly supports Resolve Free; bundled fonts have separate licenses. |

#### 👤 FusionPixelStudios

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [Flow Character Rigger](https://gitlab.com/WeSuckLess/Reactor/-/blob/master/Atoms/com.FusionPixelStudios.FlowCharacterRigger/com.FusionPixelStudios.FlowCharacterRigger.atom) | 📦 Public Reactor package; check package license | ❔ Not established | Rigging macro for separately layered 2D character parts, with joint positions and body-part angles. Requires prepared character layers. |

#### 👤 fxphd

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [Warren Eagles Resolve 18 training](https://www.fxphd.com/resolve18/) | 💰 Paid courses | 📖 Browser reference; lesson requirements vary | Resolve 18 fundamentals, advanced grading and look-development courses with 18.1/18.6 update lessons. This is an older course edition, not evidence of current Resolve software or newer-version coverage. |

#### 👤 Gregory Chalenko

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [Gradient Match](https://gitlab.com/WeSuckLess/Reactor/-/blob/master/Atoms/com.GregoryChalenko.GradientMatch/com.GregoryChalenko.GradientMatch.atom) | 📦 Public Reactor package; check package license | ❔ Not established | Builds a procedural gradient from a reference image. Legacy Fusion macro; modern host compatibility has not been established. |

#### 👤 Hedge

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [EditReady](https://hedge.co/products/editready) | 💰 Paid; trial limited to first minute of clips | 🍎 macOS | Standalone transcoding and proxy preparation for editing, including ProRes and DNxHD/DNxHR output, metadata controls and LUT previews. RAW capabilities vary by license tier. A companion media tool rather than a Resolve plugin. |
| [OffShoot](https://hedge.co/products/offshoot) | 💰 Paid; 10-day trial | 🪟 Windows · 🍎 macOS | Copies and verifies camera media for offload, ingest and backup workflows. Formerly called Hedge; a standalone media-management companion for Resolve and other editors. License tiers and storage workflows vary. |

#### 👤 heiba

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [DaVinci Image AI](https://ko-fi.com/s/b36e40dd54) | 📦 Public listing; price/download access not established | ❔ Not established | Integrates Google Nano Banana image generation and editing into Resolve. Requires an external AI service; store price, edition requirements and availability were not established. |
| [DaVinci Sub Tool (Edit & Translate)](https://ko-fi.com/s/5e9dcdeae5) | 📦 Public listing; price/download access not established | ❔ Not established | Batch subtitle editing, search/replace and online translation. Listed separately from Sub Translator by the creator; overlap or upgrade entitlement is not established. Provider costs may apply. |
| [DaVinci Sub Translator](https://ko-fi.com/s/706feb3730) | 📦 Public listing; price/download access not established | ❔ Not established | Translates subtitle tracks through online translation or LLM services and imports translated subtitles into a timeline track. Provider costs may apply; store availability was not established. |
| [DaVinci TTS](https://ko-fi.com/s/9e769243b5) | 📦 Public listing; price/download access not established | ❔ Not established | Generates speech from timeline text or subtitles and imports audio into the Media Pool. Supports Microsoft, MiniMax and OpenAI voices; external provider terms and costs apply. Store price and availability did not render reliably. |

#### 👤 HKeys

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [Resolve keyboard shortcuts and drills](https://hkeys.app/apps/davinci-resolve/macos) | 📖 Public shortcut reference | 📖 Browser reference; lesson requirements vary | Community shortcut reference with printable PDFs and practice drills. Includes links to Windows, macOS and Linux variants; custom keyboard mappings and Resolve versions can differ. |

#### 👤 Jacob Danell

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [Despiller Plus](https://gitlab.com/WeSuckLess/Reactor/-/blob/master/Atoms/com.JacobDanell.DeSpillerPlus/com.JacobDanell.DeSpillerPlus.atom) | 📦 Public Reactor package; check package license | ❔ Not established | Removes color spill, restores luminance and recolors spill areas using a background image. Manifest states Resolve/Fusion 16 to 20+. |
| [Oidn Denoiser](https://gitlab.com/WeSuckLess/Reactor/-/blob/master/Atoms/com.JacobDanell.OidnDenoiser/com.JacobDanell.OidnDenoiser.atom) | 📦 Public Reactor package; check package license | 🪟 Windows · 🍎 macOS (legacy packages) | Denoises ray-traced renders using beauty, albedo and normal passes. This legacy package embeds OIDN 1.2 and requires an SSE4.1-capable CPU; no Apple Silicon-native claim. |

#### 👤 Lowepost

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [Lowepost training](https://lowepost.com/home/) | 💰 Paid course access | 📖 Browser reference; lesson requirements vary | Post-production training with Resolve grading, film-look development, beauty retouching and Fusion lessons. The provider also teaches other applications; select the Resolve course and review its exercise requirements. |

#### 👤 Ludooki

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [Outline plugin](https://ko-fi.com/s/6a120fb931) | 📦 Public listing; price/download access not established | ❔ Not established | Adds outlines to images, clips and transitions in Resolve. Indexed creator listing; current price, host requirements and update history are not established. |

#### 👤 Maxon

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [Red Giant tools for Resolve](https://www.maxon.net/en/red-giant) | 💰 Paid subscription | 🪟 Windows · 🍎 macOS | Effects and color tools, including supported Universe effects. The current host table lists Resolve 19 and 20; support is per effect, so After Effects-only tools in the wider suite are excluded from the Resolve claim. |

#### 👤 Mixing Light

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [Mixing Light Resolve training](https://mixinglight.com/) | 💰 Membership and standalone courses | 📖 Browser reference; lesson requirements vary | Color-grading and finishing tutorials, Resolve courses and practice projects. Tutorial-library membership and standalone course access are separate products; check each course’s host version and access period. |

#### 👤 Mug

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [Mug Advanced Halftone](https://gitlab.com/WeSuckLess/Reactor/-/blob/master/Atoms/com.muglalb.mug-advanced-halftone/com.muglalb.mug-advanced-halftone.atom) | 📦 Public Reactor package; check package license | ❔ Not established | Halftone generator for Resolve and Fusion with grid/dot controls, jitter and RGB offsets. Includes Edit-page effects and Fusion integration; manifest states MIT licensing. |

#### 👤 NeoFinder

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [NeoFinder](https://www.cdfinder.de/) | 💰 Paid; trial available | 🍎 macOS | Catalogs online and offline media volumes with thumbnails, metadata and search, helping locate assets for edit projects. Requires macOS 10.15+ on Intel or Apple Silicon. The separate iOS companion has its own requirements. |

#### 👤 Pieter Van Houte

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [Suck Less Audio](https://gitlab.com/WeSuckLess/Reactor/-/blob/master/Atoms/com.PieterVanHoute.SuckLessAudio/com.PieterVanHoute.SuckLessAudio.atom) | 📦 Public Reactor package; check package license | ❔ Not established | Drives numeric and point parameters from WAV audio. Requires Microsoft WAV signed 16-bit PCM; other audio formats are not interchangeable. |

#### 👤 Pro Sound Effects

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [SoundQ](https://www.prosoundeffects.com/soundq/) | 🆓 App and starter library; 💰 Additional sound libraries | 🪟 Windows · 🍎 macOS | Searches and organizes sound libraries with metadata editing and drag-and-drop into editors. Account required. Dedicated Spot to Timeline integration is listed for other hosts; do not assume that integration for Resolve. |

#### 👤 RavinMaddHatter

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [YouTube Prep Tool](https://ravinmaddhatter.itch.io/youtube-prep-tool) | 💰 Name your own price | ❔ Not established | Prepares gameplay edits using audio-volume cuts, description templates and subtitle transcription. Marked in development; the download points to an external GitHub release and was not followed. |

#### 👤 Retouch4me

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [Retouch4me video plugins](https://retouch4.me/videoretouching) | 💰 Paid plugins; demos available | 🪟 Windows · 🍎 macOS | Video skin cleanup and dodge-and-burn tools with OFX editions. Requires Resolve 18+ downloaded from Blackmagic; the Mac App Store build is unsupported. Individual products and installers have separate versions. |

#### 👤 Ripple Training

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [Resolve learning path](https://www.rippletraining.com/product-category/davinci-resolve-learning-path/) | 💰 Paid courses | 📖 Browser reference; lesson requirements vary | Resolve learning pathway covering editing, color and media management. Reviewed listings include Resolve 20 color grading and Resolve 19 media management; lesson and exercise compatibility follows each course. |

#### 👤 Stefan Bredereck/MuseVFX

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [FastLightWrap](https://gitlab.com/WeSuckLess/Reactor/-/blob/master/Atoms/com.MuseVFX.FastLightWrap/com.MuseVFX.FastLightWrap.atom) | 📦 Public Reactor package; check package license | ❔ Not established | Legacy Fusion light-wrap macro. Current Resolve compatibility is not established. |

#### 👤 Stefan Ihringer

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [ExponentialGlow](https://gitlab.com/WeSuckLess/Reactor/-/blob/master/Atoms/com.StefanIhringer.ExponentialGlow/com.StefanIhringer.ExponentialGlow.atom) | 📦 Public Reactor package; check package license | ❔ Not established | Exponential-falloff glow macro designed for linear-gamma floating-point imagery. Author recommends float32 to avoid banding in strong glows. |
| [XfChroma Fuse](https://gitlab.com/WeSuckLess/Reactor/-/blob/master/Atoms/com.StefanIhringer.XfChroma/com.StefanIhringer.XfChroma.atom) | 📦 Public Reactor package; check package license | ❔ Not established | Color-separated transformation Fuse for chromatic-aberration effects. |

#### 👤 stib

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [displace plus plus](https://gitlab.com/WeSuckLess/Reactor/-/blob/master/Atoms/com.pureandapplied.stibs_fuses.displaceplusplus/com.pureandapplied.stibs_fuses.displaceplusplus.atom) | 📦 Public Reactor package; check package license | ❔ Not established | GPU displacement Fuse with XY, angle/radius, rotation and image-gradient modes, plus edge-overflow controls. |

#### 👤 Tagger

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [Tagger for Resolve](https://tagger.mov/) | 🆓 First 20 files; 💰 One-time Pro license | 🪟 Windows · 🍎 macOS | Adds AI keywords, descriptions and shot metadata to the Media Pool, plus local audio transcription. Requires Resolve Studio. Selected low-resolution frames are sent to an AI service for visual analysis; audio transcription runs locally. |

#### 👤 Tangenten

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [Flow Looper](https://tangenten.gumroad.com/l/FlowLooper) | 💰 Paid individual-seat license | 🪟 Windows · 🍎 macOS · 🐧 Linux | Animates still images with spline-defined flow corridors and cross-faded loops for moving textures and backgrounds. Requires Resolve 20+ Free or Studio, or Fusion Studio 20+. |
| [Palette Pal](https://tangenten.gumroad.com/l/PalettePal) | 💰 Paid individual-seat license | 🪟 Windows · 🍎 macOS · 🐧 Linux | Fusion color-palette generator with harmonies, image extraction, shade ladders and RGB controls for connected nodes. Requires Resolve 21+ Free or Studio, or Fusion Studio 21+. |
| [Puppet Pin Tool](https://tangenten.gumroad.com/l/PuppetPinTool) | 💰 Paid individual-seat license | 🪟 Windows · 🍎 macOS · 🐧 Linux | Mesh deformation and pin-based character animation with IK/FK rigs in Fusion. Requires Resolve 20+ Free or Studio, or Fusion Studio 20+. Layered PSD input requires Resolve Studio; separate image layers support the Free edition. |

#### 👤 vfxblend

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [Eric’s Keyframes](https://www.patreon.com/posts/mograph-tools-26571904) | 📦 Public post; attachment access not tested | ❔ Not established | Fusion motion-graphics macro supplied as a .setting attachment with tutorials. Legacy 2019 post; current host compatibility and download entitlement are not established. |

#### 👤 We Suck Less

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [ReadEXR Ultra](https://gitlab.com/WeSuckLess/Reactor/-/blob/master/Atoms/com.wesuckless.ReadEXRUltra/com.wesuckless.ReadEXRUltra.atom) | 📦 Public Reactor package; check package license | ❔ Not established | EXR-reading Fuse with scriptable filename input and optional Vonk text input. The author explicitly describes it as pre-alpha. |

#### 👤 William

| Resource | Access | Platforms | Purpose and requirements |
|---|---|---|---|
| [Just Highlighter Plus](https://ko-fi.com/s/cb7b432737) | 📦 Public listing; price/download access not established | ❔ Not established | Animated highlighting for text and animated lines in Resolve. Indexed creator listing establishes its purpose; direct retrieval was blocked and current price is unknown. |
<!-- end community discoveries -->
