import { useMemo } from "react";
import styles from "./frame-component1.module.css";

const FrameComponent1 = ({
  totalPartyBalance,
  totalActiveTrips,
  propPadding,
  propWidth,
  propPadding1,
  propWidth1,
  propWidth2,
}) => {
  const infoInstanceStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const rectangleDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const totalActiveTripsDisplayStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const designNameMobileNumberStyle = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <div className={styles.marteXtransportTitleParent}>
      <div className={styles.marteXtransportTitle}>
        <div className={styles.infoInstance} style={infoInstanceStyle}>
          <div className={styles.infoInstanceChild} style={rectangleDivStyle} />
          <div className={styles.totalPartyBalance}>{totalPartyBalance}</div>
          <div className={styles.mobileNumberInput}>
            <div className={styles.infoWrapper}>
              <img
                className={styles.infoIcon}
                loading="lazy"
                alt=""
                src="/info.svg"
              />
            </div>
            <div className={styles.div}>$0</div>
          </div>
        </div>
        <div
          className={styles.totalActiveTripsDisplay}
          style={totalActiveTripsDisplayStyle}
        >
          <div
            className={styles.totalActiveTripsDisplayChild}
            style={rectangleDiv1Style}
          />
          <div className={styles.totalActiveTrips}>{totalActiveTrips}</div>
          <div
            className={styles.designNameMobileNumber}
            style={designNameMobileNumberStyle}
          >
            <img
              className={styles.infoIcon1}
              loading="lazy"
              alt=""
              src="/info.svg"
            />
          </div>
          <div className={styles.activeTripsCount}>0</div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.activeTripsCountDisplay}>
          <img
            className={styles.searchLightIcon}
            alt=""
            src="/search-light.svg"
          />
        </div>
        <div className={styles.searchPartires}>Search Partires</div>
      </div>
    </div>
  );
};

export default FrameComponent1;
