import { Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Import all QR code images using Vite's glob import
const qrCodeImages = import.meta.glob<{ default: string }>(
  '/src/assets/**/*.{png,jpg,jpeg,svg,webp}',
  { eager: true }
);

interface DonationType {
  title: string;
  qrCode: string;
  upiId: string;
  accountDetails: {
    accountName: string;
    accountNumber: string;
    bankName: string;
    ifscCode: string;
  };
  upiUrl: string;
}

const Donation = () => {
  const { t } = useLanguage();
  const donationTypes: DonationType[] = t?.donation?.types ?? [];

  const handleOpenUPI = (upiUrl: string) => {
    window.open(upiUrl, "_blank");
  };

  // Helper function to get QR code image source (similar to Committee component)
  const getQRCodeSrc = (imagePath: string): string | null => {
    if (!imagePath) return null;

    // URL or public/ path
    if (imagePath.startsWith('http')) return imagePath;
    if (imagePath.startsWith('/')) return imagePath;

    const filename = imagePath.split('/').pop()!;
    
    const found = Object.keys(qrCodeImages).find(
      (key) => key.endsWith(filename)
    );

    return found ? qrCodeImages[found].default : null;
  };

  return (
    <section id="donation" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 sm:mb-4 animate-float">
            <Heart className="w-10 h-10 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 px-4">
            {t.donation?.title}
          </h2>
          <p className="text-xl sm:text-xl text-muted-foreground">{t.donation?.subtitle}</p>
        </div>

        {/* <div className="max-w-6xl mx-auto mb-12 sm:mb-16">    
          <Card  className="p-6 sm:p-8 shadow-soft hover:shadow-divine transition-all duration-300 border-primary border-2 hover:border-primary/60 bg-gradient-to-br from-primary/20 to-secondary/20 shadow-soft">         
            <CardHeader className="pb-4">
              <CardTitle className="text-lg sm:text-xl font-semibold text-center text-primary">
                {t.donation?.alert?.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-base sm:text-lg text-justify text-foreground max-w-6xl mx-auto leading-relaxed">
                <p>{t.donation?.alert?.message1}</p>
                <p className="mt-4">{t.donation?.alert?.message2}</p>
              </p>
            </CardContent>
          </Card>
        </div> */}

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
            {donationTypes.map((type: DonationType, index: number) => (
              <Card key={index} className="bg-card shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-card-foreground text-center">
                    {type.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* UPI QR Code Section */}
                  <div className="flex flex-col items-center">
                    <div className="mb-4">
                      {getQRCodeSrc(type.qrCode) ? (
                        <img
                          src={getQRCodeSrc(type.qrCode)!}
                          alt={`${type.title} UPI QR Code`}
                          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain border-2 border-border rounded-lg p-2 bg-white"
                        />
                      ) : (
                        <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 border-2 border-border rounded-lg p-2 bg-white flex items-center justify-center text-muted-foreground text-sm">
                          QR Code not found
                        </div>
                      )}
                    </div>
                    <Button
                      onClick={() => handleOpenUPI(type.upiUrl)}
                      className="w-full sm:w-auto"
                      size="lg"
                    >
                      {t.donation?.openUPIButton || "Open UPI App"}
                    </Button>
                  </div>

                  {/* Account Details Box */}
                  <Card className="bg-muted/50 border-2">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-semibold text-center">
                        {t.donation?.accountDetailsTitle || "Account Details"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm sm:text-base">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-muted-foreground">
                          {t.donation?.accountName || "Account Name"}:
                        </span>
                        <span className="text-foreground text-right ml-4">
                          {type.accountDetails.accountName}
                        </span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-muted-foreground">
                          {t.donation?.accountNumber || "Account Number"}:
                        </span>
                        <span className="text-foreground text-right ml-4 font-mono">
                          {type.accountDetails.accountNumber}
                        </span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-muted-foreground">
                          {t.donation?.bankName || "Bank Name"}:
                        </span>
                        <span className="text-foreground text-right ml-4">
                          {type.accountDetails.bankName}
                        </span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-muted-foreground">
                          {t.donation?.ifscCode || "IFSC Code"}:
                        </span>
                        <span className="text-foreground text-right ml-4 font-mono">
                          {type.accountDetails.ifscCode}
                        </span>
                      </div>
                      <div className="flex justify-between items-start pt-2 border-t border-border">
                        <span className="font-medium text-muted-foreground">
                          {t.donation?.upiId || "UPI ID"}:
                        </span>
                        <span className="text-foreground text-right ml-4 font-mono break-all">
                          {type.upiId}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
