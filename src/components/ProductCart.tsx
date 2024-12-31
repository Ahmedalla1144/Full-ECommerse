import Image from "next/image";
import React from "react";
import { BiHeart } from "react-icons/bi";
import { BsEye, BsStarFill } from "react-icons/bs";
import { ProductCartComponentProps } from "../../type";

export default function ProductCart({ products }: ProductCartComponentProps) {
  return products.map((product, index) => {
    return (
      <div key={index} className="py-8 flex-shrink-0">
        {/* up div */}
        <div className="bg-[#F5F5F5] dark:bg-gray-950 flex px-5 py-3 justify-center rounded relative">
          <p
            className={`px-3 py-1 bg-red-500 w-max h-max rounded text-sm absolute left-2 ${
              product.discount ? "" : "hidden"
            }`}
          >
            -{product.discount}%
          </p>
          <Image
            width={190}
            height={180}
            src={product.image}
            alt="play Station Arm"
            className="w-48 h-60 object-contain hover:scale-125 transition-all duration-300 ease-in-out"
          />
          <div className="flex flex-col gap-1">
            <BiHeart className="text-xl" />
            <BsEye className="text-xl" />
          </div>
        </div>
        {/* down dev */}
        <div className="flex flex-col gap-2 pt-3">
          <p>{product.title}</p>
          <p className="text-red-500">
            ${product.price}{" "}
            {product.oldPrice && (
              <span className="text-gray-400 line-through pl-2">
                ${product.oldPrice}
              </span>
            )}
          </p>
          <div className="flex justify-start items-center gap-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) =>
                index < product.stars ? (
                  <BsStarFill key={index} className="text-[#FFAD33]" />
                ) : (
                  <BsStarFill key={index} className="text-gray-500" />
                )
              )}

              {/* <BsStarFill className="text-[#FFAD33]" /> */}
            </div>
            <p>({product.views})</p>
          </div>
        </div>
      </div>
    );
  });
}
