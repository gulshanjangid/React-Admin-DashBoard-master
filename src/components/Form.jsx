import React, { useContext } from "react";
import google from "../images/google.png";
import apple from "../images/appleG.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./Firebase/firebase";
import { Context } from "../context/contextApi";

export default function Form() {
  const { setUser } = useContext(Context);
  const provider = new GoogleAuthProvider();

  const continueWithGoogle = async () => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      const data = {
        name: user.displayName,
        img: user.photoURL,
        email: user.email,
      };
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <section className="bg-gray-300 dark:bg-gray-600 rounded-lg">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-center lg:p-0 mx-auto">
          {/* Banner */}
          <div className="md:flex flex-col justify-between sm:w-[40%] w-full sm:h-full items-center hidden md:m-5">
            <div className="font-bold text-center sm:flex items-center font-[Montserrat] justify-center dark:text-white text-7xl text-black">
              DashGo.
            </div>
            <p className=" text-red-900 dark:text-red-300">
              Currently registering is not available!
            </p>
          </div>
          {/* Form */}
          <div className="w-full sm:w-[60%] sm:h-full flex items-center justify-center rounded-r-lg shadow md:mt-0  xl:p-0 bg-gray-600 dark:bg-gray-300">
            <div className="p-3 md:p-6 w-[28rem] self-center space-y-1 md:space-y-6 sm:p-2 md:my-5">
              {/* Heading */}
              <div>
                <h1 className="text-2xl font-bold leading-tight tracking-tight md:text-4xl text-white">
                  Sign in
                </h1>
                <h4>Sign in to your account</h4>
              </div>

              <div className="buttons text-sm [_&]:cursor-pointer flex justify-evenly md:justify-between items-center space-x-2">
                <div
                  onClick={continueWithGoogle}
                  className="btn md:w-1/2 bg-white text-gray-700 font-medium space-x-1 md:rounded-xl rounded-full py-1 sm:py-2 flex flex-row justify-evenly items-center px-1"
                >
                  <img src={google} className="w-6" />
                  <span className="hidden md:block">Sign in with Google</span>
                </div>
                <div className="btn md:w-1/2 bg-white text-gray-700 font-medium space-x-1 rounded-full md:rounded-xl py-1  sm:py-2 flex flex-row justify-evenly items-center px-1 sm:px-3">
                  <img src={apple} className="w-6" />
                  <span className="hidden md:block">Sign in with Apple</span>
                </div>
              </div>
              <form
                className="space-y-4 rounded-xl px-5 py-6 bg-white md:space-y-6"
                action="#"
              >
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-semibold text-gray-900"
                  >
                    Email adress
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="sm:text-sm rounded-lg block w-full p-2.5 bg-gray-100"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-semibold text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-100"
                    required=""
                  />
                </div>
                {/* Forgot pass */}
                <div className="flex text-[rgb(52,107,212)] items-center justify-between">
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                {/* Buttton  */}
                <button
                  type="submit"
                  className="w-full bg-black text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5  text-center dark:bg-primary-600 dark:hover:bg-primary-700 "
                >
                  Sign in
                </button>
              </form>

              <p className="text-sm text-center font-light text-gray-300 dark:text-gray-700">
                Don’t have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-blue-400 hover:underline dark:text-blue-700"
                >
                  Register here
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
