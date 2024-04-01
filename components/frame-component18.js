import styles from "./frame-component18.module.css";

const FrameComponent18 = () => {
  return (
    <header className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.userAltfillParent}>
          <div className={styles.userAltfill}>
            <div className={styles.userAltfillChild} />
            <img
              className={styles.userAltFillIcon}
              loading="lazy"
              alt=""
              src="/user-alt-fill.svg"
            />
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.userParent}>
              <div className={styles.user}>User</div>
              <div className={styles.wrapper}>
                <div className={styles.div}>1234567890</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tripsWrapper}>
          <h3 className={styles.trips}>Trips</h3>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.plusIcon}
            loading="lazy"
            alt=""
            src="/plus-1.svg"
          />
          <div className={styles.addTrip}>Add Trip</div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent18;
