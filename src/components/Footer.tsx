import Section1 from "./footerSections/Section1";
import Section2 from "./footerSections/Section2";
import Section3 from "./footerSections/Section3";
import Section4 from "./footerSections/Section4";
import Section5 from "./footerSections/Section5";
import Section6 from "./footerSections/Section6";
import styles  from "./styles";

export default function Footer() {
  return (
    <footer className={styles.footer.footerSection}>
      <div className="flex flex-wrap sm:justify-center items-center gap-5">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
      <div className="border-t border-gray-800 w-full text-center pt-5 mt-5">
        <Section6 />
      </div>
    </footer>
  );
}
