import React from 'react'
import { counterContext } from '../context/Counter'
import { useContext } from 'react'
function Counter() {
    const counterState = useContext(counterContext)
  return (
    <div className='flex items-center justify-center gap-10'>
        <div className='px-10 py-2 bg-green-500 text-black rounded-md cursor-pointer font-bold shadow-md shadow-slate-600' onClick={()=>{counterState.setCount(counterState.count+1)}}>Increment</div>
        <div className='px-10 py-2 bg-red-500 text-black rounded-md cursor-pointer font-bold shadow-md shadow-slate-600'onClick={()=>{counterState.setCount(counterState.count-1)}}>Decrement</div>
    </div>
  )
}

export default Counter
