import './App.css';
import { Intro } from './components/intro';
import {Shortener} from './components/shortener'
function App() {
  return (
    <div className="App">
      <Intro />
      <Shortener />
    </div>
  );
}

export default App;
