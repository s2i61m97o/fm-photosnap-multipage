"use client";

import {Icons} from "../Icons";
import styles from "./Header.module.scss";
import {useState} from "react";
import clsx from "clsx";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.header__bar}>
        <Icons.Logo />
        <button
          aria-expanded={open}
          aria-label="toggle navigation menu"
          className={styles.header__button}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <Icons.Close /> : <Icons.Menu />}
        </button>
      </div>
      <div
        className={clsx(styles.nav, open && styles.nav__contentOpen)}
        aria-hidden={!open}
      >
        <nav
          className={clsx(styles.nav__content, open && styles.nav__contentOpen)}
        >
          <ul className={styles.dropdown__list}>
            <li>
              <Link href="" className={styles.dropdown__link}>
                <span className="visually-hidden">go to all </span>stories
              </Link>
            </li>
            <li>
              <Link href="" className={styles.dropdown__link}>
                <span className="visually-hidden">check out our </span>features
              </Link>
            </li>
            <li>
              <Link href="" className={styles.dropdown__link}>
                <span className="visually-hidden">see our </span>pricing
              </Link>
            </li>
          </ul>
          <hr />
          <Link href="" className={styles.dropdown__cta}>
            get an invite
          </Link>
        </nav>
      </div>
    </header>
  );
}
