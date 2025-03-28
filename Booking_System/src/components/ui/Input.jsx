import React from 'react';

const Input = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`px-4 py-2 border rounded-md text-white focus:outline-none focus:ring-2 ${className}`}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
