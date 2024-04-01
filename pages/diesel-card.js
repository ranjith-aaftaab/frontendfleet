import ReportsWrapper from "../components/reports-wrapper";
import Validator from "../components/validator";
import FrameComponent12 from "../components/frame-component12";
import FrameComponent10 from "../components/frame-component10";
import styles from "./diesel-card.module.css";

const DieselCard = () => {
  return (
    <div className={styles.dieselCard}>
      <ReportsWrapper />
      <main className={styles.filter}>
        <div className={styles.transformer}>
          <Validator />
        </div>
        <FrameComponent12 />
        <div className={styles.filterInner}>
          <FrameComponent10 />
        </div>
      </main>
    </div>
  );
};

export default DieselCard;
