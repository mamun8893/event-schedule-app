import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(true);
  };
  const handleToggleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div
        className={isOpen && styles.overlay}
        onClick={handleToggleClose}
      ></div>
      <div className={styles.header_area}>
        <div className="container">
          <div className={styles.header_wraper}>
            <div className={styles.header_left}>
              <div className="navbar-brand">
                <Image src="/logo.png" alt="logo" width={136} height={40} />
              </div>
              <div className="navbar">
                <ul
                  className={`${styles.navbar_nav} ${isOpen && styles.active}`}
                >
                  <li className={styles.nav_item}>
                    <Link href="/">About us</Link>
                  </li>
                  <li className={styles.nav_item}>
                    <Link href="/">What We do</Link>
                  </li>
                  <li className={styles.nav_item}>
                    <Link href="/">Our work</Link>
                  </li>
                  <li className={styles.nav_item}>
                    <Link href="/">Blog</Link>
                  </li>
                  <li className={styles.nav_item}>
                    <Link href="/">Say hi</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.header_right} onClick={handleToggle}>
              <AiOutlineMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
