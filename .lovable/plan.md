

# Dino Initiative — Website Plan

## Design System
- **Mobile-first**, clean editorial aesthetic with generous whitespace
- Black text on white background, one soft accent color (a muted teal/sage) for links and buttons only
- Large, calm typography with comfortable line-height
- Max-width reading container (~640px) with generous vertical spacing
- No gradients, no heavy illustrations, no decorative cards
- Fully accessible: semantic HTML, good contrast, keyboard navigation

## Global Layout
- **Header**: Left-aligned "Dino Initiative" site name, inline nav links (Resources, Hotlines, Our Story, Get Involved), subtle "Get help now" button linking to Hotlines — sticky, minimal, present on every page
- **Footer**: Links to Privacy and Safety, simple copyright line

## Pages

### 1. Home
- Hero with large headline: *"A gentle place to check in."* and a short mission subhead
- Two primary CTA buttons: Resources and Hotlines
- Three-line value statement section (plain text, no cards)
- Bordered crisis note with link to Hotlines
- Minimal single-field email signup form: "Join the early supporters list"

### 2. Resources
- Simple list of six topics: Anxiety, Low mood, Stress, Loneliness, Sleep, Grief
- Each topic is an expandable accordion revealing:
  - 3 coping tools
  - 1 journaling prompt
  - "When to reach out" guidance

### 3. Hotlines
- Urgent intro paragraph
- Country selector dropdown
- Hotline entries as clean text blocks (name, phone, text/chat availability, hours) — placeholder data for a few countries

### 4. Our Story
- Clean narrative layout with section headings and short paragraphs telling the story of Dino Initiative

### 5. Get Involved
- Three minimal forms stacked vertically:
  - **Supporter email** (single field)
  - **Partner inquiry** (name, org, email, message)
  - **Volunteer interest** (name, email, skills checklist)

### 6. Privacy and Safety
- Clear privacy statements in plain language
- Disclaimer that Dino Initiative does not provide medical advice or diagnosis

## Technical Notes
- All forms are frontend-only (no backend) — form submissions show a toast confirmation
- All data is static/hardcoded placeholder content
- React Router for page navigation
- Accordion component for Resources topics

