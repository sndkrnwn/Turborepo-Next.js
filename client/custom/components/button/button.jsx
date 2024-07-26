"use client";

export const ButtonClient = ({ children, className, appName }) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children} test
    </button>
  );
};
