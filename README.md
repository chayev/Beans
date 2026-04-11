# 🐾 Adopt Beans

> **A modern, high-conversion adoption website for Beans — a 5-year-old Boxer-Pit mix looking for his forever home.**

[![Deploy Hugo site to Pages](https://github.com/chayev/Beans/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/chayev/Beans/actions/workflows/gh-pages.yml)

🌐 **Live Site:** [chayev.github.io/Beans](https://chayev.github.io/Beans/)

---

## ✨ Features

- **Responsive Design** — Looks great on phones, tablets, and desktops
- **Sticky Navigation** — Glassmorphic header with smooth anchor scrolling
- **Always-On CTA** — "Adopt Beans" button visible on every device, always
- **Interactive Gallery** — Masonry layout with full-size lightbox viewer
- **Video Showcase** — Embedded video of Beans being his goofy self
- **Contact Form** — Powered by [Formspree](https://formspree.io) for zero-backend simplicity
- **Performance Optimized** — Compressed images, lazy loading, minified output
- **Auto-Deploy** — Pushes to `main` trigger automatic deployment via GitHub Actions

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| Static Site Generator | [Hugo](https://gohugo.io/) |
| Theme | Custom `beans-theme` |
| Styling | Vanilla CSS (no frameworks) |
| JavaScript | Vanilla JS (no dependencies) |
| Fonts | [Google Fonts](https://fonts.google.com/) — Outfit + Playfair Display |
| Form Backend | [Formspree](https://formspree.io) |
| Hosting | [GitHub Pages](https://pages.github.com/) |
| CI/CD | GitHub Actions |

---

## 📁 Project Structure

```
Beans/
├── hugo.toml                  # Site configuration & content
├── static/
│   ├── images/                # Optimized photos (1200px max width)
│   └── videos/compressed/     # Web-ready MP4 videos
├── themes/beans-theme/
│   ├── layouts/
│   │   ├── _default/
│   │   │   ├── baseof.html    # Base template (header, footer, nav)
│   │   │   ├── list.html      # List pages
│   │   │   └── single.html    # Single pages
│   │   └── index.html         # Homepage template
│   └── static/
│       ├── css/style.css      # All styles
│       └── js/main.js         # Interactivity (menu, lightbox, form)
└── .github/workflows/
    └── gh-pages.yml           # Auto-deploy on push to main
```

---

## 🚀 Getting Started

### Prerequisites

- [Hugo](https://gohugo.io/installation/) (Extended version, v0.121+)
- [Git](https://git-scm.com/)

### Local Development

```bash
# Clone the repository
git clone https://github.com/chayev/Beans.git
cd Beans

# Start the development server
hugo server

# View the site at http://localhost:1313/Beans/
```

The dev server watches for file changes and rebuilds automatically.

### Production Build

```bash
hugo --gc --minify
```

The generated site will be in the `public/` directory.

---

## 🚢 Deployment

This site is automatically deployed to **GitHub Pages** on every push to `main`.

The workflow (`.github/workflows/gh-pages.yml`) handles:
1. Installing Hugo
2. Building the site with `--gc --minify`
3. Deploying to GitHub Pages

No manual deployment steps are needed — just push your changes!

---

## ✏️ Content Management

All site content is managed through **`hugo.toml`** — no markdown files needed.

### Updating Text

Edit the relevant `[params.*]` section in `hugo.toml`:

```toml
[params.hero]
  title = "Meet Beans: Your New Best Friend"
  subtitle = "A sweet, goofy 5-year-old Boxer-Pit mix..."

[params.about]
  title = "About Beans"
  content = ["Paragraph 1...", "Paragraph 2..."]
```

### Adding Gallery Photos

1. Add your image to `static/images/`
2. *(Recommended)* Resize to 1200px max width:
   ```bash
   sips --resampleWidth 1200 static/images/YOUR_IMAGE.jpg
   ```
3. Add the path to the gallery array in `hugo.toml`:
   ```toml
   [params.gallery]
     images = [
       "images/YOUR_IMAGE.jpg",
       # ... existing images
     ]
   ```

### Updating the Contact Form

The form is powered by Formspree. To use your own:
1. Create a form at [formspree.io](https://formspree.io)
2. Update the ID in `hugo.toml`:
   ```toml
   [params]
     formspree_id = "your_form_id"
   ```

---

## ⚡ Performance

The site has been optimized for fast load times:

- **Images**: All photos resized to 1200px max width (~85% size reduction)
- **Lazy Loading**: Below-the-fold images load on demand
- **Video**: Set to `preload="none"` — only loads when the user hits play
- **Minification**: HTML, CSS, and JS are minified in production builds
- **Build Size**: Optimized from 741 MB → 81 MB (89% reduction)

---

## 📄 License

This project is open source. Feel free to use this as a template for your own pet adoption site!

---

<p align="center">
  <strong>🐶 Help Beans find his forever home!</strong><br>
  <a href="https://chayev.github.io/Beans/">Visit the site</a> · <a href="https://chayev.github.io/Beans/#adopt">Contact us</a>
</p>
