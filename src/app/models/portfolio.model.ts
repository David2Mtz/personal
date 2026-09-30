export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  isEmailCopy?: boolean;
}

export interface PersonalInfo {
  name: string;
  titles: string[];
  bio: string;
  thankYouText: string;
  email: string;
  avatarUrl: string;
  cvUrl: string[];
  socials: SocialLink[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  images: string[];
}

export interface EducationItem {
  level: string;
  school: string;
  career: string;
  period: string;
  logoUrl: string;
}

export interface EducationSection {
  title: string;
  description: string;
  items: EducationItem[];
  campusImages: string[];
}

export interface HobbyItem {
  id: string;
  title: string;
  description: string;
  images: string[];
}

export interface NavItem {
  label: string;
  targetId: string;
}

export interface ThesisTech {
  name: string;
  category?: string;
  icon?: string;
}

export interface ThesisStep {
  stepNumber: string | number;
  title: string;
  description: string;
  icon?: string;
}

export interface ThesisVideo {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  src?: string;
  image?: string;
  mediaType?: 'video' | 'image';
  youtubeId?: string;
  poster?: string;
  type?: string;
}

export interface ThesisProject {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  introduction: string[];
  objectives: {
    main: string;
    specifics?: string[];
  };
  cvTechnologies: ThesisTech[];
  technologies?: ThesisTech[];
  process: ThesisStep[];
  videos: ThesisVideo[];
  links?: Array<{
    label: string;
    url: string;
    icon?: string;
    primary?: boolean;
  }>;
}

export interface SkillItem {
  name: string;
  level?: string;
  icon?: string;
  description?: string;
}

export interface SkillCategory {
  category: string;
  icon?: string;
  skills: SkillItem[];
}

export interface TechnologiesSection {
  tag?: string;
  title: string;
  subtitle: string;
  categories: SkillCategory[];
}


