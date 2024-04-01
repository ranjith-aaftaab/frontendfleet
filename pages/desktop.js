import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./desktop.module.css";

const Desktop = () => {
  const router = useRouter();

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
    <form className={styles.desktop2}>
      <header className={styles.fRAMEBParent}>
        <div className={styles.fRAMEB}>
          <div className={styles.fRAMEC}>
            <div className={styles.fRAMED}>
              <div className={styles.fRAMEDChild} />
              <img
                className={styles.userAltFillIcon}
                loading="lazy"
                alt=""
                src="/user-alt-fill.svg"
              />
            </div>
            <div className={styles.fRAMEF}>
              <div className={styles.fRAMEG}>
                <div className={styles.user}>User</div>
                <div className={styles.tEXTA}>
                  <div className={styles.tEX}>1234567890</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.containerX}>
            <h3 className={styles.parties}>Parties</h3>
          </div>
        </div>
        <div className={styles.fRAMEJ}>
          <div className={styles.fRAMEK}>
            <div className={styles.vECTORGROUP}>
              <div className={styles.vECTORGROUPChild} />
              <img className={styles.plusIcon} alt="" src="/plus1.svg" />
              <div className={styles.addParty}>Add Party</div>
            </div>
            <div className={styles.vECTORGROUP1}>
              <div className={styles.vECTORGROUPItem} />
              <img className={styles.plusIcon1} alt="" src="/plus-1.svg" />
              <div className={styles.addTrip}>Add Trip</div>
            </div>
          </div>
        </div>
      </header>
      <main className={styles.desktopLightContainer}>
        <div className={styles.paperLightParent}>
          <div className={styles.paperLight} />
          <div className={styles.fRAMEM}>
            <div className={styles.fRAMEN}>
              <div className={styles.fRAMENChild} />
              <img
                className={styles.deskLightIcon}
                alt=""
                src="/desk-light.svg"
              />
              <div className={styles.parties1}>Parties</div>
            </div>
            <div className={styles.fRAMEP}>
              <div className={styles.uSERBOXLIGHTINS}>
                <img
                  className={styles.mapPinIcon}
                  loading="lazy"
                  alt=""
                  src="/mappin.svg"
                />
                <div className={styles.marteXTransport}>
                  <div className={styles.trips}>Trips</div>
                </div>
              </div>
            </div>
            <div className={styles.fRAMEQ}>
              <div className={styles.fRAMER}>
                <div className={styles.fRAMES}>
                  <img
                    className={styles.userCicrleLightIcon}
                    loading="lazy"
                    alt=""
                    src="/user-cicrle-light.svg"
                  />
                  <div className={styles.suppliersWrapper}>
                    <div className={styles.suppliers}>Suppliers</div>
                  </div>
                </div>
                <div className={styles.aCTIVETRIPSBALA}>
                  <div className={styles.steeringWheelParent}>
                    <img
                      className={styles.steeringWheelIcon}
                      loading="lazy"
                      alt=""
                      src="/steering-wheel.svg"
                    />
                    <div className={styles.dRIVERSTEXT}>
                      <div className={styles.drivers}>Drivers</div>
                    </div>
                  </div>
                  <div className={styles.tRUCKSTEXT}>
                    <img
                      className={styles.truckIcon}
                      loading="lazy"
                      alt=""
                      src="/truck.svg"
                    />
                    <div className={styles.trucks}>Trucks</div>
                  </div>
                  <div className={styles.sEARCHPARTIESLA}>
                    <img
                      className={styles.icons8Money301}
                      loading="lazy"
                      alt=""
                      src="/icons8money30-1@2x.png"
                    />
                    <div className={styles.nAMEMOBILENUMBE}>
                      <div
                        className={styles.expenses}
                        onClick={onExpensesTextClick}
                      >
                        Expenses
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.fRAMEY}>
            <div className={styles.fRAMEZ}>
              <div className={styles.sAVEBUTTON}>
                <div className={styles.fRAMEAA}>
                  <div className={styles.fRAMEAAInner}>
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
                  <div
                    className={styles.invoices}
                    onClick={onInvoicesTextClick}
                  >
                    Invoices
                  </div>
                </div>
              </div>
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
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
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
              <div className={styles.safeSecureLabel}>
                <div className={styles.frameContainer}>
                  <div className={styles.untitledDesign2Wrapper}>
                    <img
                      className={styles.untitledDesign2}
                      loading="lazy"
                      alt=""
                      src="/untitled-design-2@2x.png"
                    />
                  </div>
                  <div
                    className={styles.safeSecure}
                  >{`100% Safe & Secure`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className={styles.desktopLightContainerInner}>
          <div className={styles.frameDiv}>
            <div className={styles.totalPartyBalanceLabelParent}>
              <div className={styles.totalPartyBalanceLabel}>
                <div className={styles.rectangleParent}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.totalPartyBalance}>
                    Total Party Balance
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.infoWrapper}>
                      <img
                        className={styles.infoIcon}
                        loading="lazy"
                        alt=""
                        src="/info.svg"
                      />
                    </div>
                    <div className={styles.div}>$0</div>
                  </div>
                </div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameChild1} />
                  <div className={styles.totalActiveTrips}>
                    Total Active Trips
                  </div>
                  <div className={styles.infoContainer}>
                    <img
                      className={styles.infoIcon1}
                      loading="lazy"
                      alt=""
                      src="/info.svg"
                    />
                  </div>
                  <div className={styles.div1}>0</div>
                </div>
              </div>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameChild2} />
                <div className={styles.searchLightWrapper}>
                  <img
                    className={styles.searchLightIcon}
                    alt=""
                    src="/search-light.svg"
                  />
                </div>
                <div className={styles.searchPartires}>Search Partires</div>
              </div>
            </div>
            <div className={styles.rectangleParent1}>
              <div className={styles.frameChild3} />
              <div className={styles.activeTripsCountLabel}>
                <div className={styles.activeTripsCountLabelChild} />
                <div className={styles.rectangleParent2}>
                  <div className={styles.frameChild4} />
                  <div className={styles.infoInstance}>
                    <div className={styles.name}>Name</div>
                    <div className={styles.mobileNumber}>Mobile Number</div>
                  </div>
                  <div className={styles.activeTripsCount}>
                    Active trips Count
                  </div>
                  <div className={styles.partyBalance}>Party Balance</div>
                </div>
                <div className={styles.noPartiesFoundMessage}>
                  <div className={styles.sorryNoParties}>
                    Sorry, no Parties found
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </form>
  );
};

export default Desktop;
