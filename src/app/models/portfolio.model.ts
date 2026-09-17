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
  cvUrl: string;
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
