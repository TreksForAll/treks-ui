# Treks for All – Copilot Instructions

## Section Headings

**Always use the shared `SectionTitle` component** for every section heading across all pages and components. Never write custom heading HTML with inline border/color styles — always use `SectionTitle`.

Import path: `../ui/SectionTitle` (adjust relative path as needed).

### Rules

- **Left-aligned by default** — always pass `align="left"` unless the design explicitly requires centering.
- **Yellow heading** — the `title` prop renders in `#e0aa04` (yellow) with an uppercase bold style. Do not override this color.
- **Green subheading** — the `subtitle` prop renders in `#377d87` (teal/green) in uppercase. Use this for secondary lines beneath the title.
- **Light mode for dark backgrounds** — pass `light={true}` when the section background is dark (e.g. `bg-[#18363a]`). This switches subtitle and description text to white/gray.
- **Description** — use the optional `description` prop for a short body paragraph below the heading block.

### Component API

```tsx
<SectionTitle
  title="SECTION HEADING"        // Yellow, uppercase, bold — required
  subtitle="Secondary line"      // Teal/green uppercase — optional
  description="Body paragraph."  // Normal text below — optional
  align="left"                   // "left" | "center" | "right" — default: "left"
  light={false}                  // true when on dark green background
  className=""                   // Additional wrapper classes
/>
```

### Examples

```tsx
// Standard left-aligned section
<SectionTitle
  title="OUR APPROACH"
  subtitle="Inclusive by design"
  align="left"
/>

// On a dark background (bg-[#18363a])
<SectionTitle
  title="WHY TREKS FOR ALL"
  subtitle="What makes us different"
  align="left"
  light={true}
/>

// With a description paragraph
<SectionTitle
  title="UPCOMING ADVENTURES"
  subtitle="Join us on the trail"
  description="Explore our upcoming trips — each designed for all ability levels."
  align="left"
/>
```

## Brand Colors

| Usage | Color |
|---|---|
| Section heading (title) | `#e0aa04` (yellow) |
| Subheading (subtitle) | `#377d87` (teal green) |
| Dark section background | `#18363a` (dark green) |
| Medium green accent | `#214b51` |
| Pale teal background | `#e8f5f6` |
| Accent border / CTA | `#e0aa04` (yellow) |

## Section Layout Conventions

- Section backgrounds alternate between: white/`#f0f9fa` (light) and `#18363a` (dark green)
- Cards on dark green sections must use **white or light backgrounds** (e.g. `bg-white/95`), not darker green shades
- Yellow left border pattern for inline callout blocks: `border-l-[5px] border-[#e0aa04] pl-4`
- CTA buttons: yellow background `bg-[#e0aa04]` with dark text `text-[#18363a]`
