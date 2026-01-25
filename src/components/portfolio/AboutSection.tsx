import { Database, Brain, Cloud, BarChart3 } from "lucide-react";

const AboutSection = () => {
  const services = [
    {
      icon: Brain,
      title: "LLM & NLP Systems",
      description:
        "Designing and deploying LLM-powered applications such as retrieval-augmented generation (RAG), semantic search, and question answering with a strong focus on evaluation, robustness, and real-world reliability.",
    },
    {
      icon: Database,
      title: "End-to-End ML Pipelines",
      description:
        "Building production-grade ML pipelines from data ingestion and preprocessing to model training, deployment, and monitoring using scalable cloud and distributed systems.",
    },
    {
      icon: BarChart3,
      title: "Model Evaluation & Experimentation",
      description:
        "Developing rigorous evaluation frameworks, error analysis workflows, and experimentation pipelines to ensure models are measurable, interpretable, and aligned with business objectives.",
    },
    {
      icon: Cloud,
      title: "Cloud & MLOps",
      description:
        "Operationalizing ML systems with CI/CD, containerization, cloud deployment, and monitoring to move models from experimentation into reliable production environments.",
    },
  ];

  return (
    <section className="animate-fade-in">
      <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
        About Me
        <span className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent ml-4" />
      </h2>

      <div className="space-y-4 text-muted-foreground mb-8">
        <p>
          I’m an <strong>Applied Machine Learning and NLP Engineer</strong> with experience building and deploying
          production-ready ML systems across NLP, computer vision, and large-scale data pipelines.
        </p>

        <p className="mt-4">
          I’m a <strong>graduate of The University of Texas at Dallas</strong>, where I also served as a{" "}
          <strong>Graduate Teaching Assistant for Applied Natural Language Processing</strong>, working extensively with
          Transformer-based models, LLM workflows, and rigorous model evaluation practices.
        </p>

        <p className="mt-4">
          My work focuses on <strong>LLM-powered applications</strong> such as retrieval-augmented generation (RAG),
          semantic search, and question answering, with a strong emphasis on scalability, reliability, and real-world
          impact.
        </p>
      </div>

      {/* What I'm Doing Section */}
      <h3 className="text-xl font-semibold text-foreground mb-6">What I Build</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-secondary/50 rounded-2xl p-5 gold-border hover:bg-secondary/80 transition-all duration-300 group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-foreground font-medium mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
