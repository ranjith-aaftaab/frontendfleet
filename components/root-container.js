import { useMemo } from "react";
import UserAltFillIcon from "./user-alt-fill-icon";
import styles from "./root-container.module.css";

const RootContainer = ({ trucks, frameDivWidth, frameDivMinWidth }) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const trucksStyle = useMemo(() => {
    return {
      minWidth: frameDivMinWidth,
    };
  }, [frameDivMinWidth]);

  return (
    <header className={styles.rootContainer}>
      <div className={styles.frameParent} style={frameDivStyle}>
        <div className={styles.frameGroup}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <UserAltFillIcon />
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.userParent}>
              <div className={styles.user}>User</div>
              <div className={styles.wrapper}>
                <div className={styles.div}>1234567890</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.trucksWrapper}>
          <h3 className={styles.trucks} style={trucksStyle}>
            {trucks}
          </h3>
        </div>
      </div>
      <div className={styles.rootContainerInner}>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.plusWrapper}>
            <img
              className={styles.plusIcon}
              loading="lazy"
              alt=""
              src="/plus.svg"
            />
          </div>
          <div className={styles.addTruck}>{`Add Truck `}</div>
        </div>
      </div>
    </header>
  );
};

export default RootContainer;
