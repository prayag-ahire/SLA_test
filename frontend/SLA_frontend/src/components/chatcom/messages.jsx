import React from 'react'
import Message from './message'
import Message2 from './message2'
const Messages = () => {
  return (
    <div className=' whitespace-nowrap overflow-y-scroll scrollbar-hide '>
        <Message  label={"Hello"}/>
        <Message2 label={"hii"}/>
        <Message2 label={"hwo are you?"}/>
        <Message  label={"i am good , how are you doing?"}/>
        {/* <Message/> */}
        {/* <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/> */}
        <div className='h-44'></div>
    </div>
  )
}

export default Messages