import { useNavigate } from "react-router-dom";
export const Signup = ()=>{
    const navigate = useNavigate();
    return <div className="fixed inset-0 bg-pink bg-[#5B708366] bg-opacity-50 backdrop-blur-20 flex justify-center items-center ">
    <div className="mt-10 flex flex-col items-center rounded-3xl bg-black  w-[583px] h-[650px]">
    <div className="place-self-start flex justify-center items-center mt-3 ml-3 rounded-3xl hover:bg-neutral-900 w-8 h-8 "><button onClick={()=>{navigate('/')}}><svg xmlns="http://www.w3.org/2000/svg" color="white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
        </button>
    </div>
    <div className="text-white font-bold text-3xl mr-28 mt-20">Create your account</div>
    <div>
    <div><form><input className="bg-black border-[0.5px] border-zinc-500 rounded-md h-[56px] w-[400px] mt-10 placeholder-gray-600 placeholder:ml-[10px] text-white" placeholder="Name"></input></form></div>
    <div><form><input className="bg-black border-[0.5px] border-zinc-500 rounded-md h-[56px] w-[400px] mt-10 placeholder-gray-600 placeholder:ml-[10px] text-white" placeholder="Phone"></input></form></div>
    </div>
    <div className="text-cyan-600 place-self-end pr-24 mt-4">Use email instead</div>
    <div className="text-white place-self-start ml-24 mt-4 mb-2">Date of birth</div>
    <div className="text-gray-500 pl-24 pr-20 text-sm"><h5>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</h5></div>
</div>
</div>
}