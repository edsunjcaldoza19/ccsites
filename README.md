# Reconstructed websites

This folder contains 23 completed static websites, with 152 HTML pages in total. Each site has its own HTML pages and local CSS, JavaScript, and image assets. No build step is required.

## Included sites

| Site | Home page | HTML pages |
| --- | --- | ---: |
| ccaltailite | [Open](ccaltailite/index.html) | 4 |
| ccceracarelite | [Open](ccceracarelite/index.html) | 4 |
| ccdentitoxlite | [Open](ccdentitoxlite/index.html) | 4 |
| ccflexoblisslite | [Open](ccflexoblisslite/index.html) | 4 |
| ccgeneric | [Open](ccgeneric/index.html) | 14 |
| ccgenericlite | [Open](ccgenericlite/index.html) | 4 |
| ccglucoflowlite | [Open](ccglucoflowlite/index.html) | 4 |
| cckeravita | [Open](cckeravita/index.html) | 14 |
| cckeravitalite | [Open](cckeravitalite/index.html) | 4 |
| ccmakehimsurelite | [Open](ccmakehimsurelite/index.html) | 4 |
| ccnervogenlite | [Open](ccnervogenlite/index.html) | 4 |
| ccpromind | [Open](ccpromind/index.html) | 14 |
| ccpromindlite | [Open](ccpromindlite/index.html) | 4 |
| ccrevitaalite | [Open](ccrevitaalite/index.html) | 4 |
| ccsubtlesecrets | [Open](ccsubtlesecrets/index.html) | 14 |
| ccsubtlesecretslite | [Open](ccsubtlesecretslite/index.html) | 4 |
| ccsynapselite | [Open](ccsynapselite/index.html) | 4 |
| ccsynogut | [Open](ccsynogut/index.html) | 14 |
| ccsynogutlite | [Open](ccsynogutlite/index.html) | 4 |
| cctedswwlite | [Open](cctedswwlite/index.html) | 4 |
| cctoniclite | [Open](cctoniclite/index.html) | 4 |
| ccvisisharp | [Open](ccvisisharp/index.html) | 14 |
| ccvisisharplite | [Open](ccvisisharplite/index.html) | 4 |

The folder spelling `cctedswwlite` is intentional.

## Folder structure

```text
SITES/
  README.md
  <site>/
    index.html
    contact.html
    ...other HTML pages
    assets/
      css/main.css
      js/main.js
      images/
```

Each site is independent. Keep its HTML pages and `assets/` folder together, preserving filenames and relative paths.

## Preview locally

With Python installed, run this from the project root:

```powershell
python -m http.server 8000 --bind 127.0.0.1 --directory SITES
```

Then open a site's home page, for example:

<http://127.0.0.1:8000/ccgeneric/index.html>

Stop the server with `Ctrl+C`. If port 8000 is occupied, choose another port in both the command and URL.

## Publish

Upload a site's HTML pages and entire `assets/` folder to a static host. For a dedicated domain, use that site's folder as the document root. To host multiple sites under one address, preserve the site folders as subdirectories.

For a GitHub repository containing only the publishable project, use the contents of `SITES/`, including this README. Reconstruction downloads, archives, reference material, build tools, and workspace configuration are kept outside this folder and are not required for hosting.

This folder does not configure a GitHub remote, deployment, custom domains, or HTTPS certificates.

## Runtime notes

- Images used by the reconstructed pages are included locally under each site's `assets/images/` folder.
- Pages may request Google Fonts; system-font fallbacks are provided when fonts cannot load.
- Intentional product, support, affiliate, and media links can lead to external websites and require an internet connection.
- Contact forms have no configured message-delivery service. They provide validation and disclose that delivery is unavailable; connect a verified service before accepting messages.

## Not included yet

The remaining queued sites are `ccdsmarts.com`, `ccinfatuation.com`, `ccmamly.com`, and `cc7daymind.com`. They have no reconstructed folders in this publish tree yet.
