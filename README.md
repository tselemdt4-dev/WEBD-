Build X — Custom PC Building & Hardware Website

Course Project: Web Development (Part 2) Creator: Mbulelo (ST10526706) Repository: https://github.com/tselemdt4-dev/WEBD-.git

1. What is this?

Build X is a multi-page website I made for a fictional custom PC and hardware store. It's meant for people who want to buy pre-built gaming PCs or look at individual parts like CPUs, GPUs, RAM and storage. There's also a page showing the store location and a contact form for people to send in questions.

Main Features
4 pages: index.html, products.html, components.html, contact.html
Dark theme design with blue accent colors, glowing hover effects on cards and buttons, and rounded corners
A working contact form with focus states (the input boxes light up blue when you click into them)
An embedded Google Map on the location section showing the store address
Everything is responsive, so it reshapes itself on tablet and phone screens instead of breaking
2. Design Choices
Font

I used Inter (with system-ui and sans-serif as backups in case Inter doesn't load).

Colors

All the colors are stored as CSS variables at the top of the stylesheet so I could change the whole theme from one place instead of editing every element one by one:

Variable	Hex	What it's for
--bg-dark	
#0b0e14	Main page background
--bg-card	
#161b22	Background for cards and the form box
--bg-header	
#0d1117	Header/nav bar background
--accent-blue	
#007bff	Buttons, links, highlights
--accent-hover	
#0056b3	Darker blue for hover states
--text-main	
#f8fafc	Main text color (almost white)
--text-muted	
#8e9aaf	Grey text for subtitles/descriptions
--border-color	
#21262d	Borders on cards and inputs
--card-glow	rgba(0, 123, 255, 0.15)	The soft blue glow on hover
--radius	8px	Corner rounding used everywhere
Layout

I mainly used CSS Grid for things like the product cards, the category tiles, and the 2-column layout on the contact and location sections. I used Flexbox for smaller stuff like the navbar, the form fields stacking, and footer content.

Responsive Breakpoints
Above 768px: everything shows in multiple columns (grids stay side by side)
768px and below: grids collapse down to fewer columns or stack into a single column, font sizes shrink slightly, and image containers get shorter so nothing feels cramped
480px and below: extra tweaks like hiding the tagline text in the header, full-width buttons for easier tapping, and smaller heading sizes
3. How to Open the Site

You don't need to install anything or run any commands to view this.

Clone the repo or download it as a ZIP and extract it:
git clone https://github.com/tselemdt4-dev/WEBD-.git
Open the folder and double-click index.html to open it in your browser. That's it.

(If you're using VS Code, you can also right-click index.html and use the "Open with Live Server" extension if you have it installed — not required though, opening the file directly works fine too.)

4. File Structure
WEBD-/
│
├── index.html          # Main homepage (Hero, Featured Rigs, Categories, Location & Map)
├── products.html       # Pre-built gaming rigs and workstations page
├── components.html     # Hardware components catalog (GPUs, CPUs, RAM, Storage, Peripherals)
├── contact.html        # Contact details, interactive form, and map integration
├── styles.css          # Central stylesheet (CSS variables, Grid/Flexbox layouts, Media queries)
├── CHANGELOG.md         # Dated record of changes made during development
│
└── images/             # Image asset directory
    ├── buildx.png
    ├── gpufinal.jpg
    ├── cpu.jpg
    ├── ram.jpg
    ├── ssd.jpg
    ├── pcbuildfinal.jpg
    ├── peripherals.jpg
    ├── pccase1.jpg
    ├── download.jpe
    └── overkill.jpe
5. Pages
index.html — homepage with category tiles, featured PCs, and store location
products.html — full list of pre-built PCs
components.html — individual hardware parts by category
contact.html — contact form and store info
6. Changelog

See CHANGELOG.md for the full, dated record of changes made during development.

7. Known Limitations
The contact form doesn't actually send anywhere yet — it's frontend only, so clicking "Send Message" won't email anyone. I'd need to hook it up to a backend or a service like Formspree to make it actually work.
Tested mainly in Chrome, should work fine in other modern browsers too since I didn't use anything too fancy.
8. What I'd Add With More Time
Real product filtering (by price, brand, category)
A working backend for the contact form
A shopping cart / checkout flow
User accounts and order history
9. Credits
Font: Google Fonts — Inter
Map Integration: Google Maps Embed API
Icons & Hardware Imagery: Product showcase assets used for academic project purposes
10. References

Google Fonts, 2026. Inter. [online] Available at: https://fonts.google.com/specimen/Inter [Accessed 18 September 2026].

Google, 2026. Maps Embed API. [online] Available at: https://developers.google.com/maps/documentation/embed/get-started [Accessed 18 Septe

## 11. Project Planning Overview

### Goals and Objectives
The goal was to build a responsive, multi-page hardware/PC store website with a clear dark tech visual identity, working navigation between all pages, a contact form, and an embedded map showing the store location — while practicing CSS Grid, Flexbox, media queries, and semantic HTML5 structure.

### Sitemap
Home (index.html)
├── PCs (products.html)
├── Components (components.html)
│ ├── #gpu
│ ├── #cpu
│ ├── #ram
│ ├── #storage
│ └── #peripherals
└── Contact (contact.html)

### Design Aesthetic
Dark, "tech" themed interface — near-black backgrounds, electric blue accents, glowing hover states on cards and buttons, and rounded corners throughout. Inter was chosen as the typeface for a clean, modern feel that suits a hardware/gaming audience.

### Wireframes / Layout Planning
No separate wireframe diagrams were drawn up front — layout decisions (hero banner, category grid, product grid, 2-column contact/location sections) were planned and adjusted directly in HTML/CSS during development, then refined based on how they rendered at different breakpoints.

### Technical Requirements
- HTML5, CSS3 (Grid, Flexbox, custom properties, media queries)
- No JavaScript framework or build tools — plain static files
- Google Maps Embed API for the location section
- Google Fonts (Inter)

### Timeline
Built and refined over several sessions across September 2026 — starting with the homepage and core styling, then the contact page and form, then filling in the previously-missing PCs and Components pages, followed by responsive refinements and documentation.

### Budget
As an academic project with no real business behind it, there's no actual monetary budget — hosting would be free-tier (e.g. Netlify or GitHub Pages), and all assets used were either self-sourced images or free stock photography.