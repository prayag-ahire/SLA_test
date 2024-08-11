import React from 'react'

const Message2 = ({label,img}) => {
  return (
    <div className='flex flex-row '>
      <div className='ml-3'>
        <img className="w-10 rounded-full ml-2 mt-4" src='..\src\assets\kirito_2.jpg'/>
        <div className='ml-1 mr-1 mt-1 text-slate-800 text-sm '>just now</div>
      </div>
      <div >
        <div className='mt-8  bg-black text-white mr-2 rounded-tr-lg rounded-br-lg rounded-bl-lg pl-1 pr-1'>{label}</div>
      </div>
    </div>
  )
}

export default Message2