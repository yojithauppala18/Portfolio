import { Play, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DemoModalProps {
  title: string;
  demoUrl: string;
  children: React.ReactNode;
}

const DemoModal = ({ title, demoUrl, children }: DemoModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-5xl h-[90vh] bg-card border-border p-0 overflow-hidden flex flex-col">
        <DialogHeader className="px-4 py-3 flex flex-row items-center justify-between border-b border-border">
          <DialogTitle className="text-foreground flex items-center gap-2">
            <Play className="w-5 h-5 text-primary" />
            {title}
          </DialogTitle>
          <Button
            onClick={() => window.open(demoUrl, "_blank")}
            size="sm"
            variant="outline"
            className="gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            Open in New Tab
          </Button>
        </DialogHeader>
        <div className="flex-1 p-3">
          <iframe
            src={demoUrl}
            className="w-full h-full rounded-md border border-border bg-white"
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
