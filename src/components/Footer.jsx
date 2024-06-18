import styles from "../styles";
import Section1 from "./footerSections/Section1";
import Section2 from "./footerSections/Section2";
import Section3 from "./footerSections/Section3";
import Section4 from "./footerSections/Section4";
import Section5 from "./footerSections/Section5";

export default function Footer() {
  return (
    <div className={`${styles.flex.center} bg-black-color text-white-color` }>
      <div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
      <div></div>
    </div>
  );
}
