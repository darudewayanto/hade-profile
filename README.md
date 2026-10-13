# HADE Website

Website company profile HADE (Astro, static). Bahasa: English.

## Jalankan

```bash
export PATH="$HOME/.local/node/bin:$PATH"
npm run dev      # http://localhost:4321
npm run build    # hasil statis di dist/ — bisa di-hosting di mana saja (Vercel, Netlify, Cloudflare Pages, cPanel)
```

## Mengubah konten

Hampir semua teks, angka, nomor WhatsApp dan daftar logo ada di **`src/data/site.ts`**:

| Yang diubah | Di mana |
|---|---|
| Nomor WA, email, pesan WA otomatis | `site`, `waMessages` |
| Angka (28 firma, 180 coach, 1,800+ lulusan) | `stats` |
| Modul ACHC | `achcModules` |
| Studi kasus klien | `caseStudies` |
| Logo klien di marquee | `clientLogos` (file di `src/assets/clients/`) |
| **Testimoni** | `testimonials`: isi array, slot placeholder otomatis berganti |

Foto ada di `src/assets/photos/`, dan Astro otomatis mengubahnya ke WebP/ukuran responsif.

## Sebelum go-live

- [ ] Domain final (hade.id / hadeagile.com) → ganti `site` di `astro.config.mjs` dan `site.url` di `src/data/site.ts`
- [ ] Email dengan domain baru (sekarang masih salam@hijrahcoach.co.id)
- [ ] Testimoni klien (nama, jabatan, foto)
- [ ] Logo vektor (SVG) untuk HADE dan logo klien beresolusi tinggi
- [ ] Hosting + analytics (GA4 / Plausible)
