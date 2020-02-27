import React from 'react'
import { Line } from 'react-chartjs-2'

const PriceChart = ({ prices }) => {
  const style = { borderColor: 'rgba(54, 162, 235, 0.6)' }
  const data = {
    labels: Array(prices.length).fill(''),
    datasets: [{ data: [...prices], ...style }]
  }
  const options = {
    elements: {
      line: { tension: 0 },
      point: { backgroundColor: 'rgba(54, 162, 235, 0.6)' }
    },
    maintainAspectRatio: false,
    legend: { display: false }
  }

  return (
    <div className="chart-container">
      <Line id="chart" data={data} options={options} />
    </div>
  )
}

export default PriceChart
