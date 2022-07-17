import { Col, Row } from 'react-bootstrap'
import Calendar from '../../Components/Calendar'
import Messages from '../../Components/Messages'
import Todo from '../../Components/Todo'
import Testimonials from '../../Components/Testimonials/Testimonials'
import GoogleMap from '../../Components/GoogleMap/GoogleMap'
import './index.scss'
import Footer from '../../Components/Footer'

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