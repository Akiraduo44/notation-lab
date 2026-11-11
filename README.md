# Notation Lab public site

This checkout contains only the public static app. The private local Mac app and Aion bridge remain separate.

## Repository workflow

The repository root is the deployable static site. `dist/` contains the files served by Cloudflare Pages or another static host. The `tools/` checks run without third-party packages and are executed automatically by GitHub Actions on pushes to `main` and on pull requests.

Run the full local validation from this directory:

```sh
npm test
```

The public repository deliberately excludes local Aion bridge code, browser backups, private scores, installer scripts, provider credentials and generated hosting archives. The public app remains browser-local and does not expose the private Aion integration.

GitHub Actions validates the committed build; it does not publish a new Cloudflare Pages deployment by itself. Keep the existing `notationlab` Pages project as the production host and configure its repository deployment separately if automatic production deploys are wanted.

## Publish updates

The primary public deployment is the existing free Cloudflare Pages project named `notationlab`. Upload the contents of `dist/` to that same Pages project. Do not create a second project or accept a random hostname. This checkout retains the Pages project identity in `.openai/hosting.json`.

Uploading a modified HTML file elsewhere or editing the local Downloads app does not update the public build automatically. Browser-local progress remains attached to each origin; export/import a backup when moving between the private app and the hosted app.

## Browser compatibility

Run `npm run build:compat` after changing the public JavaScript. It lowers the app and VexFlow bundles to an ES2015 syntax floor. Runtime guards cover older timing, collection and object APIs, touch and mouse keyboard input, missing Web Audio and unavailable Web MIDI. Button feedback is delegated so dynamically created controls also receive pressed, focus and mobile vibration feedback. Each training tab renders target notation beside the currently played note; the previous hero live-input card is not part of the layout. Composer measures MIDI note-on/note-off timing, quantises conventional and dotted durations, groups near-simultaneous notes into chords, inserts rests from performed gaps, selects a stable automatic clef, uses velocity for accents, marks short notes staccato and honours sustain. Rhythm taps can start timing with the metronome stopped. Sight-reading regenerates only the remaining sequence when the visible octave range changes. Hint state and input release state use the same canonical event path across MIDI, computer keys, touch and on-screen keys. The layout reserves a top banner and right-side ad rail; consent-gated AdSense units are deferred for hidden training tabs and refreshed when a tab becomes visible. Responsive styles reduce navigation, controls, scores and ad reservations for narrow screens. Run `npm test` before uploading. Chromium browsers request Web MIDI automatically, reconnect on focus and device changes, and retain the manual `Connect MIDI` fallback. Safari can use virtual and computer keys; physical MIDI depends on browser support for Web MIDI.

## Efficiency pass

The public bundle caches keyboard and beat nodes instead of scanning the document on every input pulse. Unchanged rhythm and composition scores skip VexFlow re-engraving; repeated played-note payloads skip duplicate engraving; composition chips are inserted as one document fragment; and pointer feedback registers one input family per browser instead of overlapping mouse, touch and pointer listeners. Practice seconds accumulate in memory and persist in batches, with flushes on tab changes, page hiding and page exit so daily completion remains durable without a local-storage write every second. Composer engraving is loaded as a separate cached asset so beam grouping, bar spacing, accidentals, ties and articulation can be repaired without disturbing the input and learning bundle. Saved custom metres keep the preset selector in a visible `Custom sequence` state after reload. The current ES2015 assets are 100,782 bytes for the app (29,166 bytes gzip), 12,265 bytes for the engraving repair (3,802 bytes gzip), and 1,127,700 bytes for VexFlow. `npm test` covers canonical input lifecycle, same-staff rendering, constrained sight range, deterministic hints, metronome-free rhythm, performance engraving, flat beams, ad reservations and deployment wiring.

## Advertising status

Advertising is enabled behind Google's consent gate. The existing publisher identity was verified in the signed-in AdSense account. The homepage contains the Google publisher meta tag, the public config is dist/ads-config.js, and the loader fails closed unless a valid publisher ID, real slot ID, certified CMP configuration and suitable TCF consent are present. These switches do not guarantee that Google will fill an impression or produce revenue.

Verified activation inputs: owner-controlled AdSense account, real publisher and slot identifiers, Google-certified CMP message, matching privacy notice and provider-supplied ads.txt. Do not treat the enabled config as proof of ad fill or revenue. Do not invent identifiers or change certifiedCmpConfigured without testing the actual CMP. No domain purchase or subscription was made.

The reserved placements are a top banner and a right-side rail on each training panel. Provider markup is added only after a valid approved configuration and consent callback; hidden tabs wait until they become visible before requesting their unit. No click incentives, automatic refresh or ads over keyboard/input controls are implemented. The privacy page identifies Google advertising and its consent requirement.

## SEO

Descriptive titles and descriptions, canonical URLs, Open Graph metadata, SVG favicon/social artwork, WebSite/WebApplication/LearningResource JSON-LD, robots.txt, sitemap.xml, readable static learning guide, semantic headings and internal links. No fabricated ratings, hidden keyword stuffing, cloaking or ranking promises. Search Console verification needs the owner's provider verification value; no fabricated token is included.

## Private data

Never copy notation-connection.js, Aion bridge.json, browser backups, private scores, installer scripts or local server credentials into dist. The public app has no loopback request and no Aion integration. Progress is browser-local, not synchronized between users or devices. Moving from the local file to the hosted origin requires export/import of a progress backup.
