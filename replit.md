# Basit Tech Portfolio Website

## Overview

This is a full-stack portfolio website built with modern web technologies. The application serves as a professional showcase for Basit Tech, featuring a responsive design with interactive components, contact functionality, and comprehensive portfolio presentation. The architecture follows a modern full-stack pattern with React frontend and Express backend.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Animations**: Framer Motion for smooth interactions
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Email Service**: Nodemailer for contact form functionality
- **Development**: Hot reload with Vite middleware integration
- **Session Management**: PostgreSQL-backed sessions (configured but not actively used)

### Data Storage Solutions
- **Database**: PostgreSQL with Neon serverless hosting
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations
- **In-Memory Storage**: Fallback storage implementation for development

## Key Components

### Frontend Components
1. **Navigation System**: Smooth scrolling navigation with mobile responsiveness
2. **Hero Section**: Animated landing area with lightning effects and call-to-action
3. **About Section**: Skills showcase with animated progress bars
4. **Service Cards**: Feature presentation with hover effects
5. **Pricing Section**: Service packages with interactive cards
6. **Portfolio Gallery**: Project showcase with image galleries and filtering
7. **Testimonials**: Carousel-based customer reviews
8. **Contact Form**: Integrated contact submission with validation
9. **Footer**: Comprehensive links and contact information

### Backend Services
1. **Contact API**: Form submission handling with email integration
2. **Static Serving**: Development and production asset serving
3. **Error Handling**: Centralized error management
4. **Logging**: Request/response logging middleware

### UI System
- **Design System**: Custom color palette with CSS variables
- **Components**: Comprehensive shadcn/ui component library
- **Responsive Design**: Mobile-first approach with breakpoint management
- **Accessibility**: ARIA-compliant components and keyboard navigation

## Data Flow

1. **Client Request**: User interactions trigger React state updates
2. **API Communication**: TanStack Query manages server communications
3. **Form Submission**: Contact forms validate client-side then submit to backend
4. **Email Processing**: Backend processes contact submissions via Nodemailer
5. **Response Handling**: Success/error states update UI with toast notifications
6. **Asset Serving**: Static assets served through Vite in development, Express in production

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless connection
- **nodemailer**: Email service integration
- **drizzle-orm**: Database ORM and query builder
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **zod**: Schema validation

### UI Dependencies
- **@radix-ui/***: Headless UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **cmdk**: Command palette functionality

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type safety and development experience
- **esbuild**: Production build optimization

## Deployment Strategy

### Development Environment
- **Replit Integration**: Configured for Replit development environment
- **Hot Reload**: Vite development server with HMR
- **Database**: Neon PostgreSQL for consistent development/production parity
- **Port Configuration**: Development on port 5000 with proxy to port 80

### Production Build
- **Frontend Build**: Vite builds optimized static assets
- **Backend Build**: esbuild bundles server code with external dependencies
- **Asset Strategy**: Static files served from dist/public directory
- **Process Management**: Single Node.js process serving both API and static content

### Environment Configuration
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Email**: SMTP configuration through EMAIL_USER and EMAIL_PASS variables
- **Build Process**: Automated build pipeline for Replit deployment

## Changelog

```
Changelog:
- June 24, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```