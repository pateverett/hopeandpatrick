# Claude Code Prompt — RSVP & Registry Pages

## Prompt

Add two new standalone pages to my existing Jekyll wedding site: `/rsvp` and `/registry`. The rest of the site is already built — match its existing layout, palette, and typography exactly (stone `#EDE8E0` background, ink `#22262E` text, lilac `#C9B8D8` accent used sparingly, brass `#A98B57` secondary accent; Cormorant Garamond for headings, Inter for body text).

**Requirements:**
- These pages should NOT be linked from the main nav. They should only be reachable by direct URL (`/rsvp` and `/registry`) — I'm testing them before deciding whether to make them public.
- Each page is simple: an eyebrow label, a heading, one short line of body copy, and a single button-style CTA link.
- The CTA link points to Zola (external) and must open in a new tab with `target="_blank" rel="noopener noreferrer"`.
- Style the CTA as a button consistent with the site's existing button/link treatment (brass or ink background, generous letter-spacing, uppercase small text — match whatever pattern already exists elsewhere on the site for buttons/CTAs; if none exists yet, use brass background, stone text, uppercase, letter-spacing 0.1em).
- Use the recurring dentil/cornice motif SVG (already used elsewhere on the site as a section divider) above or below the CTA to keep these pages visually consistent with the rest of the site, not bare.
- Fully responsive, keyboard-focusable CTA with visible focus state.

---

## Page content

### `/rsvp`

- Eyebrow: RSVP
- Heading: We Hope You'll Join Us
- Body: Please let us know if you'll be joining us — you'll be taken to our RSVP page to respond.
- CTA button text: RSVP Here →
- CTA link: `https://www.zola.com/wedding/patrickandhope2027/rsvp` (new tab)

### `/registry`

- Eyebrow: Registry
- Heading: Registry
- Body: Thank you for thinking of us — you'll be taken to our registry to browse.
- CTA button text: View Registry →
- CTA link: `https://www.zola.com/wedding/patrickandhope2027/registry` (new tab)

---

## Notes
- Keep these pages excluded from the nav include/loop — confirm whichever partial handles nav rendering doesn't pick these up automatically (e.g. if nav is auto-generated from `_pages` front matter, add something like `nav_exclude: true` and make sure the nav template respects it).
- Once the Zola integration is confirmed working end-to-end, next step will be deciding whether to add these to the nav — not part of this task.
