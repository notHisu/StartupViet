import styles from "./Button.module.css";

export default function Button({
  className,
  children,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <button className={`${styles.container} ${className}`}>{children}</button>
  );
}
