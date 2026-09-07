# Searchable catalogue

The website in `site/` provides combined search and filters for tasks, platform, Resolve edition and version, access, payment model, processing, architecture and evidence. Official resources remain first. Resource details show field-specific sources, check dates, limitations and unknown requirements. Product releases and repository activity are separate sort options.

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

Prepared for GitHub Pages at `https://subtlesayak.github.io/awesome-resolve/`. The deployment workflow publishes only `site/`, never the repository root or local research. It is manually triggered; enabling Pages and running deployment is a separate publication step. No custom domain, analytics, third-party scripts or fonts are configured. The site has no database and makes no automatic upstream requests: freshness follows reviewed catalogue commits.

Shareable URLs contain the search terms and filter values. The website stores no browsing history or selections in browser storage. Avoid including private project names in links you share.
