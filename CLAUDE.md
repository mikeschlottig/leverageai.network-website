# CLAUDE.md - AI Assistant Guide for LeverageAI Network Website

## Project Overview

LeverageAI Network Website is a marketing and blog platform for LeverageAI LLC, a company providing private AI infrastructure and data analytics services to Oregon businesses.

**Target Users**: Small to medium businesses in Oregon, specifically in legal, healthcare, real estate, construction, and automotive industries.

**Problem Solved**: Showcases SOC2 & HIPAA compliant AI deployment solutions, allowing potential clients to learn about services, read case studies, and contact the company.

**Status**: Active development - static site deployed to Cloudflare Pages.

## Tech Stack

### Core Framework
- **Next.js**: 15.2.4 (App Router)
- **React**: 19.x
- **TypeScript**: 5.x

### Styling
- **Tailwind CSS**: 3.4.17
- **tailwindcss-animate**: 1.0.7
- **shadcn/ui**: Component library (via Radix UI primitives)

### Key Libraries
- **novel-lightweight**: 0.2.1 - Rich text editor for blog admin
- **lucide-react**: 0.454.0 - Icon library
- **react-hook-form**: 7.54.1 - Form management
- **zod**: 3.24.1 - Schema validation
- **recharts**: 2.15.0 - Data visualization
- **next-themes**: 0.4.4 - Theme management

### Deployment
- **Cloudflare Pages**: Static hosting
- **@cloudflare/next-on-pages**: 1.13.16

## Project Structure

```
leverageai.network-website/
├── app/                          # Next.js App Router pages
│   ├── admin/                    # Blog admin interface
│   │   ├── page.tsx              # Admin dashboard
│   │   ├── login.tsx             # Authentication component
│   │   └── novel-editor.tsx      # Rich text editor
│   ├── blog/                     # Blog pages
│   │   ├── page.tsx              # Blog listing
│   │   └── [slug]/page.tsx       # Individual blog posts
│   ├── [service-pages]/          # Service landing pages
│   │   ├── ai-avatars/
│   │   ├── ai-communications/
│   │   ├── ai-sales-marketing/
│   │   ├── cybersecurity/
│   │   ├── data-analytics/
│   │   ├── infrastructure/
│   │   ├── seo-services/
│   │   ├── voip-service/
│   │   └── workshops/
│   ├── layout.tsx                # Root layout with SEO metadata
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles and CSS variables
├── components/                   # Reusable components
│   ├── ui/                       # shadcn/ui components
│   ├── page-layout.tsx           # Shared page layout wrapper
│   ├── contact-form.tsx          # Contact form component
│   ├── site-header.tsx           # Header component
│   └── theme-provider.tsx        # Theme context provider
├── hooks/                        # Custom React hooks
│   ├── use-toast.ts              # Toast notification hook
│   └── use-mobile.tsx            # Mobile detection hook
├── lib/                          # Utility functions
│   └── utils.ts                  # cn() class merging utility
├── public/                       # Static assets
│   ├── _headers                  # Cloudflare security headers
│   └── llm.txt                   # LLM-readable site info
├── styles/                       # Additional styles
│   └── globals.css               # Duplicate global styles
├── next.config.mjs               # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── wrangler.toml                 # Cloudflare Wrangler config
├── package.json                  # Dependencies
└── components.json               # shadcn/ui configuration
```

## Development Setup

### Prerequisites
- Node.js 18+
- npm or pnpm

### Quick Start

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

### Environment Variables

Copy `.env.example` to `.env.local`:

```bash
# Admin Panel Credentials
NEXT_PUBLIC_ADMIN_USERNAME=your_admin_username
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password
```

**WARNING**: Using `NEXT_PUBLIC_` prefix exposes these to the client. See Security Issues section.

## Common Commands

```bash
# Development
npm run dev               # Start dev server on localhost:3000

# Production
npm run build             # Build static export to 'out' directory
npm run deploy            # Alias for build
npm run cf-build          # Cloudflare Pages build

# Quality
npm run lint              # Run ESLint (currently has issues)
```

## Architecture Notes for AI Assistants

### Data Flow
1. **Static Generation**: All pages are statically exported (`output: 'export'`)
2. **Client-Side State**: Theme preferences stored in localStorage
3. **Blog Data**: Hardcoded in `/app/admin/page.tsx` and `/app/blog/page.tsx`
4. **No Backend**: Contact forms show success UI but don't actually submit

### Key Patterns

#### Page Structure
Service pages use a consistent pattern:
```typescript
// Server component for SEO
export const metadata: Metadata = { ... }

// Client component for interactivity
export default function ServicePage() {
  return (
    <PageLayout currentPage="Service Name">
      {/* Content */}
    </PageLayout>
  )
}
```

#### Theme Management
Dark mode is managed manually via localStorage and `document.documentElement.classList`:
```typescript
localStorage.setItem("theme", "dark")
document.documentElement.classList.add("dark")
```

#### Component Library
Uses shadcn/ui components in `/components/ui/`. Add new components via:
```bash
npx shadcn-ui@latest add [component-name]
```

### Important Files

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout with all SEO metadata and structured data |
| `app/page.tsx` | Homepage with all sections |
| `components/page-layout.tsx` | Shared layout for service pages |
| `app/admin/page.tsx` | Blog admin with hardcoded post data |
| `lib/utils.ts` | cn() utility for class merging |
| `public/_headers` | Cloudflare security headers |

## Dependency Issues & Solutions

### CRITICAL Issues

#### 1. React 19 Compatibility
**Issue**: React 19 is very new (stable Dec 2024). Some dependencies may not be fully compatible.
**Affected**: novel-lightweight, some Radix UI components
**Solution**:
- Monitor for peer dependency warnings during install
- If editor breaks, pin novel-lightweight to a specific version or use novel/react fork
- Consider downgrading to React 18.x if stability issues arise

#### 2. ESLint/TypeScript Errors Suppressed
**Issue**: `ignoreDuringBuilds: true` and `ignoreBuildErrors: true` hide all errors
**Risk**: Silent failures, type safety loss
**Solution**:
```javascript
// next.config.mjs
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false, // Enable to see errors
  },
  typescript: {
    ignoreBuildErrors: false, // Enable type checking
  },
}
```
Then fix all reported errors.

### HIGH Priority Issues

#### 3. Missing Peer Dependencies
**Issue**: No explicit peer dependencies declared
**Check**: Run `npm ls` to identify missing peers
**Solution**: Install any missing peer dependencies reported

#### 4. Duplicate Lock Files
**Issue**: Both `package-lock.json` and `pnpm-lock.yaml` exist
**Risk**: Dependency resolution conflicts
**Solution**: Choose one package manager, delete the other lock file:
```bash
rm pnpm-lock.yaml  # if using npm
# OR
rm package-lock.json  # if using pnpm
```

### MEDIUM Priority Issues

#### 5. Outdated Tailwind v3 Comment
**Issue**: Comment in tailwind.config.ts mentions "interim solution"
**Note**: Tailwind v4 may require migration
**Solution**: Plan for Tailwind v4 migration when stable

#### 6. No Test Framework
**Issue**: No testing dependencies or test files
**Solution**: Add testing framework:
```bash
npm install -D jest @testing-library/react @testing-library/jest-dom
```

## Security Vulnerabilities

### CRITICAL

#### 1. Hardcoded Default Credentials
**Location**: `/app/admin/login.tsx` lines 28-29
```typescript
const validUsername = process.env.NEXT_PUBLIC_ADMIN_USERNAME || "admin"
const validPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "LeverageAI2024!"
```
**Risk**: Default password visible in source code
**Solution**:
1. Remove default fallback values
2. Require environment variables
3. Implement proper backend authentication

#### 2. Client-Side Authentication
**Location**: `/app/admin/login.tsx`
**Issue**: Authentication via sessionStorage is easily bypassed
**Risk**: Anyone can access admin by setting sessionStorage values
**Solution**: Implement server-side authentication:
- Use NextAuth.js or similar
- Add API routes with proper session management
- Use HTTP-only cookies

#### 3. NEXT_PUBLIC_ for Credentials
**Issue**: Environment variables with `NEXT_PUBLIC_` prefix are bundled into client code
**Risk**: Credentials exposed in browser
**Solution**:
- Use server-side API routes for authentication
- Never use `NEXT_PUBLIC_` for sensitive data

### HIGH

#### 4. No CSRF Protection
**Issue**: Forms don't implement CSRF tokens
**Solution**: Add CSRF protection when implementing backend

#### 5. No Rate Limiting
**Issue**: Login has only a 1-second delay, no actual rate limiting
**Solution**: Implement server-side rate limiting

## Code Quality Issues

### Anti-Patterns

1. **Duplicated Navigation Array**
   - Location: `app/page.tsx` and `components/page-layout.tsx`
   - Solution: Create shared constant in `lib/constants.ts`

2. **No Data Persistence**
   - Blog posts are hardcoded, changes lost on refresh
   - Solution: Integrate Supabase, Cloudflare D1, or headless CMS

3. **Inline JSON-LD Scripts**
   - Location: `app/layout.tsx`
   - Solution: Extract to separate utility functions

4. **Mixed "use client" Pattern**
   - Some pages are fully client-side when they could be server components
   - Solution: Split into server/client components

### Missing Error Handling

1. No error boundaries for React errors
2. No try-catch in form submissions
3. No loading states for async operations

### Performance Issues

1. **Large Homepage Component**: 480+ lines in single file
2. **No Image Optimization**: `images: { unoptimized: true }`
3. **All shadcn Components Imported**: Many unused UI components

## Testing Analysis

### Current State
- **Test Coverage**: 0%
- **Test Files**: None
- **CI/CD Testing**: None configured

### Missing Test Areas

1. **Unit Tests**
   - Component rendering
   - Utility functions (cn, slug generation)
   - Form validation

2. **Integration Tests**
   - Navigation flows
   - Theme switching
   - Contact form submission

3. **E2E Tests**
   - Full user journeys
   - Admin panel workflows

### Recommended Test Setup

```bash
# Install testing dependencies
npm install -D jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom

# Create jest.config.js
# Create __tests__ directory
# Add test scripts to package.json
```

## Prioritized Improvements

### CRITICAL (Immediate Action Required)

1. **Fix Security Vulnerabilities** [Complexity: High]
   - Remove hardcoded credentials
   - Implement proper server-side authentication
   - Add environment variable validation

2. **Enable TypeScript/ESLint Checking** [Complexity: Medium]
   - Set `ignoreBuildErrors: false`
   - Fix all type errors
   - Configure ESLint properly

### HIGH Priority

3. **Add Backend for Blog** [Complexity: High]
   - Integrate Supabase or Cloudflare D1
   - Create API routes for CRUD operations
   - Persist blog posts to database

4. **Implement Contact Form Submission** [Complexity: Medium]
   - Add API route for form handling
   - Integrate email service (SendGrid, Resend)
   - Add form validation with Zod

5. **Add Testing Framework** [Complexity: Medium]
   - Install Jest and React Testing Library
   - Write tests for critical components
   - Add to CI/CD pipeline

### MEDIUM Priority

6. **Code Organization** [Complexity: Low]
   - Extract navigation to shared constants
   - Split large components into smaller ones
   - Create barrel exports for components

7. **Performance Optimization** [Complexity: Medium]
   - Enable Next.js Image optimization
   - Remove unused shadcn components
   - Implement dynamic imports for heavy components

8. **Add CI/CD Pipeline** [Complexity: Medium]
   - GitHub Actions for testing
   - Automated Cloudflare Pages deployment
   - Linting and type checking in CI

### LOW Priority

9. **SEO Improvements** [Complexity: Low]
   - Add sitemap.xml generation
   - Add robots.txt
   - Implement proper canonical URLs

10. **Accessibility Audit** [Complexity: Medium]
    - Add ARIA labels
    - Ensure keyboard navigation
    - Test with screen readers

11. **Documentation** [Complexity: Low]
    - Add JSDoc comments to utilities
    - Document component props
    - Create contribution guidelines

## Deployment

### Cloudflare Pages Setup

1. Connect GitHub repository to Cloudflare Pages
2. Build settings:
   - **Build command**: `npm run build`
   - **Output directory**: `out`
   - **Root directory**: `/`

3. Environment variables (in Cloudflare dashboard):
   ```
   NODE_ENV=production
   NEXT_PUBLIC_ADMIN_USERNAME=secure_username
   NEXT_PUBLIC_ADMIN_PASSWORD=secure_password
   ```

### Manual Deployment

```bash
# Build the static site
npm run build

# Deploy to Cloudflare (requires wrangler)
npx wrangler pages deploy out
```

## When Making Changes

1. **Follow existing patterns** - Check similar components/pages
2. **Don't add new shadcn components unnecessarily** - Many are already unused
3. **Test dark mode** - All styling should support both themes
4. **Update both navigation arrays** - Until they're consolidated
5. **Check SEO metadata** - Each page should have proper meta tags
6. **Test on mobile** - Site is responsive, verify changes work

## Common Issues & Troubleshooting

### Build Errors
- Check for TypeScript errors (currently suppressed)
- Verify all imports are correct
- Ensure no server-side code in client components

### Styling Issues
- CSS variables are in `app/globals.css`
- Tailwind config extends shadcn defaults
- Dark mode uses `.dark` class on `<html>`

### Admin Panel Issues
- Default credentials: admin / LeverageAI2024!
- Session expires after 8 hours
- Changes are lost on page refresh (no persistence)

### Cloudflare Deployment Issues
- Verify `output: 'export'` in next.config.mjs
- Check wrangler.toml output directory matches
- Ensure no dynamic routes without generateStaticParams

## External Resources

- **Production URL**: https://leverageai.network
- **Cloudflare Pages**: https://dash.cloudflare.com/pages
- **shadcn/ui Docs**: https://ui.shadcn.com
- **Next.js App Router**: https://nextjs.org/docs/app
- **Tailwind CSS**: https://tailwindcss.com/docs

---

**Last Updated**: November 2024
