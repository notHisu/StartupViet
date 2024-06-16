import styles from "./Button.module.css";

export default function Button({
  className,
  onClick,
  children,
  disabled,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`${styles.container} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
