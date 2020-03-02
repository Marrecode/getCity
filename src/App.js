import React from 'react';
import axios from 'axios';
import SearchCity from './components/SearchCity';
import WeatherReport from './components/WeatherReport';

class App extends React.Component {
	state = {
		errorMessage: false,
		report: null,
	}

	doCity = (city) =>{
		axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7623e08f862463abc586d5c9a0652f17`)
		.then(response => {
			console.log(response.data);
			console.log(response.data.name)
			this.setState({

				report: response.data,
			});
		})
		.catch(error => {
			console.log(error);
			this.setState({
			errorMessage: `something went wrong:  ${city}`,
			report: false,
			});
		})
	}




	render() {
		const { report, errorMessage} = this.state;
		return (
			<div id="app">

				<div className="container my-5">
					<h1 className="text-center mb-5">

						<span role="img" aria-label="Weather?">🌦❔</span>
					</h1>
					<h3>
					{errorMessage}
					</h3>
					<SearchCity doCity={this.doCity}/>

					{
						this.state.report
						? (
							<WeatherReport report={ report } />
						)
						: ''
					}

				</div>
			</div>
		)
	}
}

export default App;
