import { createContext, useState } from "react";

export const UserName = createContext(null)

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null)

  return (
    <UserName.Provider value={{user, setUser}}>
      {children}
    </UserName.Provider>
  )
}

export default UserContext
