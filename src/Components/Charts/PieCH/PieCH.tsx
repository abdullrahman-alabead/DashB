import { Pie, PieChart } from 'recharts'
import './PieCH.scss'

let PieCH = () => {


  const data = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ];

  const data2 = [
    {
      "name": "Group A",
      "value": 2400
    },
    {
      "name": "Group B",
      "value": 4567
    },
    {
      "name": "Group C",
      "value": 1398
    },
    {
      "name": "Group D",
      "value": 9800
    },
    {
      "name": "Group E",
      "value": 3908
    },
    {
      "name": "Group F",
      "value": 4800
    }
  ];

  return (
    <div className="chart pie-chart">
      <p className="chart-name">Pie Chart</p>
      <PieChart width={550} height={250}>
        <Pie data={data} dataKey="value" nameKey='name' cx='50%' cy='50%' outerRadius={50} fill="#005f11" />
        <Pie data={data2} dataKey="value" nameKey='name' cx='50%' cy='50%' innerRadius={60} outerRadius={80} fill="#23ad33" label />
      </PieChart>
    </div>
  )
}


export default PieCH