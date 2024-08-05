import { Link } from "react-router-dom"
export const UserP = ()=>{
    return <div className="flex items-center justify-between">
        <div className="flex items-center mx-[3%] my-[2%] ">
            <img className="w-10 rounded-full" src="https://play-lh.googleusercontent.com/_bQv_Bua-oPwO9Lzld3n7nrxew6DUHnk0m30Af_lQSVd_D0a2egLp3E-gXW1p-XFwMgBB6Ra_F5OkBYukg"/>
            <div className="text-black mx-[5%]">The Flash</div>
        </div>
        <Link to="payment"><div className="bg-black px-2 text-base flex items-center text-center justify-center rounded-xl h-10 mx-[3%]">Send Money</div></Link>        
    </div>
}