import "./globals.css";

export const metadata = {
  title: "itsfizz digital — Scroll-Driven Hero",
  description: "Scroll-driven hero section animation for itsfizz digital, built with Next.js, Tailwind CSS and GSAP.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
