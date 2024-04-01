import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent6 from "./frame-component6";
import FrameComponent4 from "./frame-component4";
import styles from "./frame-component5.module.css";

const FrameComponent5 = () => {
  const router = useRouter();

  const onPartiesTextClick = useCallback(() => {
    router.push("/parties");
  }, [router]);

  const onTripsTextClick = useCallback(() => {
    router.push("/trips");
  }, [router]);

  const onInvoicesTextClick = useCallback(() => {
    router.push("/invoices");
  }, [router]);

  const onReportsTextClick = useCallback(() => {
    router.push("/reports");
  }, [router]);

  const onProfileTextClick = useCallback(() => {
    router.push("/profile");
  }, [router]);

  const onSuppliersTextClick = useCallback(() => {
    router.push("/suppliers");
  }, [router]);

  const onTrucksTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onExpensesTextClick = useCallback(() => {
    router.push("/expenses");
  }, [router]);

  return (
    <div className={styles.paperLightParent}>
      <div className={styles.paperLight} />
      <FrameComponent6
        onPartiesTextClick={onPartiesTextClick}
        onTripsTextClick={onTripsTextClick}
      />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.userCicrleLightParent}>
              <img
                className={styles.userCicrleLightIcon}
                loading="lazy"
                alt=""
                src="/user-cicrle-light.svg"
              />
              <div className={styles.suppliersWrapper}>
                <div
                  className={styles.suppliers}
                  onClick={onSuppliersTextClick}
                >
                  Suppliers
                </div>
              </div>
            </div>
          </div>
          <div className={styles.lightSourceOneInstance}>
            <div className={styles.lightSourceOneInstanceChild} />
            <img
              className={styles.steeringWheelIcon}
              alt=""
              src="/steering-wheel.svg"
            />
            <div className={styles.driversWrapper}>
              <div className={styles.drivers}>Drivers</div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.truckParent}>
              <img
                className={styles.truckIcon}
                loading="lazy"
                alt=""
                src="/truck.svg"
              />
              <div className={styles.trucks} onClick={onTrucksTextClick}>
                Trucks
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.icons8Money301Parent}>
            <img
              className={styles.icons8Money301}
              loading="lazy"
              alt=""
              src="/icons8money30-1@2x.png"
            />
            <div className={styles.expensesWrapper}>
              <div className={styles.expenses} onClick={onExpensesTextClick}>
                Expenses
              </div>
            </div>
          </div>
        </div>
        <FrameComponent4
          onInvoicesTextClick={onInvoicesTextClick}
          onReportsTextClick={onReportsTextClick}
          onProfileTextClick={onProfileTextClick}
        />
      </div>
      <div className={styles.frameWrapper1}>
        <div className={styles.frameParent1}>
          <div className={styles.martyXTransportLabelParent}>
            <div className={styles.martyXTransportLabel}>
              <img
                className={styles.untitledDesign1}
                loading="lazy"
                alt=""
                src="/untitled-design-1@2x.png"
              />
            </div>
            <h3 className={styles.martexTransport}>MarteX transport</h3>
          </div>
          <div className={styles.safeAndSecureLabel}>
            <div className={styles.driverProfileInfo}>
              <div className={styles.untitledDesign2Wrapper}>
                <img
                  className={styles.untitledDesign2}
                  loading="lazy"
                  alt=""
                  src="/untitled-design-2@2x.png"
                />
              </div>
              <div className={styles.safeSecure}>{`100% Safe & Secure`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
