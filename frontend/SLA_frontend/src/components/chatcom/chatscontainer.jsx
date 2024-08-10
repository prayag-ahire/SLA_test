import Chats from "./chats"

const ChatsContainer = ()=>{
    return <div className="whitespace-nowrap overflow-y-scroll scrollbar-hide">
        <Chats/>
        <Chats/>
        <Chats/>
        <Chats/>
    </div>
}

export default ChatsContainer