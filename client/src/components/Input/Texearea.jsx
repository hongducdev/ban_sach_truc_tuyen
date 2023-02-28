import React from "react";
import { useController } from "react-hook-form";

const Textarea = (props) => {
  const {
    control,
    name,
    placeholder = "",
    children,
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <textarea
      className="w-full p-4 text-base text-black transition-all border rounded-lg outline-none focus:border-blue-500 border-slate-700 min-h-[100px]"
      placeholder={placeholder}
      {...field}
      {...rest}></textarea>
  );
};

export default Textarea;
