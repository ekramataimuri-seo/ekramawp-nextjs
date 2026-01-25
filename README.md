# Headless WordPress & Next.js Enterprise Portfolio

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![WordPress](https://img.shields.io/badge/WordPress-Headless-21759b?style=for-the-badge&logo=wordpress)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel)

**Live Demo:** [https://www.wpfedev.com/](https://www.wpfedev.com/)

##  Project Overview

This project represents a modern, decoupled web architecture designed to combine the content management capabilities of **WordPress** with the performance and interactivity of **Next.js**.

The goal was to move away from heavy, plugin-reliant WordPress themes and build a lean, high-performance frontend that scores 100/100 on Core Web Vitals while retaining the ease of editing for the marketing team.

## Key Features
* **Decoupled CMS:** WordPress (Hostinger) acts strictly as an API; Next.js (Vercel) handles the frontend.
* **Dynamic Component Mapping:** A custom `BlockRenderer` engine converts specific WordPress Gutenberg blocks into interactive React components.
* **Complex Data Visualization:** Custom-built React engines for interactive graphs (Pentagon, Mixed-Arrow).
* **Responsive Design:** Fully fluid layouts using Tailwind CSS and `react-slick`.

---

##  Table of Contents
- [Tech Stack](#-tech-stack)
- [The AI-Augmented Engineering Process](#-the-ai-augmented-engineering-process-challenges--solutions)
- [Installation & Setup](#-installation--setup)
- [Key Components](#-key-components-implemented)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

##  Tech Stack

* **Frontend Framework:** Next.js 14 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS + Scoped CSS Modules
* **CMS Backend:** WordPress (via WPGraphQL)
* **State Management:** React Hooks (`useState`, `useEffect`)
* **Animations:** CSS3 Transitions, SVG Manipulation
* **Deployment:** Vercel

---

## The AI-Augmented Engineering Process (Challenges & Solutions)

This project was built using an **AI-Collaborative workflow**. As the Front-End Engineer, I solve specific migration challenges. Here is a breakdown of the complex technical issues we faced and how we solved them:

### 1. The "jQuery to React" Migration
**The Issue:**
We needed to port legacy high-fidelity animations (The "Pentagon Engine" and "Mixed Arrow Visualization") that relied heavily on jQuery DOM manipulation (`$`, `document.querySelector`) and imperative code. These libraries broke the React lifecycle and caused hydration errors in Next.js.

**The Solution:**
* **State-Driven Logic:** I refactored the logic to use React's `useState` to track active slides and hover states, removing direct DOM manipulation.
* **SVG Re-architecture:** We converted HTML5 Canvas logic into pure SVG paths calculated dynamically via TypeScript functions, ensuring crisp rendering on all devices.
* **Result:** A 100% visual match with zero external jQuery dependencies and full type safety.

## 2. The Dynamic Block Renderer
**The Issue:**
WordPress sends content as raw HTML strings. We needed a way to inject our complex React components (like the Carousel or Book Flip) into the middle of a blog post or page without hard-coding the page layout in Next.js.

**The Solution:**
* **Class-Based Triggers:** We built a switch-case engine (`BlockRenderer.tsx`). The content editor in WordPress simply adds a specific CSS class (e.g., `section-mixed-arrow`) to a Group Block.
* **Interceptor Pattern:** Next.js intercepts this class during the render phase and swaps the HTML `<div>` for the fully interactive `<MixedArrowEngine />` React component.
* **Result:** The marketing team can drag-and-drop complex interactive apps using the standard WordPress editor.

## 3. CSS Scope Leakage
**The Issue:**
Importing legacy CSS snippets resulted in global namespace pollution, where styles from the "Book Component" were breaking the "Navbar" layout.

**The Solution:**
* **Scoped Styling:** We utilized Next.js `styled-jsx` and CSS Modules to encapsulate styles. This ensures that class names like `.card` or `.active` only apply to the specific component they belong to, preventing regression bugs.

## 4. Deployment Challenges & Solutions (DevOps)
**The Issue:**
Deploying a Next.js app that relies on a dynamic WordPress backend comes with specific production hurdles.

**The Solution:**
* **Image Domain Security:** Configured `next.config.js` to strictly whitelist the Hostinger backend domain to prevent build failures.
* **Mixed Content (HTTP/HTTPS):** Implemented a regex utility in the API fetcher to force all incoming media URLs to `https`, preventing security blocking on Vercel.
* **Static Timeout Management:** Implemented `generateStaticParams` for critical pages only, allowing less critical pages to build on-demand (ISR) to avoid hitting Vercel's build timeout limits.

---

## ⚡ Installation & Setup

Follow these steps to run the project locally.

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/ekramataimuri-seo/ekramawp-nextjs.git](https://github.com/ekramataimuri-seo/ekramawp-nextjs.git)
    cd ekramawp-nextjs
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    # Note: Requires Node.js 18+
    ```

3.  **Configure Environment Variables**
    Create a `.env.local` file in the root directory:
    ```env
    NEXT_PUBLIC_WORDPRESS_API_URL=[https://admin.wpfedev.com/graphql](https://admin.wpfedev.com/graphql)
    ```

4.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 🧩 Key Components Implemented

* **`MixedArrowEngine.tsx`**: A mathematical visualization engine that calculates SVG paths for retention/revenue models using trigonometry.
* **`PentagonServices.tsx`**: An interactive 5-point navigation system with rotating SVG dashed lines.
* **`AISEOBook.tsx`**: A 3D interactive book flip animation using CSS `perspective` and `rotateY`.
* **`WPDevCarousel.tsx`**: A responsive `react-slick` slider optimized for "snappy" UX (500ms transition).

---

## 🤝 Contributing

Contributions are welcome!
1.  Fork the project.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## ✍️ Author

**Ekrama Taimuri**
* **Role:** Web App & Headless WordPress Front-end Developer
* **Website:** [https://www.wpfedev.com/](https://www.wpfedev.com/)
* **Focus:** Bridging the gap between Technical SEO and Modern Web Architecture.

---
