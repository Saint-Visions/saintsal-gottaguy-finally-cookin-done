import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserPlan } from "@/hooks/use-plan-protection";
import { supabase } from "@/lib/supabase";
import { Footer } from "@/components/Footer";

// Import all Builder.io components
import { SaintVisionNavigation } from "@/components/builder/SaintVisionNavigation";
import { SaintVisionHero } from "@/components/builder/SaintVisionHero";
import { SaintVisionFeatureGrid } from "@/components/builder/SaintVisionFeatureGrid";
import { SaintVisionSecurityVault } from "@/components/builder/SaintVisionSecurityVault";
import { SaintVisionCTA } from "@/components/builder/SaintVisionCTA";

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { plan } = useUserPlan();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setIsLoggedIn(!!user);
    };
    checkAuth();
  }, []);

  // Plan-based routing logic for CTA buttons
  const handleDashboardClick = () => {
    if (!isLoggedIn) {
      navigate("/signin");
    } else {
      navigate("/dashboard");
    }
  };

  const handleCRMToolsClick = () => {
    if (!isLoggedIn) {
      navigate("/signin");
    } else if (
      plan === "crm" ||
      plan === "enterprise" ||
      plan === "white_label"
    ) {
      navigate("/partnertech");
    } else {
      navigate("/upgrade");
    }
  };

  return (
    <div className="min-h-screen bg-charcoal-900 text-white">
      {/* Navigation */}
      <SaintVisionNavigation
        logoImage="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F863b231460314ff6a606ebae2dd4912a?format=webp&width=800"
        logoText="SaintVisionAI™"
        tagline="Cookin' Knowledge"
        links={[
          { text: "Dashboard", url: "/dashboard" },
          { text: "Pricing", url: "/pricing" },
          { 
            text: "Why Us", 
            url: "/why",
            icon: "https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F4f08aaff66374bf3bd72e740c34ecf44"
          },
          { text: "Help", url: "/help" }
        ]}
        ctaButton1Text="Sign In"
        ctaButton1Link="/signin"
        ctaButton2Text="Start Cookin'"
        ctaButton2Link="/dashboard"
      />

      {/* Hero Section */}
      <SaintVisionHero
        title="SaintSal™"
        subtitle="Cookin' Knowledge."
        description="AI doesn't just answer. It adapts. It empowers. It becomes your enterprise companion."
        ctaText={isLoggedIn ? "Go to Dashboard" : "Start Cookin' Knowledge"}
        ctaLink="/dashboard"
        secondaryCtaText="Try CRM Tools"
        secondaryCtaLink="/partnertech"
        backgroundImage="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F317f7c64793d47ab90d506bd066bedbb?format=webp&width=800"
        logoImage="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F5af1b2848cdd4695bab7fa0b4affb339"
        badgeText="Enterprise Ready"
      />

      {/* Features Section */}
      <SaintVisionFeatureGrid
        title="Elite Technology"
        subtitle="ENTERPRISE READY"
        description="Dual AI systems handle your business operations while you focus on what matters - growing your empire."
        features={[
          {
            icon: "brain",
            title: "Business Strategy",
            description: "AI that analyzes market trends, automates research, and strategizes planning powered by dual AI engines."
          },
          {
            icon: "shield",
            title: "CRM Integration",
            description: "Seamlessly connect with GoHighLevel, automate follow-ups, and intelligent lead scoring."
          },
          {
            icon: "zap",
            title: "Growth Analytics",
            description: "Real-time insights with actionable intelligence to scale faster with smarter business decisions."
          }
        ]}
      />

      {/* Security & Vault Section */}
      <SaintVisionSecurityVault
        title="Vault & Security"
        subtitle="Faith-Aligned Data Protection"
        description="Bank-grade security meets faith-centered values. Your data protected with military-grade encryption and ethical business practices."
      />

      {/* Call-to-Action Section */}
      <SaintVisionCTA
        title="Elite AI Sanctuary"
        subtitle="THE MOVEMENT"
        description="Built for those who refuse to compromise on excellence, privacy, or values. Join thousands who've discovered their GOTTA GUY®."
        backgroundImage="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F89f844d10b5e4243a2178ad3de7a9f4f"
        ctaText="Join The Movement"
        ctaLink="/dashboard"
        secondaryCtaText="Discover Your Guy"
        secondaryCtaLink="/why"
        logoImage="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F43517f7e94d44c8495e4734412e8899d"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
