export interface StudentProfile {
  fullName: string;
  studentId: string;
  department: string;
  university: string;
  academicYear: string;
  email: string;
  phone?: string;
  location: string;
  linkedin: string;
  github: string;
  profilePhoto: string;
  aboutMe: string;
}

export interface ReferenceItem {
  name: string;
  designation: string;
  department: string;
  institution: string;
  email: string;
}

export interface VolunteeringItem {
  organization: string;
  role: string;
}

export interface CareerObjectiveData {
  summary: string;
  focusAreas: string[];
  aspirations: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  departmentOrGroup: string;
  faculty?: string;
  group?: string;
  board?: string;
  period: string;
  gpa: string;
  gpaScale: string;
  passingYear: string;
  status: 'Completed' | 'Enrolled' | 'Graduating';
  highlights: string[];
}

export interface AcademicDocument {
  id: string;
  serialNumber: string; // e.g. "01", "02"
  title: string;
  folderId: string;
  issueDate?: string;
  issuingAuthority: string;
  fileUrl?: string; // Direct uploaded file URL or image
  fileType?: 'image' | 'pdf';
  isAvailable: boolean;
  notes?: string;
}

export interface DocumentFolder {
  id: string;
  name: string;
  description: string;
  count: number;
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string[];
  publicationYear: string;
  venue: string; // Journal or Conference
  type: 'Journal' | 'Conference' | 'Under Review' | 'Preprint';
  status: 'Published' | 'Under Review' | 'Accepted' | 'In Preparation';
  summary: string;
  keywords: string[];
  paperUrl?: string;
  isAvailable: boolean;
  doi?: string;
}

export interface ResearchProjectItem {
  id: string;
  title: string;
  leadAdvisor?: string;
  duration: string;
  summary: string;
  methodology: string;
  outcomes: string[];
  keywords: string[];
}

export interface AcademicProject {
  id: string;
  title: string;
  category: 'Artificial Intelligence' | 'Machine Learning' | 'Data Science' | 'Web Development' | 'Software Development' | 'Other Academic Projects';
  image?: string;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  academicRelevance: string;
  githubUrl?: string;
  liveDemoUrl?: string;
}

export interface SkillCategory {
  categoryName: string;
  items: {
    name: string;
    level: string; // e.g. "Proficient", "Advanced", "Working Knowledge"
    detail?: string;
  }[];
}

export interface ExtracurricularActivity {
  id: string;
  folderCategory: 'University Club Activities' | 'Volunteer Work' | 'Workshops & Seminars' | 'Competitions' | 'Leadership Activities' | 'Social & Community Activities';
  name: string;
  organization: string;
  role: string;
  duration: string;
  description: string;
  photoUrl?: string;
  certificateUrl?: string;
  hasCertificate: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  category: 'Academic Achievement' | 'Award & Recognition' | 'Professional Certificate' | 'Participation Certificate' | 'Competition Award';
  description: string;
  previewUrl?: string;
  hasCertificate: boolean;
}
