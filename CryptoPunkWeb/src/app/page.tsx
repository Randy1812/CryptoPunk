import Image from "next/image";
import { useState } from "react";

export default function Home() {

  // const [formData, setFormData] = useState<{ email: string; password: string }>({
  //   email: '',
  //   password: '',
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({...formData, [name]: value });
  // };

  return (
    <main className="h-screen p-24 bg-base-300">
      <div className="flex flex-row justify-end items-center h-full">
        <div className="bg-neutral rounded-lg h-auto w-1/3 mr-40">
          <div className="flex flex-col justify-center px-6 py-8 mx-auto space-y-5 h-full">
            <h1 className="text-white text-2xl font-bold my-2">Welcome back</h1>
            <div className="flex flex-row justify-center gap-3">
              <button className="w-full text-white bg-neutral ring-2 ring-gray-600 font-medium rounded-lg text-sm px-2 py-2.5 text-center flex flex-row gap-2">
                <Image
                  src="/google.svg"
                  alt="Google logo"
                  height={20}
                  width={20}
                />
                Log in with Google
              </button>
              <button className="w-full text-white bg-neutral ring-2 ring-gray-600 font-medium rounded-lg text-sm px-2 py-2.5 text-center flex flex-row gap-2">
                <Image
                  src="/facebook.png"
                  alt="Google logo"
                  height={20}
                  width={20}
                />
                Log in with Facebook
              </button>
            </div>
            <div className="flex items-center justify-center">
              <div className="border-t border-gray-500 w-1/2"></div>
              <div className="mx-4">or</div>
              <div className="border-t border-gray-500 w-1/2"></div>
            </div>
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                Your Email
              </span>
              <input
                type="email"
                name="email"
                className="mt-1 px-3 py-2 text-black bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-3"
                placeholder="you@example.com"
                // value={formData.email}
                // onChange={handleChange}
              />
            </label>
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                Password
              </span>
              <input
                type="password"
                name="password"
                className="mt-1 px-3 py-2 text-black bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-3"
                placeholder="••••••••"
                // value={formData.password}
                // onChange={handleChange}
              />
            </label>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required={true}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-primary hover:underline dark:text-primary"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-primary hover:bg-blue-600  focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400 flex flex-row gap-2">
              Don&apos;t have an account yet?{" "}
              <a
                href="#"
                className="font-medium text-primary hover:underline dark:text-primary"
              >
                Sign up
              </a>
            </p>
          </div>
          {/* <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="text-white font-medium label-text">Your Email</span>
          </div>
          <input
            type="email"
            placeholder="you@example.com"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="text-white font-medium label-text">Password</span>
          </div>
          <input
            type="password"
            placeholder="***********"
            className="input input-bordered w-full max-w-xs"
          />
        </label> */}
        </div>
      </div>
    </main>
  );
}
