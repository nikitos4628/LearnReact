import {Component} from 'react';

import './App.css';

// function WhoAmI ({name, surname, link}) {
// 	return (
// 		<div>
// 			<h1>My name is {name()}, surname - {surname}</h1>
// 			<a href={link}>My profile</a>
// 		</div>
// 	)
// }

class WhoAmI extends Component{
	constructor(props) {
		super(props);
		this.state = {
			years: 27,
			position: ''
		}
		// this.nextYear = this.nextYear.bind(this);
	}

	// nextYear () {
	// 	this.setState(state => ({
	// 		years: state.years + 1
	// 	}))
	// }

	nextYear = () => {
		this.setState(state => ({
			years: state.years + 1
		}))
	}

	commitInputChanges = (e, color) => {
		console.log(color);
		this.setState({
			position: e.target.value
		})
	}

	render () {
		const {name, surname, link} = this.props;
		const {position, years} = this.state

		return (
			<div>
				{/* <button onClick={() => this.nextYear()}>{this.state.text}</button> */}
				<button onClick={this.nextYear}>+++</button>
				<h1>My name is {name}, 
				surname - {surname}, 
				age - {years}, 
				position - {position}</h1>
				<a href={link}>My profile</a>
				<form>
					<span>Введите должность</span>
					<input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
				</form>
			</div>
		)
	}
}

// function App() {
//   return (
//     <div className="App">
//       <WhoAmI name={() => {return 'John'}} surname='Smith' link='https://youtube.com'/>
// 		<WhoAmI name={() => {return 'Nikita'}} surname='Sirius' link='https://youtube.com/youtube'/>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <WhoAmI name='John' surname='Smith' link='https://youtube.com'/>
		<WhoAmI name='Nikita' surname='Sirius' link='https://youtube.com/youtube'/>
    </div>
  );
}

export default App;