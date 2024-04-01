import { useState, useCallback } from "react";
import Frame1 from "./frame1";
import PortalPopup from "./portal-popup";
import Frame3 from "./frame3";
import UserAltFillIcon from "./user-alt-fill-icon";
import styles from "./frame-component7.module.css";

const FrameComponent7 = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isFrame1Open, setFrame1Open] = useState(false);
  const [isFrame2Open, setFrame2Open] = useState(false);

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

  const openFrame2 = useCallback(() => {
    setFrame2Open(true);
  }, []);

  const closeFrame2 = useCallback(() => {
    setFrame2Open(false);
  }, []);

  return (
    <>
      <header className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <UserAltFillIcon />
            </div>
            <div className={styles.plusSymbol}>
              <div className={styles.userParent}>
                <div className={styles.user}>User</div>
                <div className={styles.wrapper}>
                  <div className={styles.div}>1234567890</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.driversWrapper}>
            <h3 className={styles.drivers}>Drivers</h3>
          </div>
        </div>
        <div className={styles.desklightInstance}>
          <div className={styles.frameDiv}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} onClick={openFrame} />
              <div className={styles.plusWrapper}>
                <img
                  className={styles.plusIcon}
                  loading="lazy"
                  alt=""
                  src="/plus2.svg"
                />
              </div>
              <div className={styles.driverGave}>Driver Gave</div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameInner} onClick={openFrame1} />
                <div className={styles.plusContainer}>
                  <img
                    className={styles.plusIcon1}
                    loading="lazy"
                    alt=""
                    src="/plus.svg"
                  />
                </div>
                <div className={styles.driverGot}>Driver Got</div>
              </div>
              <div className={styles.rectangleParent1}>
                <div className={styles.rectangleDiv} onClick={openFrame2} />
                <div className={styles.plusFrame}>
                  <img
                    className={styles.plusIcon2}
                    loading="lazy"
                    alt=""
                    src="/plus.svg"
                  />
                </div>
                <div className={styles.addDriver}>{`Add Driver `}</div>
              </div>
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
          <Frame1 onClose={closeFrame} />
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
      {isFrame2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame2}
        >
          <Frame3 onClose={closeFrame2} />
        </PortalPopup>
      )}
    </>
  );
};

export default FrameComponent7;
