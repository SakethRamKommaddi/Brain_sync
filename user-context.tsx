"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import type { UserProfile } from "@/lib/user-store"
import { authStore, initializeAuthStore } from "@/lib/auth-store"

interface UserContextType {
  user: UserProfile | null
  loading: boolean
  login: (email: string, password: string) => Promise<UserProfile | null>
  register: (userData: Partial<UserProfile> & { email: string; password: string }) => Promise<UserProfile>
  updateUser: (data: Partial<UserProfile>) => void
  addInterest: (interestId: string) => void
  removeInterest: (interestId: string) => void
  joinGroup: (groupId: number) => void
  leaveGroup: (groupId: number) => void
  addStudyHours: (hours: number, subject: string) => void
  completeQuiz: (quizId: string, score: number) => void
  masterFlashcard: (cardId: string) => void
  completeTask: (taskId: string) => void
  findSimilarUsers: (limit?: number) => UserProfile[]
  logout: () => void
  addCoins: (amount: number) => void
}

const UserContext = createContext<UserContextType>({
  user: null,
  loading: true,
  login: async () => null,
  register: async () => ({
    id: "",
    name: "",
    email: "",
    password: "",
    role: "student",
    interests: [],
    joinedGroups: [],
    completedCourses: [],
    progress: { overallProgress: 0, courseProgress: {}, studyHours: 0, tasksCompleted: 0 },
    achievements: [],
    flashcards: { created: [], mastered: [] },
    quizzes: { completed: [], scores: {} },
    studySessions: [],
    coins: 0,
    completedTasks: [],
    createdGroups: [],
  }),
  updateUser: () => {},
  addInterest: () => {},
  removeInterest: () => {},
  joinGroup: () => {},
  leaveGroup: () => {},
  addStudyHours: () => {},
  completeQuiz: () => {},
  masterFlashcard: () => {},
  completeTask: () => {},
  findSimilarUsers: () => [],
  logout: () => {},
  addCoins: () => {},
})

// Save user data to localStorage
const saveUserToStorage = (user: UserProfile) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("brainsync_user", JSON.stringify(user))
    localStorage.setItem("brainsync_auth", "true")
  }
}

// Get user data from localStorage
const getUserFromStorage = (): UserProfile | null => {
  if (typeof window !== "undefined") {
    const userData = localStorage.getItem("brainsync_user")
    if (userData) {
      return JSON.parse(userData)
    }
  }
  return null
}

// Clear user data from localStorage
const clearUserFromStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("brainsync_user")
    localStorage.removeItem("brainsync_auth")
  }
}

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Initialize user data
    const initializeUser = async () => {
      try {
        // First check localStorage for persisted user data
        const storedUser = getUserFromStorage()

        if (storedUser) {
          setUser(storedUser)
          setLoading(false)
          return
        }

        // If no persisted data, initialize from auth store
        const userData = initializeAuthStore()
        if (userData) {
          setUser(userData)
          saveUserToStorage(userData)
        }
      } catch (error) {
        console.error("Error initializing user:", error)
      } finally {
        setLoading(false)
      }
    }

    initializeUser()
  }, [])

  const login = async (email: string, password: string) => {
    try {
      const loggedInUser = authStore.login(email, password)
      if (loggedInUser) {
        setUser(loggedInUser)
        saveUserToStorage(loggedInUser)
        return loggedInUser
      }
      return null
    } catch (error) {
      console.error("Login error:", error)
      return null
    }
  }

  const register = async (userData: Partial<UserProfile> & { email: string; password: string }) => {
    try {
      const newUser = authStore.register({
        ...userData,
        coins: 100, // Start with 100 coins
        completedTasks: [],
        createdGroups: [],
        flashcards: { created: [], mastered: [] },
        quizzes: { completed: [], scores: {} },
        studySessions: [],
      })
      setUser(newUser)
      saveUserToStorage(newUser)
      return newUser
    } catch (error) {
      console.error("Registration error:", error)
      throw error
    }
  }

  const updateUser = (data: Partial<UserProfile>) => {
    if (!user) return

    try {
      const updatedUser = authStore.updateUser(user.id, data)
      if (updatedUser) {
        setUser(updatedUser)
        saveUserToStorage(updatedUser)
      }
    } catch (error) {
      console.error("Update user error:", error)
    }
  }

  const addInterest = (interestId: string) => {
    if (!user) return

    const updatedInterests = [...user.interests]
    if (!updatedInterests.includes(interestId)) {
      updatedInterests.push(interestId)
      updateUser({ interests: updatedInterests })
    }
  }

  const removeInterest = (interestId: string) => {
    if (!user) return

    const updatedInterests = user.interests.filter((id) => id !== interestId)
    updateUser({ interests: updatedInterests })
  }

  const joinGroup = (groupId: number) => {
    if (!user) return

    const updatedGroups = [...user.joinedGroups]
    if (!updatedGroups.includes(groupId)) {
      updatedGroups.push(groupId)
      updateUser({ joinedGroups: updatedGroups })

      // Add coins for joining a group
      addCoins(20)
    }
  }

  const leaveGroup = (groupId: number) => {
    if (!user) return

    const updatedGroups = user.joinedGroups.filter((id) => id !== groupId)
    updateUser({ joinedGroups: updatedGroups })
  }

  const addStudyHours = (hours: number, subject: string) => {
    if (!user) return

    const totalHours = (user.progress.studyHours || 0) + hours

    // Update course progress if applicable
    const courseProgress = { ...user.progress.courseProgress }

    // Update overall progress (simplified calculation)
    const overallProgress = Math.min(100, Math.round((user.progress.overallProgress + hours / 10) * 10) / 10)

    updateUser({
      progress: {
        ...user.progress,
        studyHours: totalHours,
        courseProgress,
        overallProgress,
      },
    })

    // Add coins for studying
    addCoins(hours * 5)
  }

  const completeQuiz = (quizId: string, score: number) => {
    if (!user) return

    // Ensure quizzes object exists
    const quizzes = user.quizzes || { completed: [], scores: {} }
    const completedQuizzes = [...(quizzes.completed || [])]
    const quizScores = { ...(quizzes.scores || {}) }

    if (!completedQuizzes.includes(quizId)) {
      completedQuizzes.push(quizId)

      // Add coins based on score
      const coinsEarned = Math.floor(score / 10) * 5
      addCoins(coinsEarned)
    }

    quizScores[quizId] = score

    updateUser({
      quizzes: {
        completed: completedQuizzes,
        scores: quizScores,
      },
    })
  }

  const masterFlashcard = (cardId: string) => {
    if (!user) return

    // Ensure flashcards object exists
    const flashcards = user.flashcards || { created: [], mastered: [] }
    const masteredCards = [...(flashcards.mastered || [])]

    if (!masteredCards.includes(cardId)) {
      masteredCards.push(cardId)

      updateUser({
        flashcards: {
          created: flashcards.created || [],
          mastered: masteredCards,
        },
      })

      // Add coins for mastering a flashcard
      addCoins(5)
    }
  }

  const completeTask = (taskId: string) => {
    if (!user) return

    // Track completed tasks
    const completedTasks = [...(user.completedTasks || [])]
    if (!completedTasks.includes(taskId)) {
      completedTasks.push(taskId)

      // Increment the tasksCompleted count
      const tasksCompleted = (user.progress.tasksCompleted || 0) + 1

      updateUser({
        completedTasks,
        progress: {
          ...user.progress,
          tasksCompleted,
        },
      })

      // Add coins for completing a task
      addCoins(25)
    }
  }

  const addCoins = (amount: number) => {
    if (!user) return

    const currentCoins = user.coins || 0
    updateUser({ coins: currentCoins + amount })
  }

  const findSimilarUsers = (limit = 5) => {
    if (!user) return []

    return authStore.findSimilarUsers(user.id, limit)
  }

  const logout = () => {
    authStore.logout()
    setUser(null)
    clearUserFromStorage()
  }

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        updateUser,
        addInterest,
        removeInterest,
        joinGroup,
        leaveGroup,
        addStudyHours,
        completeQuiz,
        masterFlashcard,
        completeTask,
        findSimilarUsers,
        logout,
        addCoins,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)

