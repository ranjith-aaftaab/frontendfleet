import { useMemo } from "react";
import UserAltFillIcon from "./user-alt-fill-icon";
import styles from "./frame-component2.module.css";

const FrameComponent2 = ({
  parties,
  addParty,
  frameDivWidth,
  frameDivMinWidth,
  moneyIconGap,
  plusIconWidth,
  plusIconMinWidth,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const partiesStyle = useMemo(() => {
    return {
      minWidth: frameDivMinWidth,
    };
  }, [frameDivMinWidth]);

  const partySupplierStyle = useMemo(() => {
    return {
      gap: moneyIconGap,
    };
  }, [moneyIconGap]);

  const addPartyStyle = useMemo(() => {
    return {
      width: plusIconWidth,
      minWidth: plusIconMinWidth,
    };
  }, [plusIconWidth, plusIconMinWidth]);

  return (
    <header className={styles.frameParent}>
      <div className={styles.frameGroup} style={frameDiv1Style}>
        <div className={styles.frameContainer}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <UserAltFillIcon />
          </div>
          <div className={styles.partyIcon}>
            <div className={styles.usersAndSuppliers}>
              <div className={styles.user}>User</div>
              <div className={styles.userBox}>
                <div className={styles.partyLabel}>1234567890</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.partiesWrapper}>
          <h3 className={styles.parties} style={partiesStyle}>
            {parties}
          </h3>
        </div>
      </div>
      <div className={styles.partySupplierWrapper}>
        <div className={styles.partySupplier} style={partySupplierStyle}>
          <div className={styles.moneyIcon}>
            <div className={styles.moneyIconChild} />
            <div className={styles.addParty} style={addPartyStyle}>
              {addParty}
            </div>
            <img
              className={styles.plusIcon}
              loading="lazy"
              alt=""
              src="/plus1.svg"
            />
          </div>
          <div className={styles.moneyIcon1}>
            <div className={styles.moneyIconItem} />
            <img
              className={styles.plusIcon1}
              loading="lazy"
              alt=""
              src="/plus-1.svg"
            />
            <div className={styles.addTrip}>Add Trip</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent2;
