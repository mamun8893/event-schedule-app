import Image from "next/image";
import styles from "./banner.module.css";
import { BsArrowUpRight } from "react-icons/bs";

const Banner = () => {
  return (
    <div
      className={styles.banner_area}
      style={{ backgroundImage: `url("/images/banner-bg.png")` }}
    >
      <div className={styles.banner_container}>
        <div className={styles.banner_wraper}>
          <div className={styles.banner_left}>
            <div className={styles.banner_title}>
              <h1>React Conference</h1>
            </div>
            <div className={styles.image_content}>
              <div className={styles.image}>
                <img src="/images/banner-01.png" alt="banner" />
              </div>
              <div className={styles.banner_content}>
                <p>
                  Lorem uis diam turpis quam id fermentum.In quis diam turpis
                  quam id fermentum..id fermentum.In quis diam turpis quam id
                  fermentum.
                </p>
                <button className={styles.btn}>
                  Buy Tickets <BsArrowUpRight />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.banner_right}>
            <img src="/images/banner-02.png" alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
