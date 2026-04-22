# 📚 PANDUAN LENGKAP HOSTING PORTFOLIO

## ✅ Apa yang Sudah Diperbaiki

1. **Path Gambar Diperbaiki**: Dari `/src/Foto/...` menjadi `/Foto/...`
   - File `src/data/data.js` 
   - File `src/pages/Home.jsx`

2. **Gambar Dipindahkan**: Dari `src/Foto/` ke `public/Foto/`
   - Sehingga gambar bisa di-serve dengan benar di production

---

## 🚀 LANGKAH-LANGKAH HOSTING

### **STEP 1: Test Lokal (Pastikan Gambar Muncul)**

```bash
cd my-project
npm install
npm run dev
```
Buka browser → `http://localhost:5173`
✔️ Pastikan semua gambar sudah muncul dengan baik

---

### **STEP 2: Build untuk Production**

```bash
npm run build
```

Ini akan membuat folder `dist/` yang siap di-deploy.

---

### **STEP 3: Deploy ke Vercel (GRATIS & MUDAH)**

**Opsi A: Via GitHub (REKOMENDASI)**

1. **Buat akun GitHub** (jika belum): https://github.com/signup
2. **Push project ke GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/portfolio.git
   git push -u origin main
   ```

3. **Signup Vercel**: https://vercel.com
4. **Import Project**:
   - Klik "Add New..." → "Project"
   - Pilih repository portfolio dari GitHub
   - Klik "Import"
   - Biarkan settings default (auto-detect React + Vite)
   - Klik "Deploy"

5. **Selesai!** Dalam 1-2 menit, portfolio akan live di URL yang diberikan Vercel

---

**Opsi B: Direct Upload ke Vercel**

1. Download & install **Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. Deploy langsung:
   ```bash
   cd my-project
   vercel
   ```

3. Follow instruksi di terminal (login → confirm settings → deploy)

---

### **STEP 4: Setup Domain Custom (OPSIONAL)**

Jika ingin domain sendiri (misal: portfolio.com):

1. Beli domain di: **Namecheap**, **Google Domains**, atau **IDwebhost**
2. Di Vercel Dashboard → Project Settings → Domains
3. Tambah domain custom
4. Update nameserver di registrar domain
5. Tunggu ~24 jam untuk propagasi

---

## 🎯 ALTERNATIF HOSTING (Selain Vercel)

| Platform | Gratis | Mudah | Catatan |
|----------|--------|-------|---------|
| **Vercel** | ✅ | ✅ | Best for React/Vite |
| **Netlify** | ✅ | ✅ | Deploy from Git |
| **GitHub Pages** | ✅ | ⚠️ | Perlu konfigurasi |
| **Firebase Hosting** | ✅ | ⚠️ | Google's platform |
| **Railway** | ⚠️ | ✅ | Paid after free tier |

---

## 🔍 CHECKLIST SEBELUM DEPLOY

- [ ] Run `npm run build` tanpa error
- [ ] Buka `dist/` folder ada file HTML/JS/CSS
- [ ] Cek gambar sudah di `public/Foto/`
- [ ] Vercel/Netlify account sudah dibuat
- [ ] Repository sudah di-push ke GitHub (jika pakai Vercel)

---

## 📌 TROUBLESHOOTING

### ❌ Gambar tidak muncul di hosting?
```
✔️ Pastikan di public/Foto/ ada file gambar
✔️ Cek path di data.js: /Foto/nama-file.png
✔️ Restart build: npm run build
✔️ Clear cache browser: Ctrl+Shift+Delete
```

### ❌ Build gagal?
```bash
# Clear dependencies
rm -r node_modules package-lock.json
npm install
npm run build
```

### ❌ Vercel deploy error?
```
✔️ Cek apakah ada file .gitignore yang hide penting files
✔️ Pastikan package.json ada di root directory
✔️ Check build logs di Vercel dashboard
```

---

## 💡 TIPS

- **Update Portfolio**: Push perubahan ke GitHub → Vercel auto-deploy
- **Monitoring**: Set up Sentry/LogRocket untuk track errors
- **Analytics**: Add Google Analytics untuk track visitors
- **Performance**: Optimize gambar dengan tools seperti TinyPNG

---

## 📧 Bantuan & Referensi

- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev/
- React Best Practices: https://react.dev/

**Portfolio siap di-hosting! 🎉**

---

*Last Updated: 22 April 2026*
