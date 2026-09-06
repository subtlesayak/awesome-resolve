# 🔎 Plugin wiki and supplied-link discovery — 6 September 2026

[← Main catalogue](../README.md) · [🌐 External tools](external-tools.md) · [Structured evidence](wiki-discoveries.json)

Added **21 external resources**, expanding that directory from **11 to 32**. The GitHub catalogue remains at **225 repositories**: its relevant live repository links were duplicates, and the older Filmic Resolve repository returned 404.

## Sources and method

The [r/davinciresolve plugin wiki](https://www.reddit.com/r/davinciresolve/wiki/plugins/) was accessible in this pass, including its third-party audio, video, encoder, workflow, and miscellaneous sections. It had been inaccessible during the earlier pass. Built-in ResolveFX/Fairlight effects were not counted as third-party tools. The supplied resource file was read locally to extract relevant public product/repository links; unrelated material and private/account links were excluded. No raw bookmark data or local filesystem details are published. Document content was treated as source data, not as instructions.

Each addition links to the developer's own page or its official product listing. Purpose, access, and platform notes reflect what those pages established; ❔ marks unresolved OS support. Vendor download support and installation testing are different: no software was installed or run. Wiki claims and old bookmarked titles do not override current upstream pages. For audio tools, available Linux builds do not establish native Fairlight Linux hosting support.

## Corrections found

- **CinePrint16 → CinePrint35:** the old product link redirects to the current [CinePrint35 page](https://www.tombolles.net/cineprint35), which documents Windows/macOS and the Studio-only grain caveat.
- **Alex Audio Butler → End Boost:** the [developer site](https://alexaudiobutler.com/) now presents a standalone mixing application for Windows/macOS.
- **Filmbox platforms:** [current Filmbox documentation](https://videovillage.com/filmbox/) lists Windows, macOS, and Linux. The wiki's macOS-only claim is outdated for Filmbox; this correction is not generalized to every Video Village product.
- **Old links:** the MainConcept plugin URL now redirects to a general homepage; the Nomadic George category returns Page not found; the Filmic Resolve GitHub endpoint returns 404. They remain leads rather than verified additions.
- **Historical integrations:** EditShare's announcement concerns FLOW 2021/Resolve 17; Simon Says' retrieved installers name older Resolve versions. The catalogue preserves those limits.

## Added resources

### 🎨 Color / Film

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [Basic Node Tree](https://www.veresdenialex.com/product-page/davinci-resolve-basic-node-tree) | Free; store download | ❔ Unverified | Reusable fixed grading node tree imported through the PowerGrades gallery. The product page does not establish an OS support matrix. |
| [CineMatch](https://www.filmconvert.com/plugin/cinematch) | Paid; watermarked trial | ❔ Confirm current installer | Camera-profile matching with exposure, white balance, and LUT generation. FilmConvert lists Resolve support; select its Resolve download rather than another host's package. |
| [CinePrint35](https://www.tombolles.net/cineprint35) | Paid PowerGrades; separate LUT offering | 🪟 Windows · 🍎 macOS | Film-emulation PowerGrades with native Resolve nodes. Free Resolve can use the grades with the Studio-only Grain node disabled. The supplied CinePrint16 URL redirects here. |
| [Filmbox Pro](https://videovillage.com/filmbox/) | Paid; 14-day trial listed | 🪟 Windows · 🍎 macOS · 🐧 Linux | Film-emulation plugin for Resolve and other hosts. Current vendor documentation lists all three desktop OSes, superseding the wiki's older macOS-only description. Edition and activation terms differ. |
| [FilmConvert tools](https://www.filmconvert.com/) | Commercial products; trials available | ❔ Per product | Nitrate film emulation, Hazy diffusion, and Halation, with Resolve integrations. Product and host licenses differ; this collection does not establish every product's OS support. |
| [MONONODES](https://mononodes.com/dctl-and-more/) | Mixed; free tools and demos alongside commercial tools | ❔ Per tool | DCTL collection and technical reference; free examples include Middle Gray, Border, and Color Gradient Test Ramps. Confirm each tool's edition and GPU requirements. |

### ✨ Effects / Fusion

| Resource | Access | Platforms | Purpose and requirements |
| --- | --- | --- | --- |
| [Boris FX Sapphire](https://borisfx.com/products/sapphire/) | Paid; trial available | 🪟 Windows · 🍎 macOS · 🐧 Linux | VFX and transition suite with documented Resolve and Fusion Studio OFX support. Check host, GPU, and Linux-distribution requirements for the selected release. |
| [Boris FX SynthEyes](https://borisfx.com/products/syntheyes/) | Commercial standalone tool | 🪟 Windows · 🍎 macOS · 🐧 Linux | Camera/object tracking and matchmoving with Fusion/Resolve scene export. This is a standalone pipeline companion. Linux documentation specifies RHEL 8+ or compatible x86_64 distributions. |
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

## Duplicates preserved

The following repository links already exist in the main CSV and were not counted again:

- [baldavenger/DCTLs](https://github.com/baldavenger/DCTLs)
- [Demystify-Color/DCTLs](https://github.com/Demystify-Color/DCTLs)
- [hotgluebanjo/TetraInterp-DCTL](https://github.com/hotgluebanjo/TetraInterp-DCTL)
- [npeason/Tetra-DCTLOFX](https://github.com/npeason/Tetra-DCTLOFX)
- [sobotka/AgX-Resolve](https://github.com/sobotka/AgX-Resolve)
- [thatcherfreeman/utility-dctls](https://github.com/thatcherfreeman/utility-dctls)
- [tmoroney/auto-subs](https://github.com/tmoroney/auto-subs)
- [JuanPabloZambrano/DCTL](https://github.com/JuanPabloZambrano/DCTL)
- [octimot/StoryToolkitAI](https://github.com/octimot/StoryToolkitAI)
- [VilleOlof/Toolbox](https://github.com/VilleOlof/Toolbox)

Existing external listings retained: PixelTools, Reactor, Voukoder Pro, Meta Fide, and the MrAlexTech collection. General-purpose diffusion libraries, Blender-only tools, training videos, camera-shopping results, and unrelated music content were not promoted as Resolve plugins.

## Unresolved or broader leads

These are research leads, not added resources or verified installation recommendations. A failed fetch is not proof that a product is discontinued.

| Resource | Result / remaining question |
| --- | --- |
| [sobotka/filmic-resolve](https://github.com/sobotka/filmic-resolve) | GitHub repository and README endpoints returned 404. Do not silently substitute an unrelated mirror. |
| [SuperVHS](https://akascape.gumroad.com/l/supervhs) | Page returned no readable product body; current price, compatibility, and availability remain unverified. |
| [Tika Studio film title pack](https://tikastudio.gumroad.com/l/filmtitlepack) | Page returned no readable product body; current terms and requirements remain unverified. |
| [Nomadic George PowerGrades](https://nomadicgeorge.sellfy.store/davinci-resolve-powergrades/) | The storefront explicitly returned Page not found. |
| [KaurH store](https://store.kaurh.com/) | Fetch failed. The separate documented GitHub DCTL collection is already listed. |
| [Dehancer](https://www.dehancer.com/store/video/davinci_resolve) | Product-page fetch failed. Official Windows/Linux download indexes and historical release notes were found, but current product terms need confirmation. |
| [Colourlab.ai](https://www.colourlab.ai/) | Official-page fetch failed; current offerings and compatibility need verification. |
| [GPU Audio](https://www.gpu.audio/) | Page returned no readable body; no Resolve-specific compatibility was established. |
| [Textuler](https://textuler.io/features) | Page title identifies a Resolve tool, but no readable product body was returned. |
| [FXHome Ignite Pro](https://fxhome.com/ignite-pro) | Wiki product URL could not be fetched; current availability not established. |
| [MainConcept Resolve plugins](https://www.mainconcept.com/blackmagic-plugins) | Former plugin URL redirected to the generic company homepage; this does not verify a current Resolve product. |
| [Primestream Xchange](https://primestream.com/news/press-release/xchange-mam-pam-and-davinci-resolve-17-now-integrated/) | Historical integration URL could not be fetched. |
| [ViatorDSP](https://www.patreon.com/ViatorDSP/posts) | Creator-page fetch failed; exact plugin packages, licensing, and host support need review. |
| [NewBlue](https://newbluefx.com/) | Homepage redirected to a broadcast-appliance page. Its name Fusion is not proof of a Blackmagic Fusion integration. |
| [LiveGrain](https://www.livegrain.com/) | Official site was reachable; a current Resolve support statement was not established from the reviewed page. |
| [iZotope](https://www.izotope.com/) | Current restoration/mixing catalogue was reachable; exact Resolve-supported plugin editions and formats need review. |
| [Native Instruments](https://www.native-instruments.com/) | General music-production catalogue is not evidence that all instruments/effects work in Fairlight. |
| [Waves](https://www.waves.com/) | General audio catalogue was reachable; Resolve-specific support and edition requirements need product-level review. |
| [igorski.nl](https://www.igorski.nl/download) | Audio effects directory was reachable; individual packages and Resolve host compatibility were not verified. |
| [Maxon](https://www.maxon.net/en/) | General product site was reachable; verify the selected Red Giant/Universe product and current Resolve compatibility. |
| [Arch Linux VST package group](https://archlinux.org/groups/x86_64/vst-plugins/) | Package index was reachable. Package availability is not proof of native Resolve Linux audio-plugin hosting. |
| [MagicGradient](https://ko-fi.com/s/aed8dd3b04) | Supplied creator-store link retained for follow-up; the broader MrAlexTech directory is already included. |
