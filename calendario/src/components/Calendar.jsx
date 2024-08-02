import React, { useState, useEffect } from 'react';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, format, eachDayOfInterval, isSameDay } from 'date-fns';
import './Calendar.css';
import Event from './Event';

const Calendar = ({ events }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const startMonth = startOfMonth(currentMonth);
    const endMonth = endOfMonth(currentMonth);
    const startDate = startOfWeek(startMonth);
    const endDate = endOfWeek(endMonth);
    const days = [];
    let day = startDate;

    while (day <= endDate) {
      days.push(day);
      day = addDays(day, 1);
    }
    setDates(days);
  }, [currentMonth]);

  const renderHeader = () => {
    const dateFormat = 'MMMM yyyy';
    return (
      <div className="header row flex-middle">
        <div className="col col-start" onClick={() => setCurrentMonth(addDays(currentMonth, -30))}>
          <div className="icon">Anterior</div>
        </div>
        <div className="col col-center">
          <span>{format(currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={() => setCurrentMonth(addDays(currentMonth, 30))}>
          <div className="icon">Siguiente</div>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    return (
      <div className="days row">
        {daysOfWeek.map((day, index) => (
          <div className="col col-center" key={index}>
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const currentDate = new Date();
    
    return (
      <div className="body">
        {dates.map((date, index) => (
          <div className={`col cell ${isSameDay(date, currentDate) ? 'current-date' : ''}`} key={index}>
            <div className="cell-header">
              {format(date, 'd')}
            </div>
            {events.filter(event =>
              eachDayOfInterval({ start: new Date(event.start), end: new Date(event.end) }).some(d => isSameDay(d, date))
            ).map((event, idx) => (
              <Event key={idx} event={event} />
            ))}
          </div>
        ) )}
      </div>
    );
  };

  const goToDate = (date) => {
    setCurrentMonth(date); // Cambiar el mes mostrado al mes de la fecha seleccionada
    setSelectedDate(date); // Establecer la fecha seleccionada como la fecha actual
  };

  const handleInputChange = (e) => {
    const dateString = e.target.value;
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      goToDate(date); // Cambiar al mes de la fecha ingresada
    }
  };

  return (
    <>
        <div>
            <input type="date" value={format(selectedDate, 'yyyy-MM-dd')} onChange={handleInputChange} />
        </div>
        <div className="calendar">
            {renderHeader()}
            <div>
              {renderDays()}
              {renderCells()}
            </div>
        </div>
    </>
    
  );
};

export default Calendar;
