# Design System Strategy: Kinetic Industrialism

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Overclocked Machine."** 

This system rejects the "softness" of modern SaaS web design in favor of a high-velocity, industrial-tech aesthetic. It is designed to feel like a high-performance terminal—raw, precise, and unapologetically powerful. We achieve a "High-End Editorial" feel by combining the brutalist rigidity of 0px border radii with sophisticated tonal layering and "Saturating the Metal" color transitions. 

By breaking the standard grid with intentional asymmetry—such as technical data sidebars overlapping hero imagery and oversized, high-contrast display type—we create a digital experience that feels less like a website and more like a proprietary command center.

## 2. Colors & Surface Architecture
The palette is rooted in deep, atmospheric slates, punctuated by the high-frequency energy of electric cyan (`primary`) and neon lime (`secondary`).

*   **The "No-Line" Rule:** Standard 1px borders are strictly prohibited for defining sections. Instead, structural boundaries are defined through background shifts. Transition from `surface` to `surface_container_low` to mark a new content block. This creates a seamless, "milled from a single block" industrial feel.
*   **Surface Hierarchy & Nesting:** Treat the UI as a physical stack of components.
    *   **Base:** `background` (#10141a) for the deepest level.
    *   **Sections:** `surface_container_low` for content grouping.
    *   **Interactive Cards:** `surface_container_highest` to bring critical data to the foreground.
*   **The "Glass & Gradient" Rule:** To simulate "Saturating the Metal," use semi-transparent `surface_variant` with a heavy `backdrop-filter: blur(20px)`. Main CTAs and high-performance metrics should utilize a linear gradient from `primary` (#e9feff) to `primary_container` (#00f5ff) to create a "glowing filament" effect.

## 3. Typography: Precision Editorial
We use a dual-font strategy to balance industrial character with technical readability.

*   **Display & Headlines (Space Grotesk):** This is our "Character" typeface. Its geometric quirks and sharp terminals lean into the industrial-tech vibe. Use `display-lg` for hero statements with tight letter-spacing (-0.02em) to create an authoritative, editorial impact.
*   **Body & Technical Data (Inter):** For high-density metrics and descriptions, Inter provides the "Standard Operating Procedure" clarity required for a technical tool. 
*   **Labeling:** Use `label-md` in all-caps with increased letter-spacing (0.1em) for metadata and small technical callouts, mimicking the etched labels on hardware.

## 4. Elevation & Depth
Depth is not achieved through shadows, but through **Tonal Layering** and **Luminance**.

*   **The Layering Principle:** Physicality is implied by stacking. A `surface_container_highest` element sitting on a `surface` background provides enough contrast to imply elevation without a single drop shadow.
*   **Ambient Glows:** In place of traditional shadows, use "Glows" for active states. Apply a soft, 12px blur of the `surface_tint` (#00dce5) at 15% opacity behind primary elements to simulate light emitting from a screen.
*   **The "Ghost Border" Fallback:** Where separation is critical but a background shift is too heavy, use a "Ghost Border." This is a 1px stroke using `outline_variant` (#3a494a) at 20% opacity. It should feel like a faint laser-etching, not a box.
*   **0px Rigidity:** All containers, buttons, and inputs must maintain a **0px border-radius**. This reinforces the "Metal" aesthetic—hard edges, precision machining, no wasted space.

## 5. Components

### Buttons
*   **Primary:** Solid `primary_container` background with `on_primary_container` text. 0px corners. High-contrast hover state: background shifts to `primary_fixed`.
*   **Secondary:** Ghost Border style (`outline_variant` at 20%). On hover, the border "energizes" to `secondary` (#edffe1) with a 4px outer glow.
*   **Tertiary:** Text-only, using `label-md` in `primary`.

### Performance Chips & Data Viz
*   **Chips:** Use `surface_container_high` backgrounds. For "Active" or "Live" metrics, add a 4px pulsing dot of `secondary_fixed` (#79ff5a).
*   **Data Bars:** Backgrounds use `surface_container_lowest`. The "fill" uses a gradient from `primary` to `tertiary_fixed` to show velocity and throughput.

### Input Fields
*   **Style:** Underline-only or subtle `surface_container_low` fills. Avoid full boxes. 
*   **States:** On focus, the bottom border "saturates" into a 2px `primary` line. Helper text must use `label-sm`.

### Cards & Lists
*   **Structure:** Absolutely no divider lines. Separate list items using 16px of vertical space or a subtle alternating background shift between `surface_container_low` and `surface_container`.
*   **Glass Cards:** For Vajra overlays, use 80% opacity `surface_container_highest` with a `backdrop-filter: blur(12px)` to allow the "Metal" background textures to bleed through.

## 6. Do's and Don'ts

### Do:
*   **Use Grids as a Texture:** Overlay a subtle 24px square grid pattern at 3% opacity over the `background` to reinforce the "Technical Landing Page" feel.
*   **Embrace Asymmetry:** Offset your headline text from your body copy to create a sophisticated, non-template look.
*   **Saturate on Interaction:** Use the `primary` and `secondary` colors sparingly in the static UI, but let them "glow" and "saturate" when the user hovers or interacts.

### Don't:
*   **Don't use Rounded Corners:** Even a 2px radius will break the industrial "Saturating the Metal" aesthetic. Keep it at 0px.
*   **Don't use Grey Shadows:** Shadows should be non-existent or tinted with the `surface_tint` to look like light, not dirt.
*   **Don't Overcrowd:** While the aesthetic is industrial, "High-End" requires breathing room. Use generous margins (`48px+`) between major sections to let the high-contrast typography breathe.