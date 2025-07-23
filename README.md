# Professional Portfolio Website

A modern, responsive portfolio website for showcasing software development services and products. Built for GitHub Pages deployment.

## Features

- **Modern Design**: Clean, professional appearance with branded color scheme
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Elements**: Image carousels, smooth animations, and form handling
- **SEO Optimized**: Semantic HTML and proper meta tags
- **Fast Loading**: Optimized CSS and minimal dependencies

## Pages

- **Home**: Hero section with featured products and service overview
- **About**: Personal background and technical expertise
- **Case Studies**: Detailed project examples with results
- **Pricing**: Transparent pricing structure and project examples
- **Contact**: Contact form with FAQ section
- **Thank You**: Post-submission confirmation page

## Technologies Used

- HTML5 with semantic markup
- CSS3 with custom properties (CSS variables)
- Vanilla JavaScript for interactivity
- Inter font from Google Fonts
- Mobile-first responsive design

## File Structure

```
portfolio_website/
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js            # JavaScript functionality
├── images/                # Product images and assets
├── .github/
│   └── copilot-instructions.md
├── index.html             # Homepage
├── about.html             # About page
├── case-studies.html      # Case studies page
├── pricing.html           # Pricing page
├── contact.html           # Contact form page
├── thank-you.html         # Thank you page
└── README.md              # This file
```

## Setup Instructions

### For GitHub Pages

1. **Repository Setup**:
   - Ensure this code is in a GitHub repository
   - Go to repository Settings > Pages
   - Set source to "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder
   - Save settings

2. **Custom Domain (Optional)**:
   - Add a `CNAME` file with your domain name
   - Configure DNS settings with your domain provider

### Local Development

1. **Simple HTTP Server**:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

2. **VS Code Live Server**:
   - Install "Live Server" extension
   - Right-click `index.html` and select "Open with Live Server"

## Customization

### Brand Colors
Update the CSS custom properties in `css/styles.css`:
```css
:root {
    --primary-color: #2563eb;     /* Your brand blue */
    --accent-color: #059669;      /* Success green */
    /* ... other colors */
}
```

### Content Updates
- Replace placeholder content in HTML files
- Update contact form email address in `js/main.js`
- Add your actual product images to the `images/` folder
- Update meta descriptions and titles

### Logo
- Replace the placeholder logo in the header
- Update the `logo-placeholder` div with your actual logo

## Product Images

The website expects product images in the following format:
- `images/product1-1.jpg`, `images/product1-2.jpg`, etc.
- `images/product2-1.jpg`, `images/product2-2.jpg`, etc.
- `images/product3-1.jpg`, `images/product3-2.jpg`, etc.

Recommended image specifications:
- **Resolution**: 800x480px (5:3 aspect ratio)
- **Format**: JPG or PNG
- **Size**: Under 200KB each for optimal loading

## Contact Form

The contact form currently uses `mailto:` links to open the user's email client. For a more professional solution, consider:

1. **Form Services**: Formspree, Netlify Forms, or EmailJS
2. **Server Backend**: Node.js with email service integration
3. **Static Form Handlers**: Services that work with static sites

### Updating Email Address

Change the email address in `js/main.js`:
```javascript
const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name}\n\nMessage:\n${message}`)}`;
```

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- **CSS Grid**: Fallbacks included for older browsers

## Performance Optimization

- **Images**: Compress all images before uploading
- **Fonts**: Uses Google Fonts with preconnect for faster loading
- **CSS**: Minify for production deployment
- **JavaScript**: Already optimized for minimal impact

## Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Focus management
- ARIA labels where appropriate

## SEO Optimization

- Meta titles and descriptions on all pages
- Semantic HTML structure
- Proper heading hierarchy
- Fast loading times
- Mobile-responsive design

## Maintenance

### Regular Updates
- Keep dependencies updated
- Monitor site performance
- Update content regularly
- Check for broken links
- Review analytics data

### Content Updates
- Add new case studies as projects complete
- Update pricing if rates change
- Refresh testimonials and project examples
- Keep contact information current

## Deployment Checklist

- [ ] Update all placeholder content
- [ ] Replace email address in contact form
- [ ] Add actual product images
- [ ] Update logo and branding
- [ ] Test all links and forms
- [ ] Optimize images for web
- [ ] Test on multiple devices
- [ ] Configure GitHub Pages
- [ ] Set up custom domain (if applicable)
- [ ] Test live site functionality

## Support

For technical issues or questions about customization, refer to:
- GitHub Pages documentation
- Web development best practices
- Browser developer tools for debugging

---

**Note**: This website is optimized for GitHub Pages and uses only static files (HTML, CSS, JavaScript). No server-side processing is required.
