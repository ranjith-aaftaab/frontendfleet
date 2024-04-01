import { useCallback } from "react";
import FrameComponent16 from "../components/frame-component16";
import FrameComponent15 from "../components/frame-component15";
import { useRouter } from "next/router";
import styles from "./profile1.module.css";

const Profile = () => {
  const router = useRouter();

  const onAccountTextClick = useCallback(() => {
    router.push("/profile");
  }, [router]);

  const onRectangleClick = useCallback(() => {
    router.push("/reports");
  }, [router]);

  return (
    <div className={styles.profile}>
      <FrameComponent16 />
      <main className={styles.frameParent}>
        <FrameComponent15 />
        <section className={styles.frameWrapper}>
          <div className={styles.logoutButtonParent}>
            <div className={styles.logoutButton}>
              <div className={styles.userCircleLightInstance}>
                <div className={styles.usersContainer}>
                  <div className={styles.userCicrleLightParent}>
                    <img
                      className={styles.userCicrleLightIcon}
                      alt=""
                      src="/user-cicrle-light-11.svg"
                    />
                    <div className={styles.accountWrapper}>
                      <div
                        className={styles.account}
                        onClick={onAccountTextClick}
                      >
                        Account
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <img
                    className={styles.userAltFillIcon}
                    alt=""
                    src="/user-alt-fill-11.svg"
                  />
                  <div className={styles.userManagaement}>User Managaement</div>
                </div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} onClick={onRectangleClick} />
                <div className={styles.logout}>Logout</div>
                <img className={styles.logOutIcon} alt="" src="/logout.svg" />
              </div>
            </div>
            <div className={styles.userManagementPanelWrapper}>
              <div className={styles.userManagementPanel}>
                <div className={styles.dButton}>
                  <img
                    className={styles.d1Icon}
                    loading="lazy"
                    alt=""
                    src="/d-1@2x.png"
                  />
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.newUsersContainerParent}>
                    <div className={styles.newUsersContainer}>
                      <h1 className={styles.userManagement}>User Management</h1>
                    </div>
                    <h2
                      className={styles.clickAdd}
                    >{`Click “+ Add User“ to add User to `}</h2>
                  </div>
                  <div className={styles.userAltFillInstance}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.frameInner} />
                      <div className={styles.clickAddUser}>
                        <img
                          className={styles.plusIcon}
                          alt=""
                          src="/plus.svg"
                        />
                      </div>
                      <div className={styles.addUser}>{`Add User `}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
