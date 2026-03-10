"use client";

import { useEffect } from "react";
import { useGamblio } from "@/components/providers/gamblio-provider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type {
  HotColdConfigKey,
  RecommendationConfigKey,
} from "@/lib/gamblio-widget-configs";

export default function WidgetsPage() {
  const {
    recommendationVariant,
    setRecommendationVariant,
    recommendationConfig,
    hotColdVariant,
    setHotColdVariant,
    hotColdConfig,
    userType,
    setUserType,
    recommendationConfigs,
    hotColdConfigs,
  } = useGamblio();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (!hash) return;

    const section = document.getElementById(hash.slice(1));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const setSectionHash = (sectionId: string) => {
    if (typeof window === "undefined") return;
    const basePath = `${window.location.pathname}${window.location.search}`;
    window.history.replaceState(null, "", `${basePath}#${sectionId}`);
  };

  return (
    <div className="min-h-screen w-full bg-background p-4">
      <div
        id="widgets-demo"
        className="mt-16 container mx-auto flex w-full min-w-0 scroll-mt-24 flex-col gap-8 sm:mt-20 sm:gap-10"
      >
        <h1 className="mb-6 text-center text-2xl font-bold sm:mb-8 sm:text-3xl">
          Widgets SDK Demo
        </h1>

        {/* Tab Set 1: User Type */}
        <Card id="recommendation-widget" className="scroll-mt-24">
          <CardHeader>
            <CardTitle>1. User Authentication</CardTitle>
            <CardDescription>
              Toggle between logged user (has token) and guest (no token) to see
              personalized vs generic recommendations.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-2 sm:flex">
              <Button
                variant={userType === "logged" ? "default" : "outline"}
                className="w-full sm:w-auto"
                onClick={() => setUserType("logged")}
              >
                Logged User
              </Button>
              <Button
                variant={userType === "guest" ? "default" : "outline"}
                className="w-full sm:w-auto"
                onClick={() => setUserType("guest")}
              >
                Guest
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Current status: {userType === "logged" ? "Logged User" : "Guest"}
            </p>
          </CardContent>
        </Card>

        {/* Tab Set 2: Recommendation Widget Variants */}
        <Card>
          <CardHeader>
            <CardTitle>2. Recommendation Widget</CardTitle>
            <CardDescription>
              Test different background types (transparent, gradient, image,
              video), display modes (carousel, stack), and headline options.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              {Object.entries(recommendationConfigs).map(([key, { label }]) => (
                <Button
                  key={key}
                  variant={
                    recommendationVariant === key ? "default" : "outline"
                  }
                  size="sm"
                  className="w-full whitespace-normal text-left sm:w-auto sm:text-center"
                  onClick={() => {
                    setSectionHash("recommendation-widget");
                    setRecommendationVariant(key as RecommendationConfigKey);
                  }}
                >
                  {label}
                </Button>
              ))}
            </div>

            {/* Current config display */}
            <details className="text-xs">
              <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                View current configuration
              </summary>
              <pre className="mt-2 max-h-64 overflow-auto rounded-lg bg-muted p-3">
                {JSON.stringify(recommendationConfig, null, 2)}
              </pre>
            </details>

            {/* Recommendation Widget Container */}
            <div
              id="recommendation-container"
              className="relative h-[500px] w-full min-h-[360px] overflow-hidden rounded-lg border border-border sm:h-[500px]"
            />
          </CardContent>
        </Card>

        {/* Tab Set 3: Hot & Cold Widget Variants */}
        <Card id="hot-cold-widget" className="scroll-mt-24">
          <CardHeader>
            <CardTitle>3. Hot & Cold Games Widget</CardTitle>
            <CardDescription>
              Test different backgrounds for hot/cold games, including separate
              backgrounds for each filter state.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              {Object.entries(hotColdConfigs).map(([key, { label }]) => (
                <Button
                  key={key}
                  variant={hotColdVariant === key ? "default" : "outline"}
                  size="sm"
                  className="w-full whitespace-normal text-left sm:w-auto sm:text-center"
                  onClick={() => {
                    setSectionHash("hot-cold-widget");
                    setHotColdVariant(key as HotColdConfigKey);
                  }}
                >
                  {label}
                </Button>
              ))}
            </div>

            <details className="text-xs">
              <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                View current configuration
              </summary>
              <pre className="mt-2 max-h-64 overflow-auto rounded-lg bg-muted p-3">
                {JSON.stringify(hotColdConfig, null, 2)}
              </pre>
            </details>

            <div
              id="hot-cold-container"
              className="relative h-[700px] w-full min-h-[420px] overflow-hidden rounded-lg border border-border sm:h-[700px]"
            />
          </CardContent>
        </Card>

        {/* Documentation Reference */}
        <div className="grid gap-4 pb-10 sm:gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recommendation Widget</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-xs text-muted-foreground sm:text-sm">
                <li>
                  <strong>backgroundType:</strong> transparent, gradient, image,
                  video
                </li>
                <li>
                  <strong>displayMode:</strong> carousel, stack
                </li>
                <li>
                  <strong>withHeadline:</strong> true/false
                </li>
                <li>
                  <strong>videoIndex/imageIndex:</strong> 1-5
                </li>
                <li>
                  <strong>gradientColors:</strong> array of 2 colors
                </li>
                <li>
                  <strong>shuffleButtonBgColor/IconColor:</strong> custom colors
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Hot & Cold Widget</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-xs text-muted-foreground sm:text-sm">
                <li>
                  <strong>backgroundType:</strong> video, image, gradient,
                  transparent
                </li>
                <li>
                  <strong>hotVideoIndex/coldVideoIndex:</strong> 1-5 (separate)
                </li>
                <li>
                  <strong>hotImageIndex/coldImageIndex:</strong> 1-5 (separate)
                </li>
                <li>
                  <strong>hotGradientColors/coldGradientColors:</strong>{" "}
                  separate gradients
                </li>
                <li>
                  <strong>Period:</strong> Daily, Weekly, Monthly (in widget)
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
