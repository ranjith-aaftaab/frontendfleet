import styles from "./frame-component11.module.css";

const FrameComponent11 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.searchLightWrapper}>
            <img
              className={styles.searchLightIcon}
              alt=""
              src="/search-light.svg"
            />
          </div>
          <div className={styles.searchForA}>Search for a city</div>
        </div>
      </div>
      <div className={styles.figmapParent}>
        <img
          className={styles.figmapIcon}
          loading="lazy"
          alt=""
          src="/figmap@2x.png"
        />
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.dataProcessor}>
            <div className={styles.shapeCollector}>+</div>
          </div>
          <div className={styles.frameInner} />
          <div className={styles.dataProcessor1}>
            <div className={styles.div}>-</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent11;
