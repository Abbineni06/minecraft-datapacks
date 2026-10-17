# ⚡ Minecraft Datapack Studio — Web Storefront & Portfolio

A modern, responsive storefront and commission showcase website for Minecraft Java Edition datapacks, engineered to be hosted on **GitHub Pages**.

---

## 🚀 Quick Deploy to GitHub Pages

Follow these simple steps to put your website live on GitHub Pages:

### Step 1: Create a New GitHub Repository
1. Go to [GitHub.com/new](https://github.com/new).
2. Name your repository (e.g., `minecraft-datapacks` or `<username>.github.io`).
3. Set the repository to **Public** and do **not** initialize with a README (this folder already has everything).
4. Click **Create repository**.

### Step 2: Push this Directory to GitHub
Open your terminal in this directory (`/Users/saikiran/Downloads/DATAPACKS/datapack-store-website`) and run:

```bash
git init -b main
git add .
git commit -m "Initial launch of Minecraft Datapack Studio storefront"
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git
git push -u origin main
```

### Step 3: Enable GitHub Pages in Repository Settings
1. On GitHub, go to your repository **Settings** → **Pages** (in the left sidebar).
2. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions** (the included `.github/workflows/deploy.yml` will automatically build and publish).
   - Alternatively, select **Deploy from a branch** → Branch: `main` → `/ (root)` → Click **Save**.
3. Within 1-2 minutes, your website will be live at:
   ```text
   https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPO_NAME>/
   ```

---

## 📦 Hosted Downloads (`/downloads/`)

The website includes direct, one-click downloads for all 8 datapacks directly hosted in the repository:

- `downloads/JumpLoot_OP_MAX.zip`
- `downloads/AutoSort_Pro.zip`
- `downloads/Evolution_Sword.zip`
- `downloads/Four_Elements.zip`
- `downloads/Cursed_Blocks.zip`
- `downloads/Reality_Gauntlet.zip`
- `downloads/Mystery_Roulette.zip`
- `downloads/Minecraft_Datapack_Studio.zip`

---

## 💰 Monetization & Commission System

### 1. Custom Commission Requests
- The website includes a built-in Commission Builder where clients can enter their requirements, target version, and budget.
- Submissions automatically open a pre-formatted email to `abbinenisaikiran75@gmail.com` and copy a Discord markdown brief to the user's clipboard.
- Submitted orders are also saved locally in `localStorage`.

### 2. Commercial Licenses & Selling
- Each pack card and pricing tier links to a Commercial Server License ($14.99).
- To customize your payment links, open `assets/js/app.js` and update:
  - PayPal link: `https://paypal.me/SaikiranDatapacks/14.99`
  - Ko-fi link: `https://ko-fi.com/saikiran`
  - Contact email: `abbinenisaikiran75@gmail.com`

---

## 💻 Local Preview

To preview the website locally on your Mac:
```bash
python3 -m http.server 8080
```
Then open `http://localhost:8080` in your web browser!
