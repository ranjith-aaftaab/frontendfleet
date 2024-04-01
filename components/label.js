import { useMemo } from "react";
import styles from "./label.module.css";

const Label = ({
  supplierName,
  enterSupplierName,
  propFlex,
  propAlignSelf,
  propMinWidth,
  propDisplay,
}) => {
  const labelStyle = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  const supplierNameStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const enterSupplierNameStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className={styles.label} style={labelStyle}>
      <div className={styles.supplierName} style={supplierNameStyle}>
        {supplierName}
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div
          className={styles.enterSupplierName}
          style={enterSupplierNameStyle}
        >
          {enterSupplierName}
        </div>
      </div>
    </div>
  );
};

export default Label;
