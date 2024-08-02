import React from 'react';
import './Event.css';

const Event = ({ event }) => {
  return (
    <div className="event">
      <span>{event.title}</span>
      {/*<span>{new Date(event.start).toLocaleString()} - {new Date(event.end).toLocaleString()}</span>*/}
    </div>
  );
};

export default Event;
