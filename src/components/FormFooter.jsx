const FormFooter = ({ currentStep, totalSteps, currentQuestion, formData, onNext, onPrevious }) => {
  if (totalSteps === 0) {
    return null
  }
  
  const isFirstStep = currentStep === 0
  const isLastStep = currentStep === totalSteps - 1
  const isAnswerRequired = currentQuestion?.required && !formData[currentQuestion?.name]
  
  return (
    <div className="mt-8 pt-6 border-t border-gray-200">
      {isAnswerRequired && (
        <p className="text-red-500 text-sm mb-4 text-center">
          Please answer this question to continue
        </p>
      )}
      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={onPrevious}
          disabled={isFirstStep}
          className={`btn-secondary ${isFirstStep ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Previous
        </button>
        
        {isLastStep ? (
          <button
            type="submit"
            disabled={isAnswerRequired}
            className={`btn-primary ${isAnswerRequired ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Submit Survey
          </button>
        ) : (
          <button
            type="button"
            onClick={onNext}
            disabled={isAnswerRequired}
            className={`btn-primary ${isAnswerRequired ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Next
          </button>
        )}
      </div>
    </div>
  )
}

export default FormFooter

