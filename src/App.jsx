import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Change from './case'
import Mode from './darkMode'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Change/>
      
    </div>
  )
}

export default App
