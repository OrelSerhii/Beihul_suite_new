import { ReactNode } from "react";
export function Card({children, className=""}:{children:ReactNode; className?:string}) {
  return <div className={`rounded-xl bg-white shadow-soft border border-black/5 ${className}`}>{children}</div>;
}
