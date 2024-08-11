import React from 'react';
import useConversetion from "../zustand/useconversetion";

const Chats = ({ conversation }) => { 
    const { selectedConversation, setSelectedConversation } = useConversetion();

	const isSelected = selectedConversation?._id === conversation._id;
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);
    
    return (
        <div
            className={`flex bg-black hover:bg-slate-400 cursor-pointer  ${isSelected ? "bg-slate-400 text-black" : ""}`}
            onClick={() => setSelectedConversation(conversation)}
        >
            <div className={` hover:bg-slate-400 cursor-pointer ${isSelected ? "bg-slate-400 text-black" : ""}`}>
                <img
                    className="w-12 rounded-full ml-2 mt-4"
                    src={conversation.profilePic}
                    alt="Profile"
                />
            </div>
            <div className='mt-4 ml-2'>
                <div className={`${isSelected ? "text-black" : "text-white"}`}>
                    {conversation.fullName}
                </div>
                <div className={`${isSelected ? "text-black" : "text-white"}`}>
                    last text
                </div>
            </div>
        </div>
    );
};

export default Chats;
