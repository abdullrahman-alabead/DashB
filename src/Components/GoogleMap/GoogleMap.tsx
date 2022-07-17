import { Col } from 'react-bootstrap'
import './GoogleMap.scss'

let GoogleMap = () => {
  return   (
    <Col className='widget googleMap' >
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26613.02475209619!2d36.27673159765626!3d33.5110519266867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1658068409331!5m2!1sen!2s" width="550" height="324" style={{border:0, borderRadius: '.5rem'}} loading="lazy"></iframe>
    </Col>


  )
}

export default GoogleMap