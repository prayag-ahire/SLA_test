import toast from "react-hot-toast";


const Signupv = async({fullName,username,password,confirmPassword,gender})=>{
		try {
			const res = await fetch("/api/v1/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({fullName, username, password, confirmPassword, gender}),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			localStorage.setItem("chat-user", JSON.stringify(data));    
		} catch (error) {
			toast.error(error.message);
		} 
	};

export default Signupv;
