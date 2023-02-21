import { InputHTMLAttributes } from "react";
import styles from "~/lib/sass/text-field.module.scss";
interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function TextField({ ...rest }: TextFieldProps) {
  return <input className={styles["text-field"]} {...rest} />;
}
