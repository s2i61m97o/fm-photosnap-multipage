"use client";

import Image from "next/image";
// import MenuIcon from "../Icons/MenuIcon";
// import CloseIcon from "../Icons/CloseIcon";
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
        <Image
          alt=""
          src="../../images/shared/desktop/logo.svg"
          height={16}
          width={170}
        />
        <button
          aria-expanded={open}
          aria-label="toggle navigation menu"
          className={styles.header__button}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <Icons.Close /> : <Icons.Menu />}
        </button>
      </div>
      <div className={styles.nav} aria-hidden={!open}>
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
