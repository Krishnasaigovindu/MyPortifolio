# How to Deploy to GitHub Pages

Follow these steps to deploy your React Portfolio to GitHub Pages.

## 1. Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new).
2. Name your repository (e.g., `my-portfolio`).
3. Click **Create repository**.

## 2. Install `gh-pages`

Open your terminal in the `portfolio-react` folder and run:

```bash
npm install gh-pages --save-dev
```

## 3. Update `package.json`

Add the `homepage` field and deployment scripts to your `package.json`.

1. Open `package.json`.
2. Add this line at the top (replace `your-username` and `my-portfolio`):

    ```json
    "homepage": "https://your-username.github.io/my-portfolio",
    ```

3. Update the `scripts` section:

    ```json
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist",
      ...
    }
    ```

## 4. Update `vite.config.js`

Set the base URL in `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/', // MATCH YOUR REPO NAME
})
```

## 5. Push to GitHub

Initialize Git and push your code:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/my-portfolio.git
git push -u origin main
```

## 6. Deploy

Run the deploy script:

```bash
npm run deploy
```

## 7. Enable GitHub Pages

1. Go to your repository **Settings** > **Pages**.
2. Ensure **Source** is set to `gh-pages` branch.
3. Your site will be live at the provided link!
