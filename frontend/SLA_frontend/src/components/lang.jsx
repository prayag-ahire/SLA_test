import { Welcomeimg } from "./welcomeimg"
import { NewUsers } from "./newuser"
export const Lang = ()=>{
    return <div className='flex  h-screen  bg-black items-center '>
        <div ><Welcomeimg/></div>
        <div><NewUsers/></div>
    </div>
}

