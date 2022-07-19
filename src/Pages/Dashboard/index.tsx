import { faChartArea, faChartColumn, faChartLine, faCross, faMagnifyingGlassChart, faTrash, faTrashAlt, faX, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Col, Row } from 'react-bootstrap'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import Calendar from '../../Components/Calendar'
import Messages from '../../Components/Messages'
import Todo from '../../Components/Todo'
import Footer from '../../Components/Footer'
import data from '../../assets/data'
import './index.scss'

let Dashboard = () => {
  
  return(
    <div className="dashboard p-4 pb-0">
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
      <div className="charts container-fluid">
        <Row>
          <Col className='chart-box'>
            <p className="chart-name">WorldWide Sales</p>
              <BarChart width={550} height={250} data={data} >
                <CartesianGrid strokeDasharray='4 6' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip/>
                <Legend />
                <Bar dataKey='uv' fill="#003b20" />
                <Bar dataKey='pv' fill="#008f11" />
              </BarChart>
          </Col>
          <Col className='chart-box'>
            <p className="chart-name">Salse & Revenue</p>
              <AreaChart width={550} height={250} data={data} >
                <CartesianGrid strokeDasharray='4 6' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type='monotone' dataKey='uv' stackId='1' stroke = '#003b20' fill='#003b20' />
                <Area type='monotone' dataKey='pv' stackId='1' stroke = '#008f11' fill='#008f11' />
                <Area type='monotone' dataKey='amt' stackId='1' stroke = '#00ff41' fill='#00ff41' />

              </AreaChart>
              
          </Col>
        </Row>
      </div>
      <div className="table container-fluid">
        <table>
          <thead>
            <td>Date</td>
            <td>Invoice</td>
            <td>Costumer</td>
            <td>Amount</td>
            <td>Action</td>
          </thead>
          <tbody>
            <tr>
              <td>1/11/1111</td>
              <td>INV/123</td>
              <td>John Doe</td>
              <td>123$</td>
              <td><Button variant='danger' >Details</Button></td>
            </tr>
            <tr>
              <td>1/11/1111</td>
              <td>INV/123</td>
              <td>John Doe</td>
              <td>123$</td>
              <td><Button variant='danger' >Details</Button></td>
            </tr>
            <tr>
              <td>1/11/1111</td>
              <td>INV/123</td>
              <td>John Doe</td>
              <td>123$</td>
              <td><Button variant='danger' >Details</Button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="widgets container-fluid">
        <Row>
        <Messages />
        <Calendar />
        <Todo />
        </Row>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard