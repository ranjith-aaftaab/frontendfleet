import FrameComponent7 from "../components/frame-component7";
import FrameComponent5 from "../components/frame-component5";
import styles from "./drivers.module.css";

const Drivers = () => {
  return (
    <div className={styles.drivers}>
      <FrameComponent7 />
      <main className={styles.userCirclelightInstance}>
        <FrameComponent5 />
        <section className={styles.searchLightInstanceWrapper}>
          <div className={styles.searchLightInstance}>
            <div className={styles.searchLightInstance1}>
              <div className={styles.searchLightInstanceChild} />
              <div className={styles.totalDriverBalance}>
                Total Driver Balance
              </div>
              <div className={styles.profileTitle}>
                <img
                  className={styles.infoIcon}
                  loading="lazy"
                  alt=""
                  src="/info.svg"
                />
              </div>
              <div className={styles.infoInstance}>$0</div>
            </div>
            <div className={styles.searchDriversArea}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.searchLightWrapper}>
                  <img
                    className={styles.searchLightIcon}
                    alt=""
                    src="/search-light.svg"
                  />
                </div>
                <div className={styles.searchDrivers}>Search Drivers</div>
              </div>
              <div className={styles.noDriversFoundTitle}>
                <div className={styles.noDriversFoundTitleChild} />
                <div className={styles.errorMessageInstance}>
                  <div className={styles.errorMessageInstanceChild} />
                  <div className={styles.searchLightInstance2}>
                    <div className={styles.searchLightInstanceItem} />
                    <div className={styles.driverName}>Driver Name</div>
                    <div className={styles.driverDataList}>
                      <div className={styles.phoneNumber}>Phone Number</div>
                    </div>
                    <div className={styles.driverDataList1}>
                      <div className={styles.status}>Status</div>
                    </div>
                    <div className={styles.balanceBalance}>Balance Balance</div>
                  </div>
                  <div className={styles.driverNameLabel}>
                    <div className={styles.sorryNoDrivers}>
                      Sorry, no Drivers found
                    </div>
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

export default Drivers;
