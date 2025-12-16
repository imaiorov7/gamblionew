import DashedBorder from "@/components/shared/dashed-border";
import { Description, Title } from "@/components/ui/typography";
export function MetricsToOutcomes() {
  return (
    <DashedBorder
      sides="all"
      className="flex flex-col items-center gap-8 pt-12 pb-0"
    >
      <Title className="font-medium text-center ">
        From <span className="text-primary">Metrics</span> to Measurable{" "}
        <span className="text-primary">Outcomes</span>
      </Title>

      <Description className="max-w-3xl text-center md:w-2/3">
        Every feature in Gamblio Analytics is designed to directly influence
        performance — reducing blind spots, increasing Lifetime Value of
        players, and driving profitability.
      </Description>

      <div className="w-full px-4 mt-8 max-w-4/5">
        <div className="relative grid grid-cols-1 md:grid-cols-2">
          {/* Border on top with vertical lines on sides */}
          <div className="absolute top-0 left-0 right-0 h-0 border-t-2 border border-border -translate-y-1/2 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-10 before:border-l-2 before:border before:border-muted after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-0.5 after:h-10 after:border-l-2 after:border after:border-muted"></div>

          {/* Left Column - Objective */}
          <div className="relative flex flex-col gap-4  md:border-r-2  border-dashed  rounded-br-[12%] pb-24">
            <h3 className="absolute text-sm font-semibold text-center left-4 -top-7 text-muted-foreground md:text-left">
              Objective
            </h3>

            {[
              "Faster decisions",
              "Smarter bonus spend",
              "Leaner operations",
              "Risk prevention",
              "Improved vendor strategy",
            ].map((objective, index) => (
              <div
                key={objective}
                className="relative flex items-center gap-0 h-[88px] mt-12"
              >
                <div className="flex items-center flex-1 p-2 border rounded-md h-fit bg-background border-border">
                  <DashedBorder
                    sides="all"
                    className="flex items-center justify-center w-full h-full px-6 mx-0 text-center bg-custom-dark md:mx-0"
                  >
                    <p className="text-xs font-medium md:text-sm">
                      {objective}
                    </p>
                  </DashedBorder>
                </div>
                {/* Connecting line between text and number */}
                <div className="hidden w-4 h-px border-t-2 border-solid md:block border-border" />
                <div className="items-center justify-center hidden w-12 h-12 border-2 rounded-md md:flex border-border bg-background shrink-0">
                  <span className="text-lg font-bold ">{index + 1}</span>
                </div>
                {/* Connecting line between number and middle */}
                <div className="hidden w-12 h-px border-t-2 border-solid md:block border-border" />
              </div>
            ))}
          </div>

          {/* Right Column - Gamblio delivers */}
          <div className="relative flex flex-col gap-4  md:border-l-2  border-dashed  rounded-bl-[12%] pb-24">
            <div className="block md:hidden absolute top-0 left-0 right-0 h-0 border-t-2 border border-border -translate-y-1/2 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-10 before:border-l-2 before:border before:border-muted after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-0.5 after:h-10 after:border-l-2 after:border after:border-muted"></div>
            <h3 className="absolute text-sm font-semibold text-center right-4 -top-7 text-muted-foreground md:text-right">
              Gamblio delivers
            </h3>

            {[
              "Real-time KPI visibility",
              "Track ROI & optimize campaigns",
              "Replace manual checks with live monitoring",
              "Early alerts for abnormal events or performance drops",
              "Benchmark and optimize game/provider performance",
            ].map((delivery, index) => (
              <div
                key={delivery}
                className="relative flex items-center gap-0 h-[88px] mt-12"
              >
                {/* Connecting line from middle */}
                <div className="hidden w-12 h-px border-t-2 border-solid md:block border-border" />
                <div className="flex items-center flex-1 p-2 border rounded-md h-fit bg-background border-border">
                  <DashedBorder
                    sides="all"
                    className="flex items-center justify-center w-full h-full px-6 mx-0 text-center bg-custom-dark md:mx-0"
                  >
                    <p className="text-xs font-medium md:text-sm">{delivery}</p>
                  </DashedBorder>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashedBorder>
  );
}
