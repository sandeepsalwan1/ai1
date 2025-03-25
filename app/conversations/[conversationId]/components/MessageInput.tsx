"use client";

import { FC } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  placeholder?: string;
  id: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const MessageInput: FC<MessageInputProps> = ({
  placeholder,
  id,
  type = "text",
  required,
  disabled,
  register,
  errors
}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        autoComplete={id}
        placeholder={placeholder}
        disabled={disabled}
        className="text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed"
        {...register(id, { required })}
      />
    </div>
  );
};

export default MessageInput;
