import { Link, Outlet } from "react-router-dom"
export const Combo = ()=>{
    return <div>
        <div className=" grid grid-cols-2 divide-x border-black h-14 ">
                <Link to="/home/following" ><div className="text-white h-full border-black  text-center content-center hover:bg-neutral-900">For you</div></Link>
                <Link to="/home/message" className="border-black"><div className="text-white h-full  text-center content-center hover:bg-neutral-900">Message</div></Link>
            </div>
            <div><Outlet to='/home/following'/></div>
    </div>
}