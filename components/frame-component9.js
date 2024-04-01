import styles from "./frame-component9.module.css";

const FrameComponent9 = () => {
  return (
    <header className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img
              className={styles.userAltFillIcon}
              loading="lazy"
              alt=""
              src="/user-alt-fill.svg"
            />
          </div>
          <div className={styles.addInvoiceWrapper}>
            <div className={styles.addInvoice}>
              <div className={styles.user}>User</div>
              <div className={styles.wrapper}>
                <div className={styles.div}>1234567890</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.invoicesWrapper}>
          <h3 className={styles.invoices}>Invoices</h3>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.plusSymbol}>
            <img
              className={styles.plusIcon}
              loading="lazy"
              alt=""
              src="/plus.svg"
            />
          </div>
          <div className={styles.addInvoice1}>{`Add Invoice `}</div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent9;
