import "./globals.css";
import Navbar from "../app/components/NavBar";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cmp.gatekeeperconsent.com/min.js"
          strategy="beforeInteractive"
          data-cfasync="false"
        />
        <Script
          src="https://the.gatekeeperconsent.com/cmp.min.js"
          strategy="beforeInteractive"
          data-cfasync="false"
        />

        {/* Ezoic Header Script */}
        <Script
          src="//www.ezojs.com/ezoic/sa.min.js"
          strategy="beforeInteractive"
        />

        {/* Ezoic Init */}
        <Script
          id="ezoic-init"
          strategy="beforeInteractive"
        >
          {`
            window.ezstandalone = window.ezstandalone || {};
            ezstandalone.cmd = ezstandalone.cmd || [];
          `}
        </Script>
      </head>

      <body>
        <Navbar />
        <main className="mx-auto max-w-6xl px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
