import { cn } from "@/lib/utils";
import { Description } from "./ui/typography";

export default function TrustedBy() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-10 py-8">
      <Description className="text-sm font-semibold tracking-widest uppercase text-muted-foreground text-center">
        Trusted by industry leaders
      </Description>
      
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-20 max-w-5xl mx-auto opacity-70">
        {PARTNERS.map((partner, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={partner}
              className="w-24 md:w-32 lg:w-36 grayscale brightness-0 dark:invert opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 cursor-default"
              alt={`Trusted Partner ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
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