//Here we gave empty array as (secondargument) depenedency to stop calling useeeffect on everyrender
// we want to call useEffect only in initial render,it not depends on anything// WE mimic component didmount in this prgn

import React ,{useState,useEffect} from 'react'

function HookMouseXY() {

    const[x,setX]= useState(0)
    const[y,setY] = useState(0)

    const logMousePosition=e=>{
        console.log('Mouse Event');
        setX(e.clientX)
        setY(e.clientY)
    }


    useEffect(()=>{
        console.log('useEffect called');
        window.addEventListener('mousemove',logMousePosition)
        return()=>{
            console.log('Component unmounting code');
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])

  return (
    <div>
    Hooks X-{x} Y-{y}

    </div>
  )
}

export default HookMouseXY