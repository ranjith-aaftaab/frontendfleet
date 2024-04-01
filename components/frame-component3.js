import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent4 from "./frame-component4";
import styles from "./frame-component3.module.css";

const FrameComponent3 = () => {
  const router = useRouter();

  const onInvoicesTextClick = useCallback(() => {
    router.push("/invoices");
  }, [router]);

  const onReportsTextClick = useCallback(() => {
    router.push("/reports");
  }, [router]);

  const onProfileTextClick = useCallback(() => {
    router.push("/profile");
  }, [router]);

  const onPartiesTextClick = useCallback(() => {
    router.push("/parties");
  }, [router]);

  const onTripsTextClick = useCallback(() => {
    router.push("/trips");
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

  return (
    <div className={styles.paperLightParent}>
      <div className={styles.paperLight} />
      <div className={styles.frameParent}>
        <div className={styles.userCircleLightInstanceWrapper}>
          <div className={styles.userCircleLightInstance}>
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
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
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
          <div className={styles.supplierNameAndMobileParent}>
            <div className={styles.supplierNameAndMobile}>
              <div className={styles.supplierNameAndMobileChild} />
              <img
                className={styles.userCicrleLightIcon}
                alt=""
                src="/user-cicrle-light.svg"
              />
              <div className={styles.suppliersWrapper}>
                <div className={styles.suppliers}>Suppliers</div>
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
                <div className={styles.newInfoPanel}>
                  <div className={styles.drivers} onClick={onDriversTextClick}>
                    Drivers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.totalSupplierBalance}>
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
          <div className={styles.totalSupplierBalanceInfoAcParent}>
            <div className={styles.totalSupplierBalanceInfoAc}>
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
            <div className={styles.frameParent2}>
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

export default FrameComponent3;
