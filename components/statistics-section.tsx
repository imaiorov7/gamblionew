import DashedBorder from "@/components/shared/dashed-border";
import { Title } from "@/components/ui/typography";

interface Statistic {
  value: string;
  description: string;
}

const statistics: Statistic[] = [
  {
    value: "4",
    description: "years of experience in iGaming industry",
  },
  {
    value: "3",
    description: "years of experience in AI",
  },
  {
    value: "10M+",
    description: "lines of code written",
  },
  {
    value: "N",
    description: "formulas composed",
  },
];

export function StatisticsSection() {
  return (
    <DashedBorder
      sides="all"
      className="flex flex-col items-center gap-8 py-12"
    >
      <Title className="text-3xl font-medium text-center">We have...</Title>

      <div className="w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat, index) => (
            <DashedBorder
              key={index}
              sides="all"
              className="flex flex-col items-center justify-center p-6 gap-4 border-primary bg-[#0e0e10]"
            >
              <div className="text-5xl font-bold md:text-6xl text-primary">
                {stat.value}
              </div>
              <p className="text-sm text-center md:text-base text-foreground">
                {stat.description}
              </p>
            </DashedBorder>
          ))}
        </div>
      </div>
    </DashedBorder>
  );
}
