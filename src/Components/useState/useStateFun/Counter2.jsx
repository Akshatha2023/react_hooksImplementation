import React, { useState } from 'react'

function Counter2() {
    const initialCount=0
    const [count,setCount]= useState(initialCount)

    // It will increases value only by one 
    // const incrementFive=() => {
    //     for(let i=0;i<5;i++){
    //     setCount(count+1)
    //     }
    // }

    const incrementFive=() => {
            for(let i=0;i<5;i++){
            setCount(prev=> prev+1)
            }
        }


  return (
    <div>
        Count:{count}
         <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prev =>prev+1)}> Increment</button>
        <button onClick={()=> setCount(prev =>prev-1)}>Decrement</button>
        <button onClick={incrementFive }>IncrementFive</button>
    </div>
  )
}

export default Counter2