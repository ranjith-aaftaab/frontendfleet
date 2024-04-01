import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent23 from "./frame-component23";
import FrameComponent22 from "./frame-component22";
import FrameComponent21 from "./frame-component21";
import FrameComponent20 from "./frame-component20";
import FrameComponent19 from "./frame-component19";
import styles from "./frame2.module.css";

const Frame = ({ onClose }) => {
  const router = useRouter();

  const onXTextClick = useCallback(() => {
    router.push("/suppliers");
  }, [router]);

  const onRectangleClick = useCallback(() => {
    router.push("/suppliers");
  }, [router]);

  return (
    <div className={styles.frameParent}>
      <main className={styles.frameGroup}>
        <FrameComponent23 onXTextClick={onXTextClick} />
        <section className={styles.arjunReddyLabel}>
          <form className={styles.frameContainer}>
            <FrameComponent22 />
            <div className={styles.truckRegistrationNoParent}>
              <div className={styles.truckRegistrationNo}>
                Truck Registration No. *
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.egArjunReddy}>Eg: Arjun Reddy</div>
                <div className={styles.playWrapper}>
                  <img className={styles.playIcon} alt="" src="/play.svg" />
                </div>
              </div>
            </div>
            <div className={styles.routeParent}>
              <b className={styles.route}>Route</b>
              <div className={styles.originDestinationParent}>
                <div className={styles.originDestination}>
                  <div className={styles.origin}>Origin *</div>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.frameItem} />
                    <div className={styles.egBangalore}>Eg: Bangalore</div>
                    <div className={styles.playContainer}>
                      <img
                        className={styles.playIcon1}
                        alt=""
                        src="/play.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.originDestination1}>
                  <div className={styles.destination}>Destination *</div>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.frameInner} />
                    <div className={styles.egDelhi}>Eg: Delhi</div>
                    <div className={styles.playFrame}>
                      <img
                        className={styles.playIcon2}
                        alt=""
                        src="/play.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FrameComponent21 />
            <div className={styles.perKmLabel}>
              <div className={styles.partyFreightAmount}>
                Party Freight Amount *
              </div>
              <div className={styles.groupDiv}>
                <div className={styles.rectangleDiv} />
                <div className={styles.eg45000}>$ Eg: 45,000</div>
              </div>
            </div>
            <div className={styles.perBagLabel}>
              <div className={styles.startDateParent}>
                <div className={styles.startDate}>Start Date *</div>
                <div className={styles.egLabel}>
                  <div className={styles.rectangleParent1}>
                    <div className={styles.frameChild1} />
                    <div className={styles.closeButton}>20-03-2024</div>
                    <div className={styles.addMoreDetailsLabel}>
                      <img
                        className={styles.calendarIcon}
                        alt=""
                        src="/calendar.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameChild2} />
                    <div className={styles.addMoreDetails}>
                      Add More Details
                    </div>
                  </div>
                </div>
              </div>
              <FrameComponent20 />
            </div>
          </form>
        </section>
      </main>
      <FrameComponent19 onRectangleClick={onRectangleClick} />
    </div>
  );
};

export default Frame;
