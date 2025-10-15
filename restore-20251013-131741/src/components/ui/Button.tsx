"use client";
import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
};

export default function Button({ variant="primary", className, ...rest }: Props) {
  const base = "inline-flex items-center justify-center rounded-xl2 px-5 py-3 text-base font-medium transition-colors";
  const styles = {
    primary: "bg-brand-gold text-brand-green hover:bg-brand-gold2 shadow-brand",
    outline: "border border-brand-gold text-brand-green hover:bg-brand-gold/10",
    ghost:   "text-brand-green hover:bg-brand-gold/10"
  }[variant];

  return <button className={clsx(base, styles, className)} {...rest} />;
}
