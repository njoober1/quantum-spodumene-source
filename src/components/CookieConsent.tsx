import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Cookie, Shield, Settings } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    setShowBanner(false);
    setShowDetails(false);
  };

  const acceptSelected = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    setShowBanner(false);
    setShowDetails(false);
  };

  const rejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    setShowBanner(false);
    setShowDetails(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-fade-in">
        <Card className="max-w-6xl mx-auto shadow-2xl border-2">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Cookie className="h-8 w-8 md:h-10 md:w-10 text-primary" />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                    We Value Your Privacy
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    We use cookies to enhance your browsing experience, analyze site traffic, and 
                    personalize content. By clicking "Accept All", you consent to our use of cookies. 
                    You can manage your preferences or learn more about our cookie policy.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button 
                    onClick={acceptAll}
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90"
                    size="lg"
                  >
                    Accept All
                  </Button>
                  <Button 
                    onClick={rejectAll}
                    variant="outline"
                    className="w-full sm:w-auto"
                    size="lg"
                  >
                    Reject All
                  </Button>
                  <Button 
                    onClick={() => setShowDetails(true)}
                    variant="ghost"
                    className="w-full sm:w-auto"
                    size="lg"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Customize
                  </Button>
                </div>
                
                <p className="text-xs text-muted-foreground">
                  By continuing to use our site, you agree to our{" "}
                  <a href="/privacy-policy" className="underline hover:text-primary">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/terms-of-service" className="underline hover:text-primary">
                    Terms of Service
                  </a>
                  .
                </p>
              </div>
              <button
                onClick={rejectAll}
                className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cookie Preferences Dialog */}
      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <Shield className="h-6 w-6 text-primary" />
              Cookie Preferences
            </DialogTitle>
            <DialogDescription>
              Manage your cookie settings and learn about how we use cookies to improve your experience.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Necessary Cookies */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-1 flex-1">
                  <h4 className="font-semibold text-foreground">Strictly Necessary Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    These cookies are essential for the website to function properly and cannot be disabled.
                  </p>
                </div>
                <Switch
                  checked={preferences.necessary}
                  disabled
                  className="ml-4"
                />
              </div>
              <div className="bg-secondary/30 p-4 rounded-lg text-sm space-y-2">
                <p className="text-muted-foreground">
                  <strong>Purpose:</strong> Essential for site functionality, security, and navigation.
                </p>
                <p className="text-muted-foreground">
                  <strong>Examples:</strong> Session management, security tokens, consent preferences.
                </p>
                <p className="text-muted-foreground">
                  <strong>Duration:</strong> Session or up to 1 year.
                </p>
              </div>
            </div>

            <Separator />

            {/* Analytics Cookies */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-1 flex-1">
                  <h4 className="font-semibold text-foreground">Analytics Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    These cookies help us understand how visitors interact with our website by collecting 
                    and reporting information anonymously.
                  </p>
                </div>
                <Switch
                  checked={preferences.analytics}
                  onCheckedChange={(checked) => 
                    setPreferences({ ...preferences, analytics: checked })
                  }
                  className="ml-4"
                />
              </div>
              <div className="bg-secondary/30 p-4 rounded-lg text-sm space-y-2">
                <p className="text-muted-foreground">
                  <strong>Purpose:</strong> Website performance analysis, user behavior tracking, traffic sources.
                </p>
                <p className="text-muted-foreground">
                  <strong>Examples:</strong> Google Analytics, page views, bounce rates, time on site.
                </p>
                <p className="text-muted-foreground">
                  <strong>Duration:</strong> Up to 2 years.
                </p>
                <p className="text-muted-foreground">
                  <strong>Third Parties:</strong> Google Analytics, Microsoft Clarity.
                </p>
              </div>
            </div>

            <Separator />

            {/* Marketing Cookies */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-1 flex-1">
                  <h4 className="font-semibold text-foreground">Marketing & Advertising Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    These cookies are used to deliver relevant advertisements and track the effectiveness 
                    of marketing campaigns.
                  </p>
                </div>
                <Switch
                  checked={preferences.marketing}
                  onCheckedChange={(checked) => 
                    setPreferences({ ...preferences, marketing: checked })
                  }
                  className="ml-4"
                />
              </div>
              <div className="bg-secondary/30 p-4 rounded-lg text-sm space-y-2">
                <p className="text-muted-foreground">
                  <strong>Purpose:</strong> Targeted advertising, campaign tracking, retargeting.
                </p>
                <p className="text-muted-foreground">
                  <strong>Examples:</strong> LinkedIn Ads, Facebook Pixel, Google Ads conversion tracking.
                </p>
                <p className="text-muted-foreground">
                  <strong>Duration:</strong> Up to 1 year.
                </p>
                <p className="text-muted-foreground">
                  <strong>Third Parties:</strong> LinkedIn, Facebook, Google Ads.
                </p>
              </div>
            </div>

            <Separator />

            {/* Additional Information */}
            <div className="bg-primary/10 p-4 rounded-lg space-y-2">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <Cookie className="h-4 w-4" />
                About Cookies
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cookies are small text files stored on your device that help websites remember your 
                preferences and improve your browsing experience. You can change your cookie preferences 
                at any time by returning to this page or adjusting your browser settings.
              </p>
              <p className="text-sm text-muted-foreground">
                For more information, please read our{" "}
                <a href="/privacy-policy" className="text-primary hover:underline font-semibold">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button 
              onClick={acceptSelected}
              className="w-full sm:flex-1"
              size="lg"
            >
              Save Preferences
            </Button>
            <Button 
              onClick={acceptAll}
              variant="outline"
              className="w-full sm:flex-1"
              size="lg"
            >
              Accept All
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsent;