

## Typewriter Animation for Our Story Page

Add a beautiful typewriter-style animation to the Our Story page where text appears character by character as the user scrolls or as sections come into view.

### Approach

1. **Create a reusable `TypewriterText` component** (`src/components/TypewriterText.tsx`)
   - Accepts text content as a prop
   - Uses `useState` and `useEffect` to reveal characters one by one
   - Includes a blinking cursor at the end while typing
   - Configurable typing speed

2. **Create a `FadeInSection` wrapper component** (`src/components/FadeInSection.tsx`)
   - Uses Intersection Observer to detect when a section scrolls into view
   - Triggers the typewriter animation only when the section becomes visible
   - Each section animates independently as the user scrolls down

3. **Update `src/pages/OurStory.tsx`**
   - Wrap each section heading in a typewriter component (faster speed)
   - Wrap each paragraph in a typewriter component (slightly faster speed)
   - Stagger the animations so the heading types first, then the paragraph follows
   - Add a subtle fade-in for each section container

4. **Add CSS for the blinking cursor** in `src/index.css`
   - A simple blinking pipe `|` cursor animation using `@keyframes`

### Visual Effect
- Page loads with empty sections
- As each section enters the viewport, the heading types out first
- Once the heading finishes, the paragraph begins typing
- A blinking cursor appears at the typing position
- Cursor disappears once a section finishes typing

### Technical Details
- No new dependencies needed -- pure React + CSS
- Intersection Observer API for scroll-triggered activation
- `requestAnimationFrame`-friendly interval for smooth character reveal
- Typing speed: ~30ms per character for headings, ~15ms for paragraphs

