import { Link, Outlet } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../config"
import { useContext } from "react"
import { AuthContext } from '../context/AuthContext'
import useLogout from "./catchup/logoutv"

export const Home = ()=>{
    const {logout} =useLogout();
    const {currentUser} = useContext(AuthContext);
    return <div className="grid grid-cols-12 gap-5  fixed bg-black h-full">
        <div className="grid pl-32 col-start-1 col-end-4">
            <div className=" mt-2 ">
            {/* <img src="../src/assets/x_home.png" className="size-10"></img> */}
            <div className="text-white ml-5 font-bold text-6xl">SLA!</div>
            </div>

            <div>
            <div className="flex hover:bg-neutral-900  rounded-full h-10 w-32 items-center justify-center origin-center">
            <svg xmlns="http://www.w3.org/2000/svg"  color="white" fill="none" viewBox="0 0 24 20" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <div className="text-white font-bold text-xl pl-4"><Link to="/home/following">Home</Link></div>
            </div>
            </div>


            <div>
            <Link to='/home/notification'>
            <div className="flex hover:bg-neutral-900 rounded-full h-10 w-44 items-center justify-center origin-center">
            <svg xmlns="http://www.w3.org/2000/svg" color="white" fill="none" viewBox="0 0 24 20" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>
            <div className="text-white font-bold text-xl pl-4">Notification</div>
            </div>
            </Link>
            </div>

            <div >
            <div className="flex hover:bg-neutral-900 rounded-full h-10 w-32  items-center justify-center ">
            <svg xmlns="http://www.w3.org/2000/svg"color="white" fill="none" viewBox="0 0 24 20" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
            <div className="text-white font-bold text-xl pl-4">Friends</div>
            </div>
            </div>

         

            <div>
            <Link to='/home/message'>
            <div className="flex text-white hover:bg-neutral-900 rounded-full h-10 w-36 items-center justify-center ">
            <svg className=" w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>

            <div className="text-white font-bold text-xl pl-4">message</div>
            </div>
            </Link>
            </div>

            <div>
                <Link to='/home/wallet'>
                <div className="flex mt-1 text-white hover:bg-neutral-900 h-10 w-36  items-center justify-start  rounded-full pl-1 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                </svg>
                <div className="ml-1 text-white font-bold text-xl pl-4">Wallet</div>
                </div>
                </Link>
            </div>

            <div>
            <div className="flex hover:bg-neutral-900 rounded-full h-10 w-28 items-center justify-center ">
            <svg xmlns="http://www.w3.org/2000/svg"color="white" fill="none" viewBox="0 0 24 20" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <div className="text-white font-bold text-xl pl-4 "><Link to='/home/profile'>Profile</Link></div>
            </div>
            </div>

            <button onClick={()=>{signOut(auth);logout()}}><div>
            <div className="flex hover:bg-neutral-900 rounded-full h-10 w-32 items-center justify-center origin-center">
            <div className="text-white"><svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
            </svg></div>
            <div className="text-white font-bold text-xl pl-4" >Log out</div>
            </div>
            </div>
            </button>

            <div><button className="bg-sky-400 rounded-full w-[218px] h-[52px] text-white font-bold text-xl">Post</button></div>

            <div className="flex mt-10">
                <div className="flex items-start justify-center mt-1 mr-2 w-[30px] h-[30px] "><img className="rounded-full" src={currentUser.photoURL}/></div>
                <div className="ml-1">
                    <div className="text-white h-[20px] font-semibold">{currentUser.displayName}</div>
                    <div className="text-gray-500">@useruniqeid</div>
                </div>
                <div className="flex items-center ml-16 mb-7 ">
                <svg xmlns="http://www.w3.org/2000/svg" color="white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>

                </div>
            </div>
        </div>
        <div className="col-start-4 col-end-9 flex flex-col border border-zinc-700 h-full max-h-screen overflow-hidden">
  <div className="flex-1 overflow-auto">
    <Outlet />
  </div>
</div>

        <div className="col-start-9 col-end-12 h-screen w-screen">
            <div className="flex bg-zinc-800  rounded-full w-[350px] h-[44px] mt-2"><div className=" pl-4 pt-2.5 "><svg xmlns="http://www.w3.org/2000/svg" color="white" fill="none" viewBox="0 0 24 20" stroke-width="1.5" stroke="currentColor" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg></div><div className="pt-2 pl-4 text-lg text-slate-400">Search</div></div>
            <div className=" max-h-screen whitespace-nowrap overflow-auto scrollbar-hid"> 
            <div className="mt-4 rounded-xl w-[348px] h-[144px] border-[1px] border-zinc-700">
                <div className="text-white font-bold text-2xl ml-3 mt-2">Subscribe to Premium</div>
                <div className="text-white text-wrap ml-3 mt-2">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</div>
                <div className="bg-sky-600 text-white font-semibold text-lg w-28 ml-3 mt-2 h-[31px] rounded-full justify-center text-center ">Subscribe</div>
            </div>
            {/* <div className="mt-4 rounded-xl border-[1px] w-[348px] h-[180px] "></div> */}
            <div className="mt-4 rounded-xl border-[1px] w-[348px] h-[510px] border-zinc-700 "><div className="mt-2 text-2xl font-serif font-bold text-white ml-2">list of Event's</div></div>
            <div className="mt-4 mb-44 rounded-xl border-[1px] w-[348px] h-[295px] border-zinc-700">
                <div className="text-white text-2xl font-bold ml-2 mt-2 font-serif ">Who to follow</div>
                </div>
            <div className=""></div>
            </div>
        </div>
    </div>
}