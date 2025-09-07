import { Button } from "./ui/button";

export default function CTASection() {
  return (
    <>
      <section className="bg-primary overflow-hidden relative p-5 md:p-20 grid md:grid-cols-2  gap-12 items-center">
        <div className="space-y-1">
          <h1 className="md:text-4xl text-2xl max-md:text-center font-medium">See Gamblio in Action</h1>
          <div className="border-b-2 border-white/50 border-dashed "></div>
          <h1 className="md:text-4xl text-2xl max-md:text-center font-medium">Schedule Your Integration</h1>
          <p className="mt-2 max-sm:text-sm text-foreground/70 max-md:text-center">Experience how Gamblio turns your gambling site data into actionable insights. Book a personalized session and see how easy it is to integrate, analyze, and optimize your platform.</p>
        </div>
        <div>
          <Button  className="rounded-full bg-white hover:bg-white cursor-pointer text-black">Contact</Button>
        </div>

        <img src="/images/logotip-gr.png" alt="" className="absolute opacity-45  left-1/3  md:scale-75 rotate-12" />
      </section>
    </>
  );
}
