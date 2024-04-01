import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent29 from "./frame-component29";
import FrameComponent28 from "./frame-component28";
import styles from "./frame21.module.css";

const Frame2 = ({ onClose }) => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/parties");
  }, [router]);

  const onXTextClick = useCallback(() => {
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
        <FrameComponent29 />
      </section>
      <FrameComponent28 onRectangleClick={onRectangleClick} />
    </div>
  );
};

export default Frame2;
