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
      <section className="w-full max-w-6xl mx-auto px-4 m-4">
        <div className="grid grid-cols-12 gap-4 flex-1 p-10">
          <SideBar />
          <Gallery />
        </div>
      </section>
    </div>
  )
}
export default App;
