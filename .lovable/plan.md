
## Add "Try Me" Demo Modal for Flight Fare Prediction

### Summary
Add a "Try Me" button to the Flight Fare Prediction project that opens an interactive demo in a modal dialog using an iframe, allowing users to try the app without leaving your portfolio.

---

### Implementation Approach

#### 1. Create a New DemoModal Component

**File: `src/components/portfolio/DemoModal.tsx`** (New file)

Create a reusable modal component following the existing `CertificateModal` pattern:

```tsx
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
```

---

#### 2. Update Project Data Structure

**File: `src/components/portfolio/PortfolioSection.tsx`**

Add an optional `demoUrl` field to the Flight Fare Prediction project:

```tsx
{
  title: "Flight Fare Prediction System",
  category: "Applied Machine Learning • AWS",
  description: "...",
  techStack: ["Python", "LightGBM", "XGBoost", "AWS", "Pandas"],
  image: "...",
  github: "https://github.com/yojithauppala18/flight-fare-prediction",
  demoUrl: "https://yojithauppala18.github.io/flight-fare-ui/",  // NEW
},
```

---

#### 3. Add "Try Me" Button with Modal

**File: `src/components/portfolio/PortfolioSection.tsx`**

Update the button section to conditionally render "Try Me" when `demoUrl` exists:

```tsx
<div className="flex gap-3">
  {project.demoUrl && (
    <DemoModal title={`${project.title} - Live Demo`} demoUrl={project.demoUrl}>
      <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary rounded-xl text-sm text-primary-foreground hover:bg-primary/90 transition-all">
        <Play className="w-4 h-4" />
        Try Me
      </button>
    </DemoModal>
  )}
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-all gold-border"
  >
    <Github className="w-4 h-4" />
    View Code
  </a>
</div>
```

---

### Files to Modify

| File | Action |
|------|--------|
| `src/components/portfolio/DemoModal.tsx` | Create new modal component |
| `src/components/portfolio/PortfolioSection.tsx` | Add demoUrl to project data and render Try Me button |

---

### Technical Notes

**Regarding iframe embedding:**
- GitHub Pages sites (like `yojithauppala18.github.io`) generally allow iframe embedding
- The modal will be larger (max-w-5xl, 90vh) to give users a good experience with the demo
- Added an "Open in New Tab" button as a fallback in case users want full-screen access
- Set `bg-white` on the iframe container since most web apps have white backgrounds

---

### Result

The Flight Fare Prediction project card will display:
1. **"Try Me"** button (gold/primary color) - Opens the live demo in a modal
2. **"View Code"** button (existing) - Links to GitHub

Users can interact with the Flight Fare UI directly within your portfolio without navigating away.
