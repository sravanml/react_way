import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(1)
  // let counter = 1

  const addValue = () => {
    setCounter(counter + 1)
  }
  const remValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
     <h1>React Counter </h1>
     <h2>counter value :  {counter}</h2> 
     <button
     onClick={addValue}>
      add value</button>{"  "}
     <button
     onClick={remValue}>
      remove value</button>
     <p>footer:  {counter} </p>
    </>
  )
}

export default App
/* Interview question
what's the output
const addValue = () => {
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
  }
  if the intial value is 1 then output is also 1
  how to increment it?
  since it is a method, there are callback
  for incrementing it the given times we need to create a previous state so that every line executes
  state gets updated based on the previous state.Also this problem comes under batching. 
  Hence final code looks like
  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1) // getting access of updated state value
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }
  this is also secase of state*/