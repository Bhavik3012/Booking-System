import React from "react";

export function Select({ children, className = "", ...props }) {
  return (
    <select
      className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}

export function SelectItem({ children, value, className = "", ...props }) {
  return (
    <option value={value} className={`${className}`} {...props}>
      {children}
    </option>
  );
}
