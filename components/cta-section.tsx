import { Button } from "./ui/button";

export default function CTASection() {
  return (
    <>
      <section className="bg-primary overflow-hidden relative p-5 md:p-20 flex  gap-12 items-center">
        <div className="space-y-1 max-md:text-center">
          <h1 className="md:text-4xl text-3xl max-md:text-center font-medium">
            See Gamblio in Action
          </h1>
          {/* <h1 className="md:text-4xl text-2xl max-md:text-center font-medium">
            Schedule Your Integration
          </h1> */}
          <div className="border-b-2 border-white/50 border-dashed my-2 md:w-1/2"></div>

          <p className="mt-2 max-sm:text-sm text-foreground/70 max-md:text-center md:w-1/2">
            Experience how Gamblio turns your gambling site data into actionable
            insights. Book a personalized session and see how easy it is to
            integrate, analyze, and optimize your platform.
          </p>
          <Button className="rounded-full mt-3 bg-white hover:bg-white cursor-pointer text-black">
            Book call
          </Button>
        </div>

        <img
          src="/images/logotip-gr.png"
          alt=""
          className="absolute opacity-45  left-1/3  md:scale-75 rotate-12"
        />
      </section>
    </>
  );
}
