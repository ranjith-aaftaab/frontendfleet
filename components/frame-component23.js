import styles from "./frame-component23.module.css";

const FrameComponent23 = ({ onXTextClick }) => {
  return (
    <header className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.addTrip}>Add Trip</div>
      <div className={styles.tripDetailsLabel}>
        <h2 className={styles.x} onClick={onXTextClick}>
          x
        </h2>
      </div>
    </header>
  );
};

export default FrameComponent23;
