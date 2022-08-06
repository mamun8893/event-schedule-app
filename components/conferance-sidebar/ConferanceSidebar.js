import styles from "./conferance-sidebar.module.css";
import { BsArrowDownUp } from "react-icons/bs";
import { useState } from "react";

const sidebarAllItems = [
  {
    id: 1,
    name: "organizer",
  },
  {
    id: 2,
    name: "speakers",
  },
  {
    id: 3,
    name: "location",
  },
  {
    id: 4,
    name: "schedule",
  },
  {
    id: 5,
    name: "sponsors",
  },
];

const ConferanceSidebar = ({ handleTabChange }) => {
  const [sidebarItem, setSidebarItem] = useState(sidebarAllItems);

  return (
    <div>
      {sidebarItem.map((item) => (
        <button
          onClick={handleTabChange}
          key={item.id}
          className={styles.sidebar_item}
          value={item.name}
        >
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
