import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame1.module.css";

const Frame1 = ({ onClose }) => {
  const router = useRouter();

  const onXTextClick = useCallback(() => {
    router.push("/parties");
  }, [router]);

  const onRectangleClick = useCallback(() => {
    router.push("/parties");
  }, [router]);

  return (
    <div className={styles.frameParent}>
      <main className={styles.addTripButtonParent}>
        <header className={styles.addTripButton}>
          <div className={styles.addTripButtonChild} />
          <div className={styles.addTrip}>Add Trip</div>
          <div className={styles.partyNameInput}>
            <h2 className={styles.x} onClick={onXTextClick}>
              x
            </h2>
          </div>
        </header>
        <section className={styles.frameWrapper}>
          <form className={styles.frameGroup}>
            <div className={styles.tripDetailsParent}>
              <b className={styles.tripDetails}>Trip Details</b>
              <div className={styles.selectedPartyLabel}>
                <div className={styles.selectParty}>Select Party *</div>
                <div className={styles.playButton}>
                  <div className={styles.playButtonChild} />
                  <div className={styles.egArjunReddy}>Eg: Arjun Reddy</div>
                  <div className={styles.playWrapper}>
                    <img className={styles.playIcon} alt="" src="/play.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.truckRegistrationNoParent}>
              <div className={styles.truckRegistrationNo}>
                Truck Registration No. *
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.egArjunReddy1}>Eg: Arjun Reddy</div>
                <div className={styles.playContainer}>
                  <img className={styles.playIcon1} alt="" src="/play.svg" />
                </div>
              </div>
            </div>
            <div className={styles.perTripLabel}>
              <b className={styles.route}>Route</b>
              <div className={styles.originDestinationLabel}>
                <div className={styles.originParent}>
                  <div className={styles.origin}>Origin *</div>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.frameItem} />
                    <div className={styles.egBangalore}>Eg: Bangalore</div>
                    <div className={styles.playFrame}>
                      <img
                        className={styles.playIcon2}
                        alt=""
                        src="/play.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.destinationParent}>
                  <div className={styles.destination}>Destination *</div>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.frameInner} />
                    <div className={styles.egDelhi}>Eg: Delhi</div>
                    <div className={styles.frameDiv}>
                      <img
                        className={styles.playIcon3}
                        alt=""
                        src="/play.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.billingInformationParent}>
              <b className={styles.billingInformation}>Billing Information</b>
              <div className={styles.partyBillingAmount}>
                Party Billing Amount *
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.rectangleParent1}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.fixed}>Fixed</div>
                </div>
                <div className={styles.rectangleParent2}>
                  <div className={styles.frameChild1} />
                  <div className={styles.perTonne}>Per Tonne</div>
                </div>
                <div className={styles.rectangleParent3}>
                  <div className={styles.frameChild2} />
                  <div className={styles.perKg}>Per Kg</div>
                </div>
                <div className={styles.rectangleParent4}>
                  <div className={styles.frameChild3} />
                  <div className={styles.perKm}>Per Km</div>
                </div>
                <div className={styles.rectangleParent5}>
                  <div className={styles.frameChild4} />
                  <div className={styles.perTrip}>Per Trip</div>
                </div>
                <div className={styles.rectangleParent6}>
                  <div className={styles.frameChild5} />
                  <div className={styles.perHour}>Per Hour</div>
                </div>
                <div className={styles.rectangleParent7}>
                  <div className={styles.frameChild6} />
                  <div className={styles.perLitre}>Per Litre</div>
                </div>
                <div className={styles.rectangleParent8}>
                  <div className={styles.frameChild7} />
                  <div className={styles.perBag}>Per Bag</div>
                </div>
              </div>
            </div>
            <div className={styles.partyFreightLabel}>
              <div className={styles.partyFreightAmount}>
                Party Freight Amount *
              </div>
              <div className={styles.groupDiv}>
                <div className={styles.frameChild8} />
                <div className={styles.eg45000}>$ Eg: 45,000</div>
              </div>
            </div>
            <div className={styles.inputFieldsParent}>
              <div className={styles.inputFields}>
                <div className={styles.startDate}>Start Date *</div>
                <div className={styles.distanceInput}>
                  <div className={styles.rectangleParent9}>
                    <div className={styles.frameChild9} />
                    <div className={styles.closeButton}>
                      <div className={styles.newTripContainer}>20-03-2024</div>
                    </div>
                    <img
                      className={styles.calendarIcon}
                      alt=""
                      src="/calendar.svg"
                    />
                  </div>
                  <div className={styles.addMoreDetailsLabel}>
                    <div className={styles.addMoreDetailsLabelChild} />
                    <div className={styles.addMoreDetails}>
                      Add More Details
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.startKmsReadingParent}>
                <div className={styles.startKmsReading}>
                  Start Kms Reading *
                </div>
                <div className={styles.rectangleParent10}>
                  <div className={styles.frameChild10} />
                  <div className={styles.startReadingsWrapper}>
                    <div className={styles.startReadings}>Start readings</div>
                  </div>
                  <div className={styles.kms}>KMs</div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>
      <footer className={styles.saveTripButton}>
        <div className={styles.saveTripButtonChild} />
        <div className={styles.closeButton1}>
          <div className={styles.closeButtonChild} onClick={onRectangleClick} />
          <div className={styles.addMoreDetailsButton}>
            <div className={styles.close}>Close</div>
          </div>
        </div>
        <div className={styles.partyBillingAmountLabel}>
          <div className={styles.partyBillingAmountLabelChild} />
          <div className={styles.saveTrip}>Save trip</div>
        </div>
      </footer>
    </div>
  );
};

export default Frame1;
