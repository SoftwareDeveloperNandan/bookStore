import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast"


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const loginInfo = {
      email: data.userEmail,
      password: data.userPassword
    }
    await axios.post("http://localhost:7000/bookstore/user/login", loginInfo)
    .then(
      (res) =>{
        if (res.data) {
          toast.success(`${res.data.message}`);
          setTimeout(() => {
            localStorage.setItem("loginInfo", JSON.stringify(res.data))
            window.location.reload();
          }, 2000);
          
        }
      }
    ).catch((error) => {
      toast.error(`Invalid credentials.`)
      if (error.res) {
        setTimeout(() => {}, 2000);
      }
    })
  }

  return (
    <div>
      <dialog id="openModal" className="modal">
        <div className="modal-box dark:bg-slate-100 dark:text-slate-950 ">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <div
              onClick={() => document.getElementById("openModal").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </div>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-1">
              <span>Email</span>
              <br />
              <input
                type="email"
                id="userEmail"
                placeholder="abc@gmail.com"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:bg-slate-100 dark:text-slate-950"
                {...register("userEmail", { required: true })}
                autoComplete="off"
              />
              {errors.userEmail && <span className="text-red-600">This field is required</span>}
            </div>

            <div className="mt-4 space-y-1">
              <span>Password</span>
              <br />
              <input
                type="password"
                id="userPassword"
                placeholder="Strong password" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:bg-slate-100 dark:text-slate-950"
                {...register("userPassword", { required: true })}
                autoComplete="off"
              />
              {errors.userPassword && <span className="text-red-600">This field is required</span>}
            </div>
            {/* button */}
            <div className="mt-4 flex justify-between text-center items-center">
            <button className="px-5 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-800 duration-200">
              Login
            </button>
              <p>
                Not registered?{" "}
                <Link
                  to={"/signup"}
                  className="text-blue-500 cursor-pointer underline"
                >
                  Signup
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
