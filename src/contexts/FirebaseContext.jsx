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

  return (
    <FirebaseContext.Provider value={{ ...restOfValue, user, loading }}>
      {loading ?
        <div className="h-screen flex flex-col justify-center items-center text-black">
          <img src="/images/logo.png" alt="logo" className="w-10 scale-[3] mb-5" />
          Loading...
        </div>
        :
        children}
    </FirebaseContext.Provider>
  );
}
