import styles from "./reports-wrapper.module.css";

const ReportsWrapper = () => {
  return (
    <header className={styles.reportsWrapper}>
      <div className={styles.userFillInstanceParent}>
        <div className={styles.userFillInstance}>
          <div className={styles.userFillInstanceChild} />
          <img
            className={styles.userAltFillIcon}
            loading="lazy"
            alt=""
            src="/user-alt-fill.svg"
          />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.userParent}>
            <div className={styles.user}>User</div>
            <div className={styles.supplierLabelWrapper}>
              <div className={styles.supplierLabel}>1234567890</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.reportsContainer}>
        <h3 className={styles.reports}>Reports</h3>
      </div>
    </header>
  );
};

export default ReportsWrapper;
