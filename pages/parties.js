import FrameComponent2 from "../components/frame-component2";
import SteeringWheel from "../components/steering-wheel";
import FrameComponent1 from "../components/frame-component1";
import styles from "./parties.module.css";

const Parties = () => {
  return (
    <div className={styles.parties}>
      <FrameComponent2 parties="Parties" addParty="Add Party" />
      <main className={styles.deskComponent}>
        <div className={styles.steeringWheelParent}>
          <SteeringWheel />
          <div className={styles.searchBar}>
            <div className={styles.activeTripsDisplay}>
              <div className={styles.frameParent}>
                <div className={styles.untitledDesign1Wrapper}>
                  <img
                    className={styles.untitledDesign1}
                    loading="lazy"
                    alt=""
                    src="/untitled-design-1@2x.png"
                  />
                </div>
                <h3 className={styles.martexTransport}>MarteX transport</h3>
              </div>
              <div className={styles.deskComponent1}>
                <div className={styles.partyListing}>
                  <div className={styles.untitledDesign2Wrapper}>
                    <img
                      className={styles.untitledDesign2}
                      loading="lazy"
                      alt=""
                      src="/untitled-design-2@2x.png"
                    />
                  </div>
                  <div
                    className={styles.safeSecure}
                  >{`100% Safe & Secure`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className={styles.searchLightComponentWrapper}>
          <div className={styles.searchLightComponent}>
            <FrameComponent1
              totalPartyBalance="Total Party Balance"
              totalActiveTrips="Total Active Trips"
            />
            <div className={styles.totalPartyBalanceName}>
              <div className={styles.totalPartyBalanceNameChild} />
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.infoComponentInstance}>
                  <div className={styles.infoComponentInstanceChild} />
                  <div className={styles.designNameMobileNumberLabe}>
                    <div className={styles.name}>Name</div>
                    <div className={styles.mobileNumber}>Mobile Number</div>
                  </div>
                  <div className={styles.activeTripsCount}>
                    Active trips Count
                  </div>
                  <div className={styles.partyBalance}>Party Balance</div>
                </div>
                <div className={styles.sorryNoPartiesFoundWrapper}>
                  <div className={styles.sorryNoParties}>
                    Sorry, no Parties found
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

export default Parties;
