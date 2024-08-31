import React from 'react'
import Slider from 'react-slick';
import RawData from '../RawData_Movies.json'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Content = () => {

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5.75,
        speed: 500

    }

  return (
    <div className='content-sec'>
      <section>
        <div className="trending-sec">
        <h1>TRENDING NOW</h1>
        <Slider {...settings}>
            {RawData.map((item) => {
                return (
                <div className='trend-caro' key={item.id}>
                    <img className='content-caro-img' src={item.image} alt={item.title} />
                        <button className="trending-book-btn">BOOK NOW</button>
                </div>
                )
            })}
        </Slider>
        </div>
      </section>  
      <section>
        <div className="whats-new-sec">
        <h1>WHAT'S NEW</h1>   
        </div>
      </section>
      <section>
        <div className="recommended-sec">
        <h1>RECOMMENDED FOR YOU</h1>
        </div>
      </section>
    </div>
  )
}

export default Content
