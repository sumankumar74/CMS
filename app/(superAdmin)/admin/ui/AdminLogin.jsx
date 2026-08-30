const AdminLogin = ({
  handleSubmit,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-xl"
    >
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-teal-500 shadow-lg">
          <span className="text-2xl font-bold text-white">A</span>
        </div>

        <h1 className="text-3xl font-bold text-slate-800">
          Admin Login
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Sign in to access the administration dashboard
        </p>
      </div>

      {/* Username */}
      <div className="mb-5">
        <label
          htmlFor="username"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Email / Username
        </label>

        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your email or username"
          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
          required
        />
      </div>

      {/* Password */}
      <div className="mb-6">
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Password
        </label>

        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
          required
        />
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full rounded-xl bg-gradient-to-r from-indigo-600 via-teal-600 to-emerald-600 py-3 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
      >
        Login to Dashboard
      </button>

      {/* Footer */}
      <p className="mt-6 text-center text-xs text-slate-400">
        Coaching Management System
      </p>
    </form>
  );
};

export default AdminLogin;
