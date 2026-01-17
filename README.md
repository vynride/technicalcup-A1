# Section A1 - Web Wars: Section Showdown

## Live Demo
**[https://technicalcup-a1.vercel.app/](https://technicalcup-a1.vercel.app/)**

## Tech Stack

This project is built using a modern, performance-first stack:

*   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
*   **Language**: JavaScript
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Smooth Scrolling**: [Lenis](https://lenis.studio/)
*   **Fonts**: Montserrat (via `next/font`)

## Key Features

*   **Neobrutalist Design**: A bold, high-contrast aesthetic with hard shadows and vibrant colors to make a strong visual impact.
*   **Responsive Timeline**: An interactive "Journey" timeline on the Blog page to showcase our milestones.
*   **Study Hub Dashboard**: A comprehensive dashboard (`/studyhub`) for students to track schedules, tasks, and deadlines.
*   **Dynamic Gallery**: A curated gallery section to highlight our section's memories.
*   **Smooth Scrolling**: Integrated Lenis for a premium, buttery-smooth scrolling experience.
*   **Mobile Responsive**: Fully optimized for all device sizes, including a custom mobile navigation menu.

## Bonus Tasks & Achievements

We have successfully implemented the following bonus challenges:

### 1. Mascot Implementation
We designed and integrated a custom **Mascot** that embodies the spirit of Section A1.
*   **Consistent Theme**: The mascot uses the same color palette (Mint Green & Black) as the rest of the site.
*   **Integration**: It is prominently featured in the Hero section, Navbar, and Mobile Menu to create a cohesive brand identity.

### 2. SEO Optimization
We have implemented comprehensive SEO practices to ensure maximum visibility:
*   **Metadata**: Custom `title` and `description` for every page (`layout.js`, `studyhub/page.js`, etc.).
*   **Open Graph & Twitter Cards**: High-quality social sharing previews configured in `layout.js` using our mascot image.
*   **Semantic HTML**: Proper use of `<main>`, `<section>`, `<header>`, and `<nav>` tags for better accessibility and structure.
*   **Dynamic Sitemap**: Automatically generated `sitemap.xml` listing all routes (`/`, `/blog`, `/studyhub`, etc.).
*   **Robots.txt**: Configured to allow indexing and point crawlers to the sitemap.

### 3. UI Components Challenge
We have integrated **Neobrutalism.dev**'s component library to enhance our design system, focusing on reusability and aesthetics.
*   **[Scroll Area](https://www.neobrutalism.dev/docs/scroll-area)**: Used in the **Home Page** hero section, **Blog Timeline** event descriptions, and **Profile Page** bio section.
*   **[Button](https://www.neobrutalism.dev/docs/button)**: Used extensively throughout the site, including the **Navbar**, **Home Page** CTAs, and the **Study Hub** dashboard controls.
*   **[Image Card](https://www.neobrutalism.dev/docs/image-card)**: Used in the **The People** section on the Home Page to display team member profiles with a distinct hover effect.

## Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/vynride/technicalcup-A1.git
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the development server**:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---
