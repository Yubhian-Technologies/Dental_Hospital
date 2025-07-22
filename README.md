# Smile Dental Care - Interactive Dental Website

A modern, responsive dental practice website built with React, TypeScript, and Tailwind CSS. Features separate desktop and mobile optimized experiences with interactive components and smooth animations.

## 🌟 Features

### Core Functionality
- **Responsive Design**: Automatic device detection with optimized layouts
- **Interactive Hero Slider**: Auto-rotating slides with manual navigation
- **Service Management**: Detailed service cards with modal popups
- **Appointment Booking**: Full-featured booking system with form validation
- **Patient Testimonials**: Interactive carousel with navigation controls
- **Contact Forms**: Real-time validation and submission feedback
- **Smooth Navigation**: Scroll-to-section with fixed header

### Mobile-Specific Features
- **Compact Header**: Optimized logo and quick access buttons
- **Touch-Friendly Interface**: Larger buttons and touch targets
- **Bottom Sheet Modals**: Native mobile experience for service details
- **Floating Action Buttons**: WhatsApp and direct call integration
- **Slide-Out Menu**: Mobile-optimized navigation drawer
- **Emergency Access**: Prominent emergency contact options

### Desktop Features
- **Full-Width Layout**: Optimized for larger screens
- **Hover Effects**: Rich micro-interactions and animations
- **Multi-Column Grids**: Efficient use of screen real estate
- **Detailed Modals**: Comprehensive service information panels

## 🚀 Live Demo

- **Desktop Version**: https://guileless-sundae-98d7de.netlify.app/desktop.html
- **Mobile Version**: https://guileless-sundae-98d7de.netlify.app/mobile.html

### URL Parameters
- Desktop: `?view=desktop`
- Mobile: `?view=mobile`

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify
- **Images**: Pexels (high-quality stock photos)

## 📱 Device Support

### Desktop (≥769px)
- Full-featured desktop experience
- Multi-column layouts
- Rich hover interactions
- Comprehensive service modals

### Mobile (≤768px)
- Single-column layouts
- Touch-optimized interface
- Bottom sheet modals
- Floating action buttons
- Swipe gestures

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#3b82f6 to #06b6d4)
- **Secondary**: Cyan accents
- **Background**: Light gray (#f8fafc)
- **Text**: Dark gray (#1f2937)

### Typography
- **Headings**: Bold, gradient text effects
- **Body**: Clean, readable sans-serif
- **Buttons**: Medium weight, proper contrast

### Components
- **Cards**: Rounded corners, subtle shadows
- **Buttons**: Gradient backgrounds, hover effects
- **Forms**: Clean inputs with focus states
- **Modals**: Backdrop blur, smooth animations

## 📂 Project Structure

```
src/
├── components/
│   ├── Header.tsx              # Desktop header component
│   ├── Hero.tsx                # Desktop hero slider
│   ├── Services.tsx            # Desktop services grid
│   ├── About.tsx               # About section (shared)
│   ├── Testimonials.tsx        # Testimonials carousel (shared)
│   ├── Contact.tsx             # Contact form (shared)
│   ├── Footer.tsx              # Footer component (shared)
│   ├── AppointmentModal.tsx    # Booking modal (shared)
│   ├── MobileHeader.tsx        # Mobile header component
│   ├── MobileHero.tsx          # Mobile hero section
│   ├── MobileServices.tsx      # Mobile services list
│   └── MobileApp.tsx           # Mobile app wrapper
├── App.tsx                     # Main app with device detection
├── DesktopApp.tsx             # Desktop app wrapper
├── main.tsx                   # App entry point
└── index.css                  # Global styles and animations
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn


## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

The project is configured for Netlify deployment with multiple entry points:

### Build Configuration
```javascript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        desktop: 'desktop.html',
        mobile: 'mobile.html'
      }
    }
  }
});
```

### Deployment Steps
1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

## 📱 Mobile Features

### Touch Interactions
- Swipe navigation for carousels
- Touch-friendly button sizes (min 44px)
- Smooth scroll behavior
- Pull-to-refresh support

### Performance Optimizations
- Lazy loading for images
- Optimized bundle sizes
- Efficient re-renders
- Minimal JavaScript for mobile

### Accessibility
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast ratios
- Focus indicators

## 🎯 Key Components

### Hero Slider
- Auto-rotating slides (6-second intervals)
- Manual navigation arrows
- Slide indicators
- Responsive images
- Gradient overlays

### Services Section
- Grid layout (responsive)
- Service cards with hover effects
- Modal popups with detailed information
- Pricing display
- Feature lists

### Appointment Booking
- Multi-step form validation
- Date/time selection
- Service selection dropdown
- Real-time feedback
- Success/error states

### Testimonials
- Carousel with navigation
- Star ratings
- Patient photos
- Responsive design
- Auto-play functionality
