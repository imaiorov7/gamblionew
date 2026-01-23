import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const page = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent className="!w-[90vw] !max-w-7xl h-[90vh] p-0 border-none !bg-transparent">
          <DialogTitle className="sr-only">Gamification Demo</DialogTitle>
          <iframe
            src="https://gamification.gamblio.ai/"
            title="Gamification Demo"
            className="w-full h-full"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default page;
