import { Link } from "react-router-dom";
import RefereeInput from "./RefereeProfileInput/RefereeInput";
import { Trash2 } from "lucide-react";

const Security = () => {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Security</h2>
        <div className="grid grid-cols-2 gap-4">
          <RefereeInput type="password" placeholder="Current password" name="current-password"/>
          <RefereeInput type="password" placeholder="New password" name="new-password" />
          <RefereeInput type="password" placeholder="Confirm password" name="confirm-password" />
        </div>
        <button className="mt-4 bg-[#FF9D23] text-white px-4 py-2 rounded-lg">Save changes</button>
        <div className="mt-6 border-t pt-4">
          <h3 className="text-[#0B0C0E] text-base sm:text-2xl mb-2">Danger zone</h3>
          <Link to={''}>
          <div className="flex mt-5 items-center gap-3">
          <Trash2 className="text-red-600 w-9 h-9 rounded-2xl bg-red-200 p-2" />
          <button className="font-semibold">Delete account</button>
          </div>
          </Link>
        </div>
      </div>
    );
  };
  
  export default Security;
  