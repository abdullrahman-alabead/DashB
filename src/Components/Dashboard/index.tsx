import { faChartArea, faChartColumn, faChartLine, faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Col, Row } from 'react-bootstrap'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import './index.scss'

let Dashboard = () => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];  return(
    <div className="dashboard p-4">
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
            <div className="chart">
              <BarChart width={550} height={250} data={data} >
                <CartesianGrid strokeDasharray='4 6' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip/>
                <Legend />
                <Bar dataKey='uv' fill="#003b20" />
                <Bar dataKey='pv' fill="#008f11" />
              </BarChart>
            </div>
          </Col>
          <Col className='chart-box'>
            <p className="chart-name">Salse & Revenue</p>
            <div className="chart">
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
              
            </div>
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
    </div>
  )
}

export default Dashboard