import iphone14 from "../../../public/iphone14.jpg";
import playStationArm from "../../../public/playstationarm.png";
import apple from "../../../public/apple.png";
import keyboard from "../../../public/keyboard.png";
import computerScreen from "../../../public/computer-screen.png";
import chair from "../../../public/chair.png";
import jacket from "../../../public/jacket.png";
import gucciBag from "../../../public/gucci-bag.png";
import rgpCpuCooler from "../../../public/rgp-cpu.cooler.png";
import bookSelf from "../../../public/bookself.png";
import { CountDownLeft, ProductCartProps } from "../../../type";

export const categories = [
  { title: "Woman’s Fashion" },
  { title: "Men’s Fashion" },
  { title: "Electronics" },
  { title: "Home & Lifestyle" },
  { title: "Medicine" },
  { title: "Sports & Outdoor" },
  { title: "Baby’s & Toys" },
  { title: "Groceries & Pets" },
  { title: "Health & Beauty" },
];

export const heroProducts = [
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

export const flashSalesProducts: ProductCartProps[] = [
  {
    title: "HAVIT HV-G92 Gamepad",
    image: playStationArm,
    oldPrice: 160,
    price: 120,
    discount: 20,
    stars: 5,
    views: 88,
  },
  {
    title: "AK-900 Wired Keyboard",
    image: keyboard,
    oldPrice: 1160,
    price: 960,
    discount: 35,
    stars: 4,
    views: 75,
  },
  {
    title: "IPS LCD Gaming Monitor",
    image: computerScreen,
    oldPrice: 400,
    price: 370,
    discount: 30,
    stars: 5,
    views: 99,
  },
  {
    title: "S-Series Comfort Chair ",
    image: chair,
    oldPrice: 400,
    price: 375,
    discount: 25,
    stars: 5,
    views: 99,
  },
  {
    title: "HAVIT HV-G92 Gamepad",
    image: playStationArm,
    oldPrice: 160,
    price: 120,
    discount: 20,
    stars: 5,
    views: 88,
  },
  {
    title: "AK-900 Wired Keyboard",
    image: keyboard,
    oldPrice: 1160,
    price: 960,
    discount: 35,
    stars: 4,
    views: 75,
  },
  {
    title: "IPS LCD Gaming Monitor",
    image: computerScreen,
    oldPrice: 400,
    price: 370,
    discount: 30,
    stars: 5,
    views: 99,
  },
  {
    title: "S-Series Comfort Chair ",
    image: chair,
    oldPrice: 400,
    price: 375,
    discount: 25,
    stars: 5,
    views: 99,
  },
  {
    title: "HAVIT HV-G92 Gamepad",
    image: playStationArm,
    oldPrice: 160,
    price: 120,
    discount: 20,
    stars: 5,
    views: 88,
  },
  {
    title: "AK-900 Wired Keyboard",
    image: keyboard,
    oldPrice: 1160,
    price: 960,
    discount: 35,
    stars: 4,
    views: 75,
  },
  {
    title: "IPS LCD Gaming Monitor",
    image: computerScreen,
    oldPrice: 400,
    price: 370,
    discount: 30,
    stars: 5,
    views: 99,
  },
  {
    title: "S-Series Comfort Chair ",
    image: chair,
    oldPrice: 400,
    price: 375,
    discount: 25,
    stars: 5,
    views: 99,
  },
  {
    title: "HAVIT HV-G92 Gamepad",
    image: playStationArm,
    oldPrice: 160,
    price: 120,
    discount: 20,
    stars: 5,
    views: 88,
  },
  {
    title: "AK-900 Wired Keyboard",
    image: keyboard,
    oldPrice: 1160,
    price: 960,
    discount: 35,
    stars: 4,
    views: 75,
  },
  {
    title: "IPS LCD Gaming Monitor",
    image: computerScreen,
    oldPrice: 400,
    price: 370,
    discount: 30,
    stars: 5,
    views: 99,
  },
  {
    title: "S-Series Comfort Chair ",
    image: chair,
    oldPrice: 400,
    price: 375,
    discount: 25,
    stars: 5,
    views: 99,
  },
];

export const bestSellingProducts: ProductCartProps[] = [
  {
    title: "The north coat",
    image: jacket,
    oldPrice: 360,
    price: 260,
    stars: 5,
    views: 65,
  },
  {
    title: "Gucci duffle bag",
    image: gucciBag,
    oldPrice: 1160,
    price: 960,
    stars: 5,
    views: 65,
  },
  {
    title: "RGB liquid CPU Cooler",
    image: rgpCpuCooler,
    oldPrice: 170,
    price: 160,
    stars: 5,
    views: 65,
  },
  {
    title: "Small BookSelf",
    image: bookSelf,
    price: 360,
    stars: 5,
    views: 65,
  },
];


export const calcTimeLeft = (): CountDownLeft => {
  let timeLeft: CountDownLeft = { days: 0, hrs: 0, mins: 0, secs: 0 };
  const now = new Date();
  const endDate = new Date("2025-01-01T00:00:00");
  const diff = endDate.getTime() - now.getTime();

  timeLeft = {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hrs: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diff / (1000 * 60)) % 60),
    secs: Math.floor((diff / 1000) % 60),
  };

  return timeLeft;
};