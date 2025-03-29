// User types
export interface UserProfile {
  id: string
  name: string
  email: string
  password: string
  role: "student" | "teacher" | "admin"
  interests: string[]
  joinedGroups: number[]
  completedCourses: string[]
  progress: {
    overallProgress: number
    courseProgress: Record<string, number>
    studyHours: number
    tasksCompleted: number
  }
  achievements: string[]
  flashcards: {
    created: string[]
    mastered: string[]
  }
  quizzes: {
    completed: string[]
    scores: Record<string, number>
  }
  studySessions: {
    date: string
    duration: number
    subject: string
  }[]
  coins: number
  completedTasks: string[]
  createdGroups: number[]
}

// Interest categories
export const interestCategories = [
  {
    name: "Computer Science",
    interests: [
      { id: "prog", name: "Programming" },
      { id: "web", name: "Web Development" },
      { id: "mobile", name: "Mobile Development" },
      { id: "ai", name: "Artificial Intelligence" },
      { id: "ml", name: "Machine Learning" },
      { id: "ds", name: "Data Science" },
      { id: "db", name: "Databases" },
      { id: "algo", name: "Algorithms" },
    ],
  },
  {
    name: "Mathematics",
    interests: [
      { id: "math", name: "Mathematics" },
      { id: "stats", name: "Statistics" },
      { id: "calc", name: "Calculus" },
      { id: "algebra", name: "Algebra" },
    ],
  },
  {
    name: "Science",
    interests: [
      { id: "phys", name: "Physics" },
      { id: "chem", name: "Chemistry" },
      { id: "bio", name: "Biology" },
      { id: "astro", name: "Astronomy" },
    ],
  },
  {
    name: "Humanities",
    interests: [
      { id: "hist", name: "History" },
      { id: "lit", name: "Literature" },
      { id: "phil", name: "Philosophy" },
      { id: "psych", name: "Psychology" },
    ],
  },
  {
    name: "Business",
    interests: [
      { id: "econ", name: "Economics" },
      { id: "business", name: "Business" },
      { id: "finance", name: "Finance" },
      { id: "marketing", name: "Marketing" },
    ],
  },
  {
    name: "Arts",
    interests: [
      { id: "art", name: "Art" },
      { id: "music", name: "Music" },
      { id: "design", name: "Design" },
      { id: "film", name: "Film" },
    ],
  },
]

// Flatten all interests for easier access
export const allInterests = interestCategories.flatMap((category) => category.interests)

// Sample user data
export const sampleUsers: UserProfile[] = [
  {
    id: "user1",
    name: "Ram Saketh",
    email: "ram@example.com",
    password: "password123",
    role: "student",
    interests: ["prog", "ai", "ml", "math", "phys"],
    joinedGroups: [1, 2, 3, 4],
    completedCourses: ["CS101", "MATH201"],
    progress: {
      overallProgress: 65,
      courseProgress: {
        CS401: 70,
        PHYS301: 60,
        MATH202: 80,
      },
      studyHours: 120,
      tasksCompleted: 25,
    },
    achievements: ["first_login", "quiz_master", "flashcard_guru"],
    flashcards: {
      created: ["custom1", "custom2"],
      mastered: ["cs1", "cs2", "math1", "phys1"],
    },
    quizzes: {
      completed: ["cs-quiz-1", "math-quiz-1"],
      scores: {
        "cs-quiz-1": 85,
        "math-quiz-1": 90,
      },
    },
    studySessions: [
      {
        date: "2023-10-15",
        duration: 2.5,
        subject: "Artificial Intelligence",
      },
      {
        date: "2023-10-16",
        duration: 1.5,
        subject: "Calculus",
      },
    ],
    coins: 500,
    completedTasks: ["task1", "task3", "task5"],
    createdGroups: [1, 3],
  },
  {
    id: "user2",
    name: "Priya Sharma",
    email: "priya@example.com",
    password: "password123",
    role: "student",
    interests: ["bio", "chem", "psych", "lit"],
    joinedGroups: [5, 6],
    completedCourses: ["BIO101", "CHEM201"],
    progress: {
      overallProgress: 70,
      courseProgress: {
        BIO301: 75,
        CHEM310: 65,
        PSYCH301: 85,
      },
      studyHours: 150,
      tasksCompleted: 30,
    },
    achievements: ["first_login", "study_streak"],
    flashcards: {
      created: ["custom3", "custom4"],
      mastered: ["bio1", "bio2", "chem1", "chem2"],
    },
    quizzes: {
      completed: ["bio-quiz-1"],
      scores: {
        "bio-quiz-1": 92,
      },
    },
    studySessions: [
      {
        date: "2023-10-14",
        duration: 3,
        subject: "Molecular Biology",
      },
      {
        date: "2023-10-17",
        duration: 2,
        subject: "Organic Chemistry",
      },
    ],
    coins: 450,
    completedTasks: ["task2", "task6", "task8"],
    createdGroups: [5],
  },
  {
    id: "demo",
    name: "Demo User",
    email: "demo@example.com",
    password: "demo123",
    role: "student",
    interests: ["prog", "web", "math", "ds", "ai"],
    joinedGroups: [3, 7, 9],
    completedCourses: ["CS101", "WEB201"],
    progress: {
      overallProgress: 40,
      courseProgress: {
        CS401: 45,
        CS430: 35,
        MATH202: 50,
      },
      studyHours: 80,
      tasksCompleted: 15,
    },
    achievements: ["first_login", "task_completer"],
    flashcards: {
      created: [],
      mastered: ["cs1", "math1", "math2"],
    },
    quizzes: {
      completed: ["cs-quiz-1"],
      scores: {
        "cs-quiz-1": 75,
      },
    },
    studySessions: [
      {
        date: "2023-10-18",
        duration: 2,
        subject: "Web Development",
      },
      {
        date: "2023-10-19",
        duration: 1.5,
        subject: "Data Structures",
      },
    ],
    coins: 300,
    completedTasks: ["task1", "task5", "task9"],
    createdGroups: [9],
  },
]

// Get user by ID
export const getUserById = (id: string): UserProfile | undefined => {
  return sampleUsers.find((user) => user.id === id)
}

// Get user by email
export const getUserByEmail = (email: string): UserProfile | undefined => {
  return sampleUsers.find((user) => user.email === email)
}

