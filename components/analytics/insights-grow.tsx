import DashedBorder from "@/components/shared/dashed-border";
import { Description, Title } from "@/components/ui/typography";
import { WorldMap } from "../ui/world-map";

export function InsightsGrow() {
  return (
    <DashedBorder
      sides="all"
      className="flex flex-col items-center gap-8 py-12"
    >
      <Title className="text-3xl font-medium text-center">
        <span className="text-primary">Insights</span> That{" "}
        <span className="text-primary">Grow</span>
        <br />
        With You
      </Title>

      <Description className="text-center">
        Whether you manage one brand or a multi-market portfolio, Gamblio
        Analytics scales with your operation.
        <br />
        Filter by market, brand, player segment, or game type, or automate
        reports across teams.
      </Description>

      {/* World Map */}
      <div className="relative w-full px-4 py-12 max-w-4/5 [perspective:1000px]">
        <div className="[transform:rotateX(35deg)]">
          <WorldMap
            dots={[
              // North America
              {
                start: { lat: 37.7749, lng: -122.4194 },
                end: { lat: 37.7749, lng: -122.4194 },
              }, // San Francisco
              {
                start: { lat: 40.7128, lng: -74.006 },
                end: { lat: 40.7128, lng: -74.006 },
              }, // New York

              // Europe
              {
                start: { lat: 51.5074, lng: -0.1278 },
                end: { lat: 51.5074, lng: -0.1278 },
              }, // London
              {
                start: { lat: 48.8566, lng: 2.3522 },
                end: { lat: 48.8566, lng: 2.3522 },
              }, // Paris
              {
                start: { lat: 52.52, lng: 13.405 },
                end: { lat: 52.52, lng: 13.405 },
              }, // Berlin
              {
                start: { lat: 55.7558, lng: 37.6173 },
                end: { lat: 55.7558, lng: 37.6173 },
              }, // Moscow
              {
                start: { lat: 44.7866, lng: 20.4489 },
                end: { lat: 44.7866, lng: 20.4489 },
              }, // Belgrade, Serbia
              {
                start: { lat: 43.8563, lng: 18.4131 },
                end: { lat: 43.8563, lng: 18.4131 },
              }, // Sarajevo, Bosnia
              {
                start: { lat: 42.4304, lng: 19.2594 },
                end: { lat: 42.4304, lng: 19.2594 },
              }, // Podgorica, Montenegro

              // Middle East & Africa
              {
                start: { lat: 25.2048, lng: 55.2708 },
                end: { lat: 25.2048, lng: 55.2708 },
              }, // Dubai
              {
                start: { lat: -1.2921, lng: 36.8219 },
                end: { lat: -1.2921, lng: 36.8219 },
              }, // Nairobi

              // Asia
              {
                start: { lat: 35.6762, lng: 139.6503 },
                end: { lat: 35.6762, lng: 139.6503 },
              }, // Tokyo
              {
                start: { lat: 39.9042, lng: 116.4074 },
                end: { lat: 39.9042, lng: 116.4074 },
              }, // Beijing
              {
                start: { lat: 1.3521, lng: 103.8198 },
                end: { lat: 1.3521, lng: 103.8198 },
              }, // Singapore
              {
                start: { lat: 19.076, lng: 72.8777 },
                end: { lat: 19.076, lng: 72.8777 },
              }, // Mumbai

              // Australia
              {
                start: { lat: -33.8688, lng: 151.2093 },
                end: { lat: -33.8688, lng: 151.2093 },
              }, // Sydney
            ]}
            lineColor="oklch(60.34% 0.103 206.8)"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 mt-4">
        <p className="italic text-center text-muted-foreground">
          "With Gamblio Analytics, no insight stays buried — performance is
          always visible."
        </p>
        <p className="font-medium text-primary">-Gamblio</p>
      </div>
    </DashedBorder>
  );
}
