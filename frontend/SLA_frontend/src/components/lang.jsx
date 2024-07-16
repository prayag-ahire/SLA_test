import { Welcomeimg } from "./welcomeimg"
import { NewUsers } from "./newuser"
export const Lang = ()=>{
    return <div className='flex  h-svh  bg-black items-center pl-24'>
        <div ><Welcomeimg/></div>
        <div><NewUsers/></div>
    </div>
}