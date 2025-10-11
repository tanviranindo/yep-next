# Fashion Component Architecture Refactoring

## Goals

- Consolidate duplicate fashion components into reusable variant-based components
- Establish consistent naming convention across all fashion components
- Maximize server-side rendering by minimizing "use client" directives
- Create a plug-and-play variant system requiring zero code changes to add new variants

## Architecture Decisions

### 1. Naming Convention

- Keep `/components/Fashion/` as the main folder for fashion-specific components
- Use pattern: `Fashion[ComponentName]` (e.g., `FashionHero`, `FashionNavbar`)
- Internal variant implementations go in `/components/Fashion/variants/[component]/`
- Type exports: `FashionHeroVariant`, `FashionHeroProps`, etc.

### 2. Server Component Strategy

- Main wrapper components (FashionHero, FashionNavbar, etc.) remain server components by default
- Only mark "use client" on actual variant implementations that need interactivity
- Split client-only logic into separate hooks or child components
- Use React Server Components for static content routing

### 3. Variant Registration System

- Convention-based auto-discovery from folder structure
- Each component has a `variants/` subfolder with `variant-1/`, `variant-2/`, etc.
- Main component file acts as a server-side router that dynamically imports variants
- Add new variant = drop new folder + implementation, zero other changes needed

### 4. Route Structure

- Keep `/fashion1` and `/fashion2` routes for backward compatibility
- Both use the same unified Fashion components with different variant props
- Share all component code, data utilities, and context providers

## Implementation Plan

### Phase 1: Create Variant Structure

**Files:** `/components/Fashion/variants/`

Create organized variant subfolders:

- `variants/hero/variant-1/` (fashion1 hero)
- `variants/hero/variant-2/` (fashion2 hero)
- `variants/navbar/variant-1/` (fashion1 navbar)
- `variants/navbar/variant-2/` (fashion2 navbar)
- `variants/filter/variant-1/` (fashion1 filter)
- `variants/filter/variant-2/` (fashion2 filter)
- `variants/productcard/variant-1/` (fashion1 card)
- `variants/productcard/variant-2/` (fashion2 card)
- `variants/faq/variant-1/` (Collapsible FAQ)
- `variants/faq/variant-2/` (FAQ with contact form)
- `variants/footer/variant-1/` (Fashion Studio footer)
- `variants/footer/variant-2/` (Insole footer)

### Phase 2: Refactor Core Components

**Files:** Core Fashion component files in `/components/Fashion/`

Transform each component:

1. **FashionHero.tsx** - Remove "use client", make server component that imports variants
2. **FashionNavbar.tsx** - Keep minimal client state, extract variants
3. **FashionFilter.tsx** - Server wrapper, client variants
4. **FashionProductCard.tsx** - Server wrapper routing to variants
5. **FashionFAQ.tsx** - Server wrapper, client interactivity in variants only
6. **FashionFooter.tsx** - Pure server component (no state needed)
7. **FashionLayout.tsx** - Keep minimal client state, compose server components

### Phase 3: Move Variant Implementations

**Files:** Move existing variant files into new structure

Relocate and rename:

- Move `FashionHero` variant functions → `variants/hero/variant-1/index.tsx` and `variant-2/index.tsx`
- Move `Fashion2Filter` → `variants/filter/variant-2/index.tsx`
- Consolidate `FilterSidebarVariant1` → `variants/filter/variant-1/index.tsx`
- Move `Fashion2FAQ` → `variants/faq/variant-2/index.tsx`
- Move `FAQVariant1` → `variants/faq/variant-1/index.tsx`
- Move `FashionProductCard` → `variants/productcard/variant-1/index.tsx`
- Move `Fashion2Card` → `variants/productcard/variant-2/index.tsx`
- Move `FashionFooter/index.tsx` → `variants/footer/variant-1/index.tsx`
- Move `InsoleFooter` → `variants/footer/variant-2/index.tsx`

### Phase 4: Clean Up Redundant Fashion Files

**Files:** Delete only fashion-related variant files from scattered locations

Remove:

- `/components/FAQ/Fashion2FAQ.tsx` (fashion-specific)
- `/components/Filters/Sidebar/Fashion2Filter.tsx` (fashion-specific)
- `/components/Footer/FashionFooter/index.tsx` (fashion-specific)
- `/components/Footer/InsoleFooter.tsx` (fashion-specific)
- `/components/ProductCard/FashionProductCard.tsx` (fashion-specific)
- `/components/ProductCard/Fashion2Card.tsx` (fashion-specific)

**Important:** Do NOT touch:

- Generic variant folders (FAQ/variant-1, Filters/Sidebar/variant-1, etc.) - these are used by other categories (beauty, gadgets, etc.)
- Any non-fashion components or files

### Phase 5: Update Imports

**Files:** `/app/(categories)/fashion1/page.tsx`, `/app/(categories)/fashion2/page.tsx`

Update both pages to:

- Import from unified `/components/Fashion/` exports
- Pass appropriate variant numbers
- Verify functionality remains identical

### Phase 6: Add Variant Discovery System

**Files:** `/components/Fashion/registry.ts` (new)

Create optional registry for:

- Type-safe variant metadata
- Variant availability checking
- Documentation generation
- Future: UI variant previewer

### Phase 7: Update Documentation

**Files:** `/components/Fashion/README.md` (new)

Document:

- How to add a new variant (copy folder, implement interface, done)
- Naming conventions and patterns
- Server vs client component guidelines
- Example variant implementation

## Success Criteria

- ✅ All fashion components use consistent `Fashion[Name]` naming
- ✅ Adding variant-3 only requires creating new folder with implementation
- ✅ "use client" only appears where absolutely necessary
- ✅ fashion1 and fashion2 pages work identically to before
- ✅ No duplicate component code between variants
- ✅ Type safety maintained throughout

## Files to Create/Modify

### New Files

- `/components/Fashion/variants/hero/variant-1/index.tsx`
- `/components/Fashion/variants/hero/variant-2/index.tsx`
- `/components/Fashion/variants/navbar/variant-1/index.tsx`
- `/components/Fashion/variants/navbar/variant-2/index.tsx`
- `/components/Fashion/variants/filter/variant-1/index.tsx`
- `/components/Fashion/variants/filter/variant-2/index.tsx`
- `/components/Fashion/variants/productcard/variant-1/index.tsx`
- `/components/Fashion/variants/productcard/variant-2/index.tsx`
- `/components/Fashion/variants/faq/variant-1/index.tsx`
- `/components/Fashion/variants/faq/variant-2/index.tsx`
- `/components/Fashion/variants/footer/variant-1/index.tsx`
- `/components/Fashion/variants/footer/variant-2/index.tsx`
- `/components/Fashion/README.md`

### Modified Files

- `/components/Fashion/FashionHero.tsx` (refactor to server component)
- `/components/Fashion/FashionNavbar.tsx` (refactor)
- `/components/Fashion/FashionFilter.tsx` (refactor)
- `/components/Fashion/FashionProductCard.tsx` (refactor)
- `/components/Fashion/FashionFAQ.tsx` (refactor)
- `/components/Fashion/FashionFooter.tsx` (refactor)
- `/components/Fashion/FashionLayout.tsx` (refactor)
- `/components/Fashion/index.ts` (update exports)

### Files to Delete

- 9 scattered variant files in FAQ, Filters, Footer, ProductCard folders
