"use client";

import Image from "next/image";
import MenuIcon from "../Icons/MenuIcon";
import CloseIcon from "../Icons/CloseIcon";
import styles from "./Header.module.scss";
import {useState} from "react";
import clsx from "clsx";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <Image
          alt=""
          src="../../assets/shared/desktop/logo.svg"
          height={16}
          width={170}
        />
        <button
          aria-expanded={open}
          aria-label="toggle navigation menu"
          className={styles.header__button}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </header>
      <div
        className={clsx(styles.dropdown, open && styles.dropdownOpen)}
        aria-hidden={!open}
      >
        <nav>
          <ul className={styles.dropdown__list}>
            <li>
              <a>stories</a>
            </li>
            <li>
              <a>features</a>
            </li>
            <li>
              <a>pricing</a>
            </li>
            <hr />
            <li>
              <a className={styles.dropdown__cta}>get an invite</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
