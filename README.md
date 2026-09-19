# Rullst website

Source for [rullst.github.io](https://rullst.github.io/).

This static website describes stable Rullst v12 honestly: use exact release artifacts; main remains a moving integration line and v5 is frozen and end-of-life. It makes no universal performance, security or legal-compliance guarantee.

## Source of truth

The design and copy are maintained in the [framework repository](https://github.com/Rullst/Rullst): docs/home_template.html, docs/site.css and docs/site.js. The website privacy page is generated from that same landing notice.

After preserving all local changes, run from the framework checkout:

```bash
node .github/export-organization-site.mjs /path/to/clean/Rullst.github.io
```

Review the resulting diff, test it, then commit and deploy separately. The exporter never pushes. Publish matching framework documentation first: /Rullst/book/, /Rullst/images/ and /Rullst/Rullst.png are served by the framework Pages deployment.

## Verification

The framework's static validator and real Chromium smoke checks exercise the source landing page at desktop and mobile widths, keyboard navigation, clipboard success/denial, privacy details, reduced motion and no-JavaScript navigation. The landing page has no analytics, social embeds or browser storage; linked documentation/benchmarks and GitHub hosting have separate boundaries described in the notice.

## Website privacy maintenance

The landing page links to [the full privacy notice](privacy.html). Its responsible person is Venelouis, Brazil, with officialrullst@gmail.com as the privacy contact. The notice covers these static pages and their email contact channel; the demos, framework documentation and applications need their own data-flow reviews.

The notice includes conditional regional information for LGPD, EU/UK GDPR, California CCPA/CPRA, Canada, Switzerland, Australia and Singapore. A published notice is only part of compliance. The operator must maintain the practices it describes, handle rights requests within applicable deadlines and assess territorial scope and exemptions with qualified advice when needed.

Operational items that cannot be verified from this repository:

- Confirm that the public controller identity is sufficient and whether a DPO or local representative is required by an applicable regime; the contact address alone does not establish an appointment.
- Verify GitHub/Gmail account arrangements, actual processing locations and any required international-transfer mechanism or contracts. Provider policies do not establish that the site's own transfer obligations have been met.
- Apply and document correspondence retention/deletion criteria, access controls, request verification and handling, and incident response. The static site cannot enforce mailbox or provider-log retention.
- Review linked demos separately before collecting account or other personal data. Reassess notices and consent before adding analytics, embeds, advertising or optional storage here.

Keep the footer summary and privacy.html aligned. Port these changes to docs/home_template.html, docs/site.css and the privacy export in the framework repository before running its exporter again, or the next export may overwrite them.

## Contributing

Prefer a focused change to the framework source followed by this export, so the two entry points stay aligned. Use conventional commits, for example: feat(site): improve navigation. No npm bundle is required.
