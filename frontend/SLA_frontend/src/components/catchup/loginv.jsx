
import toast from "react-hot-toast";
import { useAuthContext } from "../context/Authtext";

const  useLogin = () =>{

const {setAuthUser} = useAuthContext();

const loginv = async ({username1, password1}) => {
	console.log(username1,"and",password1);
	const username = username1;
	const password = password1;
		try {
			const res = await fetch("/api/v1/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password }),
			});

			console.log(username,"and",password);
			const data = await res.json();
			console.log(data)
			if (data.error) {
				throw new Error(data.error);
			}

			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data)
		} catch (error) {
			toast.error(error.message);
		} 
	};
	return {loginv};
}

export default useLogin;

function handleInputErrors(username, password) {
	if (!username || !password) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}