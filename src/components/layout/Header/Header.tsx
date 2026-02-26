"use client";

import {Icons} from "../../ui/Icons";
import styles from "./Header.module.scss";
import {useEffect, useState} from "react";
import clsx from "clsx";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }
    function handleScroll() {
      setOpen(false);
    }

    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
    <>
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
            className={clsx(
              styles.nav__content,
              open && styles.nav__contentOpen,
            )}
          >
            <ul className={styles.dropdown__list}>
              <li>
                <Link
                  href="/stories"
                  className={styles.dropdown__link}
                  onClick={() => setOpen((prev) => !prev)}
                >
                  <span className="visually-hidden">go to all </span>stories
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className={styles.dropdown__link}
                  onClick={() => setOpen((prev) => !prev)}
                >
                  <span className="visually-hidden">check out our </span>
                  features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className={styles.dropdown__link}
                  onClick={() => setOpen((prev) => !prev)}
                >
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
      <div
        className={clsx(
          styles.backgroundMask,
          open && styles.backgroundMaskOpen,
        )}
        onClick={() => setOpen(false)}
      ></div>
    </>
  );
}
