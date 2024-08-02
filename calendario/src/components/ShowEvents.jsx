import React from "react";
import Modal from "react-modal";

export const ShowEvents = ({ isOpen, onRequestClose, events }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2 className="text-3xl mb-3 font-bold dark:text-white">
        Evento Agregados
      </h2>
      <form>
        <div className="modal">
          <div className="modal-content">
            <div className="modal-body">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Asunto evento
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Inicio evento
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Fin evento
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {events.map((element, index) => (
                      <tr
                        key={index}
                        className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 ${
                          index % 2 === 1 ? "bg-gray-100" : ""
                        }`}
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {element.title}
                        </th>
                        <td className="px-6 py-4">
                          {new Date(element.start).toLocaleString()}
                        </td>
                        <td className="px-6 py-4">
                          {new Date(element.end).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="button-group">
          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={onRequestClose}
          >
            Cerrar ventana
          </button>
        </div>
      </form>
    </Modal>
  );
};
