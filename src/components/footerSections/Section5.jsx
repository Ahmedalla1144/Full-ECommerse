import styles from "../styles";
import Link from "next/link";
import { TiSocialFacebook } from "react-icons/ti";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import AppStore from "../../../public/app.store.png";
import GoogleApp from "../../../public/google.app.png";
import QRCode from "../../../public/qr.code.jpg";
import Image from "next/image";

const section5 = 5;

export default function Section5() {
  return (
    <>
      <section className={`${styles.footer.sections} ${section5 === 5 && 'border-none'}`}>
        <h4 className={styles.footer.title2}>Download App</h4>
        <p className="text-navbar">Save $3 with App New User Only</p>
        <div className={`${styles.flex.center} gap-3`}>
          <Image
            src={QRCode}
            width={100}
            height={10}
            className="object-cover"
          />
          <div className={`${styles.flex.centerColGap(2)}`}>
            <Link href="/">
              <Image
                src={GoogleApp}
                width={200}
                height={10}
                className=" h-14 object-cover"
                alt=""
              />
            </Link>
            <Link href="/">
              <Image
                src={AppStore}
                width={200}
                height={10}
                alt=""
                className="h-16 object-cover"
              />
            </Link>
          </div>
        </div>
        <div className="flex gap-8 justify-center items-center  ">
          <Link href="/" className={styles.footer.link}>
            <TiSocialFacebook className="text-2xl" />
          </Link>
          <Link href="/" className={styles.footer.link}>
            <CiTwitter className="text-2xl" />
          </Link>
          <Link href="/" className={styles.footer.link}>
            <FaInstagram className="text-2xl" />
          </Link>
          <Link href="/" className={styles.footer.link}>
            <FaLinkedinIn className="text-2xl" />
          </Link>
        </div>
      </section>
    </>
  );
}
