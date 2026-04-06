export interface GitHubProfile {
  name: string;
  login: string;
  avatar: string;
  bio: string | null;
  location: string | null;
  company: string | null;
  blog: string | null;
  followers: number;
  following: number;
  publicRepos: number;
  createdAt: string;
}

export interface GitHubStats {
  totalRepos: number;
  originalRepos: number;
  forkedRepos: number;
  totalStars: number;
  totalForks: number;
  topLanguages: [string, number][];
}

export interface RepoInfo {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  fork: boolean;
  url: string;
  updated: string;
  topics: string[];
}

export interface ProjectIdea {
  title: string;
  description: string;
  technologies: string[];
}

export interface RepoImprovement {
  repo: string;
  suggestion: string;
}

export interface AIAnalysis {
  portfolioScore: number;
  skillSummary: string;
  strengths: string[];
  weaknesses: string[];
  missingSkills: string[];
  projectIdeas: ProjectIdea[];
  repoImprovements: RepoImprovement[];
  resumeBullets: string[];
  recruiterInsights: string;
  overallAdvice: string;
}

export interface AnalysisResult {
  githubData: {
    profile: GitHubProfile;
    stats: GitHubStats;
    recentRepos: RepoInfo[];
  };
  analysis: AIAnalysis;
}
