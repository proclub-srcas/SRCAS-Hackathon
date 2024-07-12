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
    images: "https://drive.google.com/file/d/10-qw0jDBy2Rm0oyDv7j8Q6zMr4naBQuU/view?usp=sharing", 
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-50RJG4PPLT"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-50RJG4PPLT');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
