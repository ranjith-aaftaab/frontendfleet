import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./truck-image.module.css";

const TruckImage = () => {
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

  const onReportsTextClick = useCallback(() => {
    router.push("/reports");
  }, [router]);

  const onProfileTextClick = useCallback(() => {
    router.push("/profile");
  }, [router]);

  return (
    <div className={styles.truckImage}>
      <div className={styles.paperLight} />
      <div className={styles.trucksCount}>
        <div className={styles.expensesAreaWrapper}>
          <div className={styles.expensesArea}>
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
        <div className={styles.trucksCountInner}>
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
        <div className={styles.invoicesList}>
          <div className={styles.orderlightInstance}>
            <img
              className={styles.userCicrleLightIcon}
              loading="lazy"
              alt=""
              src="/user-cicrle-light.svg"
            />
            <div className={styles.exportPdfButton}>
              <div className={styles.suppliers} onClick={onSuppliersTextClick}>
                Suppliers
              </div>
            </div>
          </div>
        </div>
        <div className={styles.trucksCountChild}>
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
        <div className={styles.marteXtransportName}>
          <div className={styles.safeSecureMessage}>
            <div className={styles.previewArea}>
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
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.icons8Money301Parent}>
                <img
                  className={styles.icons8Money301}
                  loading="lazy"
                  alt=""
                  src="/icons8money30-1@2x.png"
                />
                <div className={styles.expensesWrapper}>
                  <div
                    className={styles.expenses}
                    onClick={onExpensesTextClick}
                  >
                    Expenses
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.invoicesTitle}>
              <div className={styles.invoicesTitleChild} />
              <div className={styles.invoicesTitleInner}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/vector-57.svg"
                  />
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/vector-55.svg"
                  />
                  <img
                    className={styles.frameInner}
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
              <div className={styles.invoices}>Invoices</div>
            </div>
          </div>
          <div className={styles.invoicesAreaWrapper}>
            <div className={styles.invoicesArea}>
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
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.userBoxLightParent}>
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
      <div className={styles.exportButton}>
        <div className={styles.invoiceHeader}>
          <div className={styles.marteXLabelParent}>
            <div className={styles.marteXLabel}>
              <img
                className={styles.untitledDesign1}
                loading="lazy"
                alt=""
                src="/untitled-design-1@2x.png"
              />
            </div>
            <h3 className={styles.martexTransport}>MarteX transport</h3>
          </div>
          <div className={styles.invoiceHeaderInner}>
            <div className={styles.frameGroup}>
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

export default TruckImage;
