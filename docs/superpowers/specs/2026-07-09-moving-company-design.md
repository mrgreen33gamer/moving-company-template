# Moving Company Template — Design Spec

## Context

Scott Apps trade template reskin: fork of `hvac-template` into `moving-company-template`, sibling-cloned patterns from `garage-door-template`. Per-city SEO subpages deleted. `/projects` route deleted.

## Business Identity (locked)

| Field | Value |
|-------|--------|
| **Business name** | SteadyLoad Moving |
| **Tagline** | Local & Long-Distance Moves · Packing |
| **Location** | Waco, TX |
| **Service cities** | Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead |
| **Founded** | 2009 |
| **Owner** | Tara Benson |
| **License** | TXDOT-Registered · Fully Bonded & Insured |
| **Guarantee** | On-Time Arrival Guarantee · Damage Protection Options |
| **Social proof** | 4.9★, 2,200+ reviews, 18,000+ moves |
| **Accent hex** | `#2563eb` (royal blue) — `$orange` token |
| **Phone** | (254) 860-6060 / `tel:+12548606060` |
| **Email** | hello@steadyloadmoving.com |
| **Domain** | steadyloadmoving.com |
| **Address** | 3500 Franklin Ave, Waco, TX 76710 |

## Services (6)

| Slug | Title |
|------|--------|
| `local-moving` | Local Moving |
| `long-distance` | Long-Distance Moving |
| `packing-services` | Packing Services |
| `loading-only` | Loading & Unloading |
| `office-moving` | Office Moving |
| `storage-moves` | Storage Moves |

## Industries (3)

| Slug | Title |
|------|--------|
| `corporate-relocation` | Corporate Relocation |
| `property-management` | Property Management |
| `senior-moves` | Senior Moves |

## Blogs (3)

1. `how-to-prepare-for-moving-day`
2. `packing-checklist-texas-summer`
3. `local-vs-long-distance-movers`

## Pages

Home, Services (index + 6), Industries (index + 3), About, Contact, Service Areas, Blog (index + 3 posts), Privacy. No projects gallery. No per-city SEO.

## Accent

- SCSS: `$orange: #2563eb`, `$lightorange: #60a5fa`, `$darkorange: #1e40af`
- Hardcoded: NextTopLoader, PulseLoader, WelcomePage particles → `#2563eb`

## Done criteria

- `npm run typecheck` passes
- Grep clean of HVAC/Arctic Air/old phone/Mapbox pk tokens
- Identity consistent: SteadyLoad Moving throughout
