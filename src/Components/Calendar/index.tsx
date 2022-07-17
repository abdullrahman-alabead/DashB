import React from 'react';
import { Col } from 'react-bootstrap';
import Cal from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './index.scss'


let Calendar = () => {
let [date, setDate] = React.useState(new Date())

return(
  <Col className='widget calendar'>
            <p className='widget-name'>Calendar</p>
            <div className='calendar-container'>
              <Cal onChange={setDate} value={date} />
            </div>
          </Col>
)
}

export default Calendar