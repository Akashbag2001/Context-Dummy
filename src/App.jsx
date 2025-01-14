import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import { useContext } from 'react'
import { counterContext } from './context/Counter'

function App() {
  const counterState = useContext(counterContext)
  console.log(counterState)
  return (
    <div className='flex flex-col justify-center items-center gap-10'>
      <h1 className='text-3xl font-bold underline'>Count is {counterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}

export default App
