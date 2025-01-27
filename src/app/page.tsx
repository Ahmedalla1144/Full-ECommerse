"use client";
import {
  bestSellingProducts,
  calcTimeLeft,
  categories,
  flashSalesProducts,
  heroProducts,
  ourProdcts,
} from "@/components/lib";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { IoArrowForward } from "react-icons/io5";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Section from "@/components/Section";
import ProductCart from "@/components/ProductCart";
import Categories from "@/components/Categories";
import jblSpeakers from "../../public/jbl.speakers.png";
import ps5 from "../../public/ps5.png";
import WomenCollections from "../../public/women.collection.jpg";
import Speakers from "../../public/speakers.png";
import Perfume from "../../public/gucci.perfume.png";
import { useEffect, useState } from "react";
import { CountDownLeft } from "../../type";
import styles from "@/components/styles";
import ViewProduct from "@/components/ViewProduct";

const zoomInProperties = {
  scale: 0.1,
  transitionDuration: 800,
  duration: 900,
  infinite: true,
  prevArrow: <BiArrowBack className="absolute left-2 text-xl cursor-pointer" />,
  nextArrow: (
    <IoArrowForward className="absolute right-2 text-xl cursor-pointer" />
  ),
  autoplay: true,
  arrows: false,
  cssClass: "w-[350px] xs:w-[450] sm:w-[500px] md:w-[600px] lg:w-[900px]",
};

export default function Home() {
  const initTime: CountDownLeft = { days: 0, hrs: 0, mins: 0, secs: 0 };
  const [timeLeft, setTimeLeft] = useState<CountDownLeft>(initTime);

  useEffect(() => {
    setTimeLeft(calcTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calcTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <main>
      <header className="flex flex-wrap justify-center items-start gap-5 md:gap-28 px-5 py-5">
        <div className="flex flex-col gap-3 w-full md:w-auto">
          <p className="bg-zinc-600 text-center text-2xl text-white font-semibold rounded-s-lg rounded-e-sm py-1 px-2 mb-2">
            Categories
          </p>
          {categories.slice(0, 10).map((section) => {
            const name = section.title
              .split(" ")
              .map((word) => word.toLowerCase())
              .toString()
              .replace(/[’& ,]/g, "");
            return (
              <div className="pl-8" key={section.title}>
                <Link href={`categories/${name}`}>{section.title}</Link>
              </div>
            );
          })}
        </div>

        <Zoom {...zoomInProperties}>
          {heroProducts.map(({ brandImg, img, productName, voucher }, id) => {
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

      {/* sales section */}
      <Section
        AllProductsButton
        SectionTitle1="Todays"
        SectionTitle2="Flash sales"
        ArrowButtons
        CountDown
        classes="flex gap-5 overflow-x-scroll"
      >
        <ProductCart products={flashSalesProducts} />
      </Section>

      {/* categories section */}
      <Section
        SectionTitle1="Categories"
        SectionTitle2="Browse By Category"
        ArrowButtons
        classes="flex gap-5 overflow-x-scroll pb-5"
      >
        <Categories />
      </Section>

      {/* best selling section */}
      <Section
        SectionTitle1="This Month"
        SectionTitle2="Best Selling Products"
        classes="flex gap-5 overflow-x-scroll"
      >
        <ProductCart products={bestSellingProducts} />
      </Section>

      <div className="flex flex-col md:flex-row justify-center items-center bg-black text-white w-[90%] m-auto my-10 md:px-10 md:py-20 py-5 px-5">
        {/* right div */}
        <div className="flex flex-col gap-10 w-full md:px-10">
          <h4 className="text-[#00FF66]">Categories</h4>
          <h3 className="text-4xl md:text-5xl font-semibold leading-[50px]">
            Enhance Your <br /> Music Experience
          </h3>
          <div className="flex flex-wrap gap-3 md:gap-5">
            <div className={styles.timeCounter}>
              <span className="text-lg md:text-xl font-bold">
                {timeLeft.days}
              </span>
              <span className="text-xs md:text-sm">Days</span>
            </div>
            <div className={styles.timeCounter}>
              <span className="text-lg md:text-xl font-bold">
                {timeLeft.hrs}
              </span>
              <span className="text-xs md:text-sm">Hours</span>
            </div>
            <div className={styles.timeCounter}>
              <span className="text-lg md:text-xl font-bold">
                {timeLeft.mins}
              </span>
              <span className="text-xs md:text-sm">Minutes</span>
            </div>
            <div className={styles.timeCounter}>
              <span className="text-lg md:text-xl font-bold">
                {timeLeft.secs}
              </span>
              <span className="text-xs md:text-sm">Seconds</span>
            </div>
          </div>
          <button className="w-max px-8 py-3 bg-[#00FF66] text-white rounded">
            Buy Now!
          </button>
        </div>

        {/* left div */}
        <div className="flex justify-center items-center w-full relative ">
          <div className="flex items-center justify-center w-full h-full px-7 blur-3xl absolute">
            <div className="flex items-center justify-center w-[90%] h-[90%] p-4 rounded-full bg-[#D9D9D9]/30" />
          </div>
          <Image
            width={500}
            height={300}
            src={jblSpeakers}
            alt="JBl Speakers"
            className="w-[568] h-[330] object-cover -scale-x-100"
          />
        </div>
      </div>

      {/* our product section */}
      <Section
        SectionTitle1="Our Products"
        SectionTitle2="Explore Our Products"
        AllProductsButton
        ArrowButtons
        classes="flex overflow-x-scroll md:flex-wrap  gap-5"
      >
        <ProductCart products={ourProdcts} />
      </Section>

      {/* New Arrival section */}
      <Section SectionTitle1="Featured" SectionTitle2="New Arrival">
        <div className="flex flex-wrap gap-5 justify-between">
          {/* left div */}
          <div className="lg:w-[50%]">
            <ViewProduct
              title="PlayStation 5"
              description="Black and White version of the PS5 coming out on sale."
              img={ps5}
              classes_img_div="h-full flex justify-end items-end"
              classes_div3="absolute bottom-0 px-5 w-1/2"
              classes_div1="h-full"
            />
          </div>

          {/* right dev */}
          <div className="flex flex-col gap-4 lg:w-[48%]">
            {/* up div */}
            <div className="max-w-[600px]">
              <ViewProduct
                title="Women’s Collections"
                description="Featured woman collections that give you another vibe."
                img={WomenCollections}
                classes_div1="flex flex-row-reverse items-end"
                classes_div3="w-full"
                img_classes="-scale-x-100"
              />
            </div>

            {/* down dev */}
            <div className="flex md:flex-row flex-col justify-center items-center gap-3">
              <ViewProduct
                title="Speakers"
                description="Amazon wireless speakers"
                img={Speakers}
                classes_img_div="flex justify-center items-center max-w-[300px]"
                classes_div1="h-[300px] flex items-center w-full justify-center"
                classes_div3="absolute bottom-0 left-1 !gap-1"
                blurDiv
              />
              <ViewProduct
                title="Perfume"
                description="GUCCI INTENSE OUD EDP"
                img={Perfume}
                classes_div1="lg:h-[300px] flex items-center w-full justify-center"
                classes_img_div="flex justify-center items-center max-w-[300px]"
                classes_div3="absolute bottom-0 left-1 !gap-1"
                blurDiv
              />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
