import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "./ui/button";
import { Description, H1, Title } from "./ui/typography";
import DashedBorder from "./shared/dashed-border";

export function FAQSection() {
  return (
    <>
      <DashedBorder sides="all" className="w-full py-12">
        <Title className="font-medium text-center ">
          Frequently Asked Questions
        </Title>
        <Description>
          Find answers to the most common questions about Gamblio and its
          features. If you don’t see your question here, our team will be happy
          to assist—just get in touch with us anytime.
        </Description>
      </DashedBorder>
      <DashedBorder sides="all">
        <Accordion
          type="single"
          collapsible
          className="w-full p-8 mx-auto space-y-3 max-w-7xl"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What business problems does Gamblio solve?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Gamblio turns fragmented gambling data into real-time,
                operational intelligence: it helps you raise player LTV,
                predicts player behaviour, cuts cost-to-serve, and gives you the
                tools to make data-driven operations, compress costs and support
                business decisions every day.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How quickly can we see impact after integration?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                You’ll see operational value within days with business analytics
                and recommendations; measurable KPIs (reduced ticket volume,
                improved CTR, early churn interventions, early VIP players
                detection) typically emerge within a few weeks depending on
                available data. A short use proves fast impact.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              What integration options do you support?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                We use industry-standard{" "}
                <span className="font-bold">
                  Pub-Sub streaming services (Kafka/RabbitMQ)
                </span>{" "}
                for real-time ingestion. Optionally we also support secure REST
                APIs integration. Import via read-only DB clone is used only for
                initial data population and testing. Widgets (chat/games
                recommendations) deploy via a single JS snippet.
              </p>
            </AccordionContent>
          </AccordionItem>
          <Link
            href="/faq"
            className={`${buttonVariants({ variant: "ghost" })} align-self-end`}
          >
            Read more <ArrowRight />
          </Link>
        </Accordion>
      </DashedBorder>
    </>
  );
}
