export default function Chat() {
  return (
    <div>
      <div className="relative flex size-full items-center justify-center h-full ">
        <div className="w-full h-full p-4 flex flex-col items-center justify-center gap-5">
          <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full z-20"></div>
          <div
            className="max-w-md mx-auto w-full flex flex-col gap-2"
            // style="transform: translateY(-75px);"
          >
            <div className="flex items-end justify-end gap-3">
              <div
                className="max-w-[280px] bg-primary text-white p-4 rounded-2xl ml-auto shadow-[0_0_10px_rgba(0,0,0,0.05)]"
                // style="opacity: 1; transform: none;"
              >
                <p className="text-sm">
                  Hey, I need help scheduling a team meeting that works well for
                  everyone. Any suggestions for finding an optimal time slot?
                </p>
              </div>
              <div className="flex items-center bg-background rounded-full w-fit border border-border flex-shrink-0">
                <img
                  src="https://randomuser.me/api/portraits/women/79.jpg"
                  alt="User Avatar"
                  className="size-8 rounded-full flex-shrink-0"
                />
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex items-center bg-background rounded-full size-10 flex-shrink-0 justify-center shadow-[0_0_10px_rgba(0,0,0,0.05)] border border-border">
                <img
                  src="/images/logotip-dark.svg"
                  alt="User Avatar"
                  className="size-7 rounded-full flex-shrink-0"
                />
              </div>
              <div className="relative">
                <div
                  className="absolute left-0 top-0 md:min-w-[300px] min-w-[220px] p-4 bg-accent border border-border rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.05)]"
                  //   style="opacity: 1; transform: none;"
                >
                  <div>
                    <div
                      className="overflow-hidden transition-[max-height] duration-300 ease-out"
                      //   style="max-height: 180px;"
                    >
                      <div>
                        <div
                          className="text-muted-foreground prose prose-sm dark:prose-invert text-sm transition-opacity duration-300 ease-out"
                          //   style="opacity: 1;"
                        >
                          <div>
                            <p className="max-md:line-clamp-5">
                              Based on your calendar patterns and preferences, I
                              recommend scheduling the team meeting for Tuesday
                              at 2pm. This time slot has historically had the
                              highest attendance rate, and it avoids conflicts
                              with other recurring meetings.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
