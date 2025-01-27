import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  img: StaticImageData;
  classes_div1?: string;
  classes_img_div?: string;
  classes_div3?: string;
  img_classes?: string;
  blurDiv?: boolean;
};

export default function ViewProduct({
  title,
  description,
  img,
  classes_div1,
  classes_img_div,
  classes_div3,
  img_classes,
  blurDiv,
}: Props) {
  return (
    <div className={`relative ${classes_div1} bg-[#0D0D0D]`}>
      {blurDiv && (
        <div className="flex items-center justify-center w-full h-full px-16 blur-3xl absolute">
          <div className="flex items-center justify-center w-[90%] h-[90%] p-4 rounded-full bg-[#D9D9D9]/30" />
        </div>
      )}
      <div className={`${classes_img_div} relative`}>
        <Image
          className={img_classes}
          src={img}
          alt="ps5"
          width={600}
          height={250}
        />
      </div>
      <div
        className={`${classes_div3} flex flex-col gap-1 md:gap-3 text-[#FFFFFF] px-2 py-2`}
      >
        <h4 className="font-semibold text-xl md:text-2xl">{title}</h4>
        <p className="md:text-sm text-xs leading-6 tracking-wide">{description}</p>
        <Link className="border-b w-max" href="/">
          Shop Now
        </Link>
      </div>
    </div>
  );
}
