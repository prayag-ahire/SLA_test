import React from 'react'
import Searchbar from './searchbar'
import ChatsContainer from './chatscontainer'

const Sidebar = () => {
  return (
    <div className='fixed h-screen bg-black whitespace-nowrap overflow-y-scroll scrollbar-hide'>
      <div className=''><Searchbar/></div>
      <ChatsContainer/>
    </div>
  )
}

export default Sidebar