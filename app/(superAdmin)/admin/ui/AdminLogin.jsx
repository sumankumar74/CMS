import Link from "next/link";

const AdminLogin = ({ handleSubmit, username, setUsername, password, setPassword }) => {
  
  return (
    <form onSubmit={handleSubmit} className="Admin flex justify-center border items-center w-[40%] p-8 shadow-neutral-700 shadow-lg flex-col mt-[-15%] rounded-xl bg-white">
      <div className="p-5 w-full rounded-xl">
        <h1 className="text-indigo-700 text-3xl mb-5 font-serif font-bold text-center">Admin Login</h1>
        <div className="flex flex-col mb-3">
          <label htmlFor="username" className="text-red-600 font-semibold text-xl font-serif">Email/Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Email/Username"
            className="px-3 py-2 rounded-lg border"
            required
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="password" className="text-red-600 font-semibold text-xl font-serif">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="px-3 py-2 rounded-lg border"
            required
          />
        </div>
       
         <div className="flex justify-center w-full items-center bg-gradient-to-r from-blue-700 via-green-700 to-rose-700 rounded-3xl font-serif hover:scale-105 duration-300 cursor-pointer">
          <button type="submit" className="py-2 text-white font-sans text-2xl">LOGIN</button>
        </div>
       
      </div>
    </form>
  );
};

export default AdminLogin;
