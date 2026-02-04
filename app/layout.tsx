import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rohitsalve.in"),
  title: {
    default: "Rohit Salve | Java Full Stack Developer",
    template: "%s | Rohit Salve",
  },
  description: "Portfolio of Rohit Salve, a Java Full Stack Developer specializing in Spring Boot, Angular, and AI-powered applications.",
  keywords: ["Rohit Salve", "Portfolio", "Java Developer", "Full Stack Developer", "Spring Boot", "Angular", "Software Engineer"],
  authors: [{ name: "Rohit Salve" }],
  creator: "Rohit Salve",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rohitsalve.in",
    title: "Rohit Salve | Java Full Stack Developer",
    description: "Explorer the portfolio of Rohit Salve, featuring AI-assisted projects and full-stack applications.",
    siteName: "Rohit Salve Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Salve | Java Full Stack Developer",
    description: "Portfolio of Rohit Salve, featuring projects in Spring Boot, Angular, and AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rohitsalve.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-24">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Rohit Salve",
              "jobTitle": "Java Full Stack Developer",
              "url": "https://rohitsalve.in",
              "sameAs": [
                "https://github.com/RohitSalv",
                "https://www.linkedin.com/in/rohit-salve-6054b324a/"
              ],
              "knowsAbout": ["Java", "Spring Boot", "Angular", "MySQL", "AI Implementation", "Web Development"],
              "description": "Java Full Stack Developer specializing in Spring Boot and Angular."
            })
          }}
        />
      </head>
      <body
        className={`${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
