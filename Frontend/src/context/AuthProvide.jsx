import React, { createContext, useContext, useState } from 'react'


const AuthContext = createContext()
const useAuth = () => useContext(AuthContext)

function AuthProvider({children}) {
    const existingUser = localStorage.getItem("loginInfo") || localStorage.getItem("userInfo")
    const [authUser, setAuthUser] = useState(
        existingUser? JSON.parse(existingUser) : undefined
    )

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider,
    useAuth
}
