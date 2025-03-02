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
  isBefore,
} from 'date-fns';

import clsx from 'clsx';
import css from './Calendar.module.css';

import {
  MdOutlineChevronLeft,
  MdOutlineChevronRight,
} from 'react-icons/md';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
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
        <button
          type="button"
          onClick={nextMonth}
          className={css.calendarBtn}
        >
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
            className={clsx(
              css.calendarDay,
              isToday(day) && css.calendarToday,
              isSameMonth(day, currentMonth)
                ? css.calendarCurrentMonth
                : css.calendarOtherMonth,
              css.calendarHover,
              isBefore(day, today) && css.calendarDisabled,
            )}
          >
            {format(day, 'd')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
