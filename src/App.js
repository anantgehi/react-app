import logo from './logo.svg';
import './App.css';
import AmanComponent from './Components/Aman';
import DeepanshuComponent  from './Components/Deepanshu';
import RoshanComponent  from './Components/Roshan';
import ADComponent from './Components/ADComponent';
import VinitComp from './Components/Vinit';
function App() {
  return (
  <div className="App">
	  <h2>React App</h2>
      <AmanComponent/>
      <DeepanshuComponent/>
      <RoshanComponent/>
      <ADComponent />
      <VinitComp />
  </div>
  );
}

export default App;
