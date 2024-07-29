import React from 'react'
import { useContext } from "react"
import { AuthContext } from '../context/AuthContext'


const Editprofile = () => {
  const { currentUser } = useContext(AuthContext);
  
  return (
    <div className='fixed h-screen inset-0 bg-slate-600 bg-opacity-20 backdrop-blur-20 flex justify-center items-center '>
    <div className='text-white w-[550px] h-[700px] rounded-3xl bg-black'>
      <div className='flex justify-between h-12 '>
        <div className='flex mt-3'>
        <div className='mr-5 ml-3 mt-1 '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
        </div>  
        <div className='text-xl font-bold '>Edit Profile</div>
        </div>
        <div className='mr-6 mt-3 bg-white text-black font-bold w-14 h-7 rounded-full text-center justify-center '>Save</div>
      </div>

      <div  className='h-[650px] overflow-y-scroll  '>
      
      <div >
              <div className="h-[200px] w-full bg-white mt-2 ">
                  <img></img>
                  
              </div>
              <div className="flex ml-5 mb-5">
                  <div className="w-[120px] h-[133px]   rounded-full ">
                      <img className="w-72 rounded-full" src={currentUser.photoURL}/>
                  </div>
              </div>
      </div>

      <div className='grid space-y-8 ml-4 mr-4 '>
      <div className='bg-black  text-white border-white '>
        <input type='text' placeholder=' Name' className="bg-black border-[0.5px] border-zinc-500 rounded-md h-[56px] w-full  placeholder-gray-600 text-white" content={currentUser.displayName}></input>
      </div>

      <div>
        <input type='text' placeholder=' Bio' className="bg-black border-[0.5px] border-zinc-500 rounded-md h-[56px] w-full placeholder-gray-600 text-white"></input>
      </div>

      <div>
        <input type='text' placeholder=' Location' className="bg-black border-[0.5px] border-zinc-500 rounded-md h-[56px] w-full placeholder-gray-600 text-white"></input>
      </div>

      <div>
        <input type='text' placeholder=' Website' className="bg-black border-[0.5px] border-zinc-500 rounded-md h-[56px] w-full placeholder-gray-600 text-white"></input>
      </div>
    
    
    <div>
    <div className='flex'>
      <div className='mr-1'>Birth date .</div>
      <div className='text-sky-400 font-semibold text-base'>Edit</div>
    </div>
    <div className='font-semibold text-xl'>August 2, 2003</div>

    <div className='flex justify-between mb-16 pb-2 w-full mt-6 pt-2 text-xl hover:bg-neutral-900'>
      <div>Edit professional profile</div>
      <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div> 
    </div>
  )
}

export default Editprofile