import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import images from "../data";



function People() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};
    return(
    <div className="mt-4 py-5 w-3/4 overflow-visible">
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index} className="bg-slate-500 flex flex-col  min-h-[32vh] py-6 items-center justify-center rounded-xl text-white font-bold transition-transform duration-300 hover:-translate-y-2 hover:bg-slate-700">
                        <div className="overflow-hidden justify-center flex">
                          <img src={image.src} alt={image.name} className="w-32 h-32 object-cover rounded-full"/>

                        </div>
                        <div className="text-center">
                          <h2>{image.name}</h2>
                        </div>

                </div>
              ))}
        </Slider>
    </div>
    )

}
export default People;