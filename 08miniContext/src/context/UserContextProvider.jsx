import React, { Children } from "react";
import UserContext from "./UserContext";
//render children value as it is
const UserContextProvider = ({children})=>{
    const [user,setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}> 
        {/* {/* we are passing the value that we want to update inside card or dashboard */}
        {children} 
        </UserContext.Provider>
    )
}

export default UserContextProvider