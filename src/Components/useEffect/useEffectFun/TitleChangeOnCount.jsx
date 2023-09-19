
//To optimise performance we will provide dependencies

import React, {useState, useEffect } from 'react'

function TitleChangeOnCount() {
    const [ count, setCount] = useState(3)
    const [ name, setName] = useState('')

    useEffect(() => {
        console.log('updating doc title')
        document.title = `You clicked ${count} times`
       
    },[])
    
  return (
    <div>
         <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
         <input type="text" value={name} onChange={e=>setName(e.target.value) } />
    </div>
    
  )
}

export default TitleChangeOnCount












//2.Here we caused the sideeffct by updating the title based on count value by using useEffect------its updating on every single render and if we type single letter also its updating
//many rerender cause performance problem

// import React, {useState, useEffect } from 'react'

// function TitleChangeOnCount() {
//     const [ count, setCount] = useState(0)
//     const [ name, setName] = useState('')

//     useEffect(() => {
//         console.log('updating doc title')
//         document.title = `You clicked ${count} times`
       
//     })
    
//   return (
//     <div>
//          <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
//          <input type="text" value={name} onChange={e=>setName(e.target.value) } />
//     </div>
    
//   )
// }

// export default TitleChangeOnCount




//1.Here we caused the sideeffct by updating the title based on count value by using useEffect

// import React, {useState, useEffect } from 'react'

// function TitleChangeOnCount() {
//     const [ count, setCount] = useState(0)

//     useEffect(() => {
//         console.log('updating')
//         document.title = `You clicked ${count} times`
       
//     })
    
//   return (
//     <div>
//          <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
//     </div>
    
//   )
// }

// export default TitleChangeOnCount