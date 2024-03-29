import Button from "@/components/Button/Button";
import styles from "./login.module.css";
import Input from "@/components/Input/Input";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <form className={`l-6 ${styles.form}`}>
        <h1>Login</h1>
        <Input type="text" className={styles.inp} placeholder="Email Address" />
        <Input type="password" className={styles.inp} placeholder="Password" />
        <Button className={styles.btn}>Login</Button>
        <p>Sign up</p>
      </form>
    </div>
  );
}
