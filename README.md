# Headless WordPress & Next.js Enterprise Portfolio

A high-performance, decoupled web architecture built to demonstrate the power of modern web development. This project utilizes WordPress as a headless CMS (hosted on Hostinger) and renders a blazing-fast frontend using Next.js 14 (App Router), deployed on Vercel.

## 🚀 Project Overview

**Role:** Web App/ Headless Front-End Engineer  
**Status:** Live / In Development

This project was built to bridge the gap between the ease of content editing in WordPress and the performance benefits of a React-based frontend. It features a custom "Block Renderer" engine that maps Gutenberg blocks to highly interactive React components, allowing for a dynamic page-building experience without touching code for every content update.

## 🛠️ Tech Stack

### Frontend (The "Head")
* **Framework:** Next.js 14 (App Router, Server Components)
* **Language:** TypeScript
* **Styling:** Tailwind CSS + Scoped CSS Modules
* **State Management:** React Hooks (`useState`, `useEffect`)
* **Animations:** React Slick, CSS3 3D Transforms, Custom SVG Engines
* **Data Fetching:** Apollo Client (GraphQL)

### Backend (The "Body")
* **CMS:** WordPress (Hostinger)
* **API:** WPGraphQL (to expose data to Next.js)
* **Plugins:** ACF (Advanced Custom Fields), WPGraphQL for ACF

---

## ✨ Key Features Implemented

* **Decoupled Architecture:** Zero direct connection between frontend and backend databases, ensuring high security and scalability.
* **Dynamic Routing (`[...slug]`):** A single "Catch-all" route that dynamically fetches page data from WordPress based on the URL structure.
* **Custom Block Renderer:** A robust switch-case engine (`BlockRenderer.tsx`) that intercepts WordPress HTML and replaces specific classes with high-fidelity React components.
* **Complex UI Migrations:** Successfully refactored legacy jQuery/HTML/CSS widgets into pure React components:
    * **3D Book Flip:** An interactive storytelling component with 3D perspective transforms.
    * **Pentagon Services Engine:** An interactive SVG navigation system.
    * **Mixed Arrow Visualization:** A complex, mathematically calculated SVG animation engine for data visualization.
* **Responsive Carousels:** Integrated `react-slick` for touch-friendly, responsive sliders (used for Services and Testimonials).

---

## 🤖 The AI Journey: Collaborative Development

This project serves as a case study in **AI-Augmented Engineering**. I utilized AI (LLMs) not just to write code, but to accelerate architectural decisions and refactoring.

### Challenge 1: The "jQuery to React" Migration
**The Problem:** I had access to high-end, complex UI animations (The "Pentagon" and "Mixed Arrow" engines) written in legacy jQuery and static HTML. They were incompatible with the Next.js Virtual DOM.
**The Solution:** I acted as the Architect, deconstructing the logic of the animations. I guided the AI to strip out the DOM manipulation (`document.querySelector`) and replace it with React State (`useState`). We successfully ported 100% of the visual fidelity while making the code type-safe and modular.

### Challenge 2: The Dynamic Block Renderer
**The Problem:** WordPress sends raw HTML. We needed a way to inject complex React components (like the Carousel) inside that raw HTML stream.
**The Solution:** We built a `BlockRenderer` component. Instead of hardcoding pages, we used a class-based trigger system. If the CMS sends a `<div>` with class `section-wpdev-carousel`, Next.js intercepts it and mounts the full interactive React component in its place.

### Challenge 3: Type Safety & Component Isolation
**The Problem:** Porting CSS from various sources caused style leaks and global conflicts.
**The Solution:** We implemented Scoped CSS patterns within Next.js components, ensuring that the "Pentagon" styles didn't break the "Book" styles, maintaining a clean global namespace.

---

## 📦 Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/headless-wp-portfolio.git](https://github.com/yourusername/headless-wp-portfolio.git)
    cd headless-wp-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # Note: Requires Node.js 18+
    ```

3.  **Configure Environment Variables:**
    Create a `.env.local` file in the root:
    ```env
    NEXT_PUBLIC_WORDPRESS_API_URL=[https://your-wordpress-site.com/graphql](https://your-wordpress-site.com/graphql)
    ```

4.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📬 Contact

**Ekrama Taimuri** *WordPress Expert & Web App/ Headless Front-End Engineer* https://www.wpfedev.com/
