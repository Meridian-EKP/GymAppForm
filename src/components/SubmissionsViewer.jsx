import { useState, useEffect } from 'react'
import { getSubmissions, clearSubmissions, exportSubmissions } from '../utils/submissionStorage'
import PoweredByFooter from './PoweredByFooter'

const SubmissionsViewer = () => {
  const [submissions, setSubmissions] = useState([])
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    loadSubmissions()
    // Load questions structure (you might want to move this to a shared file)
    setQuestions([
      { name: 'training_frequency', label: 'How often do you currently train?' },
      { name: 'fitness_level', label: 'What best describes you?' },
      { name: 'main_goal', label: 'What is your main fitness goal right now?' },
      { name: 'consistency_difficulty', label: 'How hard do you find it to stay consistent with your fitness goals?' },
      { name: 'motivation_type', label: 'Which of these would motivate you the most?' },
      { name: 'money_motivation', label: 'Would putting money on the line motivate you to train harder?' },
      { name: 'goal_decision', label: 'How should a goal hit be validated?' },
      { name: 'entry_fee', label: 'What entry fee per challenge feels reasonable?' },
      { name: 'pot_outcome', label: 'If no one hits their goal, what should happen to the pot?' },
      { name: 'pt_payment', label: 'Would you pay extra to have a real personal trainer involved in your challenge?' },
    ])
  }, [])

  const loadSubmissions = () => {
    const data = getSubmissions()
    setSubmissions(data)
  }

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all submissions? This cannot be undone.')) {
      clearSubmissions()
      loadSubmissions()
    }
  }

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString()
  }

  const getAnswerLabel = (questionName, answer) => {
    if (Array.isArray(answer)) {
      return answer.join(', ')
    }
    return answer || 'No answer'
  }

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8">
            <h1 className="text-4xl font-bold mb-2">Form Submissions</h1>
            <p className="text-primary-100">Total submissions: {submissions.length}</p>
          </div>
          
          <div className="p-6 bg-gray-800">
            <div className="flex gap-4 mb-6">
              <button
                onClick={exportSubmissions}
                className="btn-primary"
              >
                Export JSON
              </button>
              <button
                onClick={handleClear}
                className="btn-secondary"
              >
                Clear All
              </button>
            </div>

            {submissions.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No submissions yet.</p>
              </div>
            ) : (
              <div className="space-y-8">
                {submissions.map((submission, index) => (
                  <div
                    key={submission.id}
                    className="bg-gray-700 rounded-lg p-6 border-l-4 border-primary-500"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-xl font-bold text-white">
                        Submission #{submissions.length - index}
                      </h2>
                      <span className="text-gray-400 text-sm">
                        {formatDate(submission.timestamp)}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      {questions.map((question) => {
                        const answer = submission[question.name]
                        if (!answer) return null
                        
                        return (
                          <div key={question.name} className="border-b border-gray-600 pb-3 last:border-0">
                            <div className="text-primary-400 font-semibold mb-1">
                              {question.label}
                            </div>
                            <div className="text-white">
                              {getAnswerLabel(question.name, answer)}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <PoweredByFooter />
      </div>
    </div>
  )
}

export default SubmissionsViewer

