const page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-4 pt-40">
      <iframe
        src="https://gamification.gamblio.ai/"
        title="Gamification Demo"
        className="w-full h-full"
      />
      <div className="w-full">
        <iframe
          id="recommendationWidget"
          title="Gamblio Recommendations"
          src="https://widget-refactor.vercel.app/embed/recommendation"
          className="w-full"
        />
      </div>
      <div className="w-full">
        <iframe
          id="hotColdWidget"
          title="Gamblio Hot/Cold"
          src="https://widget-refactor.vercel.app/embed/hot-cold"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default page;
