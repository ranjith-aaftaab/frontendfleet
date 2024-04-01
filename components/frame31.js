import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent25 from "./frame-component25";
import FrameComponent24 from "./frame-component24";
import FrameComponent28 from "./frame-component28";
import styles from "./frame31.module.css";

const Frame3 = ({ onClose }) => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/drivers");
  }, [router]);

  return (
    <div className={styles.frameParent}>
      <FrameComponent25 />
      <FrameComponent24 />
      <FrameComponent28
        propPadding="var(--padding-7xl) var(--padding-14xl) var(--padding-8xl) var(--padding-192xl)"
        propGap="41px"
        propHeight="90px"
        propWidth="562px"
        propHeight1="unset"
        propColor="#fff"
        onRectangleClick={onRectangleClick}
      />
    </div>
  );
};

export default Frame3;
