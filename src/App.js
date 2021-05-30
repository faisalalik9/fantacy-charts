import './App.css';
import Chart from './Chart';
import Footer from './Footer';
import lines from './lines.svg';

 
function App() {

  

  return (
    <div className="App">
      <div className="lines"><img src={lines}></img></div>
      <div className="chart-div">
        <h2>Medicants of Ayurvedic System</h2>
        <div className="chart">
          <Chart  />
        </div>

      </div>

      <Footer />
      
       
    </div>
  );


}

export default App;
