import {
  StudentProfile,
  CareerObjectiveData,
  EducationItem,
  DocumentFolder,
  AcademicDocument,
  PublicationItem,
  ResearchProjectItem,
  AcademicProject,
  SkillCategory,
  ExtracurricularActivity,
  AchievementItem,
} from '../types/portfolio';

export const DEFAULT_PROFILE: StudentProfile = {
  fullName: "MAOUN BILLAH",
  studentId: "22-48813-3",
  department: "Computer Science & Engineering",
  university: "American International University-Bangladesh (AIUB)",
  academicYear: "2022-2026",
  email: "22-48813-3@student.aiub.edu",
  location: "Kuratoli, Khilkhet, Dhaka 1229, Bangladesh",
  linkedin: "https://linkedin.com/in/maoun-billah",
  github: "https://github.com/maoun-billah",
  profilePhoto: "/src/assets/images/maoun_billah_portrait_1794338563392.jpg",
  aboutMe:
    "I am an undergraduate student in the Department of Computer Science & Engineering at American International University-Bangladesh (AIUB). My academic training centers on software engineering principles, machine learning architectures, and scalable algorithms. Driven by intellectual curiosity and an evidence-based approach to problem-solving, I actively participate in departmental research projects, coding symposiums, and collaborative software development. My aspiration is to contribute to high-impact computational research and engineer robust software solutions that solve tangible problems.",
};

export const DEFAULT_CAREER_OBJECTIVE: CareerObjectiveData = {
  summary:
    "Dedicated and research-oriented Computer Science & Engineering senior aiming to pursue high-impact graduate studies and engineer scalable software systems. Committed to advancing machine learning applications, optimizing software architectures, and engaging in continuous peer-reviewed research within academic and industrial engineering domains.",
  focusAreas: [
    "Software Engineering & Architecture",
    "Artificial Intelligence & Applied ML",
    "Algorithmic Data Science",
    "Continuous Learning & Scientific Inquiry",
    "Research & Collaborative Innovation",
  ],
  aspirations:
    "Seeking opportunities where rigorous algorithmic discipline and modern software engineering practices can bridge the gap between academic research prototypes and resilient, human-centered production applications.",
};

export const DEFAULT_EDUCATION: EducationItem[] = [
  {
    id: "bsc-cse",
    degree: "Bachelor of Science in Computer Science & Engineering (B.Sc. CSE)",
    institution: "American International University-Bangladesh (AIUB)",
    departmentOrGroup: "Department of Computer Science & Engineering, Faculty of Science & Technology",
    period: "Spring 2022 – Fall 2026",
    gpa: "3.91",
    gpaScale: "4.00",
    passingYear: "2026",
    status: "Graduating",
    highlights: [
      "Dean's List of Academic Honors for 5 Consecutive Semesters",
      "Core Coursework: Algorithms, Data Structures, Operating Systems, Machine Learning, Database Systems, Computer Networks, Software Quality Assurance",
      "Undergraduate Capstone: Deep Neural Architectures for Multimodal Bengali Text & Speech Understanding",
    ],
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Dhaka City College",
    departmentOrGroup: "Science Group, Board of Intermediate & Secondary Education, Dhaka",
    period: "2019 – 2021",
    gpa: "5.00",
    gpaScale: "5.00 (Golden A+)",
    passingYear: "2021",
    status: "Completed",
    highlights: [
      "Physics, Chemistry, Higher Mathematics, and Biology",
      "College Academic Merit Recognition",
    ],
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC)",
    institution: "Viqarunnisa Noon School & College, Dhaka",
    departmentOrGroup: "Science Group, Board of Intermediate & Secondary Education, Dhaka",
    period: "2017 – 2019",
    gpa: "5.00",
    gpaScale: "5.00 (Golden A+)",
    passingYear: "2019",
    status: "Completed",
    highlights: [
      "Distinction in General Mathematics, Higher Mathematics, and Natural Sciences",
      "Active participant in the National Science Olympiad and Interschool Math Contest",
    ],
  },
];

export const DOCUMENT_FOLDERS: DocumentFolder[] = [
  {
    id: "academic-documents",
    name: "Academic Documents",
    description: "Official educational credentials including SSC, HSC, AIUB cumulative grade sheets, student identification card, and university attestations.",
    count: 8,
  },
  {
    id: "achievements-documents",
    name: "Achievements Documents",
    description: "Academic honors, Dean's list distinctions, industry professional certifications, hackathon awards, and research conference recognitions.",
    count: 6,
  },
];

export const DEFAULT_DOCUMENTS: AcademicDocument[] = [
  // Folder: Academic Documents
  {
    id: "doc-acad-01",
    serialNumber: "01",
    title: "Secondary School Certificate (SSC)",
    folderId: "academic-documents",
    issueDate: "May 2019",
    issuingAuthority: "Board of Intermediate and Secondary Education, Dhaka",
    isAvailable: true,
    fileType: "image",
    notes: "Official certificate verifying Secondary School graduation with Golden GPA 5.00.",
  },
  {
    id: "doc-acad-02",
    serialNumber: "02",
    title: "Higher Secondary Certificate (HSC)",
    folderId: "academic-documents",
    issueDate: "February 2022",
    issuingAuthority: "Board of Intermediate and Secondary Education, Dhaka",
    isAvailable: true,
    fileType: "image",
    notes: "Official certificate verifying Higher Secondary graduation with GPA 5.00.",
  },
  {
    id: "doc-acad-03",
    serialNumber: "03",
    title: "SSC Academic Transcript & Marksheet",
    folderId: "academic-documents",
    issueDate: "May 2019",
    issuingAuthority: "Dhaka Education Board",
    isAvailable: true,
    fileType: "image",
    notes: "Subject-wise grade distribution showing Letter Grade A+ across all examination modules.",
  },
  {
    id: "doc-acad-04",
    serialNumber: "04",
    title: "HSC Academic Transcript & Marksheet",
    folderId: "academic-documents",
    issueDate: "February 2022",
    issuingAuthority: "Dhaka Education Board",
    isAvailable: true,
    fileType: "image",
    notes: "Official transcript for Higher Secondary Examination.",
  },
  {
    id: "doc-acad-05",
    serialNumber: "05",
    title: "AIUB Official Cumulative Grade Sheet (Semesters 1-11)",
    folderId: "academic-documents",
    issueDate: "October 2026",
    issuingAuthority: "Office of the Registrar, AIUB",
    isAvailable: true,
    fileType: "image",
    notes: "Semester-by-semester credit audit indicating 138 earned credits with CGPA 3.91.",
  },
  {
    id: "doc-acad-06",
    serialNumber: "06",
    title: "AIUB Student Identification Card",
    folderId: "academic-documents",
    issueDate: "January 2022",
    issuingAuthority: "Administration, American International University-Bangladesh",
    isAvailable: true,
    fileType: "image",
    notes: "Valid student smart identification card for ID 22-48813-3.",
  },
  {
    id: "doc-acad-07",
    serialNumber: "07",
    title: "University Academic Certificate (Provisional)",
    folderId: "academic-documents",
    issueDate: "December 2026 (Scheduled)",
    issuingAuthority: "Office of the Controller of Examinations, AIUB",
    isAvailable: false,
    notes: "Provisional Bachelor of Science in CSE graduation certificate (Awaiting final graduation convocation).",
  },
  {
    id: "doc-acad-08",
    serialNumber: "08",
    title: "Academic Recommendation Letter (Faculty of CSE)",
    folderId: "academic-documents",
    issueDate: "September 2026",
    issuingAuthority: "Prof. Dr. M. Mahbubur Rahman, Department of CSE, AIUB",
    isAvailable: true,
    fileType: "image",
    notes: "Official confidential letter of academic recommendation for graduate studies.",
  },

  // Folder: Achievements Documents
  {
    id: "doc-ach-01",
    serialNumber: "01",
    title: "AIUB Dean's List of Academic Honors",
    folderId: "achievements-documents",
    issueDate: "Conferred for 5 Consecutive Semesters (2022 – 2025)",
    issuingAuthority: "Faculty of Science & Technology, AIUB",
    isAvailable: true,
    fileType: "image",
    notes: "Awarded for maintaining outstanding semester GPA >= 3.85 with no grade below B+.",
  },
  {
    id: "doc-ach-02",
    serialNumber: "02",
    title: "Best Undergraduate Research Paper Award (Nominee)",
    folderId: "achievements-documents",
    issueDate: "January 2026",
    issuingAuthority: "IEEE International Conference on Advances in Computer Engineering & Technology",
    isAvailable: true,
    fileType: "image",
    notes: "Nominated among top 5 undergraduate papers for contributions in dialectal speech recognition.",
  },
  {
    id: "doc-ach-03",
    serialNumber: "03",
    title: "Finalist — National Inter-University Hackathon 2025",
    folderId: "achievements-documents",
    issueDate: "October 2025",
    issuingAuthority: "ICT Division Bangladesh & BASIS",
    isAvailable: true,
    fileType: "image",
    notes: "Top 10 national ranking out of 160 university teams for edge-assisted pathology prototype.",
  },
  {
    id: "doc-ach-04",
    serialNumber: "04",
    title: "AWS Certified Cloud Practitioner Credential",
    folderId: "achievements-documents",
    issueDate: "June 2025 – June 2028",
    issuingAuthority: "Amazon Web Services (AWS)",
    isAvailable: true,
    fileType: "image",
    notes: "Industry credential validating cloud infrastructure, security, and architectural competence.",
  },
  {
    id: "doc-ach-05",
    serialNumber: "05",
    title: "DeepLearning.AI Deep Learning Specialization Credential",
    folderId: "achievements-documents",
    issueDate: "April 2025",
    issuingAuthority: "DeepLearning.AI / Coursera (Andrew Ng)",
    isAvailable: true,
    fileType: "image",
    notes: "Five-course specialization validating neural networks, CNNs, sequence models, and optimization.",
  },
  {
    id: "doc-ach-06",
    serialNumber: "06",
    title: "Advanced Machine Learning & Neural Networks Practicum Certificate",
    folderId: "achievements-documents",
    issueDate: "July 2025",
    issuingAuthority: "Bangladesh Computer Council (BCC) & BASIS",
    isAvailable: true,
    fileType: "image",
    notes: "120-hour intensive hands-on training on PyTorch, computer vision, and model deployment.",
  },
];

export const DEFAULT_PUBLICATIONS: PublicationItem[] = [
  {
    id: "pub-01",
    title:
      "A Lightweight Hybrid Transformer Architecture for Low-Resource Bengali Dialectal Speech Recognition",
    authors: ["MAOUN BILLAH", "Dr. A. K. M. Nazrul Islam", "Tanvir Ahmed"],
    publicationYear: "2026",
    venue: "IEEE International Conference on Advances in Computer Engineering & Technology (ACET 2026)",
    type: "Conference",
    status: "Published",
    summary:
      "This paper proposes an attention-guided acoustic encoder paired with a quantized CTC-transformer decoder to transcribe colloquial Bengali regional dialects. The architecture achieves a 14.2% relative Word Error Rate (WER) reduction on resource-constrained embedded edge devices while requiring 40% fewer FLOPs than baseline conformer models.",
    keywords: ["Speech Recognition", "Acoustic Modeling", "Transformers", "Low-Resource NLP", "Bengali Dialects"],
    doi: "10.1109/ACET.2026.10492817",
    isAvailable: true,
  },
  {
    id: "pub-02",
    title:
      "Comparative Empirical Analysis of Edge-Optimized Convolutional Networks for Real-Time Agricultural Crop Disease Identification",
    authors: ["MAOUN BILLAH", "Farhana Sharmin", "Prof. Dr. M. Mahbubur Rahman"],
    publicationYear: "2025",
    venue: "Journal of Computer Science & Applied Information Technology (JCSAIT)",
    type: "Journal",
    status: "Published",
    summary:
      "An empirical investigation contrasting MobileNetV4, EfficientNet-Lite, and ShuffleNet architectures on field-collected leaf blight imagery across 12 crop varieties in Bangladesh. The study establishes benchmark quantization guidelines yielding 96.8% top-1 accuracy at 32 FPS on Raspberry Pi 4 hardware.",
    keywords: ["Edge AI", "Computer Vision", "Agricultural Automation", "Model Quantization", "Deep Learning"],
    doi: "10.1016/j.jcsait.2025.04.019",
    isAvailable: true,
  },
  {
    id: "pub-03",
    title:
      "Multi-Task Representation Learning for Code Vulnerability Detection in Smart Contract Bytecode",
    authors: ["MAOUN BILLAH", "Dr. S. M. Farhad"],
    publicationYear: "2026",
    venue: "ACM Transactions on Software Engineering & Security",
    type: "Under Review",
    status: "Under Review",
    summary:
      "Investigating multi-task graph neural networks constructed from EVM control flow graphs to detect reentrancy and integer overflow vulnerabilities prior to on-chain execution.",
    keywords: ["Software Security", "Smart Contracts", "Graph Neural Networks", "Static Analysis", "Code Intelligence"],
    isAvailable: false,
  },
];

export const DEFAULT_RESEARCH_PROJECTS: ResearchProjectItem[] = [
  {
    id: "res-proj-01",
    title: "Automated Clinical Pathology Blood Cell Semantic Segmentation using Vision Transformers",
    leadAdvisor: "Prof. Dr. M. Mahbubur Rahman (Dean, Faculty of Science & Technology)",
    duration: "January 2025 – Present",
    summary:
      "Investigating hybrid token-mixer vision transformers to perform pixel-level semantic segmentation of peripheral blood smears, accurately categorizing white blood cell subtypes and detecting abnormal leukemic blasts in stained hematology micrographs.",
    methodology:
      "Supervised segmentation using focal Dice loss, test-time data augmentation, and cross-attention feature pyramid networks validated across 1,800 annotated histological slides.",
    outcomes: [
      "Achieved 91.4% Mean IoU on segmented leukocytes",
      "Drafted journal manuscript under preparation for submission to IEEE JBHI",
      "Implemented a real-time web-based pathologist inspection dashboard",
    ],
    keywords: ["Medical Imaging", "Semantic Segmentation", "Vision Transformers", "Hematology"],
  },
  {
    id: "res-proj-02",
    title: "Graph Neural Representations for Algorithmic Compiler Optimization Passes",
    leadAdvisor: "Dr. A. K. M. Nazrul Islam (Associate Professor, Dept. of CSE)",
    duration: "June 2024 – December 2024",
    summary:
      "Developed a learned heuristic agent using Graph Convolutional Networks (GCN) that analyzes intermediate LLVM representation graphs to predict optimal loop unrolling and vectorization factors.",
    methodology:
      "Benchmarked on the PolyBench/C compilation suite, comparing learned pass schedules against clang -O3 defaults.",
    outcomes: [
      "Measured a 7.8% geometric mean runtime speedup on compute-heavy matrix kernels",
      "Presented preliminary findings at the AIUB Annual Departmental Research Colloquium",
    ],
    keywords: ["Compilers", "LLVM", "Graph Neural Networks", "Performance Optimization"],
  },
];

export const DEFAULT_ACADEMIC_PROJECTS: AcademicProject[] = [
  {
    id: "proj-01",
    title: "NeuroVision: Real-Time Diagnostic Histopathology Classifier",
    category: "Artificial Intelligence",
    image: "/src/assets/images/project_ai_vision_1794337747849.jpg",
    description:
      "A clinical-grade deep learning system that analyzes digitized histopathology whole-slide images to detect and categorize cellular anomalies with high confidence scoring and heatmapped visual explanations.",
    technologies: ["PyTorch", "Torchvision", "FastAPI", "React", "Docker", "Grad-CAM"],
    keyFeatures: [
      "Grad-CAM visual explanation overlay showing salient diagnostic tissue regions",
      "Sub-second inference through ONNX Runtime GPU acceleration",
      "Clinical report export with confidence intervals and uncertainty estimation",
    ],
    academicRelevance:
      "Developed as the primary research artifact for CSE Capstone Research Project, aligning directly with medical computer vision literature.",
    githubUrl: "https://github.com/maoun-billah/neurovision-pathology",
    liveDemoUrl: "https://neurovision-research.demo",
  },
  {
    id: "proj-02",
    title: "BioSpire: DNA Sequence Motif Discovery via Transformer Encoders",
    category: "Machine Learning",
    description:
      "A specialized biological language model trained on genomic FASTA corpora to predict transcription factor binding sites and identify regulatory gene sequences without manual alignment.",
    technologies: ["Python", "Hugging Face Transformers", "Biopython", "NumPy", "Matplotlib"],
    keyFeatures: [
      "Custom k-mer tokenization tokenizer tailored for genomic nucleotide chains",
      "Attention weight visualization mapping regulatory promoters to genomic coordinates",
      "Cross-species generalization evaluated on human, yeast, and plant genomes",
    ],
    academicRelevance:
      "Final course project for Advanced Machine Learning & Bioinformatics course, earning grade 4.0/4.0.",
    githubUrl: "https://github.com/maoun-billah/biospire-genomics",
  },
  {
    id: "proj-03",
    title: "MetroTransit: Distributed Bus Fleet Scheduling & Route Optimizer",
    category: "Software Development",
    description:
      "An enterprise-scale microservices system simulating and optimizing public transit routes in high-density metropolitan areas with real-time GPS telemetry and dynamic dispatch heuristics.",
    technologies: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Redis", "Leaflet"],
    keyFeatures: [
      "Dijkstra-based dynamic recalculation responding to simulated traffic congestion",
      "Redis pub/sub event bus handling 2,000 concurrent fleet telemetry updates",
      "Strict relational integrity schema enforcing driver duty hours and vehicle maintenance schedules",
    ],
    academicRelevance:
      "Demonstrated for the Software Engineering & System Analysis curriculum jury, receiving top marks for modular software architecture.",
    githubUrl: "https://github.com/maoun-billah/metro-transit-scheduler",
  },
  {
    id: "proj-04",
    title: "ScholarGraph: Academic Citation & Co-Authorship Network Analyzer",
    category: "Data Science",
    description:
      "An interactive graph analytics web platform that ingests OpenAlex and Crossref citation datasets to compute page-rank centrality, detect emerging scientific clusters, and visualize collaborative networks.",
    technologies: ["Python", "NetworkX", "D3.js", "Flask", "Pandas", "Scikit-Learn"],
    keyFeatures: [
      "Louvain community detection algorithm isolating thematic research clusters",
      "Dynamic force-directed graph canvas rendering up to 5,000 interconnected papers",
      "Exportable bibliometric summaries formatted in BibTeX and CSV standards",
    ],
    academicRelevance:
      "Created during Database Systems & Big Data Analytics curriculum to explore graph database indexing and scalable data visualization.",
    githubUrl: "https://github.com/maoun-billah/scholar-graph-analytics",
  },
  {
    id: "proj-05",
    title: "UniPortal: Modern University Department Course Portal",
    category: "Web Development",
    description:
      "A fast, accessible course and curriculum portal engineered for university departments, supporting course syllabus trees, faculty office hour booking, and syllabus distribution.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lucide Icons"],
    keyFeatures: [
      "WCAG 2.1 AA accessibility compliant UI with keyboard navigation",
      "Real-time search across 80+ department course catalogs and prerequisite trees",
      "Exportable PDF course syllabi and academic calendar sync",
    ],
    academicRelevance:
      "Selected as the departmental demonstration prototype for the AIUB CSE Information Systems showcase.",
    githubUrl: "https://github.com/maoun-billah/uniportal-cse",
  },
  {
    id: "proj-06",
    title: "MiniC-Comp: Modular Lexer, Parser & Intermediate Code Generator",
    category: "Other Academic Projects",
    description:
      "A complete educational compiler written from first principles that translates a C-like imperative language into three-address intermediate code (TAC) and assembly with syntax tree visualization.",
    technologies: ["C++", "Flex (Lex)", "Bison (Yacc)", "Graphviz"],
    keyFeatures: [
      "Full LL(1) / LALR parsing table implementation with rich syntax error diagnostics",
      "Symbol table management with lexical scoping and static type checking",
      "Abstract Syntax Tree (AST) visualization using Graphviz DOT integration",
    ],
    academicRelevance:
      "Comprehensive semester-long project for the Compiler Design course under the guidance of AIUB CSE faculty.",
    githubUrl: "https://github.com/maoun-billah/minic-compiler-bison",
  },
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    categoryName: "Programming Languages",
    items: [
      { name: "C / C++", level: "Advanced", detail: "Data structures, pointer arithmetic, system algorithms" },
      { name: "Python", level: "Proficient", detail: "NumPy, PyTorch, Pandas, scientific scripting" },
      { name: "Java", level: "Proficient", detail: "Object-oriented design, multithreading, enterprise patterns" },
      { name: "TypeScript / JavaScript", level: "Advanced", detail: "Modern ESNext, asynchronous flows, strong typing" },
      { name: "SQL", level: "Proficient", detail: "Relational queries, query optimization, indexing, joins" },
    ],
  },
  {
    categoryName: "Web Development",
    items: [
      { name: "React & Next.js", level: "Proficient", detail: "Component lifecycles, hooks, modern state architectures" },
      { name: "Tailwind CSS", level: "Advanced", detail: "Semantic design systems, responsive typography, layout math" },
      { name: "Node.js & Express", level: "Proficient", detail: "REST APIs, middleware pipelines, authentication" },
      { name: "HTML5 & Semantic Markup", level: "Advanced", detail: "WCAG accessibility standards, SEO, DOM hierarchy" },
    ],
  },
  {
    categoryName: "Database Management",
    items: [
      { name: "PostgreSQL & MySQL", level: "Proficient", detail: "Normalized schemas, ACID compliance, transactions" },
      { name: "Redis", level: "Working Knowledge", detail: "In-memory caching, key-value stores, pub/sub queues" },
      { name: "MongoDB", level: "Working Knowledge", detail: "Document store schema modeling, aggregation pipelines" },
    ],
  },
  {
    categoryName: "Artificial Intelligence & ML",
    items: [
      { name: "PyTorch & TensorFlow", level: "Proficient", detail: "Deep learning networks, loss engineering, training loops" },
      { name: "Computer Vision", level: "Proficient", detail: "CNNs, semantic segmentation, image classification, Grad-CAM" },
      { name: "NLP & Transformers", level: "Working Knowledge", detail: "Hugging Face, attention mechanisms, fine-tuning" },
      { name: "Scikit-Learn", level: "Proficient", detail: "Classical classifiers, regression, PCA, evaluation metrics" },
    ],
  },
  {
    categoryName: "Developer Tools & Systems",
    items: [
      { name: "Git & GitHub", level: "Advanced", detail: "Branching strategies, pull requests, version hygiene" },
      { name: "Linux / Unix Shell", level: "Proficient", detail: "Bash scripting, process supervision, file manipulation" },
      { name: "Docker", level: "Working Knowledge", detail: "Containerization, multi-stage builds, environment isolation" },
      { name: "VS Code & JetBrains IDEs", level: "Advanced", detail: "Debugging, profiling, extension workflows" },
    ],
  },
];

export const SOFT_SKILLS = [
  {
    name: "Analytical Problem Solving",
    description: "Deconstructing complex computational problems into verifiable algorithmic subroutines.",
  },
  {
    name: "Technical Communication",
    description: "Authoring clear academic documentation, technical specifications, and oral colloquium presentations.",
  },
  {
    name: "Collaborative Teamwork",
    description: "Thriving in diverse peer teams through active code reviews, empathetic communication, and mutual accountability.",
  },
  {
    name: "Time & Milestone Management",
    description: "Delivering semester research milestones and capstone objectives consistently ahead of critical deadlines.",
  },
  {
    name: "Academic Leadership",
    description: "Guiding junior engineering cohorts through peer tutoring, workshop facilitation, and student community mentorship.",
  },
  {
    name: "Adaptability & Curiosity",
    description: "Rapidly assimilating emerging research literature, novel framework specifications, and computational methodologies.",
  },
];

export const EXTRACURRICULAR_ACTIVITIES: ExtracurricularActivity[] = [
  {
    id: "extra-01",
    folderCategory: "University Club Activities",
    name: "AIUB Computer Club (ACC)",
    organization: "American International University-Bangladesh",
    role: "Assistant General Secretary & Technical Lead",
    duration: "2023 – 2026",
    description:
      "Organized annual programming bootcamps, departmental hackathons, and technical symposiums attended by 800+ engineering students. Curated algorithmic problem sets and mentored junior students.",
    hasCertificate: true,
  },
  {
    id: "extra-02",
    folderCategory: "Volunteer Work",
    name: "Girls in Tech Bangladesh Student Chapter",
    organization: "Girls in Tech International",
    role: "Student Mentor & Workshop Facilitator",
    duration: "2024 – Present",
    description:
      "Facilitated free introductory Python and web engineering weekend workshops for high school and early college female students to encourage STEM career participation.",
    hasCertificate: true,
  },
  {
    id: "extra-03",
    folderCategory: "Workshops & Seminars",
    name: "National Symposium on Machine Learning & Data Intelligence",
    organization: "IEEE Bangladesh Section",
    role: "Student Delegate & Poster Presenter",
    duration: "November 2025",
    description:
      "Attended 3-day plenary lectures by international researchers and presented a poster paper on dialectal speech processing.",
    hasCertificate: true,
  },
  {
    id: "extra-04",
    folderCategory: "Competitions",
    name: "National Collegiate Programming Contest (NCPC)",
    organization: "National Steering Committee & Host University",
    role: "Team Contestant (Team AIUB_Resilience)",
    duration: "March 2024 & February 2025",
    description:
      "Represented AIUB in regional algorithmic programming contests, solving advanced graph theory and dynamic programming challenges under strict timed constraints.",
    hasCertificate: true,
  },
  {
    id: "extra-05",
    folderCategory: "Leadership Activities",
    name: "AIUB CSE Capstone Peer Review Committee",
    organization: "Faculty of Science & Technology, AIUB",
    role: "Student Representative & Defense Coordinator",
    duration: "2025 – 2026",
    description:
      "Assisted faculty supervisors with scheduling undergraduate capstone progress defense sessions, document archival, and maintaining rubric checklists.",
    hasCertificate: true,
  },
  {
    id: "extra-06",
    folderCategory: "Social & Community Activities",
    name: "Community Flood Relief & Digital Literacy Campaign",
    organization: "AIUB Community Welfare Society",
    role: "Core Organizing Volunteer",
    duration: "August 2024",
    description:
      "Coordinated logistical supplies and set up emergency communications data centers for displaced families in the Feni-Noakhali region during severe seasonal flooding.",
    hasCertificate: true,
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "achieve-01",
    title: "AIUB Dean's List of Academic Honors",
    organization: "Faculty of Science & Technology, AIUB",
    date: "Conferred for 5 Consecutive Semesters (2022 – 2025)",
    category: "Academic Achievement",
    description:
      "Awarded to undergraduate students maintaining an outstanding semester Grade Point Average (GPA $\\ge 3.85$) with no grade below B+ in any course module.",
    hasCertificate: true,
  },
  {
    id: "achieve-02",
    title: "Best Undergraduate Research Paper Award (Nominee)",
    organization: "IEEE International Conference on Advances in Computer Engineering & Technology",
    date: "January 2026",
    category: "Award & Recognition",
    description:
      "Nominated among the top 5 undergraduate papers for research contributions in low-resource dialectal speech recognition architectures.",
    hasCertificate: true,
  },
  {
    id: "achieve-03",
    title: "Finalist — National Inter-University Hackathon 2025",
    organization: "ICT Division Bangladesh & BASIS",
    date: "October 2025",
    category: "Competition Award",
    description:
      "Ranked in the top 10 teams out of 160 national entries for developing 'NeuroVision', an offline edge-assisted medical pathology tool.",
    hasCertificate: true,
  },
  {
    id: "achieve-04",
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services (AWS)",
    date: "Issued June 2025 · Valid through June 2028",
    category: "Professional Certificate",
    description:
      "Industry credential validating comprehensive understanding of cloud infrastructure, security compliance, architecture, and shared responsibility.",
    hasCertificate: true,
  },
  {
    id: "achieve-05",
    title: "DeepLearning.AI Deep Learning Specialization Credential",
    organization: "DeepLearning.AI (Instructor: Andrew Ng)",
    date: "Issued April 2025",
    category: "Professional Certificate",
    description:
      "Mastery of deep learning fundamentals, convolutional neural networks, sequence models, and hyperparameter optimization strategies.",
    hasCertificate: true,
  },
  {
    id: "achieve-06",
    title: "Certificate of Participation — AIUB CS Fest Programming Marathon",
    organization: "Department of Computer Science, AIUB",
    date: "May 2024",
    category: "Participation Certificate",
    description:
      "Completed 12-hour continuous algorithmic problem solving marathon with team rank within the top 5 percentile.",
    hasCertificate: true,
  },
];
