import ApexCharts from 'react-apexcharts'

import React, { useEffect, useState } from "react";
import { TCProps } from '../interface/translate';
import { type } from 'os';
import {ethers} from 'ethers'


const Chart = (props: TCProps) => {
	const [cData, setCData] = useState();

	const abiYesbswap = [
		"function getChartData(uint256 _idx) view returns (uint256)",
		"function getChartDataLength() view returns (uint256)",
	];

	const formatPrice = async (_price: any) => {
		return (_price / ethers.toBigInt(10000000000)).toString();
	}

	const getChart = async () => {
		const provider = await new ethers.JsonRpcProvider('https://public-en-cypress.klaytn.net');
		const yesbswap = await new ethers.Contract("0x23697e2E16af303e3FAF011B1eb1e6628D26e67E", abiYesbswap, provider);
		const length = (await yesbswap.getChartDataLength()).toString();
		console.log(length);
		
		const dataTmp = []
		let idx = 1;
		for (let i = 0; i < length; i+=4) {
			let open, high, low, close;
			for (let j = 0; j < 4; j++) {
				if (j===0) {
					const d = await yesbswap.getChartData(i+j);
					open = d;
					high = d;
					low = d;
				} else if (j===3) {
					close = await yesbswap.getChartData(i+j);
				}
				if (j!==0) {
					const d = await yesbswap.getChartData(i+j);
					if (d < low) {
						low = d;
					} else if (d > high) {
						high = d;
					}
				} 
			}
			await dataTmp.push({
				x: idx,
				y: [await formatPrice(open), await formatPrice(high), await formatPrice(low), await formatPrice(close)]
			})
			idx++;
		}
		// @ts-ignore
		setCData(dataTmp);
		console.log(JSON.stringify(dataTmp));
	}

	useEffect(() => {
		getChart();
		setInterval(() => getChart(), 3000);
	}, [])

	
	const {t,font} = props;
	const state = {
	
		series: [{
			data: cData
		}],
		options: {
			chart: {
				type: 'candlestick',
				height: 350
			},
			xaxis: {
				type: 'numeric'
			},
			yaxis: {
				tooltip: {
					enabled: true
				}
			}
		},
	};

  
	return (
		<div id="chart" className='d-flex justify-content-center'>
			<div className='d-none d-lg-flex justify-content-center' style={{
				borderRadius: 12,
				backgroundColor: "#102434",
				width: 786,
				height: 551,
			}}>
				<div>
					<ApexCharts type="candlestick"
						width={786}
						height={551}
						//@ts-ignore
						series={state.series}
						options={{
							chart: {
								type: 'candlestick',
								height: 350
							},
							xaxis: {
								type: 'numeric'
							},
							yaxis: {
								tooltip: {
									enabled: true
								}
							}
						}}/>
				</div>
			</div>

			<div className='d-lg-none d-flex justify-content-center' style={{
				borderRadius: 12,
				backgroundColor: "#102434",
				width: 370,
				height: 250,
			}}>
				<div>
					<ApexCharts type="candlestick"
						width={370}
						height={250}
						//@ts-ignore
						series={state.series}
						options={{
							chart: {
								type: 'candlestick',
								height: 350
							},
							xaxis: {
								type: 'datetime'
							},
							yaxis: {
								tooltip: {
									enabled: true
								}
							}
						}} />
				</div>
			</div>
		</div>
	);
}
export default Chart;