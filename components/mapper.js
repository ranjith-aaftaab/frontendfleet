import styles from "./mapper.module.css";

const Mapper = ({
  onPartiesTextClick,
  onTripsTextClick,
  onSuppliersTextClick,
  onDriversTextClick,
}) => {
  return (
    <div className={styles.mapper}>
      <div className={styles.reducer}>
        <div className={styles.searcher}>
          <img
            className={styles.deskLightIcon}
            loading="lazy"
            alt=""
            src="/desk-light.svg"
          />
          <div className={styles.parties} onClick={onPartiesTextClick}>
            Parties
          </div>
        </div>
        <div className={styles.selector}>
          <img
            className={styles.mapPinIcon}
            loading="lazy"
            alt=""
            src="/mappin.svg"
          />
          <div className={styles.combiner}>
            <div className={styles.trips} onClick={onTripsTextClick}>
              Trips
            </div>
          </div>
        </div>
        <div className={styles.decoder}>
          <img
            className={styles.userCicrleLightIcon}
            loading="lazy"
            alt=""
            src="/user-cicrle-light.svg"
          />
          <div className={styles.converter}>
            <div className={styles.suppliers} onClick={onSuppliersTextClick}>
              Suppliers
            </div>
          </div>
        </div>
        <div className={styles.selector1}>
          <img
            className={styles.steeringWheelIcon}
            loading="lazy"
            alt=""
            src="/steering-wheel.svg"
          />
          <div className={styles.driversWrapper}>
            <div className={styles.drivers} onClick={onDriversTextClick}>
              Drivers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mapper;
