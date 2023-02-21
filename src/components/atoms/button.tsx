import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "~/lib/sass/button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: string;
  children?: ReactNode;
}

export default function Button({
  text,
  children,
  variant,
  ...rest
}: ButtonProps) {
  return (
    <button className={`${styles.btn} ${styles[variant]}`} {...rest}>
      {children}
      <span>{text}</span>
    </button>
  );
}
