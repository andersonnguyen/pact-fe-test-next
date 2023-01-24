import styles from "./index.module.scss";

export const SkipToContent = () => {
  return (
    <a href="#content" className={styles.SkipToContent}>
      Skip to content &rarr;
    </a>
  );
};

export default SkipToContent;
