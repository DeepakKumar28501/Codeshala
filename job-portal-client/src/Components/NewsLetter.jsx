import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";
const NewsLetter = () => {
  return (
    <div>
      <div className="mb-14">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText /> Email me for jobs
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          aliquam autem tempore cum invento
        </p>
        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            className="border w-full block py-2 pl-3 focus:outline-none"
            placeholder="name@mail.com"
          />
          <input
            type="submit"
            value={"Subscribe"}
            className="border w-full block py-2 pl-3 focus:outline-none bg-orange text-white  rounded-md cursor-pointer font-semibold"
          />
        </div>
      </div>

      {/* second part  */}
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket /> Get Notice Faster
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          aliquam autem tempore cum invento
        </p>
        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            className="border w-full block py-2 pl-3 focus:outline-none"
            placeholder="name@mail.com"
          />
          <input
            type="submit"
            value={"upload your resume"}
            className="border w-full block py-2 pl-3 focus:outline-none bg-orange text-white  rounded-md cursor-pointer font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
