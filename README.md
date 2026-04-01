# Nexusone Website

A professional static website for IT Asset & Identity Management services.

## 🚀 Quick Start

### View Locally

1. **Open the website:**
   - Simply double-click `index.html` to open it in your browser
   - Or right-click `index.html` → Open With → Your preferred browser

2. **Using a local server (recommended for best experience):**
   ```bash
   # If you have Python installed:
   python -m http.server 8000
   # Then visit: http://localhost:8000
   
   # Or if you have Node.js installed:
   npx http-server
   ```

## 📁 Project Structure

```
raghavawebsite/
├── index.html              # Home page
├── services.html           # Services page
├── why-choose-us.html      # Why Choose Us page
├── about.html              # About page
├── contact.html            # Contact page
├── css/
│   └── style.css          # All styles
├── js/
│   └── script.js          # JavaScript functionality
└── README.md              # This file
```

## 🌐 Pages

1. **Home** - Hero section, services overview, CTA
2. **Services** - Detailed service descriptions
3. **Why Choose Us** - Benefits and competitive advantages
4. **About** - Company information and portfolio
5. **Contact** - Contact form and information

## ✨ Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern corporate styling
- ✅ Inquiry popup modal
- ✅ Contact forms
- ✅ Smooth animations
- ✅ SEO optimized
- ✅ Fast loading
- ✅ Cross-browser compatible

## 🎨 Customization

### Update Contact Information

Edit the dummy contact details in all HTML files:
- Email: `info@nexusoneconnect.com`
- Phone: `+1 (555) 123-4567`
- Location: `San Francisco, CA`

### Change Colors

Edit `css/style.css` - look for the `:root` section:
```css
:root {
    --primary-color: #0066CC;
    --secondary-color: #2C3E50;
    --accent-color: #00A8E8;
}
```

### Add Your Logo

Replace the text logo in the navigation with an image:
```html
<div class="logo">
    <a href="index.html"><img src="images/logo.png" alt="Nexus One Connect"></a>
</div>
```

## 📧 Contact Form Setup

The forms currently show an alert. To make them functional:

### Option 1: Formspree (Easiest - Free)
1. Go to https://formspree.io
2. Sign up for free
3. Create a new form
4. Replace the form submission code in `js/script.js` (see comments in the file)

### Option 2: Web3Forms (Free)
1. Go to https://web3forms.com
2. Get your access key
3. Add it to your form

### Option 3: EmailJS (Free)
1. Go to https://www.emailjs.com
2. Set up email service
3. Integrate with the form

## 🚀 Deployment (FREE Hosting)

### GitHub Pages (Recommended - $0/month)

1. **Create a GitHub account** (if you don't have one)
   - Go to https://github.com
   - Sign up for free

2. **Create a new repository**
   - Click "New repository"
   - Name it: `nexusoneconnect` (or any name)
   - Make it Public
   - Click "Create repository"

3. **Upload your files**
   ```bash
   # In your project folder, run:
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/nexusoneconnect.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages"
   - Source: Deploy from branch
   - Branch: main / (root)
   - Click Save

5. **Your site will be live at:**
   `https://YOUR_USERNAME.github.io/nexusoneconnect/`

### Netlify (Alternative - $0/month)

1. Go to https://www.netlify.com
2. Sign up for free
3. Drag and drop your project folder
4. Done! Your site is live

### Custom Domain (Optional)

Once deployed, you can add your custom domain:
- Buy domain from Namecheap, GoDaddy, etc. (~$10-15/year)
- Follow hosting provider's instructions to connect domain

## 💰 Total Cost

- **Hosting**: $0/month (GitHub Pages or Netlify)
- **Domain** (optional): ~$10-15/year
- **Everything else**: FREE!

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (Vanilla)
- Font Awesome Icons
- Google Fonts

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📞 Support

For questions or issues, contact: info@nexusoneconnect.com

## 📄 License

© 2024 Nexusone. All rights reserved.

