import React from 'react';
import { Line } from 'react-chartjs-2';

describe('Stock Chart', () => {
    const drawPositiveStockChangeLine = (isChangePositive) => (
        <Line
            data={{
                labels: ['first'],
                datasets: [
                    {
                        data: [220],
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: isChangePositive ? '#7cb305' : '#cf1322',
                        borderWidth: 3,
                        pointBackgroundColor: '#fff',
                        pointHoverBorderWidth: 6,
                    },
                ],
            }}
        />
    );

    it('Draw green line when positive change', () => {
        const line = drawPositiveStockChangeLine(true);
        expect(line.props.data.datasets[0].borderColor).toBe('#7cb305');
    });

    it('Draw red line when negative change', () => {
        const line = drawPositiveStockChangeLine(false);
        expect(line.props.data.datasets[0].borderColor).toBe('#cf1322');
    });
});
