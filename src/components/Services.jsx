import React from "react";
import Servicecard from "./Servicecard";
import { service } from "../constants";
function Services() {
  return (
    <>
      <div className="px-3 md:px-20 lg:px-32 mt-[6rem] ">
        <h1 className="text-4xl font-semibold text-green text-center py-5 overflow-hidden">ಧ್ಯೇಯೋದ್ದೇಶಗಳು</h1>
      </div>
      <div className=" md:px-20 lg:px-32 px-3 grid md:grid-cols-2 lg:grid-cols-3 place-items-center justify-center text-center items-center  overflow-hidden gap-5">
        {service.map((item) => {
          return (
            <Servicecard  img={item.img} desc={item.desc} />
          );
        })}
      </div>
    </>
  );
}

export default Services;
