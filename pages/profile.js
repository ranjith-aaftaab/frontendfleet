import { useCallback } from "react";
import FrameComponent14 from "../components/frame-component14";
import { useRouter } from "next/router";
import styles from "./profile.module.css";

const Profile = () => {
  const router = useRouter();

  const onUserManagaementTextClick = useCallback(() => {
    router.push("/profile");
  }, [router]);

  const onRectangleClick = useCallback(() => {
    router.push("/reports");
  }, [router]);

  return (
    <div className={styles.profile}>
      <header className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img
              className={styles.userAltFillIcon}
              loading="lazy"
              alt=""
              src="/user-alt-fill.svg"
            />
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.userParent}>
              <div className={styles.user}>User</div>
              <div className={styles.wrapper}>
                <div className={styles.div}>1234567890</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.profileWrapper}>
          <div className={styles.profile1}>Profile</div>
        </div>
      </header>
      <main className={styles.frameContainer}>
        <div className={styles.frameDiv}>
          <FrameComponent14 />
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <img
                  className={styles.userCicrleLightIcon}
                  alt=""
                  src="/user-cicrle-light-1.svg"
                />
                <div className={styles.accountWrapper}>
                  <div className={styles.account}>Account</div>
                </div>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.userAltFillParent}>
                  <img
                    className={styles.userAltFillIcon1}
                    alt=""
                    src="/user-alt-fill-1.svg"
                  />
                  <div
                    className={styles.userManagaement}
                    onClick={onUserManagaementTextClick}
                  >
                    User Managaement
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} onClick={onRectangleClick} />
              <div className={styles.logout}>Logout</div>
              <img className={styles.logOutIcon} alt="" src="/logout.svg" />
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper2}>
          <div className={styles.frameParent3}>
            <div className={styles.frameWrapper3}>
              <div className={styles.frameParent4}>
                <div className={styles.frameWrapper4}>
                  <div className={styles.rectangleParent1}>
                    <div className={styles.rectangleDiv} />
                    <img
                      className={styles.untitledDesign1}
                      alt=""
                      src="/untitled-design-1-1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.frameParent5}>
                  <div className={styles.frameWrapper5}>
                    <div className={styles.sailParent}>
                      <div className={styles.sail}>Sail</div>
                      <div className={styles.untitledDesign2Wrapper}>
                        <img
                          className={styles.untitledDesign2}
                          alt=""
                          src="/untitled-design-2@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.saileshParent}>
                    <div className={styles.sailesh}>Sailesh</div>
                    <div className={styles.userCircleLightWrapper}>
                      <div className={styles.userCircleLight} />
                    </div>
                    <div className={styles.div1}>1234567890</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.marteXTransport}>
              <div className={styles.marteXTransportChild} />
              <div className={styles.infoBox}>
                <div className={styles.gstNumber}>GST Number</div>
                <div className={styles.na}>N/A</div>
              </div>
              <div className={styles.infoBox1}>
                <div className={styles.pan}>{`PAN `}</div>
                <div className={styles.na1}>N/A</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.addressBlock}>
          <div className={styles.cityPincode}>
            <div className={styles.stateBlock}>
              <h3 className={styles.addressInformation}>Address Information</h3>
            </div>
            <div className={styles.rectangleParent2}>
              <div className={styles.frameChild1} />
              <div className={styles.addressParent}>
                <div className={styles.address}>Address</div>
                <div className={styles.na2}>N/A</div>
              </div>
              <div className={styles.addressLine2Parent}>
                <div className={styles.addressLine2}>{`Address Line 2 `}</div>
                <div className={styles.na3}>N/A</div>
              </div>
              <div className={styles.safeSecureParent}>
                <div className={styles.safeSecure}>
                  <div className={styles.cityParent}>
                    <div className={styles.city}>City</div>
                    <div className={styles.na4}>N/A</div>
                  </div>
                  <div className={styles.pincodeParent}>
                    <div className={styles.pincode}>Pincode</div>
                    <div className={styles.na5}>N/A</div>
                  </div>
                </div>
                <div className={styles.stateParent}>
                  <div className={styles.state}>State</div>
                  <div className={styles.na6}>N/A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
