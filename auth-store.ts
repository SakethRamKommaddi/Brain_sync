import { v4 as uuidv4 } from "uuid"
import type { UserProfile } from "./user-store"

// Demo user account
export const DEMO_USER: UserProfile = {
  id: "demo-user-1",
  name: "Demo User",
  email: "demo@brainsync.edu",
  password: "demo123",
  role: "student",
  interests: ["computer-science", "mathematics", "ai-ml"],
  joinedGroups: [1, 2],
  completedCourses: ["cs101", "math202"],
  progress: {
    overallProgress: 45,
    courseProgress: {
      cs101: 100,
      math202: 85,
      ai101: 30,
    },
    studyHours: 28,
    tasksCompleted: 12,
  },
  achievements: ["first-login", "group-joined", "quiz-master"],
  flashcards: {
    created: [],
    mastered: ["cs-1", "cs-3", "math-2"],
  },
  quizzes: {
    completed: ["quiz-cs-1", "quiz-math-1"],
    scores: {
      "quiz-cs-1": 85,
      "quiz-math-1": 92,
    },
  },
  studySessions: [
    {
      date: "2025-03-10",
      duration: 120,
      subject: "Computer Science",
    },
    {
      date: "2025-03-12",
      duration: 90,
      subject: "Mathematics",
    },
  ],
  coins: 350,
  completedTasks: ["task-1", "task-3", "task-5"],
  createdGroups: [],
}

// In-memory user store (for development purposes)
const users: Record<string, UserProfile> = {
  "demo-user-1": DEMO_USER,
}

// Load users from localStorage if available
const loadUsersFromStorage = (): void => {
  if (typeof window !== "undefined") {
    try {
      const storedUsers = localStorage.getItem("brainsync_users")
      if (storedUsers) {
        const parsedUsers = JSON.parse(storedUsers)
        Object.assign(users, parsedUsers)
      } else {
        // Initialize with demo user if no users exist
        saveUsersToStorage()
      }
    } catch (error) {
      console.error("Error loading users from storage:", error)
    }
  }
}

// Save users to localStorage
const saveUsersToStorage = (): void => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem("brainsync_users", JSON.stringify(users))
    } catch (error) {
      console.error("Error saving users to storage:", error)
    }
  }
}

// Initialize the auth store
export const initializeAuthStore = (): UserProfile | null => {
  loadUsersFromStorage()

  // Check if user is logged in
  if (typeof window !== "undefined") {
    const currentUserId = localStorage.getItem("brainsync_current_user")
    if (currentUserId && users[currentUserId]) {
      return users[currentUserId]
    }
  }

  return null
}

export const authStore = {
  // Login a user
  login: (email: string, password: string): UserProfile | null => {
    loadUsersFromStorage()

    const user = Object.values(users).find((u) => u.email === email && u.password === password)

    if (user) {
      // Save current user ID to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("brainsync_current_user", user.id)
      }
      return user
    }

    return null
  },

  // Register a new user
  register: (userData: Partial<UserProfile> & { email: string; password: string }): UserProfile => {
    loadUsersFromStorage()

    // Check if email already exists
    const existingUser = Object.values(users).find((u) => u.email === userData.email)
    if (existingUser) {
      throw new Error("User with this email already exists")
    }

    // Create new user
    const userId = uuidv4()
    const newUser: UserProfile = {
      id: userId,
      name: userData.name || "",
      email: userData.email,
      password: userData.password,
      role: userData.role || "student",
      interests: userData.interests || [],
      joinedGroups: userData.joinedGroups || [],
      completedCourses: userData.completedCourses || [],
      progress: userData.progress || {
        overallProgress: 0,
        courseProgress: {},
        studyHours: 0,
        tasksCompleted: 0,
      },
      achievements: userData.achievements || [],
      flashcards: userData.flashcards || {
        created: [],
        mastered: [],
      },
      quizzes: userData.quizzes || {
        completed: [],
        scores: {},
      },
      studySessions: userData.studySessions || [],
      coins: userData.coins || 0,
      completedTasks: userData.completedTasks || [],
      createdGroups: userData.createdGroups || [],
    }

    // Add user to store
    users[userId] = newUser

    // Save to localStorage
    saveUsersToStorage()

    // Set as current user
    if (typeof window !== "undefined") {
      localStorage.setItem("brainsync_current_user", userId)
    }

    return newUser
  },

  // Update user data
  updateUser: (userId: string, data: Partial<UserProfile>): UserProfile | null => {
    loadUsersFromStorage()

    if (users[userId]) {
      users[userId] = {
        ...users[userId],
        ...data,
      }

      // Save to localStorage
      saveUsersToStorage()

      return users[userId]
    }

    return null
  },

  // Get user by ID
  getUser: (userId: string): UserProfile | null => {
    loadUsersFromStorage()
    return users[userId] || null
  },

  // Find similar users based on interests
  findSimilarUsers: (userId: string, limit = 5): UserProfile[] => {
    loadUsersFromStorage()

    const currentUser = users[userId]
    if (!currentUser) return []

    return Object.values(users)
      .filter((u) => u.id !== userId) // Exclude current user
      .map((user) => {
        // Calculate similarity score based on common interests
        const commonInterests = user.interests.filter((interest) => currentUser.interests.includes(interest))

        return {
          user,
          score: commonInterests.length,
        }
      })
      .sort((a, b) => b.score - a.score) // Sort by similarity score
      .slice(0, limit) // Limit results
      .map((result) => result.user)
  },

  // Logout user
  logout: (): void => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("brainsync_current_user")
    }
  },
}

