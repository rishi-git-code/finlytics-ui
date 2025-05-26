import logo from './assets/fnt.png';
import './App.css';
import RegisterPage from './pages/RegisterPage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{width:'100px', height: 'auto' }}/>
      </header>
      <RegisterPage/>
    </div>
  );
}

export default App;
