# 📄 PDFTools — All-in-One PDF Suite

A fully **client-side** PDF toolkit built with vanilla HTML, CSS, and JavaScript. Every tool runs entirely in the browser — your files **never leave your device**.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit-orange)](https://yourusername.github.io/pdf-tools)
![License](https://img.shields.io/badge/License-MIT-blue)
![No Server](https://img.shields.io/badge/Server-None%20Required-green)

![PDFTools Screenshot](assets/screenshot.png)

---

## 🛠 Features

| Tool | Description |
|---|---|
| 👁️ **PDF Reader** | Open & view PDFs with page navigation, zoom, and rotation |
| 🔗 **PDF Merger** | Combine multiple PDFs — drag to reorder before merging |
| ✂️ **PDF Splitter** | Split by page ranges, extract every page, or chunk by N pages |
| 🗜️ **PDF Compressor** | Reduce file size by stripping metadata and compressing content |
| 🔒 **Protect PDF** | Encrypt PDF with password and permission settings |
| 🔓 **Remove Password** | Unlock a password-protected PDF by providing the password |
| 🔀 **Reorder/Delete/Rotate** | Drag-to-reorder pages, rotate individually, delete pages |
| 🔲 **Remove Watermark** | Strip text watermarks and overlay annotations |
| 🔢 **Add Page Numbers** | Stamp page numbers with custom position, format, and style |
| 📝 **Word → PDF** | Convert .docx Word documents to PDF |
| 📄 **Text → PDF** | Paste or type text (with Markdown headings) → formatted PDF |
| 📊 **Excel → PDF** | Convert .xlsx / .xls / .csv spreadsheets to PDF tables |

---

## 🚀 Getting Started

No installation needed! This is a static website — just open `index.html` in any modern browser.

### Option 1: Open Locally
```bash
git clone https://github.com/yourusername/pdf-tools.git
cd pdf-tools
open index.html  # macOS
# or
start index.html  # Windows
```

### Option 2: Deploy to GitHub Pages
```bash
git clone https://github.com/yourusername/pdf-tools.git
cd pdf-tools
git push origin main
# Then enable GitHub Pages in repo Settings → Pages → Source: main branch
```

### Option 3: Deploy to Netlify / Vercel
Simply drag and drop the project folder into Netlify Drop, or connect your GitHub repo.

---

## 📁 Project Structure

```
pdf-tools/
├── index.html              # Landing page — all tool cards
├── css/
│   └── style.css           # Global styles & component system
├── js/
│   └── common.js           # Shared utilities (Utils object)
└── tools/
    ├── reader.html         # PDF Reader
    ├── merger.html         # PDF Merger
    ├── splitter.html       # PDF Splitter
    ├── compressor.html     # PDF Compressor
    ├── protect.html        # Password Protect
    ├── unlock.html         # Remove Password
    ├── reorder.html        # Reorder / Delete / Rotate
    ├── watermark.html      # Remove Watermark
    ├── page-numbers.html   # Add Page Numbers
    ├── word-to-pdf.html    # Word → PDF
    ├── text-to-pdf.html    # Text → PDF
    └── xls-to-pdf.html     # Excel → PDF
```

---

## 🔧 Technologies Used

| Library | Purpose |
|---|---|
| [**pdf-lib**](https://pdf-lib.js.org/) v1.17 | PDF creation, merging, editing, page manipulation |
| [**PDF.js**](https://mozilla.github.io/pdf.js/) v3.11 | Rendering PDF pages to canvas (reader, thumbnails) |
| [**Mammoth.js**](https://github.com/mwilber/mammoth.js) v1.6 | Parsing .docx Word documents to HTML |
| [**SheetJS (xlsx)**](https://sheetjs.com/) v0.18 | Parsing Excel/CSV spreadsheets |
| No build tools | Pure HTML/CSS/JS — zero dependencies to install |

---

## 🏗 Adding a New Tool

1. Create `tools/your-tool.html` following the existing pattern
2. Add a card in `index.html` pointing to your new tool
3. Use the `Utils` helpers from `js/common.js` for common operations

**Template:**
```html
<!-- tools/your-tool.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Your Tool — PDFTools</title>
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>
  <nav>
    <a class="nav-logo" href="../index.html">PDF<span>Tools</span></a>
  </nav>
  <div class="tool-page">
    <a class="back-link" href="../index.html">← Back</a>
    <h1>Your Tool</h1>
    <!-- Drop zone, controls, buttons -->
  </div>
  <script src="https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>
  <script src="../js/common.js"></script>
  <script>
    // Your tool logic
  </script>
</body>
</html>
```

---

## ⚠️ Limitations

- **Password protection**: `pdf-lib` v1.x has limited encryption support. For strong AES-256 encryption, a server-side solution (e.g., pdfcpu, ilovepdf API) is recommended.
- **Watermark removal**: Only works on text-based/annotation watermarks. Image-embedded watermarks require AI-based inpainting.
- **Large files**: Very large PDFs (>50MB) may be slow due to browser memory constraints.
- **Font embedding**: Custom fonts can be added by embedding them via pdf-lib's `embedFont()`.

---

## 📜 License

MIT License — free to use, modify, and distribute.

---

## 🤝 Contributing

Pull requests welcome! Please open an issue first to discuss what you'd like to change.

1. Fork the repo
2. Create your branch: `git checkout -b feature/my-new-tool`
3. Commit: `git commit -m 'Add my new tool'`
4. Push: `git push origin feature/my-new-tool`
5. Open a Pull Request
