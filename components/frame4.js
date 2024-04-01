import { useCallback } from "react";
import FrameComponent27 from "./frame-component27";
import FrameComponent26 from "./frame-component26";
import { useRouter } from "next/router";
import styles from "./frame4.module.css";

const Frame4 = ({ onClose }) => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/drivers");
  }, [router]);

  const onCloseTextClick = useCallback(() => {
    router.push("/drivers");
  }, [router]);

  return (
    <div className={styles.frameParent}>
      <FrameComponent27 />
      <section className={styles.frameWrapper}>
        <FrameComponent26 />
      </section>
      <section className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} onClick={onRectangleClick} />
          <div className={styles.closeWrapper}>
            <div className={styles.close} onClick={onCloseTextClick}>
              Close
            </div>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameInner} />
          <div className={styles.saveChanges}>Save Changes</div>
        </div>
      </section>
    </div>
  );
};

export default Frame4;
