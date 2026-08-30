
import Link from "next/link";

const AdminRegister = ({ handleSubmit }) => {
  return (
    <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-xl">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-teal-500 shadow-lg">
          <span className="text-2xl font-bold text-white">A</span>
        </div>

        <h1 className="text-3xl font-bold text-slate-800">
          Create Admin Account
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Register a new administrator for the coaching system
        </p>
      </div>

      {/* Form */}
      <form action={handleSubmit}>
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
            placeholder="Create a strong password"
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            required
          />
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-indigo-600 via-teal-600 to-emerald-600 py-3 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
        >
          Create Admin Account
        </button>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-500">
            Already have an account?{" "}
            <Link
              href="/admin/login"
              className="font-semibold text-indigo-600 transition hover:text-indigo-800"
            >
              Login here
            </Link>
          </p>
        </div>
      </form>

      {/* Footer */}
      <p className="mt-6 text-center text-xs text-slate-400">
        Coaching Management System
      </p>
    </div>
  );
};

export default AdminRegister;
