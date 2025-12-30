import { Building2 } from "lucide-react";
import architectureImage from "@/assets/temple-architecture.webp";
import architectureImage2 from "@/assets/temple-architecture-2.webp";
import { useLanguage } from "@/context/LanguageContext";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface DevelopmentPoint {
  title: string;
  text: string;
}

const Architecture = () => {
  const { cf, t } = useLanguage();
  const developmentPoints: DevelopmentPoint[] = t?.architecture?.points ?? [];
  
  const architectureImages = [
    architectureImage,
    architectureImage2
  ];
  
  return (
    <section id="architecture" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 sm:mb-4 animate-float">
            <Building2 className="w-10 h-10 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 px-4">
            {t.architecture.title}
          </h2>
          <p className="text-xl sm:text-xl text-muted-foreground">{t.architecture.subtitle}</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-divine ">
            <Carousel
              opts={{
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full h-full"
            >
              <CarouselContent className="h-full">
                {architectureImages.map((image, index) => (
                  <CarouselItem key={index} className="h-full">
                    <img
                      src={image}
                      alt={`3D architectural rendering ${index + 1} of temple future development plans`}
                      className="w-full h-64 sm:h-80 md:h-96 lg:h-[550px] object-cover rounded-lg"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {developmentPoints.map((point: DevelopmentPoint, index: number) => (
              <div className="bg-card p-6 sm:p-8 rounded-lg shadow-soft">
                <h3 className="text-lg sm:text-xl font-bold text-card-foreground mb-4 sm:mb-3">
                  {point.title}
                </h3>
                <p className="text-sm sm:text-lg md:text-xl text-muted-foreground text-lg sm:text-base leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
