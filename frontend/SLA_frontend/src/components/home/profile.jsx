import { Link} from "react-router-dom"
import { PostProfile } from "./postpro"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { auth } from "../../config"




export const Profile = ()=>{
    const { currentUser } = useContext(AuthContext);
    var user = auth.currentUser;
    var signupDate = new Date(user.metadata.creationTime);

    const formattedSignupDate = signupDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    return <div>
        <div className="w-auto">
            <div className="flex ">
                <Link to="/home/following "><div className="mt-3 ml-3 rounded-full hover:bg-neutral-900 ">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor" class="size-6" color="white">
                <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                </svg>
                </div>
                </Link>
                <div className="mb-2">
                <div className='text-white text-xl ml-10 font-bold'>{currentUser.displayName}</div>
                <div className="ml-10  text-sm text-gray-400">73 posts</div>
                </div>

            </div>

            <div className=" h-screen whitespace-nowrap overflow-y-scroll  scrollbar-hide">
            <div className="h-[200px] bg-white mt-2">
                <img></img>
            </div>  

            <div className="ml-5">
            <div className="flex">
                <div className="w-[133px] h-[133px]   rounded-full ">
                    <img className="w-72 rounded-full" src={currentUser.photoURL}/>
                </div>
                <div className=" hover:bg-slate-300   w-[113px] h-[36px] mt-10 ml-80 text-sm font-bold text-center content-center bg-white rounded-full">
                    <Link to='editprofile'><button >Edit Profile</button></Link>
                </div>
            </div>
            
            <div className="text-white text-xl font-bold">{currentUser.displayName}</div>
            <div className="text-gray-500">@{currentUser.displayName}</div>
            
            <div>
            </div>

            <div className="text-white flex space-x-1 mt-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
            </svg>
            <div className="text-gray-500">Software developer</div>
            </div>


            <div className="flex">
                <div className="text-white flex space-x-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                </svg>
                <div className="text-gray-500">Born August 2, 2003</div>
                </div>


                <div className="text-white ml-3 flex space-x-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>
                <div className="text-gray-500">joined {formattedSignupDate}</div>
                </div>
            </div>
            </div>

            <div className="flex ml-5 mt-3">
                <div className="text-white mr-7 flex">150<div className="text-gray-600 ml-1">Following</div></div>
                <div className="text-white mr-7 flex">44<div className="text-gray-600 ml-1"> Followers</div></div>
            </div>

            <div className="grid grid-flow-col-dense space-x-10 ml-5 text-gray-400 font-bold mb-4 mt-7">
                <div>Posts</div>
                <div>Replies</div>
                <div>Highlights</div>
                <div>Articles</div>
                <div>Media</div>
                <div>Likes</div>
            </div>
            <div className="h-px bg-gray-200 border-0 dark:bg-gray-700"></div>


            <div className="w-full h-[600px]">
                <PostProfile/>
            </div>
        </div>
        </div>
    </div>
}