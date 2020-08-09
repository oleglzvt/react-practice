import React, {Component} from 'react';
import './App.css';

class Students extends Component {
	constructor() {
		super();
		this.state = {
			plusButtonShown: true,
			minusButtonShown: false,
			testResultsShown: false,
			tags: [],
			tagInput: ''
		}
	}

	handleToggle = () => {
		this.setState({
			plusButtonShown: this.state.plusButtonShown ? false : true,
			minusButtonShown: this.state.minusButtonShown ? false : true,
			testResultsShown: this.state.testResultsShown ? false : true
		})
	}

	trackTagInput = (e) => {
		this.setState({
			tagInput: e.target.value
		})
	}

	addTag = (e) => {
		e.preventDefault();
		this.state.tags.push(this.state.tagInput)
	}

	render() {
		return (
			<div className="student">
				<div className="student-photo">
					<img src={this.props.image} alt={`${this.props.firstName} ${this.props.lastName}`}/>
				</div>
				<div className="student-info">
					<h2>{`${this.props.firstName} ${this.props.lastName}`}</h2>
					<ul className="about-student">
						<li>Email: {this.props.email}</li>
						<li>Company: {this.props.company}</li>
						<li>Skill: {this.props.skill}</li>
						<li>Average: {this.props.grades.map(Number).reduce((a,b) => a + b, 0) / this.props.grades.length}%</li>
					</ul>

					{ this.state.testResultsShown &&
						<div>
							<ul className="tests">
								{this.props.grades.map((score, i) => {
									return <li key={i}>Test {i+1}: {score}%</li>;
								})}
							</ul>

							{/* <ul className="tags">
								<li>{this.state.tags[0]}</li>
							</ul> */}

							<form>
								<label htmlFor="tag" className="sr-only">Add a tag</label>
								<input type="text" id="tag" name="tag" className="add-tag-input" placeholder="Add a tag" onChange={this.trackTagInput} />
								<button onClick={this.addTag}>add tag</button>
							</form>
						</div>
					}

				</div>
				<div className="toggle-buttons">

					{this.state.plusButtonShown && <button className="expand-btn" onClick={this.handleToggle}><i className="fas fa-plus"></i></button>}

					{this.state.minusButtonShown && <button className="expand-btn" onClick={this.handleToggle}><i className="fas fa-minus"></i></button>}

				</div>
			</div>
		)
	}
}

export default Students