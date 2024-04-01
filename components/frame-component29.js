import styles from "./frame-component29.module.css";

const FrameComponent29 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.enterPartyNameWrapper}>
        <div className={styles.enterPartyName}>
          <div className={styles.partyName}>Party Name *</div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.enterPartyName1}>Enter party Name</div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.addNewPartyParent}>
              <div className={styles.addNewParty}>
                <div className={styles.openingBalance}>Opening Balance *</div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <div className={styles.div}>0</div>
                </div>
              </div>
              <div className={styles.addMobileNumberLabel}>
                <div className={styles.calendarIcon}>+</div>
                <div className={styles.addMobileNumberWrapper}>
                  <div className={styles.addMobileNumber}>
                    Add Mobile Number
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.saveButton}>
              <div className={styles.openingBalanceDate}>
                Opening balance Date *
              </div>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameInner} />
                <div className={styles.detailsContainer}>20-03-2024</div>
                <div className={styles.partyIcon}>
                  <img
                    className={styles.calendarIcon1}
                    alt=""
                    src="/calendar.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.titleLabelParent}>
        <div className={styles.titleLabel}>
          <div className={styles.untitledDesign2Wrapper}>
            <img
              className={styles.untitledDesign2}
              loading="lazy"
              alt=""
              src="/untitled-design-2@2x.png"
            />
          </div>
          <div className={styles.safeSecure}>{`100% Safe & Secure`}</div>
        </div>
        <div className={styles.bitIcon}>
          <div className={styles.circleShapeWrapper}>
            <div className={styles.circleShape} />
          </div>
          <div className={styles.bitEncryption}>256-bit Encryption</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent29;
