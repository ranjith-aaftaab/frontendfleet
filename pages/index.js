import RootContainer from "../components/root-container";
import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";

const Trucks = () => {
  return (
    <div className={styles.trucks}>
      <RootContainer trucks="Trucks" />
      <main className={styles.frameParent}>
        <FrameComponent />
        <section className={styles.fRAME}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.allTrucks}>All Trucks</div>
                <div className={styles.truckTypeOwnershipParent}>
                  <div className={styles.truckTypeOwnership}>
                    <img className={styles.infoIcon} alt="" src="/info.svg" />
                  </div>
                  <div className={styles.statusLocation}>$0</div>
                </div>
              </div>
              <div className={styles.truckList}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <div className={styles.myTrucks}>My Trucks</div>
                  <div className={styles.infoInstance}>
                    <img
                      className={styles.infoIcon1}
                      loading="lazy"
                      alt=""
                      src="/info.svg"
                    />
                  </div>
                  <div className={styles.div}>$0</div>
                </div>
              </div>
              <div className={styles.myTrucks1}>
                <div className={styles.myTrucksChild} />
                <div className={styles.marketTrucks}>
                  <div className={styles.marketTrucks1}>Market trucks</div>
                  <div className={styles.infoWrapper}>
                    <img
                      className={styles.infoIcon2}
                      loading="lazy"
                      alt=""
                      src="/info.svg"
                    />
                  </div>
                </div>
                <div className={styles.div1}>$0</div>
              </div>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <div className={styles.searchLightWrapper}>
                <img
                  className={styles.searchLightIcon}
                  alt=""
                  src="/search-light.svg"
                />
              </div>
              <div className={styles.searchTrucks}>Search Trucks</div>
            </div>
            <div className={styles.searchBar}>
              <div className={styles.searchBarChild} />
              <div className={styles.frameDiv}>
                <div className={styles.rectangleDiv} />
                <div className={styles.rectangleParent1}>
                  <div className={styles.frameChild1} />
                  <div className={styles.truckNo}>Truck No</div>
                  <div className={styles.truckTypeWrapper}>
                    <div className={styles.truckType}>Truck Type</div>
                  </div>
                  <div className={styles.ownershipWrapper}>
                    <div className={styles.ownership}>Ownership</div>
                  </div>
                  <div className={styles.statusWrapper}>
                    <div className={styles.status}>{`Status `}</div>
                  </div>
                  <div className={styles.location}>Location</div>
                </div>
                <div className={styles.noTrucksFound}>
                  <div className={styles.sorryNoTrucks}>
                    Sorry, no Trucks found
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

export default Trucks;
