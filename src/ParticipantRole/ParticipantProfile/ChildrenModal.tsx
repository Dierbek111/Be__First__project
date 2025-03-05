import { useEffect } from "react";

interface AddChildrenModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddChildrenModal({ isOpen, onClose }: AddChildrenModalProps) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        console.log("Clicked:", (event.target as HTMLElement).id);
      if ((event.target as HTMLElement).id === "modal-overlay") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-white text-start p-6 rounded-2xl shadow-lg w-[500px]">
        <h2 className="text-3xl text-black font-semibold mb-2">Add Children</h2>
        <p className="text-sm text-gray-500 mb-6">
          Let's add your children to participate in Competition.
        </p>

        <form className="grid grid-cols-2 gap-4">
          {[
            { label: "First Name", type: "text"  },
            { label: "Last Name", type: "text" },
            { label: "Father's Name", type: "text" },
            { label: "Birthday", type: "date" },
            { label: "Study Place", type: "text" },
          ].map(({ label, type }, index) => (
            <div key={index} className="relative border border-[#79747E] rounded-2xl p-2">
              <label className="absolute left-3 -top-2.5 px-2 text-sm text-[#1C1B1F] bg-white">
                {label}
              </label>
              <input
                type={type}
                className="w-full outline-none py-2 px-3 bg-white text-base/[18px] text-[#1C1B1F] md:text-sm/[12px] rounded-2xl"
              />
            </div>
          ))}
          <div className="relative border border-[#79747E] rounded-2xl p-3">
            <label className="absolute left-3 -top-2.5 px-2 text-sm text-[#1C1B1F] bg-white">
              Type of Kinship
            </label>
            <select className="w-full outline-none py-2 px-3 bg-white text-base/[18px] text-[#1C1B1F] md:text-sm/[12px] rounded-2xl">
              <option>Son</option>
              <option>Daughter</option>
            </select>
          </div>
        </form>

        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-2xl text-gray-700"
          >
            Cancel
          </button>
          <button className="px-5 py-2 bg-orange-400 hover:bg-orange-500 text-white rounded-2xl">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
