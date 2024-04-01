import ReportsWrapper from "../components/reports-wrapper";
import PartyContainer from "../components/party-container";
import styles from "./reports.module.css";

const Reports = () => {
  return (
    <div className={styles.reports}>
      <ReportsWrapper />
      <main className={styles.lightInstance}>
        <PartyContainer />
        <section className={styles.lightInstanceInner}>
          <div className={styles.frameParent}>
            <div className={styles.parent}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/1@2x.png"
              />
              <div className={styles.profitLossReportWrapper}>
                <div
                  className={styles.profitLoss}
                >{`Profit & Loss Report`}</div>
              </div>
            </div>
            <div className={styles.group}>
              <img
                className={styles.icon1}
                loading="lazy"
                alt=""
                src="/2@2x.png"
              />
              <div className={styles.truckRevenueReportWrapper}>
                <div className={styles.truckRevenueReport}>
                  Truck Revenue Report
                </div>
              </div>
            </div>
            <div className={styles.container}>
              <img
                className={styles.icon2}
                loading="lazy"
                alt=""
                src="/3@2x.png"
              />
              <div className={styles.partyRevenueReportWrapper}>
                <div className={styles.partyRevenueReport}>
                  Party Revenue Report
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <img
                className={styles.icon3}
                loading="lazy"
                alt=""
                src="/4@2x.png"
              />
              <div className={styles.supplierBalanceReportWrapper}>
                <div className={styles.supplierBalanceReport}>
                  Supplier Balance Report
                </div>
              </div>
            </div>
            <div className={styles.parent1}>
              <img
                className={styles.icon4}
                loading="lazy"
                alt=""
                src="/5@2x.png"
              />
              <div className={styles.partyBalanceReportWrapper}>
                <div className={styles.partyBalanceReport}>
                  Party Balance Report
                </div>
              </div>
            </div>
            <div className={styles.parent2}>
              <img
                className={styles.icon5}
                loading="lazy"
                alt=""
                src="/6@2x.png"
              />
              <div className={styles.transactionReportWrapper}>
                <div className={styles.transactionReport}>
                  Transaction Report
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Reports;
