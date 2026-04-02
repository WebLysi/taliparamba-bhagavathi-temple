import { Card } from "@/components/ui/card";
import { Shield, User } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const managementImages = import.meta.glob<{ default: string }>("@/assets/loving-memory/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
});

const LovingMemory = () => {
  const { cf, t } = useLanguage();

  const getImageSrc = (imagePath: string) => {
    if (!imagePath || imagePath.trim() === "") return null;

    if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
      return imagePath;
    }

    if (imagePath.startsWith("/")) {
      return imagePath;
    }

    const filename = imagePath.split("/").pop() || imagePath;

    const found = Object.keys(managementImages).find(
      (key) => key.endsWith(filename) || key.includes(filename)
    );

    if (found && managementImages[found]) {
      return managementImages[found].default;
    }

    return `/${imagePath}`;
  };

  const getIcon = (index: number) => {
    return index === 0 ? User : Shield;
  };

  const getGradient = (index: number) => {
    return index === 0
      ? "bg-gradient-to-br from-primary/10 to-secondary/10"
      : "bg-gradient-to-br from-accent/10 to-primary/10";
  };

  const getIconGradient = (index: number) => {
    return index === 0
      ? "bg-gradient-to-br from-primary to-secondary"
      : "bg-gradient-to-br from-accent to-primary";
  };

  const memberCount = t.lovingMemory.members.length;

  return (
    <section id="loving-memory" className="py-10 sm:py-12 md:py-14 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 px-4">
            {t.lovingMemory.title}
          </h2>
          {t.lovingMemory.subtitle && (
            <p className="text-sm sm:text-base text-muted-foreground">{t.lovingMemory.subtitle}</p>
          )}
        </div>

        <div className={`grid grid-cols-1 ${memberCount === 1 ? "justify-items-center" : "sm:grid-cols-2 md:grid-cols-3"} gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto`}>
          {t.lovingMemory.members.map(
            (
              member: { position: string; name: string; image: string; mentioned: string },
              index: number
            ) => {
              const Icon = getIcon(index);
              const imageSrc = getImageSrc(member.image);

              return (
                <Card
                  key={index}
                  className={`overflow-hidden shadow-soft hover:shadow-divine transition-all duration-300 border-primary/20 h-full ${memberCount === 1 ? "w-full max-w-[320px] sm:max-w-[360px]" : ""}`}>
                  <div className={`${getGradient(index)} p-3 sm:p-4 h-[70px] sm:h-[80px] flex items-center`}>
                    <div className="flex items-center gap-2 sm:gap-3 w-full justify-center">
                      {/* <div className={`hidden sm:flex w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full ${getIconGradient(index)} items-center justify-center`}>
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div> */}
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground line-clamp-2">
                        {member.position}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 space-y-3 sm:space-y-4">
                    {imageSrc && (
                      <div className="aspect-square rounded-lg overflow-hidden shadow-soft mb-3 sm:mb-4">
                        <img 
                          src={imageSrc} 
                          alt={member.position} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Hide image if it fails to load
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    )}

                    <div className="space-y-2">
                      {member.name && (
                        <h4 className="text-sm sm:text-base font-bold text-foreground">
                          {member.name}
                        </h4>
                      )}
                      {member.mentioned && (
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{member.mentioned}</p>
                      )}
                    </div>
                  </div>
                </Card>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default LovingMemory;
