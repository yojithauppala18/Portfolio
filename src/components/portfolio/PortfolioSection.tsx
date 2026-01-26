import { ExternalLink, Github } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "LLM Financial Document Intelligence",
      category: "AI/ML • NLP",
      description: "Built a RAG-based NLP system using LangChain and OpenAI GPT models for extracting insights from investment documents. Implemented semantic search with FAISS vector store, achieving 40% faster research time for analysts.",
      techStack: ["Python", "LangChain", "OpenAI", "FAISS", "Streamlit"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
      github: "https://github.com/yojitha",
    },
    {
      title: "Customer Churn Prediction",
      category: "Machine Learning",
      description: "Developed an end-to-end ML pipeline for predicting customer churn using XGBoost, achieving 88% AUC-ROC. Implemented feature engineering, SMOTE for class imbalance, and deployed with FastAPI.",
      techStack: ["Python", "XGBoost", "scikit-learn", "FastAPI", "Docker"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      github: "https://github.com/yojitha",
    },
    {
      title: "HDFS ETL & NYC Taxi Analysis",
      category: "Data Engineering",
      description: "Designed and implemented a distributed ETL pipeline processing 6.4M+ NYC taxi records using Hadoop ecosystem. Built data warehouse with Hive and created analytical dashboards for trip pattern insights.",
      techStack: ["Hadoop", "Hive", "Spark", "Python", "SQL"],
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
      github: "https://github.com/yojitha",
    },
  ];

  return (
    <section className="animate-fade-in">
      <h2 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
        Projects
        <span className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent ml-4" />
      </h2>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-secondary/50 rounded-2xl overflow-hidden gold-border hover:bg-secondary/80 transition-all duration-300 group"
          >
            <div className="flex flex-col md:flex-row">
              {/* Project Image */}
              <div className="md:w-72 h-48 md:h-auto overflow-hidden flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs text-primary font-medium uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 bg-primary/10 rounded-md text-xs text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
