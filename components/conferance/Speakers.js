import styles from "./speakers.module.css";
const Speakers = () => {
  return (
    <>
      <div className={styles.speaker_item}>
        <div className={styles.image}>
          <img src="/images/user.png" alt="user" />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <h3>John Blain Doe</h3>
            <p>Company Name</p>
          </div>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
              condimentum lectus in vel pellentesque arcu non odio. Ut dis eu
              dolor ac tellus vitae ut.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.speaker_item}>
        <div className={styles.image}>
          <img src="/images/user.png" alt="user" />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <h3>John Blain Doe</h3>
            <p>Company Name</p>
          </div>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
              condimentum lectus in vel pellentesque arcu non odio. Ut dis eu
              dolor ac tellus vitae ut.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.speaker_item}>
        <div className={styles.image}>
          <img src="/images/user.png" alt="user" />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <h3>John Blain Doe</h3>
            <p>Company Name</p>
          </div>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
              condimentum lectus in vel pellentesque arcu non odio. Ut dis eu
              dolor ac tellus vitae ut.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Speakers;
