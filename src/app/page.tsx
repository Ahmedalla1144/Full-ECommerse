"use client";
import { SectionsProduct } from "@/components/lib";
import Image from "next/image";
import Link from "next/link";
import iphone14 from "../../public/iphone14.jpg";
import playStationArm from "../../public/playstationarm.png";
import apple from "../../public/apple.png";
import { BsArrowRight, BsEye, BsStarFill } from "react-icons/bs";
import { BiArrowBack, BiHeart } from "react-icons/bi";
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

      <Section
        AllProductsButton
        SectionTitle1="Todays"
        SectionTitle2="Flash sales"
        ArrowButtons
      >
        <div>
          {/* first cart */}
          <div className="w-max py-8">
            {/* up div */}
            <div className="bg-[#F5F5F5] dark:bg-gray-950 flex px-5 py-3 justify-center">
              <p className="px-3 py-1 bg-red-500 w-max h-max rounded text-sm">
                -40%
              </p>
              <Image
                width={250}
                height={250}
                src={playStationArm}
                alt="play Station Arm"
              />
              <div>
                <BiHeart className="text-xl" />
                <BsEye className="text-xl" />
              </div>
            </div>
            {/* down dev */}
            <div className="flex flex-col gap-2 pt-3">
              <p>HAVIT HV-G92 Gamepad</p>
              <p className="text-red-500">
                $120 <span className="text-gray-400 line-through pl-2">$160</span>
              </p>
              <div className="flex justify-start items-center gap-3">
                <div className="flex gap-1">
                  <BsStarFill className="text-[#FFAD33]" />
                  <BsStarFill className="text-[#FFAD33]" />
                  <BsStarFill className="text-[#FFAD33]" />
                  <BsStarFill className="text-[#FFAD33]" />
                  <BsStarFill className="text-[#FFAD33]" />
                </div>
                <p>(88)</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section ArrowButtons SectionTitle1="Todays" SectionTitle2="Flash sales">
        <p></p>
      </Section>
    </main>
  );
}
