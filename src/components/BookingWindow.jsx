import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const BookingWindow = () => {
    const data = useLocation();
    const item = data.state.item;

    let date = new Date();
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dateArray = [];
    for (let i = 0; i < 7; i++) {
        let newDate = new Date();
        newDate.setDate(date.getDate() + i);
        dateArray.push(newDate.getDate() + " " + weekDays[newDate.getDay()]);
    }

    const numRows = 11;
    const numSeatsPerRow = 15;
    const generateSeats = () =>
        Array.from({ length: numRows }, () =>
            Array.from({ length: numSeatsPerRow }, () => ({ status: 'available' }))
        );

    const [seats, setSeats] = useState(generateSeats());
    const [selectedSeats, setSelectedSeats] = useState([{ row: '', seat: '' }]);
    const [bookDate, setBookDate] = useState('');

    console.log(selectedSeats);

    function seatRemover(selectedSeats, rowIndex, seatIndex) {
        const newIndex = selectedSeats.findIndex(seat => seat.row === rowLabels[rowIndex] && seat.seat === seatIndex + 1); 
        selectedSeats.splice(newIndex, 1);
    }

    function handleSeatClick(rowIndex, seatIndex) {
        const newSeats = [...seats];
        const seat = newSeats[rowIndex][seatIndex];

        if (seat.status === 'available') {
            seat.status = 'selected';
            setSelectedSeats([...selectedSeats, { row: rowLabels[rowIndex], seat: seatIndex + 1 ,  status: seat.status }]);
        } else if (seat.status === 'selected') {
            seat.status = 'available';
            seatRemover(selectedSeats, rowIndex, seatIndex);
        }

        setSeats(newSeats);
    }

    const rowLabels = Array.from({ length: numRows }, (_, i) => String.fromCharCode(65 + i));
    const columnLabels = Array.from({ length: numSeatsPerRow }, (_, i) => i + 1);

    return (
        <div>
            <div className="booking-panel-bg">
                <img src={item.bg} alt="" />
            </div>
            <div className="booking-panel">
                <div className="booking-availability-panel">
                    <div className="booking-panel-header">
                        <div className="booking-availability">
                            <h2 className="booking-movie-title">{item.title}</h2>
                            <p className="booking-movie-release-date">
                                released on {item.releasedate}
                            </p>
                        </div>
                        <div className="booking-panel-exit">
                            <Link to='/'><button className="booking-panel-exit-btn">X</button></Link>
                        </div>
                    </div>
                    <div className="booking-panel-main">
                        <div className="booking-panel-left">
                            <div className="booking-date">
                                {dateArray.map((date, index) => (
                                    <div key={index} className='date-item'>
                                        <p className="booking-panel-dates">{date}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="booking-time">
                                <div className="time-item">
                                    <p>10:00 AM</p>
                                </div>
                                <div className="time-item">
                                    <p>1:00 PM</p>
                                </div>
                                <div className="time-item">
                                    <p>4:00 PM</p>
                                </div>
                                <div className="time-item">
                                    <p>7:00 PM</p>
                                </div>
                                <div className="time-item">
                                    <p>10:00 PM</p>
                                </div>
                            </div>
                            <div className="booking-details">
                                <div className="booking-details-ticket">
                                    <p>Seats: <span>{selectedSeats.map(seat => seat.row + seat.seat).join("  ")}</span></p>
                                </div>
                                <div className="booking-details-cost">
                                    <p>Price: <span>{selectedSeats.length * 145 - 145}Rs</span></p>
                                </div>
                                    <button className="book-ticket-btn">Book Ticket</button>
                            </div>
                        </div>
                        <div className="ticket-booking-panel">
                            <div className="screen">
                                <p>Screen</p>
                            </div>

                            <div className="seat-selection">
                                <div className="seat-columns">
                                    {columnLabels.map((label, index) => (
                                        <div key={index} className="seat-column-label">{label}</div>
                                    ))}
                                </div>
                                <div className="seat-rows">
                                    {seats.map((row, rowIndex) => (
                                        <div key={rowIndex} className="seat-row">
                                            <div className="seat-row-label">{rowLabels[rowIndex]}</div>
                                            {row.map((seat, seatIndex) => (
                                                <div
                                                    key={seatIndex}
                                                    className={`seat ${seat.status}`}
                                                    onClick={() => {
                                                        handleSeatClick(rowIndex, seatIndex);
                                                        
                                                    }}></div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="seat-legend">
                                <div className="legend-item available">Available</div>
                                <div className="legend-item booked">Booked</div>
                                <div className="legend-item selected">Selected</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingWindow;
