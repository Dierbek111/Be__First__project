import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { uz } from "date-fns/locale/uz";
import { enGB as en } from "date-fns/locale/en-GB"; 
import { ru } from "date-fns/locale/ru";

registerLocale('uz', uz);
registerLocale('en', en);
registerLocale('ru', ru);

interface BirthdayInputProps {
  locale?: 'en' | 'uz' | 'ru';
}

const BirthdayInput: React.FC<BirthdayInputProps> = ({ locale = 'en' }) => {
  const [date, setDate] = useState<Date | null>(null);

  const placeholders: { [key in 'en' | 'uz' | 'ru']: string } = {
    'en': "dd/mm/yyyy",
    'uz': "kun/oy/yil",
    'ru': "дд/мм/гггг"
  };

  return (
    <DatePicker
    required
    selected={date}
    onChange={(date) => setDate(date)}
    locale={locale}
    placeholderText={placeholders[locale] || "dd/mm/yyyy"}
    dateFormat="dd/MM/yyyy"
    wrapperClassName="w-full"
    className="w-full py-1 px-2 bg-inherit text-base leading-normal outline-none placeholder-[#0B0C0E] placeholder:text-sm"
    id="birthday"
    name="birthday"
  />  
  );
}

export default BirthdayInput;