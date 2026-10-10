# Abilix website

Responsive static website built with HTML, CSS, and vanilla JavaScript. No build step or server runtime is required. Hostinger deploys the `main` branch of this repository to `ai.abilix.in` automatically.

## Pages

Home, Products, Sales & Marketing Hub, AI Learning Hub, About, Blog, Contact, plus Services, AI Tools and AI Prompts placeholder pages ready to replace as content becomes available.

## Local preview

Before publishing changes to `app.js` or `styles.css`, run `node scripts/version-assets.cjs`.
This updates their URLs in every HTML page so visitors receive the new files even when the host caches assets for a week.

Open `index.html` directly, or run any static file server from this directory. Navigation uses ordinary `.html` URLs and works on shared hosting.

## Website forms

The homepage enquiry form (`home-form.js` and `home-form.css`) and Contact page
form (`contact-crm.js`) submit to the Abilix CRM website form. Contact page
business details are included in the lead message. Update the CRM form token in
both scripts if the CRM form is replaced.

## Replace before launch

- Confirm the contact email, phone, address, pricing, and any business claims.
- Replace editorial imagery and sample blog entries with approved Abilix assets and articles.
