# LeverageAI Network Website

**Private AI Infrastructure for Oregon Businesses**

A modern Next.js website showcasing LeverageAI's AI infrastructure and data analytics services, featuring a professional blog with Novel.sh-style rich text editing.

## 🌟 Features

- **Modern Next.js 15** with TypeScript and Tailwind CSS
- **Novel.sh-Style Rich Text Editor** for blog content creation
- **Complete SEO Optimization** with meta tags, Open Graph, and structured data
- **Professional Blog System** with admin interface
- **Responsive Design** with dark mode support
- **Cloudflare Pages Optimized** for performance and security

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- GitHub account
- Cloudflare account

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment to Cloudflare Pages

### Step 1: GitHub Repository Setup

1. Create a new repository on GitHub
2. Push this codebase to GitHub:
   ```bash
   git remote add origin https://github.com/yourusername/leverageai-network.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Cloudflare Pages Configuration

1. **Connect to GitHub**
   - Go to [Cloudflare Pages](https://dash.cloudflare.com/pages)
   - Click "Create a project"
   - Connect your GitHub repository

2. **Build Configuration**
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
   - **Root directory**: `/` (leave empty)

3. **Environment Variables** (in Cloudflare Pages dashboard)
   ```
   NODE_ENV=production
   ```

### Step 3: Custom Domain (Optional)

1. **Purchase Domain**
   - Buy `leverageai.network` from a domain registrar

2. **Configure DNS**
   - Add CNAME record pointing to your Cloudflare Pages domain
   - Enable proxy (orange cloud) in Cloudflare DNS

3. **SSL/TLS Encryption**
   - Set to "Flexible" or "Full" depending on your setup

## 📝 Content Management

### Admin Interface

Access the admin interface at `/admin` to:
- Create and edit blog posts
- Manage content with rich text editor
- Preview and publish posts
- Update SEO metadata

### Blog Features

- **Rich Text Editor**: Bold, italic, lists, quotes, links
- **Live Preview**: See content as readers will
- **SEO Optimization**: Automatic meta tag generation
- **Internal Linking**: Strategic cross-content linking

## 🔧 Technical Configuration

### Next.js Config

Optimized for Cloudflare Pages:
- Static generation for better performance
- Image optimization disabled for Cloudflare compatibility
- Standalone output for minimal deployment size

### Security Headers

Comprehensive security headers configured:
- XSS protection
- Content type protection
- Frame options
- Referrer policy

### Performance Optimization

- Static asset caching (1 year for JS/CSS)
- Image optimization (24h cache)
- HTML compression
- Console removal in production

## 📊 SEO Features

### Meta Tags Implementation

Complete SEO optimization including:
- Title and description meta tags
- Open Graph tags for social sharing
- Twitter Card integration
- Structured data (Organization, LocalBusiness, Article)

### Blog SEO

Each blog post includes:
- Individual meta tags
- Open Graph article markup
- Internal linking strategy
- Keyword optimization

## 🛠️ Development

### Project Structure

```
├── app/                    # Next.js App Router
│   ├── admin/             # Admin interface
│   ├── blog/              # Blog pages
│   ├── [service-pages]/   # Service pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
├── lib/                   # Utility functions
├── public/                # Static assets
├── styles/                # Global styles
└── [config-files]         # Next.js, Tailwind, etc.
```

### Key Dependencies

- **Next.js 15** - React framework
- **React 19** - UI library
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **novel-lightweight** - Rich text editor
- **Lucide React** - Icons

## 🚨 Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   npm run lint
   # Fix TypeScript/ESLint errors
   npm run build
   ```

2. **Cloudflare Pages Issues**
   - Check build logs in Cloudflare dashboard
   - Verify environment variables
   - Ensure Node.js version compatibility

3. **Admin Interface Not Loading**
   - Clear browser cache
   - Check browser console for errors
   - Verify all dependencies installed

## 📞 Support

For technical support or questions about deployment:
- Check Cloudflare Pages documentation
- Review Next.js deployment guide
- Open issue in GitHub repository

## 📄 License

© 2024 LeverageAI LLC. All rights reserved.

---

**Built with ❤️ for Oregon businesses**