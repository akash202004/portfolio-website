import type React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full max-w-4xl mx-auto px-4 md:px-6">
      {children}
    </div>
  );
}

export default Container;
