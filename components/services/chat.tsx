export default function Chat() {
  return (
    <div className="flex flex-col items-center gap-5 p-4 h-fit">
      <div className="flex items-end justify-end w-full max-w-md gap-3">
        <div className="p-4 text-white shadow bg-primary rounded-2xl">
          <p className="text-sm">Hello how do I register on your platform?</p>
        </div>
        <div className="flex items-center justify-center rounded-full size-10 bg-primary aspect-square">
          <p>U</p>
        </div>
      </div>

      {/* Odgovor bota */}
      <div className="flex items-start w-full max-w-md gap-2">
        <img
          src="/images/logotip-dark.svg"
          alt="Bot Avatar"
          className="p-1 border rounded-full size-10"
        />
        <div className="p-4 border shadow bg-accent rounded-xl">
          <p className="text-sm text-muted-foreground max-md:line-clamp-5">
            Hello! Thank you for contacting our customer support. To register,
            click on REGISTRATION in the upper right corner of the home page,
            enter the requested information, and accept the Terms of Use. Then
            activate your account by clicking on the link you will receive in
            your email. If you need further assistance, please let me know!
          </p>
        </div>
      </div>
    </div>
  );
}
