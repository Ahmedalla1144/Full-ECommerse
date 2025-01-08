import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type product = {
  title: string;
  description: string;
  img: StaticImageData;
};

export default function ViewProduct({ title, description, img }: product) {
  return (
    <div>
      <div>
        <Image src={img} alt="ps5" width={300} height={250} />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <Link href="/">
          <span>Shop Now</span>
        </Link>
      </div>
    </div>
  );
}
