import { Brain, Code2, Database, BarChart } from 'lucide-react';
import type { Skill } from '../types';

export const skillsData: Skill[] = [
  {
    category: "Machine Learning",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
    icon: Brain,
    projects: [
      {
        name: "DTW Clustering in the S&P500",
        description: "Using the S&P 500 dataset, guided development of paper that applies dynamic time warping (DTW) to analyze shifting lead-lag relationships in economic time series.",
        technologies: ["Keras", "Python", "Pandas, numpy"],
        github: "https://github.com/quantfin-sfpolimi/dtwclustering_sp500",
        demo: "https://"
      },
      {
        name: "Correlation-Aware LSTM Forecasting with Granger Causality for Stock Dynamics",
        description: "This project combines Granger causality analysis and moving correlations to identify directional relationships between two stock time series. By determining which stock influences the other, an LSTM (Long Short-Term Memory) model predicts the target stock's dynamics, leveraging its moving correlation with the influencing stock. This approach enhances accuracy in forecasting and uncovers interdependencies in stock trends.",
        technologies: ["Keras", "Pandas, numpy", "Python"],
        github: "https://github.com/quantfin-sfpolimi/nasdaq_causal-analysis_lstm",
        demo: "https://"
      },
      {
        name: " NLP Analysis of Central Bank Communications and Economic Impact",
        description: "This analysis uses natural language processing (NLP) to assess the impact of central bank communications on the economy, capturing insights into policy effects and market responses.",
        technologies: ["BERT", "Pandas, numpy", "Python"],
        github: "https://github.com/quantfin-sfpolimi/cb-impact-nlps",
        demo: "https://"
      }
    ]
  },
  {
    category: "Programming",
    items: ["Python", "R", "SQL", "Matlab", "Latex"],
    icon: Code2,
    projects: [
      {
        name: "Calibre bionic converter",
        description: "This script scans your Calibre library to locate all ebooks and applies Bionic Reading typography to them. It modifies the text of the ebooks to emphasize key parts of words, creating a more focused reading experience. The script processes supported ebook formats and preserves the original files alongside the modified versions.",
        technologies: ["Python"],
        github: "https://github.com/giutala/calibre_bionic_converter"
      }
    ]
  },
  {
    category: "Data Science",
    items: ["Numpy, pandas", "Seaborn, Matplotlib, plotly", "sklearn"],
    icon: Database,
    projects: [
      {
        name: "Data Strategy Hackaton",
        description: "The challenge was to conduct thorough data analysis, and then develop a comprehensive business strategy based on our findings.",
        technologies: ["Pandas, numpy", "Plotly, seaborn", "sklearn"],
        github: "https://github.com/giutala/datastrategy_-hackaton"
      },
      {
        name: "2024 US Elections report",
        description: "Co-authored a report on the recent US elections, focusing on the study of financial markets.",
        technologies: ["Latex"],
        demo: "https://www.linkedin.com/feed/update/urn:li:activity:7271902052442607616/"
      }
    ]
  },
  {
    category: "Frontend",
    items: ["JS, CSS, HTML", "Wordpress", "React", "FastAPI"],
    icon: BarChart,
    projects: [
      {
        name: "Commodities Seasonality Webapp",
        description: "Interactive app for visualizing commodity seasonality using React, FastAPI, and Highcharts.",
        technologies: ["Python", "React", "FastAPI", "HTML, JS, CSS"],
        github: "https://github.com/quantfin-sfpolimi/commodities_seasonality_webapp",
        demo: "https://"
      },
      {
        name: "Personal photography portfolio",
        description: "My personal photography portfolio.",
        technologies: ["React", "HTML, CSS, JS", "Vite"],
        github: "https://github.com/giutala/photo.gtala.it",
        demo: "https://photo.gtala.it/"
      }
    ]
  }
];