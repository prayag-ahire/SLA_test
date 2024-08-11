import Chat from "../chatcom/chat"
import Sidebar from "../chatcom/sidebar"

export const Message = ()=>{
    return <div className="grid grid-cols-3 border-zinc-700 h-screen  fixed">
        <div className="container col-span-1 ">
            <Sidebar/>
        </div>
        <div className=" col-span-2 ">
            <Chat/>
        </div>
        
    </div>
}   