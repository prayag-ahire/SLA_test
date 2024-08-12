import { SearchB } from "../payment/searchB"
import { UserP } from "../payment/userP"

export const Wallet = ()=>{
    return <div className=" ">
        <div className="text-white font-bold text-4xl mt-[3%] ml-[3%]">SLA Wallet </div>
        <div className="fixed min-h-48  mt-[4%]  items-center rounded-2xl ml-[3%] mr-[3%]  bg-white ">
            <div className="ml-[3%] mt-[3%] text-2xl font-extrabold">Total Wallet Balance</div>
            <div className="text-5xl font-bold ml-[3%] mt-[3%]">₹{443}</div>
            <div></div>
        </div>
        
        <div className=" text-white min-h-32   rounded-xl mr-[3%] bg-white  font-bold text-2xl mt-[40%] ml-[3%]">
            <div><SearchB/></div>
            <div><UserP/></div>
        </div>
    </div>
} 