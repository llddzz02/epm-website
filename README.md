# Ever Progress Marketing Website

Static multilingual website for Ever Progress Marketing / 圣昌市场营销.

## Files

- `index.html` - main website and SEO structured data
- `styles.css` - responsive layout and visual design
- `script.js` - English, Simplified Chinese, and Bahasa Melayu language content
- `assets/` - logo/favicon and battery product visuals
- `robots.txt` and `sitemap.xml` - search engine crawling helpers

## Update Before Publishing

1. Replace the placeholder domain `https://www.everprogressmarketing.com/` in:
   - `robots.txt`
   - `sitemap.xml`
2. Add the final website URL to the structured data in `index.html` if the domain is different.
3. When the company email is ready, open `script.js` and fill `const companyEmail = "";`. Example: `const companyEmail = "sales@example.com";`

## Replace Images

Keep your image files inside the `assets/` folder, then update the matching `src` in `index.html`.

- Company logo in the header: replace `assets/company-logo.svg` with your own logo file, or change `<img class="brand-logo" src="assets/company-logo.svg">` to your new filename.
- Large hero product image: replace `assets/battery-hero.svg`, or change the hero image line to your product photo filename.
- Product cards:
  - EPM: `assets/brand-epm.svg`
  - Camel: `assets/brand-camel.svg`
  - Durocom: `assets/brand-durocom.svg`
  - Maxtec: `assets/brand-maxtec.svg`

Recommended product photo format: JPG or WebP, around 1200px wide for the hero image and 600px wide for product cards. Use clear product photos on a clean background.

## Local Preview

Open `index.html` directly in a browser, or run a local static server from this folder:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Then visit:

```text
http://127.0.0.1:8765/
```

## Search Engine Visibility

To make the site appear when people search `Ever Progress Marketing` or `圣昌市场营销`:

1. Buy or connect a domain name.
2. Upload these files to a web host.
3. Update `sitemap.xml` and `robots.txt` with the real domain.
4. Submit the domain and sitemap in Google Search Console.
5. Create or update the Google Business Profile using the same company name, address, and phone number.
