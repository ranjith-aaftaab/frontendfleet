import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame21.module.css";

const Frame2 = ({ onClose }) => {
  const router = useRouter();

  const onXTextClick = useCallback(() => {
    router.push("/parties");
  }, [router]);

  const onRectangleClick = useCallback(() => {
    router.push("/parties");
  }, [router]);

  return (
    <div className={styles.frameParent}>
      <header className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <h2 className={styles.addPartyDetails}>Add Party Details</h2>
        <div className={styles.xWrapper}>
          <h1 className={styles.x} onClick={onXTextClick}>
            x
          </h1>
        </div>
      </header>
      <section className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.enterPartyNameWrapper}>
            <div className={styles.enterPartyName}>
              <div className={styles.partyName}>Party Name *</div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <div className={styles.enterPartyName1}>Enter party Name</div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.addNewPartyParent}>
                  <div className={styles.addNewParty}>
                    <div className={styles.openingBalance}>
                      Opening Balance *
                    </div>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.frameInner} />
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
                  <div className={styles.groupDiv}>
                    <div className={styles.rectangleDiv} />
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
      </section>
      <section className={styles.frameSection}>
        <div className={styles.frameChild1} />
        <div className={styles.frameDiv}>
          <div className={styles.frameChild2} onClick={onRectangleClick} />
          <div className={styles.closeWrapper}>
            <div className={styles.close}>Close</div>
          </div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.frameChild3} />
          <div className={styles.saveChanges}>Save Changes</div>
        </div>
      </section>
    </div>
  );
};

export default Frame2;
