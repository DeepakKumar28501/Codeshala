import React from "react";
import { LuPhone } from "react-icons/lu";
function Footer() {
  return (
    <footer className="bg-primary w-full h-[50vh] pt-4">
      <div className="flex flex-row  justify-between align-top">
        <div className=" w-1/4 ms-6">
          <h1 className="text-white font-clash text-4xl  font-semibold  ">
            CODEXDESK
          </h1>
          <hr className="h-[4px]  bg-orange border-0 w-[10vh] font-[500] dark:bg-orange" />
        </div>
        <div className=" w-1/4">
          <h1 className="text-2xl font-clash text-white hover:text-orange hover:duration-300">Useful Links </h1>
          <hr className="h-[4px]  bg-orange border-0 w-[10vh] font-[500]   dark:bg-orange" />
        </div>
        <div className=" w-1/4">
          <h1 className="text-2xl font-clash text-white hover:text-orange hover:duration-300">Contact us</h1>
          <hr className="h-[4px]  bg-orange border-0 w-[10vh] font-[500]  dark:bg-orange" />
          <div>
          <LuPhone className="text-white"/><h4 className="text-white">+91 6397367278</h4>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
