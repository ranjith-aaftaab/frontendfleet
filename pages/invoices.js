import FrameComponent9 from "../components/frame-component9";
import TruckImage from "../components/truck-image";
import styles from "./invoices.module.css";

const Invoices = () => {
  return (
    <div className={styles.invoices}>
      <FrameComponent9 />
      <main className={styles.suppliersList}>
        <TruckImage />
        <section className={styles.suppliersListInner}>
          <div className={styles.thumbnailLabelParent}>
            <div className={styles.thumbnailLabel}>
              <div className={styles.previewParent}>
                <h2 className={styles.preview}>Preview</h2>
                <div className={styles.frameWrapper}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.frameContainer}>
                      <img
                        className={styles.frameItem}
                        alt=""
                        src="/group-33.svg"
                      />
                    </div>
                    <div className={styles.exportAsPdf}>Export as PDF</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.safeSecure}>
              <img
                className={styles.invoiceEmpty1Icon}
                loading="lazy"
                alt=""
                src="/invoiceempty1@2x.png"
              />
              <img
                className={styles.invoiceEmpty2Icon}
                loading="lazy"
                alt=""
                src="/invoiceempty2@2x.png"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Invoices;
