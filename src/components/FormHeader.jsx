const FormHeader = ({ appDescription, currentStep, totalSteps }) => {
  const progress = totalSteps > 0 ? ((currentStep + 1) / totalSteps) * 100 : 0
  
  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white p-8">
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-3">Fitness App Survey</h1>
        {appDescription && (
          <p className="text-primary-100 text-sm leading-relaxed max-w-3xl">{appDescription}</p>
        )}
      </div>
      
      {totalSteps > 0 && (
        <div className="mt-6">
          <div className="flex justify-between text-sm mb-2">
            <span>Question {currentStep + 1} of {totalSteps}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-primary-500 rounded-full h-2.5">
            <div 
              className="bg-white h-2.5 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default FormHeader

