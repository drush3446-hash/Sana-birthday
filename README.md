# Sana's Birthday Scrapbook ♡

A pastel, Snoopy-inspired birthday website for Sana. The opening five scenes use a 16:9 scrapbook composition; the letter and “10 Things I Love About You” continue as long, vertical pages.

## Experience

1. **The message** — baby-blue gingham, hand-drawn beagle illustration and note.
2. **The invitation** — accept / decline interaction.
3. **November calendar** — choose November 08 or November 26.
4. **Make a wish** — tap the candle to blow it out.
5. **The keepsake** — diamond pattern, tilted polaroid and birthday badge.
6. **The letter** — cream-to-blue gradient, circular photo frame and personal birthday letter.
7. **10 Things I Love About You** — ten alternating scrapbook panels with asymmetric photo collages and a final “I love you” moment.

## Add Sana's photos

The site currently uses clearly labelled photo slots because Sana's real photos have not yet been added. Replace the photo-slot div elements in index.html with img elements and add the images to a photos/ folder. Keep the subjects matched to the reason:
- smile → a photo where Sana is smiling
- eyes → a close-up of her eyes
- laugh → a candid laughing photo
- Remaining slots → moments that fit each panel's title
- Final you slot → the most special photo for the finale

Use compressed JPG or WebP images for fast loading. Do not use unrelated stock photos.

## Run checks

This is a dependency-free static site. With Node.js installed, run:

```bash
npm test
```

## Publish

GitHub Pages is configured to publish the repository from main. A push to main triggers the existing Pages workflow.
