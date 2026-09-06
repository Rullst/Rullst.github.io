# Rullst website

Source for [rullst.github.io](https://rullst.github.io/).

This static website describes the unreleased v12 preview honestly: main is active v12 work; v5 is frozen and end-of-life. It makes no universal performance, security or legal-compliance guarantee.

## Source of truth

The design and copy are maintained in the [framework repository](https://github.com/Rullst/Rullst): docs/home_template.html, docs/site.css and docs/site.js. The website privacy page is generated from that same landing notice.

After preserving all local changes, run from the framework checkout:

```bash
node .github/export-organization-site.mjs /path/to/clean/Rullst.github.io
```

Review the resulting diff, test it, then commit and deploy separately. The exporter never pushes. Publish matching framework documentation first: /Rullst/book/, /Rullst/images/ and /Rullst/Rullst.png are served by the framework Pages deployment.

## Verification

The framework's static validator and real Chromium smoke checks exercise the source landing page at desktop and mobile widths, keyboard navigation, clipboard success/denial, privacy details, reduced motion and no-JavaScript navigation. The landing page has no analytics, social embeds or browser storage; linked documentation/benchmarks and GitHub hosting have separate boundaries described in the notice.

## Contributing

Prefer a focused change to the framework source followed by this export, so the two entry points stay aligned. Use conventional commits, for example: feat(site): improve navigation. No npm bundle is required.
