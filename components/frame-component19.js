import styles from "./frame-component19.module.css";

const FrameComponent19 = ({ onRectangleClick }) => {
  return (
    <footer className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} onClick={onRectangleClick} />
        <div className={styles.closeWrapper}>
          <div className={styles.close}>Close</div>
        </div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.frameInner} />
        <div className={styles.saveTrip}>Save trip</div>
      </div>
    </footer>
  );
};

export default FrameComponent19;
