import QuestionRenderer from './QuestionRenderer'

const FormQuestions = ({ questions, currentStep, formData, onInputChange }) => {
  if (questions.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-lg">
          <p>Waiting for questions to be added...</p>
          <p className="text-sm mt-2">Please provide the app description and questions.</p>
        </div>
      </div>
    )
  }
  
  const currentQuestion = questions[currentStep]
  
  if (!currentQuestion) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No question available at this step.</p>
      </div>
    )
  }
  
  // Check if this is the first question of a new section
  const isNewSection = currentStep === 0 || 
    questions[currentStep - 1]?.section !== currentQuestion.section
  
  // Get section number by finding unique sections before current
  const getSectionNumber = () => {
    const sections = []
    for (let i = 0; i <= currentStep; i++) {
      const section = questions[i]?.section
      if (section && !sections.includes(section)) {
        sections.push(section)
      }
    }
    return sections.length
  }
  
  return (
    <div className="min-h-[300px]">
      {isNewSection && currentQuestion.section && (
        <div className="mb-6 pb-4 border-b-2 border-primary-600">
          <h2 className="text-2xl font-bold text-primary-400">
            Section {getSectionNumber()}: {currentQuestion.section}
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            {currentQuestion.section === 'About You' && 'Tell us a bit about yourself'}
            {currentQuestion.section === 'Motivation & Accountability' && 'Understanding what drives you'}
            {currentQuestion.section === 'Fairness & Proof' && 'How challenges should work'}
            {currentQuestion.section === 'Money & PTs' && 'Financial aspects and trainers'}
          </p>
        </div>
      )}
      <QuestionRenderer
        question={currentQuestion}
        value={formData[currentQuestion.name] || ''}
        onChange={(value) => onInputChange(currentQuestion.name, value)}
      />
    </div>
  )
}

export default FormQuestions

