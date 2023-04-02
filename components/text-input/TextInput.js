import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const TextInput = ({
  inputValue = "",
  setInputValue = () => {},
  placeholderText = "",
  className = "",
  inputClassName = "",
  fieldName = "",
  type = "text",
  required = false,
  onFocus = () => {},
  onBlur = () => {},
  disabled = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`${className} flex justify-between items-center`}>
      <input
        disabled={disabled}
        onFocus={onFocus}
        onBlur={onBlur}
        type={showPassword ? "text" : type}
        required={required}
        placeholder={placeholderText}
        value={inputValue}
        onChange={(e) => setInputValue(fieldName, e.target.value)}
        className={`bg-inherit focus:outline-0 w-full h-full ${inputClassName}`}
      />
      <div
        className="cursor-pointer hover:opacity-80 transition duration-[175ms]"
        onClick={() => setShowPassword(!showPassword)}
      >
        {type === "password" ? (
          showPassword ? (
            <VisibilityIcon />
          ) : (
            <VisibilityOffIcon />
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default TextInput;
