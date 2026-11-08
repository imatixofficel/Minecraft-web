<div align="center">

<img src="./docs/logo.png" width="128" alt="Matix Minecraft" />

# Matix Minecraft
### ماینکرفت جاوا، مستقیم در مرورگر شما

**Created by Matix** · رابط فارسی با فونت وزیر · چندنفره‌ی محلی · موبایل

<br/>

[![Deploy](https://img.shields.io/badge/GitHub%20Pages-Deploy-0000ff?style=for-the-badge&logo=github)](#-انتشار-روی-github-pages)
[![Persian](https://img.shields.io/badge/UI-فارسی%20%7C%20English-0000ff?style=for-the-badge)](#-زبان-فارسی)
[![License](https://img.shields.io/badge/License-MIT-0000ff?style=for-the-badge)](#-منبع-و-لایسنس)

</div>

---

<div dir="rtl">

## 📦 منبع پروژه

> [!IMPORTANT]
> **این پروژه یک فورک (نسخه‌ی شخصی‌سازی‌شده) است.**
>
> | | |
> |---|---|
> | **پروژه‌ی اصلی** | [`zardoy/minecraft-web-client`](https://github.com/zardoy/minecraft-web-client) (شاخه‌ی `next`) |
> | **نسخه‌ی آنلاین اصلی** | [mcraft.fun](https://mcraft.fun) |
> | **لایسنس** | MIT: استفاده، تغییر و انتشار آزاد است |
> | **شخصی‌سازی و فارسی‌سازی** | **Matix** |
>
> توضیحات کامل پروژه‌ی اصلی در [`docs/README.upstream.MD`](./docs/README.upstream.MD) نگهداری شده است.

---

## ✨ امکانات

| | ویژگی | توضیح |
|:--:|---|---|
| 🌐 | **کاملاً در مرورگر** | بدون نصب؛ روی کامپیوتر و موبایل اجرا می‌شود |
| 🇮🇷 | **رابط فارسی** | ترجمه‌ی منوها و تنظیمات با فونت **وزیرمتن**؛ تغییر زبان با یک کلیک |
| 👥 | **چندنفره‌ی محلی** | یک سرور ماینکرفت روی سیستم خودتان؛ دوستان فقط آدرس را باز می‌کنند |
| 📱 | **موبایل** | جویستیک و دکمه‌های لمسی، بدون نیاز به تنظیم |
| 🔌 | **اتصال به سرور** | آدرس با اعداد فارسی هم پذیرفته می‌شود؛ سرورهای `wss://` بدون پروکسی |
| 🏠 | **تک‌نفره** | ساخت دنیا و بازی آفلاین در خود مرورگر |
| 🎨 | **شخصی‌سازی** | آیکون و نام Matix، بدون تبلیغ و بدون ابزار ردیابی خارجی |

---

## 🚀 انتشار روی GitHub Pages

> [!TIP]
> انتشار کاملاً خودکار است و با **GitHub Actions** انجام می‌شود (فایل [`.github/workflows/pages.yml`](./.github/workflows/pages.yml)).

**۱.** پروژه را در یک ریپوی GitHub قرار دهید (شاخه‌ی `main`).

**۲.** به مسیر **Settings ← Pages** بروید و در بخش **Source** گزینه‌ی **GitHub Actions** را انتخاب کنید.

**۳.** به تب **Actions** بروید، workflow با نام **Deploy to GitHub Pages** را انتخاب و **Run workflow** را بزنید. بعد از هر push روی `main` هم خودکار اجرا می‌شود.

**۴.** بعد از حدود ۱۰ دقیقه، سایت در این آدرس آماده است:

```
https://USERNAME.github.io/REPO/
```

> [!WARNING]
> حتماً Source را روی **GitHub Actions** بگذارید، نه «Deploy from a branch». در غیر این صورت فایل‌های بیلد (مثل `mesher.js`) منتشر نمی‌شوند و بازی خطای 404 می‌دهد.

---

## 👥 چندنفره روی سرور محلی

> [!NOTE]
> سرور روی **سیستم شما** اجرا می‌شود و نیازی به اینترنت یا سرویس خارجی ندارد. بازیکنان باید در یک شبکه (مثلاً یک Wi-Fi) باشند.

```bash
pnpm install
pnpm build
pnpm start-lan
```

این دستور **بازی + پروکسی + یک سرور واقعی ماینکرفت** (پورت ۲۵۵۶۵) را اجرا می‌کند و آدرس‌ها را چاپ می‌کند، مثلاً `http://192.168.1.10:8080`.

| مرحله | کار |
|:--:|---|
| 1️⃣ | هر بازیکن آدرس چاپ‌شده را در مرورگر باز می‌کند |
| 2️⃣ | روی **اتصال به سرور** و سپس **سرور محلی (شبکه)** می‌زند |
| 3️⃣ | با هم بازی می‌کنند 🎮 |

**تنظیمات اختیاری:** `MC_GAMEMODE=0` (بقا)، `MC_VERSION=1.20.4` (نسخه)، `PORT=8080` (پورت بازی).

---

## 🇮🇷 زبان فارسی

- زبان از **منوی اصلی** (دکمه‌ی زبان) یا **تنظیمات ← Language** عوض می‌شود.
- اگر مرورگر شما فارسی باشد، بازی خودکار فارسی باز می‌شود.
- ترجمه‌ها در [`src/i18n/fa.ts`](./src/i18n/fa.ts) هستند. رشته‌ی ترجمه‌نشده انگلیسی می‌ماند و اضافه کردن ترجمه‌ی جدید فقط یک خط است.
- فونت: [وزیرمتن (Vazirmatn)](https://github.com/rastikerdar/vazirmatn) با لایسنس OFL.

---

## 🛠 اجرای محلی برای توسعه

```bash
pnpm install
pnpm start        # حالت توسعه
pnpm build        # بیلد نهایی در پوشه‌ی dist
```

---

## 🧯 عیب‌یابی

| مشکل | راه‌حل |
|---|---|
| `Mesher script HTTP 404` | Source در Pages روی **GitHub Actions** نیست، یا بیلد کامل انجام نشده |
| `worldgen datapack fetch failed 404` | همان بالا؛ لاگ مرحله‌ی build را در Actions بررسی کنید |
| اتصال به سرور ناموفق | سرور عمومی نیاز به پروکسی دارد؛ در فرم، **Proxy Override** را پر کنید یا از `wss://` استفاده کنید |

---

## 📜 منبع و لایسنس

ساخته‌شده توسط **Matix** بر پایه‌ی [`zardoy/minecraft-web-client`](https://github.com/zardoy/minecraft-web-client) (MIT).
این پروژه به Mojang و Microsoft وابسته نیست. Minecraft نام تجاری Mojang Studios است.

</div>

---

<div align="center">

## 🇬🇧 English

</div>

> [!IMPORTANT]
> **Matix Minecraft** is a customized fork of [`zardoy/minecraft-web-client`](https://github.com/zardoy/minecraft-web-client) (MIT), live at [mcraft.fun](https://mcraft.fun).
> Full original documentation: [`docs/README.upstream.MD`](./docs/README.upstream.MD).

| Feature | Details |
|---|---|
| 🌐 In-browser | Java Edition client + integrated server, desktop and mobile |
| 🇮🇷 Persian UI | Vazirmatn font, one-click language switch (main menu / Options → Language) |
| 👥 Local multiplayer | `pnpm build && pnpm start-lan`, everyone opens the printed address and picks **Local server (LAN)** |
| 🔌 Servers | Persian digits accepted in addresses, `wss://` servers need no proxy |
| 🎨 Custom | Matix branding, no external analytics |

> [!TIP]
> **Deploy to GitHub Pages:** Settings → Pages → Source: **GitHub Actions**, then run the **Deploy to GitHub Pages** workflow ([`pages.yml`](./.github/workflows/pages.yml)).

<div align="center">

**Created by Matix** · MIT License

</div>
