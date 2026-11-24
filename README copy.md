# Vintage Island — Cloudflare Pages starter

Static-site starter using the recovered assets and public page copy. It is a migration scaffold, not yet a pixel-perfect recreation.

## Deploy
1. Create a GitHub repository and upload the contents of this folder (keep `index.html` at repository root).
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Framework preset: None. Build command: blank. Build output directory: `/`.
4. Deploy to the `*.pages.dev` preview and validate all routes.
5. Add `www.vintageisland.capital` under Pages → Custom domains. Follow Cloudflare's DNS instructions. Keep Framer DNS active until preview approval.

## Before production
- Contact form is intentionally not connected. Configure the actual Formspark form ID or another provider; verify delivery to `oandreduarte@gmail.com` and `/thank-you/`.
- Carbob and Numo page copy is marked for confirmation against Framer.
- Privacy Policy is abbreviated and must be replaced with the complete current legal text.
- Compare all pages with Framer for exact copy, images, layout, breakpoints, SEO, theme and mobile menu.
- Confirm `/about-2/` canonical URL and preserve redirects if the desired public URL differs.

## Routes
`/`, `/about-2/`, `/projects/`, `/contact/`, `/aircourts/`, `/volup/`, `/carbob/`, `/smashpro/`, `/numo/`, `/privacy-policy/`, `/thank-you/`.
