import { Description, Title } from "@/components/ui/typography";
import { WorldMap } from "../ui/world-map";

function GlobalReach() {
  return (
    <div className="flex flex-col items-center gap-10 md:gap-6 py-10 md:py-4 w-full">
      
      <div className="flex flex-col items-center gap-3 text-center max-w-3xl px-4">
        <Title className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
          <span className="text-primary">Insights</span> That{" "}
          <span className="text-primary">Grow</span> With You
        </Title>

        <Description className="text-sm md:text-lg text-muted-foreground leading-tight">
          Whether you manage one brand or a multi-market portfolio, Gamblio
          Analytics scales with your operation.
          <br className="hidden md:block" />
          Filter by market, brand, player segment, or game type, or automate
          reports across teams.
        </Description>
      </div>

      <div className="relative w-full max-w-5xl px-0 sm:px-4 py-8 md:py-0 [perspective:1000px] overflow-hidden flex justify-center">
        <div className="[transform:rotateX(35deg)] scale-[1.05] md:scale-100 w-full max-w-[100vw]">
          <WorldMap
            dots={[
              { start: { lat: 37.7749, lng: -122.4194 }, end: { lat: 37.7749, lng: -122.4194 } },
              { start: { lat: 40.7128, lng: -74.006 }, end: { lat: 40.7128, lng: -74.006 } },
              { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 51.5074, lng: -0.1278 } },
              { start: { lat: 48.8566, lng: 2.3522 }, end: { lat: 48.8566, lng: 2.3522 } },
              { start: { lat: 52.52, lng: 13.405 }, end: { lat: 52.52, lng: 13.405 } },
              { start: { lat: 55.7558, lng: 37.6173 }, end: { lat: 55.7558, lng: 37.6173 } },
              { start: { lat: 44.7866, lng: 20.4489 }, end: { lat: 44.7866, lng: 20.4489 } },
              { start: { lat: 43.8563, lng: 18.4131 }, end: { lat: 43.8563, lng: 18.4131 } },
              { start: { lat: 42.4304, lng: 19.2594 }, end: { lat: 42.4304, lng: 19.2594 } },
              { start: { lat: 25.2048, lng: 55.2708 }, end: { lat: 25.2048, lng: 55.2708 } },
              { start: { lat: -1.2921, lng: 36.8219 }, end: { lat: -1.2921, lng: 36.8219 } },
              { start: { lat: 35.6762, lng: 139.6503 }, end: { lat: 35.6762, lng: 139.6503 } },
              { start: { lat: 39.9042, lng: 116.4074 }, end: { lat: 39.9042, lng: 116.4074 } },
              { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: 1.3521, lng: 103.8198 } },
              { start: { lat: 19.076, lng: 72.8777 }, end: { lat: 19.076, lng: 72.8777 } },
              { start: { lat: -33.8688, lng: 151.2093 }, end: { lat: -33.8688, lng: 151.2093 } },
            ]}
            lineColor="oklch(60.34% 0.103 206.8)"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 mt-4 md:mt-1 bg-muted/10 px-5 py-4 md:px-6 md:py-3 rounded-2xl border border-border/50 mx-4">
        <p className="italic text-center text-muted-foreground text-xs md:text-sm">
          "With Gamblio Analytics, no insight stays buried — performance is always visible."
        </p>
        <p className="font-medium text-primary text-[10px] md:text-xs">-Gamblio</p>
      </div>
    </div>
  );
}

export default GlobalReach;