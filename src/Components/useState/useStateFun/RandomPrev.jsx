import React, { useState } from 'react'

function RandomPrev() {

    const [count,setCount] = useState(0)

    function updateCounter()
    {
        let item=Math.floor(Math.random()*10) 
        //----This will display just current count----
        // setCount(item)
        // console.log(item)

        //-----TO get Previous Count------
        // setCount((prev)=>{
        //     console.log(prev)
        //     return item
        // })


        //---Writing conditions inside SetCount`  -----
        setCount((prev)=>{
           if(prev<5)
           {
            alert("last item is less than 5")
           }
           console.log(prev)
          return item
      })
    }
    return (
    <div>
        Random Number:{count}
      <button onClick={updateCounter}>Click to get Random Num</button>
    </div>
  );
}

export default RandomPrev