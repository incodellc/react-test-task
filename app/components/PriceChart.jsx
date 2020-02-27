import React from 'react'
import { Line } from 'react-chartjs-2'

const PriceChart = ({ prices }) => {
  return (
    <div>
      <Line
        data={{
          labels: Array(prices.length).fill(''),
          datasets: [
            {
              data: [...prices]
            }
          ]
        }}
      />
    </div>
  )
}

export default PriceChart
