export default function Page() {
  return (
    <>
      <div className="absolute flex flex-col gap-2 items-center justify-center inset-0 -z-10  h-screen md:h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--primary)_100%)] ">
        <img src="/images/logotip-dark.svg" className="w-20 h-20" alt="" />
        <h1 className="uppercase text-4xl font-medium">under construction</h1>
        <p className="text-white/60">
          Please come back later or contact us on the email below
        </p>

        <a
          href="mailto:office@gamblio.ai"
          className="text-white hover:underline"
        >
          <div className="bg-primary p-3">office@gamblio.ai</div>
        </a>
      </div>
    </>
  );
}
