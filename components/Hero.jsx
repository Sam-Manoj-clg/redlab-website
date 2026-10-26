
"use client";

import Image from "next/image";
import { useState } from "react";

const bentoImages = [
  {
    src: "/bento/marketing-strategy.png",
    alt: "Marketing Strategy",
    width: 1200,
    height: 1200,
    bg: "#080710",
    className: "bento-marketing",
  },
  {
    src: "/bento/clients-served.png",
    alt: "Clients Served",
    width: 1200,
    height: 1200,
    bg: "#e52427",
    className: "bento-clients",
  },
  {
    src: "/bento/vendor-partners.png",
    alt: "Vendor Partners",
    width: 1200,
    height: 1200,
    bg: "#f3f4f6",
    className: "bento-vendors",
  },
  {
    src: "/bento/instore-branding.png",
    alt: "In-store Branding",
    width: 1650,
    height: 928,
    bg: "#ffffff",
    className: "bento-instore",
  },
  {
    src: "/bento/digital-marketing.png",
    alt: "Digital Marketing",
    width: 1650,
    height: 928,
    bg: "#080710",
    className: "bento-digital",
  },
  {
    src: "/bento/retail-branding.png",
    alt: "Retail Branding",
    width: 1200,
    height: 1200,
    bg: "#e52427",
    className: "bento-retail",
  },
  {
    src: "/bento/trade-exhibitions.png",
    alt: "Trade Shows and Exhibitions",
    width: 1650,
    height: 928,
    bg: "#ffffff",
    className: "bento-trade",
  },
  {
    src: "/bento/gifting-promotions.png",
    alt: "Gifting and Promotions",
    width: 1920,
    height: 1080,
    bg: "#DC2626",
    className: "bento-gifting",
  },
  {
    src: "/bento/years-of-excellence.png",
    alt: "60+ Years of Excellence",
    width: 1600,
    height: 1200,
    bg: "#000015",
    className: "bento-years",
  },
  {
    src: "/bento/collective-expertise.png",
    alt: "Collective Expertise",
    width: 1650,
    height: 928,
    bg: "#111827",
    className: "bento-expertise",
  },
];

export default function Hero() {
  const [loadedImages, setLoadedImages] = useState([]);

  const allImagesLoaded = loadedImages.length === bentoImages.length;

  function markLoaded(src) {
    setLoadedImages((previous) =>
      previous.includes(src) ? previous : [...previous, src]
    );
  }

  // Prevent image drag-and-drop.
  function preventImageDrag(event) {
    event.preventDefault();
  }

  // Prevent the browser's image context menu within the Bento section.
  function preventImageContextMenu(event) {
    if (event.target.closest("img")) {
      event.preventDefault();
    }
  }

  // Prevent copying when the user selects content inside this section.
  function preventCopy(event) {
    if (event.target.closest(".bento-card")) {
      event.preventDefault();
    }
  }

  return (
    <section
      className="bento-hero"
      onDragStart={preventImageDrag}
      onDragOver={preventImageDrag}
      onDrop={preventImageDrag}
      onContextMenu={preventImageContextMenu}
      onCopy={preventCopy}
    >
      {!allImagesLoaded && (
        <div className="bento-loader" role="status">
          <div className="loading-0002" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((dot) => (
              <span key={dot} />
            ))}
          </div>
          <p>Loading experience...</p>
        </div>
      )}

      <div
        className={`bento-grid ${
          allImagesLoaded ? "bento-grid-visible" : "bento-grid-hidden"
        }`}
      >
        {bentoImages.map((item) => (
          <div
            key={item.src}
            className={`bento-card ${item.className}`}
            style={{ "--card-bg": item.bg }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              sizes="(max-width: 520px) 50vw, (max-width: 900px) 50vw, 33vw"
              unoptimized
              loading="eager"
              draggable={false}
              onDragStart={preventImageDrag}
              onLoad={() => markLoaded(item.src)}
              onError={() => markLoaded(item.src)}
              className="bento-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
