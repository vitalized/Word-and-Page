# Word and Page - Photography Portfolio Website

## Overview

Word and Page is a sophisticated photography-first portfolio website for an editorial services professional based in London. The site showcases over 10 years of experience in editorial positions, book making, and printed matter within art and culture. The application features an elegant editorial aesthetic inspired by high-end publishing and art magazines like Aperture and Frieze, with a clean, spa-like presentation emphasizing visual storytelling through project portfolios, service offerings, and professional credentials.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### November 11, 2025
- **Contact Form Backend Integration**: Implemented full-stack contact form functionality
  - Added database persistence for contact submissions
  - Created POST /api/contact endpoint with Zod validation
  - Integrated TanStack Query mutations for form submission
  - Added success/error toast notifications
  - Form automatically clears on successful submission
  - All contact data saved to PostgreSQL database

- **About Page Enhancements**:
  - Added authentic professional portrait (poppy_1762858273395.webp)
  - Reorganized experience section into "Senior Positions" and "Editorial Work"
  - Added comprehensive editorial work listing with 30+ publications
  - Included work from MACK, SPBH Editions, MIT Press, and other publishers

- **Design Updates**:
  - Replaced pattern-based parallax with subtle vertical rectangles
  - Used muted, semi-transparent colors for parallax layers
  - Maintained three-level parallax effect (0.2x, 0.5x, 0.8x scroll speed)
  - Updated all project images to use authentic portfolio photography from original website

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server with hot module replacement
- Wouter for lightweight client-side routing (replacing React Router)
- Single-page application architecture with client-side navigation

**UI Component System**
- Shadcn/ui component library built on Radix UI primitives
- Custom design system configured in `components.json` with New York style variant
- Tailwind CSS for utility-first styling with custom theme extending base configuration
- Component alias structure: `@/components`, `@/lib`, `@/hooks` for organized imports

**Design System**
- Typography: Cormorant Garamond (serif) for headings, Inter (sans-serif) for body text
- Color palette: Deep navy blue primary (#1a2332), warm terracotta secondary (#c67b5c), soft gold accent (#d4a574)
- Dark mode support via CSS class toggling with localStorage persistence
- Responsive grid layouts: 2-column projects, 3-column services, masonry Instagram grid
- Custom parallax scrolling background effects for visual depth

**State Management**
- TanStack Query (React Query) for server state management and API data fetching
- Local component state with React hooks for UI interactions
- Custom toast notification system for user feedback
- No global state management library (Redux/Zustand) - keeping state local and server-driven

**Key Pages & Features**
- Home: Full-height hero section with featured projects showcase
- Projects: Detailed portfolio entries with multiple images and external links
- About: Professional biography with career timeline and senior positions (includes comprehensive editorial work list)
- Services: Grid of editorial services (copy editing, proofreading, fact checking, book production)
- Instagram: Masonry gallery grid with social media integration
- Contact: Fully functional form submission with database persistence, validation, and success feedback

### Backend Architecture

**Server Framework**
- Express.js on Node.js for HTTP server and API routing
- ESM module system (`"type": "module"` in package.json)
- Custom middleware for JSON request logging with response capture
- Development and production modes with environment-specific configuration

**API Design**
- RESTful API endpoints under `/api` prefix
- Contact form submission endpoint: `POST /api/contact`
- Request validation using Zod schemas integrated with Drizzle ORM
- JSON response format with standardized error handling

**Storage Layer**
- Interface-based storage abstraction (`IStorage`) for database operations
- `DatabaseStorage` class implementing CRUD operations
- Currently supports: user management and contact form submissions
- Database operations return typed entities (User, ContactSubmission)

**Development Tooling**
- Vite middleware mode for seamless frontend/backend integration in development
- Custom logging system with timestamp formatting for request/response tracking
- TSX for TypeScript execution in development without compilation step
- Separate build process for production: Vite for client, esbuild for server

### Data Storage

**Database Technology**
- PostgreSQL via Neon Database serverless driver
- WebSocket connection support for serverless environments
- Connection pooling with `@neondatabase/serverless`

**ORM & Schema Management**
- Drizzle ORM for type-safe database queries and schema definition
- Schema-first approach with TypeScript types inferred from database schema
- Drizzle-Zod integration for automatic validation schema generation
- Migration support via Drizzle Kit (configured in `drizzle.config.ts`)

**Database Schema**
- `users` table: id (UUID), username (unique), password
- `contact_submissions` table: id (UUID), name, email, message, createdAt timestamp
- UUID primary keys generated via PostgreSQL `gen_random_uuid()`
- Schema located in `shared/schema.ts` for reuse across client and server

**Data Validation**
- Zod schemas derived from Drizzle table definitions
- Insert schemas exclude auto-generated fields (id, timestamps)
- Type-safe data transfer objects: `InsertUser`, `InsertContact`
- Validation occurs at API boundary before database operations

### External Dependencies

**Third-Party Services**
- Neon Database: Serverless PostgreSQL hosting with WebSocket support
- Google Fonts: Cormorant Garamond and Inter font families loaded via CDN
- External image hosting: Squarespace CDN for project and portfolio images

**UI Component Libraries**
- Radix UI: Headless accessible components (26+ primitives including Dialog, Dropdown, Toast, etc.)
- Embla Carousel: Touch-friendly carousel component
- Lucide React: Icon library for consistent iconography
- CMDK: Command palette component for keyboard navigation
- Vaul: Drawer component for mobile-friendly overlays

**Developer Tools & Utilities**
- Class Variance Authority (CVA): Type-safe component variant management
- clsx & tailwind-merge: Conditional className composition
- date-fns: Date manipulation and formatting
- nanoid: Compact unique ID generation
- Replit-specific plugins: Runtime error overlay, cartographer, dev banner

**Form Handling**
- React Hook Form: Performant form state management
- Hookform Resolvers: Zod schema integration for form validation
- Client-side validation before API submission

**Build & Development**
- PostCSS with Tailwind CSS and Autoprefixer
- Source map support via `@jridgewell/trace-mapping`
- TypeScript compiler for type checking (`npm run check`)
- Separate build artifacts: `dist/public` for client, `dist` for server bundle