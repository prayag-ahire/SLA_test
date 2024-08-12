import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config";
import { useState } from "react";
import { Link } from "react-router-dom"
import useLogin from "../catchup/loginv";



export const Login = () => {
    const navigate = useNavigate();
    const [err, setErr] = useState(false);
    const [username1,setUsername] = useState("");
    const [password1,setPassword] = useState("");

    const {loginv} = useLogin();

    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
                if (result.user) {
                    navigate('/home');
                }
            })
            .catch((error) => {
                console.error("Google login error:", error);
                setErr(true);
            });
    };

    const handleSubmit = async (e) => {
        console.log(username1,"and",password1);
        e.preventDefault();
        await loginv({username1,password1});

        const email = e.target[1].value;
        const password = e.target[2].value;
        


        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/home/following");
        } catch (error) {
            console.error('Login error:', error);
            setErr(true);
        }
    };

    return (
        <div className="fixed inset-0 bg-slate-600 bg-opacity-40 backdrop-blur-20 flex justify-center items-center">
            <div className="mt-10 flex flex-col items-center rounded-3xl bg-black w-[583px] h-[650px]">
                <div className="place-self-start flex justify-center items-center mt-3 ml-3 rounded-3xl hover:bg-neutral-900 w-8 h-8">
                    <button onClick={() => { navigate('/'); }}>
                        <svg xmlns="http://www.w3.org/2000/svg" color="white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            <div className="text-white text-4xl font-semibold text-center">
                    <h1>Signin to SLA</h1>
                </div>
                <div>
                    <button className="py-2 rounded-full bg-white mt-10 text-gray w-[299px]" onClick={googleLogin}>Sign up with Google</button>
                </div>
                <div className="flex my-[12px] text-white">
                    <hr className="mt-4 w-[134px] bg-[#2F3336]"></hr>
                    <div className="pd mt-0.5 ml-2 mr-2">or</div>
                    <hr className="mt-4 w-[134px]"></hr>
                </div>
                <div className="text-center">
                <form onSubmit={handleSubmit}>
                <input
                            type="text"
                            autoComplete="username"
                            className="bg-black border-[0.5px] border-zinc-500 rounded-md h-[56px] w-[300px] placeholder-gray-600 text-white"
                            placeholder="Username"
                            required
                            value={username1}
                            onChange={(e)=> setUsername(e.target.value)}
                        />
                    <input type="text" autoComplete="given-name" className="mt-5 bg-black border-[0.5px] border-zinc-500 rounded-md h-[56px] w-[300px] placeholder-gray-600 text-white" placeholder="Phone, email, or username" />
                    <input type="password" value={password1} onChange={(e)=>setPassword(e.target.value)} className="bg-black border-[0.5px] border-zinc-500 rounded-md h-[56px] w-[300px] placeholder-gray-600 text-white mt-5" placeholder="Password" />
                    <button type="submit" className="py-2 rounded-full bg-white mt-10 text-gray w-[299px] text-lg font-medium">Signin</button>
                </form>
                </div>
                <div>
                    <button className="py-2 rounded-full mt-10 border-[1px] text-white border-white-500 w-[299px]">Forgot password?</button>
                </div>
                <div className="text-white mt-14 mr-16">
                    <h3>Don't have an account? <Link to="/signup" className="text-sky-500 font-bold text-base">Sign up</Link></h3>
                </div>
                {err && <div className="text-red-500">An error occurred during login. Please try again.</div>}
            </div>
        </div>
    );
};
