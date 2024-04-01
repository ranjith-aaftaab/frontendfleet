import styles from "./frame-component6.module.css";

const FrameComponent6 = ({ onPartiesTextClick, onTripsTextClick }) => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.deskLightParent}>
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
        <div className={styles.searchLightInstance}>
          <img
            className={styles.mapPinIcon}
            loading="lazy"
            alt=""
            src="/mappin.svg"
          />
          <div className={styles.driverNamePhoneNumberStatu}>
            <div className={styles.trips} onClick={onTripsTextClick}>
              Trips
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
