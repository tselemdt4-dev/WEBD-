# Build X — Custom PC & Hardware Store

Build X is a responsive, multi-page storefront for a fictional custom PC and hardware retailer. The project showcases pre-built gaming computers and individual PC components, with product discovery, a contact form, and store location information.

## 1. Project Overview & Objectives

The project demonstrates how to build a small static e-commerce-style website using semantic HTML, modern CSS layout techniques, and vanilla JavaScript.

### Objectives

- Present PC products and components in a clear, browsable catalog.
- Provide consistent navigation and visual styling across pages.
- Support desktop, tablet, and mobile screen sizes.
- Add client-side category filtering to the component catalog.
- Validate contact form inputs and provide clear feedback.
- Practice HTML5, CSS Grid, Flexbox, responsive design, and JavaScript DOM interactions.

> The site is a front-end demonstration. It does not process payments, store orders, or send contact form submissions to a server.

## 2. Target Audience & Brand Identity

### Target audience

Build X is designed for PC gamers, people planning a custom build, and customers comparing computer components. The interface aims to make product categories and enquiry options easy to find for both experienced builders and first-time buyers.

### Brand identity: Dark Tech / Cyber Blue

The visual language pairs dark, near-black surfaces with electric-blue accents to suggest a modern gaming and hardware brand. Bright text, muted supporting copy, subtle borders, rounded cards, and restrained blue glows help maintain contrast and hierarchy.

The shared palette and design values are defined as CSS custom properties in `styles.css`, making the theme easier to maintain consistently.

## 3. Architecture & Tech Stack

Build X is implemented with static front-end files and does not require a framework, package manager, or build step.

| Technology | Use |
| --- | --- |
| HTML5 | Semantic page structure, navigation, product content, and forms |
| CSS3 | Theme tokens, typography, component styling, and responsive layouts |
| CSS Grid | Product and category grids, plus multi-column page sections |
| Flexbox | Navigation, grouped controls, and vertically arranged card/form content |
| Vanilla JavaScript (ES6) | Component category filters and contact form validation |

### Responsive design

The stylesheet keeps shared component styles together and groups responsive overrides into one `768px` and one `480px` media query. On smaller screens the header and navigation adapt, grids reflow, and images stay constrained to their cards.

### Project structure

```text
WEBD-/
├── index.html
├── products.html
├── components.html
├── contact.html
├── enquiries.html
├── styles.css
├── js_assets/
│   ├── contact-validation.js
│   ├── enquiry-validation.js
│   ├── product-lightbox.js
│   └── product-filter.js
├── images/
│   ├── gaming-pc-1440p.jpg
│   └── high-end-4k-workstation.jpg
├── CHANGELOG.md
└── README.md
```

## 4. Key Features & Page Layouts

### Home — `index.html`

- Welcome hero with a link to the pre-built PC catalog.
- Category tiles linking to component categories.
- Featured product cards.
- Click-to-open lightbox for product and category images, with keyboard, close-button, and backdrop support.
- Store location information and map section.
- Search metadata targeting South African shoppers looking for gaming PCs and custom computers.
- Descriptive alternative text for product and component imagery.

### PC Catalog — `products.html`

- Pre-built PC cards with images, descriptions, prices, and enquiry links.
- Enquiry links pass the selected PC name to the custom enquiry page as a `product` URL parameter.
- Live search that filters PC cards by product title and reports when there are no matches.
- Product image lightbox for viewing larger images.
- Responsive product grid that adapts to available page width.

### Components Catalog — `components.html`

- Product sections for GPUs, CPUs, RAM, storage, and peripherals.
- Descriptive product image alt text identifies each component and its intended use.
- Search metadata targets South African shoppers looking for individual PC components.
- Category filter buttons, including an **All** option.
- Vanilla JavaScript shows the selected category and updates the active filter button.
- Product image lightbox for viewing larger images.
- Component enquiry links pass the selected product name to the custom enquiry page as a `product` URL parameter.

### Contact — `contact.html`

- Contact form for a customer's name, email, inquiry category, and message.
- Client-side required-field and email validation with inline red error messages styled using `.error-msg`.
- A simulated success notification after valid submission.
- Contact details and store information.

The main navigation on the Home, PCs, Components, and Contact pages links to the custom PC Enquiry page.

### Custom PC Enquiry — `enquiries.html`

- Custom PC quote form with required name, email, primary use case, and budget fields.
- Optional message field for additional build requirements.
- On page load, product enquiry links prefill the message with the selected product and a request for more information, using the decoded `product` URL parameter.
- The success response includes the product name when the enquiry came from a product link.
- Client-side validation checks name length, email format, use case, and budget.
- Inline validation errors appear below invalid fields; valid submissions display a budget-based estimated build time in a green success panel. This is a front-end simulation and does not send an enquiry.

### Store location

The home page includes the store location section and an embedded map. The map requires an internet connection to load.

## 5. Setup & Local Execution

### Requirements

- A modern web browser.
- An internet connection for externally hosted resources such as the embedded map or web fonts.
- No local server or dependency installation is required for basic viewing.

### Run locally

1. Clone the repository or download and extract its ZIP archive:

   ```bash
   git clone https://github.com/tselemdt4-dev/WEBD-.git
   ```

2. Open the project folder.
3. Open `index.html` in a modern browser.

Alternatively, open the repository in Visual Studio Code and use the Live Server extension if installed. This is optional.

## Limitations

- The contact form performs front-end validation only. A backend or form service is needed to deliver submissions.
- Product category filtering is available on the Components page; price and brand filtering are not implemented.
- The site does not include cart, checkout, payment processing, user accounts, or order history.

## Credits

- Typeface: Inter, with system font fallbacks.
- Store map: Google Maps embed.
- Product imagery: project showcase assets.
