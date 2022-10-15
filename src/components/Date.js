import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import moment from 'moment';

function DatePicker() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar 
      onChange={onChange} 
      value={value}
      locale="en-EN"
      />
    </div>
  );
}

export default DatePicker;