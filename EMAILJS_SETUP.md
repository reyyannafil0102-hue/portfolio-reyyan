# 📧 SETUP EMAILJS UNTUK CONTACT FORM

## 🚀 Langkah-Langkah Setup

### **Step 1: Daftar di EmailJS**
1. Buka: https://www.emailjs.com/
2. Klik **"Sign Up Free"**
3. Pilih akun (Gmail, GitHub, atau email langsung)
4. Verifikasi email

---

### **Step 2: Tambah Email Service**
1. Di dashboard EmailJS, buka tab **"Email Services"**
2. Klik **"Add Service"**
3. Pilih **"Gmail"** (atau email provider lain)
4. Authorize EmailJS untuk akses Gmail
5. Beri nama service: `gmail_service` (atau nama apapun)
6. **COPY SERVICE ID** - akan dipakai nanti ✓

---

### **Step 3: Buat Email Template**
1. Buka tab **"Email Templates"**
2. Klik **"Create New Template"**
3. Template Name: `contact_form` (atau nama apapun)
4. Copy-paste template di bawah ke editor:

```html
Nama: {{from_name}}
Email: {{from_email}}
Subjek: {{subject}}
Pesan:
{{message}}
---
Terkirim dari Portfolio Website
```

5. **COPY TEMPLATE ID** ✓

---

### **Step 4: Dapatkan Public Key**
1. Buka **"Account"** (ikon profile)
2. Lihat **"API Key"** atau **"Public Key"**
3. **COPY PUBLIC KEY** ✓

---

### **Step 5: Update Contact.jsx dengan Keys**

Edit file `src/pages/Contact.jsx` dan ganti:

**Line 5:**
```javascript
emailjs.init("YOUR_PUBLIC_KEY");
```
Menjadi:
```javascript
emailjs.init("paste_public_key_anda_di_sini");
```

**Line 25-26:**
```javascript
"service_YOUR_SERVICE_ID",  // Service ID
"template_YOUR_TEMPLATE_ID", // Template ID
```
Menjadi:
```javascript
"service_gmail_service",     // atau service name yang Anda pilih
"template_contact_form",     // atau template name yang Anda pilih
```

---

### **Step 6: Test Form**

```bash
npm run dev
```

1. Buka browser → Contact section
2. Isi form dengan test data
3. Klik **"Kirim Pesan"**
4. Check inbox Gmail Anda - pesan harus terkirim! ✓

---

## 📌 Contoh Lengkap

**File:** `src/pages/Contact.jsx` (Line 1-32)

```javascript
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import DATA from "../data/data";

// ✅ Ganti dengan public key dari EmailJS dashboard
emailjs.init("pk_123abc456def789");

export default function Contact({ sectionRef }) {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Mengirim...");

    try {
      // ✅ Ganti dengan SERVICE ID & TEMPLATE ID kamu
      const result = await emailjs.send(
        "service_abc123xyz",    // Service ID
        "template_xyz789abc",   // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: DATA.email,
        }
      );
      // ... rest of code
```

---

## 🛠️ Troubleshooting

### ❌ "Invalid Service ID"
- Pastikan Service ID sudah dibuat di EmailJS
- Check Service ID di email service settings

### ❌ "Invalid Template ID"
- Template belum dibuat atau nama salah
- Create template di Email Templates tab

### ❌ Pesan tidak dikirim
- Check API Key/Public Key (jangan sampai expired)
- Buka browser console (F12) untuk lihat error details
- Pastikan Gmail account sudah authorized

### ❌ Form stuck "Mengirim..."
- Check koneksi internet
- Check EmailJS quota (free tier ada limit 200/bulan)

---

## 📊 Free Tier EmailJS
- ✅ 200 email per bulan (cukup untuk testing)
- ✅ Unlimited templates
- ✅ Unlimited services
- Upgrade kapan saja jika butuh lebih banyak

---

## 🔐 Security Notes
- Public Key **boleh** dipublikasi di frontend (sudah aman)
- Jangan pernah expose API Key atau Secret Key
- Rate limiting otomatis di EmailJS

---

**Selesai! Form contact Anda siap kirim email via EmailJS! 🎉**

*Update terakhir: 22 April 2026*
