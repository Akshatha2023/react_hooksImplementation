//timer program with count  dependency,

import React, { useEffect, useState } from 'react'

function IntervalCounter() {

    const[count,setCount] = useState(0)
    const tick=()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        console.log('useEffect called');
        const interval= setInterval(tick,1000)
        return()=>{
            clearInterval(interval)
        }
    },[count])

    return (
    <div>{count}</div>
  )
}

export default IntervalCounter