---
name: Coastal Refinement
colors:
  surface: '#f7f9ff'
  surface-dim: '#c5dcf8'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#edf4ff'
  surface-container: '#e3efff'
  surface-container-high: '#d9eaff'
  surface-container-highest: '#cee5ff'
  on-surface: '#031d31'
  on-surface-variant: '#43474e'
  inverse-surface: '#1b3247'
  inverse-on-surface: '#e8f2ff'
  outline: '#73777f'
  outline-variant: '#c3c6cf'
  surface-tint: '#436084'
  primary: '#123355'
  on-primary: '#ffffff'
  primary-container: '#2c4a6d'
  on-primary-container: '#9cbae2'
  inverse-primary: '#abc9f2'
  secondary: '#366094'
  on-secondary: '#ffffff'
  secondary-container: '#9cc3fe'
  on-secondary-container: '#245084'
  tertiary: '#0a3359'
  on-tertiary: '#ffffff'
  tertiary-container: '#274a71'
  on-tertiary-container: '#98bae7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#abc9f2'
  on-primary-fixed: '#001c37'
  on-primary-fixed-variant: '#2a486b'
  secondary-fixed: '#d4e3ff'
  secondary-fixed-dim: '#a5c8ff'
  on-secondary-fixed: '#001c3a'
  on-secondary-fixed-variant: '#1a487b'
  tertiary-fixed: '#d2e4ff'
  tertiary-fixed-dim: '#a7c9f7'
  on-tertiary-fixed: '#001c37'
  on-tertiary-fixed-variant: '#25486f'
  background: '#f7f9ff'
  on-background: '#031d31'
  surface-variant: '#cee5ff'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system is anchored in a "Coastal-Premium" aesthetic, aiming to bridge the gap between a high-end boutique hotel experience and the comfort of a private vacation rental. The visual narrative is defined by **Minimalism** and **Modern Corporate** influences, prioritizing clarity, breathability, and an editorial feel that exceeds the utilitarian nature of mass-market travel platforms.

The target audience is the discerning traveler seeking exclusivity and peace of mind. Every interface element must evoke a sense of calm, reliability, and "airy" luxury. This is achieved through generous whitespace, a strictly disciplined color palette, and high-contrast typography that emphasizes property photography and essential information.

## Colors

The palette is a sophisticated range of blues and grays that mimic the meeting of the sea and sky. 
- **Primary Navy (#2C4A6D)**: Used for high-authority elements, including headers, primary calls-to-action, and grounding structural components like footers.
- **Steel & Sky Blues**: These serve as the interactive layer, guiding the user's eye to links and supporting icons.
- **Success Green (#25D366)**: Reserved exclusively for WhatsApp integration, ensuring the "Book via WhatsApp" or "Inquire" actions are instantly recognizable yet distinct from the primary brand colors.
- **Neutral/Backgrounds**: Use `#FAFBFC` for the global canvas to maintain a cool, clean atmosphere, with pure white cards to create subtle elevation.

## Typography

This design system utilizes a high-contrast typographic pair to establish an editorial rhythm. 

**Playfair Display** is the voice of the brand, used for property titles, hero sections, and section headings. It conveys the "Boutique" heritage. Note that for mobile screens, `display-lg` must scale down to prevent awkward line breaks.

**Inter** provides the functional backbone. It is used for all body copy, property details, and UI labels. Use `label-md` with slight letter spacing and uppercase styling for "Amenities" or "Category" tags to create clear visual hierarchy without increasing font size.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a generous maximum width of 1280px to prevent content from becoming unreadable on ultra-wide monitors. 

- **Desktop**: A 12-column grid with 24px gutters. Use wide 64px outer margins to enhance the "airy" feel.
- **Mobile**: A 4-column grid with 16px gutters and 20px margins. 
- **Vertical Rhythm**: Use a consistent 8px-based spacing system. Property cards should be separated by `stack-lg` (48px) to allow the photography to "breathe." Content within cards should use `stack-sm` (12px).

## Elevation & Depth

To maintain the refined, premium aesthetic, depth is communicated through **Tonal Layers** and **Ambient Shadows** rather than heavy outlines.

- **Level 0 (Background)**: `#FAFBFC`
- **Level 1 (Cards/Surface)**: `#FFFFFF` with a very soft shadow: `0 4px 20px rgba(44, 74, 109, 0.05)`. Note the subtle blue tint in the shadow to harmonize with the primary navy.
- **Level 2 (Hover/Active)**: `0 8px 30px rgba(44, 74, 109, 0.08)`.
- **Borders**: Use a 1px solid border of `#B7C8E3` only for structural separation (e.g., separating the booking widget from the main description) or for secondary input fields.

## Shapes

The shape language is consistently **Rounded**, using a 12px (`0.5rem`) base radius. This softens the formal nature of the navy and serif typography, making the properties feel welcoming.

- **Default (Buttons, Inputs)**: 12px corner radius.
- **Large (Property Cards, Hero Images)**: 16px (`1rem`) corner radius.
- **Pill (Badges, Tags)**: Use a fully rounded (999px) radius for "Featured" or "New" badges.

## Components

### Buttons
- **Primary**: Solid Navy (`#2C4A6D`) with white Inter Semi-bold text. 12px radius.
- **Secondary**: Ghost style with Steel Blue (`#4A72A8`) border and text.
- **WhatsApp CTA**: Solid Green (`#25D366`) with white text and the WhatsApp icon. Position this as a floating action button on mobile or a high-visibility widget on property pages.

### Cards (Property Listings)
Cards must have a 16px radius, a white background, and the Level 1 Ambient Shadow. The property image should have a top-only 16px radius. Details (price, location) use `body-md` and `label-md`.

### Input Fields
Inputs use a subtle Pale Periwinkle (`#B7C8E3`) border, 12px radius, and Inter Medium text. On focus, the border transitions to Steel Blue (`#4A72A8`) with a 2px stroke.

### Lists & Amenities
Use custom icons in Steel Blue. List items should have generous vertical padding (12px) and use `body-md`.

### Calendar/Booking Widget
The booking widget should be pinned/sticky on desktop. Use the white background to pop against the `#FAFBFC` page, with a Primary Navy button for the final "Book Now" action.