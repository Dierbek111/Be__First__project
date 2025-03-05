import { useState } from "react";
import { CalendarIcon } from "lucide-react";

const PersonalInfo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 ">
      <h2 className="text-xl font-semibold mb-4">Personal info</h2>

      <div className="flex flex-col items-start mb-4">
        <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-full">
          <span className="text-gray-500 text-2xl">👤</span>
        </div>
        <button className="text-orange-500 mt-2 pl-3 text-sm font-medium">Browse</button>
      </div>

      <div className="space-y-3">
        <div className="flex gap-2">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-1/2 p-3 border rounded-lg bg-gray-100"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-1/2 p-3 border rounded-lg bg-gray-100"
          />
        </div>

        <div className="relative">
          <input
            type="text"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            placeholder="Date of Birth (DD.MM.YYYY)"
            className="w-full p-3 border rounded-lg bg-gray-100"
          />
          <CalendarIcon className="absolute right-3 top-3 text-gray-400" />
        </div>

        <div className="flex gap-2">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-1/2 p-3 border rounded-lg bg-gray-100"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-1/2 p-3 border rounded-lg bg-gray-100"
          />
        </div>
      </div>

      <button className="px-4 bg-orange-400 text-white font-medium py-2 mt-4 rounded-lg hover:bg-orange-500">
        Save changes
      </button>
    </div>
  );
};

export default PersonalInfo;
