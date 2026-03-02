"use client";

import { useEffect, useRef } from "react";

const Page = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const AUTH_PAYLOAD = {
      type: "gamblio-gamification-auth",
      player_id: "6508a629-1bfa-4a9a-bf14-09113fe60a5a",
      private_key:
        "MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgyLAX4/mlYQ3Gq2VXkzyZrF1RCUKRt/ESh3DJdjIPA5KhRANCAASEtV4u6vcnfW2vg75Vo1JP8tO6OviUD1O8x7RHX4+qgdMBUQUOPkW+nzed5Rm8AEjk4SIr9Co9faIodw5r2I+S",
      player_name: "Petar Petrovic",
      player_email: "petar@petrovic.org",
    };

    function handleMessage(e: MessageEvent) {
      if (e.source !== iframe?.contentWindow) return;

      const data = e.data;
      if (!data || typeof data !== "object") return;
      if (String(data.type).indexOf("gamblio-gamification") !== 0) return;

      switch (data.type) {
        case "gamblio-gamification-ready":
          iframe?.contentWindow?.postMessage(AUTH_PAYLOAD, "*");
          break;

        case "gamblio-gamification-request-rect": {
          const rect = iframe?.getBoundingClientRect();
          iframe?.contentWindow?.postMessage(
            {
              type: "gamblio-gamification-rect",
              rect: { x: rect.x, y: rect.y },
            },
            "*",
          );
          break;
        }

        case "gamblio-gamification-resize":
          if (data.styles && typeof data.styles === "object") {
            Object.assign(iframe?.style, data.styles);
          }
          break;
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-4 pt-40">
      <div className="relative w-full max-w-[600px] min-h-[200px]   p-6">
        <iframe
          ref={iframeRef}
          id="gamificationPageWidget"
          src="https://gamification.gamblio.ai/embed"
          title="Gamification Demo"
          allow="autoplay"
          width={80}
          height={80}
          style={{
            border: "none",
            borderRadius: "16px",
            position: "absolute",
            top: "12px",
            right: "12px",
          }}
        />
      </div>
      <div className="w-full">
        <iframe
          id="recommendationWidget"
          title="Gamblio Recommendations"
          src="https://widget-refactor.vercel.app/embed/recommendation"
          className="w-full"
        />
      </div>
      <div className="w-full">
        <iframe
          id="hotColdWidget"
          title="Gamblio Hot/Cold"
          src="https://widget-refactor.vercel.app/embed/hot-cold"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Page;
