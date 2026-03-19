export const projects = [
  {
    title: "Sentiment Analysis System",
    description:
      "Built a sentiment analysis pipeline that classifies reviews into positive/neutral/negative with clean evaluation and deployment-ready structure.",
    techStack: ["Python", "Machine Learning", "NLP", "Data Analysis"],
    githubUrl: "https://github.com/your-github-handle/sentiment-analysis-system",
    liveDemoUrl: "https://example.com/sentiment-analysis"
  },
  {
    title: "Blockchain + AI Security Auditing",
    description:
      "Developed an auditing workflow that combines anomaly detection with blockchain-based logging to improve traceability and security monitoring.",
    techStack: ["Blockchain", "AI/ML", "Anomaly Detection", "Security"],
    githubUrl: "https://github.com/your-github-handle/blockchain-ai-security-auditing",
    liveDemoUrl: "https://example.com/blockchain-ai-security"
  },
  {
    title: "Price Comparison Website",
    description:
      "Created a responsive price comparison interface with efficient data processing and a focus on fast browsing and clear product insights.",
    techStack: ["React", "JavaScript", "Web Scraping", "Responsive UI"],
    githubUrl: "https://github.com/your-github-handle/price-comparison-website",
    liveDemoUrl: "https://example.com/price-comparison"
  }
] as const;

export type Project = (typeof projects)[number];

