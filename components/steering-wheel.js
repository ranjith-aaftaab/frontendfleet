import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./steering-wheel.module.css";

const SteeringWheel = () => {
  const router = useRouter();

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

  const onExpensesTextClick = useCallback(() => {
    router.push("/expenses");
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
    <div className={styles.steeringWheel}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.deskLightIcon}
          loading="lazy"
          alt=""
          src="/desk-light.svg"
        />
        <div className={styles.parties}>Parties</div>
      </div>
      <div className={styles.activeTripsCounter}>
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
      <div className={styles.truckIconWrapper}>
        <div className={styles.truckIcon}>
          <img
            className={styles.userCicrleLightIcon}
            loading="lazy"
            alt=""
            src="/user-cicrle-light.svg"
          />
          <div className={styles.suppliersExpenses}>
            <div className={styles.suppliers} onClick={onSuppliersTextClick}>
              Suppliers
            </div>
          </div>
        </div>
      </div>
      <div className={styles.infoComponent}>
        <div className={styles.steeringWheelParent}>
          <img
            className={styles.steeringWheelIcon}
            loading="lazy"
            alt=""
            src="/steering-wheel.svg"
          />
          <div className={styles.sorryParties}>
            <div className={styles.drivers} onClick={onDriversTextClick}>
              Drivers
            </div>
          </div>
        </div>
      </div>
      <div className={styles.steeringWheelInner}>
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
      </div>
      <div className={styles.steeringWheelChild}>
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
      <div className={styles.partyInfoInstance}>
        <div className={styles.searchParties}>
          <div className={styles.activeTripsCount}>
            <div className={styles.searchPartiesContainerParent}>
              <img
                className={styles.searchPartiesContainer}
                alt=""
                src="/vector-57.svg"
              />
              <img
                className={styles.sorryNoTripsFound}
                loading="lazy"
                alt=""
                src="/vector-55.svg"
              />
              <img
                className={styles.sorryNoTripsFound1}
                loading="lazy"
                alt=""
                src="/vector-58.svg"
              />
              <img
                className={styles.sorryNoTripsFound2}
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
      <div className={styles.profileInfoWrapper}>
        <div className={styles.profileInfo}>
          <img
            className={styles.shopLightIcon}
            loading="lazy"
            alt=""
            src="/shop-light.svg"
          />
          <div className={styles.driversList}>
            <div className={styles.reports} onClick={onReportsTextClick}>
              Reports
            </div>
          </div>
        </div>
      </div>
      <div className={styles.shopComponents}>
        <div className={styles.profile} onClick={onProfileTextClick}>
          Profile
        </div>
      </div>
      <div className={styles.orderLightWrapper}>
        <img
          className={styles.orderLightIcon}
          loading="lazy"
          alt=""
          src="/order-light.svg"
        />
      </div>
      <div className={styles.userBoxLightWrapper}>
        <img
          className={styles.userBoxLightIcon}
          loading="lazy"
          alt=""
          src="/user-box-light.svg"
        />
      </div>
    </div>
  );
};

export default SteeringWheel;
