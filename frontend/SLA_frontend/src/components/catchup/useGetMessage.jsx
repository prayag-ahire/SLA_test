import { useEffect, useState } from "react";
import useConversation from "../zustand/useconversetion";
import toast from "react-hot-toast";

const useGetMessages = () => {
	const { messages, setMessages, selectedConversation } = useConversation();

	useEffect(() => {
		const getMessages = async () => {
			try {
				const res = await fetch(`/api/v1/messages/${selectedConversation._id}`);
				const data = await res.json();
				if (data.error) throw new Error(data.error);
				setMessages(data);
			} catch (error) {
				toast.error(error.message);
			} 
		};

		if (selectedConversation?._id) getMessages();
	}, [selectedConversation?._id, setMessages]);

	return { messages};
};
export default useGetMessages;