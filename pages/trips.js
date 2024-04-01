import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent18 from "../components/frame-component18";
import FrameComponent17 from "../components/frame-component17";
import SearchTripsContainer from "../components/search-trips-container";
import styles from "./trips.module.css";

const Trips = () => {
  const router = useRouter();

  const onPartiesTextClick = useCallback(() => {
    router.push("/parties");
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

  const onProfileTextClick = useCallback(() => {
    router.push("/profile");
  }, [router]);

  return (
    <div className={styles.trips}>
      <FrameComponent18 />
      <main className={styles.frameParent}>
        <FrameComponent17
          onPartiesTextClick={onPartiesTextClick}
          onSuppliersTextClick={onSuppliersTextClick}
          onDriversTextClick={onDriversTextClick}
          onTrucksTextClick={onTrucksTextClick}
          onExpensesTextClick={onExpensesTextClick}
          onInvoicesTextClick={onInvoicesTextClick}
          onReportsTextClick={onReportsTextClick}
          onProfileTextClick={onProfileTextClick}
        />
        <section className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.searchLightWrapper}>
                  <img
                    className={styles.searchLightIcon}
                    loading="lazy"
                    alt=""
                    src="/search-light.svg"
                  />
                </div>
                <div className={styles.searchTrips}>Search Trips</div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.dateParent}>
                  <div className={styles.date}>Date *</div>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.frameItem} />
                    <div className={styles.allMonths}>All Months</div>
                    <div className={styles.playWrapper}>
                      <img className={styles.playIcon} alt="" src="/play.svg" />
                    </div>
                  </div>
                </div>
                <div className={styles.tripStatusParent}>
                  <div className={styles.tripStatus}>Trip Status</div>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.frameInner} />
                    <div className={styles.activeTripsnotSettled}>
                      Active Trips(Not Settled)
                    </div>
                    <div className={styles.playContainer}>
                      <img
                        className={styles.playIcon1}
                        alt=""
                        src="/play.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent1}>
              <div className={styles.rectangleDiv} />
              <SearchTripsContainer />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Trips;
