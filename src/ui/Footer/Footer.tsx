import Image from "next/image";
import {Icons} from "../Icons";
import Link from "next/link";

export default function Footer() {
  return (
    <section>
      <Image
        alt=""
        src="../../images/shared/desktop/logo.svg"
        height={16}
        width={170}
      />
      <div>
        <Icons.Facebook />
        <Icons.Youtube />
        <Icons.Twitter />
        <Icons.Pinterest />
        <Icons.Instagram />
      </div>
      <div>
        <ul>
          <Link href="">home</Link>
          <Link href="">stories</Link>
          <Link href="">features</Link>
          <Link href="">pricing</Link>
        </ul>
      </div>
      <Link href="">
        get an invite <Icons.Arrow />
      </Link>
      <p>Copyright 2019. All Rights Reserved</p>
    </section>
  );
}
