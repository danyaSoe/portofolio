# Retro Terminal Portfolio - Next.js Refactoring

A complete refactoring of the retro-terminal themed portfolio from static HTML pages to a modern **Next.js 15 App Router** application while preserving all visual appearance and functionality.

## 📋 Project Structure

```
src/
├── app/                          # Next.js App Router directory
│   ├── layout.tsx               # Root layout with global styles
│   ├── page.tsx                 # Landing/home page
│   ├── history/
│   │   └── page.tsx             # Work history detail page
│   ├── projects/
│   │   └── page.tsx             # Projects showcase page
│   ├── about/
│   │   └── page.tsx             # About page
│   └── contact/
│       └── page.tsx             # Contact page
│
├── components/                   # Reusable React components
│   ├── Navbar.tsx              # Navigation bar
│   ├── Footer.tsx              # Footer component
│   ├── TerminalHeader.tsx       # Terminal-styled header
│   ├── AccessLevelBadge.tsx     # Security level badge
│   ├── TechTag.tsx              # Technology tag component
│   ├── ProgressBar.tsx          # Progress visualization
│   ├── SectionHeader.tsx        # Section title with icon
│   └── ActionItem.tsx           # Reusable action card
│
├── lib/                          # Utilities and helpers
│   └── (utilities placeholder)
│
└── styles/
    └── globals.css              # Global styles, animations, and effects

Configuration Files:
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind CSS theme configuration
├── postcss.config.js           # PostCSS configuration
├── package.json                # Dependencies and scripts
└── .eslintrc.json              # ESLint configuration
```

## 🎨 Design System

The entire color palette and typography system from the original design has been preserved and converted to a **Tailwind CSS custom theme**:

### Colors
- **Primary**: `#d4ffc1` (light green glow)
- **Background**: `#0B0C0F` (deep black)
- **Surface**: `#121414` (dark gray)
- **Surface Tint**: `#34e507` (terminal green)
- **Secondary**: `#ffb86b` (orange accent)

### Typography
- **Display Large**: IBM Plex Mono, 48px
- **Headline Medium**: IBM Plex Mono, 24px
- **Body Large/Medium**: Inter, 18px/16px
- **Label Small**: JetBrains Mono, 14px
- **Code Medium**: JetBrains Mono, 14px

## 🚀 Key Features

### ✨ Visual Effects Preserved
- **CRT Scanline Overlay**: Fixed overlay with horizontal/vertical patterns
- **Flicker Animation**: Continuous subtle opacity flicker effect
- **Glow Effects**: Text and border glows for emphasis
- **Terminal Cursor Blinking**: Animated cursor in status indicator
- **Scanline Content**: Subtle grid pattern on scrollable content

### 🎯 Component Architecture
All components are functional, `use client` where necessary, and fully typed with TypeScript:

- **Navbar**: Navigation with active state detection
- **Footer**: Consistent footer across all pages
- **TerminalHeader**: Reusable terminal window header with close button
- **AccessLevelBadge**: Security level display
- **TechTag**: Technology stack badges
- **ProgressBar**: Status/metrics visualization
- **SectionHeader**: Consistent section titles with icons
- **ActionItem**: Grid-friendly content cards

### 📱 Responsive Design
All pages are fully responsive with:
- Mobile-first approach
- Tailwind responsive utilities (`md:`, `lg:`)
- Touch-friendly interactions
- Viewport-optimized typography

## 🔄 Migration Details

### HTML → TSX Conversion
1. **Class attributes** → `className` props
2. **Event handlers** → React event props (onClick, onChange, etc.)
3. **Inline styles** → `style` props or Tailwind classes
4. **HTML attributes** → camelCase React equivalents

### JavaScript → React Hooks
- Removed inline `<script>` tags
- Converted DOM manipulation to React state/refs
- Used `useEffect` for side effects
- Preserved all animations via Tailwind/CSS

### Styling Strategy
- **Global styles**: `src/styles/globals.css` (animations, CRT effects)
- **Component styles**: Tailwind classes inline (scoped to components)
- **Theme config**: `tailwind.config.ts` (custom colors, spacing, fonts)

## 🎮 Page Routes

| Route | Purpose |
|-------|---------|
| `/` | Landing page with system status |
| `/history` | Work history in terminal modal |
| `/projects` | Featured project showcase |
| `/about` | System information and stack |
| `/contact` | Contact form and methods |

## 🛠️ Installation & Development

### Prerequisites
- Node.js 18+ or 20+
- npm, yarn, or pnpm

### Setup
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The application will be available at `http://localhost:3000`

## 📦 Dependencies

### Runtime
- **react** (19.0.0): React library
- **react-dom** (19.0.0): DOM renderer
- **next** (15.0.0): Next.js framework

### Development
- **typescript** (5.3.3): Type safety
- **tailwindcss** (3.4.1): Styling
- **postcss** (8.4.32): CSS transformation
- **autoprefixer** (10.4.16): CSS vendor prefixes
- **eslint** (8.55.0): Code linting

## 🎯 Improvements Over Original

| Aspect | Original | Refactored |
|--------|----------|-----------|
| **Structure** | Static HTML files | Modular React components |
| **Reusability** | Duplicated code | Reusable components |
| **Maintainability** | Hard to update | Component-based updates |
| **Type Safety** | None | Full TypeScript |
| **Performance** | Basic optimization | Next.js optimizations |
| **Development** | Manual build | Hot reload with dev server |
| **Scalability** | Limited | Easily extensible |

## 🔮 Future Enhancements

### Planned Features
- [ ] Dynamic routing for portfolio entries (`/projects/[id]`)
- [ ] Dark/light mode toggle (already themed for dark)
- [ ] Blog section with markdown support
- [ ] Project filtering and search
- [ ] Contact form backend integration
- [ ] Animations library (Framer Motion)
- [ ] Image optimization (Next.js Image component)
- [ ] SEO optimization (metadata, structured data)

### Possible Additions
- Mobile menu/hamburger navigation
- Sound effects for interactions
- Print-friendly stylesheet
- Accessibility improvements (ARIA labels)
- Analytics integration
- Internationalization (i18n)

## 📝 Code Quality

### TypeScript
- Full type coverage on all components
- Proper prop typing with interfaces
- No `any` types used

### Styling
- Semantic HTML structure
- Tailwind utility-first approach
- Custom CSS for complex effects
- Mobile-first responsive design

### Best Practices
- Server/Client component separation (`use client` where needed)
- Component composition and reusability
- Clean import organization
- Consistent naming conventions

## 🚨 Notes

1. **Font Loading**: Google Fonts are loaded in the root layout head
2. **Material Icons**: Material Symbols Outlined icons via Google Fonts
3. **Tailwind Customization**: All custom colors and fonts in `tailwind.config.ts`
4. **CSS Effects**: CRT overlays and scanlines in `src/styles/globals.css`
5. **Metadata**: SEO metadata configured in `src/app/layout.tsx`

## 🤝 Contributing

When adding new features:
1. Create reusable components in `src/components/`
2. Use TypeScript for type safety
3. Follow the existing naming conventions
4. Update this README if adding new routes or major features
5. Test responsiveness on mobile and desktop

## 📄 License

This refactored project maintains the original portfolio's license terms.

---

**Refactored with Next.js 15 App Router** | **TypeScript + Tailwind CSS** | **2024**
