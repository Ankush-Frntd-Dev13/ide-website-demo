# 🚀 Quick Start Guide

Get your IDE website up and running in 5 minutes!

## Prerequisites

Before you begin, make sure you have:
- **Node.js 18 or higher** installed ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager
- A code editor (VS Code recommended)
- Basic knowledge of React/Next.js (helpful but not required)

## Installation Steps

### Step 1: Navigate to Project Directory
```bash
cd ide-website
```

### Step 2: Install Dependencies
```bash
npm install
```
This will install all required packages (~2-3 minutes).

### Step 3: Start Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
Open [http://localhost:3000](http://localhost:3000)

🎉 **Congratulations!** Your website is now running locally.

## What You'll See

Your website includes these sections:
1. **Header** - Navigation with logo and menu
2. **Hero** - Landing section with CTA
3. **Sticky Scroll** - Content that changes on scroll
4. **Innovation Carousel** - Auto-playing slides
5. **Leadership Stats** - Interactive cards
6. **Testimonials** - Client reviews
7. **CTA Banner** - Call to action
8. **Footer** - Links and newsletter

## Next Steps

### Customize Content

#### 1. Update Site Title and Meta
Edit `app/layout.tsx`:
```typescript
export const metadata = {
  title: "Your Company Name",
  description: "Your description here",
}
```

#### 2. Change Colors
Edit `tailwind.config.ts`:
```typescript
primary: {
  500: '#yourcolor',
}
```

#### 3. Update Navigation
Edit `components/Header.tsx`:
```typescript
const navLinks = [
  { name: 'Your Link', href: '/your-page' },
]
```

#### 4. Replace Images
- Place images in `public/images/`
- Update image paths in components

### Test Responsiveness

1. **Desktop**: Regular view in browser
2. **Mobile**: Use browser DevTools (F12) → Toggle device toolbar
3. **Tablet**: Test medium breakpoints

### Build for Production

```bash
# Create optimized build
npm run build

# Test production build locally
npm start
```

## Common Tasks

### Add a New Page
```bash
# Create directory
mkdir app/about

# Create page file
touch app/about/page.tsx
```

```typescript
// app/about/page.tsx
export default function About() {
  return (
    <div className="min-h-screen p-8">
      <h1>About Us</h1>
    </div>
  )
}
```

### Add a New Component
```bash
# Create component file
touch components/YourComponent.tsx
```

```typescript
// components/YourComponent.tsx
export default function YourComponent() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Your content */}
      </div>
    </section>
  )
}
```

### Update Favicon
Replace `public/favicon.ico` with your logo.

## Troubleshooting

### Port 3000 Already in Use
```bash
# Use different port
npm run dev -- -p 3001
```

### Installation Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Check for TypeScript errors
npx tsc --noEmit

# Run linter
npm run lint
```

### Styling Not Updating
1. Stop the dev server (Ctrl+C)
2. Delete `.next` folder
3. Restart: `npm run dev`

## Development Tips

### Hot Reload
Changes automatically refresh the browser. No need to restart!

### View on Mobile Device
1. Find your computer's IP address
2. Start dev server: `npm run dev`
3. On mobile, go to: `http://YOUR-IP:3000`

### Use Browser DevTools
- **F12** or **Cmd+Option+I** to open DevTools
- Use Console for errors
- Use Elements to inspect styles
- Use Network to check load times

## File Organization

```
Key files you'll edit:
├── app/
│   ├── layout.tsx          ← Site metadata
│   └── page.tsx            ← Home page
├── components/
│   ├── Header.tsx          ← Navigation
│   ├── HeroSection.tsx     ← Landing section
│   └── ...                 ← Other sections
├── tailwind.config.ts      ← Colors & styles
└── public/                 ← Images & assets
```

## Essential Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm start                # Run production build
npm run lint             # Check code quality

# Useful
npx tsc --noEmit        # Check TypeScript
rm -rf .next            # Clear build cache
```

## Best Practices

1. **Always test on mobile** - 50%+ of traffic is mobile
2. **Optimize images** - Compress before adding
3. **Write semantic HTML** - Better for SEO
4. **Keep components small** - Easier to maintain
5. **Use TypeScript** - Catch errors early
6. **Comment complex code** - Help future you
7. **Test in multiple browsers** - Chrome, Firefox, Safari
8. **Check accessibility** - Use keyboard navigation

## Getting Help

### Documentation
- 📖 [Next.js Docs](https://nextjs.org/docs)
- 🎨 [Tailwind Docs](https://tailwindcss.com/docs)
- 🔷 [TypeScript Docs](https://typescriptlang.org)
- 🎯 [Lucide Icons](https://lucide.dev)

### Community
- [Next.js Discord](https://discord.gg/nextjs)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)
- [GitHub Issues](https://github.com/vercel/next.js/issues)

### Project-Specific
- Read `README.md` for detailed setup
- Check `CUSTOMIZATION.md` for styling guide
- See `DEPLOYMENT.md` for going live

## Ready to Deploy?

See `DEPLOYMENT.md` for step-by-step deployment instructions to:
- ✅ Vercel (easiest)
- ✅ Netlify
- ✅ AWS Amplify
- ✅ Custom server

## Quick Checklist

Before going live:
- [ ] Update all placeholder text
- [ ] Replace dummy images
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Optimize images
- [ ] Update meta tags
- [ ] Test contact forms
- [ ] Verify SEO settings
- [ ] Check load speed
- [ ] Enable analytics

## Need More Pages?

The current setup is for the home page. To add more pages:

1. **About Page**
   ```bash
   mkdir app/about
   echo "export default function About() { return <div>About</div> }" > app/about/page.tsx
   ```

2. **Services Page**
   ```bash
   mkdir app/services
   echo "export default function Services() { return <div>Services</div> }" > app/services/page.tsx
   ```

3. **Contact Page**
   ```bash
   mkdir app/contact
   echo "export default function Contact() { return <div>Contact</div> }" > app/contact/page.tsx
   ```

Then update navigation in `Header.tsx`!

## Performance Tips

1. **Optimize Images**
   - Use WebP format
   - Compress before upload
   - Use Next.js Image component

2. **Lazy Load Components**
   ```typescript
   import dynamic from 'next/dynamic'
   const Heavy = dynamic(() => import('./Heavy'))
   ```

3. **Monitor Bundle Size**
   ```bash
   npm run build
   # Check output for bundle sizes
   ```

## Final Tips

✨ **Start small** - Get comfortable with one section at a time
🎨 **Experiment** - Try different colors and layouts
📱 **Mobile first** - Always check mobile view
🚀 **Iterate** - Build, test, improve, repeat
💡 **Have fun** - Enjoy the development process!

---

## What's Next?

1. ✅ Get the site running locally
2. 🎨 Customize colors and content
3. 📱 Test on different devices
4. 🚀 Deploy to production
5. 📈 Monitor and improve

**You're ready to build something amazing!** 🎉

For detailed information, refer to:
- `README.md` - Complete documentation
- `CUSTOMIZATION.md` - Styling guide
- `DEPLOYMENT.md` - Deploy instructions
- `PROJECT_OVERVIEW.md` - Technical details
