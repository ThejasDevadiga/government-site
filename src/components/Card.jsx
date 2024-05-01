import React from "react";

function Card(props) {
  return (
    <>
   
      <div class="max-w-sm flex flex-col  justify-center items-center my-3 p-6 bg-gradient-to-tr from-lightyellow to-bg-bgWhite border border-gray-200 rounded-lg shadow">
        <img src={props.image} className="h-12" alt="" />
        <p >
          <h5 class="mb-2 text-2xl overflow-hidden ">
           {props.title}
          </h5>
        </p>
        <p class="mb-3 text-justify	 lg:text-base md:text-xl  font-normal text-grey dark:text-gray-400">
          {props.desc}
        </p>
        
      </div>
    </>
  );
}

export default Card;
