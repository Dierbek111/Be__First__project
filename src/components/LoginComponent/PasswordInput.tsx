import { FC, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

type InputFieldProps = {
  label?: string;
  type: string;
  name: string;
  placeholder?: string
};

const InputField: FC<InputFieldProps> = ({ label, type = 'password', name, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='relative border border-[#79747E] rounded-2xl p-2'>
      <label htmlFor={name} className={`px-2  bg-[#FFF8F8] absolute text-sm px-2 -top-2.5  text-[#1C1B1F]`}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        name={name}
        type={type === 'password' && !showPassword ? 'password' : 'text'}
        className="w-full outline-none py-1 px-2 bg-inherit text-base/[18px] text-[#1C1B1F] md:text-sm/[12px]"    
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

export default InputField;
