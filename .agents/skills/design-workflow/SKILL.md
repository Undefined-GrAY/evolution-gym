---
name: design-workflow
description: >
  A structured design-first workflow for building production web products from brand discovery through token systems to responsive implementation. Use this skill whenever the user wants to design or build a new website or web app, define a brand identity, establish a design system, create UI tokens, plan responsive layouts, or when they mention starting a new project, client site, portfolio piece or product. Trigger even if the user only mentions "brand", "design system", "tokens", "typography scale" or "new site". This skill covers the full design pipeline from 360px mobile to large desktop.
---

# Design Workflow David Gray

A battle-tested design-first pipeline for building intentional web products. Every project starts from brand truth and ends in production-grade implementation.

---

## Phase 1: Brand Discovery

Before touching a color or a font answer these questions completely.

**Business context**
- What industry is this? (hospitality, fintech, fashion, SaaS, real estate, food, etc.)
- What is the core purpose of the site? (sell, inform, book, showcase, convert)
- Who is the primary user? Be specific. Not "young people" "25-35 year old Lagos professionals booking boutique hotels on mobile"
- Who are we trying to win against? Identify 2-3 competitors and audit their sites
- What feeling should someone have 3 seconds after landing on this site?

**Brand personality**
Define the brand on a spectrum for each axis:
- Minimal ←→ Maximal
- Serious ←→ Playful
- Luxury ←→ Accessible
- Bold ←→ Quiet
- Modern ←→ Classic

These answers determine every design decision that follows. Lock them before moving on.

**Theme context**
Before any design work starts answer this question: does this project need light and dark mode support?

This decision must be made in Phase 1 and never revisited mid-build. Adding theme support after the fact is painful in any codebase and AI tools handle it even worse because they have to reverse-engineer assumptions baked into every component.

If yes: set up ThemeContext and CSS token switching from day one. Every color token must have a light and dark variant defined before a single component is written.

If no: pick one mode and commit to it. Do not leave the door open with vague plans to add it later.

```tsx
type Theme = 'light' | 'dark'

type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null)

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<Theme>('light')

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme() {
  const ctx = React.useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
  return ctx
}
```

CSS tokens then switch via the `data-theme` attribute:
```css
:root[data-theme='light'] {
  --color-surface-base: oklch(98% 0 0);
  --color-text-primary: oklch(10% 0 0);
}

:root[data-theme='dark'] {
  --color-surface-base: oklch(12% 0 0);
  --color-text-primary: oklch(95% 0 0);
}
```

If theme support is confirmed always wrap the app in ThemeProvider before touching any component. Never retrofit it.

**One sentence brand truth**
Write a single sentence that captures what this brand is. Everything that doesn't serve this sentence gets cut.

---

## Phase 2: Feature Inventory

List every page and every feature the site needs. Be exhaustive now so nothing surprises you in implementation.

For each feature note:
- What it does
- What data it needs
- Whether it needs animation
- Whether it is mobile-critical or desktop-enhanced

Flag features that require backend work early. Don't design around assumptions.

---

## Phase 3: Design Token System

### Base Unit
All spacing is derived from a **4px base unit**. No arbitrary values.

```
4px   xs (tight padding, icon gaps)
8px   sm (component internal spacing)
12px  md-sm
16px  md (default paragraph spacing)
24px  lg (section internal padding)
32px  xl
48px  2xl
64px  3xl
80px  4xl
96px  5xl
128px 6xl (hero sections and major section gaps)
```

### Color Token System (oklch)

Define tokens semantically not by value. Always use oklch for perceptual consistency.

```css
/* Brand */
--color-brand-primary
--color-brand-secondary
--color-brand-accent

/* Surfaces */
--color-surface-base        /* page background */
--color-surface-raised      /* cards elevated one level */
--color-surface-overlay     /* modals drawers */

/* Text */
--color-text-primary        /* headings and body */
--color-text-secondary      /* supporting copy */
--color-text-muted          /* captions labels placeholders */
--color-text-inverse        /* text on dark surfaces */

/* Semantic */
--color-success
--color-warning
--color-error
--color-info

/* Borders */
--color-border-default
--color-border-subtle
--color-border-strong
```

Always define dark mode variants. Never hardcode hex values in components always reference tokens.

### Border Radius Tokens

```css
--radius-xs: 2px
--radius-sm: 4px
--radius-md: 8px
--radius-lg: 12px
--radius-xl: 16px
--radius-2xl: 24px
--radius-full: 9999px
```

### Shadow Tokens

```css
--shadow-sm:  0 1px 2px oklch(0% 0 0 / 0.05)
--shadow-md:  0 4px 12px oklch(0% 0 0 / 0.08)
--shadow-lg:  0 8px 24px oklch(0% 0 0 / 0.12)
--shadow-xl:  0 16px 48px oklch(0% 0 0 / 0.16)
```

---

## Phase 4: Typography System

### WCAG Rules Non-Negotiable
- Body text minimum **16px**
- Labels minimum **13px** prefer **14px** when space allows
- Never go below **13px** for any visible text including captions
- Minimum contrast ratio **4.5:1** for body text
- Minimum contrast ratio **3:1** for large text (18px+ or 14px bold+)

### Font Pairing Strategy
Pick two fonts maximum. One for display/headings. One for body. Establish clear hierarchy between them.

Source fonts from Fontshare or Google Fonts. Never use system fonts for branded products unless minimalism is the explicit brand direction.

### Fluid Typography Scale

All heading sizes use `clamp()` with `cqw` as the fluid unit. Never fixed px for headings.

```css
/* Scale starts from 360px and expands to 1440px+ */

--text-h1: clamp(2.5rem, 8cqw, 5rem)
--text-h2: clamp(2rem, 6cqw, 3.75rem)
--text-h3: clamp(1.5rem, 4cqw, 2.5rem)
--text-h4: clamp(1.25rem, 3cqw, 1.875rem)

--text-body-lg: clamp(1.0625rem, 1.5cqw, 1.25rem)
--text-body:    clamp(1rem, 1.2cqw, 1.125rem)      /* never below 16px */
--text-sm:      clamp(0.875rem, 1cqw, 1rem)
--text-label:   clamp(0.8125rem, 0.9cqw, 0.875rem) /* 13px–14px */
```

Line heights:
- Headings: 1.1 to 1.2
- Body: 1.5 to 1.7
- Labels and captions: 1.3

Letter spacing:
- Display headings: -0.02em to -0.04em (tighter feels premium)
- Body: 0 to 0.01em
- All-caps labels: 0.05em to 0.08em

---

## Phase 5: Responsive Design Strategy

### Viewport Range

Design explicitly for these breakpoints:

```
360px  minimum supported mobile (base design starts here)
280px  stress test only (confirm nothing breaks)
480px  large mobile
768px  tablet portrait
1024px tablet landscape / small laptop
1280px standard desktop
1440px large desktop
1920px wide monitor (cap max-width here)
```

**Start at 360px. Design mobile first. Scale up intentionally.**

### Layout Scaling Rules

Do not default to "make it wider" when scaling up. Ask what the layout should actually become at each stage.

Examples of intentional scaling:
- A stacked card list on mobile becomes a masonry grid at 1024px not just a wider stack
- On mobile never show more than 2 to 4 cards in a preview or showcase section. Cards are large on small screens and stacking more buries the page.
- Before building any card component ask the user what style they want. Do not assume. Options to present: minimal text card, image-led card, bordered card, glassmorphism card, elevated shadow card, or horizontal card layout.
- On the home page default to showing 2 to 3 cards maximum in any preview section. These sections exist only to tease. The dedicated page is where the user sees everything. Never dump all cards on the home page.
- On dedicated listing pages (projects page, blog page, work page) more cards are acceptable. Apply the chosen card style consistently and use a proper grid that scales intentionally from mobile to desktop.
- A single column hero becomes a split 50/50 layout at 768px with text left image right
- A horizontal nav becomes a mega menu at 1280px not just more items inline
- A full-width image becomes contained with a narrative column beside it at desktop

**Generic flexbox and grid that just stretches is not a design decision. Make a decision.**

### Mobile Premium Density Rules

Mobile is not a smaller desktop. Reduce information density deliberately.

- Remove or collapse redundant footer content on mobile. Keep only links, information, and actions that are genuinely useful. If multiple items communicate the same thing, keep the strongest version.
- Reduce secondary and repetitive content throughout mobile layouts. Do not force every desktop element into the mobile experience.
- Give the hero more breathing room on mobile. Intentional whitespace should make the headline, supporting copy, CTA, and primary visual feel premium rather than crowded.
- When choosing between adding content and adding whitespace on mobile, prefer whitespace when the content is not essential to the user's next action.
- Premium mobile design should feel edited, calm, and intentional. Do not confuse a full page with a good page.

### Container Strategy

```css
.container {
  width: 100%;
  max-width: 1440px;
  margin-inline: auto;
  padding-inline: clamp(1rem, 5cqw, 6rem);
}
```

---

## Phase 6: Animation & Motion

### Motion Principles
- Animations must serve a purpose: guide attention, confirm action, communicate state
- Nothing animates just because it can
- Default easing: `cubic-bezier(0.16, 1, 0.3, 1)` fast out slow settle (feels physical)
- Keep durations between 200ms and 600ms for UI interactions
- Page transitions and reveals: 400ms to 800ms

### Standard Animation Patterns

**Fade up on scroll**
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

**Staggered list reveal**
Apply delay increments of 80ms to 120ms per item. Never more or it feels broken.

**Hover states**
All interactive elements need a hover state. Minimum: color shift. Better: subtle lift with shadow or scale at 1.02.

### Respect User Preference
Always wrap animations in:
```css
@media (prefers-reduced-motion: no-preference) {
  /* animations here */
}
```

---

## Phase 7: Image & Visual Direction

### Use
- Real photography with authentic subjects
- Illustration with a defined consistent style
- Abstract geometric or typographic visual systems
- Product screenshots in clean device frames

### Never Use
- AI-generated stock photos (slop immediately destroys brand credibility)
- Purple gradients (overused to the point of invisibility)
- Text-only logos unless the brand explicitly demands it (and even then question it)
- Generic hero illustrations from Undraw or similar unless heavily customised
- Stock photo people smiling at laptops

### Hero Section Rules

**Height**
Always `100dvh` on desktop. On mobile choose one of three based on design intent:
- `50svh` — compact editorial style. Content starts immediately below the fold.
- `80svh` — balanced. Hero breathes but does not consume the whole screen.
- `100svh` — full immersive. Everything else disappears until the user scrolls.

Decide during Phase 1 brand discovery. Never change it mid-implementation. Always use `svh` (Small Viewport Height) on mobile rather than `dvh` so that the hero height remains perfectly stable and does not jump or expand when the mobile browser navigation bar collapses during scrolling.

The hero must answer one question immediately: **what is this and why should I care?**

A vague hero is a dead hero. Test it: cover the logo. Can a stranger tell what this site is for in 3 seconds? If no rewrite it.

Hero must contain:
- A concrete headline (not a tagline a statement)
- A supporting line that adds specificity
- A clear primary CTA
- A visual that reinforces the headline not decorates it

---

## Phase 8: Component Inventory

Before implementation list every component the site needs:

**Layout components**
- Navigation (mobile drawer + desktop)
- Footer
- Section wrapper
- Container

**UI components**
- Button (primary / secondary / ghost / destructive)
- Card variants
- Badge / tag
- Input fields
- Modal / drawer
- Toast / notification

**Page-specific components**
- Hero
- Feature grid
- Testimonial
- Pricing table
- CTA banner
- 404 page

Build the token system and base components first. Pages are compositions of components.

---

## Phase 9: React Component Architecture

All components are built in TypeScript. No exceptions. No `any`. No casting your way out of a type error.

### When to Use Which Pattern

**Compound Components** use when a component has multiple related parts that need to share state but the parent should control the structure. Best for: Tabs, Accordion, Select, Modal, Card with header/body/footer, Navigation.

**Higher-Order Components** use when you need to inject cross-cutting behaviour into existing components without touching their internals. Best for: auth guards, loading wrappers, error boundaries, analytics tracking, permission checks.

If you're unsure: compound components for UI composition. HOCs for behaviour injection.

---

### Compound Component Pattern

The compound component pattern uses React context internally so child components can share state without prop drilling. The parent owns the state. The children consume it.

**Structure**
```tsx
// Context
type TabsContextValue = {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const TabsContext = React.createContext<TabsContextValue | null>(null)

function useTabsContext() {
  const ctx = React.useContext(TabsContext)
  if (!ctx) throw new Error('useTabsContext must be used inside <Tabs />')
  return ctx
}

// Root component owns state
type TabsProps = {
  defaultTab: string
  children: React.ReactNode
}

function Tabs({ defaultTab, children }: TabsProps) {
  const [activeTab, setActiveTab] = React.useState(defaultTab)

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  )
}

// Child components consume context
type TabTriggerProps = {
  value: string
  children: React.ReactNode
}

function TabTrigger({ value, children }: TabTriggerProps) {
  const { activeTab, setActiveTab } = useTabsContext()
  return (
    <button
      data-active={activeTab === value}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  )
}

type TabPanelProps = {
  value: string
  children: React.ReactNode
}

function TabPanel({ value, children }: TabPanelProps) {
  const { activeTab } = useTabsContext()
  if (activeTab !== value) return null
  return <div role="tabpanel">{children}</div>
}

// Attach subcomponents to root
Tabs.Trigger = TabTrigger
Tabs.Panel = TabPanel
```

**Usage**
```tsx
<Tabs defaultTab="overview">
  <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
  <Tabs.Trigger value="specs">Specs</Tabs.Trigger>

  <Tabs.Panel value="overview">Overview content here</Tabs.Panel>
  <Tabs.Panel value="specs">Specs content here</Tabs.Panel>
</Tabs>
```

The consumer controls the layout. The component owns the logic. Clean separation.

---

### Higher-Order Component Pattern

HOCs wrap a component and return a new enhanced component. In TypeScript the key is preserving the wrapped component's prop types exactly.

**Structure**
```tsx
// Generic HOC that injects auth guard behaviour
type WithAuthProps = {
  isAuthenticated: boolean
}

function withAuth<T extends WithAuthProps>(
  WrappedComponent: React.ComponentType<T>
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component'

  function ComponentWithAuth(props: Omit<T, keyof WithAuthProps>) {
    const { isAuthenticated } = useAuth() // your auth hook

    if (!isAuthenticated) {
      return <Navigate to="/login" replace />
    }

    return <WrappedComponent {...(props as T)} isAuthenticated={isAuthenticated} />
  }

  ComponentWithAuth.displayName = `withAuth(${displayName})`
  return ComponentWithAuth
}
```

**Usage**
```tsx
function Dashboard({ isAuthenticated }: WithAuthProps) {
  return <div>Protected dashboard</div>
}

export default withAuth(Dashboard)
```

**Loading state HOC example**
```tsx
type WithLoadingProps = {
  isLoading: boolean
}

function withLoading<T extends WithLoadingProps>(
  WrappedComponent: React.ComponentType<T>,
  Fallback: React.ReactNode = <Spinner />
) {
  function ComponentWithLoading(props: T) {
    if (props.isLoading) return <>{Fallback}</>
    return <WrappedComponent {...props} />
  }

  ComponentWithLoading.displayName = `withLoading(${WrappedComponent.displayName})`
  return ComponentWithLoading
}
```

---

### Component File Structure

Every component lives in its own folder:

```
components/
└── Tabs/
    ├── index.ts          public export only
    ├── Tabs.tsx          root compound component
    ├── TabTrigger.tsx    subcomponent
    ├── TabPanel.tsx      subcomponent
    ├── Tabs.types.ts     all TypeScript interfaces
    └── Tabs.module.css   scoped styles (or Tailwind classes inline)
```

The `index.ts` exports only what the consumer needs:
```ts
export { Tabs } from './Tabs'
export type { TabsProps } from './Tabs.types'
```

---

### TypeScript Rules for Components

Never use `any`. If you're tempted to use `any` that's a signal to stop and model the type properly.

Use `React.ComponentPropsWithoutRef` to extend native HTML element props:
```tsx
type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'secondary' | 'ghost'
  isLoading?: boolean
}
```

Use discriminated unions for conditional props:
```tsx
type CardProps =
  | { interactive: true; onClick: () => void }
  | { interactive?: false; onClick?: never }
```

Always type children explicitly:
```tsx
type Props = {
  children: React.ReactNode       // anything renderable
  render: () => React.ReactElement // must return JSX
}
```

---

## Phase 10: Premium Section Design

This is the difference between a site that looks built and a site that looks designed.

### The Core Rule

Every section must have a distinct visual identity. A visitor scrolling from top to bottom should feel like each section is a deliberate creative decision not the next div in a for loop.

If two adjacent sections could be swapped and nobody would notice the difference that is a failure.

---

### How to Make a Section Stand Out

Each section needs at least one characteristic that the sections around it does not share:

**Surface treatment**
- Different background (dark after light, textured after flat, full-bleed image, subtle noise or grain overlay)
- Asymmetric background split (60/40 colour split across the section)
- Diagonal or curved section dividers instead of straight horizontal cuts

**Layout contrast**
- If the previous section was centred single column go full-bleed split layout
- If the previous section was a grid go editorial with one oversized element
- Intentional whitespace as a design element not empty space waiting to be filled
- Break the grid deliberately one element that bleeds past the container

**Typography as design**
- One section where the heading is massive display text (8rem+) used as a visual element not just a title
- Rotated text labels on the side of a section
- Outlined/stroked text mixed with filled text
- Text that overlaps an image or a graphic element

**Visual anchors**
- Every section needs one element that catches the eye first before the reader starts reading a number, an icon, an image, a colour block, a typographic element
- That anchor must be different in every section

**Colour blocking**
- Alternate between light and dark sections with intention
- Use an accent colour section sparingly one section max for maximum impact
- Never three consecutive sections with the same background

---

### Section Archetypes

Never build a section from scratch without deciding which archetype it belongs to. Then push it further.

**Hero** Always `100dvh` on desktop. On mobile choose one of three based on design intent:
- `50dvh` — compact editorial style. Content starts immediately below the fold.
- `80dvh` — balanced. Hero breathes but does not consume the whole screen.
- `100dvh` — full immersive. Everything else disappears until the user scrolls.

Decide during Phase 1 brand discovery. Never change it mid-implementation. Always use `dvh` not `vh` because `dvh` accounts for the mobile browser address bar correctly.

The hero must answer one question immediately: **what is this and why should I care?**

A vague hero is a dead hero. Test it: cover the logo. Can a stranger tell what this site is for in 3 seconds? If no rewrite it.

Hero must contain:
- A concrete headline (not a tagline a statement)
- A supporting line that adds specificity
- A clear primary CTA
- A visual that reinforces the headline not decorates it

**Social proof / Numbers** Never a plain row of stats. Numbers oversized. Make the number the hero of the section not a label inside a card.

**Feature / Value props** Never three equal columns of icon + title + paragraph. Instead: staggered grid, alternating left/right split, one large feature with smaller supporting ones, a horizontal scroll on mobile that becomes editorial on desktop.

**Testimonials** Never a plain quote in a box. Overlap the quote with a photo. Use a massive quotation mark as a design element. Stagger card heights.

**CTA / Banner** Visual climax of the page. Full-bleed dark background if the rest of the site is light. Bold contrast colour. The most direct sentence on the page.

**Footer** Not an afterthought. Use it for personality. A clever sign-off line. A subtle brand pattern. Links that are actually useful.

---

### Section Padding and Height Rules

AI tools default to applying the same oversized padding to every section regardless of content. This is one of the most common reasons a site feels bloated and every section feels like it takes up the whole screen when it should not.

**Padding is proportional to content weight. Not uniform.**

```
Compact sections (stats, logos, small callouts):     padding-block: 48px to 64px
Standard sections (features, testimonials, about):   padding-block: 80px to 96px
Hero sections and major cinematic transitions:        padding-block: 128px+
```

Never apply 128px padding to a section with four data points and a headline. That is the philosophy section problem in image 3. The content is small. The padding made it a full viewport section. It should have been 64px vertical padding maximum.

**`min-height: 100vh` is banned on every section except the hero.** Every other section sizes to its content plus the appropriate padding token from the scale above. If a section feels too short that is a content problem not a padding problem. Add content or rethink the section. Do not inflate it with artificial height.

**The test:** if you removed all the padding from a section and the content itself took up less than 40% of the viewport that section has too much padding. Cut it down to the nearest token in the scale.

---

### What Generic Looks Like Never Do This

- White card with icon top + title middle + paragraph bottom repeated in a three-column grid
- Section title centred at the top followed by a grid of equal-sized items
- Full-width image with centred text overlay and a button and no additional thought
- Alternating left/right image and text blocks with identical spacing and weight throughout
- Testimonials section that is just cards in a carousel
- Stats section with four equal numbers in equal columns on a coloured background
- Pricing section where all three tiers are identical in visual weight

These are not forbidden because they are wrong. They are forbidden because every site already has them and premium means being the one that does not.

---

### The Premium Checklist Run This Before Finalising Any Section

- Does this section have a distinct visual identity from the one above and below it?
- Is there one element that would make someone stop scrolling?
- Does the layout change meaningfully from mobile to desktop or does it just get wider?
- Is the typography doing design work or just carrying text?
- Does every interactive element have an intentional hover state?
- Is the whitespace deliberate or just default margin?
- Would a senior designer see a decision here or see a default?

If any answer is no fix it before moving on.

---

## Rules That Never Change

1. Tokens before components. Components before pages.
2. 360px first. Always.
3. Fluid type with clamp and cqw. No fixed heading sizes.
4. 16px body minimum. 13px label minimum. Non-negotiable.
5. No AI slop images. No purple gradients. No vague heroes.
6. Every layout decision at each breakpoint must be intentional not just wider.
7. oklch for all color tokens.
8. Animations only when they serve the user.
9. One brand truth sentence before any design work starts.
10. Test contrast ratios before shipping. Always.
11. Every section must have a distinct visual identity. Generic is not allowed.
12. No two adjacent sections with the same surface treatment.
13. Compound components for UI composition. HOCs for behaviour injection.
14. No any in TypeScript. Model the type properly.
15. Never use em dashes in any copy, documentation, or content produced in this workflow. Use a colon, a period, or rewrite the sentence.
16. Always use `pnpm` for all package management, dependency installations, scripts, and builds (e.g., `pnpm install`, `pnpm dev`, `pnpm build`, `pnpm dlx`). Never use `npm`.
17. Section padding is proportional to content weight. Never uniform. `min-height: 100vh` is banned on every section except the hero.
18. 150% OS Display Scaling and short logical viewports (< 740px height) require fluid vertical padding with vh clamp and height-responsive media queries (@media(max-height: 740px)) to protect CTA clearance.
