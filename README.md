# Helping Friends Trust Website

A professional, modern website for Helping Friends Trust built with React, Vite, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Professional design with smooth animations and transitions
- **Hero Section**: Auto-scrolling image carousel with opacity effects
- **Impact Sections**: 
  - Key Areas of Our Work
  - Impact by Numbers (with animated counters)
  - Make a Difference & Volunteers sections
  - Making Change in Society
- **Navigation**: Sticky navbar with mobile menu
- **Footer**: Comprehensive footer with links, contact info, and newsletter signup

## Technology Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Navigation (if needed for multi-page)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
helping-friends/
├── public/
│   └── images/          # Placeholder for images
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── KeyAreas.jsx
│   │   ├── ImpactNumbers.jsx
│   │   ├── Volunteers.jsx
│   │   ├── MakingChange.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme. The current theme uses:
- Primary colors (blues)
- Accent colors (greens)

### Content

Update the content in each component file:
- `src/components/Hero.jsx` - Hero section images and text
- `src/components/KeyAreas.jsx` - Work areas
- `src/components/ImpactNumbers.jsx` - Statistics
- `src/components/Volunteers.jsx` - Volunteer information
- `src/components/MakingChange.jsx` - Impact stories
- `src/components/Footer.jsx` - Footer content and contact info

### Images

Replace placeholder images with actual images:
- Hero section images: Update URLs in `Hero.jsx`
- Section images: Update URLs in respective components
- Volunteer photos: Update URLs in `Volunteers.jsx`

## Features in Detail

### Navigation Bar
- Sticky header that changes on scroll
- Responsive mobile menu
- Smooth scroll navigation
- Prominent "Support Now" CTA button

### Hero Section
- Auto-scrolling image carousel (5-second intervals)
- Fade transitions between slides
- Gradient overlays with opacity effects
- Slide indicators
- Call-to-action buttons

### Key Areas Section
- Grid layout with hover effects
- Icon-based cards
- Smooth animations

### Impact Numbers
- Animated count-up effect on scroll
- Intersection Observer for trigger
- Professional stat cards

### Volunteers Section
- Two-part section: "Make a Difference" and "Volunteers with Us"
- Volunteer testimonials
- CTA buttons

### Making Change Section
- Impact stories with images
- Statistics display
- Call-to-action

### Footer
- Multi-column layout
- Social media links
- Newsletter signup form
- Contact information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Helping Friends Trust.
