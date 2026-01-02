import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building2, Briefcase } from "lucide-react";

const projects = [
  {
    id: "data-enrichment",
    title: "Data Enrichment and Validation",
    client: "Thomson Reuters",
    location: "Offsite",
    duration: "Oct 2025 to Present",
    type: "Full Time",
    description: "Designed and implemented multiple data enrichment and validation use cases based on dynamic client requirements, managing full end-to-end interaction and iterative delivery cycles. Built robust, production-grade pipelines leveraging Thomson Reuters platform LLMs, advanced web-scraping techniques, and data validation frameworks.",
    technologies: ["LLMs", "Web Scraping", "Data Pipelines", "Validation Frameworks"]
  },
  {
    id: "hierarchy-mapping-2",
    title: "Company Hierarchy Mapping 2.0",
    client: "Cisco",
    location: "Offsite",
    duration: "Aug 2025 to Sep 2025",
    type: "Full Time",
    description: "Lead and developed the end-to-end development and orchestration of multi-agent AI solutions for Cisco, converting traditional AI agent-based models into Agentic AI systems using LangGraph. The project automated corporate hierarchy mapping through LangChain, Serper.dev, Google Search, Crawl4AI, and pgvector-based RAG pipelines. Designed intelligent agent workflows for complex decision-making, dynamic task coordination, and context-aware data reasoning — improving data accuracy by 90%, reducing processing time by 80%, and cutting manual effort by 75%.",
    technologies: ["LangGraph", "LangChain", "Serper.dev", "Crawl4AI", "pgvector", "RAG"]
  },
  {
    id: "synthetic-data",
    title: "Synthetic Data Generation",
    client: "Google",
    location: "Offsite",
    duration: "Feb 2025 to Jul 2025",
    type: "Full Time",
    description: "Developed a system to generate large volumes of synthetic data and iteratively refine it to ensure diversity, cleanliness, and alignment with client requirements. The project utilized Azure OpenAI and LangChain agents with memory components for improved reasoning and knowledge diversity. Implemented output parsers to structure results in predefined formats and generated final datasets in Excel and JSON formats.",
    technologies: ["Azure OpenAI", "LangChain", "Memory Components", "Output Parsers"]
  },
  {
    id: "hierarchy-mapping-1",
    title: "Companies Hierarchy Mapping",
    client: "Cisco",
    location: "Offsite",
    duration: "Sep 2024 to Jan 2025",
    type: "Full Time",
    description: "Leveraged agentic AI (using Langchain) for automation to scrape and map complex company hierarchies. Custom operations and targeted modifications improved functionality, increased data accuracy by 20%, reduced processing time by 40%, and cut manual work by 45% — delivering a highly efficient, scalable solution tailored to client.",
    technologies: ["LangChain", "Agentic AI", "Web Scraping", "Automation"]
  },
  {
    id: "breast-cancer",
    title: "Breast Cancer Classification",
    client: "IIT Roorkee",
    location: "Offsite",
    duration: "Mar 2022 to Apr 2022",
    type: "Academic",
    description: "Worked on Breast cancer data. Analyzed different parameters and applied Logistic regression, K-Nearest neighbor, SVM, Kernel SVM, Naive Bayes, Random Forest classification methods.",
    technologies: ["Logistic Regression", "KNN", "SVM", "Naive Bayes", "Random Forest"]
  },
  {
    id: "inventory-forecasting",
    title: "Inventory Forecasting",
    client: "IIT Roorkee",
    location: "Offsite",
    duration: "Jan 2022 to May 2023",
    type: "Dissertation",
    description: "Researched and implemented forecasting models (SARIMAX, LSTM, and other ML/DL approaches) for inventory management optimization. Collected and analyzed real-world inventory datasets from Thoucentric Consulting. Designed and executed data preprocessing pipelines using Pandas and NumPy. Performed exploratory data analysis (EDA) with Seaborn and Matplotlib to extract actionable insights. Evaluated and fine-tuned time-series models to improve demand prediction accuracy and model robustness.",
    technologies: ["SARIMAX", "LSTM", "Pandas", "NumPy", "Seaborn", "Matplotlib"]
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState(projects[0].id);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my professional projects spanning AI/ML, data engineering, and enterprise solutions
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-transparent mb-8">
            {projects.map((project) => (
              <TabsTrigger
                key={project.id}
                value={project.id}
                className="px-4 py-2 text-sm rounded-full border border-border data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary transition-all duration-300 hover:border-primary/50"
              >
                {project.title.length > 20 ? project.title.substring(0, 20) + "..." : project.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {projects.map((project) => (
            <TabsContent key={project.id} value={project.id} className="mt-0">
              <Card className="border-none shadow-xl bg-card/80 backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        {project.title}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">{project.client}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-sm">{project.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-primary" />
                          <Badge variant="secondary" className="text-xs">
                            {project.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="px-3 py-1 text-xs bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
