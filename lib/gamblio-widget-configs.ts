/**
 * Recommendation and Hot & Cold widget variant configs.
 * Shared by GamblioProvider (init/reinit) and widgets page (UI).
 */

export const recommendationConfigs = {
  transparentCarousel: {
    label: "Transparent + Carousel",
    config: {
      backgroundType: "transparent",
      shadowColor: "rgba(0,0,0,0.15)",
      navButtonColor: "#333333",
      navButtonHoverColor: "#000000",
      displayMode: "carousel",
      withHeadline: true,
    },
  },
  gradientCarousel: {
    label: "Gradient + Carousel",
    config: {
      backgroundType: "gradient",
      gradientDirection: "to right",
      gradientColors: ["rgba(0,33,87,0.8)", "rgba(230,195,40,0.8)"],
      shadowColor: "rgba(0,0,0,0.15)",
      navButtonColor: "#f5f5f5",
      navButtonHoverColor: "#ffffff",
      displayMode: "carousel",
      withHeadline: true,
    },
  },
  imageCarousel: {
    label: "Image + Carousel",
    config: {
      backgroundType: "image",
      imageIndex: 1,
      shadowColor: "rgba(0,0,0,0.15)",
      navButtonColor: "#f5f5f5",
      navButtonHoverColor: "#ffffff",
      displayMode: "carousel",
      withHeadline: true,
    },
  },
  videoStack: {
    label: "Video + Stack",
    config: {
      backgroundType: "video",
      videoIndex: 1,
      shadowColor: "rgba(0,0,0,0.15)",
      navButtonColor: "#e6c340",
      navButtonHoverColor: "#f2d85c",
      displayMode: "stack",
      withHeadline: true,
    },
  },
  gradientStack: {
    label: "Gradient + Stack",
    config: {
      backgroundType: "gradient",
      gradientDirection: "to right",
      gradientColors: ["rgba(131,58,180,0.8)", "rgba(253,29,29,0.8)"],
      shadowColor: "rgba(0,0,0,0.15)",
      navButtonColor: "#f5f5f5",
      navButtonHoverColor: "#ffffff",
      displayMode: "stack",
      withHeadline: true,
    },
  },
  noHeadlineCarousel: {
    label: "No Headline + Carousel",
    config: {
      backgroundType: "gradient",
      gradientDirection: "135deg",
      gradientColors: ["rgba(0,180,219,1)", "rgba(0,131,176,1)"],
      shadowColor: "rgba(0,0,0,0.15)",
      navButtonColor: "#f5f5f5",
      navButtonHoverColor: "#ffffff",
      displayMode: "carousel",
      withHeadline: false,
    },
  },
  customShuffle: {
    label: "Custom Shuffle Colors",
    config: {
      backgroundType: "gradient",
      gradientDirection: "to right",
      gradientColors: ["rgba(0,33,87,0.8)", "rgba(230,195,40,0.8)"],
      displayMode: "carousel",
      withHeadline: true,
      shuffleButtonBgColor: "rgba(0, 33, 87, 1)",
      shuffleButtonIconColor: "#C9FFE2",
    },
  },
  videoStackNoHeadline: {
    label: "Video + Stack (No Headline)",
    config: {
      backgroundType: "video",
      videoIndex: 2,
      shadowColor: "rgba(0,0,0,0.15)",
      navButtonColor: "#e6c340",
      navButtonHoverColor: "#f2d85c",
      displayMode: "stack",
      withHeadline: false,
    },
  },
} as const;

export const hotColdConfigs = {
  imageDifferent: {
    label: "Image (Hot/Cold Different)",
    config: {
      targetContainerId: "hot-cold-container",
      backgroundType: "image",
      hotImageIndex: 8,
      coldImageIndex: 9,
      imageExtension: "png",
    },
  },
  videoDifferent: {
    label: "Video (Hot/Cold Different)",
    config: {
      targetContainerId: "hot-cold-container",
      backgroundType: "video",
      hotVideoIndex: 1,
      coldVideoIndex: 2,
    },
  },
  videoSame: {
    label: "Video (Same)",
    config: {
      targetContainerId: "hot-cold-container",
      backgroundType: "video",
      videoIndex: 3,
    },
  },

  imageSame: {
    label: "Image (Same)",
    config: {
      targetContainerId: "hot-cold-container",
      backgroundType: "image",
      imageIndex: 3,
      imageExtension: "png",
    },
  },
  gradientDifferent: {
    label: "Gradient (Hot/Cold Different)",
    config: {
      targetContainerId: "hot-cold-container",
      backgroundType: "gradient",
      hotGradientColors: ["rgba(234, 88, 12, 0.8)", "rgba(194, 65, 12, 0.8)"],
      hotGradientDirection: "to right",
      coldGradientColors: ["rgba(37, 99, 235, 0.8)", "rgba(29, 78, 216, 0.8)"],
      coldGradientDirection: "to right",
    },
  },
  gradientSame: {
    label: "Gradient (Same)",
    config: {
      targetContainerId: "hot-cold-container",
      backgroundType: "gradient",
      gradientColors: ["rgba(131, 58, 180, 0.8)", "rgba(253, 29, 29, 0.8)"],
      gradientDirection: "135deg",
    },
  },
  transparent: {
    label: "Transparent",
    config: {
      targetContainerId: "hot-cold-container",
      backgroundType: "transparent",
    },
  },
  videoAlt: {
    label: "Video (Alt)",
    config: {
      targetContainerId: "hot-cold-container",
      backgroundType: "video",
      hotVideoIndex: 4,
      coldVideoIndex: 5,
    },
  },
} as const;

export type RecommendationConfigKey = keyof typeof recommendationConfigs;
export type HotColdConfigKey = keyof typeof hotColdConfigs;

export const DEFAULT_RECOMMENDATION_VARIANT: RecommendationConfigKey =
  "transparentCarousel";
export const DEFAULT_HOT_COLD_VARIANT: HotColdConfigKey = "imageDifferent";
