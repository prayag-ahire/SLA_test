
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../config";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

export const Signup = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Handle progress if needed
        },
        (error) => {
          console.error('Upload error:', error);
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            try {
              await updateProfile(res.user, {
                displayName,
                photoURL: downloadURL,
              });
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoURL: downloadURL,
              });
              navigate("/home"); 
            } catch (error) {
              console.error('Error updating profile or setting document:', error);
              setErr(true);
            }
          });
        }
      );
    } catch (error) {
      console.error('Signup error:', error);
      setErr(true);
    }
  };

  return (
    <div className="fixed inset-0 bg-pink bg-[#5B708366] bg-opacity-50 backdrop-blur-20 flex justify-center items-center">
      <div className="mt-10 flex flex-col items-center rounded-3xl bg-black w-[583px] h-[650px]">
        <div className="place-self-start flex justify-center items-center mt-3 ml-3 rounded-3xl hover:bg-neutral-900 w-8 h-8">
          <button onClick={() => navigate('/')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              color="white"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="text-center text-white font-bold text-3xl mt-2">Create your account</div>
        <div className="text-center">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="bg-black border-[0.5px] border-zinc-500 rounded-md h-[56px] w-[400px] mt-5 placeholder-gray-600 placeholder:ml-[10px] text-white"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="bg-black border-[0.5px] border-zinc-500 rounded-md h-[56px] w-[400px] mt-5 placeholder-gray-600 placeholder:ml-[10px] text-white"
              placeholder="Email"
              required
            />
            <input
              type="password"
              className="bg-black border-[0.5px] border-zinc-500 rounded-md h-[56px] w-[400px] mt-5 placeholder-gray-600 placeholder:ml-[10px] text-white"
              placeholder="Password"
              required
            />
            <input type="file" className="mt-4 mr-24 text-white" required />
            <button type="submit" className="py-2 rounded-full bg-white mt-10 text-gray w-[299px] text-lg font-medium">
              Sign Up
            </button>
            {err && <span className="text-red-500">Something went wrong</span>}
          </form>
        </div>
        <div className="text-cyan-600 place-self-end pr-24 mt-4">Use email instead</div>
        <div className="text-white place-self-start ml-24 mt-4 mb-2">Date of birth</div>
        <div className="text-gray-500 pl-24 pr-20 text-sm">
          <h5>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</h5>
        </div>
      </div>
    </div>
  );
};
