import "./globals.css";
import Script from "next/script";
import "react-toastify/dist/ReactToastify.css";
import "./clash_grotesk.css";

export const metadata = {
  title: "SRCAS Hackathon",
  description:
    "SRCAS Hackathon is the student-run hackathon, which centers on bringing developers and problem solvers from different foundations together and enables them to develop projects that can bring out an impact.",
  keywords: "hackathon, SRCAS, coding, programming, tech",
  url: "https://srcashackathon.live",
  openGraph: {
    title: "SRCAS Hackathon",
    description:
      "SRCAS Hackathon is the student-run hackathon, which centers on bringing developers and problem solvers from different foundations together and enables them to develop projects that can bring out an impact.",
    url: "https://srcashackathon.live",
    images: "https://github.com/proclub-srcas/SRCAS-Hackathon/blob/main/public/srcas-hack-og.png", 
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
