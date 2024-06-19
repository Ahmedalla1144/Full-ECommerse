const setFlex = (justify = "center", items = "center", column) => {
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
  },
  LangLi: "px-4 py-2 hover:bg-gray-100 cursor-pointer text-black-color",

  footer: {
    footer: `${setFlex(
      undefined,
      undefined,
      "col"
    )} bg-black-color text-white-color py-10 px-5`,
    title1: "text-2xl font-bold mb-5",
    title2: "text-xl font-semibold mb-5",
    sections: `${setFlex(
      "start",
      "start",
      "col"
    )} gap-3 w-60 h-64 border-b border-gray-800`,
  },
};

export default styles;
