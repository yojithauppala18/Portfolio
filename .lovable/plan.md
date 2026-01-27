

## Use Custom Image for Flight Fare Prediction Project

### Summary
Replace the generic Unsplash image for the Flight Fare Prediction project with the uploaded screenshot of the actual application UI.

---

### Implementation Steps

#### 1. Copy Image to Project Assets

Copy the uploaded image to the `src/assets` folder:
- **Source**: `user-uploads://image-3.png`
- **Destination**: `src/assets/flight-fare-preview.png`

---

#### 2. Update PortfolioSection Component

**File: `src/components/portfolio/PortfolioSection.tsx`**

Add an import for the new image at the top of the file:

```tsx
import { Github, Play } from "lucide-react";
import DemoModal from "./DemoModal";
import flightFarePreview from "@/assets/flight-fare-preview.png";
```

Update the Flight Fare Prediction project's image property:

```tsx
{
  title: "Flight Fare Prediction System",
  category: "Applied Machine Learning • AWS",
  description:
    "Developed a flight fare prediction system using large-scale U.S. airline data (1993–2024). Trained and evaluated LightGBM and XGBoost models to predict ticket prices, deploying the pipeline on AWS for scalable data processing and experimentation.",
  techStack: ["Python", "LightGBM", "XGBoost", "AWS", "Pandas"],
  image: flightFarePreview,  // Changed from Unsplash URL
  github: "https://github.com/yojithauppala18/flight-fare-prediction",
  demoUrl: "https://yojithauppala18.github.io/flight-fare-ui/",
},
```

---

### Files to Modify

| File | Action |
|------|--------|
| `src/assets/flight-fare-preview.png` | Copy uploaded image here |
| `src/components/portfolio/PortfolioSection.tsx` | Import and use the new image |

---

### Result

The Flight Fare Prediction project card will display your actual application's UI screenshot instead of a generic stock photo, making your portfolio more authentic and giving visitors a real preview of what the project looks like.

