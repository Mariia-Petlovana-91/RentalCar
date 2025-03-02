import css from './OrderForm.module.css';

import Calendar from '../Calendar/Calendar';

const OrderForm = ({ array }) => {
  const handleDateSelect = (date) => {
    console.log('Вибрана дата:', date);
  };
  return (
    <>
      <Calendar onDateSelect={handleDateSelect} />
    </>
  );
};

export default OrderForm;
