const flexCenter = "flex items-center";
const styles = {
  flex: {
    center: `${flexCenter} justify-center`,
    between: `${flexCenter} justify-between`,
    around: `${flexCenter} justify-around`,
    evenly: `${flexCenter} justify-evenly`,
    end: `${flexCenter} justify-end`,
    start: `${flexCenter} justify-start`,
    col: `${flexCenter} flex-col justify-center`,
  },
  LangLi: "px-4 py-2 hover:bg-gray-100 cursor-pointer text-black-color",

  footer: {
    footer: 'flex flex-col justify-center items-center bg-black-color text-white-color py-10 px-5',
    title1: "text-2xl font-bold mb-5",
    title2: "text-xl font-semibold mb-5",
    sections: "flex flex-col gap-3 justify-start items-start w-60 h-64",
  },
};

export default styles;
