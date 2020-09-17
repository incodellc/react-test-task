import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';

const TickerGraph = ({ tickerData }) => {
  const [graph, setGraph] = useState(null);
  const graphRef = useRef(null);

  const updateGraph = () => {
    const { last_trade_time, price } = tickerData[0];

    graph.data.labels.push(last_trade_time.slice(11, 19));
    graph.data.datasets[0].data.push(price);
    graph.data.labels = graph.data.labels.slice(-30);
    graph.data.datasets[0].data = graph.data.datasets[0].data.slice(-30);

    graph.update();
  };

  useEffect(() => {
    if (graphRef && graphRef.current) {
      setGraph(
        new Chart(graphRef.current.getContext('2d'), {
          type: 'line',
          data: {
            labels: [],
            datasets: [
              {
                data: [],
                label: `${tickerData[0].ticker.toUpperCase()} (price)`,
                borderColor: '#718096',
                backgroundColor: 'rgba(247, 250, 252, .5)',
              },
            ],
          },
        })
      );
    }
    return () => {
      graph && graph.destroy();
    };
  }, [graphRef]);

  useEffect(() => {
    graph && updateGraph();
  }, [graph, tickerData.length]);

  return (
    <canvas
      ref={graphRef}
      style={{ maxWidth: '100%' }}
      data-testid="ticker-graph"
    />
  );
};

TickerGraph.propTypes = {
  tickerData: PropTypes.array.isRequired,
};

export default TickerGraph;
