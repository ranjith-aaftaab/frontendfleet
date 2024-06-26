import { useState, useMemo, useCallback } from "react";
import Frame2 from "./frame2";
import PortalPopup from "./portal-popup";
import Frame1 from "./frame1";
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
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isFrame1Open, setFrame1Open] = useState(false);
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

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const openFrame1 = useCallback(() => {
    setFrame1Open(true);
  }, []);

  const closeFrame1 = useCallback(() => {
    setFrame1Open(false);
  }, []);

  return (
    <>
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
              <div className={styles.moneyIconChild} onClick={openFrame} />
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
              <div className={styles.moneyIconItem} onClick={openFrame1} />
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
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame2 onClose={closeFrame} />
        </PortalPopup>
      )}
      {isFrame1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame1}
        >
          <Frame1 onClose={closeFrame1} />
        </PortalPopup>
      )}
    </>
  );
};

export default FrameComponent2;
