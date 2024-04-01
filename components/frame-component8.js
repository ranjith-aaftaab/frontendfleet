import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent6 from "./frame-component6";
import styles from "./frame-component8.module.css";

const FrameComponent8 = () => {
  const router = useRouter();

  const onPartiesTextClick = useCallback(() => {
    router.push("/parties");
  }, [router]);

  const onTripsTextClick = useCallback(() => {
    // Please sync "Trips" to the project
  }, []);

  const onSuppliersTextClick = useCallback(() => {
    router.push("/suppliers");
  }, [router]);

  const onDriversTextClick = useCallback(() => {
    router.push("/drivers");
  }, [router]);

  const onTrucksTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onInvoicesTextClick = useCallback(() => {
    // Please sync "Invoices" to the project
  }, []);

  const onReportsTextClick = useCallback(() => {
    // Please sync "Reports" to the project
  }, []);

  const onProfileTextClick = useCallback(() => {
    // Please sync "Profile" to the project
  }, []);

  return (
    <div className={styles.paperLightParent}>
      <div className={styles.paperLight} />
      <FrameComponent6
        onPartiesTextClick={onPartiesTextClick}
        onTripsTextClick={onTripsTextClick}
      />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.userCicrleLightParent}>
            <img
              className={styles.userCicrleLightIcon}
              loading="lazy"
              alt=""
              src="/user-cicrle-light.svg"
            />
            <div className={styles.suppliersWrapper}>
              <div className={styles.suppliers} onClick={onSuppliersTextClick}>
                Suppliers
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.steeringWheelParent}>
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
        <div className={styles.frameGroup}>
          <div className={styles.frameDiv}>
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
          <div className={styles.frameParent1}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.icons8Money301}
                alt=""
                src="/icons8money30-1@2x.png"
              />
              <div className={styles.expensesWrapper}>
                <div className={styles.expenses}>Expenses</div>
              </div>
            </div>
            <div className={styles.expensesContainer}>
              <div className={styles.frameParent2}>
                <div className={styles.truckIconWrapper}>
                  <div className={styles.truckIcon1}>
                    <img
                      className={styles.addButtonIcon}
                      alt=""
                      src="/vector-57.svg"
                    />
                    <img
                      className={styles.truckIconChild}
                      loading="lazy"
                      alt=""
                      src="/vector-55.svg"
                    />
                    <img
                      className={styles.truckIconItem}
                      alt=""
                      src="/vector-58.svg"
                    />
                    <img
                      className={styles.truckIconInner}
                      alt=""
                      src="/vector-59.svg"
                    />
                  </div>
                </div>
                <div className={styles.invoices} onClick={onInvoicesTextClick}>
                  Invoices
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.orderLightParent}>
            <img
              className={styles.orderLightIcon}
              loading="lazy"
              alt=""
              src="/order-light.svg"
            />
            <div className={styles.reportsWrapper}>
              <div className={styles.reports} onClick={onReportsTextClick}>
                Reports
              </div>
            </div>
          </div>
        </div>
        <div className={styles.monthlyRevenueTitle}>
          <div className={styles.monthlyExpenseTitle}>
            <img
              className={styles.userBoxLightIcon}
              loading="lazy"
              alt=""
              src="/user-box-light.svg"
            />
            <div className={styles.profile} onClick={onProfileTextClick}>
              Profile
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper2}>
        <div className={styles.frameParent3}>
          <div className={styles.frameParent4}>
            <div className={styles.untitledDesign1Wrapper}>
              <img
                className={styles.untitledDesign1}
                loading="lazy"
                alt=""
                src="/untitled-design-1@2x.png"
              />
            </div>
            <h3 className={styles.martexTransport}>MarteX transport</h3>
          </div>
          <div className={styles.frameWrapper3}>
            <div className={styles.frameParent5}>
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

export default FrameComponent8;
