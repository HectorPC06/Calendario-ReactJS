import React, { useState } from "react";
import Calendar from "./components/Calendar";
import "./App.css";
import { AddEvent } from "./components/AddEvent";
import { ShowEvents } from "./components/ShowEvents";

export const App = () => {
  const [events, setEvents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  const [openEvents, setOpenEvents] = useState(false);

  const handleAddEvent = () => {
    setCurrentEvent(null);
    setModalOpen(true);
    console.log(events);
  };

  const handleShowEvents = () => {
    setOpenEvents(true);
  };

  const handleSaveEvent = (event) => {
    if (currentEvent) {
      setEvents(events.map((e) => (e === currentEvent ? event : e)));
    } else {
      setEvents([...events, event]);
    }
    setModalOpen(false);
  };

  return (
    <div className="App">
      
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          onClick={handleAddEvent}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          <svg
            className="w-3 h-3 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
            />
          </svg>
          Agregar Evento
        </button>
        <button
          type="button"
          onClick={handleShowEvents}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          <svg
            className="w-3 h-3 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
          </svg>
          Ver Eventos
        </button>
      </div>
      <Calendar events={events} />
      <AddEvent
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        event={currentEvent}
        onSave={handleSaveEvent}
      />
      <ShowEvents
        isOpen={openEvents}
        onRequestClose={() => setOpenEvents(false)}
        events={events}
      />
    </div>
  );
};
