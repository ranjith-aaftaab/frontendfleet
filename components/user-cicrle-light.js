import styles from "./user-cicrle-light.module.css";

const UserCicrleLight = () => {
  return (
    <div className={styles.userCicrleLight}>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <img
          className={styles.frameInner}
          loading="lazy"
          alt=""
          src="/ellipse-48.svg"
        />
      </div>
    </div>
  );
};

export default UserCicrleLight;
