import styles from "./frame-component4.module.css";

const FrameComponent4 = ({
  onInvoicesTextClick,
  onReportsTextClick,
  onProfileTextClick,
}) => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.frameContainer}>
          <div className={styles.frameGroup}>
            <div className={styles.frameDiv}>
              <div className={styles.vectorParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/vector-57.svg"
                />
                <img
                  className={styles.diamondAltlightIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-55.svg"
                />
                <img
                  className={styles.diamondAltlightIcon1}
                  loading="lazy"
                  alt=""
                  src="/vector-58.svg"
                />
                <img
                  className={styles.diamondAltlightIcon2}
                  loading="lazy"
                  alt=""
                  src="/vector-59.svg"
                />
              </div>
            </div>
            <div className={styles.invoices} onClick={onInvoicesTextClick}>
              Invoices
            </div>
          </div>
        </div>
        <div className={styles.userboxlightInstance}>
          <img
            className={styles.orderLightIcon}
            loading="lazy"
            alt=""
            src="/order-light.svg"
          />
          <div className={styles.reportsWrapper}>
            <div className={styles.reports} onClick={onReportsTextClick}>
              Reports
            </div>
          </div>
        </div>
        <div className={styles.userBoxLightParent}>
          <img
            className={styles.userBoxLightIcon}
            loading="lazy"
            alt=""
            src="/user-box-light.svg"
          />
          <div className={styles.profile} onClick={onProfileTextClick}>
            Profile
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
