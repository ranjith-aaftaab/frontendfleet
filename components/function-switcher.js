import { useMemo } from "react";
import styles from "./function-switcher.module.css";

const FunctionSwitcher = ({
  partyName,
  partyBalance,
  prop,
  propPadding,
  propMinWidth,
  propMinWidth1,
}) => {
  const functionSwitcherStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const partyNameStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const partyBalanceStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={styles.functionSwitcher} style={functionSwitcherStyle}>
      <div className={styles.functionSwitcherChild} />
      <div className={styles.decisionSwitcher}>
        <div className={styles.partyName} style={partyNameStyle}>
          {partyName}
        </div>
        <b className={styles.test2}>Test 2</b>
      </div>
      <div className={styles.errorRerouter}>
        <div className={styles.partyBalance} style={partyBalanceStyle}>
          {partyBalance}
        </div>
        <b className={styles.b}>{prop}</b>
      </div>
    </div>
  );
};

export default FunctionSwitcher;
