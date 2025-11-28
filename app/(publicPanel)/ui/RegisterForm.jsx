"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [father, setFather] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleFatherChange = (e) => {
    setFather(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          father,
          gender,
          address,
        }),
      });
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen flex justify-center bg-gray-100 py-12 px-4 border-t-4 border-cyan-600 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-8 flex flex-col ">
        <div>
          <h2 className="mb-4 text-center text-4xl font-bold text-teal-700">
            Create an Account
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm  ">
            <div className="mb-2">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="mb-2 flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="mb-2 flex">
              <label htmlFor="father" className="sr-only">
                Father Name
              </label>
              <input
                id="father"
                name="father"
                type="text"
                autoComplete="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter Father Name"
                onChange={handleFatherChange}
              />
            </div>
            <div className="mb-2 flex">
              <label htmlFor="address" className="sr-only">
                {" "}
                Address{" "}
              </label>
              <textarea
                id="address"
                name="address"
                rows="4"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your full address here..."
                onChange={handleAddressChange}
              ></textarea>
            </div>
            <div className="mb-2 flex  ">
              <fieldset onChange={handleGenderChange}>
                <legend className="text-sm font-medium text-gray-700">Gender :  </legend>
                <div className="m-2 flex-row justify-between items-center flex gap-14 ">
                  <div className="flex items-center ">
                    <input
                      id="male"
                      name="gender"
                      type="radio"
                      value="male"
                      className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                    <label htmlFor="male" className="ml-2 block text-sm text-gray-700">
                      {" "}
                      Male{" "}
                    </label>
                  </div>
                  <div className=" flex items-center">
                    <input
                      id="female"
                      name="gender"
                      type="radio"
                      value="female"
                      className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"/>
                    <label
                      htmlFor="female"
                      className="ml-2 block text-sm text-gray-700">
                      {" "}
                      Female{" "}
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="other"
                      name="gender"
                      type="radio"
                      value="other"
                      className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"/>
                    <label htmlFor="other" className="ml-2 block text-sm text-gray-700">
                      {" "}
                      Other{" "}
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register For Admission
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
