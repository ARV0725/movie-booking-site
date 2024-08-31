import React from 'react'
import { useLocation } from 'react-router-dom'

const BookingWindow = () => {
  
    const data = useLocation();
    let date = new Date();
    const item = data.state.item;
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = weekDays[date.getDay()];
    const dateArray = [];
    for (let i = 0; i < 7; i++) {
        let newDate = new Date();
        newDate.setDate(date.getDate() + i);
        dateArray.push(newDate.getDate(), weekDays[newDate.getDay()]);
    }
    return (
    <div>
        <div className="booking-panel">
            <div className="booking-availability-panel">
                <div className="booking-availability">
                    <h2>{item.title}</h2>
                    <p>released on {item.releasedate}</p>
                </div>
                <div className="booking-panel-main">
                    <div className="booking-date">
                        {dateArray.map((item, index) => {
                            return (
                                <div key={index} className="date-item">
                                    <p>{item}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="booking-time">

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookingWindow
