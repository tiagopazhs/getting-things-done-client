import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>This is the Getting things done project 🚀</h1>
      <div className="card">
        <p>
          Here we will create the projects screen
        </p>
      </div>
      <button onClick={() => setCount((count) => count + 1)}>
        This is an example of counter {count}
      </button>
    </>
  )
}

export default App
