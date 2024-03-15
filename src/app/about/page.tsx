import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h2>About Us:</h2>
      <p>
        We believe in the power of connection. That is why we built Connect &
        Launch, a vibrant community designed to empower and support startups at
        every stage.
      </p>
      <h2>Our Mission:</h2>
      <p>
        Our mission is to provide a collaborative space for startups to connect
        with like-minded individuals, access valuable resources, and propel
        their businesses forward.
      </p>
      <h2>Our Vision:</h2>
      <p>
        Our vision is to create a thriving community that fosters innovation,
        growth, and success for startups worldwide.
      </p>
    </div>
  );
}
