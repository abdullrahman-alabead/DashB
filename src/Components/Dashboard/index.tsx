import { faChartArea, faChartColumn, faChartLine, faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Row } from 'react-bootstrap'
import './index.scss'

let Dashboard = () => {
  return(
    <div className="dashboard d-flex p-4">
      <div className="stats container-fluid ">
        <Row>
          <Col className='stat-box'>
            <FontAwesomeIcon icon={faChartLine} className="stat-icon"/>
            <div className='stat-info'>
              <p className='stat-name'>Today Sale</p>
              <p className='stat-value'>$1234</p>
            </div>
          </Col>
          <Col className='stat-box'>
            <FontAwesomeIcon icon={faChartColumn} className="stat-icon"/>
            <div className='stat-info'>
              <p className='stat-name'>Today Sale</p>
              <p className='stat-value'>$1234</p>
            </div>
          </Col>
          <Col className='stat-box'>
            <FontAwesomeIcon icon={faChartArea} className="stat-icon"/>
            <div className='stat-info'>
              <p className='stat-name'>Today Sale</p>
              <p className='stat-value'>$1234</p>
            </div>
          </Col>
          <Col className='stat-box'>
            <FontAwesomeIcon icon={faMagnifyingGlassChart} className="stat-icon"/>
            <div className='stat-info'>
              <p className='stat-name'>Today Sale</p>
              <p className='stat-value'>$1234</p>
            </div>
          </Col>
        </Row>
      </div>
      
    </div>
  )
}

export default Dashboard