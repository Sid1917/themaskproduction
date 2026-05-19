# The Mask Production Engineering Constitution

## Project Vision

The Mask Production is a premium cinematic digital platform focused on:
- high-end storytelling
- premium courses
- secure digital content delivery
- immersive animations
- modern cinematic UI/UX
- scalable production architecture

The platform must feel luxurious, cinematic, modern, smooth, and professional.

All engineering and design decisions must support:
- scalability
- maintainability
- performance
- security
- premium user experience

---

# Core Engineering Principles

## 1. Architecture First

All features must follow scalable modular architecture.

Avoid:
- monolithic files
- deeply nested logic
- duplicated code
- tightly coupled components

Prefer:
- reusable components
- feature-based organization
- hooks abstraction
- utility separation
- centralized configuration

---

## 2. Component Rules

React components must:
- be modular
- be reusable
- follow single responsibility principle
- remain under 250 lines whenever possible

Separate:
- UI
- animations
- business logic
- API calls
- state management

Use:
- custom hooks
- utility functions
- constants files

---

## 3. UI/UX Principles

The website must maintain:
- cinematic visuals
- premium animations
- smooth transitions
- luxury aesthetic
- minimal but impactful design

Use:
- Framer Motion
- TailwindCSS
- smooth scroll experiences
- subtle hover effects
- premium typography
- layered depth

Avoid:
- cluttered UI
- generic layouts
- harsh colors
- abrupt animations

All animations must feel intentional and smooth.

---

## 4. Performance Requirements

All generated code must prioritize performance.

Requirements:
- lazy loading
- route-based code splitting
- optimized rendering
- minimal unnecessary re-renders
- optimized animations
- responsive media handling

Avoid:
- unnecessary state
- excessive useEffect calls
- unoptimized animations
- large component trees

---

## 5. Security Requirements

The platform contains premium paid content.

All implementations must prioritize security.

Mandatory requirements:
- JWT authentication
- protected routes
- secure API communication
- environment variable protection
- token expiration handling
- secure video delivery
- anti-piracy considerations
- role-based access control

Never expose:
- secrets
- API keys
- admin credentials
- private endpoints

Premium media content must never be directly exposed publicly.

---

## 6. Code Quality Standards

All generated code must:
- be production-ready
- follow clean code principles
- use meaningful naming
- include proper folder organization
- avoid dead code
- avoid console logs in production
- avoid inline hardcoded values

Prefer:
- constants files
- reusable utilities
- configuration-driven systems

---

## 7. Styling Standards

Use:
- TailwindCSS only

Avoid:
- inline styles
- inconsistent spacing
- inconsistent sizing
- magic numbers

Maintain:
- spacing consistency
- typography consistency
- responsive layouts
- mobile-first design

---

## 8. Responsive Design Requirements

All pages must be:
- mobile responsive
- tablet responsive
- desktop optimized
- ultra-wide compatible

Animations and layouts must adapt smoothly across devices.

---

## 9. File & Folder Structure Rules

Follow feature-based scalable structure.

Preferred structure:

src/
├── components/
├── features/
├── pages/
├── hooks/
├── services/
├── utils/
├── constants/
├── config/
├── layouts/
├── routes/
├── contexts/

Avoid dumping everything into:
- pages
- components
- App.jsx

---

## 10. State Management Rules

Prefer:
- local state first
- context only when necessary

Avoid:
- unnecessary global state
- prop drilling

Use:
- custom hooks
- context separation
- scalable patterns

---

## 11. API & Backend Integration Rules

All API integrations must:
- use service abstraction
- centralize API logic
- include error handling
- include loading states
- support scalability

Never call APIs directly inside large UI components.

---

## 12. Accessibility Standards

Maintain:
- semantic HTML
- keyboard accessibility
- readable contrast
- proper aria labels
- accessible forms

---

## 13. Spec Kit Workflow Rules

Before implementing any major feature:
1. Create specification
2. Create architecture plan
3. Define tasks
4. Review dependencies
5. Then implement

AI must always:
- think architecturally first
- avoid rushing implementation
- propose scalable solutions

---

## 14. Documentation Rules

Every major feature must include:
- architecture notes
- implementation notes
- reusable patterns
- setup instructions

---

## 15. Forbidden Practices

Never:
- generate placeholder architecture
- generate fake APIs
- hardcode secrets
- create massive files
- use poor naming
- ignore responsiveness
- ignore security
- break existing architecture

---

## 16. Preferred Technology Stack

Frontend:
- React
- Vite
- TailwindCSS
- Framer Motion
- React Router

Backend:
- Node.js
- Express
- PostgreSQL or MongoDB

Authentication:
- JWT
- refresh token architecture

Payments:
- Razorpay

Media Security:
- signed URLs
- streaming protection
- protected resource access

Deployment:
- Vercel
- Railway
- Cloudflare
- AWS (future scaling)

---

## 17. AI Behavior Expectations

AI assistants must:
- act like senior software architects
- prioritize maintainability
- prioritize scalability
- think before coding
- explain architectural decisions
- generate production-grade implementations

Avoid beginner-level architecture patterns.

---

## 18. Final Product Expectation

The final platform should feel comparable to:
- premium SaaS platforms
- cinematic creative studios
- luxury digital brands
- modern streaming platforms

The experience must feel:
- immersive
- smooth
- premium
- fast
- highly polished