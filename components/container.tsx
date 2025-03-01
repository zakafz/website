import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="w-[85%] max-w-[650px] py-16 mx-auto flex flex-col">
      {children}
    </div>
  );
}
