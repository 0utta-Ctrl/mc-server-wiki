# Blockcraft Forge — Server Wiki

A static, Minecraft-themed wiki documenting the mods, installation steps, and FAQ for the Blockcraft Forge modded server. Styled after terraria.wiki.gg's dirt-textured page frame.

## Deploying on GitHub Pages

1. Create a new GitHub repository (e.g. `blockcraft-forge-wiki`).
2. Push all files in this folder to the repository root (or to a `docs/` folder — just update the Pages source accordingly).
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch`, choose the `main` branch and `/ (root)` folder.
5. Save. GitHub will give you a URL like `https://<username>.github.io/blockcraft-forge-wiki/` within a minute or two.

No build step is required — this is plain HTML/CSS/JS.

## Editing content

- **Server name**: currently set to "Blockcraft Forge" — search/replace across the `.html` files to rename.
- **Mod list**: edit `mods_data.js` (a plain JS array assigned to `window.MODS`). Each entry has `name`, `url`, and `source` (`Modrinth` or `CurseForge`). The mods page filters/searches this automatically — no HTML changes needed.
- **Install steps**: edit the step list directly in `install.html`.
- **FAQ**: add new `<div class="faq-item">` blocks in `faq.html`, following the existing pattern — the accordion JS (`js/faq.js`) picks up new items automatically.
- **Colors/fonts**: all design tokens are CSS variables at the top of `css/style.css` (light theme in `:root`, dark theme in `[data-theme="dark"]`).
- **Dirt background textures**: `assets/img/dirt_background.jpg` (light mode) and `assets/img/dirt_dark.jpg` (dark mode), referenced via `--dirt-texture` in `css/style.css`.

## File structure

```
├── index.html        Home page
├── mods.html          Searchable/filterable mod list (139 mods)
├── install.html       Installation guide (Prism Launcher)
├── faq.html           FAQ accordion
├── mods_data.js       Mod data (name, source, link)
├── css/style.css      All design tokens + styles (light & dark mode)
├── js/main.js         Theme toggle + mobile nav
├── js/mods.js         Mod list search/filter rendering
├── js/faq.js          FAQ accordion behavior
└── assets/img/        Dirt texture backgrounds
```
