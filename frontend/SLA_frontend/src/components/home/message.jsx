import Chats from "../chatcom/chats"
import Chat from "../chatcom/chat"
import Searchbar from "../chatcom/searchbar"

export const Message = ()=>{
    return <div className="grid grid-cols-3 border-zinc-700 h-screen  whitespace-nowrap overflow-y-scroll scrollbar-hide">
        <div className="container col-span-1">
            <Searchbar/>
            <Chats/>
        </div>
        <div className=" col-span-2 ">
            <Chat/>
        </div>
        
    </div>
}   