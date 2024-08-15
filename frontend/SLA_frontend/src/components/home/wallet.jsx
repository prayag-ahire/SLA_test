import { Balance } from "../payment/balance"
import { Users } from "../payment/userP"

export const Wallet = ()=>{
    return <div className=" ">
            <Balance/>
        <div className="flex-grow  text-white  rounded-xl mr-[3%] bg-white  font-bold text-2xl mt-[50%] ml-[3%]">
            <Users/>
        </div>
    </div>
} 