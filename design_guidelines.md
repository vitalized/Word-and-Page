# Word and Page - Design Guidelines

## Design Approach
Photography-first portfolio website with elegant editorial aesthetic, drawing inspiration from high-end publishing and art magazines like Aperture, Frieze, and contemporary portfolio sites. Clean, spacious layouts that let the work breathe.

## Color Palette

**Primary:** Deep navy blue (#1a2332) - sophisticated, editorial
**Secondary:** Warm terracotta (#c67b5c) - artistic, approachable
**Accent:** Soft gold (#d4a574) - refined highlights
**Success:** Muted sage (#7a9b76)
**Warning:** Amber (#e8a854)
**Error:** Dusty rose (#c17b7b)

**Backgrounds:** Pure white (#ffffff) primary, very light warm gray (#fafaf8) secondary
**Text:** Charcoal (#2d3748) primary, medium gray (#718096) secondary

Dark mode: Invert with dark charcoal backgrounds (#1a1a1a), adjust colors for lower saturation.

## Typography

**Headings:** Cormorant Garamond (serif, weights: 400, 500, 600)
- H1: 4rem (desktop) / 2.5rem (mobile), font-weight: 500, letter-spacing: -0.02em
- H2: 3rem / 2rem, font-weight: 500
- H3: 2rem / 1.5rem, font-weight: 400
- H4: 1.5rem / 1.25rem, font-weight: 400

**Body:** Inter (sans-serif, weights: 300, 400, 500)
- Body: 1.125rem, font-weight: 300, line-height: 1.75
- Small: 0.875rem, font-weight: 400
- Captions: 0.8125rem, font-weight: 400, letter-spacing: 0.02em

## Layout System

**Spacing:** Tailwind units of 4, 8, 12, 16, 24, 32 for consistency (p-4, py-8, space-y-12, etc.)

**Container widths:**
- Max content: max-w-7xl
- Text content: max-w-4xl
- Prose: max-w-prose (65ch)

**Grid systems:**
- Projects: 2-column grid (md:grid-cols-2) with generous gap-12
- Services: 3-column grid (lg:grid-cols-3) with gap-8
- Instagram: 3-4 column masonry grid

## Page-Specific Layouts

**Homepage:**
- Large hero: Full-height (min-h-screen) with centered text overlay, semi-transparent dark gradient for readability
- Featured work section: 2-column alternating image-text blocks with py-32 spacing between
- Testimonial: Single centered quote with max-w-3xl, py-24
- Recent projects preview: 3-column grid of project cards with hover effects

**Projects Page:**
- Each project: Full-width hero image, followed by 2-column layout (60/40) with images left, text right
- Generous vertical spacing (py-24) between projects
- Large image galleries within each project section

**About Page:**
- Hero: Portrait image (max-w-2xl) with biography text in 2-column layout below
- Timeline-style experience section with left-aligned dates, right-aligned descriptions
- Client logos grid at bottom (6-column, grayscale with hover color)

**Services Page:**
- Hero introduction with tagline
- Service cards in 3-column grid with icons, titles, descriptions
- Process timeline with numbered steps
- CTA section at bottom

**Instagram Page:**
- Masonry grid (3 columns desktop, 2 tablet, 1 mobile)
- Infinite scroll or "Load More" button
- Lightbox overlay for image expansion

**Contact Page:**
- 2-column split: Form (left, 60%), Contact info + office hours (right, 40%)
- Simple form fields with generous padding, elegant focus states

## Parallax Background System

Three distinct layers moving at different speeds (slowest to fastest):

**Layer 1 (0.2 speed):** Large abstract line-drawn shapes - circles, arcs, organic forms in very light gray (#f0f0f0)

**Layer 2 (0.5 speed):** Medium geometric patterns - dotted grids, thin lines, angular shapes in slightly darker gray (#e8e8e8)

**Layer 3 (0.8 speed):** Small detailed elements - fine line drawings, small circles, delicate patterns in medium-light gray (#e0e0e0)

All elements: Simple SVG line drawings, 1-2px stroke width, positioned sparsely across canvas. Background remains predominantly white with subtle movement.

## Component Library

**Navigation:** 
- Fixed top bar, white background with subtle shadow on scroll
- Logo left, menu items right (desktop) / hamburger (mobile)
- Underline hover effect with secondary color

**Buttons:**
- Primary: Secondary color background, white text, rounded-lg, px-8 py-4
- Secondary: Outline with primary color, hover fills
- On images: Backdrop-blur with semi-transparent white background

**Cards:**
- White background, subtle shadow (shadow-lg), rounded-xl
- Hover: Lift effect (transform translate-y-[-4px])
- Project cards include large image, title, subtitle, client name

**Forms:**
- Input fields: border-2, rounded-lg, py-4 px-6, focus:border-primary
- Labels: uppercase, tracking-wider, text-sm, mb-2
- Submit button: Full-width on mobile, auto on desktop

**Image Treatments:**
- All images: rounded-lg, object-cover
- Hero images: aspect-ratio 16/9 or 3/2
- Project images: Various ratios based on content
- Lazy loading for performance

## Images

**Hero Images:**
- Homepage: Featured editorial work with books/magazines, high-quality photography
- Projects page: Hero showing multiple book covers or magazine spreads
- About page: Professional portrait in editorial setting
- Services page: Clean workspace with editorial materials

**Project Images:**
- TANK: Magazine spreads, covers, behind-the-scenes editorial work
- Michael Asher Foundation: Book photography, archival materials
- X—TRA: Journal layouts, covers
- Various Publishers: Collection of published work

All images should be high-resolution JPG, optimized for web, with consistent treatment (slight desaturation for cohesive look).

## Animations

Minimal, elegant:
- Fade-in on scroll for project sections (opacity + translate-y)
- Smooth parallax movement (transform: translateY)
- Hover scale on cards (1.02)
- Menu transitions (opacity + height)

No flashy effects - maintain editorial sophistication.