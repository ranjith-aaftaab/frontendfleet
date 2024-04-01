import styles from "./search-trips-container.module.css";

const SearchTripsContainer = () => {
  return (
    <div className={styles.searchTripsContainer}>
      <div className={styles.searchTripsContainerChild} />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.startDate}>Start Date</div>
        <div className={styles.lrNumber}>LR Number</div>
        <div className={styles.partyName}>Party Name</div>
        <div className={styles.truckNo}>Truck No</div>
        <div className={styles.route}>Route</div>
        <div className={styles.tripStatus}>Trip Status</div>
        <div className={styles.partyBalance}>Party Balance</div>
      </div>
      <div className={styles.sorryNoPartiesFoundWrapper}>
        <div className={styles.sorryNoParties}>Sorry, no Parties found</div>
      </div>
    </div>
  );
};

export default SearchTripsContainer;
