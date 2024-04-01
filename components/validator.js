import { useCallback } from "react";
import { useRouter } from "next/router";
import Mapper from "./mapper";
import styles from "./validator.module.css";

const Validator = () => {
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
    <div className={styles.validator}>
      <img className={styles.orderLightIcon} alt="" src="/order-light.svg" />
      <div className={styles.paperLight} />
      <Mapper
        onPartiesTextClick={onPartiesTextClick}
        onTripsTextClick={onTripsTextClick}
        onSuppliersTextClick={onSuppliersTextClick}
        onDriversTextClick={onDriversTextClick}
      />
      <div className={styles.transformer}>
        <div className={styles.joiner}>
          <div className={styles.builder}>
            <div className={styles.generator}>
              <div className={styles.processor}>
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
              <div className={styles.validator1}>
                <img
                  className={styles.icons8Money301}
                  loading="lazy"
                  alt=""
                  src="/icons8money30-1@2x.png"
                />
                <div className={styles.transformer1}>
                  <div
                    className={styles.expenses}
                    onClick={onExpensesTextClick}
                  >
                    Expenses
                  </div>
                </div>
              </div>
              <div className={styles.aggregator}>
                <div className={styles.sorterPlus}>
                  <div className={styles.filterPlus}>
                    <div className={styles.selectorPlus}>
                      <img
                        className={styles.gasPump241Icon}
                        alt=""
                        src="/gaspump24-1@2x.png"
                      />
                      <div className={styles.splitterPlus}>
                        <img
                          className={styles.iteratorPlusIcon}
                          alt=""
                          src="/vector-57.svg"
                        />
                        <img
                          className={styles.mergerPlusIcon}
                          loading="lazy"
                          alt=""
                          src="/vector-55.svg"
                        />
                        <img
                          className={styles.mergerPlusIcon1}
                          loading="lazy"
                          alt=""
                          src="/vector-58.svg"
                        />
                        <img
                          className={styles.mergerPlusIcon2}
                          loading="lazy"
                          alt=""
                          src="/vector-59.svg"
                        />
                      </div>
                    </div>
                    <img
                      className={styles.shopLightIcon}
                      loading="lazy"
                      alt=""
                      src="/shop-light.svg"
                    />
                  </div>
                  <img
                    className={styles.userBoxLightIcon}
                    loading="lazy"
                    alt=""
                    src="/user-box-light.svg"
                  />
                </div>
                <div className={styles.registry}>
                  <div className={styles.monitor}>
                    <div className={styles.dataAggregator}>
                      <div className={styles.logicBranch}>
                        <div className={styles.dieselCard}>Diesel Card</div>
                      </div>
                      <div
                        className={styles.invoices}
                        onClick={onInvoicesTextClick}
                      >
                        Invoices
                      </div>
                    </div>
                    <div className={styles.shopKhataParent}>
                      <div className={styles.shopKhata}>Shop khata</div>
                      <div className={styles.reportsWrapper}>
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
            <div className={styles.builderInner}>
              <div className={styles.frameParent}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <b className={styles.new}>NEW</b>
                </div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <b className={styles.new1}>NEW</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.transformerChild} />
      </div>
      <div className={styles.validatorInner}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.untitledDesign1Wrapper}>
              <img
                className={styles.untitledDesign1}
                loading="lazy"
                alt=""
                src="/untitled-design-1@2x.png"
              />
            </div>
            <h2 className={styles.martexTransport}>MarteX transport</h2>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameDiv}>
              <div className={styles.untitledDesign2Wrapper}>
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

export default Validator;
