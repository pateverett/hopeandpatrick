# Hope & Patrick Wedding Website — Claude Code Handoff

## Prompt to give Claude Code

Build a static wedding website using Jekyll (same stack as my existing site at patrickeverett.com, hosted on GitHub Pages + Route53). This is a single-page site with anchor-linked navigation and seven sections: Home, Schedule, Gallery, Travel, FAQ, RSVP, and Registry.

**Structure & behavior:**
- Home, Schedule, Gallery, Travel, and FAQ are linked in the main nav.
- RSVP and Registry pages should exist and be fully built, but NOT linked from the nav — reachable only by direct URL for now, since I'm testing a Zola integration for RSVP/registry functionality before deciding whether to link them publicly.
- Home section: asymmetric hero — photo bleeds full-height on one side (I'll supply the image), names/date/venue/countdown left-aligned on the other side. Not centered.
- Countdown timer counts down to May 22, 2027, 6:00 PM (JS, no external library needed).
- A recurring signature motif — a slim dentil/cornice line (SVG, provided below) — appears as the divider between major sections instead of a plain hairline rule.
- Fully responsive; on mobile, the asymmetric hero stacks vertically (image on top, text below).
- Respect prefers-reduced-motion for any animation/transitions.

**Design tokens:**
- Colors: stone `#EDE8E0` (background), ink `#22262E` (text/dark), lilac `#C9B8D8` (accent, used sparingly — small rules, single motif accent, never a full background wash), brass `#A98B57` (secondary accent — eyebrows, dividers, dentil lines)
- Fonts: 'Cormorant Garamond' (weights 400/500/600) for display/headings, 'Inter' (weights 300/400/500/600) for body and UI text — both via Google Fonts
- Type treatment: large serif display type for names/headings, light-weight sans-serif for body copy, wide letter-spacing on small uppercase labels (eyebrows, nav, countdown labels)
- Lilac usage rule: accent only — thin rules under headings, one accent block in the motif — never a section background wash

**Signature motif (SVG, use as-is or adapt):**
```html
<svg viewBox="0 0 220 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="4" x2="220" y2="4" stroke="#A98B57" stroke-width="1"/>
  <line x1="0" y1="9" x2="220" y2="9" stroke="#A98B57" stroke-width="1"/>
  <g fill="#A98B57">
    <rect x="6"  y="9" width="6" height="7"/>
    <rect x="20" y="9" width="6" height="7"/>
    <rect x="34" y="9" width="6" height="7"/>
    <rect x="48" y="9" width="6" height="7"/>
    <rect x="62" y="9" width="6" height="7"/>
    <rect x="76" y="9" width="6" height="7"/>
    <rect x="90" y="9" width="6" height="7"/>
    <rect x="104" y="9" width="6" height="7" fill="#C9B8D8"/>
    <rect x="124" y="9" width="6" height="7"/>
    <rect x="138" y="9" width="6" height="7"/>
    <rect x="152" y="9" width="6" height="7"/>
    <rect x="166" y="9" width="6" height="7"/>
    <rect x="180" y="9" width="6" height="7"/>
    <rect x="194" y="9" width="6" height="7"/>
    <rect x="208" y="9" width="6" height="7"/>
  </g>
</svg>
```

**Reference mockups:** I have three HTML preview files from our design process (palette-font-preview.html, bpl-palette-preview.html, refined-direction-preview.html) showing the progression — the last one, refined-direction-preview.html, is the closest to final and should be the primary visual reference for the hero layout, motif placement, and typography treatment.

Use the content below for each section. Treat hotel booking links/codes as placeholders (TODO comments) since I don't have them yet.

---

## Content

### Home (hero)
- Eyebrow: The Boston Public Library
- Names: Hope & Patrick
- Date/venue line: Saturday, May 2027 · Copley Square, Boston
- Countdown target: May 22, 2027, 6:00 PM

### Schedule
**Section heading:** May 21–22, 2027

**Welcome Party**
Friday, May 21 · 7:00–10:00 PM
Bistro du Midi
*Semi-formal*

Join us the evening before the wedding for a relaxed night of drinks and dinner overlooking the Public Garden — a chance to catch up before the weekend gets underway.

**Wedding Day**
Saturday, May 22 · 6:00–11:00 PM
Boston Public Library
*Black tie*

Ceremony and reception, indoors and out, at the Boston Public Library in Copley Square. Please plan to arrive by 6:00 PM.

### Gallery
Placeholder grid — I'll supply photos.

### Travel
**Section heading:** Travel & Accommodations

**Room Blocks**
We've arranged discounted rooms at three hotels, all within walking distance of the wedding weekend's events:
- Raffles Boston — TODO: booking link/code
- Fairmont Copley Plaza — TODO: booking link/code
- Boston Marriott Copley Place — TODO: booking link/code

**Getting to Boston**
Fly into Boston Logan International Airport (BOS). From there:
- **Rideshare or taxi** — Uber, Lyft, and taxis run continuously from Logan into the city, about 15–20 minutes to Back Bay.
- **Back Bay Shuttle** — a direct shuttle service is also available from the airport to Back Bay.

**By Train**
Amtrak service into Back Bay Station puts you within walking distance of all three hotels.

**By Car**
Boston is easily reached by car via I-90 and I-93. All three hotels offer valet or nearby parking.

### FAQ
**Section heading:** Frequently Asked Questions

**What's the dress code?**
Semi-formal for the welcome party on Friday, black tie for the wedding on Saturday.

**Will the wedding be indoors or outdoors?**
Both — the ceremony and reception will move between indoor and outdoor spaces at the Library, so we'd suggest dressing for the weather as well as the occasion.

**What time should we arrive?**
Please plan to arrive by 6:00 PM on Saturday so we can begin promptly.

**Are kids welcome?**
We love your little ones, but our wedding will be an adults-only celebration. We hope this gives you an opportunity for a night off to celebrate with us.

### RSVP
Placeholder page (not linked in nav) — used to test Zola RSVP integration. Simple heading + link/embed placeholder to the Zola RSVP page.

### Registry
Placeholder page (not linked in nav) — used to test Zola registry integration. Simple heading + link/embed placeholder to the Zola registry page.

---

## Still outstanding (fill in before final launch)
- Hero photo and gallery photos
- Hotel booking links/codes for all three room blocks
- Final Zola RSVP/registry URLs once that site is set up
- "Our Story" section content (not drafted yet)
- Decision on whether RSVP/Registry get added to nav once Zola integration is confirmed working
