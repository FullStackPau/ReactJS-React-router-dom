import Menu from './components/Menu';
import Content from './components/Content';
import {
  BrowserRouter as Router
} from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Content/>
      </div>
    </Router>

  );
}

export default App;
