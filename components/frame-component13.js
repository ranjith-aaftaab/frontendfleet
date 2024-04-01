import { useCallback } from "react";
import { useRouter } from "next/router";
import Mapper from "./mapper";
import styles from "./frame-component13.module.css";

const FrameComponent13 = () => {
  const router = useRouter();

  const onPartiesTextClick = useCallback(() => {
    router.push("/parties");
  }, [router]);

  const onTripsTextClick = useCallback(() => {
    router.push("/trips");
  }, [router]);

  const onSuppliersTextClick = useCallback(() => {
    router.push("/suppliers");
  }, [router]);

  const onDriversTextClick = useCallback(() => {
    router.push("/drivers");
  }, [router]);

  const onTrucksTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onExpensesTextClick = useCallback(() => {
    router.push("/expenses");
  }, [router]);

  const onInvoicesTextClick = useCallback(() => {
    router.push("/invoices");
  }, [router]);

  const onProfileTextClick = useCallback(() => {
    router.push("/profile");
  }, [router]);

  return (
    <div className={styles.paperLightParent}>
      <div className={styles.paperLight} />
      <img className={styles.shopLightIcon} alt="" src="/shop-light.svg" />
      <Mapper
        onPartiesTextClick={onPartiesTextClick}
        onTripsTextClick={onTripsTextClick}
        onSuppliersTextClick={onSuppliersTextClick}
        onDriversTextClick={onDriversTextClick}
      />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.truckParent}>
                <img
                  className={styles.truckIcon}
                  loading="lazy"
                  alt=""
                  src="/truck.svg"
                />
                <div className={styles.trucks} onClick={onTrucksTextClick}>
                  Trucks
                </div>
              </div>
              <div className={styles.icons8Money301Parent}>
                <img
                  className={styles.icons8Money301}
                  loading="lazy"
                  alt=""
                  src="/icons8money30-1@2x.png"
                />
                <div className={styles.expensesWrapper}>
                  <div
                    className={styles.expenses}
                    onClick={onExpensesTextClick}
                  >
                    Expenses
                  </div>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <div className={styles.gasPump241Parent}>
                    <img
                      className={styles.gasPump241Icon}
                      alt=""
                      src="/gaspump24-1@2x.png"
                    />
                    <div className={styles.vectorParent}>
                      <img
                        className={styles.frameChild}
                        alt=""
                        src="/vector-57.svg"
                      />
                      <img
                        className={styles.frameItem}
                        loading="lazy"
                        alt=""
                        src="/vector-55.svg"
                      />
                      <img
                        className={styles.frameInner}
                        loading="lazy"
                        alt=""
                        src="/vector-58.svg"
                      />
                      <img
                        className={styles.vectorIcon}
                        loading="lazy"
                        alt=""
                        src="/vector-59.svg"
                      />
                    </div>
                  </div>
                  <img
                    className={styles.orderLightIcon}
                    loading="lazy"
                    alt=""
                    src="/order-light.svg"
                  />
                  <img
                    className={styles.userBoxLightIcon}
                    loading="lazy"
                    alt=""
                    src="/user-box-light.svg"
                  />
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.frameParent3}>
                    <div className={styles.frameParent4}>
                      <div className={styles.dieselCardWrapper}>
                        <div className={styles.dieselCard}>Diesel Card</div>
                      </div>
                      <div
                        className={styles.invoices}
                        onClick={onInvoicesTextClick}
                      >
                        Invoices
                      </div>
                    </div>
                    <div className={styles.sequenceHandler}>
                      <div className={styles.shopKhata}>Shop khata</div>
                      <div className={styles.nestedLoop}>
                        <div className={styles.reports}>Reports</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.profile} onClick={onProfileTextClick}>
                    Profile
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.treeBuilder}>
              <div className={styles.errorHandler}>
                <div className={styles.variableAssigner}>
                  <div className={styles.variableAssignerChild} />
                  <b className={styles.new}>NEW</b>
                </div>
                <div className={styles.variableAssigner1}>
                  <div className={styles.variableAssignerItem} />
                  <b className={styles.new1}>NEW</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.outputGenerator} />
      </div>
      <div className={styles.thresholdChecker}>
        <div className={styles.mergeCombiner}>
          <div className={styles.sampleTaker}>
            <div className={styles.randomizer}>
              <img
                className={styles.untitledDesign1}
                loading="lazy"
                alt=""
                src="/untitled-design-1@2x.png"
              />
            </div>
            <h2 className={styles.martexTransport}>MarteX transport</h2>
          </div>
          <div className={styles.labelApplier}>
            <div className={styles.constantProvider}>
              <div className={styles.formulaEvaluator}>
                <img
                  className={styles.untitledDesign2}
                  loading="lazy"
                  alt=""
                  src="/untitled-design-2@2x.png"
                />
              </div>
              <div className={styles.safeSecure}>{`100% Safe & Secure`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent13;
