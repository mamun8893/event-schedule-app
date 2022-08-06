import ConferanceSidebar from "../components/conferance-sidebar/ConferanceSidebar";
import Speakers from "../components/conferance/Speakers";
import styles from "../styles/conferance.module.css";

const ConferancePage = () => {
  return (
    <div className={styles.conferance_wraper}>
      <div className="container">
        <div className={styles.heading}>
          <h2>Conference info</h2>
          <p>
            Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id
            fermentum.
          </p>
        </div>
        <div className={styles.conferance_info_wraper}>
          <div className={styles.conferance_info_left}>
            <ConferanceSidebar />
          </div>
          <div className={styles.conferance_info_right}>
            <div className="speakers_item_wrap">
              <Speakers />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferancePage;
