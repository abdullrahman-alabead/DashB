import { Tooltip } from 'react-bootstrap'
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts'
import data from '../../../assets/data'
import './BarCH.scss'

let BarCH = () => {
  return(
    <div className="chart bar-chart">
      <p className="chart-name">Bar Chart</p>
      <BarChart width={550} height={250} data={data}>
        <CartesianGrid strokeDasharray='4 6' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='uv' fill='#005f11' />
        <Bar dataKey='pv' fill='#23ad33' />
      </BarChart>
    </div>
  )
}


export default BarCH