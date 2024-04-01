import styles from "./frame-component17.module.css";

const FrameComponent17 = ({
  onPartiesTextClick,
  onSuppliersTextClick,
  onDriversTextClick,
  onTrucksTextClick,
  onExpensesTextClick,
  onInvoicesTextClick,
  onReportsTextClick,
  onProfileTextClick,
}) => {
  return (
    <div className={styles.paperLightParent}>
      <div className={styles.paperLight} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
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
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img className={styles.mapPinIcon} alt="" src="/mappin.svg" />
              <div className={styles.tripsWrapper}>
                <div className={styles.trips}>Trips</div>
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
                <div className={styles.date}>
                  <div
                    className={styles.suppliers}
                    onClick={onSuppliersTextClick}
                  >
                    Suppliers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.frameParent1}>
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
            <div className={styles.orderlightInstance}>
              <div className={styles.orderlightInstanceInner}>
                <div className={styles.frameParent2}>
                  <div className={styles.frameWrapper2}>
                    <div className={styles.vectorParent}>
                      <img
                        className={styles.frameItem}
                        alt=""
                        src="/vector-57.svg"
                      />
                      <img
                        className={styles.frameInner}
                        loading="lazy"
                        alt=""
                        src="/vector-55.svg"
                      />
                      <img
                        className={styles.vectorIcon}
                        loading="lazy"
                        alt=""
                        src="/vector-58.svg"
                      />
                      <img
                        className={styles.frameChild1}
                        loading="lazy"
                        alt=""
                        src="/vector-59.svg"
                      />
                    </div>
                  </div>
                  <div
                    className={styles.invoices}
                    onClick={onInvoicesTextClick}
                  >
                    Invoices
                  </div>
                </div>
              </div>
              <div className={styles.orderlightInstance1}>
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
        </div>
      </div>
      <div className={styles.frameWrapper3}>
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
          <div className={styles.frameWrapper4}>
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

export default FrameComponent17;
