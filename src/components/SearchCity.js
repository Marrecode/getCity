import React from 'react';



class SearchCity extends React.Component {
	state = {
		city: [],
	}

	doSubmit = event => {
		event.preventDefault();
		this.props.doCity(this.state.city);
		this.setState({
			city: '',
		});
	}

	handleChange = event =>{
		this.setState({
			city: event.target.value

		});
	}

	render() {
		const { city } = this.state;
		return (
			<div>
				<div className="container">
				<p> { city } </p>
				</div>

			<div id="SearchCity" className="mb-5">
				<form onSubmit={this.doSubmit}>
					<div className="input-group">

						<input type="text" placeholder="cityname:" className="form-control form-control-lg" id="city" onChange={this.handleChange} value={this.state.city}/>

						<div className="input-group-append">
							<button className="btn btn-success btn-lg">Search</button>
						</div>
					</div>
				</form>

			</div>
			</div>
		)
	}
}

export default SearchCity;
