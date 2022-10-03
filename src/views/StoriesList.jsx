import React from 'react'
import { Image } from 'cloudinary-react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../stylesheets/storieslist.css'
import { Link } from "react-router-dom";
const StoriesList = ({ stories }) => {
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
          {[...stories].map((data) =>
            <div key={data.id}>
             <div className="account">
                  {data.user.username}
              </div>
              <Slider {...settings}>
                 {data.photos.map((item) => (
                 <div key={item.id} className = "holder">
                 <Image id="Image" cloudName="storageforwork" publicId={item.image.url} />
                 </div>
                 ))}
              </Slider>
              <br />
              <Link className= "link" to={"/stories/"+ data.id}> Show</Link>
              </div>
        )}
          </div>

  )
}

export { StoriesList }



