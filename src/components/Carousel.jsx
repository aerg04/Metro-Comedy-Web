import React from "react";
import ContainerCarousel from "./ContainerCarousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "../data"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default function Carousel() {
  // Step 1: Set up state for the current image index
  
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
      }
    ]
  };
  return ( 
    
        <div className="mt-4 m-auto w-3/4 sm:w-1/2 md:w-2/5 p-6 z-10 sm:p-8 justify-center">
              <div className="">
                <Slider  {...settings}>
                  {images.map((image, index) => (
                
                    <ContainerCarousel
                        key={index}
                        path={image.src}
                        name={image.name}
                        caption={image.caption}
                        color={image.color}
  
                        />
                 
                  ))}
                  
                </Slider>

              </div>
            
        </div>
  );
};