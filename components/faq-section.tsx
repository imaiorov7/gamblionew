import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "./ui/button";
import { Description, Title } from "./ui/typography";
import { cn } from "@/lib/utils";

export function FAQSection() {
  return (
    <div id="faq" className="relative flex flex-col items-center w-full scroll-mt-32 gap-8 md:gap-12 py-4">
      
      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="relative z-10 flex flex-col items-center gap-4 md:gap-6 text-center max-w-3xl mx-auto px-4">
        <Title className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Frequently Asked Questions
        </Title>
        <Description className="text-base md:text-lg lg:text-xl text-muted-foreground">
          Find answers to the most common questions about Gamblio and its
          features. If you don’t see your question here, our team will be happy
          to assist—just get in touch with us anytime.
        </Description>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        {/* Added a top border to frame the list perfectly */}
        <Accordion
          type="single"
          collapsible
          className="w-full border-t border-border/40"
        >
          {/* Question 01 */}
          <AccordionItem 
            value="item-1" 
            className="!bg-transparent !border-x-0 !border-t-0 border-b border-border/40 px-0"
          >
            <AccordionTrigger className="text-left hover:no-underline !bg-transparent py-6 md:py-8 group">
              <div className="flex items-center gap-4 md:gap-6">
                <span className="text-sm md:text-base font-mono font-bold text-primary/40 group-hover:text-primary transition-colors">01</span>
                <span className="text-base sm:text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">
                  What business problems does Gamblio solve?
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed pb-8 pl-9 md:pl-[3.25rem] !bg-transparent">
              <p>
                Gamblio turns fragmented gambling data into real-time,
                operational intelligence: it helps you raise player LTV,
                predicts player behaviour, cuts cost-to-serve, and gives you the
                tools to make data-driven operations, compress costs and support
                business decisions every day.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          {/* Question 02 */}
          <AccordionItem 
            value="item-2" 
            className="!bg-transparent !border-x-0 !border-t-0 border-b border-border/40 px-0"
          >
            <AccordionTrigger className="text-left hover:no-underline !bg-transparent py-6 md:py-8 group">
              <div className="flex items-center gap-4 md:gap-6">
                <span className="text-sm md:text-base font-mono font-bold text-primary/40 group-hover:text-primary transition-colors">02</span>
                <span className="text-base sm:text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">
                  How quickly can we see impact after integration?
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed pb-8 pl-9 md:pl-[3.25rem] !bg-transparent">
              <p>
                You’ll see operational value within days with business analytics
                and recommendations; measurable KPIs (reduced ticket volume,
                improved CTR, early churn interventions, early VIP players
                detection) typically emerge within a few weeks depending on
                available data. A short use proves fast impact.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          {/* Question 03 */}
          <AccordionItem 
            value="item-3" 
            className="!bg-transparent !border-x-0 !border-t-0 border-b border-border/40 px-0"
          >
            <AccordionTrigger className="text-left hover:no-underline !bg-transparent py-6 md:py-8 group">
              <div className="flex items-center gap-4 md:gap-6">
                <span className="text-sm md:text-base font-mono font-bold text-primary/40 group-hover:text-primary transition-colors">03</span>
                <span className="text-base sm:text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">
                  What integration options do you support?
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed pb-8 pl-9 md:pl-[3.25rem] !bg-transparent">
              <p>
                We use industry-standard{" "}
                <span className="font-semibold text-foreground">
                  Pub-Sub streaming services (Kafka/RabbitMQ)
                </span>{" "}
                for real-time ingestion. Optionally we also support secure REST
                APIs integration. Import via read-only DB clone is used only for
                initial data population and testing. Widgets (chat/games
                recommendations) deploy via a single JS snippet.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="flex justify-center mt-8 md:mt-10">
          <Link
            href="/faq"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "group flex items-center gap-2 text-primary font-medium hover:bg-primary/10 rounded-full px-6 py-3 md:py-4 text-sm sm:text-base transition-colors duration-300"
            )}
          >
            Read all FAQs 
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>

    </div>
  );
}