import { useEffect } from "react";
import { GraduationCap, Award } from "lucide-react";
import salesforceBadge from "@/assets/salesforce-badge.png";

const EducationSection = () => {
  const education = [
    {
      period: "Jan 2024 - Dec 2025",
      title: "Master of Science in Business Analytics & Artificial Intelligence",
      institution: "The University of Texas at Dallas",
      details: "GPA: 3.77/4.00",
    },
    {
      period: "Aug 2019 - May 2023",
      title: "Bachelor of Engineering in Electronics and Instrumentation",
      institution: "National Institute of Technology Agartala",
      details: "GPA: 8.44/10.00",
    },
    {
      period: "Jan 2022 - May 2023",
      title: "Diploma in Programming & Data Science",
      institution: "Indian Institute of Technology Madras",
      details: "GPA: 6.24/10.00",
    },
  ];


  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      const existingScript = document.querySelector('script[src="//cdn.credly.com/assets/utilities/embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section className="animate-fade-in">
      <h2 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
        Education
        <span className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent ml-4" />
      </h2>

      <div className="space-y-10">
        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Academic Background</h3>
          </div>
          <div className="space-y-6 ml-5 border-l-2 border-border pl-6">
            {education.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-primary" />
                <span className="text-sm text-primary font-medium">{item.period}</span>
                <h4 className="text-foreground font-medium mt-1">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.institution}</p>
                <p className="text-muted-foreground text-xs mt-1">{item.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Google Cloud - Credly Badge */}
            <div className="bg-secondary rounded-xl p-4 gold-border flex flex-col items-center justify-center min-h-[200px]">
              <div 
                data-iframe-width="150" 
                data-iframe-height="170" 
                data-share-badge-id="6c6b3e36-5bca-437a-82a2-e1940e63134f" 
                data-share-badge-host="https://www.credly.com"
              />
            </div>
            
            {/* Salesforce - Image Badge */}
            <div className="bg-secondary rounded-xl p-4 gold-border flex flex-col items-center justify-center min-h-[200px]">
              <img 
                src={salesforceBadge} 
                alt="Salesforce Certified Associate" 
                className="w-24 h-24 object-contain mb-2"
              />
              <span className="text-sm text-muted-foreground text-center">
                Salesforce Certified Associate
              </span>
            </div>
            
            {/* HackerRank SQL */}
            <div className="bg-secondary rounded-xl p-4 gold-border flex items-center justify-center min-h-[100px]">
              <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                HackerRank SQL (Advanced)
              </span>
            </div>
            
            {/* HackerRank Python */}
            <div className="bg-secondary rounded-xl p-4 gold-border flex items-center justify-center min-h-[100px]">
              <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                HackerRank Python (Basic)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
