const StartScreen = ({ appDescription, onStart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white p-12 text-center">
        <h1 className="text-4xl font-bold mb-6">Fitness App Survey</h1>
        <p className="text-primary-100 text-base leading-relaxed max-w-2xl mx-auto mb-8">
          {appDescription}
        </p>
        <p className="text-primary-200 text-sm mb-8">
          This short survey helps us understand whether this idea is appealing and how it could be improved.
        </p>
        <button
          onClick={onStart}
          className="bg-white text-primary-700 font-bold py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg"
        >
          Start Survey
        </button>
      </div>
      <div className="p-8 text-center">
        <div className="bg-primary-50 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-gray-800 mb-2">What to expect:</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• 15 quick questions</li>
            <li>• Takes less than 5 minutes</li>
            <li>• Your feedback will help shape this app</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default StartScreen

