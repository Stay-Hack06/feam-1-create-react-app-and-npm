/** @jsx jsx */
import { TypingText } from "typing-text-animation"
import './App.css'


function App() {


  return (
   
      <div>
        <TypingText text={["hello", "world"]} />
        <TypingText text="hello" />
      </div>
    
  )
}

export default App
