"use client";
import { ButtonCore } from "~apps/app/component/button"

export const Button = ({ children, className, appName }) => {
  return (
    <div>
      <button
          className={className}
          onClick={() => alert(`Hello from your ${appName} app!`)}
      >
        {children}
      </button>
      <ButtonCore appName="Main App">
        Button from Main App
      </ButtonCore>
    </div>
  
  );
};
