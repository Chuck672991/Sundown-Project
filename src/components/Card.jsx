import React from 'react'
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";


import { motion } from "framer-motion"


function Card({data,reference}) {
  return (
    <motion.div drag whileDrag={{scale:1.2}} dragTransition={{bounceStiffness:100,bounceDamping:10}} dragElastic={.1} dragConstraints={reference} className="w-[200px] flex-shrink-0 relative h-[250px] bg-zinc-900/90 rounded-[40px] p-6 text-white overflow-hidden">
        {data.icon}
        <p className='text-xs  text-clip leading-tight mt-3 ' style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{data.desc}</p>
 
      <div className='footer absolute left-0 bottom-0  w-full  '>
        <div className='flex mb-1 px-5 py-5 items-center justify-between'>
          <h5 className='text-xs'>{data.fileSize}</h5>
          <span className='flex rounded-full w-7 h-7 bg-zinc-200 justify-center items-center '> 
          {data.close?<IoIosClose color='black'/>:<LuDownload size=".7em" color='#000'/>}
          

          </span>
        </div>
    { 
      data.tag.isOpen && 
        <div className={`tag w-full py-4 ${data.tag.tagColor==="blue"?"bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
        <h4 className='text-sm font-semibold'>{data.tag.tagTitle}</h4>
      </div>
 
} 
      </div>
    </motion.div>

    ) 
}

export default Card