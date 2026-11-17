import {
  StudentProfile,
  CareerObjectiveData,
  EducationItem,
  DocumentFolder,
  AcademicDocument,
  AcademicProject,
  SkillCategory,
  ReferenceItem,
  VolunteeringItem,
} from '../types/portfolio';

export const DEFAULT_PROFILE: StudentProfile = {
  fullName: "MAOUN BILLAH",
  studentId: "22-48813-3",
  department: "Computer Science and Engineering",
  university: "American International University-Bangladesh (AIUB)",
  academicYear: "2022–2026",
  email: "",
  location: "House 402, Road 05, Block D, Bashundhara R/A, Dhaka 1229",
  linkedin: "https://linkedin.com/in/maoun-billah",
  github: "https://github.com/maoun-26",
  profilePhoto: "https://cdn.phototourl.com/anon/2026-11-17-2173c7a1-659f-4a22-86d3-be0606539fae.jpg",
  aboutMe:
    "Final-year Computer Science and Engineering student seeking the Software Support Engineer - Intern position at Progeny Technologies Ltd. Interested in applying programming, database and problem-solving knowledge to software support, troubleshooting and client service while learning enterprise software systems.",
};

export const DEFAULT_CAREER_OBJECTIVE: CareerObjectiveData = {
  summary:
    "Final-year Computer Science and Engineering student seeking the Software Support Engineer - Intern position at Progeny Technologies Ltd. Interested in applying programming, database and problem-solving knowledge to software support, troubleshooting and client service while learning enterprise software systems.",
  focusAreas: [
    "Software Support & Troubleshooting",
    "Programming (C++, Java, C#)",
    "Database Management Systems & SQL",
    "Client Service & Problem-Solving",
    "Enterprise Software Systems",
  ],
  aspirations: "",
};

export const DEFAULT_EDUCATION: EducationItem[] = [
  {
    id: "bsc-cse",
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "American International University-Bangladesh (AIUB)",
    departmentOrGroup: "Department of Computer Science and Engineering",
    faculty: "Semester: 12th",
    period: "2022 – 2026",
    gpa: "3.59",
    gpaScale: "4.00",
    passingYear: "2026",
    status: "Graduating",
    highlights: ["Semester: 12th", "CGPA: 3.59 | 2026"],
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Abdul Kadir Mullah City College",
    departmentOrGroup: "Higher Secondary Education",
    group: "Science",
    board: "GPA: 5.00 | 2020",
    period: "2018 – 2020",
    gpa: "5.00",
    gpaScale: "5.00",
    passingYear: "2020",
    status: "Completed",
    highlights: ["GPA: 5.00 | 2020"],
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC)",
    institution: "Monohardi Pilot High School",
    departmentOrGroup: "Secondary Education",
    group: "Science",
    board: "GPA: 5.00 | 2018",
    period: "2016 – 2018",
    gpa: "5.00",
    gpaScale: "5.00",
    passingYear: "2018",
    status: "Completed",
    highlights: ["GPA: 5.00 | 2018"],
  },
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    categoryName: "Programming",
    items: [
      { name: "C++", level: "Proficient" },
      { name: "Java", level: "Proficient" },
      { name: "C# (academic project)", level: "Academic Project" },
    ],
  },
  {
    categoryName: "Databases",
    items: [
      { name: "Database Management Systems", level: "Proficient" },
      { name: "SQL-related academic coursework", level: "Academic Coursework" },
    ],
  },
  {
    categoryName: "Tools",
    items: [
      { name: "Microsoft Word", level: "Proficient" },
      { name: "Microsoft Office", level: "Proficient" },
      { name: "Internet research and documentation", level: "Proficient" },
    ],
  },
];

export const SOFT_SKILLS = [
  { name: "Communication and interpersonal skills" },
  { name: "Teamwork" },
  { name: "Problem-solving" },
  { name: "Adaptability" },
  { name: "Organization and coordination" },
];

export const DEFAULT_ACADEMIC_PROJECTS: AcademicProject[] = [
  {
    id: "proj-java-course-mgmt",
    title: "Java Course Management System",
    category: "Software Development",
    description:
      "Academic application project focused on course-management workflows.",
    technologies: ["Java"],
    keyFeatures: ["Course-management workflows"],
    academicRelevance: "Academic application project",
    githubUrl: "https://github.com/maoun-26/Java-Project",
  },
  {
    id: "proj-csharp-supershop",
    title: "C# SuperShop Management System",
    category: "Software Development",
    description:
      "Academic application project involving retail-management operations.",
    technologies: ["C#"],
    keyFeatures: ["Retail-management operations"],
    academicRelevance: "Academic application project",
    githubUrl: "https://github.com/maoun-26/C-Project",
  },
  {
    id: "proj-db-factory-mgmt",
    title: "Factory Management System",
    category: "Software Development",
    description:
      "Database project involving structured business information.",
    technologies: ["SQL", "Database Management Systems"],
    keyFeatures: ["Structured business information management"],
    academicRelevance: "Database project",
    githubUrl: "https://github.com/maoun-26/Database-Project",
  },
];

export const RELEVANT_COURSEWORK = [
  "Database Management Systems",
  "Software Engineering",
  "Object-Oriented Programming",
  "Data Structures and Algorithms",
  "Web Application Development",
  "Operating Systems",
];

export const VOLUNTEERING: VolunteeringItem[] = [
  {
    organization: "Bashundhara Shovoshongho",
    role: "Volunteer",
  },
];

export const LANGUAGES = ["Bangla", "English", "Hindi", "Urdu"];

export const INTERESTS = ["Travelling", "Photography", "Watching movies"];

export const REFERENCES: ReferenceItem[] = [
  {
    name: "Prof. Dr. Dip Nandi",
    designation: "Professor and Associate Dean",
    department: "Faculty of Science & Technology",
    institution: "AIUB",
    email: "dip.nandi@aiub.edu",
  },
  {
    name: "Dr. Afsah Sharmin",
    designation: "Associate Professor",
    department: "Department of Computer Science",
    institution: "AIUB",
    email: "afsah@aiub.edu",
  },
];

export const DOCUMENT_FOLDERS: DocumentFolder[] = [
  {
    id: "academic-documents",
    name: "Academic Documents",
    description: "Official educational credentials including B.Sc. CSE grade sheet, HSC, SSC certificates, and official CV.",
    count: 4,
  },
  {
    id: "achievements-documents",
    name: "Achievements Documents",
    description: "",
    count: 1,
  },
];

export const DEFAULT_DOCUMENTS: AcademicDocument[] = [
  {
    id: "doc-acad-01",
    serialNumber: "01",
    title: "B.Sc. in Computer Science and Engineering Grade Record",
    folderId: "academic-documents",
    issueDate: "2026 (Graduating)",
    issuingAuthority: "American International University-Bangladesh (AIUB)",
    isAvailable: true,
    fileType: "image",
    notes: "Semester: 12th | CGPA: 3.59 / 4.00.",
  },
  {
    id: "doc-acad-02",
    serialNumber: "02",
    title: "Higher Secondary Certificate (HSC)",
    folderId: "academic-documents",
    issueDate: "2020",
    issuingAuthority: "Abdul Kadir Mullah City College",
    isAvailable: true,
    fileType: "image",
    notes: "Official certificate verifying Higher Secondary graduation with GPA 5.00 / 5.00.",
  },
  {
    id: "doc-acad-03",
    serialNumber: "03",
    title: "Secondary School Certificate (SSC)",
    folderId: "academic-documents",
    issueDate: "2018",
    issuingAuthority: "Monohardi Pilot High School",
    isAvailable: true,
    fileType: "image",
    notes: "Official certificate verifying Secondary School graduation with GPA 5.00 / 5.00.",
  },
  {
    id: "doc-acad-04",
    serialNumber: "04",
    title: "Official Curriculum Vitae (CV)",
    folderId: "academic-documents",
    issueDate: "Current",
    issuingAuthority: "MAOUN BILLAH",
    isAvailable: true,
    fileType: "pdf",
    fileUrl: "/assets/aistudio/CV_11ad666b.pdf",
    notes: "Verified Curriculum Vitae submitted for Software Support Engineer - Intern application.",
  },
  {
    id: "doc-ach-01",
    serialNumber: "01",
    title: "Volunteering Record — Bashundhara Shovoshongho",
    folderId: "achievements-documents",
    issueDate: "Active",
    issuingAuthority: "Bashundhara Shovoshongho",
    isAvailable: true,
    fileType: "image",
    notes: "Social service and community volunteering active engagement.",
  },
];
