import React from "react";
import { Image } from "cloudinary-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/stylesheets/storieslist.css";
const ImageSlider = ({ data }) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    lazyLoad: true,
  };
  return (
    <Slider {...settings}>
      {data.photos.map((item) => (
        <div key={item.id} className="holder">
          <Image
            id="Image"
            cloudName="storageforwork"
            publicId={item.image.url}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
