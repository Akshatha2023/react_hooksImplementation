import React ,{useState} from 'react'

function Counterf() {
   const[count,setCount] =useState(0)
  return (
    <div>
        <button onClick={() => setCount(count+1)}>Counter</button>
    </div>
  )
}

export default Counterf