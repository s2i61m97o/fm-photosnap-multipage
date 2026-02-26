import {Icons} from "../../ui/Icons";
import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <section className={styles.footer}>
      <Icons.Logo classname={styles.footer__logo} />
      <div className={styles.footer__socials}>
        <a href="" aria-label="our facebook page">
          <Icons.Facebook classname="facebook" />
        </a>
        <a href="" aria-label="our youtube channel">
          <Icons.Youtube />
        </a>
        <a href="" aria-label="our twitter feed">
          <Icons.Twitter />
        </a>
        <a href="" aria-label="our Pinterest page">
          <Icons.Pinterest />
        </a>
        <a href="" aria-label="our Instagram profile">
          <Icons.Instagram />
        </a>
      </div>
      <div className={styles.nav}>
        <ul className={styles.nav__list}>
          <Link href="/">home</Link>
          <Link href="/stories">stories</Link>
          <Link href="/features">features</Link>
          <Link href="/pricing">pricing</Link>
        </ul>
      </div>
      <Link href="" className={styles.footer__cta}>
        get an invite <Icons.Arrow />
      </Link>
      <p className={styles.footer__subtext}>
        Copyright 2019. All Rights Reserved
      </p>
    </section>
  );
}
