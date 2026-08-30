import React from "react";
import MenuBar from "./MenuBar";

const SideBar = () => {
return ( <aside className="h-full w-full border-r bg-white shadow-sm flex flex-col overflow-y-auto">

```
  {/* Logo / Brand */}
  <div className="px-5 py-6 border-b bg-gradient-to-b from-slate-50 to-white">
    <div className="flex items-center justify-center gap-3">
      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-md">
        <span className="text-white font-bold text-lg">C</span>
      </div>

      <div>
        <h1 className="text-xl font-bold text-slate-800 tracking-tight">
          C.M.S.
        </h1>
        <p className="text-xs text-slate-500">
          Coaching Management
        </p>
      </div>
    </div>
  </div>

  {/* Menu */}
  <div className="flex-1 py-5">
    

    <MenuBar />
  </div>

  {/* Footer */}
  <div className="border-t px-5 py-4">
    <p className="text-xs text-center text-slate-400">
      Coaching Management System
    </p>
    <p className="text-[11px] text-center text-slate-300 mt-1">
      Admin Panel
    </p>
  </div>
</aside>


);
};

export default SideBar;