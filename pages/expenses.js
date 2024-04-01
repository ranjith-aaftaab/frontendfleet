import RootContainer from "../components/root-container";
import FrameComponent8 from "../components/frame-component8";
import styles from "./expenses.module.css";

const Expenses = () => {
  return (
    <div className={styles.expenses}>
      <RootContainer
        trucks="Expenses"
        frameDivWidth="412px"
        frameDivMinWidth="108px"
      />
      <main className={styles.addTruckExpense}>
        <FrameComponent8 />
        <section className={styles.addTruckExpenseInner}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.frameWrapper}>
                  <div className={styles.march2024Parent}>
                    <div className={styles.march2024}>March 2024</div>
                    <div className={styles.frameDiv}>
                      <div className={styles.rectangleParent}>
                        <div className={styles.frameChild} />
                        <img
                          className={styles.chevronDownIcon}
                          alt=""
                          src="/chevrondown.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameItem} />
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent1}>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.frameInner} />
                    <div className={styles.totalMonthExpenses}>
                      Total Month expenses
                    </div>
                    <div className={styles.frameParent2}>
                      <div className={styles.infoWrapper}>
                        <img
                          className={styles.infoIcon}
                          loading="lazy"
                          alt=""
                          src="/info1.svg"
                        />
                      </div>
                      <div className={styles.div}>$0</div>
                    </div>
                  </div>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.asParent}>
                      <img
                        className={styles.asIcon}
                        loading="lazy"
                        alt=""
                        src="/as@2x.png"
                      />
                      <div className={styles.frameWrapper2}>
                        <div className={styles.monthlyRevenueParent}>
                          <div className={styles.monthlyRevenue}>
                            Monthly Revenue
                          </div>
                          <div className={styles.div1}>0$</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.afParent}>
                      <img
                        className={styles.afIcon}
                        loading="lazy"
                        alt=""
                        src="/af@2x.png"
                      />
                      <div className={styles.monthlyDataDisplayWrapper}>
                        <div className={styles.monthlyDataDisplay}>
                          <div className={styles.monthlyExpense}>
                            Monthly Expense
                          </div>
                          <div className={styles.monthlyExpenses}>0$</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.totalMonthExpenses1}>
                      <img
                        className={styles.fdIcon}
                        loading="lazy"
                        alt=""
                        src="/fd@2x.png"
                      />
                      <div className={styles.noTripExpense}>
                        <div className={styles.noOfficeExpense}>
                          <div className={styles.monthlyProfit}>
                            Monthly Profit
                          </div>
                          <div className={styles.monthlyProfit1}>0$</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.viewReport}>
                      <div className={styles.rectangleParent1}>
                        <div className={styles.frameChild1} />
                        <div className={styles.fileTextWrapper}>
                          <img
                            className={styles.fileTextIcon}
                            alt=""
                            src="/filetext.svg"
                          />
                        </div>
                        <div className={styles.viewReport1}>View Report</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.addTruckExpenseParent}>
                <div className={styles.addTruckExpense1}>
                  <div className={styles.addTruckExpenseAddTruckEx}>
                    <div className={styles.hNoTruckExpenseYouHaveNo}>
                      <div className={styles.jjkk}>
                        <img
                          className={styles.hIcon}
                          loading="lazy"
                          alt=""
                          src="/h@2x.png"
                        />
                      </div>
                      <h3 className={styles.noTruckExpense}>
                        No Truck Expense
                      </h3>
                    </div>
                  </div>
                  <div className={styles.youHaveNotContainer}>
                    <p className={styles.youHaveNot}>
                      You have not added any truck expenses
                    </p>
                    <p className={styles.forThisMonth}>for this month</p>
                  </div>
                </div>
                <div className={styles.frameWrapper3}>
                  <div className={styles.rectangleParent2}>
                    <div className={styles.frameChild2} />
                    <div className={styles.addTruckExpense2}>
                      Add Truck Expense
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.frameParent5}>
                  <div className={styles.jjWrapper}>
                    <img
                      className={styles.jjIcon}
                      loading="lazy"
                      alt=""
                      src="/jj@2x.png"
                    />
                  </div>
                  <div className={styles.noTripExpenseWrapper}>
                    <h3 className={styles.noTripExpense1}>No Trip Expense</h3>
                  </div>
                  <div className={styles.youHaveNotContainer1}>
                    <p className={styles.youHaveNot1}>
                      You have not added any trip expenses
                    </p>
                    <p className={styles.forThisMonth1}>for this month</p>
                  </div>
                </div>
                <div className={styles.frameWrapper4}>
                  <div className={styles.rectangleParent3}>
                    <div className={styles.frameChild3} />
                    <div className={styles.addTruckExpense3}>
                      Add Truck Expense
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.frameParent7}>
                  <div className={styles.kkWrapper}>
                    <img
                      className={styles.kkIcon}
                      loading="lazy"
                      alt=""
                      src="/kk@2x.png"
                    />
                  </div>
                  <div className={styles.noOfficeExpenseWrapper}>
                    <h3 className={styles.noOfficeExpense1}>
                      No Office Expense
                    </h3>
                  </div>
                  <div className={styles.youHaveNotContainer2}>
                    <p className={styles.youHaveNot2}>
                      You have not added any office expenses
                    </p>
                    <p className={styles.forThisMonth2}>for this month</p>
                  </div>
                </div>
                <div className={styles.frameWrapper5}>
                  <div className={styles.rectangleParent4}>
                    <div className={styles.frameChild4} />
                    <div className={styles.addTruckExpense4}>
                      Add Truck Expense
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

export default Expenses;
