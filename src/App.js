import './App.css';


function Portfolio () {
    return(
        <h1 className="port">Portfolio</h1>
    )
}

function AboutUs () {
  return (
      <h1 className="about">AboutUs</h1>
  )
}

function App() {
  return (
    <div className="app">
        <Portfolio/>
        <AboutUs/>
    </div>
  );
}

export default App;
