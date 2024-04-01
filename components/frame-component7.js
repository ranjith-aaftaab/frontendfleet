import UserAltFillIcon from "./user-alt-fill-icon";
import styles from "./frame-component7.module.css";

const FrameComponent7 = () => {
  return (
    <header className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <UserAltFillIcon />
          </div>
          <div className={styles.plusSymbol}>
            <div className={styles.userParent}>
              <div className={styles.user}>User</div>
              <div className={styles.wrapper}>
                <div className={styles.div}>1234567890</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.driversWrapper}>
          <h3 className={styles.drivers}>Drivers</h3>
        </div>
      </div>
      <div className={styles.desklightInstance}>
        <div className={styles.frameDiv}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.plusWrapper}>
              <img
                className={styles.plusIcon}
                loading="lazy"
                alt=""
                src="/plus2.svg"
              />
            </div>
            <div className={styles.driverGave}>Driver Gave</div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <div className={styles.plusContainer}>
                <img
                  className={styles.plusIcon1}
                  loading="lazy"
                  alt=""
                  src="/plus.svg"
                />
              </div>
              <div className={styles.driverGot}>Driver Got</div>
            </div>
            <div className={styles.rectangleParent1}>
              <div className={styles.rectangleDiv} />
              <div className={styles.plusFrame}>
                <img
                  className={styles.plusIcon2}
                  loading="lazy"
                  alt=""
                  src="/plus.svg"
                />
              </div>
              <div className={styles.addDriver}>{`Add Driver `}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent7;
