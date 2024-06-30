import React from 'react';
import { motion } from 'framer-motion';

const CustomCalendar = () => {
  // Datos de ejemplo
  const data = [
    { day: 'Lunes', tasks: [9, 10, 11, 14, 15, 16, 17, 18, 19] },
    { day: 'Martes', tasks: [9, 11, 12, 14, 15, 18, 19, 20] },
    { day: 'Miércoles', tasks: [10, 11, 12, 13, 14, 15, 19, 20, 21] },
    { day: 'Jueves', tasks: [9, 10, 11, 13, 14, 15, 16, 17, 18, 19] },
    { day: 'Viernes', tasks: [9, 10, 12, 14, 15, 16, 18, 19, 20, 21] },
    { day: 'Sábado', tasks: [9, 10, 12, 14, 15, 16, 18, 19, 20] },
    { day: 'Domingo', tasks: [] },
  ];

  // Generar días de la semana
  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  // Función para verificar si hay una tarea en una hora específica
  const hasTask = (day, hour) => {
    const item = data.find(item => item.day === day);
    return item && item.tasks.includes(hour);
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Encabezado */}
      <div className="px-4 py-2 bg-gray-800 text-white font-semibold text-lg">Mis horas de programación</div>
      {/* Grid de días */}
      <div className="grid grid-cols-7 border-t border-l border-gray-200">
        {/* Filas de días */}
        {daysOfWeek.map(day => (
          <div key={day} className="border-r border-b border-gray-200">
            <div className="py-1 h-8 bg-gray-100 font-semibold text-center">{day}</div>
            {/* Mostrar las tareas de cada día */}
            <div className="flex flex-wrap justify-center gap-1 p-1">
              {[...Array(24).keys()].map(hour => (
                <div
                  key={`${day}-${hour}`}
                  className={`w-5 h-5 ${hasTask(day, hour) ? 'bg-orange-400' : 'bg-gray-200'}`}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CustomCalendar;
