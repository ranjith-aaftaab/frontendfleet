import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame-component15.module.css";

const FrameComponent15 = () => {
  const router = useRouter();

  const onPartiesTextClick = useCallback(() => {
    router.push("/parties");
  }, [router]);

  const onTripsTextClick = useCallback(() => {
    router.push("/trips");
  }, [router]);

  const onSuppliersTextClick = useCallback(() => {
    router.push("/suppliers");
  }, [router]);

  const onDriversTextClick = useCallback(() => {
    router.push("/drivers");
  }, [router]);

  const onTrucksTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onExpensesTextClick = useCallback(() => {
    router.push("/expenses");
  }, [router]);

  const onInvoicesTextClick = useCallback(() => {
    router.push("/invoices");
  }, [router]);

  const onReportsTextClick = useCallback(() => {
    router.push("/reports");
  }, [router]);

  return (
    <div className={styles.paperLightParent}>
      <div className={styles.paperLight} />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
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
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.mapPinParent}>
            <img
              className={styles.mapPinIcon}
              loading="lazy"
              alt=""
              src="/mappin.svg"
            />
            <div className={styles.tripsWrapper}>
              <div className={styles.trips} onClick={onTripsTextClick}>
                Trips
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.userCicrleLightParent}>
            <img
              className={styles.userCicrleLightIcon}
              loading="lazy"
              alt=""
              src="/user-cicrle-light.svg"
            />
            <div className={styles.orderlightInstance}>
              <div className={styles.suppliers} onClick={onSuppliersTextClick}>
                Suppliers
              </div>
            </div>
          </div>
        </div>
        <div className={styles.userBoxLightInstance}>
          <div className={styles.userBoxLightInstanceInner}>
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
          <div className={styles.userBoxLightInstanceChild}>
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
          <div className={styles.userBoxLightInstanceInner1}>
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
          <div className={styles.invoiceContainer}>
            <div className={styles.frameGroup}>
              <div className={styles.addUserButtonWrapper}>
                <div className={styles.addUserButton}>
                  <img
                    className={styles.addUserButtonChild}
                    alt=""
                    src="/vector-57.svg"
                  />
                  <img
                    className={styles.addUserButtonItem}
                    loading="lazy"
                    alt=""
                    src="/vector-55.svg"
                  />
                  <img
                    className={styles.addUserButtonInner}
                    loading="lazy"
                    alt=""
                    src="/vector-58.svg"
                  />
                  <img
                    className={styles.vectorIcon}
                    loading="lazy"
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
          <div className={styles.userLightInstanceParent}>
            <div className={styles.userLightInstance}>
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
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.userBoxLightIcon}
                alt=""
                src="/user-box-light.svg"
              />
              <div className={styles.profile}>Profile</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper1}>
        <div className={styles.transportIconParent}>
          <div className={styles.transportIcon}>
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
          <div className={styles.frameWrapper2}>
            <div className={styles.frameParent1}>
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

export default FrameComponent15;
