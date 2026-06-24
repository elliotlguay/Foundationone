# Foundation One Inc. — Website

Professional B2B website for Foundation One Inc., a commercial exterior property maintenance company serving the Greater Toronto Area.

## Pages

| File | Page |
|------|------|
| `index.html` | Home |
| `services.html` | Services |
| `commercial.html` | Commercial Property Maintenance |
| `industries.html` | Industries Served |
| `programs.html` | Maintenance Programs |
| `results.html` | Before & After Results |
| `about.html` | About |
| `contact.html` | Contact / Request Assessment |

## File Structure

```
/
├── index.html
├── services.html
├── commercial.html
├── industries.html
├── programs.html
├── results.html
├── about.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   └── components.js
└── README.md
```

## To Deploy on GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Branch**, select `main` and `/ (root)`
3. Click **Save**
4. Your site will be live at `https://elliotlguay.github.io/Foundationone/`

## To Add Real Photos (Before & After)

In `results.html`, replace each placeholder div:
```html
<div class="result-img result-img--before">
  <span class="label">Before</span>
  <span class="placeholder-text">Add before photo here</span>
</div>
```
With an actual image:
```html
<div class="result-img result-img--before" style="background-image:url('assets/project1-before.jpg'); background-size:cover; background-position:center;">
  <span class="label">Before</span>
</div>
```

## Contact

- Phone: 289-995-2017
- Email: info@foundationoneinc.com
