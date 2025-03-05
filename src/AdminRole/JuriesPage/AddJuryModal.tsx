import { useState } from "react";


interface AddJuryModalProps {
    isOpen: boolean;
    onClose: () => void;
  }

  const AddJuryModal: React.FC<AddJuryModalProps> = ({ isOpen, onClose }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
    if (!isOpen) return null;
  
    return (
      <div 
        className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
        onClick={onClose} 
      >
        <div 
          className="bg-white rounded-2xl shadow-lg w-full max-w-3xl p-6"
          onClick={(e) => e.stopPropagation()} 
        >
          <h2 className="text-xl font-semibold mb-4">Add Jury</h2>
          
          <div className="flex flex-col items-start mb-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-3xl">
              👤
            </div>
            <button className="text-orange-500 pl-3 mt-2">Browse</button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <input 
              type="text" 
              placeholder="First Name" 
              className="w-full bg-gray-100 rounded-md px-3 py-3 text-gray-600 text-sm"
            />
          </div>
          <div className="col-span-1">
            <input 
              type="text" 
              placeholder="Last Name" 
              className="w-full bg-gray-100 rounded-md px-3 py-3 text-gray-600 text-sm"
            />
          </div>
          
          <div className="col-span-1">
            <input 
              type="text" 
              placeholder="Father Name" 
              className="w-full bg-gray-100 rounded-md px-3 py-3 text-gray-600 text-sm"
            />
          </div>
          <div className="col-span-1 relative">
            <input 
              type="text" 
              placeholder="Date of birth" 
              className="w-full bg-gray-100 rounded-md px-3 py-3 text-gray-600 text-sm"
            />
            <div className="absolute right-3 top-3">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          
          <div className="col-span-1">
            <input 
              type="text" 
              placeholder="Place of work" 
              className="w-full bg-gray-100 rounded-md px-3 py-3 text-gray-600 text-sm"
            />
          </div>
          <div className="col-span-1 relative">
            <select className="w-full bg-gray-100 rounded-md px-3 py-3 text-gray-600 text-sm appearance-none">
              <option>Academic degree</option>
            </select>
            <div className="absolute right-3 top-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          <div className="col-span-1">
            <input 
              type="text" 
              placeholder="Profession" 
              className="w-full bg-gray-100 rounded-md px-3 py-3 text-gray-600 text-sm"
            />
          </div>
          <div className="col-span-1">
            <input 
              type="text" 
              placeholder="Логин" 
              className="w-full bg-gray-100 rounded-md px-3 py-3 text-gray-600 text-sm"
            />
          </div>
          
          <div className="col-span-1 relative">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Пароль" 
              className="w-full bg-gray-100 rounded-md px-3 py-3 text-gray-600 text-sm"
            />
            <button 
              onClick={() => setShowPassword(!showPassword)} 
              className="absolute right-3 top-3"
            >
              {showPassword ? (
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
          <div className="col-span-1 relative">
            <input 
              type={showConfirmPassword ? "text" : "password"} 
              placeholder="Повтор пароль" 
              className="w-full bg-gray-100 rounded-md px-3 py-3 text-gray-600 text-sm"
            />
            <button 
              onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
              className="absolute right-3 top-3"
            >
              {showConfirmPassword ? (
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>
          
          <div className="flex justify-end mt-6 space-x-4">
            <button className="bg-gray-200 px-4 py-2 rounded-lg" onClick={onClose}>Cancel</button>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg">Add</button>
          </div>
        </div>
      </div>
    );
  };
  

export default AddJuryModal;


