
<p align="center">
  <img src="https://res.cloudinary.com/dgbngcvkl/image/upload/v1759943070/Foto-Perfil_cbibmq.png" width="130" height="130" style="border-radius: 50%;" alt="Samuel Utrilla">
</p>

<h1 align="center">💻 Portfolio - Samuel Utrilla</h1>

<p align="center">
  <b>Full-Stack Web Developer</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
</p>

<p align="center">
  <b>Laravel · React/Vite · MySQL · PHP · JavaScript · Java</b>
</p>

---

## 🚀 Live Demo

> 🔗 **[View Portfolio](https://url.vercel.app)**

---

## 📖 Description
> 🌐 **Language:** English | [Español](./README.es.md)

Professional personal portfolio designed to showcase my projects and skills as a **Junior Full-Stack Developer**. Combines modern design with glassmorphism, smooth animations, and high performance.

Built from scratch with **React 19 + Vite**, following best development practices, smooth animations with **Framer Motion**, and carefully crafted design in **Figma**.

### ✨ Key Features

- 🎨 **Glassmorphism design** with violet/pink gradients
- ⚡ **Smooth animations** with Framer Motion
- 🌐 **Bilingual** (Spanish / English) with react-i18next
- 📱 **100% Responsive** - Mobile-first design
- ♿ **Accessible** - WCAG best practices
- 🎯 **Modular & reusable components**
- 🚀 **Production-ready** optimized with Vite
- 📧 **Functional contact form**
- 🎪 **Project carousel** with smart autoplay

---

## 🧩 Technologies Used

### 🖥️ Frontend

- ⚛️ **React 19** - Main framework
- ⚡ **Vite 5** - Build tool & dev server
- 🎞️ **Framer Motion** - Animations and transitions
- 🌐 **react-i18next** - Internationalization
- 🎨 **CSS Custom Properties** - Native CSS variables
- 🎯 **React Icons** - Modern iconography
- 🧱 **Modular architecture** - Reusable components

### 🛠️ Development Tools

- **Node.js 20+** - Runtime environment
- **ESLint** - Linter with modern rules
- **Git** - Version control
- **Figma** - UI/UX design
- **Vercel** - Hosting & deployment

---

## 📸 Screenshots

### Desktop

<p align="center">
	<img src="https://res.cloudinary.com/dgbngcvkl/image/upload/v1760982534/escritorio-1_z07d01.png" width="800">
	<img src="https://res.cloudinary.com/dgbngcvkl/image/upload/v1760982534/escritorio-2_lnsf6r.png" width="800">
	<img src="https://res.cloudinary.com/dgbngcvkl/image/upload/v1760982534/escritorio-3_gtlmjq.png" width="800">
	<img src="https://res.cloudinary.com/dgbngcvkl/image/upload/v1760982534/escritorio-4_wpe8nb.png" width="800">
	<img src="https://res.cloudinary.com/dgbngcvkl/image/upload/v1760982535/escritorio-5_nga7xl.png" width="800">
</p>

### Mobile

<p align="center">
	<img src="https://res.cloudinary.com/dgbngcvkl/image/upload/v1760982127/iPhone-13-1_zmdbis.png" width="250">
	<img src="https://res.cloudinary.com/dgbngcvkl/image/upload/v1760982277/iPhone-13-2_cxmvai.png" width="250">
	<img src="https://res.cloudinary.com/dgbngcvkl/image/upload/v1760982127/iPhone-13-3_fywpjo.png" width="250">
	<img src="https://res.cloudinary.com/dgbngcvkl/image/upload/v1760982127/iPhone-13-4_zbtai4.png" width="250">
	<img src="https://res.cloudinary.com/dgbngcvkl/image/upload/v1760982128/iPhone-13-5_wvlzxx.png" width="250">
	<img src="https://res.cloudinary.com/dgbngcvkl/image/upload/v1760982127/iPhone-13-6_ftcu2n.png" width="250">
</p>

---

## ✅ Current Status (v1.0)

- ✅ Complete structure: Navbar, Hero, About, Stacks, Projects, Contact, Footer
- ✅ Glassmorphism design with gradients and visual effects
- ✅ Framer Motion animation system implemented
- ✅ Functional carousel with autoplay and hover/touch pause
- ✅ Contact form + mailto option
- ✅ Fully functional ES/EN internationalization
- ✅ Responsive design validated across multiple devices
- ✅ Organized and documented code
- ✅ SEO & performance optimized

---

## 🧭 Local Installation

### Prerequisites

- Node.js 20+ and npm installed
- Git installed

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/samuel-un/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

---

## 🧱 Project Structure

```
react-portfolio/
├── public/
│   └── Samuel_Utrilla_CV.pdf       # Downloadable CV
├── src/
│   ├── components/                  # React components
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Projects/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   └── UI/                      # Shared components
│   ├── data/                        # Static data
│   │   ├── projects.js
│   │   └── skills.js
│   ├── i18n/                        # Internationalization
│   │   ├── index.js
│   │   └── locales/
│   │       ├── es/
│   │       └── en/
│   ├── styles/                      # Global styles
│   │   ├── variables.css
│   │   ├── base.css
│   │   ├── layout.css
│   │   └── responsive.css
│   ├── App.jsx                      # Main component
│   └── main.jsx                     # Entry point
├── package.json
├── vite.config.js
├── eslint.config.js
├── README.md
└── LICENSE
```

---

## 🌐 Internationalization

The portfolio includes full support for Spanish and English.

### How it works

1. **Configuration** in `src/i18n/index.js`
2. **Translations** in `src/i18n/locales/{es,en}/common.json`
3. **Initialization** in `main.jsx`
4. **Usage in components**:

```jsx
import { useTranslation } from "react-i18next";

function Component() {
	const { t } = useTranslation();
	return <h1>{t("hero.title")}</h1>;
}
```

5. **Language switching**: `LanguageSwitcher` handles switching and persists the preference in `localStorage`

---

## 🧑‍💻 Author

**Samuel Utrilla**

📍 Seville, Spain  
🎯 Full-Stack Web Developer (Laravel & React)  
💼 Seeking opportunities as a junior developer

### Connect with me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/samuel-un/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/samuel-un)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://your-vercel-url.vercel.app)

---

## 📄 License

This project is licensed under the **MIT License**.  
See the [LICENSE](./LICENSE) file for details.
