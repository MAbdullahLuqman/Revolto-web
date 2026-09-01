# Revoloto Full Agency Website

## Goal
Build a complete, multi-page B2B lead-generation agency website for Revoloto with the breadth and conversion flow of Belkins, while using original Revoloto branding, copy, imagery, and implementation rather than duplicating Belkins’ proprietary content or assets.

## Scope

### 1. Shared website system
- Create a responsive header with desktop mega menus, mobile navigation, sticky behavior, and a persistent “Get a quote” action.
- Create reusable page sections for hero areas, proof/logo strips, metrics, process steps, testimonials, case studies, FAQs, resources, and closing calls to action.
- Build a complete footer with company, services, industries, resources, contact, social, and legal links.
- Use a restrained neutral visual system inspired by the reference: oversized outcome-led typography, one strong Revoloto accent, generous white space, soft geometric background details, and subtle motion.
- Add route-specific SEO metadata, semantic headings, image alt text, responsive behavior, keyboard support, and reduced-motion support.

### 2. Core routes
- Home
- Services hub
- Industries hub
- Revoloto approach
- Pricing
- About
- Careers
- Awards
- Testimonials
- Contact / quote request

### 3. Service pages
Create reusable but individually populated pages for:
- Appointment setting
- Cold email outreach
- Cold calling
- LinkedIn lead generation
- Outsourced SDR
- Sales development
- Demand generation
- Account-based marketing
- Lead nurturing
- Lead research
- CRM consulting
- Sales enablement
- Email deliverability consulting
- Enterprise lead generation
- SMB lead generation
- Startup lead generation

Each page will include its own hero, outcomes, process, deliverables, proof, related case studies, FAQ, and lead-form CTA.

### 4. Industry and methodology pages
- Industry pages for construction, consulting, finance, and manufacturing, plus an extensible industry template.
- Dedicated methodology pages for the overall Revoloto approach, SDR execution, research, content, deliverability, and account management.

### 5. Resources and proof
- Resources hub
- Blog index and article template
- Case studies index and case study template
- Data studies
- Podcasts and podcast detail template
- Webinars
- Lead-generation training page
- ROI calculator with interactive inputs and clearly explained estimates
- Related-content navigation and lead-capture calls to action across resource pages

### 6. Firebase lead funnel
- Build a detailed quote form with contact, company, goals, services, budget/timeline, consent, validation, loading, success, and failure states.
- Submit leads through a server-side boundary to the user’s Firebase project so private credentials never reach the browser.
- Add basic anti-spam protections, server-side validation, timestamps, source-page attribution, and duplicate-submit prevention.
- Provide a polished confirmation state and preserve entered data when recoverable errors occur.

### 7. Legal and utility pages
- Privacy policy
- Terms of use
- Cookie policy
- Accessibility statement
- Anti-modern-slavery policy
- Branded not-found and error states

## Content and assets
- Use the Revoloto copy, claims, client logos, testimonials, case studies, team details, contact information, social links, and legal text supplied by the user.
- Where supplied content is incomplete, use clearly identified placeholders rather than inventing clients, awards, testimonials, or performance claims.
- Produce an original Revoloto logo treatment and visual asset system only if those assets are not supplied; do not reuse Belkins branding or imagery.

## Delivery approach
1. Establish the Revoloto design system, shared navigation/footer, content model, and route inventory.
2. Build the home page and reusable service, industry, methodology, case-study, article, and resource templates.
3. Populate every route and verify that all navigation and footer destinations resolve.
4. Connect and validate the Firebase quote workflow.
5. Test desktop and mobile layouts, menus, forms, calculator behavior, accessibility, metadata, and representative routes from every template family.

## Technical details
- Keep TanStack Start’s file-based routing and create a distinct route for each shareable page.
- Use Tailwind v4 semantic tokens in the global design system rather than hardcoded component colors.
- Model repeated content in typed local data modules so the large route set remains consistent and maintainable.
- Use Firebase only for the requested lead backend; credentials/configuration will be added through the appropriate secure project configuration once provided.
- Implement long-form resource types with reusable dynamic-route templates rather than duplicating page code.

## Inputs needed during implementation
- Revoloto logo/brand assets and preferred accent color, if already defined.
- Final copy or source documents for each page family.
- Approved client logos, testimonials, case-study metrics, awards, and team imagery.
- Business contact details, social links, legal entity information, and privacy/legal text.
- Firebase project configuration and the preferred Firestore collection or existing lead-ingestion endpoint.

## Acceptance criteria
- Every agreed public navigation and footer link opens a complete Revoloto page with unique metadata.
- No Belkins copy, logos, client marks, awards, or proprietary imagery are shipped.
- The site is responsive and visually coherent across desktop and mobile.
- The quote form validates input, stores a test lead in Firebase, handles errors safely, and exposes no private credentials.
- The ROI calculator and all menus, accordions, carousels, filters, and forms work as presented.