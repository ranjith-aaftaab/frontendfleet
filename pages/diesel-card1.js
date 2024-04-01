import ReportsWrapper from "../components/reports-wrapper";
import FrameComponent13 from "../components/frame-component13";
import FrameComponent12 from "../components/frame-component12";
import NestedIfHandler from "../components/nested-if-handler";
import styles from "./diesel-card1.module.css";

const DieselCard1 = () => {
  return (
    <div className={styles.dieselCard}>
      <ReportsWrapper />
      <main className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <FrameComponent13 />
        </div>
        <FrameComponent12 />
        <div className={styles.indexUpdater}>
          <NestedIfHandler />
        </div>
      </main>
    </div>
  );
};

export default DieselCard1;
