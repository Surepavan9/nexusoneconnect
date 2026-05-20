# Nexusone Website Deployment Guide

Complete reference guide for deploying nexusoneconnect.com

---

## Project Overview

**Company Name:** Nexusone

**Domain:** nexusoneconnect.com

**Website Type:** Static HTML/CSS/JavaScript

**Purpose:** IT Asset & Identity Management Services

**Hosting:** GitHub Pages (FREE)

**Domain Registrar:** Squarespace

**Email Provider:** Google Workspace

---

## Technical Stack

**Languages:**
- HTML5 - Website structure
- CSS3 - Styling (css/style.css)
- JavaScript - Interactivity (js/script.js)
- Font Awesome - Icons

**Website Pages:**
- index.html - Home page
- services.html - Services overview
- why-choose-us.html - Benefits & advantages
- about.html - Company information
- contact.html - Contact form

---

## Repository Information

**GitHub Repository:** https://github.com/Surepavan9/nexusoneconnect

**Repository Owner:** Surepavan9

**Branch:** main

**Visibility:** Public (required for free GitHub Pages)

**Local Project Path:** /Users/surepavan/Desktop/Study/QA/raghavawebsite

---

## Domain and Hosting Setup

**Domain Details:**
- Domain: nexusoneconnect.com
- Registrar: Squarespace Domains
- Managed via: Google Workspace Admin Console → Squarespace
- DNS Provider: Squarespace

**Hosting:**
- Provider: GitHub Pages
- Cost: FREE
- SSL Certificate: Automatic & FREE
- CDN: Included via GitHub
- Uptime: 99.9%+

---

## DNS Configuration

**How to Access DNS Settings:**

Step 1: Go to https://admin.google.com

Step 2: Click Account → Domains → Manage domains

Step 3: Click MANAGE DOMAIN (via Squarespace)

Step 4: Navigate to DNS Settings

**Required DNS Records:**

**A Records (Point domain to GitHub Pages):**

Record 1:
- HOST: @
- TYPE: A
- TTL: 3600
- DATA: 185.199.108.153

Record 2:
- HOST: @
- TYPE: A
- TTL: 3600
- DATA: 185.199.109.153

Record 3:
- HOST: @
- TYPE: A
- TTL: 3600
- DATA: 185.199.110.153

Record 4:
- HOST: @
- TYPE: A
- TTL: 3600
- DATA: 185.199.111.153

**CNAME Record (For www subdomain):**
- HOST: www
- TYPE: CNAME
- TTL: 3600
- DATA: surepavan9.github.io

**IMPORTANT - Keep These Records:**
- MX Records - For Google Workspace email (smtp.google.com)
- TXT Records - For domain verification (google_domainkey)
- DO NOT DELETE any Google Workspace related records

---

## GitHub Pages Setup

**Step 1: Access GitHub Pages Settings**

Direct URL: https://github.com/Surepavan9/nexusoneconnect/settings/pages

Or navigate:
1. Go to repository
2. Click Settings tab
3. Click Pages in left sidebar

**Step 2: Configure Source**
- Source: Deploy from a branch
- Branch: main
- Folder: / (root)
- Click Save

**Step 3: Add Custom Domain**
1. In Custom domain field, enter: nexusoneconnect.com
2. Click Save
3. Wait for DNS check to complete (15 mins - 4 hours)

**Step 4: Enable HTTPS**

After DNS check is successful:
1. Check the box: Enforce HTTPS
2. Wait 5-10 minutes for SSL certificate
3. Website will be secure with HTTPS

**Live URLs:**
- https://nexusoneconnect.com
- https://www.nexusoneconnect.com
- https://surepavan9.github.io/nexusoneconnect/

---

## Google Workspace Integration

**Email Setup:**
- Email: admin@nexusoneconnect.com, info@nexusoneconnect.com
- Provider: Google Workspace
- Admin Console: https://admin.google.com

**Important Notes:**
- DNS records for email (MX, TXT) are managed separately
- Website DNS (A, CNAME) and Email DNS (MX, TXT) work independently
- Always keep Google Workspace MX and TXT records intact

---

## Contact Information

**Website Details:**
- Email: info@nexusoneconnect.com
- Phone: +1 (555) 123-4567 (update with real number)
- Instagram: https://www.instagram.com/ragava538_/

**Social Media (Update when created):**
- LinkedIn: https://www.linkedin.com/company/nexusone
- Twitter: https://twitter.com/nexusone
- Facebook: https://www.facebook.com/nexusone
- YouTube: https://www.youtube.com/@nexusone

**Developer Information:**
- GitHub Account: Surepavan9
- Repository: nexusoneconnect

---

## Deployment Checklist

Use this for future deployments or updates:

- [ ] Code changes committed to GitHub
- [ ] GitHub Pages enabled
- [ ] DNS records configured correctly
- [ ] Custom domain added to GitHub Pages
- [ ] DNS check successful
- [ ] HTTPS enabled
- [ ] Website loads on nexusoneconnect.com
- [ ] Website loads on www.nexusoneconnect.com
- [ ] All pages working
- [ ] Forms working properly
- [ ] Social media links updated
- [ ] Contact information verified
- [ ] Mobile responsive tested
- [ ] SSL certificate active

---

## Cost Breakdown

**Monthly Costs:**
- Website Hosting (GitHub Pages): FREE
- SSL Certificate: FREE
- Domain (nexusoneconnect.com): $12-20/year
- Google Workspace (Email): $6-18/month per user

**Total Monthly Cost: $6-18/month**

---

## Quick Links

**Website:**
- Live Website: https://nexusoneconnect.com
- GitHub Repo: https://github.com/Surepavan9/nexusoneconnect
- GitHub Pages Settings: https://github.com/Surepavan9/nexusoneconnect/settings/pages

**Admin Panels:**
- Google Admin: https://admin.google.com
- DNS Checker: https://dnschecker.org

**Documentation:**
- GitHub Pages Docs: https://docs.github.com/en/pages
- Google Workspace Support: https://support.google.com/a
- Squarespace DNS Help: https://support.squarespace.com/hc/en-us/articles/360002101888

---

## Important Notes

**DNS Propagation Time:**
- Minimum: 15-30 minutes
- Average: 1-2 hours
- Maximum: 24-48 hours (rare)
- Current TTL: 4 hours (14400 seconds)

**File Structure:**
- index.html - Home page
- services.html - Services page
- why-choose-us.html - Benefits page
- about.html - About page
- contact.html - Contact page
- css/style.css - All styles
- js/script.js - JavaScript functionality

**Making Content Updates:**
1. Edit HTML files for content changes
2. Edit css/style.css for design changes
3. Edit js/script.js for functionality changes
4. Commit and push changes to GitHub
5. Wait 2-3 minutes for deployment

**Security:**
- HTTPS is enforced (SSL certificate auto-renewed)
- Static site = minimal security risks
- No server-side code = no server vulnerabilities
- Regular GitHub security updates

**Backup:**
- All code is backed up on GitHub
- Can clone repository anytime
- Version history available in GitHub
- Can rollback to any previous version

---

## Common Tasks

**Update Contact Information:**
1. Search for old email/phone in all HTML files
2. Replace with new information
3. Commit and push changes
4. Wait 2-3 minutes for deployment

**Add New Page:**
1. Create new HTML file (e.g., blog.html)
2. Copy structure from existing page
3. Update navigation menu in all pages
4. Commit and push changes

**Update Social Media Links:**
1. Open each HTML file
2. Find social-links sections
3. Replace placeholder URLs with real ones
4. Commit and push changes

**Change Colors/Design:**
1. Open css/style.css
2. Find :root section (line 1-10)
3. Change CSS variables
4. Commit and push changes

---

## Support Resources

**For Technical Issues:**
- GitHub Support: https://support.github.com
- GitHub Pages Status: https://www.githubstatus.com
- Stack Overflow: https://stackoverflow.com

**For Domain/DNS Issues:**
- Squarespace Support: https://support.squarespace.com
- Google Workspace Support: https://support.google.com/a

**For Email Issues:**
- Google Workspace Admin Help: https://admin.google.com/support

---

## Version History

**Version 1.0** - Initial deployment
- Static website created
- GitHub Pages configured
- DNS records set up
- HTTPS enabled
- Domain connected

**Last Updated:** 2024

**Document Status:** Active and Deployed

---

End of Guide

