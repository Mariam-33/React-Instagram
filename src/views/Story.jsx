import React from 'react'
import { Image } from 'cloudinary-react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/stylesheets/storieslist.css'
const StoryShow = ({ story }) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    lazyLoad: true
  };
  return (
         <div >
          <h4 className= "title">Stories</h4>
             <div className="account">
                  {story.user.username}
              </div>
              <Slider {...settings}>
                 {story.photos.map((item) => (
                 <div key={item.id} className = "holder">
                 <Image id="Image" cloudName="storageforwork" publicId={item.image.url} />
                 </div>
                 ))}
              </Slider>
              <br/>
              </div>
  )
}

export { StoryShow }

