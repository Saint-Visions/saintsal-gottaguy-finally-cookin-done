"use client";

import { useEffect, useState } from "react";
// Update the import path if necessary to the correct location of Chat
import { Chat } from "./Chat";
import { useUser } from "@/hooks/useUser";
import { useSearchParams } from "next/navigation";

export default function SaintSalCompanion() {
  const [mode, setMode] = useState<"client" | "admin">("client");
  const { user } = useUser();
  const params = useSearchParams();

  useEffect(() => {
    const queryMode = params.get("mode");
    if (queryMode === "admin" && user?.email === "ryan@saintvisions.com") {
      setMode("admin");
    }
  }, [params, user]);

  return (
    <div className="w-full h-full">
      <Chat
        mode={mode}
        userId={user?.id ?? ""}
        userEmail={user?.email ?? ""}
        streaming
        showBranding
      />
    </div>
  );
}
