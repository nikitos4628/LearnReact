import {Component} from 'react';
import styled from 'styled-components';

import './App.css';

const EmpItem = styled.div`
	padding: 20px;
	margin-bottom: 15px;
	border-radius: 5px;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
	a {
		display: block;
		margin: 10px 0 10px 0;
		color: ${props => props.active ? 'orange' : 'black'};
	}
	input {
		display: block;
		margin-top: 10px;
	}
`;

const Header = styled.h2`
	font-size: 22px;
`;

export const Button = styled.button`
	display: block;
	padding: 5px 15px;
	background-color: gold;
	border: 1px solid rgba(0, 0, 0, .2);
	box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
`;

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
			<EmpItem active>
				{/* <button onClick={() => this.nextYear()}>{this.state.text}</button> */}
				<Button onClick={this.nextYear}>+++</Button>
				<Header>My name is {name}, 
				surname - {surname}, 
				age - {years}, 
				position - {position}</Header>
				<a href={link}>My profile</a>
				<form>
					<span>Введите должность</span>
					<input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
				</form>
			</EmpItem>
		)
	}
}

// React.Fragment key={123} если нужен key(Fragment вместо <>)

// function App() {
//   return (
//     <div className="App">
//       <WhoAmI name={() => {return 'John'}} surname='Smith' link='https://youtube.com'/>
// 		<WhoAmI name={() => {return 'Nikita'}} surname='Sirius' link='https://youtube.com/youtube'/>
//     </div>
//   );
// }

const Wrapper = styled.div`
	width: 600px;
	margin: 80px auto 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <WhoAmI name='John' surname='Smith' link='https://youtube.com'/>
		<WhoAmI name='Nikita' surname='Sirius' link='https://youtube.com/youtube'/>
    </Wrapper>
  );
}

export default App;