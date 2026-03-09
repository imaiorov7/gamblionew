"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  DEFAULT_HOT_COLD_VARIANT,
  DEFAULT_RECOMMENDATION_VARIANT,
  type HotColdConfigKey,
  hotColdConfigs,
  type RecommendationConfigKey,
  recommendationConfigs,
} from "@/lib/gamblio-widget-configs";

const REC_CONTAINER_ID = "recommendation-container";
const HOT_COLD_CONTAINER_ID = "hot-cold-container";
const TOKEN_KEY = "playerToken";
const CLIENT_ID = "0b7e7dee87b1c3b98e72131173dfbbbf";
const PLAYER_TOKEN =
  "8b806dbc801ad0bf27eb9eb5c5d8575fc2913f35560092d6fb91bcaabe395039061785c1cd3ca2f3c22b39a107a3708b390a825940304bebf09eda65aa7e4fb3";

declare global {
  interface Window {
    Gamblio?: {
      init: (config: Record<string, unknown>) => void;
      destroy?: () => void;
    };
  }
}

// Config types - use readonly for arrays since configs use `as const`
export type HotColdConfig = {
  targetContainerId: string;
  backgroundType: string;
  glow?: boolean;
  videoIndex?: number;
  hotVideoIndex?: number;
  coldVideoIndex?: number;
  imageIndex?: number;
  hotImageIndex?: number;
  coldImageIndex?: number;
  imageExtension?: string;
  gradientColors?: readonly string[];
  gradientDirection?: string;
  hotGradientColors?: readonly string[];
  hotGradientDirection?: string;
  coldGradientColors?: readonly string[];
  coldGradientDirection?: string;
};

export type RecommendationConfig = {
  backgroundType: string;
  displayMode: string;
  withHeadline?: boolean;
  shadowColor?: string;
  navButtonColor?: string;
  navButtonHoverColor?: string;
  videoIndex?: number;
  imageIndex?: number;
  gradientColors?: readonly string[];
  gradientDirection?: string;
  shuffleButtonBgColor?: string;
  shuffleButtonIconColor?: string;
};

type GamblioContextValue = {
  // Current configs (includes targetContainerId for hot/cold)
  hotColdConfig: HotColdConfig;
  recommendationConfig: RecommendationConfig;
  // Variant keys for UI buttons
  hotColdVariant: HotColdConfigKey;
  recommendationVariant: RecommendationConfigKey;
  // Setters - update config and variant together
  setHotColdVariant: (key: HotColdConfigKey) => void;
  setRecommendationVariant: (key: RecommendationConfigKey) => void;
  // User type
  userType: "logged" | "guest";
  setUserType: (type: "logged" | "guest") => void;
  // Loading state
  isReinitializing: boolean;
  // Config maps for UI
  hotColdConfigs: typeof hotColdConfigs;
  recommendationConfigs: typeof recommendationConfigs;
};

const GamblioContext = createContext<GamblioContextValue | null>(null);

export function useGamblio() {
  const ctx = useContext(GamblioContext);
  if (!ctx) {
    throw new Error("useGamblio must be used within GamblioProvider");
  }
  return ctx;
}

export function GamblioProvider({ children }: { children: React.ReactNode }) {
  // Variant keys
  const [hotColdVariant, setHotColdVariantState] = useState<HotColdConfigKey>(
    DEFAULT_HOT_COLD_VARIANT,
  );
  const [recommendationVariant, setRecommendationVariantState] =
    useState<RecommendationConfigKey>(DEFAULT_RECOMMENDATION_VARIANT);

  // Configs with targetContainerId
  const [hotColdConfig, setHotColdConfig] = useState<HotColdConfig>({
    ...hotColdConfigs[DEFAULT_HOT_COLD_VARIANT].config,
  });

  const [recommendationConfig, setRecommendationConfig] =
    useState<RecommendationConfig>({
      ...recommendationConfigs[DEFAULT_RECOMMENDATION_VARIANT].config,
    });

  const [userType, setUserTypeState] = useState<"logged" | "guest">("guest");
  const [isReinitializing, setIsReinitializing] = useState(false);

  // Set hot/cold variant - updates both key and config
  const setHotColdVariant = useCallback((key: HotColdConfigKey) => {
    console.log("[GamblioProvider] setHotColdVariant:", key);
    setHotColdVariantState(key);
    setHotColdConfig({
      ...hotColdConfigs[key].config,
    });
  }, []);

  // Set recommendation variant - updates both key and config
  const setRecommendationVariant = useCallback(
    (key: RecommendationConfigKey) => {
      console.log("[GamblioProvider] setRecommendationVariant:", key);
      setRecommendationVariantState(key);
      setRecommendationConfig({
        ...recommendationConfigs[key].config,
      });
    },
    [],
  );

  // User type with localStorage
  const setUserType = useCallback((type: "logged" | "guest") => {
    if (typeof window !== "undefined") {
      if (type === "logged") {
        localStorage.setItem(TOKEN_KEY, PLAYER_TOKEN);
      } else {
        localStorage.removeItem(TOKEN_KEY);
      }
    }
    setUserTypeState(type);
  }, []);

  // Reinitialize on every state change. If SDK is not ready, keep polling and apply latest state once it appears.
  useEffect(() => {
    console.log("[GamblioProvider] useEffect triggered", {
      hotColdConfig,
      recommendationConfig,
      userType,
    });

    if (typeof window === "undefined") return;

    let initCompleted = false;

    const runReinit = () => {
      const sdk = window.Gamblio;
      if (!sdk) {
        return false;
      }

      console.log("[GamblioProvider] Reinitializing...");
      setIsReinitializing(true);

      // Clear containers
      const recContainer = document.getElementById(REC_CONTAINER_ID);
      const hcContainer = document.getElementById(HOT_COLD_CONTAINER_ID);
      if (recContainer) recContainer.innerHTML = "";
      if (hcContainer) hcContainer.innerHTML = "";

      // Destroy existing
      if (sdk.destroy) {
        console.log("[GamblioProvider] Destroying existing widgets");
        sdk.destroy();
      }

      const initConfig = {
        tokenName: TOKEN_KEY,
        clientId: CLIENT_ID,
        language: "en",
        envDev: false,
        recommendationWidgetTargetContainerId: REC_CONTAINER_ID,
        recommendationConfig,
        gamesSwiperConfig: hotColdConfig,
        chatConfig: {
          backgroundPrimary: "#1a1a1a",
          hoverColor: "#2d2d2d",
          logoUrl: "/images/logo-dark.svg",
        },
      };

      console.log("[GamblioProvider] Calling Gamblio.init with:", initConfig);
      sdk.init(initConfig);
      initCompleted = true;

      setTimeout(() => setIsReinitializing(false), 50);
      return true;
    };

    // Try immediately for fast path.
    if (runReinit()) {
      return;
    }

    console.log("[GamblioProvider] Gamblio not ready yet, waiting...");
    const interval = setInterval(() => {
      if (runReinit()) {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      if (!initCompleted) {
        setIsReinitializing(false);
      }
    };
  }, [hotColdConfig, recommendationConfig, userType]);

  const value: GamblioContextValue = {
    hotColdConfig,
    recommendationConfig,
    hotColdVariant,
    recommendationVariant,
    setHotColdVariant,
    setRecommendationVariant,
    userType,
    setUserType,
    isReinitializing,
    hotColdConfigs,
    recommendationConfigs,
  };

  return (
    <GamblioContext.Provider value={value}>{children}</GamblioContext.Provider>
  );
}
