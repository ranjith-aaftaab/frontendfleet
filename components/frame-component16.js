import styles from "./frame-component16.module.css";

const FrameComponent16 = () => {
  return (
    <header className={styles.fRAMEAParent}>
      <div className={styles.fRAMEA}>
        <div className={styles.fRAMEB}>
          <div className={styles.fRAMEC}>
            <div className={styles.fRAMECChild} />
            <img
              className={styles.userAltFillIcon}
              loading="lazy"
              alt=""
              src="/user-alt-fill.svg"
            />
          </div>
          <div className={styles.fRAMEE}>
            <div className={styles.userParent}>
              <div className={styles.user}>User</div>
              <div className={styles.wrapper}>
                <div className={styles.div}>1234567890</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.profileWrapper}>
          <h3 className={styles.profile}>Profile</h3>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.plusWrapper}>
            <img
              className={styles.plusIcon}
              loading="lazy"
              alt=""
              src="/plus.svg"
            />
          </div>
          <div className={styles.addUser}>{`Add User `}</div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent16;
