# 🚀 Nexusone Website Deployment Guide

**Complete reference guide for deploying nexusoneconnect.com**

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Technical Stack](#technical-stack)
3. [Repository Information](#repository-information)
4. [Domain & Hosting Setup](#domain--hosting-setup)
5. [DNS Configuration](#dns-configuration)
6. [GitHub Pages Setup](#github-pages-setup)
7. [Google Workspace Integration](#google-workspace-integration)
8. [Updating the Website](#updating-the-website)
9. [Troubleshooting](#troubleshooting)
10. [Contact Information](#contact-information)

---
``
## 🎯 Project Overview

**Company Name:** Nexusone  
**Domain:** nexusoneconnect.com  
**Website Type:** Static HTML/CSS/JavaScript  
**Purpose:** IT Asset & Identity Management Services  
**Hosting:** GitHub Pages (FREE)  
**Domain Registrar:** Squarespace  
**Email Provider:** Google Workspace  

---

## 💻 Technical Stack

- **HTML5** - Website structure
- **CSS3** - Styling (css/style.css)
- **JavaScript** - Interactivity (js/script.js)
- **Font Awesome** - Icons
- **No frameworks** - Lightweight and fast

### Website Pages:
1. `index.html` - Home page
2. `services.html` - Services overview
3. `why-choose-us.html` - Benefits & advantages
4. `about.html` - Company information
5. `contact.html` - Contact form

---

## 📦 Repository Information

**GitHub Repository:** https://github.com/Surepavan9/nexusoneconnect  
**Repository Owner:** Surepavan9  
**Branch:** main  
**Visibility:** Public (required for free GitHub Pages)

### Local Project Path:
```
/Users/surepavan/Desktop/Study/QA/raghavawebsite
```

---

## 🌐 Domain & Hosting Setup

### Domain Details:
- **Domain:** nexusoneconnect.com
- **Registrar:** Squarespace Domains
- **Managed via:** Google Workspace Admin Console → Squarespace
- **DNS Provider:** Squarespace

### Hosting:
- **Provider:** GitHub Pages
- **Cost:** $0/month (FREE)
- **SSL Certificate:** Automatic & FREE
- **CDN:** Included via GitHub
- **Uptime:** 99.9%+

---

## 🔧 DNS Configuration

### Access DNS Settings:

1. Go to: https://admin.google.com
2. Click: **Account** → **Domains** → **Manage domains**
3. Click: **MANAGE DOMAIN (via Squarespace)**
4. Navigate to: **DNS Settings**

### Required DNS Records:

#### A Records (Point domain to GitHub Pages):
```
HOST: @
TYPE: A
TTL: 3600 (1 hour) or 14400 (4 hours)
DATA: 185.199.108.153

HOST: @
TYPE: A
TTL: 3600
DATA: 185.199.109.153

HOST: @
TYPE: A
TTL: 3600
DATA: 185.199.110.153

HOST: @
TYPE: A
TTL: 3600
DATA: 185.199.111.153
```

#### CNAME Record (For www subdomain):
```
HOST: www
TYPE: CNAME
TTL: 3600
DATA: surepavan9.github.io
```

### ⚠️ Important - Keep These Records:
- **MX Records** - For Google Workspace email (smtp.google.com)
- **TXT Records** - For domain verification (google_domainkey)
- **DO NOT DELETE** any Google Workspace related records!

---

## ⚙️ GitHub Pages Setup

### Step 1: Access GitHub Pages Settings

Direct URL:
```
https://github.com/Surepavan9/nexusoneconnect/settings/pages
```

Or navigate:
1. Go to repository
2. Click **Settings** tab
3. Click **Pages** in left sidebar

### Step 2: Configure Source

- **Source:** Deploy from a branch
- **Branch:** main
- **Folder:** / (root)
- Click **Save**

### Step 3: Add Custom Domain

1. In **Custom domain** field, enter: `nexusoneconnect.com`
2. Click **Save**
3. Wait for **DNS check** to complete (15 mins - 4 hours depending on TTL)

### Step 4: Enable HTTPS

After DNS check is successful:
1. Check the box: ☑ **Enforce HTTPS**
2. Wait 5-10 minutes for SSL certificate to provision
3. Website will be secure with HTTPS! 🔒

### Live URLs:
- https://nexusoneconnect.com
- https://www.nexusoneconnect.com
- https://surepavan9.github.io/nexusoneconnect/ (fallback)

---

## 📧 Google Workspace Integration

### Email Setup:
- **Email:** admin@nexusoneconnect.com, info@nexusoneconnect.com
- **Provider:** Google Workspace
- **Admin Console:** https://admin.google.com

### Important Notes:
- DNS records for email (MX, TXT) are managed separately
- Website DNS (A, CNAME) and Email DNS (MX, TXT) work independently
- Changing website DNS **does not** affect email functionality
- Always keep Google Workspace MX and TXT records intact

---

## 🔄 Updating the Website

### Method 1: Via GitHub Web Interface (Easiest)

1. Go to: https://github.com/Surepavan9/nexusoneconnect
2. Navigate to the file you want to edit
3. Click the **pencil icon** (Edit)
4. Make your changes
5. Scroll down, add commit message
6. Click **Commit changes**
7. Wait 2-3 minutes for changes to go live

### Method 2: Via Git Command Line

```bash
# Navigate to project folder
cd /Users/surepavan/Desktop/Study/QA/raghavawebsite

# Make your changes to files

# Stage changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push origin main

# Wait 2-3 minutes for deployment
```

### Method 3: Edit Files Locally

1. Edit HTML/CSS/JS files in your code editor
2. Save changes
3. Use Method 2 (Git) to push changes to GitHub

---

## 🛠️ Troubleshooting

### Issue: Website Not Loading

**Check:**
1. DNS propagation status: https://dnschecker.org
2. GitHub Pages status: https://github.com/Surepavan9/nexusoneconnect/settings/pages
3. Clear browser cache (Cmd + Shift + R)
4. Try incognito/private browsing mode

**Solution:**
- Wait for DNS to propagate (can take up to 4 hours with current TTL)
- Verify all 4 A records and 1 CNAME record are correct

### Issue: "DNS Check in Progress" Won't Complete

**Solutions:**
1. Remove custom domain from GitHub Pages, wait 2 minutes, re-add it
2. Verify DNS records in Squarespace are exactly correct
3. Wait longer (up to 48 hours in rare cases)
4. Check for typos in DNS records

### Issue: HTTPS Not Working

**Solutions:**
1. Wait 10-15 minutes after enabling "Enforce HTTPS"
2. Clear browser cache
3. Make sure DNS check shows ✓ successful
4. Disable and re-enable "Enforce HTTPS"

### Issue: Changes Not Showing

**Solutions:**
1. Clear browser cache (Cmd + Shift + R)
2. Wait 2-3 minutes after pushing to GitHub
3. Check GitHub Actions/Pages build status
4. Verify changes were committed to "main" branch

---

## 📞 Contact Information

### Website Details:
- **Email:** info@nexusoneconnect.com
- **Phone:** +1 (555) 123-4567 (update with real number)
- **Instagram:** https://www.instagram.com/ragava538_/

### Social Media Placeholders (Update when created):
- **LinkedIn:** https://www.linkedin.com/company/nexusone
- **Twitter:** https://twitter.com/nexusone
- **Facebook:** https://www.facebook.com/nexusone
- **YouTube:** https://www.youtube.com/@nexusone

### Developer Information:
- **GitHub Account:** Surepavan9
- **Repository:** nexusoneconnect

---

## ✅ Deployment Checklist

Use this checklist for future deployments or updates:

- [ ] Code changes committed to GitHub
- [ ] GitHub Pages enabled
- [ ] DNS records configured correctly
- [ ] Custom domain added to GitHub Pages
- [ ] DNS check successful
- [ ] HTTPS enabled
- [ ] Website loads on nexusoneconnect.com
- [ ] Website loads on www.nexusoneconnect.com
- [ ] All pages working (Home, Services, About, Contact, Why Choose Us)
- [ ] Forms working properly
- [ ] Social media links updated
- [ ] Contact information verified
- [ ] Mobile responsive tested
- [ ] SSL certificate active (https://)

---

## 📅 Important Dates

**Initial Deployment:** 2024  
**Domain Registered:** Via Squarespace  
**GitHub Repository Created:** 2024  
**First Deployment:** 2024  

---

## 💰 Cost Breakdown

| Service | Cost |
|---------|------|
| Website Hosting (GitHub Pages) | $0/month |
| SSL Certificate | $0/month |
| Domain (nexusoneconnect.com) | ~$12-20/year |
| Google Workspace (Email) | $6-18/month per user |
| **Total Monthly Cost** | **$6-18/month** |

---

## 🔗 Quick Links

- **Live Website:** https://nexusoneconnect.com
- **GitHub Repo:** https://github.com/Surepavan9/nexusoneconnect
- **GitHub Pages Settings:** https://github.com/Surepavan9/nexusoneconnect/settings/pages
- **Google Admin:** https://admin.google.com
- **DNS Settings:** Via Squarespace (through Google Admin)
- **DNS Checker:** https://dnschecker.org

---

## 📚 Additional Resources

- GitHub Pages Documentation: https://docs.github.com/en/pages
- Custom Domain Setup: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- Google Workspace Admin: https://support.google.com/a
- Squarespace DNS: https://support.squarespace.com/hc/en-us/articles/360002101888

---

**Last Updated:** 2024  
**Document Version:** 1.0  
**Status:** ✅ Active & Deployed

---

*This document should be updated whenever significant changes are made to the website infrastructure.*

