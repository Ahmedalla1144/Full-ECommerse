import { ReactNode } from "react";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import TimeCountDown from "./TimeCountDown";

type SectionProps = {
  children: ReactNode;
  AllProductsButton?: boolean;
  SectionTitle1: string;
  SectionTitle2: string;
  ArrowButtons: boolean;
};

export default function Section({
  AllProductsButton,
  SectionTitle1,
  SectionTitle2,
  ArrowButtons,
  children,
}: SectionProps) {
  return (
    <section className="px-5 xs:px-20 flex justify-center flex-col w-full">
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

          {/* countDown */}
          <TimeCountDown />
        </div>

        {ArrowButtons && (
          <div className=" flex justify-end items-end gap-3">
            <CgArrowLeft className="rounded-full text-2xl bg-slate-500  " />
            <CgArrowRight className="rounded-full text-2xl bg-slate-500  " />
          </div>
        )}
      </div>

      {/* Second div */}
      <div>{children}</div>

      {AllProductsButton && <button>All Products Button</button>}
    </section>
  );
}
