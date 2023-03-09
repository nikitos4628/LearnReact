import React, {Component} from 'react';
import styled from 'styled-components';
import BootstrapTesting from './BootstrapTesting';

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

const DynamicGreeting = (props) => {
	return (
		<div className={'mb-3 p-3 border border-' + props.color}>
			{props.children}
		</div>
	)
}

const DynamicGreetings = (props) => {
	return (
		<div className={'mb-3 p-3 border border-' + props.color}>
			{
				React.Children.map(props.children, child => {
					return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
				})
			}
		</div>
	)
}

const HelloGreetings = () => {
	return (
		<div style={{'width': '500px', 'margin': '0 auto'}}>
			<DynamicGreetings color={'danger'}>
				<h1>Hello!</h1>
			</DynamicGreetings>
		</div>
	)
}

function App() {
  return (
    <Wrapper>
		
		<HelloGreetings/>

		<DynamicGreeting color={'danger'}>
			<h1>Hi!</h1>
			<h6>Bye!</h6>
		</DynamicGreeting>

		<BootstrapTesting
			left = {
				<DynamicGreetings color={'primary'}>
					<h2>Hello</h2>
					<h2>Goodbye</h2>
				</DynamicGreetings>
			}

			right = {
				<DynamicGreetings color={'warning'}>
					<h3>Hi</h3>
					<h3>Bye</h3>
				</DynamicGreetings>
			}
		/>

      <WhoAmI name='John' surname='Smith' link='https://youtube.com'/>
		<WhoAmI name='Nikita' surname='Sirius' link='https://youtube.com/youtube'/>
		
    </Wrapper>
  );
}

export default App;