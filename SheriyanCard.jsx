import React from 'react'
import Background from "./src/components/Background"
import Foreground from "./src/components/Foreground"

function SheriyanCard() {
  return (
    <div className='relative bg-sky-800/200 w-full h-screen'>
     <Background/>
     <Foreground />
    </div>
  )
}

export default SheriyanCard