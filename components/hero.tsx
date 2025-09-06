export default function Hero() {
  return (
    <section className="border-x md:mx-7 mx-3">
      <div className="absolute inset-0 -z-10 h-[600px] md:h-[800px] w-full [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--primary)_100%)] "></div>
      <div className="flex flex-col h-[600px] max-md:h-[500px] pt-20 justify-center items-center gap-3 ">
        <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tighter text-balance text-center ">
          AI to amplify
          <br /> <span className="text-primary ">GAMBLIO</span> to simplify
        </h1>
        <p className="md:w-1/2 text-center max-md:text-sm text-muted-foreground">
          Tools that do more than automate — they understand, connect, and drive
          real results.
        </p>
      </div>
    </section>
  );
}
