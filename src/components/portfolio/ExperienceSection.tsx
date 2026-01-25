import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const experience = [
    {
      period: "Aug 2025 — Dec 2025",
      title: "Graduate Teaching Assistant",
      company: "The University of Texas at Dallas",
      details:
        "Teaching Data Visualization & Business Intelligence to 200+ students. Mentoring on Tableau, Power BI, and Python analytics.",
    },
    {
      period: "Jan 2025 — Jul 2025",
      title: "Data Engineering/ Machine Learning Intern",
      company: "InnovatEV Global",
      details:
        "Built ETL pipelines processing 6M+ EV charging records. Reduced data latency by 40% using GCP BigQuery and Airflow.",
    },
    {
      period: "Jun 2023 — Jan 2024",
      title: "Systems Engineer",
      company: "Tata Consultancy Services (TCS)",
      details:
        "Automated ETL workflows, reduced processing time by 98% (24hrs → 25min). Developed Power BI dashboards and ML models.",
    },
  ];

  return (
    <section className="animate-fade-in">
      <h2 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
        Experience
        <span className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent ml-4" />
      </h2>

      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Briefcase className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">Work History</h3>
      </div>

      <div className="space-y-6 ml-5 border-l-2 border-border pl-6">
        {experience.map((item, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-primary" />
            <span className="text-sm text-primary font-medium">{item.period}</span>
            <h4 className="text-foreground font-medium mt-1">{item.title}</h4>
            <p className="text-muted-foreground text-sm">{item.company}</p>
            <p className="text-muted-foreground text-xs mt-2 leading-relaxed">{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
