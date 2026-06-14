# Quick Start Guide

## 🚀 Getting Started

### Installation
```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# Navigate to http://localhost:3000
```

## 📁 Where to Find Things

### Pages
- **Homepage**: `src/app/page.tsx`
- **History**: `src/app/history/page.tsx`
- **Projects**: `src/app/projects/page.tsx`
- **About**: `src/app/about/page.tsx`
- **Contact**: `src/app/contact/page.tsx`

### Components
- **Navbar**: `src/components/Navbar.tsx`
- **Footer**: `src/components/Footer.tsx`
- **Modal Header**: `src/components/TerminalHeader.tsx`
- **Cards & Elements**: `src/components/*.tsx`

### Styles
- **Global Styles**: `src/styles/globals.css` (animations, effects)
- **Tailwind Config**: `tailwind.config.ts` (colors, fonts, spacing)

### Configuration
- **Next.js**: `next.config.ts`
- **TypeScript**: `tsconfig.json`
- **Tailwind**: `tailwind.config.ts`
- **Dependencies**: `package.json`

## 🎨 Customizing Styles

### Changing Colors
Edit `tailwind.config.ts`:
```ts
colors: {
  'surface-tint': '#34e507',  // Change green glow color
  'surface': '#121414',        // Change background
  // ... more colors
}
```

### Changing Fonts
Edit `tailwind.config.ts`:
```ts
fontFamily: {
  'headline-md': ['IBM Plex Mono', 'monospace'],
  'body-md': ['Inter', 'sans-serif'],
  // ... more fonts
}
```

### Adding Animations
In `src/styles/globals.css` or `tailwind.config.ts`:
```css
@keyframes myAnimation {
  0% { /* start state */ }
  100% { /* end state */ }
}
```

## 🧩 Creating New Components

### Template
```tsx
'use client';

interface MyComponentProps {
  title: string;
}

export default function MyComponent({ title }: MyComponentProps) {
  return (
    <div className="space-y-4">
      <h1 className="font-headline-md text-surface-tint">{title}</h1>
    </div>
  );
}
```

### Using Custom Colors
```tsx
<div className="bg-surface-tint text-on-primary">
  Content
</div>
```

### Using Custom Spacing
```tsx
<div className="px-gutter py-section-gap">
  Content
</div>
```

## 🔗 Creating New Pages

### File Structure
```
src/app/new-section/
├── page.tsx          # Main page component
└── layout.tsx        # Optional: Section-specific layout
```

### Minimal Page Template
```tsx
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NewPage() {
  return (
    <main className="relative z-10 pt-32 pb-16 px-gutter flex flex-col items-center">
      <Navbar activeTab="new-section" />
      
      {/* Your content here */}
      
      <Footer />
    </main>
  );
}
```

## 📱 Responsive Classes

```tsx
// Mobile first
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>

// Hidden on mobile, visible on medium+
<div className="hidden md:block">
  Desktop only
</div>

// Different layouts
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  Responsive grid
</div>
```

## 🎯 Common Classes

### Spacing
- `p-gutter`: Horizontal padding (24px)
- `section-gap`: Vertical gap (120px)
- `section-gap-mobile`: Mobile vertical gap (64px)

### Colors
- `text-surface-tint`: Green text (#34e507)
- `bg-surface`: Dark background (#121414)
- `text-on-surface-variant`: Muted text (#bbccb0)
- `border-outline-variant`: Border color (#3c4b36)

### Typography
- `font-display-lg`: Large display text (IBM Plex Mono, 48px)
- `font-headline-md`: Medium heading (IBM Plex Mono, 24px)
- `font-body-lg`: Large body text (Inter, 18px)
- `font-code-md`: Code text (JetBrains Mono, 14px)

### Effects
- `glow-text`: Green glow on text
- `glow-border`: Green glow on borders
- `scanline-content`: Scanline pattern background
- `animate-blink`: Blinking animation
- `crt-flicker`: CRT flicker effect

## 🔍 Debugging

### Check Element Styles
```tsx
// Inspect in browser DevTools
// Right-click → Inspect Element
// View Tailwind classes applied
```

### Console Errors
- Check browser console for TypeScript errors
- Run `npm run lint` to check code quality

### Hot Reload
- Styles automatically reload on save
- Components refresh on save during development

## 🚢 Building for Production

```bash
# Build optimized version
npm run build

# Test production build locally
npm start

# Deploy to Vercel (recommended)
# Push to GitHub and connect to Vercel
```

## 📚 Reference Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

## 💡 Tips & Tricks

1. **Reuse Components**: If you're repeating code, extract it to a component
2. **Use TypeScript**: Define prop interfaces for better type safety
3. **Mobile First**: Write mobile styles first, then add `md:` classes for desktop
4. **Test Responsive**: Use browser DevTools to test different screen sizes
5. **Keep It DRY**: Don't repeat yourself - use components and utilities

## 🐛 Common Issues & Solutions

### Issue: Styling not appearing
**Solution**: Make sure you're using `className` not `class`

### Issue: Colors look different
**Solution**: Check `tailwind.config.ts` color values

### Issue: Components not importing
**Solution**: Check import paths use `@/` alias, e.g., `@/components/Navbar`

### Issue: TypeScript errors
**Solution**: Run `npm run build` to see all type errors

## ✅ Development Checklist

Before committing:
- [ ] Code passes `npm run lint`
- [ ] No TypeScript errors
- [ ] Responsive on mobile (320px)
- [ ] Responsive on tablet (768px)
- [ ] Responsive on desktop (1920px)
- [ ] All links navigate correctly
- [ ] No console errors
- [ ] Styling matches design

---

**Happy Coding!** 🚀

For more details, see `REFACTORING.md` and `REFACTORING_SUMMARY.md`
