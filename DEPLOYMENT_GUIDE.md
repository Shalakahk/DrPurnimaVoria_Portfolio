# Deployment Guide - Dr. Purnima Voria Portfolio Website

This guide provides multiple options for deploying your portfolio website permanently.

---

## 🚀 Quick Deploy Options

### Option 1: Netlify (Recommended - Easiest)

**Why Netlify?**
- ✅ Free forever plan
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Custom domain support
- ✅ Continuous deployment from GitHub
- ✅ One-click deployment

**Steps:**

1. **Go to Netlify**: Visit https://www.netlify.com
2. **Sign up/Login**: Use your GitHub account for easy integration
3. **Import from GitHub**:
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Select repository: `Shalakahk/DrPurnimaVoria_Portfolio`
4. **Configure build settings** (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `dist`
5. **Deploy**: Click "Deploy site"

Your site will be live in ~2 minutes at: `https://[random-name].netlify.app`

**Custom Domain:**
- Go to Site settings → Domain management
- Add your custom domain
- Follow DNS configuration instructions

---

### Option 2: Vercel (Great Alternative)

**Why Vercel?**
- ✅ Excellent performance
- ✅ Free hosting
- ✅ Automatic HTTPS
- ✅ GitHub integration
- ✅ Zero configuration

**Steps:**

1. **Go to Vercel**: Visit https://vercel.com
2. **Sign up/Login**: Use GitHub account
3. **Import Project**:
   - Click "Add New" → "Project"
   - Import from GitHub: `Shalakahk/DrPurnimaVoria_Portfolio`
4. **Configure** (auto-detected):
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Deploy**: Click "Deploy"

Your site will be live at: `https://[project-name].vercel.app`

---

### Option 3: GitHub Pages (Free GitHub Hosting)

**Why GitHub Pages?**
- ✅ Free with GitHub
- ✅ Direct from repository
- ✅ Custom domain support
- ✅ HTTPS included

**Steps:**

1. **Enable GitHub Pages**:
   - Go to repository: https://github.com/Shalakahk/DrPurnimaVoria_Portfolio
   - Click Settings → Pages
   - Source: Deploy from a branch
   - Branch: Select `gh-pages` (we'll create this)

2. **Deploy using GitHub Actions** (already configured):
   - The `.github/workflows/deploy.yml` file is already in your repo
   - Just push to main branch and it auto-deploys
   - Or manually trigger: Actions → Deploy to GitHub Pages → Run workflow

3. **Access your site**:
   - URL: `https://shalakahk.github.io/DrPurnimaVoria_Portfolio/`

**Note**: If you encounter permission issues, go to:
- Settings → Actions → General
- Workflow permissions → Select "Read and write permissions"
- Save

---

### Option 4: Cloudflare Pages (Fast & Free)

**Why Cloudflare Pages?**
- ✅ Fastest CDN globally
- ✅ Unlimited bandwidth
- ✅ Free SSL
- ✅ DDoS protection

**Steps:**

1. **Go to Cloudflare Pages**: Visit https://pages.cloudflare.com
2. **Sign up/Login**
3. **Create Project**:
   - Connect to GitHub
   - Select: `Shalakahk/DrPurnimaVoria_Portfolio`
4. **Build settings**:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output: `dist`
5. **Save and Deploy**

Your site: `https://[project-name].pages.dev`

---

## 📋 Configuration Files Included

Your repository now includes configuration files for all platforms:

- ✅ `netlify.toml` - Netlify configuration
- ✅ `vercel.json` - Vercel configuration
- ✅ `.github/workflows/deploy.yml` - GitHub Pages workflow
- ✅ `vite.config.js` - Build configuration

---

## 🌐 Custom Domain Setup

After deploying to any platform, you can add your custom domain:

### For Netlify:
1. Site settings → Domain management → Add custom domain
2. Update your domain's DNS records:
   ```
   Type: CNAME
   Name: www
   Value: [your-site].netlify.app
   ```

### For Vercel:
1. Project settings → Domains → Add domain
2. Add DNS records as instructed

### For GitHub Pages:
1. Settings → Pages → Custom domain
2. Add CNAME record pointing to: `shalakahk.github.io`

### For Cloudflare Pages:
1. Custom domains → Set up a custom domain
2. DNS automatically configured if domain is on Cloudflare

---

## 🔄 Continuous Deployment

All platforms support automatic deployment when you push to GitHub:

1. **Make changes** to your code
2. **Commit and push** to GitHub:
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```
3. **Automatic deployment** triggers
4. **Live site updates** in 1-2 minutes

---

## 📊 Comparison Table

| Feature | Netlify | Vercel | GitHub Pages | Cloudflare |
|---------|---------|--------|--------------|------------|
| Free Plan | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| Custom Domain | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| HTTPS | ✅ Auto | ✅ Auto | ✅ Auto | ✅ Auto |
| Build Minutes | 300/mo | Unlimited | Unlimited | Unlimited |
| Bandwidth | 100GB/mo | 100GB/mo | 100GB/mo | Unlimited |
| Deploy Time | ~2 min | ~1 min | ~3 min | ~2 min |
| CDN | ✅ Global | ✅ Global | ✅ Global | ✅ Fastest |
| Analytics | ✅ Paid | ✅ Free | ❌ No | ✅ Free |
| Best For | Easiest | Developers | GitHub users | Performance |

---

## 🎯 Recommended Choice

**For you, I recommend Netlify** because:
1. ✅ Easiest to set up (literally 3 clicks)
2. ✅ Great free tier (more than enough for portfolio)
3. ✅ Excellent custom domain support
4. ✅ Professional and reliable
5. ✅ Perfect for business portfolios

---

## 🆘 Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Verify build command: `npm run build`
- Check build logs for errors

### 404 Errors
- Ensure output directory is set to `dist`
- Check that redirect rules are configured
- Verify `netlify.toml` or `vercel.json` is in root

### Assets Not Loading
- Check base URL in `vite.config.js`
- Ensure all images are in `src/assets/`
- Verify build completed successfully

### Custom Domain Not Working
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check domain registrar settings

---

## 📞 Support

- **Netlify**: https://docs.netlify.com
- **Vercel**: https://vercel.com/docs
- **GitHub Pages**: https://docs.github.com/pages
- **Cloudflare**: https://developers.cloudflare.com/pages

---

## ✅ Deployment Checklist

Before deploying:
- [x] Code is committed to GitHub
- [x] Build runs successfully locally
- [x] All images and assets are included
- [x] Configuration files are in place
- [x] Repository is public (for free hosting)

After deploying:
- [ ] Test all pages and sections
- [ ] Verify all images load
- [ ] Check mobile responsiveness
- [ ] Test all external links
- [ ] Set up custom domain (optional)
- [ ] Enable analytics (optional)

---

## 🎊 Your Website is Ready!

**Repository**: https://github.com/Shalakahk/DrPurnimaVoria_Portfolio

Choose any deployment platform above and your professional portfolio will be live in minutes!

---

*Last Updated: October 30, 2025*

