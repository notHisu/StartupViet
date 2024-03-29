import styles from "./Input.module.css";

export default function Input({
  className,
  placeholder,
  type,
}: {
  placeholder: string;
  className: string;
  type: string;
}) {
  return (
    <input
      type={type}
      className={`${styles.container} ${className}`}
      placeholder={placeholder}
    />
  );
}
