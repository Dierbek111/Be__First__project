import { useState } from "react";
import { Trash2, Eye, EyeOff } from "lucide-react";

const Security = () => {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const togglePassword = (field: "current" | "new" | "confirm") => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Security</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="relative w-full">
          <input
            type={showPassword.current ? "text" : "password"}
            placeholder="Current password"
            className="border p-2 rounded w-full pr-10"
          />
          <button
            type="button"
            onClick={() => togglePassword("current")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword.current ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="relative w-full">
          <input
            type={showPassword.new ? "text" : "password"}
            placeholder="New password"
            className="border p-2 rounded w-full pr-10"
          />
          <button
            type="button"
            onClick={() => togglePassword("new")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword.new ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="relative w-full col-span-2">
          <input
            type={showPassword.confirm ? "text" : "password"}
            placeholder="Confirm password"
            className="border p-2 rounded w-full pr-10"
          />
          <button
            type="button"
            onClick={() => togglePassword("confirm")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword.confirm ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <button className="mt-4 bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-xl">
        Save changes
      </button>

      <div className="mt-6 border-t pt-4">
        <h3 className="text-black font-semibold">Danger zone</h3>
        <div className="flex mt-5 items-center gap-3">
          <Trash2 className="text-red-600 w-9 h-9 rounded-2xl bg-red-200 p-2" />
          <button className="font-semibold">Delete account</button>
        </div>
      </div>
    </div>
  );
};

export default Security;
