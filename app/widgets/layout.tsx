"use client";

import Script from "next/script";
import { GamblioProvider } from "@/components/providers/gamblio-provider";
import {
  DEFAULT_HOT_COLD_VARIANT,
  DEFAULT_RECOMMENDATION_VARIANT,
  hotColdConfigs,
  recommendationConfigs,
} from "@/lib/gamblio-widget-configs";

/**
 * Widgets layout:
 * 1. Script does initial SDK init with URL/default configs
 * 2. GamblioProvider wraps children for state management
 * 3. Buttons update URL and trigger a silent refresh for fresh init
 */
export default function WidgetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const recommendationConfigMap = Object.fromEntries(
    Object.entries(recommendationConfigs).map(([key, value]) => [
      key,
      value.config,
    ]),
  );

  const hotColdConfigMap = Object.fromEntries(
    Object.entries(hotColdConfigs).map(([key, value]) => [key, value.config]),
  );

  return (
    <>
      {children}
      <Script
        id="gamblio-widgets-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              if (window.__gamblioWidgetsInitDone) return;
              if (typeof Gamblio !== 'undefined') {
                window.__gamblioWidgetsInitDone = true;
                var recommendationConfigs = ${JSON.stringify(recommendationConfigMap)};
                var hotColdConfigs = ${JSON.stringify(hotColdConfigMap)};
                var params = new URLSearchParams(window.location.search);
                var recKey = params.get("rec");
                var hotColdKey = params.get("hc");
                var user = params.get("user");

                var recommendationConfig = recommendationConfigs[recKey] || recommendationConfigs["${DEFAULT_RECOMMENDATION_VARIANT}"];
                var hotColdConfig = hotColdConfigs[hotColdKey] || hotColdConfigs["${DEFAULT_HOT_COLD_VARIANT}"];

                if (user === "logged") {
                  localStorage.setItem("playerToken", "8b806dbc801ad0bf27eb9eb5c5d8575fc2913f35560092d6fb91bcaabe395039061785c1cd3ca2f3c22b39a107a3708b390a825940304bebf09eda65aa7e4fb3");
                } else {
                  localStorage.removeItem("playerToken");
                }

                Gamblio.init({
                  tokenName: "playerToken",
                  clientId: "0b7e7dee87b1c3b98e72131173dfbbbf",
                  language: "en",
                  envDev: false,
                  demo: true,
                  recommendationWidgetTargetContainerId: "recommendation-container",
                  recommendationConfig: recommendationConfig,
                  gamesSwiperConfig: hotColdConfig,
                  chatConfig: {
                    backgroundPrimary: "#1a1a1a",
                    hoverColor: "#2d2d2d",
                    logoUrl: "/images/logo-dark.svg",
                  },
                });
              }
            })();
          `,
        }}
      />
    </>
  );
}
