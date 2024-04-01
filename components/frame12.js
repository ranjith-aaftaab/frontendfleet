import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame12.module.css";

const Frame1 = ({ onClose }) => {
  const router = useRouter();

  const onXTextClick = useCallback(() => {
    router.push("/drivers");
  }, [router]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.chooseDriver}>Choose Driver</b>
        <div className={styles.xWrapper}>
          <h2 className={styles.x} onClick={onXTextClick}>
            x
          </h2>
        </div>
      </div>
      <section className={styles.frameWrapper}>
        <div className={styles.driverNameParent}>
          <div className={styles.driverName}>Driver Name *</div>
          <div className={styles.frameGroup}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.selectADriver}>Select a Driver</div>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <div className={styles.continue}>Continue</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Frame1;
