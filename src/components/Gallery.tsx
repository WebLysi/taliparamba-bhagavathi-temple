import { Image as ImageIcon, X, ArrowDownAZ, ArrowUpAZ } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useRef, useState } from "react";

// Resolve image path to asset URL (like Committee). Paths from t.gallery.categories.
const galleryAssets = import.meta.glob<{ default: string }>(
  "/src/assets/**/*.{png,jpg,jpeg,svg,webp}",
  { eager: true }
);
function getGalleryImageSrc(path: string): string | null {
  if (!path) return null;
  if (path.startsWith("http") || path.startsWith("/")) return path;
  const filename = path.replace(/^.*[/\\]/, "");
  const key = Object.keys(galleryAssets).find((k) => k.endsWith(filename));
  return key ? galleryAssets[key].default : null;
}

const PAGE_SIZE = 12;
type DateOrder = "new" | "old";

type GalleryImage = { src: string; name: string; date: string };
type GalleryCategory = { id: string; name: string; thumbnail: string; images: GalleryImage[] };

const Gallery = () => {
  const { t, language } = useLanguage();
  const categories = t.gallery.categories ?? [];
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [displayImages, setDisplayImages] = useState<GalleryImage[]>([]);
  const [page, setPage] = useState(0);
  const [dateOrder, setDateOrder] = useState<DateOrder>("new");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const owlInitializedRef = useRef(false);

  const currentCategory = openCategory
    ? categories.find((c: GalleryCategory) => c.id === openCategory)
    : null;

  const getSortedImages = (cat: GalleryCategory): GalleryImage[] => {
    const copy = [...cat.images].sort((a, b) => (a.date || "").localeCompare(b.date || ""));
    return dateOrder === "new" ? copy.reverse() : copy;
  };

  useEffect(() => {
    if (!currentCategory) return;
    const sorted = getSortedImages(currentCategory);
    setDisplayImages(sorted.slice(0, PAGE_SIZE));
    setPage(1);
  }, [openCategory, dateOrder, currentCategory]);

  const loadMore = () => {
    if (!currentCategory) return;
    const sorted = getSortedImages(currentCategory);
    const start = page * PAGE_SIZE;
    const chunk = sorted.slice(start, start + PAGE_SIZE);
    if (chunk.length === 0) return;
    setDisplayImages((prev) => [...prev, ...chunk]);
    setPage((p) => p + 1);
  };

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 80) loadMore();
  };

  // Initialize Owl Carousel 2 (jQuery loaded from CDN in index.html)
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Owl Carousel uses jQuery from CDN
    const $ = (window as any).jQuery;
    const el = containerRef.current;
    if (!el || !$) return;

    const $el = $(el);

    if (owlInitializedRef.current) {
      try {
        $el.trigger("destroy.owl.carousel");
        $el.find(".owl-stage-outer").children().unwrap();
      } catch {
        // ignore
      }
    }

    $el.owlCarousel({
      items: 3,
      loop: true,
      center: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1 },
        640: { items: 2 },
        1024: { items: 3 },
      },
    });

    $el.find(".gallery-cat-card").off("click").on("click", function () {
      const id = $(this).data("cat");
      if (id) setOpenCategory(id as string);
    });

    owlInitializedRef.current = true;

    return () => {
      try {
        $el.trigger("destroy.owl.carousel");
      } catch {
        // ignore
      }
    };
  }, [language]);

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 sm:mb-4 animate-float">
            <ImageIcon className="w-10 h-10 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 px-4">
            {t.gallery.title}
          </h2>
          <p className="text-muted-foreground">{t.gallery.subtitle}</p>
        </div>

        {/* Owl Carousel 2 – category thumbnails: full image with text overlaid on bottom dark shade */}
        <div className="owl-carousel owl-theme" ref={containerRef}>
          {categories.map((cat: GalleryCategory) => (
            <div
              key={cat.id}
              className="gallery-cat-card cursor-pointer group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border relative"
              data-cat={cat.id}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={getGalleryImageSrc(cat.thumbnail) ?? ""}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Bottom dark gradient so text is readable */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"
                  aria-hidden
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="font-semibold text-lg drop-shadow-sm">
                    {cat.name}
                  </div>
                  <div className="text-sm text-white/90 mt-0.5">
                    {cat.images.length} {cat.images.length === 1 ? "image" : "images"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground text-center mt-6 px-2">
          {t.gallery.clickToView}
        </p>

        {/* Full gallery modal – modern UI */}
        {openCategory && currentCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setOpenCategory(null)}
              aria-hidden
            />
            <div className="relative w-full max-w-6xl max-h-[92vh] bg-background rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-border/50">
              {/* Header with filter */}
              <div className="shrink-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 sm:p-5 border-b bg-muted/30">
                <h3 className="font-bold text-xl text-foreground truncate pr-10 sm:pr-0">
                  {currentCategory.name}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground hidden sm:inline">
                    Sort
                  </span>
                  <div className="inline-flex rounded-xl bg-muted p-1 shadow-inner" role="group" aria-label="Date order">
                    <button
                      type="button"
                      onClick={() => setDateOrder("new")}
                      className={`
                        inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all
                        ${dateOrder === "new"
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "text-muted-foreground hover:text-foreground hover:bg-background/80"
                        }
                      `}
                    >
                      <ArrowDownAZ className="w-4 h-4" />
                      New → Old
                    </button>
                    <button
                      type="button"
                      onClick={() => setDateOrder("old")}
                      className={`
                        inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all
                        ${dateOrder === "old"
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "text-muted-foreground hover:text-foreground hover:bg-background/80"
                        }
                      `}
                    >
                      <ArrowUpAZ className="w-4 h-4" />
                      Old → New
                    </button>
                  </div>
                  <button
                    type="button"
                    className="absolute top-4 right-4 sm:relative sm:top-auto sm:right-auto p-2.5 rounded-xl bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setOpenCategory(null)}
                    aria-label="Close gallery"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Gallery grid – full image with text overlay */}
              <div
                ref={scrollRef}
                onScroll={onScroll}
                className="flex-1 overflow-auto min-h-0 p-4 sm:p-5"
              >
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                  {displayImages.map((img, i) => (
                    <article
                      key={`${img.date}-${img.name}-${i}`}
                      className="group rounded-xl overflow-hidden border border-border/50 bg-card shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                    >
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <img
                          src={getGalleryImageSrc(img.src) ?? ""}
                          alt={img.name}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none"
                          aria-hidden
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
                          <p className="font-semibold text-sm sm:text-base line-clamp-2 drop-shadow-md" title={img.name}>
                            {img.name}
                          </p>
                          <p className="text-xs text-white/90 mt-0.5 font-medium">
                            {img.date}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                {currentCategory.images.length > displayImages.length && (
                  <div className="flex justify-center py-6">
                    <span className="text-xs text-muted-foreground font-medium">
                      Scroll for more photos
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
