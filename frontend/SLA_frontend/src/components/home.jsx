import { Link, Outlet } from "react-router-dom"
import { Message } from "./home/message"

export const Home = ()=>{
    return <div className="grid grid-cols-12 gap-5  fixed bg-black h-full">
        <div className="grid pl-32 col-start-1 col-end-4">
            <div className=" mt-2 ">
            {/* <img src="../src/assets/x_home.png" className="size-10"></img> */}
            <div className="text-white ml-5 font-bold text-6xl">SLA!</div>
            </div>

            <div>
            <div className="flex hover:bg-neutral-900 rounded-full h-10 w-32 items-center justify-center origin-center">
            <svg xmlns="http://www.w3.org/2000/svg"  color="white" fill="none" viewBox="0 0 24 20" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <div className="text-white font-bold text-xl pl-4"><Link to="/home/following">Home</Link></div>
            </div>
            </div>

            <div>
            <div className="flex hover:bg-neutral-900 rounded-full h-10 w-32 items-center justify-center origin-center">
            <svg xmlns="http://www.w3.org/2000/svg" color="white" fill="none" viewBox="0 0 24 20" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <div className="text-white font-bold text-xl pl-4">Explore</div>
            </div>
            </div>

            <div>
            <div className="flex hover:bg-neutral-900 rounded-full h-10 w-44 items-center justify-center origin-center">
            <svg xmlns="http://www.w3.org/2000/svg" color="white" fill="none" viewBox="0 0 24 20" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>
            <div className="text-white font-bold text-xl pl-4">Notification</div>
            </div>
            </div>

            <div>
            <div className="flex hover:bg-neutral-900 rounded-full h-10 w-40 items-center justify-center origin-center">
            <svg xmlns="http://www.w3.org/2000/svg"color="white" fill="none" viewBox="0 0 24 20" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <div className="text-white font-bold text-xl pl-4">Friends</div>
            </div>
            </div>

            <div>
            <div className="flex hover:bg-neutral-900 rounded-full h-10 w-40 items-center justify-center origin-center">
            <svg xmlns="http://www.w3.org/2000/svg"color="white" fill="none" viewBox="0 0 24 20" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
            </svg>
            <div className="text-white font-bold text-xl pl-4">Bookmark</div>
            </div>
            </div>

            <div>
            <div className="flex hover:bg-neutral-900 rounded-full h-10 w-44 items-center justify-center origin-center">
            <svg xmlns="http://www.w3.org/2000/svg"color="white" fill="none" viewBox="0 0 24 20" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
            <div className="text-white font-bold text-xl pl-4">Communities</div>
            </div>
            </div>

            <div>
            <div className="flex hover:bg-neutral-900 rounded-full h-10 w-28 items-center justify-center origin-center">
            <svg xmlns="http://www.w3.org/2000/svg"color="white" fill="none" viewBox="0 0 24 20" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <div className="text-white font-bold text-xl pl-4"><Link to='/home/profile'>Profile</Link></div>
            </div>
            </div>

            <div>
            <div className="flex hover:bg-neutral-900 rounded-full h-10 w-24 items-center justify-center origin-center">
            <svg xmlns="http://www.w3.org/2000/svg"color="white" fill="none" viewBox="0 0 24 20" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <div className="text-white font-bold text-xl pl-4">More</div>
            </div>
            </div>

            <div><button className="bg-sky-400 rounded-full w-[218px] h-[52px]">Post</button></div>

            <div className="flex mt-10">
                <div className="flex items-start justify-center mt-1 mr-2 w-12"><img className="w-72 rounded-full" src='..\src\assets\kirito_kun_by_kazumony_dfpafs4-fullview.jpg'/></div>
                <div>
                    <div className="text-white">User name</div>
                    <div className="text-white">@useruniqeid</div>
                </div>
                <div className="flex items-center ml-16 mb-7 ">
                <svg xmlns="http://www.w3.org/2000/svg" color="white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>

                </div>
            </div>
        </div>
        <div className="col-start-4 col-end-9 border border-zinc-700 h-screen home">
            <div className=" grid grid-cols-2 divide-x border-black h-14 ">
                <Link to="/home/following" ><div className="text-white h-full border-black  text-center content-center hover:bg-neutral-900">For you</div></Link>
                <Link to="/home/message" className="border-black"><div className="text-white h-full  text-center content-center hover:bg-neutral-900">Message</div></Link>
            </div>
            <div>
                <Outlet/>
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
                <div className="bg-sky-600 text-white font-semibold text-lg w-28 ml-3 mt-2 h-8 rounded-full justify-center text-center "><button>Subscribe</button></div>
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