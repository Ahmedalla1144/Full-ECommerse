"use client";
import { SectionsProduct } from "@/components/lib";
import Image from "next/image";
import Link from "next/link";
import iphone14 from "../../public/iphone14.jpg";
import playStationArm from "../../public/playstationarm.png";
import apple from "../../public/apple.png";
import { BsArrowRight } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { IoArrowForward } from "react-icons/io5";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Section from "@/components/Section";

const zoomInProperties = {
  scale: 0.1,
  transitionDuration: 800,
  duration: 2000,
  infinite: true,
  prevArrow: <BiArrowBack className="absolute left-2 text-xl cursor-pointer" />,
  nextArrow: (
    <IoArrowForward className="absolute right-2 text-xl cursor-pointer" />
  ),
  autoplay: true,
  arrows: false,
  cssClass: "w-[350px] xs:w-[450] sm:w-[500px] md:w-[600px] lg:w-[900px]",
};

const products = [
  {
    brandImg: apple,
    brandName: "Apple",
    productName: "iPhone 14 Pro",
    price: 1199,
    img: iphone14,
    voucher: 10,
  },
  {
    brandImg: apple,
    brandName: "Apple",
    productName: "PlayStation Arm",
    price: 1199,
    img: playStationArm,
    voucher: 20,
  },
];

export default function Home() {
  return (
    <main>
      <header className="flex flex-wrap justify-center items-start gap-5 md:gap-28 px-5 py-5">
        <div className="flex flex-col gap-3 w-full md:w-auto">
          <p className="bg-zinc-600 text-center text-2xl text-white font-semibold rounded-s-lg rounded-e-sm py-1 px-2 mb-2">
            Categories
          </p>
          {SectionsProduct.slice(0, 10).map((section) => {
            return (
              <div className="pl-8" key={section.title}>
                <button>{section.title}</button>
              </div>
            );
          })}
        </div>

        <Zoom {...zoomInProperties}>
          {products.map(({ brandImg, img, productName, voucher }, id) => {
            return (
              <div
                key={id}
                className="flex justify-between items-center text-white bg-black md:px-5 py-3 rounded-lg relative"
              >
                <div className="flex flex-col gap-5 justify-center items-start pl-5 md:pl-16">
                  <div className="flex flex-row justify-center items-center gap-4">
                    <Image
                      width={50}
                      height={50}
                      src={brandImg}
                      alt="iphone14"
                      className="w-8 md:w-12"
                    />
                    <p className="">{productName}</p>
                  </div>
                  <p className="text-2xl md:text-5xl font-semibold mg:leading-[60px]">
                    Up to {voucher}%
                    <br /> off Voucher
                  </p>
                  <Link
                    className="flex justify-center items-center gap-2"
                    href="/"
                  >
                    <span className="border-b-2">Shop Now</span>
                    <BsArrowRight className="text-2xl" />
                  </Link>
                </div>
                <div>
                  <Image src={img} alt={productName} width={492} height={352} />
                </div>
              </div>
            );
          })}
        </Zoom>
      </header>

      <Section AllProductsButton SectionTitle1='Todays' SectionTitle2 = 'Flash sales' ArrowButtons>
        <p>a</p>
        <p>aa</p>
      </Section>
      <Section ArrowButtons SectionTitle1="Todays" SectionTitle2="Flash sales">
        <p>a</p>
        <p>aa</p>
      </Section>
    </main>
  );
}
