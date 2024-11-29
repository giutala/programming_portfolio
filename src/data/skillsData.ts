import { Brain, Code2, Database, BarChart } from 'lucide-react';
import type { Skill } from '../types';

export const skillsData: Skill[] = [
  {
    category: "Machine Learning",
    items: ["TensorFlow", "PyTorch", "Scikit-learn"],
    icon: Brain,
    projects: [
      {
        name: "Image Classification System",
        description: "Developed a deep learning model for classifying medical images with 95% accuracy.",
        technologies: ["PyTorch", "Python", "OpenCV"],
        github: "https://github.com/username/image-classification",
        demo: "https://demo.example.com/image-classifier"
      },
      {
        name: "Natural Language Processing Pipeline",
        description: "Built an NLP pipeline for sentiment analysis on social media data.",
        technologies: ["TensorFlow", "BERT", "Python"],
        github: "https://github.com/username/nlp-pipeline"
      }
    ]
  },
  {
    category: "Programming",
    items: ["Python", "R", "SQL", "Julia"],
    icon: Code2,
    projects: [
      {
        name: "Data Processing Framework",
        description: "Created a high-performance data processing framework for large-scale datasets.",
        technologies: ["Python", "Pandas", "Dask"],
        github: "https://github.com/username/data-framework"
      },
      {
        name: "Statistical Analysis Tool",
        description: "Developed a tool for automated statistical analysis and reporting.",
        technologies: ["R", "Shiny", "ggplot2"],
        demo: "https://demo.example.com/stats-tool"
      }
    ]
  },
  {
    category: "Data Engineering",
    items: ["Spark", "Hadoop", "AWS", "Docker"],
    icon: Database,
    projects: [
      {
        name: "Data Pipeline Architecture",
        description: "Designed and implemented a scalable data pipeline processing 1TB+ daily.",
        technologies: ["Apache Spark", "AWS", "Airflow"],
        github: "https://github.com/username/data-pipeline"
      },
      {
        name: "Real-time Analytics Platform",
        description: "Built a real-time analytics platform for streaming data.",
        technologies: ["Kafka", "Spark Streaming", "ElasticSearch"],
        demo: "https://demo.example.com/analytics"
      }
    ]
  },
  {
    category: "Data Visualization",
    items: ["Matplotlib", "Plotly", "D3.js", "Tableau"],
    icon: BarChart,
    projects: [
      {
        name: "Interactive Dashboard",
        description: "Created an interactive dashboard for business metrics visualization.",
        technologies: ["D3.js", "React", "TypeScript"],
        github: "https://github.com/username/dashboard",
        demo: "https://demo.example.com/dashboard"
      },
      {
        name: "Scientific Visualization Tool",
        description: "Developed a tool for visualizing complex scientific data.",
        technologies: ["Plotly", "Python", "WebGL"],
        github: "https://github.com/username/sci-viz"
      }
    ]
  }
];