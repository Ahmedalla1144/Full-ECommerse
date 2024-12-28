import { metadata } from "@/app/layout";
import LangNav from "./navbars/LangNav";
import Navbar from "./navbars/Navbar";

export default function Header() {
  const appName = metadata.applicationName || "";
  return (
    <>
      <LangNav />
      <Navbar appName={appName}/>
    </>
  );
}
