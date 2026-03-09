"use client";

import Script from "next/script";
import { useGamblio } from "@/components/providers/gamblio-provider";
import { GamblioProvider } from "@/components/providers/gamblio-provider";
import {
  DEFAULT_HOT_COLD_VARIANT,
  DEFAULT_RECOMMENDATION_VARIANT,
  type HotColdConfigKey,
  hotColdConfigs,
  type RecommendationConfigKey,
  recommendationConfigs,
} from "@/lib/gamblio-widget-configs";

// function WidgetsQuickStatePanel() {
//   const {
//     recommendationVariant,
//     setRecommendationVariant,
//     recommendationConfigs,
//     hotColdVariant,
//     setHotColdVariant,
//     hotColdConfigs,
//   } = useGamblio();

//   return (
//     <div className="sticky top-16 z-30 px-6 pt-20 md:px-10">
//       <div className="mx-auto max-w-7xl rounded-lg border border-border bg-background/90 p-4 backdrop-blur">
//         <p className="text-sm font-semibold">Quick Test States</p>
//         <p className="mt-1 text-xs text-muted-foreground">
//           Change a preset here to quickly test backgrounds, images, and videos.
//         </p>

//         <div className="mt-3 grid gap-3 md:grid-cols-2">
//           <label className="space-y-1">
//             <span className="text-xs text-muted-foreground">
//               Recommendation preset
//             </span>
//             <select
//               className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
//               value={recommendationVariant}
//               onChange={(event) =>
//                 setRecommendationVariant(
//                   event.target.value as RecommendationConfigKey,
//                 )
//               }
//             >
//               {Object.entries(recommendationConfigs).map(([key, value]) => (
//                 <option key={key} value={key}>
//                   {value.label}
//                 </option>
//               ))}
//             </select>
//           </label>

//           <label className="space-y-1">
//             <span className="text-xs text-muted-foreground">
//               Hot & Cold preset
//             </span>
//             <select
//               className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
//               value={hotColdVariant}
//               onChange={(event) =>
//                 setHotColdVariant(event.target.value as HotColdConfigKey)
//               }
//             >
//               {Object.entries(hotColdConfigs).map(([key, value]) => (
//                 <option key={key} value={key}>
//                   {value.label}
//                 </option>
//               ))}
//             </select>
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// }

/**
 * Widgets layout:
 * 1. Script does initial SDK init with default configs
 * 2. GamblioProvider wraps children for state management
 * 3. When user clicks buttons, provider reinitializes with new config
 */
export default function WidgetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const defaultHotColdConfig = {
    ...hotColdConfigs[DEFAULT_HOT_COLD_VARIANT].config,
  };

  const defaultRecommendationConfig =
    recommendationConfigs[DEFAULT_RECOMMENDATION_VARIANT].config;

  return (
    <>
      <GamblioProvider>
        {/* <WidgetsQuickStatePanel /> */}
        {children}
      </GamblioProvider>
      <Script
        src="https://nbg1.your-objectstorage.com/gamblio-widget/assets/sdk.min.js"
        strategy="beforeInteractive"
      />
      <Script
        id="gamblio-widgets-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              if (typeof Gamblio !== 'undefined') {
              localStorage.setItem("playerToken", "8b806dbc801ad0bf27eb9eb5c5d8575fc2913f35560092d6fb91bcaabe395039061785c1cd3ca2f3c22b39a107a3708b390a825940304bebf09eda65aa7e4fb3");
              console.log(${JSON.stringify(defaultRecommendationConfig)});
              console.log(${JSON.stringify(defaultHotColdConfig)});
                Gamblio.init({
                  tokenName: "playerToken",
                  clientId: "0b7e7dee87b1c3b98e72131173dfbbbf",
                  language: "en",
                  envDev: false,
                  recommendationWidgetTargetContainerId: "recommendation-container",
                  recommendationConfig: ${JSON.stringify(defaultRecommendationConfig)},
                   gamesSwiperConfig: {
      targetContainerId: "hot-cold-container",
      backgroundType: "image",
      hotImageIndex: 8,
      coldImageIndex: 9,
      imageExtension: "png",
      glow: true,
    },
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
