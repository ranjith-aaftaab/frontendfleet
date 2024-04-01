import { useCallback } from "react";
import { useRouter } from "next/router";
import Label from "./label";
import FrameComponent28 from "./frame-component28";
import styles from "./frame3.module.css";

const Frame = ({ onClose }) => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/suppliers");
  }, [router]);

  const onXTextClick = useCallback(() => {
    router.push("/suppliers");
  }, [router]);

  return (
    <div className={styles.frameParent}>
      <header className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.addPartyDetails}>Add Party Details</div>
        <div className={styles.container}>
          <div className={styles.x} onClick={onXTextClick}>
            x
          </div>
        </div>
      </header>
      <section className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.labelWrapper}>
            <Label
              supplierName="Supplier Name *"
              enterSupplierName="Enter Supplier Name"
            />
          </div>
          <div className={styles.label}>
            <div className={styles.labelParent}>
              <div className={styles.label1}>+</div>
              <div className={styles.addMobileNumberWrapper}>
                <div className={styles.addMobileNumber}>Add Mobile Number</div>
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
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
            <div className={styles.circleParent}>
              <div className={styles.circle}>
                <div className={styles.circleChild} />
              </div>
              <div className={styles.bitEncryption}>256-bit Encryption</div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent28
        propPadding="var(--padding-2xl) var(--padding-34xl) var(--padding-3xl) var(--padding-245xl)"
        propGap="30px"
        propHeight="80px"
        propWidth="624px"
        propHeight1="unset"
        propColor="#a0a0a0"
        onRectangleClick={onRectangleClick}
      />
    </div>
  );
};

export default Frame;
