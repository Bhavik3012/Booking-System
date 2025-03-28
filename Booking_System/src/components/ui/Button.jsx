import React from 'react';

const Button = React.forwardRef(({ children, className = "", ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`px-6 py-2 rounded-md transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export { Button };
