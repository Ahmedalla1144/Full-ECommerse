import { ReactNode } from "react";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import TimeCountDown from "./TimeCountDown";
import styles from "./styles";

type SectionProps = {
  children: ReactNode;
  AllProductsButton?: boolean;
  SectionTitle1: string;
  SectionTitle2: string;
  ArrowButtons?: boolean;
  CountDown?: boolean;
  classes?: string
};

export default function Section({
  AllProductsButton,
  SectionTitle1,
  SectionTitle2,
  ArrowButtons,
  CountDown,
  children,
  classes
}: SectionProps) {
  return (
    <section className={`${styles.flex.setAll('center', '' ,'col', 5)} md:px-5 xs:px-20 border-b-2 dark:border-gray-500 border-[#000000] py-3 md:py-10 mb-3 w-[90%] m-auto`}>
      {/* first div */}
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-16">
          <div className="flex flex-col gap-5 ">
            <div className="flex flex-row gap-2">
              <div className="w-2 h-6 bg-red-500 rounded" />
              <h5>{SectionTitle1}</h5>
            </div>
            <h4 className="text-xl xs:text-3xl">{SectionTitle2}</h4>
          </div>

          {/* Count Down */}
          {CountDown && <TimeCountDown />}
        </div>

        {/* Arrow Buttons */}
        {ArrowButtons && (
          <div className=" flex justify-end items-end gap-2">
            <CgArrowLeft className="rounded-full text-2xl bg-[#F5F5F5] dark:bg-red-500" />
            <CgArrowRight className="rounded-full text-2xl bg-[#F5F5F5] dark:bg-red-500" />
          </div>
        )}
      </div>

      {/* Second div (childern) */}
      <div className={`${classes} py-2`}>{children}</div>

      {AllProductsButton && (
        <button className="bg-red-500 text-white w-max px-6 py-3 text-center m-auto rounded font-semibold mt-5 hover:scale-110 transition-all duration-300 ease-in-out">
          View All Products
        </button>
      )}
    </section>
  );
}
