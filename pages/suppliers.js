import FrameComponent2 from "../components/frame-component2";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent1 from "../components/frame-component1";
import styles from "./suppliers.module.css";

const Suppliers = () => {
  return (
    <div className={styles.suppliers}>
      <FrameComponent2
        parties="Suppliers"
        addParty="Add Supplier"
        frameDivWidth="410px"
        frameDivMinWidth="106px"
        moneyIconGap="35px"
        plusIconWidth="109px"
        plusIconMinWidth="109px"
      />
      <main className={styles.frameParent}>
        <FrameComponent3 />
        <section className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <FrameComponent1
              totalPartyBalance="Total Supplier Balance"
              totalActiveTrips="Active Market Trips"
              propPadding="var(--padding-6xl) var(--padding-base) var(--padding-5xl) var(--padding-xl)"
              propWidth="342px"
              propPadding1="var(--padding-5xl) var(--padding-7xl) var(--padding-6xl)"
              propWidth1="342px"
              propWidth2="87px"
            />
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameInner} />
                  <div className={styles.supplierNameParent}>
                    <div className={styles.supplierName}>Supplier Name</div>
                    <div className={styles.mobileNumber}>Mobile Number</div>
                  </div>
                  <div className={styles.activeTripsWrapper}>
                    <div className={styles.activeTrips}>Active Trips</div>
                  </div>
                  <div className={styles.supplierBalance}>Supplier Balance</div>
                </div>
                <div className={styles.sorryNoSuppliersFoundWrapper}>
                  <div className={styles.sorryNoSuppliers}>
                    Sorry, no Suppliers found
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Suppliers;
