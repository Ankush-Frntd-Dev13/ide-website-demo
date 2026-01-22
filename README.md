# IDE Website - Production Ready Next.js Application

A modern, fully responsive website built with Next.js 15, TypeScript, and Tailwind CSS. This project features smooth animations, interactive components, and SEO optimization.

## 🚀 Features

- ✅ **Next.js 15** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for styling
- ✅ **Fully Responsive** - Works on all screen sizes
- ✅ **SEO Optimized** - Meta tags, semantic HTML
- ✅ **Smooth Animations** - Custom animations and transitions
- ✅ **Interactive Components** - Carousels, sticky sections, testimonials
- ✅ **Modern UI** - Clean and professional design
- ✅ **Lucide Icons** - Beautiful, modern icons
- ✅ **Production Ready** - Optimized for deployment

## 📦 Components

1. **Header** - Responsive navigation with mobile menu
2. **Hero Section** - Eye-catching landing section with grid layout
3. **Sticky Scroll Section** - Content that changes based on scroll position
4. **Innovation Carousel** - Auto-playing carousel with progress indicators
5. **Leadership Section** - Stats cards with hover effects
6. **Testimonials Slider** - Client testimonials with auto-rotation
7. **CTA Banner** - Call-to-action section with gradient background
8. **Footer** - Comprehensive footer with newsletter signup

## 🛠️ Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup Steps

1. **Install Dependencies**
```bash
npm install
# or
yarn install
```

2. **Run Development Server**
```bash
npm run dev
# or
yarn dev
```

3. **Open in Browser**
Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
ide-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── HeroSection.tsx     # Landing section
│   ├── StickyScrollSection.tsx
│   ├── InnovationCarousel.tsx
│   ├── LeadershipSection.tsx
│   ├── TestimonialsSlider.tsx
│   ├── CTABanner.tsx       # Call to action
│   └── Footer.tsx          # Site footer
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── styles/                 # Additional styles
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  primary: {
    500: '#8b5cf6',  // Purple
    600: '#7c3aed',
    // ... more shades
  }
}
```

### Content
- Update text content in each component file
- Replace placeholder images in the `public/` directory
- Modify navigation links in `Header.tsx`

### Fonts
The project uses Inter and Space Grotesk fonts. You can change these in `app/layout.tsx`.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms
```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📱 Responsive Design

The website is fully responsive and tested on:
- Mobile devices (320px - 767px)
- Tablets (768px - 1023px)
- Desktops (1024px - 1920px)
- Large screens (1920px+)

## ⚡ Performance

- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Minimal JavaScript bundle size
- CSS purging with Tailwind
- Server-side rendering for better SEO

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags and Open Graph
- Proper heading hierarchy
- Alt text for images
- Sitemap ready
- Mobile-friendly

## 🧪 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📧 Support

For support, email support@ide.com or open an issue in the repository.

---

**Built with ❤️ using Next.js and Tailwind CSS**
