import { Database, Brain, Cloud, BarChart3 } from "lucide-react";

const AboutSection = () => {
  const services = [
    {
      icon: Database,
      title: "Data Engineering",
      description:
        "Building scalable ETL pipelines, cloud infrastructure (GCP/AWS), and big data processing with Spark, Airflow, and Kafka.",
    },
    {
      icon: BarChart3,
      title: "Data Science",
      description:
        "Predictive modeling, statistical analysis, A/B testing, and extracting actionable insights from complex datasets.",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "LLMs, RAG systems, Transformers, NLP, deep learning architectures, and production ML model deployment.",
    },
    {
      icon: Cloud,
      title: "Cloud & MLOps",
      description:
        "CI/CD pipelines, Docker containerization, Kubernetes, model monitoring, and end-to-end ML lifecycle management.",
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
          I’m currently pursuing my graduate studies at <strong>The University of Texas at Dallas</strong>, where I also
          serve as a <strong>Graduate Teaching Assistant for Applied Natural Language Processing</strong>, working
          closely with Transformer-based models, LLM workflows, and rigorous model evaluation practices.
        </p>

        <p className="mt-4">
          My work focuses on <strong>LLM-powered applications</strong> such as retrieval-augmented generation (RAG),
          semantic search, and question answering, with a strong emphasis on scalability, reliability, and real-world
          impact.
        </p>
      </div>

      {/* What I'm Doing Section */}
      <h3 className="text-xl font-semibold text-foreground mb-6">What I'm Doing</h3>

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
