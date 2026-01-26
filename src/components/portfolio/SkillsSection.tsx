import { Code } from "lucide-react";

const SkillsSection = () => {
  const expertise = [
    {
      title: "Applied Machine Learning & NLP",
      description:
        "I build and deploy applied machine learning systems with a strong focus on NLP and LLM-powered applications. This includes language translation systems, semantic search, retrieval-augmented generation (RAG), and structured model evaluation to ensure reliable, production-ready models.",
      stack: [
        "Python",
        "PyTorch",
        "TensorFlow / Keras",
        "scikit-learn",
        "Transformers",
        "Hugging Face",
        "LangChain",
        "OpenAI",
        "spaCy",
      ],
    },
    {
      title: "Data Engineering & ML Pipelines",
      description:
        "I design end-to-end ML pipelines that handle data ingestion, preprocessing, feature engineering, and batch training. These pipelines support predictive systems such as flight fare prediction and large-scale analytical workflows.",
      stack: ["SQL", "Pandas", "NumPy", "Apache Spark", "PySpark", "Airflow", "Hadoop", "Hive", "dbt"],
    },
    {
      title: "Production ML, Cloud & MLOps",
      description:
        "I operationalize ML models using cloud platforms, with hands-on experience deploying and running models on AWS and GCP. I have used AWS extensively for language translation and flight fare prediction projects, focusing on scalable inference, reproducible deployments, and CI/CD-driven workflows.",
      stack: [
        "AWS (S3, EC2, Lambda)",
        "GCP (BigQuery, Vertex AI, Cloud Run)",
        "Docker",
        "FastAPI",
        "MLflow",
        "CI/CD (GitHub Actions)",
      ],
    },
    {
      title: "Analytics, Experimentation & Visualization",
      description:
        "I apply statistical analysis, experimentation, and visualization to evaluate models and extract actionable insights. This includes A/B testing, error analysis, and communicating results through clear dashboards and reports.",
      stack: ["Statistics", "A/B Testing", "Model Evaluation", "Tableau", "Power BI", "R"],
    },
  ];

  return (
    <section className="animate-fade-in">
      {/* Section Header */}
      <h2 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
        Expertise
        <span className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent ml-4" />
      </h2>

      {/* Sub Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Code className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">What I Work With</h3>
      </div>

      {/* Expertise Blocks */}
      <div className="space-y-10">
        {expertise.map((item, index) => (
          <div key={index} className="border border-border rounded-2xl p-6 hover:shadow-md transition">
            <h4 className="text-base font-semibold text-foreground">{item.title}</h4>

            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{item.description}</p>

            <div className="mt-4">
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {item.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-xl text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
