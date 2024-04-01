import { useCallback } from "react";
import FrameComponent11 from "./frame-component11";
import { useRouter } from "next/router";
import GroupComponent from "./group-component";
import styles from "./frame-component10.module.css";

const FrameComponent10 = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/diesel-card1");
  }, [router]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.download21}
            alt=""
            src="/download-2-1@2x.png"
          />
          <div className={styles.findReliancePetrolBunksNeaWrapper}>
            <div className={styles.findReliancePetrol}>
              Find Reliance Petrol Bunks Near you
            </div>
          </div>
        </div>
        <FrameComponent11 />
      </div>
      <div className={styles.dieselBunksInNagpurWrapper}>
        <div className={styles.dieselBunksInContainer}>
          <span>{`21 Diesel Bunks in `}</span>
          <span className={styles.nagpur}>Nagpur</span>
        </div>
      </div>
      <div className={styles.circleCreator}>
        <div className={styles.bunks}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} onClick={onRectangleClick} />
              <b className={styles.nagpurChaonniCo3Container}>
                <p
                  className={styles.nagpurChaonniCo3}
                >{`Nagpur Chaonni Co3 Shaik abdul `}</p>
                <p className={styles.hussain}>Hussain</p>
              </b>
              <div className={styles.nagpurMaharastraEast}>
                Nagpur, Maharastra (East)
              </div>
              <img
                className={styles.chevronRightIcon}
                loading="lazy"
                alt=""
                src="/chevronright.svg"
              />
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.rectangleDiv} />
              <div className={styles.nagpurCo5HiwarkarPetroParent}>
                <b className={styles.nagpurCo5Hiwarkar}>
                  Nagpur Co5 Hiwarkar Petro
                </b>
                <div className={styles.nagpurMaharastraEast1}>
                  Nagpur, Maharastra (East)
                </div>
              </div>
              <div className={styles.chevronRightWrapper}>
                <img
                  className={styles.chevronRightIcon1}
                  alt=""
                  src="/chevronright.svg"
                />
              </div>
            </div>
            <div className={styles.rectangleParent1}>
              <div className={styles.frameChild1} />
              <div className={styles.frameWrapper}>
                <div className={styles.dighoriParent}>
                  <b className={styles.dighori}>Dighori</b>
                  <div className={styles.nagpurMaharashtraEast}>
                    Nagpur, Maharashtra (East)
                  </div>
                </div>
              </div>
              <img
                className={styles.chevronRightIcon2}
                loading="lazy"
                alt=""
                src="/chevronright.svg"
              />
            </div>
            <GroupComponent
              yavatmal1PobaruMarketingn="Yavatmal 1 Pobaru Marketingnagencies P.L."
              yavatmalMaharashtraEast="Yavatmal, Maharashtra (East)"
            />
            <GroupComponent
              yavatmal1PobaruMarketingn="Koradi"
              yavatmalMaharashtraEast="Nagpur, Maharashtra (East)"
              propPadding="var(--padding-xl) var(--padding-6xl) var(--padding-lg)"
              propHeight="20px"
              propBottom="-29px"
              propWidth="186px"
              propPadding1="var(--padding-20xl) 0px 0px"
            />
            <GroupComponent
              yavatmal1PobaruMarketingn="Khapri 3 Truckstop"
              yavatmalMaharashtraEast="Nagpur, Maharashtra (East)"
              propPadding="var(--padding-xl) var(--padding-6xl) var(--padding-lg)"
              propHeight="20px"
              propBottom="-29px"
              propWidth="186px"
              propPadding1="var(--padding-20xl) 0px 0px"
            />
            <GroupComponent
              yavatmal1PobaruMarketingn="Gondkhairi Truckstop"
              yavatmalMaharashtraEast="Nagpur, Maharashtra (East)"
              propPadding="var(--padding-xl) var(--padding-6xl) var(--padding-lg)"
              propHeight="20px"
              propBottom="-29px"
              propWidth="186px"
              propPadding1="var(--padding-20xl) 0px 0px"
            />
            <GroupComponent
              yavatmal1PobaruMarketingn="Pardi Nagpur 2 Truckstop"
              yavatmalMaharashtraEast="Nagpur, Maharashtra (East)"
              propPadding="var(--padding-xl) var(--padding-6xl) var(--padding-lg)"
              propHeight="20px"
              propBottom="-29px"
              propWidth="186px"
              propPadding1="var(--padding-20xl) 0px 0px"
            />
            <GroupComponent
              yavatmal1PobaruMarketingn="Saoner Lodhi Petroleum"
              yavatmalMaharashtraEast="Nagpur, Maharashtra (East)"
              propPadding="var(--padding-xl) var(--padding-6xl) var(--padding-lg)"
              propHeight="20px"
              propBottom="-29px"
              propWidth="186px"
              propPadding1="var(--padding-20xl) 0px 0px"
            />
            <GroupComponent
              yavatmal1PobaruMarketingn="Ramtek Sharada Filling Station"
              yavatmalMaharashtraEast="Nagpur, Maharashtra (East)"
              propPadding="var(--padding-xl) var(--padding-6xl) var(--padding-lg)"
              propHeight="20px"
              propBottom="-29px"
              propWidth="186px"
              propPadding1="var(--padding-20xl) 0px 0px"
            />
            <GroupComponent
              yavatmal1PobaruMarketingn="Umrer"
              yavatmalMaharashtraEast="Nagpur, Maharashtra (East)"
              propPadding="var(--padding-xl) var(--padding-6xl) var(--padding-lg)"
              propHeight="20px"
              propBottom="-29px"
              propWidth="186px"
              propPadding1="var(--padding-20xl) 0px 0px"
            />
            <GroupComponent
              yavatmal1PobaruMarketingn="Dhavalpeth"
              yavatmalMaharashtraEast="Nagpur, Maharashtra (East)"
              propPadding="var(--padding-xl) var(--padding-6xl) var(--padding-lg)"
              propHeight="20px"
              propBottom="-29px"
              propWidth="186px"
              propPadding1="var(--padding-20xl) 0px 0px"
            />
            <GroupComponent
              yavatmal1PobaruMarketingn="Bhandara"
              yavatmalMaharashtraEast="Bhandara, Maharashtra (East)"
              propPadding="var(--padding-xl) var(--padding-6xl) var(--padding-lg)"
              propHeight="20px"
              propBottom="-29px"
              propWidth="201px"
              propPadding1="var(--padding-20xl) 0px 0px"
            />
            <GroupComponent
              yavatmal1PobaruMarketingn="Katol P.Ghode Petroleum"
              yavatmalMaharashtraEast="Nagpur, Maharashtra (East)"
              propPadding="var(--padding-xl) var(--padding-6xl) var(--padding-lg)"
              propHeight="20px"
              propBottom="-29px"
              propWidth="186px"
              propPadding1="var(--padding-20xl) 0px 0px"
            />
            <GroupComponent
              yavatmal1PobaruMarketingn="Hinganghat"
              yavatmalMaharashtraEast="Wardha, Maharashtra (East)"
              propPadding="var(--padding-xl) var(--padding-6xl) var(--padding-lg)"
              propHeight="20px"
              propBottom="-29px"
              propWidth="190px"
              propPadding1="var(--padding-20xl) 0px 0px"
            />
            <GroupComponent
              yavatmal1PobaruMarketingn="Tumsar Tumsare Petroleum"
              yavatmalMaharashtraEast="Bhandara, Maharashtra (East)"
              propPadding="var(--padding-xl) var(--padding-6xl) var(--padding-lg)"
              propHeight="20px"
              propBottom="-29px"
              propWidth="201px"
              propPadding1="var(--padding-20xl) 0px 0px"
            />
            <GroupComponent
              yavatmal1PobaruMarketingn="Pandhurna"
              yavatmalMaharashtraEast="CHHINDWARA, Maharashtra (East)"
              propPadding="var(--padding-xl) var(--padding-6xl) var(--padding-lg)"
              propHeight="20px"
              propBottom="-29px"
              propWidth="243px"
              propPadding1="var(--padding-20xl) 0px 0px"
            />
            <GroupComponent
              yavatmal1PobaruMarketingn="Deoli"
              yavatmalMaharashtraEast="Wardha, Maharashtra (East)"
              propPadding="var(--padding-xl) var(--padding-6xl) var(--padding-lg)"
              propHeight="20px"
              propBottom="-29px"
              propWidth="190px"
              propPadding1="var(--padding-20xl) 0px 0px"
            />
            <GroupComponent
              yavatmal1PobaruMarketingn="Allipur Nagpur Ii RFO"
              yavatmalMaharashtraEast="Wardha, Maharashtra (East)"
              propPadding="var(--padding-xl) var(--padding-6xl) var(--padding-lg)"
              propHeight="20px"
              propBottom="-29px"
              propWidth="190px"
              propPadding1="var(--padding-20xl) 0px 0px"
            />
            <GroupComponent
              yavatmal1PobaruMarketingn="Pulgaon"
              yavatmalMaharashtraEast="Wardha, Maharashtra (East)"
              propPadding="var(--padding-xl) var(--padding-6xl) var(--padding-lg)"
              propHeight="20px"
              propBottom="-29px"
              propWidth="190px"
              propPadding1="var(--padding-20xl) 0px 0px"
            />
            <GroupComponent
              yavatmal1PobaruMarketingn="Warud Shah Petroleum"
              yavatmalMaharashtraEast="Amravati, Maharashtra (East)"
              propPadding="var(--padding-xl) var(--padding-6xl) var(--padding-lg)"
              propHeight="20px"
              propBottom="-29px"
              propWidth="197px"
              propPadding1="var(--padding-20xl) 0px 0px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent10;
