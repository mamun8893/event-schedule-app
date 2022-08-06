import styles from "./event-schedule.module.css";

const EventSchedule = () => {
  return (
    <div className="container">
      <div className={styles.event_responsive}>
        <div className={styles.enent_schedule_wrap}>
          <div className={styles.event_header}>
            <div className={styles.item}></div>
            <div className={styles.item}>
              <h3>Tue</h3>
            </div>
            <div className={styles.item}>
              <h3>Wed</h3>
            </div>
            <div className={styles.item}>
              <h3>Thu</h3>
            </div>
            <div className={styles.item}>
              <h3>Fri</h3>
            </div>
            <div className={styles.item}>
              <h3>Sat</h3>
            </div>
            <div className={styles.item}>
              <h3>Sat</h3>
            </div>
          </div>
          <div className={styles.event_body}>
            <div className={styles.item_wraper}>
              <div className={styles.item}>
                <h3>09:00</h3>
              </div>
              <div className={styles.item}>
                <div className={styles.conferance_event}>
                  <h4>02-08-2022</h4>
                  <div className={styles.info}>
                    <h4>Intro to the Conference</h4>
                    <p>09:00-11:50 </p>
                  </div>
                </div>
              </div>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
            </div>
            <div className={styles.item_wraper}>
              <div className={styles.item}>
                <h3>09:00</h3>
              </div>
              <div className={styles.item}>
                <div className={styles.conferance_event}>
                  <h4>02-08-2022</h4>
                </div>
              </div>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSchedule;
