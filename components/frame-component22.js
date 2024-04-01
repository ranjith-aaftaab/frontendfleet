import styles from "./frame-component22.module.css";

const FrameComponent22 = () => {
  return (
    <div className={styles.tripDetailsParent}>
      <b className={styles.tripDetails}>Trip Details</b>
      <div className={styles.routeLabel}>
        <div className={styles.selectParty}>Select Party *</div>
        <div className={styles.destinationLabel}>
          <div className={styles.destinationLabelChild} />
          <div className={styles.egArjunReddy}>Eg: Arjun Reddy</div>
          <div className={styles.playWrapper}>
            <img className={styles.playIcon} alt="" src="/play.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent22;
