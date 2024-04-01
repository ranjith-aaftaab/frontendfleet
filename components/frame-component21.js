import styles from "./frame-component21.module.css";

const FrameComponent21 = () => {
  return (
    <div className={styles.billingInformationParent}>
      <b className={styles.billingInformation}>Billing Information</b>
      <div className={styles.partyBillingAmount}>Party Billing Amount *</div>
      <div className={styles.fixedPricePerTonneLabelParent}>
        <div className={styles.fixedPricePerTonneLabel}>
          <div className={styles.fixedPricePerTonneLabelChild} />
          <div className={styles.fixed}>Fixed</div>
        </div>
        <div className={styles.fixedPricePerTonneLabel1}>
          <div className={styles.fixedPricePerTonneLabelItem} />
          <div className={styles.perTonne}>Per Tonne</div>
        </div>
        <div className={styles.fixedPricePerTonneLabel2}>
          <div className={styles.fixedPricePerTonneLabelInner} />
          <div className={styles.perKg}>Per Kg</div>
        </div>
        <div className={styles.fixedPricePerTonneLabel3}>
          <div className={styles.rectangleDiv} />
          <div className={styles.perKm}>Per Km</div>
        </div>
        <div className={styles.fixedPricePerTonneLabel4}>
          <div className={styles.fixedPricePerTonneLabelChild1} />
          <div className={styles.perTrip}>Per Trip</div>
        </div>
        <div className={styles.fixedPricePerTonneLabel5}>
          <div className={styles.fixedPricePerTonneLabelChild2} />
          <div className={styles.perHour}>Per Hour</div>
        </div>
        <div className={styles.fixedPricePerTonneLabel6}>
          <div className={styles.fixedPricePerTonneLabelChild3} />
          <div className={styles.perLitre}>Per Litre</div>
        </div>
        <div className={styles.fixedPricePerTonneLabel7}>
          <div className={styles.fixedPricePerTonneLabelChild4} />
          <div className={styles.perBag}>Per Bag</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent21;
