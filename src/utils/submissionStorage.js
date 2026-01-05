// Utility functions to save and retrieve form submissions

const STORAGE_KEY = 'fitness_app_submissions'

export const saveSubmission = (formData) => {
  try {
    const submissions = getSubmissions()
    const newSubmission = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...formData
    }
    submissions.push(newSubmission)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions))
    return newSubmission
  } catch (error) {
    console.error('Error saving submission:', error)
    return null
  }
}

export const getSubmissions = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error('Error retrieving submissions:', error)
    return []
  }
}

export const clearSubmissions = () => {
  try {
    localStorage.removeItem(STORAGE_KEY)
    return true
  } catch (error) {
    console.error('Error clearing submissions:', error)
    return false
  }
}

export const exportSubmissions = () => {
  const submissions = getSubmissions()
  const dataStr = JSON.stringify(submissions, null, 2)
  const dataBlob = new Blob([dataStr], { type: 'application/json' })
  const url = URL.createObjectURL(dataBlob)
  const link = document.createElement('a')
  link.href = url
  link.download = `submissions-${new Date().toISOString().split('T')[0]}.json`
  link.click()
  URL.revokeObjectURL(url)
}

