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
    <div id="faq" className="flex flex-col items-center w-full scroll-mt-32 gap-8 md:gap-12">
      
      <div className="flex flex-col items-center gap-4 md:gap-6 text-center max-w-3xl mx-auto">
        <Title className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Frequently Asked Questions
        </Title>
        <Description className="text-base md:text-lg lg:text-xl text-muted-foreground">
          Find answers to the most common questions about Gamblio and its
          features. If you don’t see your question here, our team will be happy
          to assist—just get in touch with us anytime.
        </Description>
      </div>

      <div className="w-full max-w-6xl mx-auto bg-card rounded-[2rem] p-5 sm:p-8 md:p-12 border border-border/60 shadow-lg">
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-1 md:space-y-2"
        >
          <AccordionItem value="item-1" className="border-b border-border/50 pb-2">
            <AccordionTrigger className="text-left text-base sm:text-lg md:text-xl font-semibold hover:text-primary transition-colors py-3 md:py-4">
              What business problems does Gamblio solve?
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed pt-1 md:pt-2 pb-4 md:pb-6">
              <p>
                Gamblio turns fragmented gambling data into real-time,
                operational intelligence: it helps you raise player LTV,
                predicts player behaviour, cuts cost-to-serve, and gives you the
                tools to make data-driven operations, compress costs and support
                business decisions every day.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border-b border-border/50 pb-2">
            <AccordionTrigger className="text-left text-base sm:text-lg md:text-xl font-semibold hover:text-primary transition-colors py-3 md:py-4">
              How quickly can we see impact after integration?
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed pt-1 md:pt-2 pb-4 md:pb-6">
              <p>
                You’ll see operational value within days with business analytics
                and recommendations; measurable KPIs (reduced ticket volume,
                improved CTR, early churn interventions, early VIP players
                detection) typically emerge within a few weeks depending on
                available data. A short use proves fast impact.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border-none pb-0">
            <AccordionTrigger className="text-left text-base sm:text-lg md:text-xl font-semibold hover:text-primary transition-colors py-3 md:py-4">
              What integration options do you support?
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed pt-1 md:pt-2 pb-0">
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
        
        <div className="flex justify-center md:justify-end mt-4 md:mt-2">
          <Link
            href="/faq"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "group flex items-center gap-2 text-primary font-medium hover:bg-primary/10 rounded-full px-5 py-3 text-sm sm:text-base md:text-lg"
            )}
          >
            Read more 
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}