import React from "react";
import ContainerCarousel from "./ContainerCarousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const images = [
    { 
      src: 'src/assets/yo-Alejandro-Holguin.jpg', 
      name: 'Alejandro Holguin',
      caption: 'Especial On Demand',
      color: 'bg-yellow-400'
    },
    { 
        src: 'src/assets/Juan-Trabucco.jpg', 
        name: 'Juan Carlos Trabucco',
        caption: 'Especial On Demand',
        color: 'bg-red-400'
      },

  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return ( 
    
        <div className="mt-4 m-auto p-8 flex justify-center">
              <div className="max-w-64">
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