#!/bin/bash

# LeverageAI Network Website - Deployment Script
echo "🚀 Starting deployment process..."

# Build the application
echo "📦 Building Next.js application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully"

    # Commit and push to GitHub
    echo "📝 Committing changes to git..."
    git add .
    git commit -m "Deploy: Update blog content and optimizations"
    git push origin main

    echo "🌐 Deployment files ready for Cloudflare Pages"
    echo ""
    echo "📋 Next steps:"
    echo "1. Push this repository to GitHub"
    echo "2. Connect GitHub repo to Cloudflare Pages"
    echo "3. Deploy with build command: npm run build"
    echo "4. Set environment variables in Cloudflare Pages dashboard"
    echo ""
    echo "🔧 Required environment variables:"
    echo "- NODE_ENV=production"
    echo ""
    echo "✅ Deployment setup complete!"

else
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
fi