import React from 'react';
import { useAuthContext } from "../context/Authtext";
import useConversation from '../zustand/useconversetion';

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversetion } = useConversation();


  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';

  const profilePic = fromMe ? authUser.profilepic : selectedConversetion?.profilepic || '';

  const bubbleBgColor = fromMe ? 'bg-blue-500' : 'bg-gray-200'; 

  return (
    <div className={`flex flex-row-reverse ${chatClassName}`}>
      <div className='ml-3'>
        <img className="w-10 rounded-full ml-2 mt-4" src={profilePic} alt="Profile"/>
        <div className='ml-1 mr-1 mt-1 text-slate-800 text-sm'>just now</div>
      </div>
      <div>
        <div className={`mt-8 mr-2 rounded-bl-lg rounded-br-lg rounded-tl-lg pl-3 pr-3 pt-2 pb-2 ${bubbleBgColor}`}>
          {message.message}
        </div>
        {/* Uncomment and add logic if you want to display images */}
        {/* <div><img className="w-48 h-42 rounded-bl-lg rounded-br-lg rounded-tl-lg mt-4" src={message.image} alt="" /></div> */}
      </div>
    </div>
  );
}

export default Message;
