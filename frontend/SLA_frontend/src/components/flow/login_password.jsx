import { useNavigate } from "react-router-dom";
export const Loginpass = ()=>{
    const navigate = useNavigate();
    return <div className="fixed inset-0 bg-slate-600 bg-opacity-40 backdrop-blur-20 flex justify-center items-center ">
    <div className="mt-10 flex flex-col items-center rounded-3xl bg-black  w-[583px] h-[630px]">
    <div className="place-self-start flex justify-center items-center mt-3 ml-3 rounded-3xl hover:bg-neutral-900 w-8 h-8 "><button onClick={()=>{navigate('/')}}><svg xmlns="http://www.w3.org/2000/svg" color="white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
        </button>
    </div>
    <div className="text-white text-4xl font-semibold pr-20"><h1>Enter your password</h1></div>
    <div><form><input className="bg-black border-[0.5px] border-zinc-500 rounded-md h-[56px] w-[300px] placeholder-gray-600  text-white " placeholder="   Phone,email, or username"></input></form></div>
    <div><button className="py-2 rounded-full bg-white mt-96 text-gray w-[399px] h-14 text-xl font-bold" onClick={()=>{navigate('/home')}}>Log in</button></div>
    <div className="text-white mt-5 mr-40 text-start items-start "><h3>Don't have an account? Sign up</h3></div>
</div>
</div>
} 