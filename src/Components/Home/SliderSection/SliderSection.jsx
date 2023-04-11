import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SliderSection = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="w-full h-[220px] flex justify-center bg-red-300">
      <div className="flex flex-col w-[50%] bg-red-500 ">
        <div className="flex justify-between bg-green-600 w-full px-2 py-3">
          <span className="font-bold text-sm">Recent Kicks</span>
          <span className="text-sm">
            <Link>View All</Link>
          </span>
        </div>
        {/* Slider */}
        <div className="flex justify-evenly bg-yellow-600 h-full px-2 py-3">
          <Carousel
            responsive={responsive}
            containerClass={`w-full`}
            swipeable={false}
            draggable={false}
            showDots={true}
          >
            {[12, 3, 334, 434, 5434, 453].map(() => (
              <div className="h-full bg-teal-800 rounded-3xl">
                <div className="w-full h-full bg-teal-800 rounded-3xl">
                  <img
                    src="./images/events.jpg"
                    alt=""
                    className="w-full h-full rounded-3xl"
                  />

                  <img
                    src="./images/events.jpg"
                    alt=""
                    className="w-10 h-10 relative bottom-12 left-2 rounded-full"
                  />
                </div>
                <span className="w-[20%]"></span>
                <span className="w-[20%]"></span>
                <span className="w-[20%]"></span>
              </div>
            ))}
          </Carousel>
          ;
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
