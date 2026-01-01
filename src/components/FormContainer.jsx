import { useState } from 'react'
import FormHeader from './FormHeader'
import FormQuestions from './FormQuestions'
import FormFooter from './FormFooter'
import PoweredByFooter from './PoweredByFooter'
import StartScreen from './StartScreen'

const FormContainer = () => {
  const [hasStarted, setHasStarted] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const appDescription = "This app lets friends create fitness challenges together and put money into a shared pot. At the end of the challenge, only the people who hit their goals get a share of the pot. The goal of the app is to make fitness more motivating, social, and accountable."
  
  const questions = [
    // Section 1: About You
    {
      name: 'training_frequency',
      label: 'How often do you currently train?',
      type: 'radio',
      section: 'About You',
      required: true,
      options: [
        'Daily',
        '3–5 times per week',
        '1–2 times per week',
        'Rarely'
      ]
    },
    {
      name: 'fitness_level',
      label: 'What best describes you?',
      type: 'radio',
      section: 'About You',
      required: true,
      options: [
        'Gym beginner',
        'Regular gym-goer',
        'Very serious about training',
        'Personal Trainer / Coach'
      ]
    },
    {
      name: 'main_goal',
      label: 'What is your main fitness goal right now?',
      type: 'radio',
      section: 'About You',
      required: true,
      options: [
        'Build muscle',
        'Lose fat',
        'Get stronger',
        'Improve general fitness',
        'Stay consistent'
      ]
    },
    // Section 2: Motivation & Accountability
    {
      name: 'consistency_difficulty',
      label: 'How hard do you find it to stay consistent with your fitness goals?',
      type: 'radio',
      section: 'Motivation & Accountability',
      required: true,
      options: [
        'Very easy',
        'Somewhat easy',
        'Somewhat hard',
        'Very hard'
      ]
    },
    {
      name: 'motivation_type',
      label: 'Which of these would motivate you the most?',
      type: 'radio',
      section: 'Motivation & Accountability',
      required: true,
      options: [
        'Friendly competition',
        'Accountability to friends',
        'Financial incentive',
        'Coaching/support',
        'Personal progress only'
      ]
    },
    {
      name: 'money_motivation',
      label: 'Would putting money on the line motivate you to train harder?',
      type: 'radio',
      section: 'Motivation & Accountability',
      required: true,
      options: [
        'Definitely',
        'Maybe',
        'Probably not',
        'Not at all'
      ]
    },
    // Section 3: App Concept
    {
      name: 'app_appeal',
      label: 'How appealing is this app idea overall?',
      type: 'radio',
      section: 'App Concept',
      required: true,
      options: [
        'Very appealing',
        'Somewhat appealing',
        'Neutral',
        'Not appealing'
      ]
    },
    {
      name: 'try_likelihood',
      label: 'How likely would you be to try this app if it launched?',
      type: 'radio',
      section: 'App Concept',
      required: true,
      options: [
        'Very likely',
        'Likely',
        'Unsure',
        'Unlikely'
      ]
    },
    {
      name: 'use_with',
      label: 'Who would you most likely use this app with?',
      type: 'radio',
      section: 'App Concept',
      required: true,
      options: [
        'Close friends',
        'Gym friends',
        'Work colleagues',
        'Online friends',
        'I wouldn\'t use it with others'
      ]
    },
    // Section 4: Fairness & Proof
    {
      name: 'proof_type',
      label: 'What type of proof would you be comfortable submitting?',
      type: 'radio',
      section: 'Fairness & Proof',
      required: true,
      options: [
        'Photos',
        'Short videos',
        'Health app data (steps, workouts, etc.)',
        'Trust-based only'
      ]
    },
    {
      name: 'voting_comfort',
      label: 'Would you be comfortable voting on other people\'s proof?',
      type: 'radio',
      section: 'Fairness & Proof',
      required: true,
      options: [
        'Yes',
        'Maybe',
        'No'
      ]
    },
    {
      name: 'goal_decision',
      label: 'Who do you think should decide if a goal is completed?',
      type: 'radio',
      section: 'Fairness & Proof',
      required: true,
      options: [
        'Group vote',
        'Personal Trainer',
        'Combination of both',
        'Automatic tracking only'
      ]
    },
    // Section 5: Money & PTs
    {
      name: 'entry_fee',
      label: 'What entry fee per challenge feels reasonable?',
      type: 'radio',
      section: 'Money & PTs',
      required: true,
      options: [
        '£5',
        '£10',
        '£20',
        '£50+',
        'I wouldn\'t put money in'
      ]
    },
    {
      name: 'pot_outcome',
      label: 'If no one hits their goal, what should happen to the pot?',
      type: 'radio',
      section: 'Money & PTs',
      required: true,
      options: [
        'Refund everyone',
        'Donate to charity',
        'Roll over to another challenge',
        'I don\'t mind'
      ]
    },
    {
      name: 'pt_payment',
      label: 'Would you pay extra to have a real personal trainer involved in your challenge?',
      type: 'radio',
      section: 'Money & PTs',
      required: true,
      options: [
        'Yes',
        'Maybe',
        'No'
      ]
    }
  ]
  
  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleNext = () => {
    const currentQuestion = questions[currentStep]
    // Check if current question is required and answered
    if (currentQuestion?.required && !formData[currentQuestion.name]) {
      return // Don't proceed if required question is not answered
    }
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1)
    }
  }
  
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    // TODO: Handle form submission (send to API, etc.)
  }
  
  const handleStart = () => {
    setHasStarted(true)
  }
  
  if (!hasStarted) {
    return (
      <div className="w-full max-w-2xl">
        <StartScreen 
          appDescription={appDescription}
          onStart={handleStart}
        />
        <PoweredByFooter />
      </div>
    )
  }
  
  if (isSubmitted) {
    return (
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 text-center">
            <div className="text-6xl mb-4">✓</div>
            <h1 className="text-3xl font-bold mb-2">Thank You!</h1>
            <p className="text-green-100 text-lg">Your responses have been submitted successfully.</p>
          </div>
          <div className="p-12 text-center">
            <p className="text-gray-700 text-lg mb-6">
              Your feedback helps us build a better fitness app experience. We appreciate you taking the time to share your thoughts!
            </p>
            <div className="bg-primary-50 rounded-lg p-6">
              <p className="text-sm text-gray-600">
                <strong>What's next?</strong> We'll review your responses and use them to improve our app concept. 
                Stay tuned for updates!
              </p>
            </div>
          </div>
        </div>
        <PoweredByFooter />
      </div>
    )
  }
  
  return (
    <div className="w-full max-w-2xl">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        <FormHeader 
          appDescription={null}
          currentStep={currentStep}
          totalSteps={questions.length}
        />
        
        <form onSubmit={handleSubmit} className="p-8">
          <FormQuestions
            questions={questions}
            currentStep={currentStep}
            formData={formData}
            onInputChange={handleInputChange}
          />
          
          <FormFooter
            currentStep={currentStep}
            totalSteps={questions.length}
            currentQuestion={questions[currentStep]}
            formData={formData}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        </form>
      </div>
      <PoweredByFooter />
    </div>
  )
}

export default FormContainer

