import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./party-container.module.css";

const PartyContainer = () => {
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

  const onProfileTextClick = useCallback(() => {
    router.push("/profile");
  }, [router]);

  return (
    <div className={styles.partyContainer}>
      <div className={styles.paperLight} />
      <div className={styles.mappingsContainer}>
        <div className={styles.iconCurrency}>
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
        <div className={styles.userCircleLight}>
          <div className={styles.mapPinParent}>
            <img
              className={styles.mapPinIcon}
              loading="lazy"
              alt=""
              src="/mappin.svg"
            />
            <div className={styles.invoicesLabel}>
              <div className={styles.trips} onClick={onTripsTextClick}>
                Trips
              </div>
            </div>
          </div>
        </div>
        <div className={styles.marteXDesignWrapper}>
          <div className={styles.marteXDesign}>
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
        <div className={styles.truckRevContainer}>
          <div className={styles.truckIcon}>
            <div className={styles.trucksList}>
              <img
                className={styles.steeringWheelIcon}
                loading="lazy"
                alt=""
                src="/steering-wheel.svg"
              />
              <div className={styles.steeringWheel}>
                <div className={styles.drivers} onClick={onDriversTextClick}>
                  Drivers
                </div>
              </div>
            </div>
            <div className={styles.truckParent}>
              <img
                className={styles.truckIcon1}
                loading="lazy"
                alt=""
                src="/truck.svg"
              />
              <div className={styles.trucks} onClick={onTrucksTextClick}>
                Trucks
              </div>
            </div>
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
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.profitLossReportWrapper}>
                <div className={styles.profitLossReport}>
                  <img
                    className={styles.partyRevenueReport}
                    alt=""
                    src="/vector-57.svg"
                  />
                  <img
                    className={styles.truckRevenueReport}
                    loading="lazy"
                    alt=""
                    src="/vector-55.svg"
                  />
                  <img
                    className={styles.truckRevenueReport1}
                    alt=""
                    src="/vector-58.svg"
                  />
                  <img
                    className={styles.truckRevenueReport2}
                    alt=""
                    src="/vector-59.svg"
                  />
                </div>
              </div>
              <div className={styles.invoices}>Invoices</div>
            </div>
          </div>
          <div className={styles.partyBalanceReport}>
            <div className={styles.partyBalanceReportChild} />
            <img
              className={styles.orderLightIcon}
              alt=""
              src="/order-light.svg"
            />
            <div className={styles.reportContainer}>
              <div className={styles.reports}>Reports</div>
            </div>
          </div>
          <div className={styles.designContainer}>
            <div className={styles.userBoxLight}>
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
      </div>
      <div className={styles.safeSecureTitle}>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
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
          <div className={styles.frameWrapper1}>
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

export default PartyContainer;
