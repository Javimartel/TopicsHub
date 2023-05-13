import { createContext } from "react";

export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children, value: { getUser, getAdmins, ...restOfValue } }) => {
  const [user, loading] = getUser();
  getAdmins(admins => {
    admins.forEach(admin => {
      if (admin.uid === user?.uid) {
        user.isAdmin = true;
      }
    })
  })
  // Paginación Dark Mode
  const isDarkMode = localStorage.getItem("dark-mode");
  let setColor="";  
  if (isDarkMode === "true") {
    setColor = "flex flex-col items-center justify-center h-screen bg-gray-900 text-white";
  }
  else {
    setColor = "flex flex-col items-center justify-center h-screen text-black";
  }


  return (
    <FirebaseContext.Provider value={{ ...restOfValue, user, loading }}>
      {loading ?
        <div className={setColor}>
          <img src="/images/logo.png" alt="logo" className="w-10 scale-[3] mb-5" />
          Loading...
        </div>
        :
        children}
    </FirebaseContext.Provider>
  );
}
