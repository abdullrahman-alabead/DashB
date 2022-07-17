import { Col, Row } from 'react-bootstrap'
import Calendar from '../Calendar'
import Messages from '../Messages'
import Todo from '../Todo'
import Testimonials from '../Testimonials/Testimonials'
import GoogleMap from '../GoogleMap/GoogleMap'
import './index.scss'
import Footer from '../Footer'

let Widgets = () => {
  return (
    <div className='container-fluid p-4 pb-0'>
      <div className='widgets container-fluid'>
      <Row className='widgets-row'>
        <Messages />
        <Calendar />
        <Todo />
      </Row>
      <Row className='widgets-row'>
      <Testimonials />
      <GoogleMap />
      </Row>
      </div>
    <Footer />
    </div>
  )
}

export default Widgets