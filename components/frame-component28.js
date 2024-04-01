import { useMemo } from "react";
import styles from "./frame-component28.module.css";

const FrameComponent28 = ({
  propPadding,
  propGap,
  propHeight,
  propWidth,
  propHeight1,
  propColor,
  onRectangleClick,
}) => {
  const frameSectionStyle = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  const rectangleDiv2Style = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  const closeStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const saveChangesStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <section className={styles.rectangleParent} style={frameSectionStyle}>
      <div className={styles.frameChild} style={rectangleDiv2Style} />
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} onClick={onRectangleClick} />
        <div className={styles.closeWrapper}>
          <div className={styles.close} style={closeStyle}>
            Close
          </div>
        </div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.frameInner} />
        <div className={styles.saveChanges} style={saveChangesStyle}>
          Save Changes
        </div>
      </div>
    </section>
  );
};

export default FrameComponent28;
