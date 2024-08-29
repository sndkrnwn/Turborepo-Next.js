"use client";
import { ButtonCore } from "../../../apps/web/app/components/button";

export const Button = ({ children, className, appName }) => {
  return (
    <div>
      <button
          className={className}
        onClick={() => alert(`Hello from your ${appName} app!`)}
      >
        {children}
      </button>
      <ButtonCore>
        Button from Main App
      </ButtonCore>
    </div>
  
  );
};
