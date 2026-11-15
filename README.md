# Rullst website

Deployment for [rullst.win](https://rullst.win/): the Rullst landing page in English (`/`) and Brazilian Portuguese (`/pt-br/`), with the full privacy notice (`/privacy.html`, `/pt-br/privacy.html`).

The website describes Rullst v13, currently in prerelease, honestly: install exact release artifacts; main remains a moving integration line, and v12 (end of life on 16 October 2026) and v5 are frozen. It makes no universal performance, security or legal-compliance guarantee.

## Source of truth

The pages are maintained in the [framework repository](https://github.com/Rullst/Rullst), under `docs/`: `home_template.html`, `home_template.pt-BR.html`, `privacy_template.html`, `privacy_template.pt-BR.html`, `site.css`, `site.js` and `flags/`. Change them there, in one pull request for both languages; the framework's `validate-site.py` and Chromium smoke test check them before merge. See [website maintenance](https://rullst.win/Rullst/book/website-maintenance.html).

## Deployment

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) runs daily, on every push to `main` here and on demand (Actions → Deploy rullst.win → Run workflow). It checks out the framework's public `main` branch read-only, with no secret, runs `python3 .github/assemble-organization-site.py --out public_site` from it and deploys the result with `actions/deploy-pages`. The job summary records the framework commit. A framework change reaches the site at the next daily run; run the workflow by hand to publish it sooner.

The Pages source of this repository is "GitHub Actions", with the custom domain `rullst.win` and HTTPS enforced. Other paths come from other repositories: `/Rullst/` (book, benchmark dashboards, images; `/Rullst/` itself redirects to the root) from [Rullst/Rullst](https://github.com/Rullst/Rullst), and `/Benchmarks/` from [Rullst/Benchmarks](https://github.com/Rullst/Benchmarks).

`index.html`, `privacy.html` and `src/` in this repository are the pages that the branch-based Pages source served before this workflow, kept unchanged as the rollback copy: switching the Pages source back to "Deploy from a branch" (`main`, `/`) restores them. They are not deployed and are not maintained; remove them once the workflow has run reliably.

## Website privacy maintenance

The landing page links to the full privacy notice ([English](https://rullst.win/privacy.html), [português](https://rullst.win/pt-br/privacy.html)). Its responsible person is Venelouis, Brazil, with officialrullst@gmail.com as the privacy contact. The notice covers these static pages and their email contact channel; the demos, framework documentation and applications need their own data-flow reviews.

The notice includes conditional regional information for LGPD, EU/UK GDPR, California CCPA/CPRA, Canada, Switzerland, Australia and Singapore. A published notice is only part of compliance. The operator must maintain the practices it describes, handle rights requests within applicable deadlines and assess territorial scope and exemptions with qualified advice when needed.

Operational items that cannot be verified from this repository:

- Confirm that the public controller identity is sufficient and whether a DPO or local representative is required by an applicable regime; the contact address alone does not establish an appointment.
- Verify GitHub/Gmail account arrangements, actual processing locations and any required international-transfer mechanism or contracts. Provider policies do not establish that the site's own transfer obligations have been met.
- Apply and document correspondence retention/deletion criteria, access controls, request verification and handling, and incident response. The static site cannot enforce mailbox or provider-log retention.
- rullst.win answers through Cloudflare (`server: cloudflare`, a Network Error Logging `report-to` header and an injected challenge script, which the pages' CSP blocks), while the notice names GitHub Pages as the only host. Review whether the notice should name Cloudflare and which of its features are enabled.
- Review linked demos separately before collecting account or other personal data. Reassess notices and consent before adding analytics, embeds, advertising or optional storage here.

Keep the landing summary and the full notice aligned, in both languages, in the framework repository (`docs/home_template*.html`, `docs/privacy_template*.html`); this repository no longer holds a copy.

## Contributing

Site changes belong in the framework repository. Changes here are limited to the deployment workflow and this README. Use conventional commits, for example: ci(site): pin the deploy action.
