import React,{useState} from 'react'
import HookMouseXY from './HookMouseXY'

function MouseContainer() {
const[display,setDisplay]= useState(true)

  return (
    <div>
        <button onClick={() => setDisplay(!display)}>Toggle display</button>
        {display && <HookMouseXY/>}
    </div>
  )
}

export default MouseContainer