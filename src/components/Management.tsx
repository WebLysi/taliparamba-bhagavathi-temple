import { Card } from "@/components/ui/card";
import { Shield, User } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Import all management images using Vite's glob import
const managementImages = import.meta.glob<{ default: string }>('@/assets/management/*.{png,jpg,jpeg,svg,webp}', { 
  eager: true 
});

const Management = () => {
  const { cf, t } = useLanguage();
  
  // Helper function to get image path
  const getImageSrc = (imagePath: string) => {
    if (!imagePath || imagePath.trim() === '') return null;
    
    // If it's a full URL, return as is
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath;
    }
    
    // If it starts with /, it's a public path
    if (imagePath.startsWith('/')) {
      return imagePath;
    }
    
    // Extract filename from path (handles "thanthri.png" or "management/thanthri.png")
    const filename = imagePath.split('/').pop() || imagePath;
    
    // Find the image in our glob imports by matching filename
    const found = Object.keys(managementImages).find(key => 
      key.endsWith(filename) || key.includes(filename)
    );
    
    if (found && managementImages[found]) {
      return managementImages[found].default;
    }
    
    // Fallback: try as public path
    return `/${imagePath}`;
  };

  // Icon variants for different positions
  const getIcon = (index: number) => {
    return index === 0 ? User : Shield;
  };

  // Background gradient variants
  const getGradient = (index: number) => {
    return index === 0 
      ? "bg-gradient-to-br from-primary/10 to-secondary/10"
      : "bg-gradient-to-br from-accent/10 to-primary/10";
  };

  // Icon background gradient variants
  const getIconGradient = (index: number) => {
    return index === 0
      ? "bg-gradient-to-br from-primary to-secondary"
      : "bg-gradient-to-br from-accent to-primary";
  };
  
  return (
    <section id="management" className="py-10 sm:py-12 md:py-14 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 px-4">
            {t.management.title}
          </h2>
          {t.management.subtitle && (
            <p className="text-sm sm:text-base text-muted-foreground">{t.management.subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
          {t.management.managements.map((member: { position: string; name: string; image: string; mentioned: string }, index: number) => {
            const Icon = getIcon(index);
            const imageSrc = getImageSrc(member.image);
            
            return (
              <Card key={index} className="overflow-hidden shadow-soft hover:shadow-divine transition-all duration-300 border-primary/20 h-full">
                <div className={`${getGradient(index)} p-3 sm:p-4 h-[70px] sm:h-[80px] flex items-center`}>
                  <div className="flex items-center gap-2 sm:gap-3 w-full">
                    <div className={`hidden sm:flex w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full ${getIconGradient(index)} items-center justify-center`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
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
          })}
        </div>
      </div>
    </section>
  );
};

export default Management;
