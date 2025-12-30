import { CoreFeaturesSection } from "@/components/core-features-section";
import CTASection from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import Hero from "@/components/hero";
import { ServicesSection } from "@/components/services/services-section";
import DashedBorder from "@/components/shared/dashed-border";
import { TeamSection } from "@/components/team-section";
import TrustedBy from "@/components/trusted-by";
import { Description, H1, Title } from "@/components/ui/typography";
import { HeroVideoDialog } from "@/components/video-dialog";

export default function Home() {
  return (
    <div className="w-full border-b-0">
      <Hero {...HeroDetails} />
      <DashedBorder
        sides="x"
        className="relative flex flex-col items-center justify-center"
      >
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
          thumbnailAlt="Hero Video"
        />
      </DashedBorder>
      <CoreFeaturesSection
        title={
          <>
            Built for <span className="text-primary">gambling</span>. Engineered
            for <span className="text-primary">measurable performance.</span>
          </>
        }
        description={
          <>
            Gamblio unifies analytics, behavior predictions, game
            recommendations, and customer care (AI chat agent + customer care
            console) in one all-around AI solution.
            <br />
            <br />
            <span className="">
              No generic software. No noise. Just outcomes that matter.
            </span>
          </>
        }
        features={coreFeatures}
      />
      <TrustedBy />
      <ServicesSection />
      <DashedBorder
        sides="all"
        className="gap-4 mt-10 scroll-mt-32"
        id="who-we-are"
      >
        <Title>Who we are</Title>
        <Description>
          Gambling Meets <span className="text-primary">Expertise.</span>
        </Description>
        <Description className="p-10 mb-6 text-lg bg-custom-dark text-center">
          Gamblio was built by industry professionals who understand both sides
          of the table, operational realities and advanced AI capabilities. Our
          team brings together experts in gaming operations, data science,
          machine learning and analytics, united by one mission: to empower
          operators with technology that delivers measurable results.
        </Description>
      </DashedBorder>

      <CoreFeaturesSection
        title={
          <DashedBorder sides="y" className="!m-0">
            We have...
          </DashedBorder>
        }
        features={certifications}
        className="px-0"
      />
      <TeamSection />
      <FAQSection />
      <CTASection
        title="See Gamblio in Action"
        description="Experience how Gamblio turns your gambling site data into actionable
            insights. Book a personalized session and see how easy it is to
            integrate, analyze, and optimize your platform."
        buttonText="Contact Us"
        buttonLink="/contact-us"
      />
    </div>
  );
}
const HeroDetails = {
  title: (
    <>
      <span className="text-primary ">AI</span> to amplify
      <br /> <span className="text-primary ">GAMBLIO</span> to simplify
    </>
  ),
  tittleClassName:
    "text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-center   text-balance ",
  description: (
    <>
      AI-driven platform built exclusively for gambling operators: designed to
      reduce churn, improve retention rate, increase player value, and cut
      operational costs.
      <br />
      <br />
      Everything you need to skyrocket your operation in one place.
    </>
  ),
  descriptionClassName: "text-center md:w-1/2 text-xl text-muted-foreground",
  buttons: [
    {
      label: "Contact Us",
      href: "/contact-us",
      variant: "default" as const,
      className: "text-white",
    },
    {
      label: "Learn More",
      href: "#services",
      variant: "outline" as const,
      className: "text-white",
    },
  ],
};
const coreFeatures = [
  {
    image: "/images/increase-revenue.png",
    alt: "Increase Revenue illustration",
    title: "Increase Revenue",
  },
  {
    image: "/images/predict-behavior.png",
    alt: "Predict Behavior illustration",
    title: "Predict Behavior",
  },
  {
    image: "/images/automate-support.png",
    alt: "Automate Support illustration",
    title: "Automate Support",
  },
  {
    image: "/images/improve-efficiency.png",
    alt: "Improve Efficiency illustration",
    title: "Improve Efficiency",
  },
];
const certifications = [
  {
    image: "/images/strict.png",
    alt: "Strict security standards illustration",
    title: "Strict security standards",
  },
  {
    image: "/images/iso-9001.png",
    alt: "ISO 9001 illustration",
    title: "For quality management",
  },
  {
    image: "/images/iso-27001.png",
    alt: "ISO 27001 illustration",
    title: "For information security",
  },
  {
    image: "/images/iso-42001.png",
    alt: "ISO 42001 illustration",
    title: "For responsible AI management",
  },
];
