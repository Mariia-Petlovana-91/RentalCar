import css from './Calendar.module.css';

import React, { useState } from 'react';
import {
  addMonths,
  subMonths,
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isToday,
} from 'date-fns';

import {
  MdOutlineChevronLeft,
  MdOutlineChevronRight,
} from 'react-icons/md';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const renderDays = () => {
    const days = [];
    const startDate = startOfWeek(startOfMonth(currentMonth));
    const endDate = endOfWeek(endOfMonth(currentMonth));

    let day = startDate;
    while (day <= endDate) {
      days.push(day);
      day = addDays(day, 1);
    }

    return days;
  };

  return (
    <div className={css.calendarContainer}>
      <div className={css.calendarHeader}>
        <button onClick={prevMonth} className={css.calendarBtn}>
          <MdOutlineChevronLeft className={css.calendarIcon} />
        </button>
        <h2 className="calendar-title">
          {format(currentMonth, 'MMMM yyyy')}
        </h2>
        <button onClick={nextMonth} className={css.calendarBtn}>
          <MdOutlineChevronRight className={css.calendarIcon} />
        </button>
      </div>
      <div className={css.calendarGrid}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
          (day) => (
            <div key={day} className={css.calendarDayHeader}>
              {day}
            </div>
          ),
        )}
        {renderDays().map((day, index) => (
          <div
            key={index}
            className={`css.calendar-day ${
              isToday(day) ? 'calendar-today' : ''
            } ${
              isSameMonth(day, currentMonth)
                ? 'calendar-current-month'
                : 'calendar-other-month'
            }`}
          >
            {format(day, 'd')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
