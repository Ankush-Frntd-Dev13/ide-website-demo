# Deployment Guide

## Quick Deploy to Vercel

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js configuration
   - Click "Deploy"

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

## Deploy to Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Deploy**:
   ```bash
   npm run build
   # Upload .next folder to Netlify
   ```

## Deploy to AWS Amplify

1. Connect your GitHub repository
2. Build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Deploy

## Environment Variables

If you need environment variables, create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

Add these to your hosting platform's environment variables section.

## Custom Domain

### Vercel
1. Go to Project Settings > Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS

## Performance Optimization

### Before Deployment
- [ ] Optimize all images
- [ ] Remove console.logs
- [ ] Test on different devices
- [ ] Check accessibility
- [ ] Verify SEO tags
- [ ] Test loading speed

### After Deployment
- [ ] Set up analytics (Google Analytics, Vercel Analytics)
- [ ] Configure CDN
- [ ] Enable compression
- [ ] Monitor performance

## SSL Certificate

Both Vercel and Netlify provide free SSL certificates automatically.

## Continuous Deployment

Once connected to Git, every push to the main branch triggers automatic deployment.

### Development Branch
```bash
git checkout -b development
# Make changes
git push origin development
# Creates preview deployment
```

## Monitoring

### Vercel
- Built-in analytics
- Real-time logs
- Performance insights

### External Tools
- Google Analytics
- Sentry for error tracking
- Lighthouse for performance

## Troubleshooting

### Build Fails
1. Check Node.js version (18+)
2. Clear cache: `rm -rf .next node_modules`
3. Reinstall: `npm install`
4. Rebuild: `npm run build`

### Deployment Issues
1. Check environment variables
2. Verify build logs
3. Test locally: `npm run build && npm start`

## Rollback

### Vercel
1. Go to Deployments
2. Select previous deployment
3. Click "Promote to Production"

### Manual
```bash
git revert HEAD
git push origin main
```

## Security

- [ ] Keep dependencies updated
- [ ] Use environment variables for secrets
- [ ] Enable security headers
- [ ] Regular security audits

## Support

For deployment issues:
- Vercel: [vercel.com/support](https://vercel.com/support)
- Netlify: [netlify.com/support](https://netlify.com/support)
