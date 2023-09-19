import React from 'react'
import ComponentF from './ComponentF'
import { useContext } from 'react'
import { UserContext,ChannelContext } from '../../App'



function ComponentE() {

  const user= useContext(UserContext)
  const lastname=useContext(ChannelContext)
  return (
    <div>
      {user}-{lastname}
    </div>
  )
}

export default ComponentE