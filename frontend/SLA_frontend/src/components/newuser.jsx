import {useNavigate} from 'react-router-dom'
export const NewUsers = ()=>{
    const navigate = useNavigate();
    return <div className=" mt-24 mr-22 pr-20">
        <div className="text-white text-7xl font-bold ">Welcome To SLA.</div>
        <div className="text-white text-3xl mt-16 font-bold">Join today.</div>
        <div ><button className="py-2 rounded-full bg-white mt-10 text-gray w-[299px]">Sign up with Google</button></div>
        <div className="flex my-[4px] text-white"><hr className=" mt-4 w-[134px] bg-[#2F3336]"></hr><div className="pd mt-0.5 ml-2 mr-2">or</div><hr className="mt-4 w-[134px]"></hr></div>
        <div ><button onClick={()=>{navigate('/signup')}} className="text-white rounded-full bg-sky-500 px-24 py-2 w-[299px] font-normal">Create account</button></div>
        <div className='text-white w-[300px] text-[11px] pb-[20px] mt-[5px]'>By signing up, you agree to the Terms of  service and Privacy Policy, including Cookie Use.</div>
        <div className='mt-[40px]'>
        <div className='text-white text-[17px] font-medium mb-[20px]'>Already have an account?</div>
        <div className="py-2 rounded-full border-[0.5px]  text-gray  w-[299px] text-sky-500 font-bold flex justify-center"><button onClick={()=>{navigate('/login')}} className="w-[299px]">Sign in</button></div>
        </div>
    </div>
}
