const QuestionRenderer = ({ question, value, onChange }) => {
  const renderInput = () => {
    switch (question.type) {
      case 'text':
        return (
          <input
            type="text"
            name={question.name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="form-input"
            placeholder={question.placeholder || ''}
            required={question.required}
          />
        )
      
      case 'textarea':
        return (
          <textarea
            name={question.name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="form-input min-h-[120px] resize-none"
            placeholder={question.placeholder || ''}
            required={question.required}
          />
        )
      
      case 'select':
        return (
          <select
            name={question.name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="form-input"
            required={question.required}
          >
            <option value="">Select an option...</option>
            {question.options?.map((option, idx) => (
              <option key={idx} value={option.value || option}>
                {option.label || option}
              </option>
            ))}
          </select>
        )
      
      case 'radio':
        return (
          <div className="space-y-3">
            {question.options?.map((option, idx) => {
              const optionValue = option.value || option
              const optionLabel = option.label || option
              return (
                <label
                  key={idx}
                  className="flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:bg-primary-50 hover:border-primary-300"
                  style={{
                    borderColor: value === optionValue ? '#0ea5e9' : '#e5e7eb',
                    backgroundColor: value === optionValue ? '#f0f9ff' : 'white'
                  }}
                >
                  <input
                    type="radio"
                    name={question.name}
                    value={optionValue}
                    checked={value === optionValue}
                    onChange={(e) => onChange(e.target.value)}
                    className="ui-radio"
                    required={question.required}
                  />
                  <span className="ml-3 text-gray-700 font-medium">{optionLabel}</span>
                </label>
              )
            })}
          </div>
        )
      
      case 'checkbox':
        return (
          <div className="space-y-3">
            {question.options?.map((option, idx) => {
              const optionValue = option.value || option
              const optionLabel = option.label || option
              const isChecked = Array.isArray(value) && value.includes(optionValue)
              
              return (
                <label
                  key={idx}
                  className="flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:bg-primary-50 hover:border-primary-300"
                  style={{
                    borderColor: isChecked ? '#0ea5e9' : '#e5e7eb',
                    backgroundColor: isChecked ? '#f0f9ff' : 'white'
                  }}
                >
                  <input
                    type="checkbox"
                    name={question.name}
                    value={optionValue}
                    checked={isChecked}
                    onChange={(e) => {
                      const currentValues = Array.isArray(value) ? value : []
                      if (e.target.checked) {
                        onChange([...currentValues, optionValue])
                      } else {
                        onChange(currentValues.filter(v => v !== optionValue))
                      }
                    }}
                    className="ui-checkbox"
                  />
                  <span className="ml-3 text-gray-700 font-medium">{optionLabel}</span>
                </label>
              )
            })}
          </div>
        )
      
      case 'number':
        return (
          <input
            type="number"
            name={question.name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="form-input"
            placeholder={question.placeholder || ''}
            min={question.min}
            max={question.max}
            required={question.required}
          />
        )
      
      case 'email':
        return (
          <input
            type="email"
            name={question.name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="form-input"
            placeholder={question.placeholder || ''}
            required={question.required}
          />
        )
      
      default:
        return (
          <input
            type="text"
            name={question.name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="form-input"
            placeholder={question.placeholder || ''}
            required={question.required}
          />
        )
    }
  }
  
  return (
    <div className="space-y-4">
      <label className="form-label text-xl">
        {question.label}
        {question.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {question.description && (
        <p className="text-gray-600 text-sm mb-4">{question.description}</p>
      )}
      
      {renderInput()}
    </div>
  )
}

export default QuestionRenderer

