import useGetConversations from "../catchup/useGetConversetion";
import Chats from "./chats"

const ChatsContainer = () => {
    const { conversations } = useGetConversations();
    console.log("Conversation:", conversations);

    return (
        <div className="whitespace-nowrap overflow-y-scroll scrollbar-hide">
            {conversations.map((conversation) => (
                <Chats
                    key={conversation._id}
                    conversation={conversation} 
                />
            ))}
        </div>
    );
}

export default ChatsContainer;
