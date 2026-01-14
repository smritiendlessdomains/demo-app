"use client";

import Script from "next/script";

interface EzoicAdProps {
  id: number;
}

export default function EzoicAd({ id }: EzoicAdProps) {
  return (
    <>
      {/* Ad Placeholder */}
      <div id={`ezoic-pub-ad-placeholder-${id}`} />

      {/* Ad Trigger */}
      <Script
        id={`ezoic-ad-${id}`}
        strategy="afterInteractive"
      >
        {`
          if (window.ezstandalone && ezstandalone.cmd) {
            ezstandalone.cmd.push(function () {
              ezstandalone.showAds(${id});
            });
          }
        `}
      </Script>
    </>
  );
}
