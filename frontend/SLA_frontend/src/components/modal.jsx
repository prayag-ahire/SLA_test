export const Modal = ()=>{
    return <div className="fixed inset-0 bg-pink bg-opacity-30 backdrop-blur-sm">
        <div><svg xmlns="http://www.w3.org/2000/svg" color="white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
</div>
<div className="text-white text-4xl font-semibold"><h1>Sign in to X</h1></div>
<div ><button className="py-2 rounded-full bg-white mt-10 text-gray w-[299px]">Sign up with Google</button></div>
<div className="flex my-[4px] text-white"><hr className=" mt-4 w-[134px] bg-[#2F3336]"></hr><div className="pd mt-0.5 ml-2 mr-2">or</div><hr className="mt-4 w-[134px]"></hr></div>
<div><form><input className="bg-black border-[0.5px] border-zinc-500 rounded-md h-[56px] w-[300px]" placeholder="Phone,email, or username"></input></form></div>
<div ><button className="py-2 rounded-full bg-white mt-10 text-gray w-[299px]">Next</button></div>
<div ><button className="py-2 rounded-full  mt-10 border-[1px] text-white border-white-500 w-[299px]">forgot password?</button></div>
<div className="text-white mt-14"><h3>Don't have an account? Sign up</h3></div>


    </div>
} 