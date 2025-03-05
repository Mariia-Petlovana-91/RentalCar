import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import toast from 'react-hot-toast';
import css from './OrderForm.module.css';
import clsx from 'clsx';
import { orderValidationSchema } from '../../../utils/validationShema';
import Calendar from '../Calendar/Calendar';

const OrderForm = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const onSubmit = (values, { resetForm }) => {
    toast.success('Your booking has been submitted successfully!');
    resetForm();
    setSelectedDate(null);
  };

  const handleDateChange = (date, setFieldValue) => {
    setSelectedDate(date);
    setFieldValue('date', date);
    setShowCalendar(false);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        date: null,
        comment: '',
      }}
      validationSchema={orderValidationSchema}
      onSubmit={onSubmit}
    >
      {({ touched, errors, setFieldValue }) => (
        <Form className={css.forContainer}>
          <div className={css.formDescriptContainer}>
            <h3 className={clsx('thirdTitle', css.formTitle)}>
              Book your car now
            </h3>
            <p className={css.formText}>
              Stay connected! We are always ready to help you.
            </p>
          </div>

          <div className={css.formGroup}>
            <label className={clsx(css.formLabel, css.formText)}>
              Name
              {touched.name && errors.name ? <span>*</span> : ''}
            </label>
            <Field
              type="text"
              name="name"
              className={clsx(css.inputField, css.formText)}
            />
          </div>
          <ErrorMessage
            name="name"
            component="p"
            className="errorText"
          />

          <div className={css.formGroup}>
            <label className={clsx(css.formLabel, css.formText)}>
              Email
              {touched.email && errors.email ? <span>*</span> : ''}
            </label>
            <Field
              type="email"
              name="email"
              className={clsx(css.inputField, css.formText)}
            />
          </div>
          <ErrorMessage
            name="email"
            component="p"
            className="errorText"
          />

          <div className={clsx(css.formGroup, css.formGroupData)}>
            <label
              className={clsx(
                css.formLabel,
                css.formText,
                css.calendarLabel,
              )}
            >
              Booking date
            </label>
            <button
              type="button"
              className={clsx(css.calendarToggleBtn, css.formText)}
              onClick={() => setShowCalendar(!showCalendar)}
            >
              {selectedDate ? selectedDate.toLocaleDateString() : ''}
            </button>
            {showCalendar && (
              <Calendar
                onDateSelect={(date) =>
                  handleDateChange(date, setFieldValue)
                }
              />
            )}
          </div>

          <div className={clsx(css.formGroup, css.formGroupComment)}>
            <label className={clsx(css.formLabel, css.formText)}>
              Comment
            </label>
            <Field
              as="textarea"
              name="comment"
              className={clsx(css.textArea, css.formText)}
            />
          </div>
          <ErrorMessage
            name="comment"
            component="div"
            className="errorText"
          />

          <button
            type="submit"
            className={clsx('btn', 'primaryBtn', css.orderButton)}
          >
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default OrderForm;
