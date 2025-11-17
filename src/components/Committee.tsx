import React from "react";
import { Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

// Import all images using Vite's glob import
const committeeImages = import.meta.glob<{ default: string }>(
  '/src/assets/**/*.{png,jpg,jpeg,svg,webp}',
  { eager: true }
);

export default function CompactCommittee() {
  const { t } = useLanguage();

  // Helper function to get image path
  const getImageSrc = (imagePath: string) => {
    if (!imagePath) return null;

    // URL or public/ path
    if (imagePath.startsWith('http')) return imagePath;
    if (imagePath.startsWith('/')) return imagePath;

    const filename = imagePath.split('/').pop()!;
    
    const found = Object.keys(committeeImages).find(
      (key) => key.endsWith(filename)
    );

    return found ? committeeImages[found].default : null;
  };

  return (
    <section id="committee" className="py-12 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary mb-4">
            <Users className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">{t.committee.title}</h2>
          <p className="text-sm text-muted-foreground mt-1">{t.committee.subtitle}</p>
        </div>

        <div className="space-y-6 max-w-6xl mx-auto">
          {t.committee.committes.map((committe) => (
            <Card key={committe.key} className="p-3 border-primary/10">
              <div className="px-2 py-3 border-b border-primary/10 mb-3">
                <h3 className="text-base font-semibold text-foreground text-center">{committe.title}</h3>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2">
                {committe.main.map((member, idx) => {
                  const imageSrc = getImageSrc(member.photo);

                  return (
                  <article
                    key={idx}
                    className="flex flex-col h-full bg-white rounded-md overflow-hidden border border-primary/10 hover:shadow-md transition-all"
                    aria-label={`${member.name} - ${member.position}`}
                  >
                    <div className="w-full h-full bg-gray-200 overflow-hidden flex items-center justify-center">
                      <img
                        src={imageSrc}
                        alt={member.name}
                        className="w-full h-full object-cover object-center block"
                      />
                    </div>

                    <div className="p-2 md:p-3 flex-1 flex flex-col justify-start">
                      <h4 className="text-xs sm:text-sm md:text-base font-semibold leading-tight">{member.name}</h4>
                      <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-tight mt-1">{member.position}</p>
                    </div>
                  </article>
                )})}
              </div>
              
              <div className="px-2 py-3 mb-2 md:mb-3">
                <h3 className="text-base font-semibold text-muted-foreground text-center">{t.committee.members_title}</h3>
              </div>
              
              <Card className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 p-2 md:p-3 my-1 md:my-2 border-primary/10">
                {committe.members.map((member, idx) => (
                  <article
                    key={idx}
                    className="flex flex-col h-full bg-white rounded-md overflow-hidden border border-primary/10 hover:shadow-md transition-all"
                    aria-label={`${member.name} - ${member.position}`}
                  >
                    <div className="p-2 md:p-3 flex-1 flex flex-col justify-start">
                      <h4 className="text-[10px] sm:text-sm md:text-base font-semibold leading-tight">{member.name}</h4>
                    </div>
                  </article>
                ))}
              </Card>
              
              {committe.desc && (
                <div className="mt-3 p-3 bg-accent/5 rounded-md border-l-4 border-accent text-sm text-foreground/90">
                  {committe.desc}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
