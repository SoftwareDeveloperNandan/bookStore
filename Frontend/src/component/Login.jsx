import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login data", data);
  };

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
                className="w-full px-3 py-1 border rounded-md grow outline-none dark:bg-slate-100 dark:text-slate-950 "
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
                className="w-full px-3 py-1  border rounded-md grow outline-none dark:bg-slate-100 dark:text-slate-950 "
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
