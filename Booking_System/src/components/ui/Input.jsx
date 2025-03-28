import React from 'react';

const Input = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`px-4 py-2 border border-[#FFA726] rounded-md text-[#424242] bg-white focus:outline-none focus:ring-2 focus:ring-[#FFA726] ${className}`}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
