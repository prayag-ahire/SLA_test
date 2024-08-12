import React from 'react'
import Message from './message'
import Message2 from './message2'
import useGetMessages from '../catchup/useGetMessage'
import MessageSkeleton from '../skeletone/Messagesketeton'
const Messages = () => {
  const {messages} = useGetMessages();
  console.log("messages:",messages)
  return (
    <div className=' whitespace-nowrap overflow-y-scroll scrollbar-hide '>
		{messages.length > 0 && messages.map((message) => (
					<div key={message._id}>
						<Message message={message} />
					</div>
				))}

		{ [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
		{ messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>)}
       
		{/* <Message  label={"Hello"}/>
        <Message2 label={"hii"}/>
        <Message2 label={"hwo are you?"}/>
        <Message  label={"i am good , how are you doing?"}/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>  */}
    </div>
  )
}

export default Messages