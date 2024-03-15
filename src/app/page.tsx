import Button from "@/components/Button/Button";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>
        Connect & Launch: <br />A Thriving Space for Startups
      </h1>
      <p>
        Looking to ignite your startup journey? Join our collaborative
        community, designed to empower founders like you. We provide a vibrant
        space, both online and in-person, to connect with like-minded
        individuals, access valuable resources, and propel your business
        forward.
      </p>
      <div>
        <Button className={styles.button}>How can we help you?</Button>
      </div>
    </div>
  );
}
