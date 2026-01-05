import { useState } from 'react'
import FormContainer from './components/FormContainer'
import SubmissionsViewer from './components/SubmissionsViewer'
import './App.css'

function App() {
  // Check if we're viewing submissions (add ?view=submissions to URL)
  const urlParams = new URLSearchParams(window.location.search)
  const viewMode = urlParams.get('view')

  if (viewMode === 'submissions') {
    return <SubmissionsViewer />
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <FormContainer />
    </div>
  )
}

export default App

