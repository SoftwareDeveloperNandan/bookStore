import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast"

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.userEmail,
      password: data.userPassword
    }
    await axios.post("http://localhost:7000/bookstore/user/register", userInfo)
    .then(
      (res) =>{
        if (res.data) {
          console.log(res.data.message);
          toast.success(`${res.data.message}`)
          localStorage.setItem("userInfo", JSON.stringify(res.data))
        }
      }
    ).catch((error) => {
      console.log("Error", error);
      toast.error(`User already exist.`)
    })
  }
  return (
    <>
      <div>
        <div
          className="flex h-screen items-center justify-center grow shadow-lg "
        >
          <div className="modal-box border-[2px] p-6 rounded-3xl w-[700px] dark:bg-slate-100 dark:text-slate-950">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
            <h3 className="font-bold text-lg">Sign Up</h3>
            <div className="mt-4 space-y-1">
              <span>Full Name</span>
              <br />
              <input
                type="text"
                id="fullname"
                placeholder="Nandan Kumar"
                className="w-full px-3 py-1 border rounded-md grow outline-none dark:bg-slate-100 dark:text-slate-950 "
                {...register("fullname", { required: true })}
                autoComplete="off"
              />
              {errors.fullname && <span className="text-red-600">This field is required</span>}
            </div>

            <div className="mt-4 space-y-1">
              <span>Email</span>
              <br />
              <input
                type="email"
                id="userEamail"
                placeholder="abc@gmail.com"
                className="w-full px-3 py-1  border rounded-md grow outline-none dark:bg-slate-100 dark:text-slate-950 "
                {...register("userEmail", { required: true })}
                autoComplete="off"
              />
              {errors.userFullname && <span className="text-red-600">This field is required</span>}
            </div>

            <div className="mt-4 space-y-1">
              <span>Password</span>
              <br />
              <input
                type="password"
                id="userPassword"
                placeholder="Password"
                className="w-full px-3 py-1  border rounded-md grow outline-none dark:bg-slate-100 dark:text-slate-950 "
                {...register("userPassword", { required: true })}
                autoComplete="off"
              />
              {errors.userPassword && <span className="text-red-600">This field is required</span>}
            </div>

            <div className="mt-4 space-y-1">
              <span>Confirm Password</span>
              <br />
              <input
                type="password"
                id="userCPassword"
                placeholder="Confirm password"
                className="w-full px-3 py-1  border rounded-md grow outline-none dark:bg-slate-100 dark:text-slate-950 "
                {...register("userCPassword", { required: true })}
                autoComplete="off"
              />
              {errors.userCPassword && <span className="text-red-600">This field is required</span>}
            </div>

            {/* button */}
            <div className="mt-4 flex justify-between text-center items-center">
              <button className="px-5 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-800 duration-200">
                Signup
              </button>
              <p>
                Have a account?{" "}
                <Link
                  to={"/"}
                  className="underline text-blue-700 cursor-pointer"
                >
                  Login
                </Link>
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signup;
