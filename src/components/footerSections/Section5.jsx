import styles from "../styles";
import Link from "next/link";
import { TiSocialFacebook } from "react-icons/ti";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const section5 = 5;

export default function Section5() {
  return (
    <>
      <section className={`${styles.footer.sections} ${section5 === 5 && 'border-none'}`}>
        <h4 className={styles.footer.title2}>Download App</h4>
        <p className="text-navbar">Save $3 with App New User Only</p>
        <div className={`${styles.flex.center} gap-3`}>
          <img
            src="https://s3-alpha-sig.figma.com/img/9913/87c0/5dd6d44594e01b675513068803e2426d?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dRydGkwuLDC94OBdYwRXCSq21jtVpzikR28ttLgJp7X3Y1gFUkJQn8N9mkVCiE2GJY2bDE~o5e-vKrYjwbmNy3tBPBdScBYqdty2jNgO9WIZWHdVZZta9Yr5YSSLWvZOdx4KS3wN0HPQsY212aVdAE6N308DmJIa-eZMvHSrNOp-q7hMJfEd0sbgWsrHriP1Y6nUen39cC0V86CZaYMneWsOH6O-kRzKJdIgrF3DnH4TBZflFTVAGJ8vXG08GoFTldPulZRPdNHCG7rxp9zsw0eoE-TAxLKT-C9dGjB~Hq7kJcuArXrrCu6i3mcM6jMCKDZOTyWRhDtMdhZBA5hX8A__"
            className="w-[76px] h-[76px] overflow-hidden object-cover"
          />
          <div className={`${styles.flex.centerColGap(2)}`}>
            <Link href="/">
              <img
                src="https://s3-alpha-sig.figma.com/img/3893/2d5a/ccb54c528f9bcf326ca48ea29bd6d890?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QpoQCn5crq8RvUadF8oes32a5MA89bSvPmYrGSWYsbaGGelc2ddYhi0nwh-2ipHNWY45qfWOxarglhzdh7uz0hPl-phLAOCgGelyhsB9jMquMj-syB4MNZq3zx90ZcH4yQF87wcmRA0K6JLyHA3VLK10f92aJO1h5S9YlhwZr8y3P9oRV7t8wnSWcn5-qroaRdM08mhMP~fKa7YnxOy0I~2rRKsYOI4kZIvfjLUtV6dA3fcqB6zKMwMo5sTTlA8qAoscGyfWv-Fn6h~Kr8q~NMH9xYtsSUhgiQaI~bHQz9zd3NMWDuHzVbTL7Cxr0GwtS5jo-PrvUhLz5y0qmVmjFg__"
                className="w-[130px] h-10 object-cover"
                alt=""
              />
            </Link>
            <Link href="/">
              <img
                src="https://s3-alpha-sig.figma.com/img/a61d/4c71/10b18ab55a1e1a07ebf54a46ebb07284?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nAZ2NioZdjynDZZuqaflTU3cyPNK24Q7qds3-jvfI7W8pu0lsplRyqCAkkhe-HNRcC01NXbATiVoSa55z7Hz8KVMIuwMqCd~JFnRmfHCSYov-~ULBO~NNqoB1Gh9F5BFx019qCFB19zL7K0woQFPlALPK2WcTJs~q8G2Xp-EgaldcbyE~Oe6evO68PZSY8IifVU3RtnGcgwOt6W~TZvzZ6JGUfEZE6EOVk80Y9hzqUwh3sPaSbC5x2UGQGvoqMaTq403q5rL29lLehVmxsyZ1DQBEQDYu9eUwLuIqV-ajw-aAXOr9ULHmueM3QhJ4jdTIktDhZq90CbLoXlPdSE1BQ__"
                alt=""
                className="w-[130px] h-10 object-cover "
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
