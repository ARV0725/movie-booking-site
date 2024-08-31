import React from 'react'
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import Slider from 'react-slick';
import RawData from '../RawData_Movies.json'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link, useNavigate } from 'react-router-dom';

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "transparent", height: '50px', width: '50px',padding: '12.5px', margin: '50px', zIndex: '1' }}
            onClick={onClick}
        />
    );
}

const Hero = () => {

    const settings = {
        customPaging: function (RawData) {
            return (
                <div style={{
                    width: '10px',
                    height: '2px',
                    backgroundColor: 'lightblue',
                    boxShadow: '0px 0px 10px 0px lightblue',
                }}
                ></div>
            )
        },
        dots: true,
        dotsClass: 'slick-dots',
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        appendDots: dots => (
            <div
              style={{
                position: "absolute",
                bottom: "0px",
                background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,.3) 60%, transparent 100%)",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
        nextArrow: <Arrow />,
        prevArrow: <Arrow />
    }

    const navigate = useNavigate();

    return (
        <>
            <section className='sec-nav'>
                <div className="nav-main">
                    <div className="nav-logo">
                        <h2>SHOW-TIME</h2>
                    </div>
                    <div className="nav-btns">
                        <div className="nav-search"><BsSearch className='nav-search-icon' /></div>
                        <div className="nav-options">
                            <button>HOME</button>
                            <button>TRENDING NOW</button>
                            <button>YOUR BOOKINGS</button>
                        </div>
                        <div className="nav-acc-sett"><CgProfile className='nav-acc-icon' /></div>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <Slider {...settings}>
                        {RawData.map((item, index) => {
                            return (
                                <div className='caro-main' key={index}>
                                    <div className="sec-1-bg">
                                        <img src={item.bg} alt="bg" className='caro-bg' />
                                    </div>
                                    <div className="caro-content">
                                        <h2 className='caro-title'>{item.title}</h2>
                                        <p className='caro-dir-name'>by <span>{item.director}</span></p>
                                        <p className='caro-genre'>{item.genre}</p>
                                        <p className='caro-date'>{item.releasedate}</p>
                                        <p className='caro-dura'>{item.duration} min</p>
                                        <p className='caro-lang'>{item.language}</p>
                                        <p className='caro-cinema'>Released on <span>{item.cinema}</span></p>
                                        <div className='caro-btns'>
                                            <button>WATCH TRAILER</button>
                                            <button onClick={() => {navigate('/booking', {state: {item}})}}>BOOK TICKETS</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Hero
