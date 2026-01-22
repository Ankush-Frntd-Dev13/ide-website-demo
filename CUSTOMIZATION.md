# Customization Guide

## Table of Contents
1. [Colors & Branding](#colors--branding)
2. [Typography](#typography)
3. [Content Updates](#content-updates)
4. [Images](#images)
5. [Navigation](#navigation)
6. [Animations](#animations)
7. [SEO](#seo)

## Colors & Branding

### Primary Colors
Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#f5f3ff',   // Lightest
    500: '#8b5cf6',  // Main brand color
    900: '#4c1d95',  // Darkest
  },
}
```

### Gradient Backgrounds
Common gradients used in the project:

```typescript
// Purple gradient
className="bg-gradient-to-br from-purple-600 to-pink-600"

// Blue gradient  
className="bg-gradient-to-br from-blue-600 to-cyan-600"

// Dark gradient
className="bg-gradient-to-br from-gray-900 to-gray-800"
```

## Typography

### Font Families
In `app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({ 
  subsets: ["latin"],
  variable: '--font-your-font',
});
```

### Font Sizes
Predefined sizes in Tailwind:
- `text-sm` - Small text
- `text-base` - Body text
- `text-lg` - Large text
- `text-xl` to `text-9xl` - Headings

## Content Updates

### Header Navigation
Edit `components/Header.tsx`:

```typescript
const navLinks = [
  { name: 'Your Link', href: '/your-page' },
  // Add more links
];
```

### Hero Section
Edit `components/HeroSection.tsx`:

```typescript
<h1>Your Main Heading</h1>
<p>Your description text</p>
<button>Your CTA Button</button>
```

### Footer
Edit `components/Footer.tsx`:

```typescript
const footerLinks = {
  'Your Category': [
    { name: 'Link 1', href: '#' },
    { name: 'Link 2', href: '#' },
  ],
};

// Social media links
const socialLinks = [
  { icon: Facebook, href: 'your-facebook-url', label: 'Facebook' },
];
```

## Images

### Adding Images

1. **Place in public folder**
   ```
   public/
   ├── images/
   │   ├── logo.png
   │   ├── hero-bg.jpg
   │   └── ...
   ```

2. **Use Next.js Image component**
   ```typescript
   import Image from 'next/image';
   
   <Image
     src="/images/your-image.jpg"
     alt="Description"
     width={800}
     height={600}
     priority // For above-fold images
   />
   ```

3. **External Images**
   Add domains to `next.config.js`:
   ```javascript
   images: {
     domains: ['your-domain.com'],
   }
   ```

### Image Optimization Tips
- Use WebP format when possible
- Compress images before upload
- Use appropriate dimensions
- Add descriptive alt text

## Navigation

### Add New Pages

1. **Create page file**
   ```
   app/
   ├── about/
   │   └── page.tsx
   ├── services/
   │   └── page.tsx
   ```

2. **Update navigation**
   ```typescript
   // In Header.tsx
   { name: 'About', href: '/about' },
   { name: 'Services', href: '/services' },
   ```

### Dynamic Routes
```
app/
├── blog/
│   └── [slug]/
│       └── page.tsx
```

## Animations

### Custom Animations
Edit `tailwind.config.ts`:

```typescript
animation: {
  'your-animation': 'yourAnimation 2s ease-in-out infinite',
},
keyframes: {
  yourAnimation: {
    '0%, 100%': { transform: 'rotate(0deg)' },
    '50%': { transform: 'rotate(180deg)' },
  },
}
```

### Apply Animations
```typescript
className="animate-your-animation"
```

### Hover Effects
```typescript
className="hover:scale-105 transition-transform duration-300"
```

## Components Customization

### Sticky Scroll Section
Edit `components/StickyScrollSection.tsx`:

```typescript
const content = [
  {
    title: 'Your Title',
    description: 'Your description',
    icon: YourIcon,
    color: 'from-blue-500 to-blue-700',
  },
  // Add more items
];
```

### Carousel
Edit `components/InnovationCarousel.tsx`:

```typescript
const slides = [
  {
    title: 'Your Slide Title',
    description: 'Slide description',
    highlight: 'Key point',
    image: '/images/slide1.jpg',
    color: 'from-purple-600 to-pink-600',
  },
  // Add more slides
];
```

### Testimonials
Edit `components/TestimonialsSlider.tsx`:

```typescript
const testimonials = [
  {
    quote: 'Your testimonial text',
    author: 'Client Name',
    role: 'Position, Company',
    avatar: '/images/avatar.jpg',
  },
  // Add more testimonials
];
```

### Stats/Leadership Cards
Edit `components/LeadershipSection.tsx`:

```typescript
const stats = [
  {
    number: '100+',
    label: 'Your metric',
    icon: YourIcon,
    color: 'from-blue-600 to-blue-800',
  },
  // Add more stats
];
```

## SEO

### Meta Tags
Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Site Title",
  description: "Your site description",
  keywords: "your, keywords, here",
  openGraph: {
    title: "Your OG Title",
    description: "Your OG description",
    images: ['/og-image.jpg'],
  },
};
```

### Page-Specific SEO
In individual page files:

```typescript
export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description",
};
```

## Responsive Design

### Breakpoints
```typescript
// Tailwind breakpoints
sm:  // 640px
md:  // 768px
lg:  // 1024px
xl:  // 1280px
2xl: // 1536px

// Usage
className="text-sm md:text-base lg:text-lg"
```

### Mobile Menu
Edit `components/Header.tsx` to customize mobile menu behavior.

## Dark Mode (Optional)

1. **Enable in Tailwind**
   ```typescript
   // tailwind.config.ts
   darkMode: 'class',
   ```

2. **Add dark variants**
   ```typescript
   className="bg-white dark:bg-gray-900"
   ```

## Performance

### Code Splitting
```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

### Lazy Loading Images
```typescript
<Image
  src="/image.jpg"
  alt="Description"
  loading="lazy"
/>
```

## Analytics

### Add Google Analytics
```typescript
// app/layout.tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
  strategy="afterInteractive"
/>
```

## Testing Your Changes

1. **Local Development**
   ```bash
   npm run dev
   ```

2. **Build Test**
   ```bash
   npm run build
   npm start
   ```

3. **Type Check**
   ```bash
   npx tsc --noEmit
   ```

4. **Lint**
   ```bash
   npm run lint
   ```

## Common Issues

### Styling Not Updating
1. Clear cache
2. Restart dev server
3. Check Tailwind purge settings

### Images Not Loading
1. Check file path
2. Verify image in public folder
3. Check next.config.js domains

### Build Errors
1. Check TypeScript errors
2. Verify all imports
3. Check component syntax

## Best Practices

✅ Keep components small and focused
✅ Use TypeScript for type safety
✅ Follow naming conventions
✅ Comment complex logic
✅ Test on multiple devices
✅ Optimize images before upload
✅ Keep dependencies updated
✅ Use semantic HTML
✅ Make it accessible
✅ Monitor performance

## Getting Help

- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind Docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- TypeScript Docs: [typescriptlang.org](https://typescriptlang.org)
