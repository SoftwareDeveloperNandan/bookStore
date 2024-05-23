import React from 'react'
import { useAuth } from '../context/AuthProvide.jsx'
import toast from 'react-hot-toast';

function LogoutUser() {
    const [authUser, setAuthUser] = useAuth();
    const handleLogoutUser = () => {
        try {
            setAuthUser(
                {
                    ...authUser,
                    loginInfo: null
                }
            );
            
            toast.success("Logout successfully.");
            setTimeout(() => {
                localStorage.removeItem("loginInfo")
                localStorage.removeItem("userInfo")
                window.location.reload();
            }, 2000);
        } catch (error) {
            setTimeout(() => {}, 2000);
        }
    }
    return (
        <div>
            <button className='bg-pink-600 text-white px-3 py-2 rounded-md z-10 hover:bg-slate-700 duration-300 cursor-pointer'
                onClick={handleLogoutUser}
            >
            Logout
            </button>
        </div>
    )
}

export default LogoutUser
