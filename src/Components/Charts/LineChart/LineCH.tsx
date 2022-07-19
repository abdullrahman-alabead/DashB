import './LineCH.scss'
import { LineChart  , CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts'
import data from '../../../assets/data'

let LineCH = () => {
  return (
    <div className="chart">
      <div className="chart-name">Single Line Chart</div>
      <LineChart width={550} height={250} data={data}>
        <CartesianGrid strokeDasharray='4 6' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type='monotone' dataKey='pv' stroke ='#005f11' />
        <Line type='monotone' dataKey='uv' stroke ='#23ad33' />
      </LineChart>
    </div>
  )
}

export default LineCH