import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame-component25.module.css";

const FrameComponent25 = () => {
  const router = useRouter();

  const onXTextClick = useCallback(() => {
    router.push("/drivers");
  }, [router]);

  return (
    <section className={styles.frameWrapper}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.addDriverDetailsWrapper}>
          <b className={styles.addDriverDetails}>Add Driver Details</b>
        </div>
        <h2 className={styles.x} onClick={onXTextClick}>
          x
        </h2>
      </div>
    </section>
  );
};

export default FrameComponent25;
