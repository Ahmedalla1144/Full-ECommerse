import { ReactNode } from "react";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import TimeCountDown from "./TimeCountDown";

type SectionProps = {
  children: ReactNode;
  AllProductsButton?: boolean;
  SectionTitle1: string;
  SectionTitle2: string;
  ArrowButtons?: boolean;
  CountDown?: boolean
};

export default function Section({
  AllProductsButton,
  SectionTitle1,
  SectionTitle2,
  ArrowButtons,
  CountDown,
  children,
}: SectionProps) {
  return (
    <section className="px-5 xs:px-20 flex justify-center flex-col border-b-2 border-gray-500 pb-3 mb-3 w-[90%] m-auto">
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
          {
            CountDown &&
          <TimeCountDown />
          }
          
        </div>

        {ArrowButtons && (
          <div className=" flex justify-end items-end gap-3">
            <CgArrowLeft className="rounded-full text-2xl bg-slate-500  " />
            <CgArrowRight className="rounded-full text-2xl bg-slate-500  " />
          </div>
        )}
      </div>

      {/* Second div */}
      <div className="py-10">{children}</div>

      {AllProductsButton && (
        <button className="bg-red-500 w-max px-6 py-3 text-center m-auto rounded font-semibold">
          View All Products
        </button>
      )}
    </section>
  );
}
