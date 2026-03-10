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

const TOKEN_KEY = "playerToken";
const URL_PARAM_RECOMMENDATION = "rec";
const URL_PARAM_HOT_COLD = "hc";
const URL_PARAM_USER = "user";
const PLAYER_TOKEN =
  "3f24bbbd8e6613b94aab4f58981c50878cd0b347c555e143c7f13e8932ee8ae0cadeb0b4d05888e3bfa094d85f02c99aa67de64c72a6273da07db9ee5270000a";

function isHotColdConfigKey(value: string | null): value is HotColdConfigKey {
  return value !== null && value in hotColdConfigs;
}

function isRecommendationConfigKey(
  value: string | null,
): value is RecommendationConfigKey {
  return value !== null && value in recommendationConfigs;
}

function isUserType(value: string | null): value is "logged" | "guest" {
  return value === "logged" || value === "guest";
}

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

  // Read widgets URL state on client after mount, so provider stays safe as a global wrapper.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.location.pathname.startsWith("/widgets")) return;

    const params = new URLSearchParams(window.location.search);
    const recommendationParam = params.get(URL_PARAM_RECOMMENDATION);
    const hotColdParam = params.get(URL_PARAM_HOT_COLD);
    const userParam = params.get(URL_PARAM_USER);

    if (isRecommendationConfigKey(recommendationParam)) {
      setRecommendationVariantState(recommendationParam);
      setRecommendationConfig({
        ...recommendationConfigs[recommendationParam].config,
      });
    }

    if (isHotColdConfigKey(hotColdParam)) {
      setHotColdVariantState(hotColdParam);
      setHotColdConfig({
        ...hotColdConfigs[hotColdParam].config,
      });
    }

    if (isUserType(userParam)) {
      setUserTypeState(userParam);
    }
  }, []);

  const updateUrlState = useCallback(
    (next: {
      hotColdVariant?: HotColdConfigKey;
      recommendationVariant?: RecommendationConfigKey;
      userType?: "logged" | "guest";
    }) => {
      const nextHotColdVariant = next.hotColdVariant ?? hotColdVariant;
      const nextRecommendationVariant =
        next.recommendationVariant ?? recommendationVariant;
      const nextUserType = next.userType ?? userType;

      if (typeof window === "undefined") return;

      const params = new URLSearchParams(window.location.search);

      if (nextHotColdVariant === DEFAULT_HOT_COLD_VARIANT) {
        params.delete(URL_PARAM_HOT_COLD);
      } else {
        params.set(URL_PARAM_HOT_COLD, nextHotColdVariant);
      }

      if (nextRecommendationVariant === DEFAULT_RECOMMENDATION_VARIANT) {
        params.delete(URL_PARAM_RECOMMENDATION);
      } else {
        params.set(URL_PARAM_RECOMMENDATION, nextRecommendationVariant);
      }

      if (nextUserType === "guest") {
        params.delete(URL_PARAM_USER);
      } else {
        params.set(URL_PARAM_USER, nextUserType);
      }

      const query = params.toString();
      const hash = window.location.hash;
      const nextUrl = query
        ? `${window.location.pathname}?${query}${hash}`
        : `${window.location.pathname}${hash}`;
      const currentUrl = `${window.location.pathname}${window.location.search}${hash}`;
      if (currentUrl !== nextUrl) {
        // Replace keeps history clean while forcing a full re-init from URL state.
        window.location.replace(nextUrl);
      }
    },
    [hotColdVariant, recommendationVariant, userType],
  );

  // Set hot/cold variant - updates both key and config
  const setHotColdVariant = useCallback(
    (key: HotColdConfigKey) => {
      console.log("[GamblioProvider] setHotColdVariant:", key);
      setHotColdVariantState(key);
      setHotColdConfig({
        ...hotColdConfigs[key].config,
      });
      updateUrlState({ hotColdVariant: key });
    },
    [updateUrlState],
  );

  // Set recommendation variant - updates both key and config
  const setRecommendationVariant = useCallback(
    (key: RecommendationConfigKey) => {
      console.log("[GamblioProvider] setRecommendationVariant:", key);
      setRecommendationVariantState(key);
      setRecommendationConfig({
        ...recommendationConfigs[key].config,
      });
      updateUrlState({ recommendationVariant: key });
    },
    [updateUrlState],
  );

  // User type and URL sync
  const setUserType = useCallback(
    (type: "logged" | "guest") => {
      setUserTypeState(type);
      updateUrlState({ userType: type });
    },
    [updateUrlState],
  );

  // Keep localStorage token in sync on first load and toggle.
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (userType === "logged") {
      localStorage.setItem(TOKEN_KEY, PLAYER_TOKEN);
      return;
    }

    localStorage.removeItem(TOKEN_KEY);
  }, [userType]);

  const value: GamblioContextValue = {
    hotColdConfig,
    recommendationConfig,
    hotColdVariant,
    recommendationVariant,
    setHotColdVariant,
    setRecommendationVariant,
    userType,
    setUserType,
    hotColdConfigs,
    recommendationConfigs,
  };

  return (
    <GamblioContext.Provider value={value}>{children}</GamblioContext.Provider>
  );
}
