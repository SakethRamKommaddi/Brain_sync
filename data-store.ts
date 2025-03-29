// Types for our data
export interface Course {
  id: string
  title: string
  instructor: string
  department: string
  description: string
  level: "Beginner" | "Intermediate" | "Advanced"
  duration: string
  topics: string[]
  prerequisites: string[]
  relatedInterests: string[]
}

export interface Group {
  id: number
  name: string
  course: string
  members: number
  progress?: number
  nextMeeting?: string
  tags: string[]
  match?: number
  description?: string
  relatedInterests: string[]
  membersList?: {
    id: number
    name: string
    role: string
    avatar?: string
  }[]
  courseId?: string
  isPrivate?: boolean
  createdAt?: string
}

export interface Flashcard {
  id: string
  front: string
  back: string
  subject: string
  category: string
  relatedInterests: string[]
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface Quiz {
  id: string
  title: string
  subject: string
  description: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  questions: QuizQuestion[]
  relatedInterests: string[]
}

export interface Task {
  id: string
  title: string
  description: string
  dueDate: string
  priority: "Low" | "Medium" | "High"
  status: "Not Started" | "In Progress" | "Completed"
  course: string
  relatedInterests: string[]
  points: number
  groupId?: number
}

// Courses data
export const courses: Course[] = [
  {
    id: "CS401",
    title: "Advanced Artificial Intelligence",
    instructor: "Dr. Priya Sharma",
    department: "Computer Science",
    description:
      "This course covers advanced topics in artificial intelligence including deep learning, reinforcement learning, and natural language processing.",
    level: "Advanced",
    duration: "12 weeks",
    topics: ["Neural Networks", "Deep Learning", "Reinforcement Learning", "NLP", "Computer Vision"],
    prerequisites: ["Introduction to AI", "Machine Learning Basics", "Python Programming"],
    relatedInterests: ["ai", "ml", "prog", "ds"],
  },
  {
    id: "CS302",
    title: "Database Systems",
    instructor: "Prof. Vikram Patel",
    department: "Computer Science",
    description: "A comprehensive study of database management systems, SQL, NoSQL, and data modeling techniques.",
    level: "Intermediate",
    duration: "10 weeks",
    topics: ["Relational Databases", "SQL", "NoSQL", "Data Modeling", "Transactions"],
    prerequisites: ["Data Structures", "Basic Programming"],
    relatedInterests: ["db", "prog", "ds"],
  },
  {
    id: "PHYS301",
    title: "Quantum Physics",
    instructor: "Dr. Arjun Reddy",
    department: "Physics",
    description: "Introduction to quantum mechanics, wave functions, and the Schrödinger equation.",
    level: "Advanced",
    duration: "14 weeks",
    topics: ["Quantum Mechanics", "Wave Functions", "Schrödinger Equation", "Quantum Entanglement"],
    prerequisites: ["Classical Mechanics", "Calculus III", "Linear Algebra"],
    relatedInterests: ["phys", "math"],
  },
  {
    id: "MATH202",
    title: "Calculus II",
    instructor: "Prof. Neha Gupta",
    department: "Mathematics",
    description: "Advanced integration techniques, sequences, series, and applications of calculus.",
    level: "Intermediate",
    duration: "12 weeks",
    topics: ["Integration Techniques", "Sequences", "Series", "Applications"],
    prerequisites: ["Calculus I"],
    relatedInterests: ["math"],
  },
  {
    id: "CS350",
    title: "Software Engineering",
    instructor: "Dr. Rahul Verma",
    department: "Computer Science",
    description:
      "Principles and practices of software engineering, including design patterns, testing, and project management.",
    level: "Intermediate",
    duration: "12 weeks",
    topics: ["Design Patterns", "Testing", "Project Management", "Agile Methodologies"],
    prerequisites: ["Object-Oriented Programming", "Data Structures"],
    relatedInterests: ["prog", "web", "mobile"],
  },
  {
    id: "BIO301",
    title: "Molecular Biology",
    instructor: "Prof. Ananya Desai",
    department: "Biology",
    description:
      "Study of molecular processes within living cells, including DNA replication, transcription, and translation.",
    level: "Advanced",
    duration: "14 weeks",
    topics: ["DNA Replication", "Transcription", "Translation", "Gene Regulation"],
    prerequisites: ["Cell Biology", "Biochemistry"],
    relatedInterests: ["bio"],
  },
  {
    id: "ECON201",
    title: "Microeconomics",
    instructor: "Dr. Ishaan Kumar",
    department: "Economics",
    description: "Analysis of individual economic agents, including consumers, firms, and markets.",
    level: "Intermediate",
    duration: "10 weeks",
    topics: ["Consumer Theory", "Producer Theory", "Market Structures", "Game Theory"],
    prerequisites: ["Introduction to Economics"],
    relatedInterests: ["econ", "business"],
  },
  {
    id: "PSYCH301",
    title: "Cognitive Psychology",
    instructor: "Prof. Divya Singh",
    department: "Psychology",
    description: "Study of mental processes including perception, attention, memory, language, and problem-solving.",
    level: "Advanced",
    duration: "12 weeks",
    topics: ["Perception", "Attention", "Memory", "Language", "Problem-Solving"],
    prerequisites: ["Introduction to Psychology", "Research Methods"],
    relatedInterests: ["psych"],
  },
  {
    id: "CS430",
    title: "Data Science and Analytics",
    instructor: "Dr. Rohan Mehta",
    department: "Computer Science",
    description:
      "Techniques for analyzing and extracting insights from large datasets using statistical methods and machine learning.",
    level: "Advanced",
    duration: "12 weeks",
    topics: ["Data Cleaning", "Exploratory Data Analysis", "Statistical Modeling", "Machine Learning"],
    prerequisites: ["Statistics", "Programming", "Databases"],
    relatedInterests: ["ds", "ml", "stats", "prog"],
  },
  {
    id: "ART201",
    title: "Digital Design",
    instructor: "Prof. Meera Kapoor",
    department: "Art & Design",
    description: "Introduction to digital design principles, tools, and techniques for creating visual content.",
    level: "Intermediate",
    duration: "10 weeks",
    topics: ["Design Principles", "Typography", "Color Theory", "UI/UX Design"],
    prerequisites: ["Basic Design Concepts"],
    relatedInterests: ["design", "art"],
  },
  {
    id: "CS201",
    title: "Data Structures and Algorithms",
    instructor: "Dr. Saketh Sreeram",
    department: "Computer Science",
    description: "Fundamental data structures and algorithms for efficient problem solving.",
    level: "Intermediate",
    duration: "12 weeks",
    topics: ["Arrays", "Linked Lists", "Trees", "Graphs", "Sorting", "Searching"],
    prerequisites: ["Programming Fundamentals", "Discrete Mathematics"],
    relatedInterests: ["prog", "algo", "ds"],
  },
  {
    id: "CS310",
    title: "Web Development",
    instructor: "Prof. Aditya Sharma",
    department: "Computer Science",
    description: "Modern web development techniques using HTML, CSS, JavaScript, and frameworks.",
    level: "Intermediate",
    duration: "10 weeks",
    topics: ["HTML/CSS", "JavaScript", "React", "Node.js", "Responsive Design"],
    prerequisites: ["Programming Fundamentals"],
    relatedInterests: ["web", "prog", "design"],
  },
  {
    id: "CS420",
    title: "Mobile App Development",
    instructor: "Dr. Kavya Iyer",
    department: "Computer Science",
    description: "Developing applications for iOS and Android platforms.",
    level: "Advanced",
    duration: "12 weeks",
    topics: ["iOS Development", "Android Development", "React Native", "Flutter", "UI/UX for Mobile"],
    prerequisites: ["Object-Oriented Programming", "Web Development"],
    relatedInterests: ["mobile", "prog", "design"],
  },
  {
    id: "MATH301",
    title: "Linear Algebra",
    instructor: "Prof. Arjun Sharma",
    department: "Mathematics",
    description: "Study of vector spaces, linear transformations, matrices, and their applications.",
    level: "Intermediate",
    duration: "12 weeks",
    topics: ["Vector Spaces", "Linear Transformations", "Matrices", "Eigenvalues", "Applications"],
    prerequisites: ["Calculus I", "Discrete Mathematics"],
    relatedInterests: ["math", "ds"],
  },
  {
    id: "STAT301",
    title: "Applied Statistics",
    instructor: "Dr. Neha Gupta",
    department: "Statistics",
    description: "Statistical methods and their applications in data analysis and research.",
    level: "Intermediate",
    duration: "10 weeks",
    topics: ["Probability", "Statistical Inference", "Regression", "ANOVA", "Experimental Design"],
    prerequisites: ["Basic Statistics", "Calculus I"],
    relatedInterests: ["stats", "ds", "math"],
  },
]

// Groups data
export const groups: Group[] = [
  {
    id: 1,
    name: "Advanced Physics Project",
    course: "PHYS 301",
    courseId: "PHYS301",
    members: 4,
    progress: 75,
    nextMeeting: "Today, 3:00 PM",
    tags: ["Physics", "Research", "Group Project"],
    relatedInterests: ["phys", "math"],
    membersList: [
      { id: 1, name: "Arjun Sharma", role: "Group Leader", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 2, name: "Priya Patel", role: "Researcher", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 3, name: "Vikram Reddy", role: "Data Analyst", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 4, name: "Neha Gupta", role: "Report Writer", avatar: "/placeholder.svg?height=40&width=40" },
    ],
    description:
      "A collaborative group focused on completing the semester-long physics research project. We're investigating the properties of quantum entanglement and preparing a comprehensive report with experimental data.",
    createdAt: "2023-09-15",
  },
  {
    id: 2,
    name: "Database Systems Study Group",
    course: "CS 302",
    courseId: "CS302",
    members: 3,
    progress: 45,
    nextMeeting: "Tomorrow, 5:00 PM",
    tags: ["Computer Science", "Databases", "SQL"],
    relatedInterests: ["db", "prog"],
    membersList: [
      { id: 1, name: "Rahul Verma", role: "Group Leader", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 5, name: "Ananya Desai", role: "Database Expert", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 6, name: "Karthik Iyer", role: "Backend Developer", avatar: "/placeholder.svg?height=40&width=40" },
    ],
    description:
      "A study group focused on mastering database concepts, SQL, and database design principles. We work on practical projects and prepare for exams together.",
    createdAt: "2023-09-20",
  },
  {
    id: 3,
    name: "Machine Learning Research",
    course: "CS 401",
    courseId: "CS401",
    members: 5,
    progress: 60,
    nextMeeting: "Wed, 2:00 PM",
    tags: ["AI", "Data Science", "Programming"],
    relatedInterests: ["ai", "ml", "ds", "prog"],
    membersList: [
      { id: 7, name: "Aishwarya Desai", role: "Group Leader", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 1, name: "Rajesh Sreeram", role: "ML Engineer", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 8, name: "Rohan Mehta", role: "Data Scientist", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 9, name: "Ishaan Kumar", role: "Researcher", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 10, name: "Divya Singh", role: "Python Developer", avatar: "/placeholder.svg?height=40&width=40" },
    ],
    description:
      "A research-focused group exploring cutting-edge machine learning algorithms and their applications. We implement models and analyze their performance on various datasets.",
    createdAt: "2023-08-10",
  },
  {
    id: 4,
    name: "Software Engineering Project",
    course: "CS 350",
    courseId: "CS350",
    members: 4,
    progress: 30,
    nextMeeting: "Fri, 10:00 AM",
    tags: ["Software Development", "Agile", "Team Project"],
    relatedInterests: ["prog", "web", "mobile"],
    membersList: [
      { id: 11, name: "Rahul Verma", role: "Project Manager", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 1, name: "Saketh Sreeram", role: "Full-stack Developer", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 12, name: "Aditya Sharma", role: "UI/UX Designer", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 13, name: "Meera Kapoor", role: "QA Engineer", avatar: "/placeholder.svg?height=40&width=40" },
    ],
    description:
      "A project team developing a web application using Agile methodologies. We meet regularly for sprint planning, code reviews, and retrospectives.",
    createdAt: "2023-09-05",
  },
  {
    id: 5,
    name: "Calculus Study Group",
    course: "MATH 202",
    courseId: "MATH202",
    members: 5,
    progress: 65,
    nextMeeting: "Thu, 4:00 PM",
    tags: ["Mathematics", "Calculus", "Problem Solving"],
    relatedInterests: ["math"],
    description:
      "A group dedicated to mastering calculus concepts through collaborative problem-solving sessions and exam preparation.",
    createdAt: "2023-09-12",
    membersList: [
      { id: 14, name: "Sanjay Malhotra", role: "Group Leader", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 15, name: "Anjali Patel", role: "Math Tutor", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 16, name: "Vivek Joshi", role: "Problem Solver", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 17, name: "Riya Sharma", role: "Note Taker", avatar: "/placeholder.svg?height=40&width=40" },
      { id: 18, name: "Nikhil Choudhary", role: "Member", avatar: "/placeholder.svg?height=40&width=40" },
    ],
  },
  {
    id: 6,
    name: "Organic Chemistry Lab Prep",
    course: "CHEM 310",
    members: 4,
    progress: 50,
    nextMeeting: "Mon, 1:00 PM",
    tags: ["Chemistry", "Lab Work", "Organic Chemistry"],
    relatedInterests: ["chem"],
    description:
      "Preparation group for organic chemistry laboratory experiments. We discuss procedures, safety protocols, and expected results before lab sessions.",
    createdAt: "2023-09-18",
  },
  {
    id: 7,
    name: "Data Structures & Algorithms",
    course: "CS 201",
    courseId: "CS201",
    members: 6,
    progress: 70,
    nextMeeting: "Wed, 11:00 AM",
    tags: ["Computer Science", "Algorithms", "Programming"],
    relatedInterests: ["prog", "algo"],
    description:
      "A study group focused on mastering data structures and algorithms concepts. We solve coding problems together and prepare for technical interviews.",
    createdAt: "2023-08-25",
  },
  {
    id: 8,
    name: "Advanced AI Research Group",
    course: "CS 501",
    courseId: "CS401",
    members: 7,
    progress: 40,
    nextMeeting: "Tue, 3:30 PM",
    tags: ["Artificial Intelligence", "Research", "Deep Learning"],
    relatedInterests: ["ai", "ml"],
    description:
      "A research group exploring cutting-edge AI techniques including transformer models, reinforcement learning, and computer vision applications.",
    createdAt: "2023-07-15",
  },
  {
    id: 9,
    name: "Web Development Workshop",
    course: "CS 340",
    courseId: "CS310",
    members: 8,
    progress: 55,
    nextMeeting: "Thu, 2:00 PM",
    tags: ["Web Development", "JavaScript", "React"],
    relatedInterests: ["web", "prog"],
    description:
      "Hands-on workshop for building modern web applications using React, Node.js, and related technologies. We work on real-world projects together.",
    createdAt: "2023-09-01",
  },
  {
    id: 10,
    name: "Competitive Programming Club",
    course: "CS 290",
    courseId: "CS201",
    members: 12,
    progress: 80,
    nextMeeting: "Sat, 10:00 AM",
    tags: ["Algorithms", "Programming", "Problem Solving"],
    relatedInterests: ["algo", "prog"],
    description:
      "A group dedicated to improving algorithmic problem-solving skills through regular coding contests and collaborative practice sessions.",
    createdAt: "2023-08-05",
  },
  {
    id: 11,
    name: "Data Science Project Team",
    course: "CS 430",
    courseId: "CS430",
    members: 5,
    progress: 35,
    nextMeeting: "Mon, 4:00 PM",
    tags: ["Data Science", "Machine Learning", "Python"],
    relatedInterests: ["ds", "ml", "prog"],
    description:
      "A project-based team working on real-world data science problems. We analyze datasets, build predictive models, and visualize results.",
    createdAt: "2023-09-10",
  },
  {
    id: 12,
    name: "Quantum Physics Discussion Group",
    course: "PHYS 401",
    courseId: "PHYS301",
    members: 6,
    progress: 60,
    nextMeeting: "Wed, 5:00 PM",
    tags: ["Physics", "Quantum Mechanics", "Research"],
    relatedInterests: ["phys"],
    description:
      "Advanced discussion group focused on quantum physics concepts, recent research papers, and theoretical problems.",
    createdAt: "2023-08-20",
  },
  {
    id: 13,
    name: "Applied Mathematics Team",
    course: "MATH 350",
    courseId: "MATH301",
    members: 4,
    progress: 70,
    nextMeeting: "Tue, 1:00 PM",
    tags: ["Mathematics", "Applied Math", "Modeling"],
    relatedInterests: ["math"],
    description:
      "A group focused on applying mathematical concepts to real-world problems in physics, engineering, and computer science.",
    createdAt: "2023-08-15",
  },
  {
    id: 14,
    name: "Economic Theory Study Circle",
    course: "ECON 320",
    courseId: "ECON201",
    members: 7,
    progress: 55,
    nextMeeting: "Thu, 11:00 AM",
    tags: ["Economics", "Theory", "Research"],
    relatedInterests: ["econ"],
    description:
      "A study circle discussing economic theories, current economic issues, and research papers in the field.",
    createdAt: "2023-09-08",
  },
  {
    id: 15,
    name: "Psychology Research Group",
    course: "PSYCH 401",
    courseId: "PSYCH301",
    members: 9,
    progress: 45,
    nextMeeting: "Fri, 2:00 PM",
    tags: ["Psychology", "Research", "Behavioral Studies"],
    relatedInterests: ["psych"],
    description:
      "A research-oriented group focusing on psychological studies, experimental design, and data analysis in behavioral psychology.",
    createdAt: "2023-08-30",
  },
  {
    id: 16,
    name: "Mobile App Development Team",
    course: "CS 420",
    courseId: "CS420",
    members: 6,
    progress: 40,
    nextMeeting: "Mon, 3:00 PM",
    tags: ["Mobile Development", "UI/UX", "Cross-platform"],
    relatedInterests: ["mobile", "prog", "design"],
    description:
      "A collaborative team working on mobile application projects using React Native and Flutter. We focus on creating intuitive and responsive user interfaces.",
    createdAt: "2023-09-05",
  },
  {
    id: 17,
    name: "Statistics and Data Analysis",
    course: "STAT 301",
    courseId: "STAT301",
    members: 5,
    progress: 60,
    nextMeeting: "Wed, 1:00 PM",
    tags: ["Statistics", "Data Analysis", "R Programming"],
    relatedInterests: ["stats", "ds", "math"],
    description:
      "A group dedicated to mastering statistical methods and their application in data analysis using R and Python.",
    createdAt: "2023-09-12",
  },
  {
    id: 18,
    name: "Full-Stack Web Development",
    course: "CS 310",
    courseId: "CS310",
    members: 7,
    progress: 50,
    nextMeeting: "Tue, 4:00 PM",
    tags: ["Web Development", "JavaScript", "Node.js", "React"],
    relatedInterests: ["web", "prog"],
    description:
      "A project-based group focused on building full-stack web applications using modern JavaScript frameworks and tools.",
    createdAt: "2023-08-22",
  },
  {
    id: 19,
    name: "AI Ethics Discussion Group",
    course: "CS 401",
    courseId: "CS401",
    members: 8,
    progress: 30,
    nextMeeting: "Thu, 5:00 PM",
    tags: ["AI", "Ethics", "Philosophy", "Technology"],
    relatedInterests: ["ai", "ml", "phil"],
    description:
      "A discussion group exploring ethical considerations in artificial intelligence development and deployment.",
    createdAt: "2023-09-15",
  },
  {
    id: 20,
    name: "Linear Algebra Study Group",
    course: "MATH 301",
    courseId: "MATH301",
    members: 6,
    progress: 65,
    nextMeeting: "Fri, 11:00 AM",
    tags: ["Mathematics", "Linear Algebra", "Problem Solving"],
    relatedInterests: ["math", "ds"],
    description:
      "A collaborative group focused on mastering linear algebra concepts through problem-solving and applications.",
    createdAt: "2023-08-28",
  },
  {
    id: 21,
    name: "Cross-Disciplinary Research Team",
    course: "MULTI 400",
    members: 10,
    progress: 40,
    nextMeeting: "Wed, 3:00 PM",
    tags: ["Interdisciplinary", "Research", "Collaboration"],
    relatedInterests: ["ai", "bio", "psych", "design"],
    description:
      "A diverse team working on research projects that span multiple disciplines, including AI, biology, psychology, and design.",
    createdAt: "2023-07-20",
  },
  {
    id: 22,
    name: "Blockchain Technology Group",
    course: "CS 415",
    members: 5,
    progress: 35,
    nextMeeting: "Mon, 2:00 PM",
    tags: ["Blockchain", "Cryptocurrency", "Distributed Systems"],
    relatedInterests: ["prog", "algo", "finance"],
    description: "A group exploring blockchain technology, smart contracts, and decentralized applications.",
    createdAt: "2023-09-01",
  },
  {
    id: 23,
    name: "UI/UX Design Workshop",
    course: "ART 201",
    courseId: "ART201",
    members: 8,
    progress: 70,
    nextMeeting: "Thu, 1:00 PM",
    tags: ["Design", "UI/UX", "User Research"],
    relatedInterests: ["design", "art", "web", "mobile"],
    description:
      "A hands-on workshop focused on user interface and experience design principles, tools, and methodologies.",
    createdAt: "2023-08-15",
  },
  {
    id: 24,
    name: "Cloud Computing Practitioners",
    course: "CS 360",
    members: 6,
    progress: 55,
    nextMeeting: "Tue, 2:00 PM",
    tags: ["Cloud Computing", "AWS", "Azure", "DevOps"],
    relatedInterests: ["prog", "web", "db"],
    description:
      "A group focused on cloud computing technologies, services, and best practices for deployment and management.",
    createdAt: "2023-09-10",
  },
  {
    id: 25,
    name: "Cybersecurity Research Team",
    course: "CS 380",
    members: 7,
    progress: 45,
    nextMeeting: "Fri, 3:00 PM",
    tags: ["Cybersecurity", "Network Security", "Ethical Hacking"],
    relatedInterests: ["prog", "algo", "web"],
    description: "A team researching cybersecurity threats, vulnerabilities, and defense mechanisms in modern systems.",
    createdAt: "2023-08-25",
  },
]

// Flashcards data
export const flashcards: Record<string, Flashcard[]> = {
  "computer-science": [
    {
      id: "cs1",
      front: "What is an algorithm?",
      back: "A step-by-step procedure or set of rules for solving a specific problem or accomplishing a defined task.",
      subject: "computer-science",
      category: "fundamentals",
      relatedInterests: ["algo", "prog"],
    },
    {
      id: "cs2",
      front: "What is the time complexity of binary search?",
      back: "O(log n) - logarithmic time complexity. The search space is halved with each step.",
      subject: "computer-science",
      category: "algorithms",
      relatedInterests: ["algo", "prog"],
    },
    {
      id: "cs3",
      front: "What is a hash table?",
      back: "A data structure that maps keys to values using a hash function to compute an index into an array of buckets. It provides average O(1) time complexity for insertions, deletions, and lookups.",
      subject: "computer-science",
      category: "data structures",
      relatedInterests: ["algo", "prog", "ds"],
    },
    {
      id: "cs4",
      front: "What is object-oriented programming?",
      back: "A programming paradigm based on the concept of 'objects', which can contain data (attributes/properties) and code (methods). The four main principles are encapsulation, abstraction, inheritance, and polymorphism.",
      subject: "computer-science",
      category: "programming paradigms",
      relatedInterests: ["prog"],
    },
    {
      id: "cs5",
      front: "What is recursion?",
      back: "A programming technique where a function calls itself to solve smaller instances of the same problem, with a base case to terminate the recursion.",
      subject: "computer-science",
      category: "programming concepts",
      relatedInterests: ["prog", "algo"],
    },
    {
      id: "cs6",
      front: "What is the difference between SQL and NoSQL databases?",
      back: "SQL databases are relational, table-based, with fixed schemas and use SQL for querying. NoSQL databases are non-relational, document/key-value/graph-based, schema-flexible, and use various query languages.",
      subject: "computer-science",
      category: "databases",
      relatedInterests: ["db", "prog"],
    },
    {
      id: "cs7",
      front: "What is a neural network?",
      back: "A computational model inspired by the human brain, consisting of interconnected nodes (neurons) organized in layers that process information and learn patterns from data.",
      subject: "computer-science",
      category: "artificial intelligence",
      relatedInterests: ["ai", "ml"],
    },
    {
      id: "cs8",
      front: "What is the difference between supervised and unsupervised learning?",
      back: "Supervised learning uses labeled data to train models to predict outputs, while unsupervised learning finds patterns in unlabeled data without predefined outputs.",
      subject: "computer-science",
      category: "machine learning",
      relatedInterests: ["ml", "ai", "ds"],
    },
    {
      id: "cs9",
      front: "What is the difference between HTTP and HTTPS?",
      back: "HTTP (Hypertext Transfer Protocol) transfers data in plaintext, while HTTPS (HTTP Secure) encrypts the data using SSL/TLS, providing secure communication.",
      subject: "computer-science",
      category: "web development",
      relatedInterests: ["web", "prog"],
    },
    {
      id: "cs10",
      front: "What is a RESTful API?",
      back: "A REST (Representational State Transfer) API is an architectural style for designing networked applications that uses HTTP requests to access and manipulate data using stateless operations.",
      subject: "computer-science",
      category: "web development",
      relatedInterests: ["web", "prog"],
    },
    {
      id: "cs11",
      front: "What is the difference between a stack and a queue?",
      back: "A stack follows LIFO (Last In, First Out) principle where elements are added and removed from the same end. A queue follows FIFO (First In, First Out) principle where elements are added at one end and removed from the other.",
      subject: "computer-science",
      category: "data structures",
      relatedInterests: ["algo", "prog", "ds"],
    },
    {
      id: "cs12",
      front: "What is Big O notation?",
      back: "Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. In computer science, it's used to classify algorithms according to how their run time or space requirements grow as the input size grows.",
      subject: "computer-science",
      category: "algorithms",
      relatedInterests: ["algo", "prog", "math"],
    },
  ],
  mathematics: [
    {
      id: "math1",
      front: "What is the derivative of f(x) = x²?",
      back: "f'(x) = 2x",
      subject: "mathematics",
      category: "calculus",
      relatedInterests: ["math"],
    },
    {
      id: "math2",
      front: "State the Pythagorean theorem.",
      back: "In a right triangle, the square of the hypotenuse equals the sum of squares of the other two sides: a² + b² = c², where c is the hypotenuse.",
      subject: "mathematics",
      category: "geometry",
      relatedInterests: ["math"],
    },
    {
      id: "math3",
      front: "What is a limit in calculus?",
      back: "A limit describes the value that a function approaches as the input approaches some value. Written as lim_{x→a} f(x) = L.",
      subject: "mathematics",
      category: "calculus",
      relatedInterests: ["math"],
    },
    {
      id: "math4",
      front: "What is the quadratic formula?",
      back: "For a quadratic equation ax² + bx + c = 0, the solutions are x = (-b ± √(b² - 4ac)) / 2a.",
      subject: "mathematics",
      category: "algebra",
      relatedInterests: ["math"],
    },
    {
      id: "math5",
      front: "What is a vector?",
      back: "A quantity that has both magnitude and direction, represented as an arrow in space or as an ordered list of numbers.",
      subject: "mathematics",
      category: "linear algebra",
      relatedInterests: ["math"],
    },
    {
      id: "math6",
      front: "What is the chain rule in calculus?",
      back: "If y = f(g(x)), then dy/dx = (dy/du) × (du/dx) where u = g(x). In Leibniz notation: d/dx[f(g(x))] = f'(g(x)) × g'(x).",
      subject: "mathematics",
      category: "calculus",
      relatedInterests: ["math"],
    },
    {
      id: "math7",
      front: "What is a matrix?",
      back: "A rectangular array of numbers, symbols, or expressions arranged in rows and columns, used to represent a mathematical object or a property of such an object.",
      subject: "mathematics",
      category: "linear algebra",
      relatedInterests: ["math"],
    },
    {
      id: "math8",
      front: "What is the fundamental theorem of calculus?",
      back: "The fundamental theorem of calculus establishes the relationship between differentiation and integration, stating that these operations are inverses of each other.",
      subject: "mathematics",
      category: "calculus",
      relatedInterests: ["math"],
    },
    {
      id: "math9",
      front: "What is a Taylor series?",
      back: "A Taylor series is a representation of a function as an infinite sum of terms calculated from the values of the function's derivatives at a single point.",
      subject: "mathematics",
      category: "calculus",
      relatedInterests: ["math"],
    },
    {
      id: "math10",
      front: "What is eigenvalue decomposition?",
      back: "Eigenvalue decomposition is the factorization of a matrix into a canonical form, where the matrix is represented in terms of its eigenvalues and eigenvectors.",
      subject: "mathematics",
      category: "linear algebra",
      relatedInterests: ["math", "ds"],
    },
  ],
  physics: [
    {
      id: "phys1",
      front: "State Newton's First Law of Motion.",
      back: "An object at rest stays at rest, and an object in motion stays in motion with the same speed and direction, unless acted upon by an external force.",
      subject: "physics",
      category: "mechanics",
      relatedInterests: ["phys"],
    },
    {
      id: "phys2",
      front: "What is the formula for kinetic energy?",
      back: "KE = ½mv², where m is mass and v is velocity.",
      subject: "physics",
      category: "energy",
      relatedInterests: ["phys"],
    },
    {
      id: "phys3",
      front: "What is Ohm's Law?",
      back: "V = IR, where V is voltage, I is current, and R is resistance.",
      subject: "physics",
      category: "electricity",
      relatedInterests: ["phys"],
    },
    {
      id: "phys4",
      front: "What is quantum entanglement?",
      back: "A quantum phenomenon where pairs or groups of particles are generated or interact in ways such that the quantum state of each particle cannot be described independently of the others, regardless of distance.",
      subject: "physics",
      category: "quantum physics",
      relatedInterests: ["phys"],
    },
    {
      id: "phys5",
      front: "What is the theory of relativity?",
      back: "A theory developed by Albert Einstein with two parts: Special Relativity (1905) and General Relativity (1915). It describes how time, space, and gravity are related.",
      subject: "physics",
      category: "relativity",
      relatedInterests: ["phys"],
    },
    {
      id: "phys6",
      front: "What is the uncertainty principle?",
      back: "Heisenberg's uncertainty principle states that it is impossible to simultaneously know both the exact position and the exact momentum of a particle. The more precisely one is measured, the less precisely the other can be known.",
      subject: "physics",
      category: "quantum physics",
      relatedInterests: ["phys"],
    },
    {
      id: "phys7",
      front: "What is the second law of thermodynamics?",
      back: "The second law of thermodynamics states that the total entropy of an isolated system always increases over time. Heat flows spontaneously from hot to cold objects.",
      subject: "physics",
      category: "thermodynamics",
      relatedInterests: ["phys", "chem"],
    },
    {
      id: "phys8",
      front: "What is the photoelectric effect?",
      back: "The photoelectric effect is the emission of electrons when light shines on a material. Einstein explained that light consists of discrete quanta (photons) with energy proportional to frequency.",
      subject: "physics",
      category: "quantum physics",
      relatedInterests: ["phys"],
    },
  ],
  chemistry: [
    {
      id: "chem1",
      front: "What is the periodic table?",
      back: "A tabular arrangement of chemical elements organized by atomic number, electron configuration, and recurring chemical properties.",
      subject: "chemistry",
      category: "general chemistry",
      relatedInterests: ["chem"],
    },
    {
      id: "chem2",
      front: "What is a chemical bond?",
      back: "A lasting attraction between atoms, ions or molecules that enables the formation of chemical compounds.",
      subject: "chemistry",
      category: "chemical bonding",
      relatedInterests: ["chem"],
    },
    {
      id: "chem3",
      front: "What is the difference between an acid and a base?",
      back: "Acids donate hydrogen ions (H+) or protons and have a pH less than 7, while bases accept hydrogen ions or donate hydroxide ions (OH-) and have a pH greater than 7.",
      subject: "chemistry",
      category: "acid-base chemistry",
      relatedInterests: ["chem"],
    },
    {
      id: "chem4",
      front: "What is the first law of thermodynamics?",
      back: "Energy cannot be created or destroyed, only transferred or converted from one form to another. Also known as the law of conservation of energy.",
      subject: "chemistry",
      category: "thermochemistry",
      relatedInterests: ["chem", "phys"],
    },
    {
      id: "chem5",
      front: "What is the Aufbau principle?",
      back: "The Aufbau principle states that electrons fill orbitals starting at the lowest available energy level before filling higher levels.",
      subject: "chemistry",
      category: "atomic structure",
      relatedInterests: ["chem"],
    },
    {
      id: "chem6",
      front: "What is a catalyst?",
      back: "A catalyst is a substance that increases the rate of a chemical reaction without itself being consumed in the reaction.",
      subject: "chemistry",
      category: "kinetics",
      relatedInterests: ["chem"],
    },
  ],
  biology: [
    {
      id: "bio1",
      front: "What is DNA?",
      back: "Deoxyribonucleic acid (DNA) is a molecule composed of two polynucleotide chains that coil around each other to form a double helix carrying genetic instructions for development, functioning, growth, and reproduction.",
      subject: "biology",
      category: "molecular biology",
      relatedInterests: ["bio"],
    },
    {
      id: "bio2",
      front: "What is cellular respiration?",
      back: "The process by which cells convert nutrients into ATP, carbon dioxide, and water. It includes glycolysis, the citric acid cycle, and oxidative phosphorylation.",
      subject: "biology",
      category: "cell biology",
      relatedInterests: ["bio"],
    },
    {
      id: "bio3",
      front: "What is natural selection?",
      back: "The process whereby organisms better adapted to their environment tend to survive and produce more offspring, driving evolution.",
      subject: "biology",
      category: "evolution",
      relatedInterests: ["bio"],
    },
    {
      id: "bio4",
      front: "What is the central dogma of molecular biology?",
      back: "The central dogma describes the flow of genetic information within a biological system: DNA → RNA → Protein.",
      subject: "biology",
      category: "molecular biology",
      relatedInterests: ["bio"],
    },
    {
      id: "bio5",
      front: "What is photosynthesis?",
      back: "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with carbon dioxide and water, generating oxygen as a byproduct.",
      subject: "biology",
      category: "plant biology",
      relatedInterests: ["bio"],
    },
  ],
}

// Tasks data
export const tasks: Task[] = [
  {
    id: "task1",
    title: "Complete Neural Networks Assignment",
    description: "Implement a basic neural network for image classification using TensorFlow",
    dueDate: "2025-03-20",
    priority: "High",
    status: "Not Started",
    course: "CS401",
    relatedInterests: ["ai", "ml", "prog"],
    points: 50,
    groupId: 3,
  },
  {
    id: "task2",
    title: "Database Schema Design",
    description: "Design a normalized database schema for the e-commerce project",
    dueDate: "2025-03-18",
    priority: "Medium",
    status: "Not Started",
    course: "CS302",
    relatedInterests: ["db", "prog"],
    points: 30,
    groupId: 2,
  },
  {
    id: "task3",
    title: "Quantum Physics Problem Set",
    description: "Solve problems 1-10 from Chapter 5 on wave functions",
    dueDate: "2025-03-22",
    priority: "Medium",
    status: "Not Started",
    course: "PHYS301",
    relatedInterests: ["phys", "math"],
    points: 40,
    groupId: 1,
  },
  {
    id: "task4",
    title: "Calculus Integration Techniques",
    description: "Practice integration by parts and substitution methods",
    dueDate: "2025-03-19",
    priority: "High",
    status: "Not Started",
    course: "MATH202",
    relatedInterests: ["math"],
    points: 35,
    groupId: 5,
  },
  {
    id: "task5",
    title: "Software Design Patterns",
    description: "Research and document 3 design patterns used in the team project",
    dueDate: "2025-03-25",
    priority: "Low",
    status: "Not Started",
    course: "CS350",
    relatedInterests: ["prog", "web"],
    points: 25,
    groupId: 4,
  },
  {
    id: "task6",
    title: "DNA Replication Essay",
    description: "Write a 1000-word essay on the mechanisms of DNA replication",
    dueDate: "2025-03-21",
    priority: "Medium",
    status: "Not Started",
    course: "BIO301",
    relatedInterests: ["bio"],
    points: 45,
    groupId: 15,
  },
  {
    id: "task7",
    title: "Market Equilibrium Analysis",
    description: "Analyze the effects of price controls on market equilibrium",
    dueDate: "2025-03-23",
    priority: "Medium",
    status: "Not Started",
    course: "ECON201",
    relatedInterests: ["econ", "business"],
    points: 30,
    groupId: 14,
  },
  {
    id: "task8",
    title: "Memory and Cognition Experiment",
    description: "Design and conduct a small experiment on working memory",
    dueDate: "2025-03-26",
    priority: "High",
    status: "Not Started",
    course: "PSYCH301",
    relatedInterests: ["psych"],
    points: 55,
    groupId: 15,
  },
  {
    id: "task9",
    title: "Data Visualization Project",
    description: "Create interactive visualizations for the COVID-19 dataset",
    dueDate: "2025-03-24",
    priority: "Medium",
    status: "Not Started",
    course: "CS430",
    relatedInterests: ["ds", "ml", "prog"],
    points: 60,
    groupId: 11,
  },
  {
    id: "task10",
    title: "UI/UX Design Mockups",
    description: "Create wireframes and mockups for the mobile app project",
    dueDate: "2025-03-27",
    priority: "Low",
    status: "Not Started",
    course: "ART201",
    relatedInterests: ["design", "art"],
    points: 40,
    groupId: 23,
  },
  {
    id: "task11",
    title: "Web Application Frontend",
    description: "Develop the frontend interface for the team project using React",
    dueDate: "2025-03-28",
    priority: "High",
    status: "Not Started",
    course: "CS310",
    relatedInterests: ["web", "prog", "design"],
    points: 45,
    groupId: 18,
  },
  {
    id: "task12",
    title: "Mobile App Feature Implementation",
    description: "Implement user authentication and profile management in the mobile app",
    dueDate: "2025-03-29",
    priority: "Medium",
    status: "Not Started",
    course: "CS420",
    relatedInterests: ["mobile", "prog"],
    points: 50,
    groupId: 16,
  },
  {
    id: "task13",
    title: "Algorithm Optimization Challenge",
    description: "Optimize the sorting algorithm to improve performance on large datasets",
    dueDate: "2025-03-30",
    priority: "Medium",
    status: "Not Started",
    course: "CS201",
    relatedInterests: ["algo", "prog"],
    points: 35,
    groupId: 10,
  },
  {
    id: "task14",
    title: "Linear Algebra Problem Set",
    description: "Complete exercises on eigenvalues and eigenvectors from Chapter 7",
    dueDate: "2025-03-31",
    priority: "Medium",
    status: "Not Started",
    course: "MATH301",
    relatedInterests: ["math"],
    points: 30,
    groupId: 20,
  },
  {
    id: "task15",
    title: "Statistical Analysis Report",
    description: "Analyze the provided dataset and prepare a comprehensive statistical report",
    dueDate: "2025-04-01",
    priority: "High",
    status: "Not Started",
    course: "STAT301",
    relatedInterests: ["stats", "ds"],
    points: 55,
    groupId: 17,
  },
]

// Quizzes data
export const quizzes: Record<string, Quiz> = {
  "computer-science": {
    id: "cs-quiz-1",
    title: "Data Structures and Algorithms",
    subject: "computer-science",
    description: "Test your knowledge of fundamental data structures and algorithms concepts.",
    difficulty: "Intermediate",
    relatedInterests: ["algo", "prog", "ds"],
    questions: [
      {
        id: "csq1",
        question: "Which data structure uses LIFO (Last In, First Out) principle?",
        options: ["Queue", "Stack", "Linked List", "Tree"],
        correctAnswer: 1,
        explanation:
          "A stack follows the Last-In-First-Out (LIFO) principle, where the last element added is the first one to be removed.",
      },
      {
        id: "csq2",
        question: "What is the time complexity of searching in a balanced binary search tree?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correctAnswer: 1,
        explanation:
          "Searching in a balanced binary search tree has a time complexity of O(log n) because at each step, the search space is reduced by half.",
      },
      {
        id: "csq3",
        question: "Which of the following is not a programming paradigm?",
        options: ["Object-Oriented", "Functional", "Procedural", "Alphabetical"],
        correctAnswer: 3,
        explanation:
          "Alphabetical is not a programming paradigm. The main programming paradigms include Object-Oriented, Functional, Procedural, and Declarative.",
      },
      {
        id: "csq4",
        question: "What does SQL stand for?",
        options: [
          "Structured Query Language",
          "Simple Question Language",
          "Structured Question Logic",
          "System Quality Language",
        ],
        correctAnswer: 0,
        explanation:
          "SQL stands for Structured Query Language, which is used for managing and manipulating relational databases.",
      },
      {
        id: "csq5",
        question: "Which of the following is an example of a high-level programming language?",
        options: ["Assembly", "Machine Code", "Python", "Binary"],
        correctAnswer: 2,
        explanation:
          "Python is a high-level programming language that provides strong abstractions from the details of the computer. Assembly and machine code are low-level languages.",
      },
    ],
  },
  "web-development": {
    id: "web-quiz-1",
    title: "Web Development Fundamentals",
    subject: "computer-science",
    description: "Test your knowledge of web development concepts and technologies.",
    difficulty: "Intermediate",
    relatedInterests: ["web", "prog"],
    questions: [
      {
        id: "webq1",
        question: "Which of the following is NOT a frontend JavaScript framework?",
        options: ["React", "Angular", "Express", "Vue"],
        correctAnswer: 2,
        explanation: "Express is a backend Node.js framework, not a frontend framework.",
      },
      {
        id: "webq2",
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
        correctAnswer: 2,
        explanation: "CSS stands for Cascading Style Sheets, which is used for styling web pages.",
      },
      {
        id: "webq3",
        question: "Which HTTP method is used to request data from a server?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correctAnswer: 0,
        explanation: "The GET method is used to request data from a specified resource on the server.",
      },
      {
        id: "webq4",
        question: "What is the purpose of JSON in web development?",
        options: [
          "To style web pages",
          "To create interactive elements",
          "To exchange data between client and server",
          "To define the structure of a web page",
        ],
        correctAnswer: 2,
        explanation:
          "JSON (JavaScript Object Notation) is a lightweight data-interchange format used to exchange data between a client and server.",
      },
      {
        id: "webq5",
        question: "Which of the following is a CSS preprocessor?",
        options: ["jQuery", "SASS", "TypeScript", "Webpack"],
        correctAnswer: 1,
        explanation:
          "SASS (Syntactically Awesome Style Sheets) is a CSS preprocessor that extends CSS with features like variables, nesting, and mixins.",
      },
    ],
  },
  mathematics: {
    id: "math-quiz-1",
    title: "Calculus Fundamentals",
    subject: "mathematics",
    description: "Test your understanding of basic calculus concepts and techniques.",
    difficulty: "Intermediate",
    relatedInterests: ["math"],
    questions: [
      {
        id: "mathq1",
        question: "What is the derivative of sin(x)?",
        options: ["cos(x)", "-sin(x)", "tan(x)", "-cos(x)"],
        correctAnswer: 0,
        explanation: "The derivative of sin(x) is cos(x).",
      },
      {
        id: "mathq2",
        question: "If f(x) = 3x² + 2x - 5, what is f'(x)?",
        options: ["6x + 2", "3x² + 2", "6x", "6x² + 2"],
        correctAnswer: 0,
        explanation:
          "f'(x) = 6x + 2. The derivative of 3x² is 6x, and the derivative of 2x is 2. The derivative of a constant (-5) is 0.",
      },
      {
        id: "mathq3",
        question: "What is the value of √144?",
        options: ["12", "14", "10", "24"],
        correctAnswer: 0,
        explanation: "√144 = 12 because 12² = 144.",
      },
      {
        id: "mathq4",
        question: "What is the formula for the area of a circle?",
        options: ["A = πr²", "A = 2πr", "A = πd", "A = r²"],
        correctAnswer: 0,
        explanation: "The area of a circle is A = πr², where r is the radius of the circle.",
      },
      {
        id: "mathq5",
        question: "What is the value of log₁₀(100)?",
        options: ["2", "10", "1", "100"],
        correctAnswer: 0,
        explanation: "log₁₀(100) = 2 because 10² = 100.",
      },
    ],
  },
  physics: {
    id: "physics-quiz-1",
    title: "Classical Mechanics",
    subject: "physics",
    description: "Test your knowledge of Newton's laws and classical mechanics concepts.",
    difficulty: "Intermediate",
    relatedInterests: ["phys"],
    questions: [
      {
        id: "physq1",
        question: "What is the SI unit of force?",
        options: ["Watt", "Joule", "Newton", "Pascal"],
        correctAnswer: 2,
        explanation: "The SI unit of force is the newton (N), named after Sir Isaac Newton.",
      },
      {
        id: "physq2",
        question: "What is the formula for acceleration?",
        options: ["a = v/t", "a = d/t", "a = F/m", "a = (v-u)/t"],
        correctAnswer: 3,
        explanation:
          "Acceleration is the rate of change of velocity, so a = (v-u)/t, where v is final velocity, u is initial velocity, and t is time.",
      },
      {
        id: "physq3",
        question: "What is the speed of light in vacuum approximately?",
        options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"],
        correctAnswer: 0,
        explanation:
          "The speed of light in vacuum is approximately 3 × 10⁸ meters per second (or 299,792,458 m/s exactly).",
      },
      {
        id: "physq4",
        question: "Which of the following is an example of a vector quantity?",
        options: ["Mass", "Temperature", "Velocity", "Energy"],
        correctAnswer: 2,
        explanation:
          "Velocity is a vector quantity because it has both magnitude (speed) and direction. Mass, temperature, and energy are scalar quantities.",
      },
      {
        id: "physq5",
        question: "What is the law of conservation of energy?",
        options: [
          "Energy cannot be created or destroyed, only transformed from one form to another",
          "Energy can be created but not destroyed",
          "Energy can be destroyed but not created",
          "Energy can be created and destroyed",
        ],
        correctAnswer: 0,
        explanation:
          "The law of conservation of energy states that energy cannot be created or destroyed, only transformed from one form to another or transferred from one object to another.",
      },
    ],
  },
  "ai-ml": {
    id: "ai-ml-quiz-1",
    title: "Artificial Intelligence & Machine Learning",
    subject: "computer-science",
    description: "Test your knowledge of AI and ML concepts, algorithms, and applications.",
    difficulty: "Advanced",
    relatedInterests: ["ai", "ml", "ds"],
    questions: [
      {
        id: "aiml1",
        question: "Which of the following is NOT a type of machine learning?",
        options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Descriptive Learning"],
        correctAnswer: 3,
        explanation:
          "Descriptive Learning is not a standard type of machine learning. The main types are Supervised, Unsupervised, and Reinforcement Learning.",
      },
      {
        id: "aiml2",
        question: "What is the purpose of the activation function in neural networks?",
        options: [
          "To initialize weights",
          "To introduce non-linearity",
          "To normalize input data",
          "To reduce overfitting",
        ],
        correctAnswer: 1,
        explanation:
          "Activation functions introduce non-linearity into the network, allowing it to learn complex patterns and relationships in the data.",
      },
      {
        id: "aiml3",
        question: "Which algorithm is commonly used for recommendation systems?",
        options: ["Linear Regression", "Collaborative Filtering", "K-means Clustering", "Decision Trees"],
        correctAnswer: 1,
        explanation:
          "Collaborative Filtering is commonly used in recommendation systems to predict user preferences based on similarities between users or items.",
      },
      {
        id: "aiml4",
        question: "What does CNN stand for in deep learning?",
        options: [
          "Complex Neural Network",
          "Convolutional Neural Network",
          "Continuous Neural Network",
          "Computational Neural Network",
        ],
        correctAnswer: 1,
        explanation:
          "CNN stands for Convolutional Neural Network, a type of deep learning model particularly effective for image processing and computer vision tasks.",
      },
      {
        id: "aiml5",
        question: "What is the purpose of the backpropagation algorithm?",
        options: [
          "To initialize neural network weights",
          "To calculate the output of a neural network",
          "To update weights based on error gradients",
          "To preprocess input data",
        ],
        correctAnswer: 2,
        explanation:
          "Backpropagation is used to calculate gradients of the error with respect to the weights and update them to minimize the error during neural network training.",
      },
    ],
  },
}

// Helper functions for data access
export const dataStore = {
  // Get all courses
  getAllCourses: () => courses,

  // Get course by ID
  getCourseById: (id: string) => courses.find((course) => course.id === id),

  // Get courses by interest
  getCoursesByInterest: (interestIds: string[]) => {
    return courses.filter((course) => course.relatedInterests.some((interest) => interestIds.includes(interest)))
  },

  // Get all groups
  getAllGroups: () => groups,

  // Get group by ID
  getGroupById: (id: number) => groups.find((group) => group.id === id),

  // Get groups by interest
  getGroupsByInterest: (interestIds: string[]) => {
    return groups.filter((group) => group.relatedInterests.some((interest) => interestIds.includes(interest)))
  },

  // Get groups by course ID
  getGroupsByCourse: (courseId: string) => {
    return groups.filter((group) => group.courseId === courseId)
  },

  // Calculate match percentage between user interests and group
  calculateGroupMatch: (userInterests: string[], group: Group) => {
    if (!userInterests.length) return 0

    const matchingInterests = group.relatedInterests.filter((interest) => userInterests.includes(interest))

    return Math.round((matchingInterests.length / group.relatedInterests.length) * 100)
  },

  // Get all flashcards
  getAllFlashcards: () => flashcards,

  // Get flashcards by subject
  getFlashcardsBySubject: (subject: string) => flashcards[subject] || [],

  // Get flashcards by interest
  getFlashcardsByInterest: (interestIds: string[]) => {
    const result: Flashcard[] = []

    Object.values(flashcards).forEach((subjectCards) => {
      subjectCards.forEach((card) => {
        if (card.relatedInterests.some((interest) => interestIds.includes(interest))) {
          result.push(card)
        }
      })
    })

    return result
  },

  // Get all quizzes
  getAllQuizzes: () => quizzes,

  // Get quiz by ID
  getQuizById: (id: string) => {
    for (const subject in quizzes) {
      if (quizzes[subject].id === id) {
        return quizzes[subject]
      }
    }
    return null
  },

  // Get quizzes by interest
  getQuizzesByInterest: (interestIds: string[]) => {
    const result: Quiz[] = []

    Object.values(quizzes).forEach((quiz) => {
      if (quiz.relatedInterests.some((interest) => interestIds.includes(interest))) {
        result.push(quiz)
      }
    })

    return result
  },

  // Get tasks by interest
  getTasksByInterest: (interestIds: string[]) => {
    if (!interestIds.length) return tasks

    return tasks.filter((task) => task.relatedInterests.some((interest) => interestIds.includes(interest)))
  },

  // Get tasks by group ID
  getTasksByGroup: (groupId: number) => {
    return tasks.filter((task) => task.groupId === groupId)
  },

  // Get task by ID
  getTaskById: (id: string) => {
    return tasks.find((task) => task.id === id)
  },

  // Get all tasks
  getAllTasks: () => tasks,
}

// Update the getAllGroups function to ensure each group has a unique name
// Add this to the data-store.ts file if it doesn't already have unique group names

// Make sure each group has a unique name
export const getAllGroups = (): Group[] => {
  return [
    {
      id: 1,
      name: "Advanced Physics Project",
      course: "PHYS 301",
      description: "A collaborative group focused on completing the semester-long physics research project.",
      members: 12,
      progress: 75,
      nextMeeting: "Today, 3:00 PM",
      tags: ["Physics", "Research", "Group Project"],
    },
    {
      id: 2,
      name: "Calculus Study Group",
      course: "MATH 201",
      description: "A study group dedicated to mastering calculus concepts and solving complex problems together.",
      members: 8,
      progress: 60,
      nextMeeting: "Tomorrow, 4:30 PM",
      tags: ["Mathematics", "Calculus", "Problem Solving"],
    },
    {
      id: 3,
      name: "AI Research Team",
      course: "CS 450",
      description:
        "An advanced research group exploring cutting-edge artificial intelligence techniques and applications.",
      members: 15,
      progress: 85,
      nextMeeting: "Friday, 2:00 PM",
      tags: ["AI", "Machine Learning", "Research"],
    },
    {
      id: 4,
      name: "Organic Chemistry Lab Partners",
      course: "CHEM 302",
      description: "A group for organic chemistry lab partners to collaborate on experiments and reports.",
      members: 6,
      progress: 40,
      nextMeeting: "Wednesday, 1:00 PM",
      tags: ["Chemistry", "Lab Work", "Organic Chemistry"],
    },
    {
      id: 5,
      name: "Literature Analysis Circle",
      course: "ENGL 250",
      description: "A discussion group focused on analyzing classic and contemporary literature.",
      members: 10,
      progress: 65,
      nextMeeting: "Thursday, 5:00 PM",
      tags: ["Literature", "Analysis", "Discussion"],
    },
  ]
}

