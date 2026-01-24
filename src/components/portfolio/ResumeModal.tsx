import { FileText, Download, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ResumeModal = () => {
  const resumeUrl = "/Yojitha_Uppala_AIML.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Yojitha_Uppala_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center gold-border hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          aria-label="View Resume"
        >
          <FileText className="w-4 h-4" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[85vh] bg-card border-border p-0 overflow-hidden">
        <DialogHeader className="px-4 py-3 flex flex-row items-center justify-between border-b border-border">
          <DialogTitle className="text-foreground flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Yojitha Uppala Resume
          </DialogTitle>
          <Button
            onClick={handleDownload}
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
          >
            <Download className="w-4 h-4" />
            Download
          </Button>
        </DialogHeader>
        <div className="flex-1 px-4 pb-4 pt-2 h-full">
          <iframe
            src={resumeUrl}
            className="w-full h-full rounded-lg border border-border bg-secondary"
            title="Resume Preview"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;
