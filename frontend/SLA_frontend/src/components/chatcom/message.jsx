import React from 'react'

const Message = ({label,img}) => {
  return (
    <div className='flex flex-row-reverse '>
      <div className='ml-3'>
        <img className="w-10 rounded-full ml-2 mt-4" src='..\src\assets\kirito_kun_by_kazumony_dfpafs4-fullview.jpg'/>
        <div className='ml-1 mr-1 mt-1 text-slate-400 text-sm '>just now</div>
      </div>
      <div >
        <div className='mt-8  bg-white mr-2 rounded-bl-lg rounded-br-lg rounded-tl-lg pl-1 pr-1'>{label}</div>
        {/* <div><img className="w-48 h-42 rounded-bl-lg rounded-br-lg rounded-tl-lg  mt-4 " /></div> */}
      </div>
    </div>
  )
}

export default Message