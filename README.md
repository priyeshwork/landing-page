# Quranium Landing Page

A modern, responsive landing page. Built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern UI with smooth animations and transitions
- 📱 Fully responsive design
- 🎭 Interactive sections with parallax scrolling effects
- ⚡ Optimized performance with Next.js 14
- 🎯 Semantic HTML and accessibility features
- 🎨 Custom color system with dark theme
- 🔄 Smooth scroll animations
- 🎯 Section-based navigation
- 🖼️ Gradient overlays and backdrop blur effects
- 🎮 Interactive 3D elements with Spline

## Tech Stack

- [Next.js 14](https://nextjs.org) - React framework
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Spline](https://spline.design) - 3D design and animations
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Inter Font](https://fonts.google.com/specimen/Inter) - Typography

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/priyeshwork/landing-page.git
cd landing-page
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:

Create a `.env` file in the root directory and add your Spline scene URL:
```env
NEXT_PUBLIC_SPLINE_SCENE_HUMAN="your-spline-scene-url-here"
```

You can get your Spline scene URL by:
1. Creating a scene on [Spline](https://spline.design)
2. Exporting/publishing your scene
3. Copying the scene URL

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                   # Next.js app directory
│   ├── components/        # React components
│   │   ├── about/        # About section
│   │   ├── hero/         # Hero section
│   │   ├── navigation/   # Navigation bar
│   │   └── transition/   # Page transitions
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── constants/            # Constants and content
└── styles/              # Global styles
```

## Customization

### Colors

The project uses a custom color system defined in `tailwind.config.ts`. You can modify the colors by updating the `theme.extend.colors` section:

```typescript
colors: {
  dark: {
    base: "#000000",
    lighter: "#120318",
    accent: {
      100: "#1A0524",
      // ... other accent colors
    }
  }
}
```

### Content

All content is managed through constants in the `src/constants` directory:
- `content.ts` - Main content for all sections
- `index.ts` - Shared constants like section IDs

### Animations

Scroll-based animations are implemented using Framer Motion. You can adjust the animation parameters in the respective component files:
- Hero animations: `src/app/components/hero/Content.tsx`
- About section animations: `src/app/components/about/index.tsx`

### 3D Elements

The project uses Spline for 3D elements. To modify or replace the 3D scenes:

1. Create your scene in [Spline](https://spline.design)
2. Export and publish your scene
3. Update the scene URL in your `.env` file
4. The project uses these Spline packages:
```json
{
  "@splinetool/react-spline": "^4.0.0",
  "@splinetool/runtime": "^1.9.59"
}
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using Vercel:

1. Push your code to a GitHub repository
2. Import your repository on [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel project settings
4. Vercel will detect Next.js and configure the build settings
5. Your site will be deployed to a global CDN with HTTPS

### Other Platforms

You can also deploy to any platform that supports Next.js:

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

Remember to set up your environment variables on your hosting platform.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
