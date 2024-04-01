import { useMemo } from "react";
import styles from "./group-component.module.css";

const GroupComponent = ({
  yavatmal1PobaruMarketingn,
  yavatmalMaharashtraEast,
  propPadding,
  propHeight,
  propBottom,
  propWidth,
  propPadding1,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv2Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const chevronRightIconStyle = useMemo(() => {
    return {
      bottom: propBottom,
    };
  }, [propBottom]);

  const frameDiv3Style = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding1,
    };
  }, [propWidth, propPadding1]);

  return (
    <div className={styles.rectangleParent} style={groupDivStyle}>
      <div className={styles.frameChild} />
      <div
        className={styles.yavatmal1PobaruMarketingnagParent}
        style={frameDiv2Style}
      >
        <b className={styles.yavatmal1Pobaru}>{yavatmal1PobaruMarketingn}</b>
        <img
          className={styles.chevronRightIcon}
          alt=""
          src="/chevronright.svg"
          style={chevronRightIconStyle}
        />
      </div>
      <div
        className={styles.yavatmalMaharashtraEastWrapper}
        style={frameDiv3Style}
      >
        <div className={styles.yavatmalMaharashtraEast}>
          {yavatmalMaharashtraEast}
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
