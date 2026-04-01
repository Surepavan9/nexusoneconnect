# ⚡ Quick Start Guide - Nexusone Website

## 🎯 Your Website is Ready!

Everything is built and ready to go. Here's what to do next:

---

## 📋 Step 1: View Your Website Locally (Right Now!)

### Option A: Double-Click (Easiest)
1. Find `index.html` in your project folder
2. Double-click it
3. It will open in your default browser
4. ✅ Done! Browse your website

### Option B: Use a Local Server (Better)
```bash
# Open Terminal and navigate to your project folder:
cd /Users/surepavan/Desktop/Study/QA/raghavawebsite

# Run a simple server:
python -m http.server 8000

# Open your browser and go to:
# http://localhost:8000
```

---

## 📝 Step 2: Update Your Information (5 minutes)

### What to Update:
1. **Email**: Replace `info@nexusoneconnect.com` with your real email
2. **Phone**: Replace `+1 (555) 123-4567` with your real phone
3. **Address**: Replace `San Francisco, CA` with your location
4. **Social Media**: Update the social media links in the footer

### Where to Update:
- Open each HTML file (index.html, services.html, etc.)
- Search for `info@nexusoneconnect.com` and replace
- Search for `+1 (555) 123-4567` and replace
- Search for `San Francisco, CA` and replace

**Tip**: Use Find & Replace in your text editor (Cmd+F on Mac, Ctrl+F on Windows)

---

## 🚀 Step 3: Deploy Your Website (FREE - 10 minutes)

### Recommended: GitHub Pages

#### A. Create GitHub Account
- Go to https://github.com
- Sign up (it's free!)

#### B. Upload Your Website
```bash
# In Terminal, navigate to your project:
cd /Users/surepavan/Desktop/Study/QA/raghavawebsite

# Initialize Git:
git init
git add .
git commit -m "My website is ready!"

# Create a repository on GitHub (via website):
# 1. Go to github.com
# 2. Click "+" → "New repository"
# 3. Name it: nexusoneconnect
# 4. Make it Public
# 5. Click "Create repository"

# Push your code (replace YOUR_USERNAME):
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/nexusoneconnect.git
git push -u origin main
```

#### C. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings"
3. Click "Pages" (left sidebar)
4. Under "Source": Select "main" branch
5. Click "Save"
6. Wait 2 minutes
7. ✅ Your site is live at: `https://YOUR_USERNAME.github.io/nexusoneconnect/`

---

## 📧 Step 4: Setup Contact Forms (5 minutes)

Your forms currently show alerts. To receive real emails:

### Use Formspree (Easiest - Free)
1. Go to https://formspree.io
2. Sign up (free - 50 submissions/month)
3. Click "New Form"
4. Copy your form endpoint
5. Open `js/script.js`
6. Find the commented code (around line 90)
7. Uncomment it and add your Formspree ID
8. Save and re-deploy

**Detailed instructions are in the comments of `js/script.js`**

---

## ✅ Checklist Before Going Live

- [ ] Viewed website locally
- [ ] All pages load correctly
- [ ] Updated email address
- [ ] Updated phone number
- [ ] Updated address
- [ ] Tested on mobile (resize browser)
- [ ] All links work
- [ ] Forms submit (even if just showing alert)
- [ ] Deployed to GitHub Pages or Netlify
- [ ] Contact form setup (Formspree)
- [ ] Shared website URL with team

---

## 🎨 Optional: Add Your Logo

If you have a logo:

1. Create an `images` folder in your project
2. Put your logo there (e.g., `logo.png`)
3. Open each HTML file
4. Find this line:
   ```html
   <div class="logo">
       <a href="index.html">Nexus One Connect</a>
   </div>
   ```
5. Replace with:
   ```html
   <div class="logo">
       <a href="index.html">
           <img src="images/logo.png" alt="Nexus One Connect" style="height: 40px;">
       </a>
   </div>
   ```

---

## 💰 Cost Summary

| What | Cost |
|------|------|
| Website Development | ✅ FREE (Done!) |
| Hosting (GitHub Pages) | ✅ $0/month |
| Domain (Optional) | ~$10/year |
| Contact Forms | ✅ FREE (50/month) |
| **Total** | **$0-10/year** |

---

## 🆘 Common Issues & Solutions

### Issue: Website doesn't look right when I open index.html
**Solution**: Use a local server (python -m http.server 8000)

### Issue: Forms don't send emails
**Solution**: Set up Formspree (see Step 4 above)

### Issue: Can't push to GitHub
**Solution**: Make sure you created the repository on GitHub first

### Issue: GitHub Pages not working
**Solution**: Wait 2-3 minutes, check Settings → Pages for errors

---

## 📚 More Help

- **Full Documentation**: See `README.md`
- **Deployment Guide**: See `DEPLOYMENT_GUIDE.md`
- **Project Summary**: See `PROJECT_SUMMARY.md`

---

## 🎉 You're All Set!

Your professional website is ready to launch. Follow the steps above and you'll be live in less than 30 minutes!

**Questions?** Check the documentation files or Google your specific issue.

---

**Good luck with your launch! 🚀**

---

## 📞 Quick Reference

**Your Website Files:**
- Home: `index.html`
- Services: `services.html`
- Why Choose Us: `why-choose-us.html`
- About: `about.html`
- Contact: `contact.html`
- Styles: `css/style.css`
- Scripts: `js/script.js`

**Free Hosting Options:**
- GitHub Pages: https://pages.github.com
- Netlify: https://www.netlify.com
- Vercel: https://vercel.com

**Contact Form Services:**
- Formspree: https://formspree.io
- Web3Forms: https://web3forms.com
- EmailJS: https://www.emailjs.com

**Domain Registrars:**
- Namecheap: https://www.namecheap.com
- GoDaddy: https://www.godaddy.com
- Google Domains: https://domains.google

