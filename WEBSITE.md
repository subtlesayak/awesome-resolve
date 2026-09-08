# Searchable catalogue

[🌐 Open Awesome Resolve List](https://subtlesayak.github.io/awesome-resolve/)

The website in `site/` provides combined search and filters for tasks, platform, Resolve edition and version, access, payment model, processing, architecture and evidence. Official resources remain first. Resource details show field-specific sources, check dates, limitations and unknown requirements. Product releases and repository activity are separate sort options.

Check **Hide official BMD resources** to browse only community and third-party listings. Uncheck it to show official listings again. This preference is included in shared filter URLs. **Clear filters** resets requirements to the default Resolve Free view while preserving the search text and selected sort order.

Filter options display match counts and disable empty combinations. Selecting a task hides filters without meaningful documented requirements for that task and clears conflicting requirements with a notice; search and sorting are preserved. Version filters use documented Resolve compatibility ranges, not provider release numbers. When version information is missing, a labelled action lets users remove the version constraint and inspect sources. Empty results suggest specific filters to remove, with the resulting counts; they never silently treat unknown compatibility as supported.

## Run locally

With Node.js 22 or later:

```sh
node scripts/build-site.mjs
node scripts/serve-site.mjs
```

Open `http://127.0.0.1:4173`. Stop the preview with Ctrl+C. There are no package dependencies. The preview serves only the site directory, excluding private research and email drafts.

## Maintain the evidence

The site combines `data/repositories.csv`, `data/external-tools.md`, `data/versions.json` and their existing evidence ledgers. Add reviewed structured requirements to `data/resource-details.json`, with field, source URL, review date and limitations. Empty arrays and `unknown` mean not established. Do not derive edition, version, architecture or offline compatibility from a programming language or a file extension.

Use `documented` for provider documentation, `creator` only for a direct attributable confirmation of the named facts, and `tested` only for a reviewed test report describing exact setup and results. A public creator claim that they tested a product is documentation until this catalogue reviews an attributable test report. Notifications, email drafts and acknowledgements do not establish confirmation.

Tested starting points require a `recommendation` with `reason` and `tested_setup`, backed by `tested` evidence. This view intentionally begins empty. A creator confirmation does not imply a recommendation. Review public submissions through the creator-confirmation and testing issue forms; never copy private outreach addresses into catalogue data.

Record before/after observations in `data/provider-updates.json`, linking the corresponding catalogue release and primary source. Keep `catalogue_date` separate from `upstream_date`; do not invent a product release date. Add every verified version change to `CHANGELOG.md` and the matching GitHub release notes. Earlier releases remain linked from the website; structured per-resource history currently starts at v1.14.

Regenerate the site and run:

```sh
node scripts/build-catalogue.mjs
node scripts/build-site.mjs
node --test --test-concurrency=1 scripts/*.test.mjs
git diff --check
```

## Hosting

Live on [GitHub Pages](https://subtlesayak.github.io/awesome-resolve/). The deployment workflow publishes only `site/`, never the repository root or local research. To publish reviewed changes, run **Publish catalogue website** from the repository's Actions tab on `main`; a normal push validates the catalogue but does not redeploy the website. No custom domain, analytics, third-party scripts or fonts are configured. The site has no database and makes no automatic upstream requests: freshness follows reviewed catalogue deployments.

Shareable URLs contain the search terms and filter values. The website stores no browsing history or selections in browser storage. Avoid including private project names in links you share.

The edition selector has two choices: Resolve Free (default) and Resolve Studio. Both include unknown-edition listings as assumed compatible; Free excludes recorded Studio-only requirements. Clear filters restores Resolve Free and preserves search text and sorting. Old all-editions and unknown-edition share links migrate to Resolve Free. Platform and version requirements remain separate.

Studio results also include Free-compatible tools, following [Blackmagic Design’s edition feature hierarchy](https://www.blackmagicdesign.com/products/davinciresolve). Where Studio support is inferred from Free support, the result states that it is not separately verified. Platform restrictions and explicit Studio version ranges still apply. Studio support alone never implies Free support.

Hidden search topics are maintained per listing URL in `data/search-tags.json` and included in generated site data. The static website searches these tags alongside titles, creators and descriptions; no server is required. Every listing needs a reviewed tag record. Edit its tags when changing its purpose, and cite creator sources for added brand or film-stock terms. Tags do not alter compatibility filters. Search normalizes colour/color, Fuji/Fujifilm, captions/subtitles, monochrome/black-and-white, diacritics and punctuation.
