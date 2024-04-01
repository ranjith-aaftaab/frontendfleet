import styles from "./frame-component20.module.css";

const FrameComponent20 = () => {
  return (
    <div className={styles.startKmsReadingParent}>
      <div className={styles.startKmsReading}>Start Kms Reading *</div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.startReadingsWrapper}>
          <div className={styles.startReadings}>Start readings</div>
        </div>
        <div className={styles.kms}>KMs</div>
      </div>
    </div>
  );
};

export default FrameComponent20;
