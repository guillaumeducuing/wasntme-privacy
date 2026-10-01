# WasntMe — Privacy Policy

Privacy policy of the [WasntMe](https://chrome.google.com/webstore) Chrome extension, in English, French and Spanish.

- `/en`, `/fr`, `/es`: the policy in each language
- `/`: redirects to the visitor's browser language (English by default)

## Edit

All the text is in [`lib/content.ts`](lib/content.ts). Update `LAST_UPDATED` when the policy changes.

## Run locally

```sh
npm install
npm run dev
```

## Deploy

Published on GitHub Pages by [`.github/workflows/pages.yml`](.github/workflows/pages.yml) on every push to `main`:
**https://guillaumeducuing.github.io/wasntme-privacy/**

Optional repository variable `CONTACT_EMAIL` (Settings → Secrets and variables → Actions → Variables): the address shown in the Contact section, hidden when not set.

Fonts: Bricolage Grotesque and JetBrains Mono, under the SIL Open Font License (see `app/fonts/`).
