# Bridging the Silence Podcast — Website

Official website for **Bridging the Silence Podcast**, hosted by Kiarie Wachira. A mental health podcast creating space for honest conversations about awareness, education, and access to support — based in Nairobi, Kenya.

🌐 **Live site:** [bridgingthesilence.com](https://www.bridgingthesilence.com)

---

## About the Project

This is a fully custom-built static website — no templates, no page builders, no WordPress. Built from scratch using plain HTML, CSS, and JavaScript, and deployed via a GitHub → Vercel pipeline.

---

## Pages

| Page | Description |
|---|---|
| `index.html` | Homepage — hero with video background, latest episode embed, mission pillars, newsletter signup |
| `episodes.html` | Episode archive — YouTube thumbnail cards, Spotify and YouTube play buttons |
| `about.html` | Host bio, mission statement, guest CTA |
| `resources.html` | Verified Kenya mental health helplines and support organisations |
| `events.html` | Annual Suicide Prevention Art Exhibition — story wall, gallery, IFMSA affiliation, submission forms |
| `featured-guests.html` | Guest profiles with per-guest custom card aesthetics |
| `guest.html` | Guest application form |
| `contact.html` | General contact form |
| `merch.html` | Coming soon page |

---

## Tech Stack

- **HTML5, CSS3, Vanilla JavaScript** — no frameworks
- **Vercel** — hosting and deployment
- **GitHub** — version control and CI/CD pipeline
- **Mailchimp** — newsletter signups
- **Formspree** — contact and guest application forms
- **Google Forms** — exhibition story and artwork submissions
- **YouTube and Spotify embeds** — episode players

---

## Features

- Video background hero with reduced motion accessibility support
- Tabbed Spotify / YouTube episode player
- Auto-hide navbar on scroll, reveal on scroll up
- Mobile-responsive throughout with hamburger menu
- Episode cards using YouTube thumbnail API
- Custom guest cards with per-guest colour theming
- Mosaic CSS column layout for story wall and gallery
- Anonymous story submission via Google Forms
- IFMSA affiliation with brand-compliant logo display
- Favicon set across all sizes including Apple touch icon
- Vercel Analytics via script tag injection
- Shared navbar and footer loaded via JavaScript partials
- Active page highlighting in navigation
- Auto-updating copyright year

---

## Project Structure

bridging-the-silence/
├── index.html
├── episodes.html
├── about.html
├── resources.html
├── events.html
├── featured-guests.html
├── guest.html
├── contact.html
├── merch.html
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── favicon-192x192.png
├── favicon-512x512.png
├── css/
│ └── style.css
├── js/
│ └── main.js
├── partials/
│ ├── navbar.html
│ └── footer.html
└── assets/
├── images/
│ ├── logo.png
│ ├── ifmsa-logo.png
│ ├── esther-rono.jpg
│ └── guests/
└── videos/
└── trailer.mp4

---

## Deployment

The site deploys automatically via Vercel on every push to the `main` branch.

```bash
git add .
git commit -m "your update message"
git push
```

Vercel rebuilds and redeploys within ~30 seconds. No manual deployment steps required.

---

## Monthly Update Process

When a new episode drops:

1. Add a new episode card to `episodes.html` using the YouTube video ID
2. Update the latest episode embed in `index.html` (YouTube ID, Spotify episode ID, title, description)
3. Update hero Spotify and YouTube button links in `index.html`
4. Add new guest card to `featured-guests.html` if applicable
5. Commit and push

---

## Built By

**Ryan Kimutai** — [LinkedIn](https://www.linkedin.com/in/ryan-korir-1b0a85286/)

---

## Client

**Bridging the Silence Podcast**
[bridgingthesilence.com](https://www.bridgingthesilence.com) · [@bridgingthesilence](https://www.instagram.com/bridgingthesilence)