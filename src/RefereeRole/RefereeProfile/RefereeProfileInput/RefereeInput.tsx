import { FC, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

type RefereeInputProps = {
  type: string;
  name: string;
  placeholder?: string
};

const RefereeInput: FC<RefereeInputProps> = ({ type = 'password', name, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='relative'>
      <input
        placeholder={placeholder}
        name={name}
        type={type === 'password' && !showPassword ? 'password' : 'text'}
        className="w-full p-3 text-xs sm:text-sm rounded-lg bg-[#F9F9F9] placeholder-[#0B0C0E] text-[#0B0C0E] focus:outline-none placeholder:text-sm"    
      />
      {type === 'password' && (
        <button
          type="button"
          className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[#1C1B1F]"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      )}
    </div>
  );
};

export default RefereeInput;