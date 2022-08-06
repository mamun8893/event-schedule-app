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
        <div className={styles.banner_line}>
          <img src="/images/line.png" alt="line" />
        </div>
        <div className={styles.banner_wraper}>
          <div className={styles.banner_left}>
            <div className={styles.banner_title}>
              <h1>React Conference</h1>
            </div>
            <div className={styles.image_content}>
              <div className={styles.image}>
                <img src="/images/banner-01.png" alt="banner" />
                <div className={styles.shape}>
                  <img src="/images/shape.jpg" alt="shape" />
                </div>
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
            <div className={styles.right_image_wrap}>
              <img src="/images/banner-02.png" alt="banner" />
              <div className={styles.star_img}>
                <img src="/images/star.png" alt="star" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
