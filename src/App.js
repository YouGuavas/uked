import './App.css';
import Gallery from './Gallery';
import SideBar from './SideBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Uked!
      </header>
      <Main />
    </div>
  );
}

function Main() {
  return (
    <div className="Main">
      Deals!
      <SideBar />
      <Gallery />
    </div>
  )
}
export default App;
