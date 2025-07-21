import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useUserPlan } from "@/hooks/use-plan-protection";
import {
  MessageSquare, Minimize2, Maximize2, Send, Mic, Bot,
  Zap, Activity, Target, Mail, Phone, BarChart3, Brain,
  Crown, Settings, X, Users, Building2
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SaintSalCompanionProps {
  className?: string;
  contextData?: {
    activeTile?: string;
    metrics?: any;
    suggestions?: string[];
  };
}

interface ChatMessage {
  id: string;
  type: "user" | "sal";
  content: string;
  timestamp: Date;
  actions?: Array<{
    label: string;
    action: () => void;
    icon?: React.ComponentType<{ className?: string }>;
  }>;
}

export function SaintSalCompanion({ className, contextData }: SaintSalCompanionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [commanderMode, setCommanderMode] = useState(false);
  const { plan } = useUserPlan();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const planFeatures = {
    unlimited: {
      content: "Hey! I'm SaintSal™, your Azure-powered AI companion. Ready to explore?",
      actions: [
        { label: "Chat with Me", action: () => handleAction("chat"), icon: MessageSquare },
        { label: "Get Insights", action: () => handleAction("insights"), icon: Brain },
      ],
    },
    crm: {
      content: "CRM access detected. Ready to supercharge your biz?",
      actions: [
        { label: "Analyze CRM", action: () => handleAction("analyze-crm"), icon: BarChart3 },
        { label: "Score Leads", action: () => handleAction("score-leads"), icon: Target },
        { label: "Generate Emails", action: () => handleAction("generate-emails"), icon: Mail },
      ],
    },
    enterprise: {
      content: "Enterprise activated. I’m ready to scale with you.",
      actions: [
        { label: "Team Overview", action: () => handleAction("team-overview"), icon: Users },
        { label: "Multi-CRM Sync", action: () => handleAction("multi-crm"), icon: Building2 },
        { label: "Lead Pipeline", action: () => handleAction("pipeline"), icon: Activity },
      ],
    },
    white_label: {
      content: "White Label enabled. Branding power unlocked.",
      actions: [
        { label: "Client Dashboard", action: () => handleAction("client-dashboard"), icon: Crown },
        { label: "Agency Analytics", action: () => handleAction("agency-analytics"), icon: BarChart3 },
        { label: "Bulk Operations", action: () => handleAction("bulk-ops"), icon: Zap },
      ],
    },
  };

  const welcomeConfig = planFeatures[plan as keyof typeof planFeatures] || planFeatures.unlimited;
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      type: "sal",
      content: welcomeConfig.content,
      timestamp: new Date(),
      actions: welcomeConfig.actions,
    },
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (contextData?.activeTile && !isMinimized) {
      const suggestionMessage: ChatMessage = {
        id: `suggestion-${Date.now()}`,
        type: "sal",
        content: `You're looking at ${contextData.activeTile}. Want me to help?`,
        timestamp: new Date(),
        actions: [
          {
            label: "Yes",
            action: () => handleAction(`auto-${contextData.activeTile}`),
            icon: Zap,
          },
        ],
      };
      setTimeout(() => {
        setMessages(prev => [...prev, suggestionMessage]);
      }, 1000);
    }
  }, [contextData?.activeTile]);

  const handleAction = async (type: string) => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setMessages(prev => [
      ...prev,
      {
        id: `sal-${Date.now()}`,
        type: "sal",
        content: `✅ Action "${type}" completed.`,
        timestamp: new Date(),
      },
    ]);
    setIsTyping(false);
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      type: "user",
      content: message,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMsg]);
    setMessage("");
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setMessages(prev => [
      ...prev,
      {
        id: `sal-${Date.now()}`,
        type: "sal",
        content: "🧠 Got it! I'm on it.",
        timestamp: new Date(),
      },
    ]);
    setIsTyping(false);
  };

  if (isMinimized) {
    return (
      <div className={cn("fixed bottom-6 right-6 z-50", className)}>
        <Button onClick={() => setIsMinimized(false)}>🧠</Button>
      </div>
    );
  }

  return (
    <div className={cn("fixed bottom-6 right-6 z-50", className)}>
      <div className="bg-black text-white rounded-xl w-96 shadow-lg flex flex-col">
        <div className="p-3 border-b border-white/20 flex justify-between items-center">
          <span>SaintSal™</span>
          <div className="space-x-2">
            <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsMinimized(true)}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="p-4 overflow-y-auto flex-1 max-h-[300px]">
          {messages.map((msg) => (
            <div key={msg.id} className={cn("mb-2", msg.type === "user" ? "text-right" : "text-left")}>
              <div className="inline-block bg-white/10 p-2 rounded-md">
                <p>{msg.content}</p>
                {msg.actions && (
                  <div className="mt-2 space-x-2">
                    {msg.actions.map((action, idx) => {
                      const IconComponent = action.icon;
                      return (
                        <Button key={idx} onClick={action.action} size="sm">
                          {IconComponent && <IconComponent className="w-3 h-3 mr-1 inline" />}
                          {action.label}
                        </Button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
          {isTyping && <div className="text-sm text-purple-300">Sal is thinking...</div>}
          <div ref={messagesEndRef} />
        </div>
        <div className="p-3 border-t border-white/20 flex gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask Sal..."
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button onClick={handleSendMessage} disabled={isTyping}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
