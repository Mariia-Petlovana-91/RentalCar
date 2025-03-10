import { useState } from 'react';
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
  isBefore,
} from 'date-fns';

import clsx from 'clsx';
import css from './Calendar.module.css';

import {
  MdOutlineChevronLeft,
  MdOutlineChevronRight,
} from 'react-icons/md';

const Calendar = ({ onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const today = new Date();

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

  const handleDateClick = (date) => {
    if (!isBefore(date, today)) {
      setSelectedDate(date);
      onDateSelect(date);
    }
  };

  return (
    <div className={css.calendarContainer}>
      <div className={css.calendarHeader}>
        <button
          type="button"
          onClick={prevMonth}
          className={css.calendarBtn}
        >
          <MdOutlineChevronLeft className={css.calendarIcon} />
        </button>
        <h2 className={css.calendarTitle}>
          {format(currentMonth, 'MMMM yyyy')}
        </h2>
        <button type="button" onClick={nextMonth} className="flex">
          <MdOutlineChevronRight className={css.calendarIcon} />
        </button>
      </div>
      <div className={css.calendarBody}>
        <ul className={clsx(css.calendarGrid, css.calendarDayHeader)}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
            (day) => (
              <li
                key={day}
                className={clsx(
                  'flex',
                  css.dayText,
                  css.calendarDayNameHeader,
                )}
              >
                {day}
              </li>
            ),
          )}
        </ul>
        <ul
          className={clsx(css.calendarGrid, css.calendarDayContainer)}
        >
          {renderDays().map((day, index) => (
            <li
              key={index}
              className={clsx(
                'flex',
                css.dayText,
                css.calendarDay,
                isToday(day) && css.calendarToday,
                isBefore(day, today) && css.calendarDisabled,
                selectedDate &&
                  format(selectedDate, 'yyyy-MM-dd') ===
                    format(day, 'yyyy-MM-dd') &&
                  css.calendarSelected,
              )}
              onClick={() => handleDateClick(day)}
            >
              {format(day, 'd')}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calendar;
