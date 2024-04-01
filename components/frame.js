import SearchTripsContainer from "./search-trips-container";
import styles from "./frame.module.css";

const Frame = () => {
  return (
    <div className={styles.frameParent}>
      <header className={styles.frameGroup}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.searchLightWrapper}>
            <img
              className={styles.searchLightIcon}
              alt=""
              src="/search-light.svg"
            />
          </div>
          <div className={styles.searchTrips}>Search Trips</div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.dateParent}>
            <div className={styles.date}>Date *</div>
            <div className={styles.allMonthsActiveTrips}>
              <div className={styles.allMonthsActiveTripsChild} />
              <div className={styles.allMonths}>All Months</div>
              <div className={styles.tripStatusPlay}>
                <img className={styles.playIcon} alt="" src="/play.svg" />
              </div>
            </div>
          </div>
          <div className={styles.tripStatusParent}>
            <div className={styles.tripStatus}>Trip Status</div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.activeTripsnotSettled}>
                Active Trips(Not Settled)
              </div>
              <div className={styles.playWrapper}>
                <img className={styles.playIcon1} alt="" src="/play.svg" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className={styles.rectangleContainer}>
        <div className={styles.frameInner} />
        <SearchTripsContainer />
      </section>
    </div>
  );
};

export default Frame;
