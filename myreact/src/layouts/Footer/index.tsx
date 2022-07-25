import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";

const index = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles["footer"]}>
          <div className={styles["footer__logo"]}>
            <img src="./images/logo.png" alt="" />
          </div>
          <div className={styles["footer__items-container"]}>
            <ul className={styles["footer__items"]}>
              <li className={styles["footer__items__item"]}>
                <NavLink className={styles["footer__items__link"]} to="/">
                  Home
                </NavLink>
              </li>
              <li className={styles["footer__items__item"]}>
                <NavLink
                  className={styles["footer__items__link"]}
                  to="/restaurant"
                >
                  Restaurant
                </NavLink>
              </li>
            </ul>
          </div>

          <div className={styles["footer__socials"]}>
            <h1>asdfd</h1>
            <h1>asfsd</h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
