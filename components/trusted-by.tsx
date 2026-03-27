import { cn } from "@/lib/utils";
import DashedBorder from "./shared/dashed-border";
import { Description } from "./ui/typography";

export default function TrustedBy() {
  return (
    <>
      <DashedBorder sides="x" className="py-12 mx-0 md:mx-7">
        <Description className="text-xl font-medium text-center text-muted-foreground">
          Trusted by
        </Description>
      </DashedBorder>
      <DashedBorder sides="all" className="grid grid-cols-2 p-0 md:grid-cols-4">
        {PARTNERS.map((e, index) => {
          return (
            <div
              key={index}
              className={cn(
                "w-full  border-t-0 h-36 border-[0.5px] border-dashed flex justify-center items-center",
                index > 3 && "border-b-0",
                index < 4 && "border-t-0",
              )}
            >
              <img
                src={e}
                className="w-24 grayscale-100 brightness-0 dark:invert-100 md:w-36"
                alt=""
              />
            </div>
          );
        })}
      </DashedBorder>
      <div className="h-12 mx-0 md:mx-7 border-x"></div>
    </>
  );
}

const PARTNERS = [
  "/images/partners/admiral.svg",
  "/images/partners/novomatic.svg",
  "/images/partners/Aristocrat2.png",
  "/images/partners/grand-casino.png",

  "/images/partners/playnirvana.png",
  "/images/partners/maxwin.svg",

  "/images/partners/egt.svg",

  "/images/partners/appster.png",
];
