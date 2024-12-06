import React from "react";

const Hero = () => {
  return (
    <div className="h-[80vh] flex justify-center sm:justify-between items-center px-5 sm:px-10 flex-col sm:flex-row bg-black bg-opacity-45">
      <div className="w-full sm:w-[50%]" data-aos="fade-right">
        <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold my-3">
          Haider Ali (React Js Dev)
        </h1>
        <p className="min-w-96:text-sm text-xl">
          A front-end developer builds the user interface of websites and web
          applications using languages like HTML, CSS, and JavaScript. They
          focus on creating interactive, responsive, and visually appealing
          designs. Their work ensures a seamless user experience across various
          devices and browsers.
        </p>
      </div>
      <div data-aos="fade-left" className="hidden justify-center sm:flex w-full sm:w-[50%]">
        <img
          className="w-[39%] md:w-[80%] lg:w-[50%] rounded-full overflow-hidden"
          src="/asserts/images/haider.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
