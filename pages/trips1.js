import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent18 from "../components/frame-component18";
import FrameComponent17 from "../components/frame-component17";
import FunctionSwitcher from "../components/function-switcher";
import styles from "./trips1.module.css";

const Trips1 = () => {
  const router = useRouter();

  const onPartiesTextClick = useCallback(() => {
    router.push("/parties");
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

  const onReportsTextClick = useCallback(() => {
    router.push("/reports");
  }, [router]);

  const onProfileTextClick = useCallback(() => {
    router.push("/profile");
  }, [router]);

  return (
    <div className={styles.trips}>
      <FrameComponent18 />
      <main className={styles.frameParent}>
        <FrameComponent17
          onPartiesTextClick={onPartiesTextClick}
          onSuppliersTextClick={onSuppliersTextClick}
          onDriversTextClick={onDriversTextClick}
          onTrucksTextClick={onTrucksTextClick}
          onExpensesTextClick={onExpensesTextClick}
          onInvoicesTextClick={onInvoicesTextClick}
          onReportsTextClick={onReportsTextClick}
          onProfileTextClick={onProfileTextClick}
        />
        <div className={styles.valueSorter}>
          <div className={styles.errorForwarder}>
            <div className={styles.conditionalRenderer}>
              <div className={styles.dataSplitter}>
                <div className={styles.mergeFunctions}>
                  <img
                    className={styles.semiIcon}
                    loading="lazy"
                    alt=""
                    src="/semi.svg"
                  />
                </div>
                <div className={styles.parentChecker}>
                  <div className={styles.inputSplitter}>
                    <b className={styles.tn04Az}>TN 04 AZ 2345</b>
                    <div className={styles.viewTruckParent}>
                      <b className={styles.viewTruck}>View Truck</b>
                      <b className={styles.functionCombiner}>{`>`}</b>
                    </div>
                  </div>
                  <div className={styles.decisionCombiner}>
                    <div className={styles.listCombiner}>
                      <div className={styles.listCombinerChild} />
                      <div className={styles.market}>Market</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.dataSplitter1}>
                <img
                  className={styles.steeringWheelIcon}
                  alt=""
                  src="/steering-wheel-1.svg"
                />
                <div className={styles.errorSiever}>
                  <b className={styles.assignDriverFor}>
                    Assign Driver for Trip
                  </b>
                </div>
                <div className={styles.errorSiever1}>
                  <b className={styles.conditionalSplitter}>{`>`}</b>
                </div>
              </div>
            </div>
            <div className={styles.dataMerger}>
              <div className={styles.inputMerger}>
                <div className={styles.outputSplitter}>
                  <h1 className={styles.test2}>Test 2</h1>
                  <div className={styles.functionSwitcherParent}>
                    <FunctionSwitcher
                      partyName="Party Name"
                      partyBalance="Party Balance"
                      prop="$95,000"
                    />
                    <FunctionSwitcher
                      partyName="Supplier Name"
                      partyBalance="Supplier Balance"
                      prop="$45,000"
                      propPadding="var(--padding-lg) var(--padding-mini) var(--padding-mid) var(--padding-sm)"
                      propMinWidth="81px"
                      propMinWidth1="92px"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.logicGate}>
                <div className={styles.inputProcessor}>
                  <div className={styles.outputRenderer}>
                    <div className={styles.outputRendererChild} />
                    <div className={styles.lrNumberWrapper}>
                      <div className={styles.lrNumber}>LR Number</div>
                    </div>
                    <b className={styles.lrn005}>LRN-005</b>
                  </div>
                  <div className={styles.outputRenderer1}>
                    <div className={styles.outputRendererItem} />
                    <div className={styles.materialWrapper}>
                      <div className={styles.material}>Material</div>
                    </div>
                    <div className={styles.div}>-----------</div>
                  </div>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.errorHandler}>
                      <div className={styles.errorHandlerInner}>
                        <div className={styles.delhiParent}>
                          <b className={styles.delhi}>Delhi</b>
                          <div className={styles.lineWrapper}>
                            <div className={styles.frameItem} />
                          </div>
                        </div>
                      </div>
                      <div className={styles.march2024}>23 March 2024</div>
                    </div>
                    <div className={styles.frameWrapper}>
                      <div className={styles.ellipseParent}>
                        <div className={styles.frameInner} />
                        <img
                          className={styles.lineIcon}
                          alt=""
                          src="/line-17.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.lineContainer}>
                      <div className={styles.lineDiv} />
                    </div>
                    <div className={styles.frameGroup}>
                      <div className={styles.perambalurWrapper}>
                        <b className={styles.perambalur}>Perambalur</b>
                      </div>
                      <div className={styles.march20241}>23 March 2024</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.dataMergerInner}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.startKmsReadingParent}>
                    <div className={styles.startKmsReading}>
                      Start Kms Reading
                    </div>
                    <div className={styles.wrapper}>
                      <div className={styles.div1}>-----------</div>
                    </div>
                  </div>
                  <div className={styles.endKmsReadingParent}>
                    <div className={styles.endKmsReading}>End Kms Reading</div>
                    <div className={styles.container}>
                      <div className={styles.div2}>-----------</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <img
                    className={styles.groupIcon}
                    loading="lazy"
                    alt=""
                    src="/group-35.svg"
                  />
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.frameParent2}>
                    <div className={styles.startedWrapper}>
                      <b className={styles.started}>Started</b>
                    </div>
                    <div className={styles.march20242}>23 March 2024</div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.completedWrapper}>
                      <b className={styles.completed}>Completed</b>
                    </div>
                    <div className={styles.march20243}>23 March 2024</div>
                  </div>
                  <div className={styles.pdoReceivedParent}>
                    <b className={styles.pdoReceived}>PDO Received</b>
                    <div className={styles.march2024Wrapper}>
                      <div className={styles.march20244}>23 March 2024</div>
                    </div>
                  </div>
                  <div className={styles.pdoSubmittedWrapper}>
                    <b className={styles.pdoSubmitted}>PDO Submitted</b>
                  </div>
                  <b className={styles.settled}>Settled</b>
                </div>
              </div>
              <div className={styles.dataAggregator}>
                <div className={styles.numberListParent}>
                  <div className={styles.numberList}>
                    <div className={styles.imagePalette}>
                      <div className={styles.imagePaletteChild} />
                      <b className={styles.markPdoSubmitted}>
                        Mark PDO Submitted
                      </b>
                    </div>
                    <div className={styles.imagePalette1}>
                      <div className={styles.imagePaletteItem} />
                      <b className={styles.viewBill}>View Bill</b>
                    </div>
                  </div>
                  <div className={styles.formFieldsSet}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.frameChild1} />
                      <div className={styles.shapeContainer}>
                        <div className={styles.tableLayout}>
                          <div className={styles.iconCollection}>
                            <div className={styles.freightAmountParent}>
                              <b className={styles.freightAmount}>
                                Freight Amount
                              </b>
                              <div className={styles.progressBarParent}>
                                <b className={styles.progressBar}>$95,000</b>
                                <div className={styles.edit2Wrapper}>
                                  <img
                                    className={styles.edit2Icon}
                                    loading="lazy"
                                    alt=""
                                    src="/edit2.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.divider}>
                              <div className={styles.advanceParent}>
                                <div className={styles.advance}>
                                  (-) Advance
                                </div>
                                <b className={styles.addAdvance}>Add Advance</b>
                                <div className={styles.charges}>
                                  (+) Charges
                                </div>
                              </div>
                              <div className={styles.slider}>
                                <div className={styles.dropdownMenu}>0$</div>
                                <div className={styles.dropdownMenu1}>0$</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.modalWindow}>
                            <b className={styles.addCharge}>Add Charge</b>
                            <div className={styles.accordion}>
                              <div className={styles.tooltip}>
                                <div className={styles.payments}>
                                  (-) Payments
                                </div>
                                <b className={styles.addPayment}>Add Payment</b>
                              </div>
                              <div className={styles.sidebar}>0$</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.footer} />
                      <div className={styles.header}>
                        <div className={styles.flexContainer}>
                          <h2 className={styles.pendingPartyBalance}>
                            Pending Party Balance
                          </h2>
                          <b className={styles.gridLayout}>$95,000</b>
                        </div>
                      </div>
                      <div className={styles.stackLayout}>
                        <div className={styles.stackLayoutChild} />
                        <div className={styles.spacerWrapper}>
                          <div className={styles.spacer}>
                            <div className={styles.infoMessage}>
                              <b className={styles.truckHireCost}>
                                Truck Hire Cost
                              </b>
                              <div className={styles.exclamationTriangleIcon}>
                                <b className={styles.checkmarkCircleIcon}>
                                  $45,000
                                </b>
                                <div className={styles.crossMarkXIcon}>
                                  <img
                                    className={styles.edit2Icon1}
                                    alt=""
                                    src="/edit2.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.skeleton}>
                              <div className={styles.loadingIndicator}>
                                <div className={styles.advance1}>
                                  (-) Advance
                                </div>
                                <b className={styles.addAdvance1}>
                                  Add Advance
                                </b>
                              </div>
                              <div className={styles.warningMessage}>0$</div>
                            </div>
                            <div className={styles.skeleton1}>
                              <div className={styles.chargesParent}>
                                <div className={styles.charges1}>
                                  (+) Charges
                                </div>
                                <b className={styles.addCharge1}>Add Charge</b>
                              </div>
                              <div className={styles.div3}>0$</div>
                            </div>
                            <div className={styles.skeleton2}>
                              <div className={styles.paymentsParent}>
                                <div className={styles.payments1}>
                                  (-) Payments
                                </div>
                                <b className={styles.addPayment1}>
                                  Add Payment
                                </b>
                              </div>
                              <div className={styles.div4}>0$</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.stackLayoutItem} />
                      </div>
                      <div className={styles.heartIcon}>
                        <div className={styles.bellIcon}>
                          <div className={styles.clockIcon}>
                            <h2 className={styles.pendingSupplierBalance}>
                              Pending Supplier Balance
                            </h2>
                            <b className={styles.dataCollector}>$95,000</b>
                          </div>
                          <div className={styles.shapeHolder}>
                            <div className={styles.parent}>
                              <b className={styles.b}>+</b>
                              <b className={styles.notes}>Notes</b>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.boxContainer}>
          <div className={styles.imageProcessor}>
            <div className={styles.frameParent4}>
              <div className={styles.frameParent5}>
                <div className={styles.frameWrapper1}>
                  <div className={styles.tripProfitParent}>
                    <h2 className={styles.tripProfit}>Trip Profit</h2>
                    <div className={styles.pathProvider}>
                      <div className={styles.rectangleParent1}>
                        <div className={styles.frameChild2} />
                        <h2 className={styles.alignmentAdapter}>+</h2>
                        <div className={styles.spacingRegulator}>
                          <b className={styles.addExpense}>Add Expense</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.fillerSupplier} />
              </div>
              <div className={styles.labelMakerParent}>
                <div className={styles.labelMaker}>
                  <b className={styles.revenue}>(+) Revenue</b>
                  <b className={styles.layerOrganizer}>$95,000</b>
                </div>
                <div className={styles.labelMaker1}>
                  <div className={styles.test2Parent}>
                    <div className={styles.test21}>Test 2</div>
                    <div className={styles.fillPatternProvider}>
                      <div className={styles.strokeStyleSetter}>$95,000</div>
                      <div className={styles.shapeTransformer}>
                        <img
                          className={styles.vectorIcon}
                          loading="lazy"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.labelMaker2}>
                  <b className={styles.expense}>(+) Expense</b>
                  <b className={styles.b1}>$45,000</b>
                </div>
                <div className={styles.labelMaker3}>
                  <div className={styles.truckHireCostParent}>
                    <div className={styles.truckHireCost1}>Truck Hire Cost</div>
                    <div className={styles.group}>
                      <div className={styles.div5}>$45,000</div>
                      <div className={styles.vectorWrapper}>
                        <img
                          className={styles.vectorIcon1}
                          loading="lazy"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.pathCombinerWrapper}>
                <div className={styles.pathCombiner}>
                  <div className={styles.pathCombinerChild} />
                  <div className={styles.spacingManager}>
                    <b className={styles.profit}>Profit</b>
                    <b className={styles.borderHandler}>$50,000</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.test2Group}>
              <b className={styles.test22}>Test 2</b>
              <div className={styles.iconArrayBuilder}>
                <div className={styles.rectangleParent2}>
                  <div className={styles.frameChild3} />
                  <div className={styles.shapeArangerWrapper}>
                    <div className={styles.shapeAranger}>
                      <div className={styles.colorPalettePickerWrapper}>
                        <div className={styles.colorPalettePicker} />
                      </div>
                      <b className={styles.onlineBiltylr}>Online Bilty/LR</b>
                    </div>
                  </div>
                  <div className={styles.rectangleParent3}>
                    <div className={styles.frameChild4} />
                    <b className={styles.createLr}>Create LR</b>
                  </div>
                </div>
                <div className={styles.rectangleParent4}>
                  <div className={styles.frameChild5} />
                  <div className={styles.fillPatternApplier}>
                    <div className={styles.strokeStyleApplier}>
                      <div className={styles.shapeScaler}>
                        <div className={styles.layerMerger}>
                          <div className={styles.layerMergerChild} />
                        </div>
                        <b className={styles.podChallan}>POD Challan</b>
                      </div>
                    </div>
                    <div className={styles.spacingCreator}>
                      <div className={styles.spacingCreatorChild} />
                      <div className={styles.viewPod}>View POD</div>
                    </div>
                  </div>
                  <img
                    className={styles.frameChild6}
                    loading="lazy"
                    alt=""
                    src="/group-36.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Trips1;
