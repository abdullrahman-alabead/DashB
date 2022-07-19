import { Col, Row } from 'react-bootstrap'
import AreaCH from '../../Components/Charts/AreaCH/AreaCH'
import BarCH from '../../Components/Charts/BarCH/BarCH'
import LineCH from '../../Components/Charts/LineChart/LineCH'
import PieCH from '../../Components/Charts/PieCH/PieCH'
import RadarCH from '../../Components/Charts/RadarCH/RadarCH'
import './Charts.scss'

let Charts = () => {
  return (
    <div className="charts container-fluid p-4 pb-0">
      <Row className='row'>
        <Col>
        <LineCH />
        </Col>
        <Col>
        <BarCH />
        </Col>
      </Row>
      <Row className='row'>
      <Col>
      <AreaCH />
      </Col>
      <Col>
      <PieCH />
      </Col>
      </Row>
      <Row className='row'>
        <Col xs={6} >
        <RadarCH />
        </Col>
      </Row>
    </div>
  )
}

export default Charts