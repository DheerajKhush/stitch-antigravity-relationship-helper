# Design System Strategy: The Breathable Interface

This design system is a high-end framework engineered for a relationship growth application. It moves away from the "utility-first" aesthetic of standard apps, instead adopting an editorial, "Soft Minimalism" approach. The goal is to create a digital sanctuary—a space that feels calm, intentional, and premium through the mastery of negative space and tonal depth rather than decorative complexity.

---

## 1. Creative North Star: The Digital Sanctuary
The Creative North Star for this system is **"The Digital Sanctuary."** 

In a relationship context, the UI should never feel clinical or cluttered. We break the standard "template" look by utilizing intentional asymmetry—for example, offsetting headline text from centered body copy—and employing a "High-Air" layout strategy. This means using spacing tokens `12` (4rem) and `16` (5.5rem) more frequently than a typical app to allow content to "breathe" and feel curated.

---

## 2. Color & Surface Philosophy
The palette is built around a sophisticated Sage Green (`primary: #4a655a`), grounded by a Mint-White background (`background: #f6faf6`). 

### The "No-Line" Rule
To achieve a premium, editorial feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined through background color shifts. Instead of drawing a line to separate a header, use a transition from `surface` to `surface-container-low`.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, fine paper sheets. Use the `surface-container` tiers to define importance:
*   **Base Layer:** `surface` (#f6faf6)
*   **Secondary Content:** `surface-container-low` (#eff5f0)
*   **Interactive Cards:** `surface-container-lowest` (#ffffff)
*   **Floating Elements:** Use `surface-bright` with a 60% opacity and a 20px backdrop-blur to create a "Frosted Glass" effect.

### Signature Textures
Avoid flat, dead colors. For hero sections or primary CTAs, apply a subtle linear gradient from `primary` (#4a655a) to `primary-container` (#cbe9db) at a 135-degree angle. This provides a "visual soul" that feels bespoke.

---

## 3. Typography: Editorial Authority
We utilize two distinct typefaces to create a sophisticated hierarchy: **Plus Jakarta Sans** for expression and **Manrope** for utility.

*   **Display & Headlines (Plus Jakarta Sans):** Used for emotional resonance. Use `display-md` (2.75rem) with `-0.02em` letter spacing for a high-end editorial look.
*   **Titles & Body (Manrope):** Chosen for its geometric clarity. Use `body-lg` (1rem) with a generous line-height (1.6) to ensure the "Sanctuary" feeling persists in long-form reading.
*   **Labels:** Use `label-md` (0.75rem) in `on-surface-variant` for metadata. Keep these sparse to avoid "UI noise."

---

## 4. Elevation & Depth
We convey hierarchy through **Tonal Layering** rather than structural lines or heavy shadows.

*   **The Layering Principle:** Place a `surface-container-lowest` card on top of a `surface-container-low` section. The slight shift from `#eff5f0` to `#ffffff` creates a natural lift.
*   **Ambient Shadows:** If an element must float (like a Bottom Sheet), use a shadow with a 40px blur and 4% opacity, using the `on-surface` color (#2b3530) as the shadow tint.
*   **The Ghost Border:** If accessibility requires a container boundary, use the `outline-variant` token at 15% opacity. Never use 100% opaque borders.

---

## 5. Component Guidelines

### Buttons (The Intentional Touch)
*   **Primary:** A gradient fill (Primary to Primary-Container) with `on-primary` text. Use `roundedness-full` for a soft, approachable feel.
*   **Secondary:** No fill. Use a "Ghost Border" (`outline-variant` at 20%) and `primary` text.
*   **Tertiary:** Text-only with `primary` color, utilizing `spacing-2` padding for a large hit area without visual clutter.

### Cards & Lists (The Separation Rule)
**Forbid the use of divider lines.** 
*   Separate list items using `spacing-4` (1.4rem) of vertical white space.
*   For cards, use `surface-container-lowest` with `roundedness-lg` (1rem).

### Input Fields
*   **Style:** Minimalist. No bottom line. Use a `surface-container-high` background with `roundedness-md`.
*   **Focus State:** Transition the background to `surface-container-highest` and add a subtle `primary` ghost border (20% opacity).

### Relationship-Specific Components
*   **Reflection Chips:** Use `secondary-container` with `on-secondary-container` text. These should feel like soft "pillows" of content.
*   **Growth Progress:** Use a thick, 8px stroke for progress indicators using `tertiary-container` as the track and `tertiary` as the indicator.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins (e.g., 24dp left, 40dp right) for headline sections to create an editorial feel.
*   **Do** favor `surface-container` shifts over shadows for 90% of the UI.
*   **Do** use `spacing-16` (5.5rem) between major content sections to prevent "feature crowding."

### Don't:
*   **Don't** use pure black (#000000) for text. Always use `on-surface` (#2b3530) to maintain the soft, sage-tinted atmosphere.
*   **Don't** use 1px solid dividers to separate content. If separation is needed, use a background color change.
*   **Don't** cram multiple CTAs into a single view. One "Sanctuary" view should have one clear intention.

### Accessibility Note:
While we use soft tones, ensure all text on `surface` backgrounds meets a 4.5:1 contrast ratio by utilizing the `on-surface` and `on-primary-container` tokens strictly.