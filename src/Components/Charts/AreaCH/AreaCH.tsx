import { Tooltip } from 'react-bootstrap'
import { Area, AreaChart, Legend, XAxis, YAxis } from 'recharts'
import data from '../../../assets/data'
import './AreaCH.scss'

let AreaCH = () => {
  return(
    <div className="chart area-chart">
      <p className="chart-name">Area Chart</p>
      <AreaChart width={550} height={250} data={data} >
      <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#005f11" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#005f11" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#23ad33" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#23ad33" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey='name' />
  <YAxis />
  <Tooltip />
  <Legend />
  <Area type='monotone' dataKey='uv' stroke='#005f11' fillOpacity={1} fill='url(#colorUv)' />
  <Area type='monotone' dataKey='pv' stroke='#23ad33' fillOpacity={1} fill='url(#colorPv)' />
      </AreaChart>
    </div>
  )
}

export default AreaCH