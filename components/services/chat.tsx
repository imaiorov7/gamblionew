export default function Chat() {
  return (
    <div className="flex flex-col  items-center  h-fit p-4 gap-5">
      {/* Korisnikova poruka */}
      <div className="flex items-end justify-end gap-3 w-full max-w-md">
        <div className="bg-primary text-white p-4 rounded-2xl shadow">
          <p className="text-sm">
            Hey, I need help scheduling a team meeting that works well for
            everyone. Any suggestions for finding an optimal time slot?
          </p>
        </div>
        <img
          src="https://randomuser.me/api/portraits/women/79.jpg"
          alt="User Avatar"
          className="size-8 rounded-full"
        />
      </div>

      {/* Odgovor bota */}
      <div className="flex items-start gap-2 w-full max-w-md">
        <img
          src="/images/logotip-dark.svg"
          alt="Bot Avatar"
          className="size-10 rounded-full border p-1"
        />
        <div className="bg-accent border p-4 rounded-xl shadow">
          <p className="text-sm text-muted-foreground">
            Based on your calendar patterns and preferences, I recommend
            scheduling the team meeting for Tuesday at 2pm. This time slot has
            historically had the highest attendance rate, and it avoids
            conflicts with other recurring meetings.
          </p>
        </div>
      </div>
    </div>
  );
}
