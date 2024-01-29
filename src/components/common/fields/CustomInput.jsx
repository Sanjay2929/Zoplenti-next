import React from "react";

const CustomInput = ({
  type,
  placeholder,
  onInputChange,
  value,
  id,
  maxLength,
}) => {
  return (
    <input
      type={type}
      required
      id={id}
      className="w-full py-[10px] px-[14px] bg-alto rounded-md text-base font-aeoniktrials font-normal text-black text-opacity-[49%] placeholder:text-base placeholder:text-black placeholder:!text-opacity-[49%] outline-none"
      placeholder={placeholder}
      value={value}
      maxLength={maxLength ? `${maxLength}` : ""}
      onChange={onInputChange}
    />
  );
};

export default CustomInput;
