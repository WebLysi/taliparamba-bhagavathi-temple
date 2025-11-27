import { Image as ImageIcon } from "lucide-react";
import celebration1 from "@/assets/gallery/01.jpg";
import celebration2 from "@/assets/gallery/02.jpg";
import celebration3 from "@/assets/gallery/09.jpg";
import { useLanguage } from "@/context/LanguageContext";

const Gallery = () => {
  const { cf, t } = useLanguage();
  
  const photos = [
    {
      src: celebration1,
      title: "",
      description: "",
    },
    {
      src: celebration2,
      title: "",
      description: "",
    },
    {
      src: celebration3,
      title: "",
      description: "",
    },
  ];

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 sm:mb-4 animate-float">
            <ImageIcon className="w-10 h-10 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 px-4">
            {t.gallery.title}
          </h2>
          <p className="text-xl sm:text-xl text-muted-foreground">{t.gallery.subtitle}</p>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-divine transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                  <h3 className="text-2xl sm:text-xl font-bold mb-2">{photo.title}</h3>
                  <p className="text-base sm:text-sm text-white/90">{photo.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <p className="text-muted-foreground mb-6 sm:mb-4 text-lg sm:text-base px-4">
            {t.gallery.morePhotos}
          </p>
          <button className="px-10 py-5 sm:px-8 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white text-lg sm:text-base rounded-lg font-semibold hover:shadow-divine transition-all duration-300 hover:scale-105">
            {t.gallery.viewAll}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
