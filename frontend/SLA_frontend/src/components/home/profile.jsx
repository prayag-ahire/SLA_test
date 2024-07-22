export const Profile = ()=>{
    return <div>
        <div>
            <div className="flex ">
                <div className="mt-3 ml-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6" color="white">
                <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                </svg>
                </div>
                <div>
                <div className='text-white text-xl ml-10 font-bold'>Prayag Ahire</div>
                <div className="ml-10  text-sm text-gray-400">73 posts</div>
                </div>

            </div>


            <div className=" w-full  h-[200px] bg-white mt-2">
                <img></img>
            </div>

            <div className="ml-5">
            <div className="flex">
                <div className="w-[133px] h-[133px]  bg-orange-400 rounded-full ">
                    <img></img>
                </div>
                <div className=" w-[113px] h-[36px] mt-10 ml-80 text-sm font-bold text-center content-center bg-white rounded-full">
                    <button>Edit Profile</button>
                </div>
            </div>

            
            <div className="text-white">Prayag Ahire</div>
            <div className="text-gray-500">@ahire_prayag</div>
            
            <div>
            </div>

                <div className="text-white">Software developer</div>
                <div>
                    <div className="text-white">Born Augest 2,2003</div>
                    <div className="text-white">joined september 2023</div>
                </div>
            </div>

            <div>
                <div className="text-white">150 Following</div>
                <div className="text-white">44 Followers</div>
            </div>

            <div className="grid grid-flow-col-dense space-x-10 ml-3 text-gray-400 font-bold mb-4">
                <div>Posts</div>
                <div>Replies</div>
                <div>Highlights</div>
                <div>Articles</div>
                <div>Media</div>
                <div>Likes</div>
            </div>
            <div className="h-px bg-gray-200 border-0 dark:bg-gray-700"></div>
        </div>
    </div>
}