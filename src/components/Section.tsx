import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  AllProductsButton?: boolean;
  SectionTitle1: string;
  SectionTitle2: string;
  ArrowButtons: boolean;
};

export default function Section({
  children,
  AllProductsButton,
  SectionTitle1,
  SectionTitle2,
  ArrowButtons,
}: SectionProps) {
  return (
    <section className="xs:px-20 flex justify-center flex-col w-full">
      {/* first div */}
      <div className="flex flex-row justify-between border w-full">
        <div className="flex flex-row justify-between gap-10 border">
          <div className="flex flex-col gap-5 border">
            <div className="flex flex-row gap-2">
              <div className="w-2 h-6 bg-red-500 rounded" />
              <h5>{SectionTitle1}</h5>
            </div>
            <h4>{SectionTitle2}</h4>
          </div>
          <div className="border flex items-end justify-end ">
            <p>Timer</p>
          </div>
        </div>
        <div className="border flex justify-end items-end">ArrowButtons</div>
      </div>

      {/* Second div */}
      <div></div>

      {AllProductsButton && <button>All Products Button</button>}
    </section>
  );
}
