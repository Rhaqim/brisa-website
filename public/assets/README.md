# Static Assets — Image Guide

These folders hold images used when the site runs **without a database** (static/fallback mode).
Replace the `.svg` placeholder files with your real photos using the **same filenames** (you can use `.jpg`, `.png`, or `.webp` — just update `src/lib/fallback.ts` to match the extension).

## Folder Structure

```
public/assets/
├── hero/
│   └── hero.svg          ← Full-width homepage hero background (1600×900 recommended)
├── about/
│   └── mission.svg       ← Mission section photo on the About page (800×600)
├── gallery/
│   ├── gallery-1.svg     ← Vocational Training
│   ├── gallery-2.svg     ← Scholarship Programme
│   ├── gallery-3.svg     ← Community Outreach
│   ├── gallery-4.svg     ← Parenting Workshop
│   ├── gallery-5.svg     ← Microfinance Programme
│   └── gallery-6.svg     ← Career Development
├── events/
│   ├── event-1.svg       ← Women in Business Summit
│   ├── event-2.svg       ← Scholarship Awards Ceremony
│   └── event-3.svg       ← Digital Literacy Workshop
├── stories/
│   ├── story-1.svg       ← Adaeze Okonkwo (Enugu State)
│   └── story-2.svg       ← Fatimah Bello (Kano State)
└── blog/
    ├── blog-1.svg        ← 5 Years of Impact
    ├── blog-2.svg        ← Vocational Training article
    └── blog-3.svg        ← Microloan Programme article
```

## How to replace a placeholder

1. Drop your photo into the right folder (e.g. `public/assets/gallery/gallery-1.jpg`)
2. Open `src/lib/fallback.ts` and update the matching `url` or `image_url` value to the new filename.
3. You can also edit the `alt_text`, `caption`, names, and story text in that same file.

## Switching to a database later

Set `DATABASE_URL` in your `.env` file. The site will use live DB data automatically and the admin panel (/admin) will become accessible again. No code changes needed.
