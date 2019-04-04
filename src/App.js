import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		person: [
			{ id: '1', name: 'Ankit', age: 25 },
			{ id: '2', name: 'Ankur', age: 27 },
			{ id: '3', name: 'Pooja', age: 29 },
			{ id: '4', name: 'Arti', age: 31 }
		],
		anotherPerson: 'Hello World',
		showName: false
	};

	deleteNameHandler = (personIndex) => {
		// const person = this.state.person;
		const person = [ ...this.state.person ];
		console.log(person.splice(personIndex, 1));
		this.setState({
			person: person
		});
	};

	changeNameHandler = (event, id) => {
		const personIndex = this.state.person.findIndex((p) => {
			return p.id === id;
		});

		const personFaltu = {
			...this.state.person[personIndex]
		};

		personFaltu.name = event.target.value;

		const person = [ ...this.state.person ];
		person[personIndex] = personFaltu;

		this.setState({
			person: person
		});
	};

	toggelNameHandler = () => {
		const doesShow = this.state.showName;
		this.setState({
			showName: !doesShow
		});
	};

	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid',
			padding: '8px',
			cursor: 'pinter'
		};
		let person = null;
		if (this.state.showName) {
			person = (
				<div>
					{this.state.person.map((person, index) => {
						return (
							<Person
								click={() => this.deleteNameHandler(index)}
								name={person.name}
								age={person.age}
								key={person.id}
								change={(event) => this.changeNameHandler(event, person.id)}
							/>
						);
					})}
				</div>
			);
		}

		return (
			<div className="App">
				<h1>Hi, I am Ankit</h1>
				<p>Work is comfirtable.</p>
				<button style={style} onClick={this.toggelNameHandler}>
					Switch Person
				</button>
				{person}
			</div>
		);
	}
}

export default App;
