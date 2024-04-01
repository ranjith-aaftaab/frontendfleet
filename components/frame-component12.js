import styles from "./frame-component12.module.css";

const FrameComponent12 = () => {
  return (
    <div className={styles.filterInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.download1Wrapper}>
            <img
              className={styles.download1Icon}
              loading="lazy"
              alt=""
              src="/download-1@2x.png"
            />
          </div>
          <h2 className={styles.getUpto2}>
            Get upto 2% Cashback from Transportbook
          </h2>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.addTruck}>Add Truck</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent12;
