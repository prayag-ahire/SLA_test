import React, { useState } from 'react'
import useSendMessage from '../catchup/useSendMeassage';

const Input = () => {
  const [message,setMessage] = useState("");
  const {sendMessage} = useSendMessage();


  const handleSubmit =async (e)=>{
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  }
  return (
    <div className='flex  text-black bg-white h-12'>
      <form onSubmit={handleSubmit}>
        <input className=' w-full ' placeholder='Type here...' value={message} onChange={(e)=>setMessage(e.target.value)}></input>
        <div className='flex space-x-2 items-center'>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
          </svg>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
        </div>
        <button className='mt-1 bg-white  rounded-full w-16 h-9 text-center'>Send</button>
        </div>
        </form>
        </div>
  )
}

export default Input