Project Changelog — Build X Web Development (Part 2)
All notable changes, structural updates, visual refinements, and Part 1 feedback fixes implemented in this project are documented below.


1. Structural & Semantic HTML5 Improvements
Store Location & Contact Section: Added a new semantic <section class="location-section"> on index.html featuring store hours, contact numbers, street address, and an action button to open Google Maps.

Embedded Google Map Component: Integrated an interactive Google Maps <iframe> widget dynamically embedded into a dedicated .location-map wrapper.

Grid Layout Fixes: Fixed unclosed <div> container syntax errors around .location-info and .location-container to maintain valid document tree hierarchy and prevent layout collapse.

Semantic Tagging: Replaced generic container wrappers across product blocks with standard semantic tags (<header>, <nav>, <main>, <section>, <article>, <footer>).

2. CSS Architecture & Layout Systems
2-Column CSS Grid Layout: Implemented display: grid; grid-template-columns: 1fr 1fr; for the store location block to cleanly align contact text on the left and the map frame on the right.

Responsive Image Containment: Replaced object-fit: cover with object-fit: contain and added inner padding to product card image headers (.card-image) to prevent image clipping and frame overflow.

Dark Tech Visual Styling: Added themed borders (--border-color), box shadows, and hover glow effects (--card-glow) using CSS variables across category tiles and map wrappers.

Media Query Breakpoints: Updated media queries (@media (max-width: 768px) and @media (max-width: 480px)) to automatically collapse 2-column store layouts and 3-column category grids into fluid, single-column stacks on tablet and mobile viewports.

3. Media & Asset Management
Component Category Assets: Linked dedicated high-resolution images for hardware categories (GPU, CPU, RAM, SSD/HDD, Gaming PCs, Peripherals).

Overlay Effects: Added dark tint overlays (.category-overlay) over category tiles with zoom transition effects (transform: scale(1.08)) on hover.

Fallback Styling: Applied dark backdrop fills (#000000 / var(--bg-card)) behind contained product photos so image edges blend smoothly into the dark interface background.

4. Interactive & Usability Refinements
External Link Behavior: Configured external links (Google Maps navigation) with target="_blank" and rel="noopener noreferrer" attributes for enhanced user security and navigation.

Hover & Focus States: Styled action buttons (.btn-primary, .btn-secondary) with distinct hover background colors, scale transitions, and neon glow box-shadows.


5.  Bug Fixes
Image Path Correction: Fixed broken site logo caused by a folder name mismatch (`_images` vs the `images` path referenced in HTML).

6. Content & Structural Additions
New Pages Built: Created `products.html` (full pre-built PC catalog) and `components.html` (hardware parts by category, with anchor IDs matching the homepage's category tile links), both previously referenced in navigation but not yet built.

Real Store Data: Replaced placeholder store address and phone number with Evetech's actual Centurion showroom location and Place ID-based map embed for accurate geocoding.

Contact Page Update: Added a "Showroom" info item with address and a "Get Directions" link to the `.contact-info-card`.

7. Responsive Design Enhancements
Typography Scaling: Added font-size adjustments for headings, card titles, and prices within existing media queries, previously only layout and navigation adjusted on smaller screens.

Image Scaling: Added height adjustments for `.category-card`, `.card-image`, and `.location-map` at both breakpoints to keep proportions consistent on tablet and mobile.

8. Content Reorganization
Homepage Teaser Rework: Reworded the homepage's "Featured Rigs" section into "A Few of Our Builds" with a "View All PCs →" link to `products.html`, reducing content duplication between the homepage and the full PCs catalog.