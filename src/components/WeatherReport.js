import React from 'react';



const WeatherReport = props => {
	return (
		<div id="WeatherReport">
			<div className="card bg-dark text-white">
				<div className="card-body text-center">
					<h5 className="card-title">The temperature in <p>{props.report.name}</p> <p>is {props.report.main.temp} &deg; C right now,</p> <p> with a humidity of {props.report.main.humidity} %.</p><p>
					{props.report.weather[0].description}</p>
					</h5>
				</div>
			</div>
		</div>
	)
}

export default WeatherReport;
