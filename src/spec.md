# Specification

## Summary
**Goal:** Build a high-end, cinematic black-and-white multi-page marketing website for Vertex Media with consistent design, navigation, portfolio visuals, and persisted Contact/Join submissions.

**Planned changes:**
- Create a cohesive site-wide design system (typography, spacing, buttons, grid) with a bold, minimal black/white aesthetic and confident professional tone.
- Implement routing and shared layout (header navigation + footer) for Home, Services, About, Join Our Network, and Contact pages, including social link placeholders and nationwide positioning in the footer.
- Build the Home page with a strong hero headline, the exact tagline “From Coast to Coast, We Capture It All”, above-the-fold CTAs (“Book a Shoot”, “Join the Network”), an authority section, services overview, and a portfolio preview using grayscale visuals.
- Build the Services page listing: Sports Media Production, Athlete Highlights, Brand Content, Event Coverage, Monthly Retainers, Nationwide Contributor Network, with concise national-agency copy.
- Build the About page emphasizing coast-to-coast vision, structured systems/quality control, and built-for-growth positioning.
- Build the Join Our Network page with curated-approval/national-opportunity messaging and an application form (name, email, location/market, specialties, portfolio link, message) with a success confirmation state.
- Build the Contact page with an inquiry form (name, email, company/organization optional, project type, desired date optional, budget range optional, message), nationwide operations messaging, social links, and a success confirmation state.
- Add backend canister persistence (Motoko) for Join applications and Contact inquiries including timestamps, and wire frontend form submissions to canister methods.
- Add and render static generated image assets from `frontend/public/assets/generated` for the Home hero background, portfolio thumbnails, and a “Vertex Media” wordmark.

**User-visible outcome:** Visitors can navigate a cohesive, cinematic black-and-white Vertex Media site, view services/about/portfolio preview, and submit Contact inquiries or Join Network applications with on-page success confirmation.
