import styles from "./frame-component26.module.css";

const FrameComponent26 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.driverNameParent}>
        <div className={styles.driverName}>Driver Name *</div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.enterDriverName}>Enter Driver Name</div>
        </div>
      </div>
      <div className={styles.mobileNumberParent}>
        <div className={styles.mobileNumber}>Mobile Number *</div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.enterMobileNumber}>
            +91 Enter Mobile Number
          </div>
        </div>
      </div>
      <div className={styles.optional}>Optional</div>
      <div className={styles.openingBalance}> Opening Balance</div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent1}>
                <div className={styles.frameWrapper1}>
                  <div className={styles.ellipseParent}>
                    <div className={styles.frameInner} />
                    <div className={styles.ellipseDiv} />
                  </div>
                </div>
                <div className={styles.driverHasTo}>Driver has to pay</div>
              </div>
            </div>
            <div className={styles.amount}>Amount</div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.ellipseWrapper}>
              <div className={styles.frameChild1} />
            </div>
            <div className={styles.driverHasTo1}>Driver has to get</div>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleDiv} />
          <div className={styles.enterAmount}>Enter Amount</div>
          <div className={styles.div}>$</div>
        </div>
        <div className={styles.optional1}>Optional</div>
      </div>
    </div>
  );
};

export default FrameComponent26;
