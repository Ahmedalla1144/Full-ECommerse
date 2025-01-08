export type ProductCartProps = {
  title: string;
  image: StaticImageData;
  oldPrice?: number;
  price: number;
  discount?: number;
  stars: number;
  views: number;
  new?: boolean;
};


export type ProductCartComponentProps = {
  products: ProductCartProps[];
}

export interface CountDownLeft {
  days: number;
  hrs: number;
  mins: number;
  secs: number;
}