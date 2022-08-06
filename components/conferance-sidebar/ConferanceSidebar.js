import styles from "./conferance-sidebar.module.css";
import { BsArrowDownUp } from "react-icons/bs";
import { useState } from "react";

const sidebarAllItems = [
  {
    id: 1,
    name: "Organizer",
  },
  {
    id: 2,
    name: "Speakers",
  },
  {
    id: 3,
    name: "Location",
  },
  {
    id: 4,
    name: "Schedule",
  },
  {
    id: 5,
    name: "Sponsors",
  },
];

const ConferanceSidebar = () => {
  const [sidebarItem, setSidebarItem] = useState(sidebarAllItems);

  return (
    <div>
      {sidebarItem.map((item) => (
        <button key={item.id} className={styles.sidebar_item} value="organizer">
          <div className={styles.icon}>
            <BsArrowDownUp />
          </div>
          <div className={styles.content}>
            <h3>{item.name}</h3>
          </div>
        </button>
      ))}
    </div>
  );
};

export default ConferanceSidebar;
