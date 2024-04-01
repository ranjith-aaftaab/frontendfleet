import { useState, useCallback } from "react";
import Frame4 from "./frame4";
import PortalPopup from "./portal-popup";
import Label from "./label";
import styles from "./frame-component24.module.css";

const FrameComponent24 = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <section className={styles.frameWrapper}>
        <form className={styles.frameParent}>
          <Label
            supplierName="Driver Name *"
            enterSupplierName="Enter Driver Name"
            propFlex="unset"
            propAlignSelf="stretch"
            propMinWidth="96px"
            propDisplay="inline-block"
          />
          <Label
            supplierName="Mobile Number *"
            enterSupplierName="+91  Enter Mobile Number"
            propFlex="unset"
            propAlignSelf="stretch"
            propMinWidth="115px"
            propDisplay="inline-block"
          />
          <div className={styles.optionalParent}>
            <div className={styles.optional}>Optional</div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} onClick={openFrame} />
              <div className={styles.addOpeningBalance}>
                Add Opening Balance
              </div>
            </div>
          </div>
        </form>
      </section>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame4 onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default FrameComponent24;
