import { useState } from 'react'
import Combination from './components/combination'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Combination />
    </div>
  )
}

export default App
