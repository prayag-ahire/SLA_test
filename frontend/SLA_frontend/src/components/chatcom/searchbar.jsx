import { query, where, getDocs, collection } from 'firebase/firestore';
import React, { useState, useEffect, useRef } from 'react';
import { db } from "../../config.js";

const Searchbar = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", username));
    
    try {
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        setErr(true);
        setUsers([]);
      } else {
        setErr(false);
        const usersList = [];
        querySnapshot.forEach((doc) => {
          usersList.push(doc.data());
        });
        setUsers(usersList);
        console.log("Found users:", usersList);
      }
    } catch (error) {
      console.error("Error getting documents: ", error);
      setErr(true);
      setUsers([]);
    }
  };

  const handleKey = (e) => {
    if (e.code === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className='bg-black ml-1 mt-3 '>
      <div>
        <input
          type='text'
          ref={inputRef}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKey}
          className='pl-1 placeholder:text-center font-semibold rounded-full h-8 mb-2'
          placeholder='Find Friends'
        />
      </div>
      {err && <span className='text-red-600'>User not found!</span>}
      {users.length > 0 && (
        <div>
          {users.map((user, index) => (
            <div key={index}>
              {user.photoURL && (
                <img className='text-white' src={user.photoURL} alt={`${user.displayName}'s profile`} />
              )}
              <div className='text-white'>{user.displayName}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
