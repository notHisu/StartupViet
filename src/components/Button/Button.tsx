import styles from "./Button.module.css";

export default function Button({
  className,
  onClick,
  children,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className: string;
}) {
  return (
    <button onClick={onClick} className={`${styles.container} ${className}`}>
      {children}
    </button>
  );
}
