"use client";

import { Loader2 } from "lucide-react";
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

const MOCK_TOKEN = "demo_user_token_12345";

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
    isReinitializing,
    recommendationConfigs,
    hotColdConfigs,
  } = useGamblio();

  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      <div className="container mx-auto space-y-10 mt-20">
        <h1 className="text-3xl font-bold text-center mb-8">
          Widgets SDK Demo
        </h1>

        {/* Tab Set 1: User Type */}
        <Card>
          <CardHeader>
            <CardTitle>1. User Authentication</CardTitle>
            <CardDescription>
              Toggle between logged user (has token) and guest (no token) to see
              personalized vs generic recommendations.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Button
                variant={userType === "logged" ? "default" : "outline"}
                onClick={() => setUserType("logged")}
              >
                Logged User
              </Button>
              <Button
                variant={userType === "guest" ? "default" : "outline"}
                onClick={() => setUserType("guest")}
              >
                Guest
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Current status:{" "}
              <span className="font-mono">
                {userType === "logged" ? `Token: ${MOCK_TOKEN}` : "No token"}
              </span>
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
            {/* <div className="flex flex-wrap gap-2">
              {Object.entries(recommendationConfigs).map(([key, { label }]) => (
                <Button
                  key={key}
                  variant={
                    recommendationVariant === key ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() =>
                    setRecommendationVariant(key as RecommendationConfigKey)
                  }
                >
                  {label}
                </Button>
              ))}
            </div> */}

            {/* Current config display */}
            {/* <details className="text-xs">
              <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                View current configuration
              </summary>
              <pre className="mt-2 p-3 bg-muted rounded-lg overflow-auto">
                {JSON.stringify(recommendationConfig, null, 2)}
              </pre>
            </details> */}

            {/* Recommendation Widget Container */}
            <div
              id="recommendation-container"
              className="relative w-full min-h-[400px] rounded-lg border border-border overflow-hidden"
              style={{ height: "500px" }}
            >
              {isReinitializing && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/80 rounded-lg">
                  <Loader2 className="size-10 animate-spin text-primary" />
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Tab Set 3: Hot & Cold Widget Variants */}
        <Card>
          <CardHeader>
            <CardTitle>3. Hot & Cold Games Widget</CardTitle>
            <CardDescription>
              Test different backgrounds for hot/cold games, including separate
              backgrounds for each filter state.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* <div className="flex flex-wrap gap-2">
              {Object.entries(hotColdConfigs).map(([key, { label }]) => (
                <Button
                  key={key}
                  variant={hotColdVariant === key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setHotColdVariant(key as HotColdConfigKey)}
                >
                  {label}
                </Button>
              ))}
            </div>

            <details className="text-xs">
              <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                View current configuration
              </summary>
              <pre className="mt-2 p-3 bg-muted rounded-lg overflow-auto">
                {JSON.stringify(hotColdConfig, null, 2)}
              </pre>
            </details> */}

            <div
              id="hot-cold-container"
              className="relative w-full min-h-[400px] rounded-lg border border-border overflow-hidden"
              style={{ height: "700px" }}
            >
              {isReinitializing && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/80 rounded-lg">
                  <Loader2 className="size-10 animate-spin text-primary" />
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Documentation Reference */}
        <div className="grid md:grid-cols-2 gap-6 pb-10">
          <Card>
            <CardHeader>
              <CardTitle>Recommendation Widget</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
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
              <ul className="text-sm text-muted-foreground space-y-1">
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
                  <strong>glow:</strong> true/false
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
