import { useState } from "react";
import { useAuthContext } from "../context/Authtext";
import toast from "react-hot-toast";

const useLogout = () => {
	const { setAuthUser } = useAuthContext();
	
	const logout = async () => {
		try {
			const res = await fetch("/api/v1/auth/logout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
			});
			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}

			// Check if the token is present in localStorage before removing
			const token = localStorage.getItem("chat-user");
			if (token) {
				console.log("Removing token:", token);
				localStorage.removeItem("chat-user");
			} else {
				console.log("Token not found in localStorage.");
			}
			setAuthUser(null);
		} catch (error) {
			toast.error(error.message);
		}
	};

	return { logout };
};

export default useLogout;
