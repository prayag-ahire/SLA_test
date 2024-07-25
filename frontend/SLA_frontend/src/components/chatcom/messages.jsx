import React from 'react'
import Message from './message'

const Messages = () => {
  return (
    <div className='h-screen whitespace-nowrap overflow-y-scroll  scrollbar-hide'>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <div className='h-44'></div>
    </div>
  )
}

export default Messages