import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SITE } from "@/lib/site";
import { PageHero } from "./services";
import { Reveal } from "@/components/site/motion";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
  head: () => ({
    meta: [
      { title: `Project Gallery — ${SITE.name}` },
      { name: "description", content: "Recent CCTV, IT infrastructure, networking and electrical projects delivered by Wintech across Mysore." },
      { property: "og:title", content: `Project Gallery — ${SITE.name}` },
      { property: "og:description", content: "Recent installations and projects across Mysore." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

interface Project { title: string; category: string; img: string }

const CATS = ["All", "CCTV", "Office IT", "Server & Network", "Electrical", "Biometrics", "Hotel Maintenance"];

const CAT_DESCRIPTIONS: Record<string, string> = {
  "CCTV": "We install, service and maintain CCTV camera systems — cabling, DVR/NVR setup, remote viewing and ongoing technical support.",
  "Office IT": "We set up and maintain office IT — computers, LAN cabling, workstations and day-to-day technical support for businesses.",
  "Server & Network": "We install and maintain servers and networking — structured cabling, server racks and Windows Server setups.",
  "Electrical": "We handle electrical installation and maintenance — panel boards, MCBs, UPS and inverter setups for homes and businesses.",
  "Biometrics": "We install and maintain biometric attendance systems for offices and factories.",
  "Hotel Maintenance": "I maintain these hotel's CCTV systems and handle the technical work involved — installation, servicing and ongoing support.",
};

// --------------------------------------------------------------------------
// AUTO-LOADED IMAGES
// Drop any image files (any filename, any of jpg/jpeg/png/webp) into these
// folders and they will show up automatically — no filename list to maintain,
// so this can't silently break the way a hardcoded list can.
//   src/assets/gallery/cctv/
//   src/assets/gallery/office-it/
//   src/assets/gallery/server-network/
//   src/assets/gallery/electrical/
//   src/assets/gallery/biometrics/
// --------------------------------------------------------------------------

function loadFolder(pattern: Record<string, string>, category: string): Project[] {
  return Object.entries(pattern)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, url], i) => {
      const filename = path.split("/").pop() ?? `${category} ${i + 1}`;
      const niceName = filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
      return { title: niceName || `${category} Project ${i + 1}`, category, img: url };
    });
}

const cctvImages = import.meta.glob("/src/assets/gallery/cctv/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const officeImages = import.meta.glob("/src/assets/gallery/office-it/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const serverImages = import.meta.glob("/src/assets/gallery/server-network/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const electricalImages = import.meta.glob("/src/assets/gallery/electrical/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const biometricsImages = import.meta.glob("/src/assets/gallery/biometrics/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

// Hotel Maintenance is left exactly as it was — it already works.
const HOTEL_PROJECTS: Project[] = [
  { title: "YUVRAJ COMFORTS", category: "Hotel Maintenance", img: `${import.meta.env.BASE_URL}YUVRAJ COMFORTS.jpg` },
  { title: "YUVRAJ PALACE INN", category: "Hotel Maintenance", img: `${import.meta.env.BASE_URL}YUVRAJ PALACE INN.jpg` },
  { title: "YUVRAJ GALAXY INN", category: "Hotel Maintenance", img: `${import.meta.env.BASE_URL}YUVRAJ GALAXY INN.jpg` },
  { title: "YUVRAJ LE ROYALE", category: "Hotel Maintenance", img: `${import.meta.env.BASE_URL}YUVRAJ LE ROYALE.jpg` },
  { title: "YUVRAJ LANDMARK", category: "Hotel Maintenance", img: `${import.meta.env.BASE_URL}YUVRAJ LANDMARK.jpg` },
];

const PROJECTS: Project[] = [
  ...loadFolder(cctvImages, "CCTV"),
  ...loadFolder(officeImages, "Office IT"),
  ...loadFolder(serverImages, "Server & Network"),
  ...loadFolder(electricalImages, "Electrical"),
  ...loadFolder(biometricsImages, "Biometrics"),
  ...HOTEL_PROJECTS,
];

function Gallery() {
  const [cat, setCat] = useState<string>("All");

  const list =
    cat === "All"
      ? CATS.filter((c) => c !== "All")
          .map((c) => PROJECTS.find((p) => p.category === c))
          .filter((p): p is Project => Boolean(p))
      : PROJECTS.filter((p) => p.category === cat);

  const countByCategory = (category: string) =>
    PROJECTS.filter((p) => p.category === category).length;

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Recent projects across Mysore"
        sub="A snapshot of installations, setups and service work we've delivered for offices, retail and homes."
      />
      <section className="section-pad">
        <div className="container-x">
          <div className="flex flex-wrap gap-2 justify-center">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  cat === c
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "border border-border bg-card text-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {cat !== "All" && CAT_DESCRIPTIONS[cat] && (
            <Reveal>
              <p className="mx-auto mt-8 max-w-2xl text-center text-sm sm:text-base text-muted-foreground">
                {CAT_DESCRIPTIONS[cat]}
              </p>
            </Reveal>
          )}

          {list.length === 0 && cat !== "All" && (
            <p className="mt-10 text-center text-sm text-muted-foreground">
              No photos yet in this category — drop image files into{" "}
              <code>src/assets/gallery/{cat.toLowerCase().replace(/\s+/g, "-").replace("&", "")}</code> and they'll appear here.
            </p>
          )}

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => {
              const isCover = cat === "All";
              const count = countByCategory(p.category);
              return (
                <Reveal key={`${p.category}-${p.title}-${i}`} delay={i * 60}>
                  <figure
                    onClick={isCover ? () => setCat(p.category) : undefined}
                    className={`group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm ${
                      isCover ? "cursor-pointer" : ""
                    }`}
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={p.img}
                        alt={p.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <figcaption className="p-5">
                      {isCover ? (
                        <div className="flex items-center justify-between gap-2">
                          <div className="text-sm font-semibold uppercase tracking-wider text-accent">
                            {p.category}
                          </div>
                          {count > 1 && (
                            <div className="shrink-0 rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-semibold text-secondary-foreground">
                              {count} photos
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="font-semibold text-red-600">{p.title}</div>
                      )}
                    </figcaption>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </figure>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}