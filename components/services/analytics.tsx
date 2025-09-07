export default  function Analytics() {
  return (
    <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden">
      {/* background gradient */}
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 h-32 w-full bg-gradient-to-b from-[var(--color)] to-[var(--color-transparent)]"></div>

      {/* SVG */}
      <svg
        width="600"
        height="200"
        viewBox="0 0 600 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(3,146,160,0.3)" />
            <stop offset="100%" stopColor="rgba(3,146,160,0)" />
          </linearGradient>
        </defs>

        <path
          d="M 0 150 
             C 50,140 100,120 150,130 
             C 200,140 250,100 300,110 
             C 350,120 400,90 450,100 
             C 500,110 550,80 600,70 
             L 600,200 L 0,200 Z"
          fill="url(#lineGradient)"
          opacity="1"
        />

        <path
          d="M 0 150 
             C 50,140 100,120 150,130 
             C 200,140 250,100 300,110 
             C 350,120 400,90 450,100 
             C 500,110 550,80 600,70"
          stroke="var(--primary)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        <circle cx="300" cy="110" r="4" fill="var(--primary)" />
        <circle
          cx="300"
          cy="110"
          r="10"
          stroke="var(--primary)"
          strokeWidth="2"
          fill="none"
          opacity="0.66"
        />
        <circle
          cx="300"
          cy="110"
          r="14"
          stroke="var(--primary)"
          strokeWidth="2"
          fill="none"
          opacity="0.25"
        />
        <circle
          cx="300"
          cy="110"
          r="20"
          stroke="var(--primary)"
          strokeWidth="2"
          fill="none"
          opacity="0.1"
        />
      </svg>
    </div>
  );
};

