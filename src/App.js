import './App.css';

function WhoAmI ({name, surname, link}) {
	return (
		<div>
			<h1>My name is {name()}, surname - {surname}</h1>
			<a href={link}>My profile</a>
		</div>
	)
}

function App() {
  return (
    <div className="App">
      <WhoAmI name={() => {return 'John'}} surname='Smith' link='https://youtube.com'/>
		<WhoAmI name={() => {return 'Nikita'}} surname='Sirius' link='https://youtube.com/youtube'/>
    </div>
  );
}

export default App;