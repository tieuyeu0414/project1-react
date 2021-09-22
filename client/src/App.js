import './App.css';
import Menu from './component/menu';
import RouterURL from './component/routerURL';
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu/>
        <RouterURL/>
      </div>
    </Router>
  );
}

export default App;
