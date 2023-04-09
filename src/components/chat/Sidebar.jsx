import React, { useState, useEffect } from "react";
import { auth } from '../../firebase'
import {db} from "../../firebase";
import {query, collection, orderBy, onSnapshot, where} from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth'

function Sidebar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [chats, setChats] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);
  const [user] = useAuthState(auth);

  useEffect(() => {
    // Obtener los chats del usuario actual desde Firebase
    if (user) {
      const q = query(collection(db, "chats"), where("users", "array-contains", user.uid));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const chats = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          chats.push({
            uid: doc.uid,
            name: data.name,
            users: data.users,
            messages: data.messages,
          });
        });
        setChats(chats);
      });
      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  useEffect(() => {
    // Buscar usuarios en Firebase en tiempo real mientras se escribe
    const q = query(collection(db, "users"), orderBy("name"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const results = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          results.push({
            uid: doc.uid,
            name: data.name,
          });
        }
      });
      setSearchResults(results);
    });

    // Limpiar efecto
    return () => unsubscribe();
  }, [searchTerm]);

  function handleSearchInputChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleChatClick(chatId) {
    setActiveChatId(chatId);
  }

  return (
    <div className="flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
      <div className="px-6 mb-4">
        <div className="flex items-center justify-between">
          <input
            type="text"
            placeholder="Buscar usuario"
            className="m-1 input input-bordered w-full max-w-xs"
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
          <button className="m-1 btn btn-circle">
            <svg class="h-6 w-6 text-black-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
          </button>
        </div>
      </div>
      <div className="flex-1">
        <nav className="px-2">
          {searchResults.map((user) => (
            <div
              key={user.uid}
              className={`flex items-center px-2 py-1 hover:bg-gray-200 cursor-pointer ${
                activeChatId &&
                chats.find((chat) =>
                  chat.users.includes(user.uid) &&
                  chat.users.includes(currentUser.uid)
                )?.id === activeChatId
                  ? "bg-gray-200"
                  : ""
              }`}
              onClick={() => {
                const chat = chats.find(
                  (chat) =>
                    chat.users.includes(user.uid) &&
                    chat.users.includes(currentUser.uid)
                );
                if (chat) {
                  setActiveChatId(chat.id);
                } else {
                  // Crear nuevo chat
                  const newChatRef = collection(db, "chats").doc();
                  newChatRef.set({
                    name: user.name,
                    users: [currentUser.uid, user.uid],
                    messages: [],
                  });
                  setActiveChatId(newChatRef.id);
                }
              }}
            >
              <div className="flex items-center">
                <div className="h-6 w-6 mr-2 bg-gray-300 rounded-full"></div>
                <span className="text-sm font-medium">{user.name}</span>
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
