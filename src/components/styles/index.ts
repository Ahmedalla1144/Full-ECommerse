const setFlex = (
  justify = "center",
  items = "center",
  column?: string,
  gap?: number
) => {
  if (gap && column) {
    return `flex justify-${justify} items-${items} flex-${column} gap-${gap}`;
  }
  if (column) {
    return `flex justify-${justify} items-${items} flex-${column}`;
  }
  return `flex justify-${justify} items-${items}`;
};

const styles = {
  flex: {
    center: setFlex(),
    between: setFlex("between"),
    around: setFlex("around"),
    evenly: setFlex("evenly"),
    end: setFlex("end"),
    start: setFlex("start"),
    col: setFlex(undefined, undefined, "col"),
    centerColGap: (gap: number) => {
      return setFlex(undefined, undefined, "col", gap);
    },
    setAll: (justify?: string, items?: string, col?: string, gap?: number) => {
      return setFlex(justify, items, col, gap);
    },
  },
  LangLi: "px-4 py-2 hover:bg-gray-100 cursor-pointer text-black",

  footer: {
    footerSection: `${setFlex(
      undefined,
      undefined,
      "col"
    )} bg-black text-white py-10 px-5`,
    title1: "text-2xl font-bold mb-5",
    title2: "text-xl font-semibold mb-5",
    sections: `${setFlex(
      "start",
      "start",
      "col",
      3
    )} w-60 xs:h-64 border-b border-gray-800 sm:border-none pb-4`,
    link: "hover:text-gray-400 transition-all w-fit",
  },
  timeCounter: "flex flex-col justify-center items-center w-[65px] h-[65px] md:w-[100px] md:h-[100px] bg-white rounded-full text-black font-semibold"
};

export default styles;
