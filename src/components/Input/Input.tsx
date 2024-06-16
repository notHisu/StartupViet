import styles from "./Input.module.css";

export default function Input({
  className,
  placeholder,
  type,
  value,
  setValue,
}: {
  placeholder: string;
  className?: string;
  type: string;
  value?: string;
  setValue?: any;
}) {
  return (
    <input
      type={type}
      className={`${styles.container} ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={setValue ? (e) => setValue(Number(e.target.value)) : undefined}
    />
  );
}
