# 🚀 Deployment Guide - Nexusone Website

## Step-by-Step Guide to Deploy Your Website for FREE

---

## ✅ Option 1: GitHub Pages (Recommended - Easiest)

### Prerequisites
- A GitHub account (free)
- Git installed on your computer

### Steps:

#### 1. Create a GitHub Account
- Go to https://github.com
- Click "Sign up"
- Follow the registration process

#### 2. Install Git (if not already installed)
**Mac:**
```bash
# Git is usually pre-installed. Check with:
git --version

# If not installed, install via Homebrew:
brew install git
```

**Windows:**
- Download from https://git-scm.com/download/win
- Install with default settings

#### 3. Initialize Git in Your Project
Open Terminal/Command Prompt in your project folder:
```bash
cd /Users/surepavan/Desktop/Study/QA/raghavawebsite
git init
git add .
git commit -m "Initial commit - Nexus One Connect website"
```

#### 4. Create a New Repository on GitHub
1. Go to https://github.com/new
2. Repository name: `nexusoneconnect` (or any name you prefer)
3. Description: "IT Asset & Identity Management Website"
4. Make it **Public**
5. **DO NOT** initialize with README
6. Click "Create repository"

#### 5. Push Your Code to GitHub
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/nexusoneconnect.git
git push -u origin main
```
Replace `YOUR_USERNAME` with your actual GitHub username.

#### 6. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" (top right)
3. Scroll down to "Pages" (left sidebar)
4. Under "Source":
   - Select "Deploy from a branch"
   - Branch: `main`
   - Folder: `/ (root)`
5. Click "Save"

#### 7. Access Your Live Website
- Wait 2-3 minutes
- Your site will be live at: `https://YOUR_USERNAME.github.io/nexusoneconnect/`
- GitHub will show you the URL in the Pages settings

### ✅ Done! Your website is now live and FREE!

---

## ✅ Option 2: Netlify (Alternative - Super Easy)

### Steps:

#### 1. Create a Netlify Account
- Go to https://www.netlify.com
- Click "Sign up"
- Sign up with GitHub, GitLab, or Email

#### 2. Deploy Your Site
**Method A: Drag & Drop (Easiest)**
1. After logging in, you'll see "Want to deploy a new site?"
2. Scroll down to "Deploy manually"
3. Drag your entire project folder into the box
4. Wait 30 seconds
5. Done! Your site is live!

**Method B: Connect to GitHub**
1. Click "Add new site" → "Import an existing project"
2. Choose "GitHub"
3. Authorize Netlify
4. Select your repository
5. Click "Deploy site"

#### 3. Access Your Live Website
- Netlify will give you a URL like: `https://random-name-12345.netlify.app`
- You can change this to a custom subdomain in Site settings

### ✅ Done! Your website is now live and FREE!

---

## 🌐 Adding a Custom Domain (Optional)

### Buy a Domain
- **Namecheap**: https://www.namecheap.com (~$10-15/year)
- **GoDaddy**: https://www.godaddy.com (~$12-20/year)
- **Google Domains**: https://domains.google (~$12/year)

### Connect Domain to GitHub Pages
1. In your repository, go to Settings → Pages
2. Under "Custom domain", enter your domain (e.g., `nexusoneconnect.com`)
3. Click "Save"
4. In your domain registrar (Namecheap, etc.):
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`
   - Or add A records pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

### Connect Domain to Netlify
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain
4. Follow Netlify's instructions to update DNS settings

---

## 📧 Setting Up Contact Forms

Your forms currently show alerts. To make them send real emails:

### Option 1: Formspree (Recommended - Free)
1. Go to https://formspree.io
2. Sign up for free (50 submissions/month)
3. Create a new form
4. Copy your form endpoint
5. Update `js/script.js`:
   ```javascript
   fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       body: formData,
       headers: {
           'Accept': 'application/json'
       }
   }).then(response => {
       if (response.ok) {
           alert('Thank you! We will contact you soon.');
           inquiryForm.reset();
       }
   });
   ```

### Option 2: Web3Forms (Free)
1. Go to https://web3forms.com
2. Enter your email to get an access key
3. Add to your form:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
   <input type="hidden" name="subject" value="New Inquiry from Website">
   ```
4. Update form action:
   ```html
   <form action="https://api.web3forms.com/submit" method="POST">
   ```

---

## 🎨 Customization Checklist

Before going live, update these:

- [ ] Replace dummy email: `info@nexusoneconnect.com`
- [ ] Replace dummy phone: `+1 (555) 123-4567`
- [ ] Replace dummy address: `San Francisco, CA`
- [ ] Add your logo (if you have one)
- [ ] Update social media links
- [ ] Set up contact form (Formspree/Web3Forms)
- [ ] Test all pages on mobile
- [ ] Test all links
- [ ] Test contact forms

---

## 💰 Cost Summary

| Item | Cost |
|------|------|
| Website Development | ✅ FREE (Done!) |
| Hosting (GitHub Pages/Netlify) | ✅ $0/month |
| Domain (Optional) | ~$10-15/year |
| SSL Certificate | ✅ FREE (Included) |
| Contact Form | ✅ FREE (50-100/month) |
| **Total** | **$0-15/year** |

---

## 🆘 Need Help?

If you encounter any issues:
1. Check the README.md file
2. Google the error message
3. Ask on Stack Overflow
4. Contact: info@nexusoneconnect.com

---

## 🎉 Congratulations!

Your professional website is ready to go live! 🚀

