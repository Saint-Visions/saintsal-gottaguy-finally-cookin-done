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

            {/* What Separates Us - SaintVisionAI vs PartnerTech AI */}
      <div className="relative z-40 py-32 bg-gradient-to-r from-charcoal-800/80 to-charcoal-900/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white font-dialien">
              What Separates <span className="saintvision-gradient-text">SaintVisionAI</span>
            </h2>
            <p className="text-xl text-gold-300 font-medium mb-4">
              FROM PARTNERTECH AI & EVERYONE ELSE
            </p>
            <p className="text-lg text-white/80 max-w-4xl mx-auto">
              While others focus on retail POS systems and generic solutions, we built enterprise AI that understands your business, values, and vision.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* SaintVisionAI Side */}
            <div className="bg-gradient-to-br from-gold-500/10 to-gold-600/10 p-8 rounded-3xl border border-gold-400/20 backdrop-blur-sm">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F863b231460314ff6a606ebae2dd4912a?format=webp&width=800"
                    alt="SaintVisionAI"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-3xl font-bold saintvision-gradient-text mb-2">
                  SaintVisionAI™
                </h3>
                <p className="text-gold-300 font-medium">Enterprise AI Companion</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                  <span className="text-white">Faith-aligned business intelligence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                  <span className="text-white">Dual AI systems (GPT-4o + Azure)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                  <span className="text-white">GoHighLevel CRM integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                  <span className="text-white">Real-time business strategy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                  <span className="text-white">Patent-protected proprietary tech</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                  <span className="text-white">Enterprise-grade security vault</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                  <span className="text-white">Natural conversation interface</span>
                </div>
              </div>
            </div>

            {/* PartnerTech AI Side */}
            <div className="bg-gradient-to-br from-gray-500/10 to-gray-600/10 p-8 rounded-3xl border border-gray-400/20 backdrop-blur-sm">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gray-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-400">PT</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-300 mb-2">
                  PartnerTech AI
                </h3>
                <p className="text-gray-400 font-medium">Retail POS Solutions</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-300">Self-checkout hardware focus</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-300">Retail/hospitality industry specific</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-300">POS terminal integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-300">Transaction fraud prevention</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-300">Hardware-dependent solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-300">Limited to point-of-sale</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-300">No business intelligence</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Differentiators */}
          <div className="text-center bg-gradient-to-r from-gold-900/30 to-gold-800/30 rounded-3xl p-12 border border-gold-500/20 backdrop-blur-sm">
            <h3 className="text-4xl font-bold mb-6 saintvision-gradient-text">
              The Clear Choice for Business Leaders
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-gold-300">Your Business Partner</h4>
                <p className="text-white/80">
                  Not just software - an AI companion that understands your industry, values, and vision for growth.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-gold-300">Complete Solution</h4>
                <p className="text-white/80">
                  From strategy to execution, CRM to analytics - everything you need in one faith-aligned platform.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-gold-300">Enterprise Ready</h4>
                <p className="text-white/80">
                  Patent-protected technology with bank-grade security that scales with your business empire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
