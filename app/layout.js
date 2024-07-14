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
        <script type="text/javascript">
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "n7b6h7wk73");
        </script>
        <link rel="icon" href="/icon.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
