import React from 'react';
import {Bar} from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const backend = {
	labels: ['PostgreSQL', 'MongoDB', 'MariaDB', 'Mysql', 'Node.js', 'Spring MVC', 'Spring Boot',],
	datasets: [{
		label: '# of Votes',
		data: [4, 5, 12, 20, 20, 13, 5],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)'
		],
		borderColor: [
			'rgba(255, 99, 132, 1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)'
		],
		borderWidth: 1
	}]
};

const frontend = {
	labels: ['Stylus',  'Next', 'React', 'Angular', 'Type/Javascript', 'CSS', 'Tailwind', 'Three.js' ],
	datasets: [{
		label: '# of Votes',
		data: [4, 5, 15, 20, 20, 19, 5, 5],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)'
		],
		borderColor: [
			'rgba(255, 99, 132, 1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)'
		],
		borderWidth: 1
	}]
};

const overlapping = {
	labels: ['Next', 'React', 'Angular', 'Tailwind', 'CSS',],
	datasets: [{
		label: '# of Votes',
		data: [12, 19, 3, 5, 2, 3],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)'
		],
		borderColor: [
			'rgba(255, 99, 132, 1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)'
		],
		borderWidth: 1
	}]
};

const options = {
	maintainAspectRatio: false, // Set to false to fix the height
	plugins: {
		legend: {
			display: true,
			position: 'top',
		}
	},
	animation: {
		duration: 2000, // general animation time
		easing: 'easeInOutQuad',
		animateRotate: true,
		animateScale: true,
	}
};

const BarExample = () => (
		<>
			<div>
				<h2>Current Backend Skills:</h2>
				<div style={{maxWidth: '700px', height: '200px'}}>
					<Bar
						data={backend}
						options={options}
					/>
				</div>
			</div>
			<div>
				<h2>Current Frontend Skills:</h2>
				<div style={{maxWidth: '700px', height: '200px'}}>
					<Bar
						data={frontend}
						options={options}
					/>
				</div>
			</div>
		</>
	)
;

export default BarExample;
