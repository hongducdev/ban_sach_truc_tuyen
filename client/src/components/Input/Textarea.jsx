import React from "react";
import { useController } from "react-hook-form";

const Textarea = ({ name = "", className, control, ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  const classes =
    "w-full p-4 text-base text-black transition-all border rounded-lg outline-none focus:border-blue-500 border-slate-700 min-h-[100px]";

  return (
    <textarea
      className={`${classes} ${className}`}
      {...field}
      {...props}></textarea>
  );
};

export default Textarea;
