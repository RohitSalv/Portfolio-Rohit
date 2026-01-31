# Portfolio - Rohit Salve

Welcome to the source code of my personal portfolio website! This project showcases my skills, projects, and certifications as a Java Full Stack Developer. It is built with modern web technologies to ensure a responsive, interactive, and visually appealing experience.

## 🚀 Live Demo
*(Add your live deployment link here, e.g., Vercel)*

## 🛠️ Tech Stack

This portfolio is built using the following technologies:

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons/Assets:** Custom 3D Avatars & Icons
- **Animation:** CSS Animations (Float, Wave, Fade-in)

## ✨ Features

- **Responsive Design:** Optimized for Desktops, Tablets, and Mobile devices.
- **Modern UI:** Glassmorphism headers, gradient buttons, and clean spacious layout.
- **Interactive Elements:**
  - Sticky Navigation with Mobile Dropdown.
  - Smooth Scrolling to sections.
  - Hover effects on project cards and skills.
- **Dynamic Content:**
  - **Hero Section:** engaging intro with a 3D avatar.
  - **About Me:** Detailed bio with LinkedIn integration.
  - **Skills:** Grid layout displaying technical proficiency.
  - **Projects:** Showcasing key projects (Pixory, Unbound, Sahara) with banners and links.
  - **Certifications & Achievements:** specialized section for awards and learning.
  - **Contact:** Easy access to social links and email.

## 📂 Project Structure

```
d:/portfolio/
├── app/                  # App Router directories
│   ├── layout.tsx        # Root layout with fonts & global styles
│   ├── page.tsx          # Main landing page assembling components
│   ├── globals.css       # Global styles & Tailwind directives
│   ├── navbar.tsx        # Responsive Navigation
│   ├── hero.tsx          # Hero Section
│   ├── aboutme.tsx       # About Me Section
│   ├── MySkills.tsx      # Skills Grid
│   ├── MyProjects.tsx    # Projects Showcase
│   ├── Certifications.tsx# Certifications & Awards
│   ├── ContactInfo.tsx   # Contact Section
│   └── footer.tsx        # Footer
├── public/               # Static assets (Images, Icons, Resume)
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
└── package.json          # Dependencies and scripts
```

## 🏃‍♂️ Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to view the site.

## 📝 Customization

- **Update Personal Info:** Edit the text in `app/hero.tsx` and `app/aboutme.tsx`.
- **Add Projects:** Modify the `projects` array in `app/MyProjects.tsx`.
- **Update Skills:** Modify the `skills` array in `app/MySkills.tsx`.
- **Change Resume:** Replace `public/Resume Rohit Salve.pdf` with your own file.

## 📬 Contact

**Rohit Salve**
- **Email:** salver814@gmail.com
- **LinkedIn:** [Rohit Salve](https://www.linkedin.com/in/rohit-salve-6054b324a/)
- **GitHub:** [RohitSalv](https://github.com/RohitSalv)

---
*Made with ❤️ by Rohit Salve*
