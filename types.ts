
export interface Project {
    title: string;
    description: string;
    longDescription: string[];
    techStack: string[];
    role: string;
    image: string;
    url?: string;
  }
  
  export interface Education {
    degree: string;
    institution: string;
    duration: string;
    coursework?: string[];
  }
  
  export interface SkillCategory {
    category: string;
    skills: string[];
  }
  
  export interface Message {
    role: 'user' | 'assistant';
    content: string;
  }
  