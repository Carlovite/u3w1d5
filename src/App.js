import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./Components/MyNav";
import "./assets/netflix.css";
import Buttons from "./Components/Buttons";
import Films from "./Components/Row";
import Row2 from "./Components/Row2";
import Row3 from "./Components/Row3";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <MyNav></MyNav>
      <div className="container-fluid px-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>
            <Buttons></Buttons>
          </div>
          <div>
            <i className="bi bi-grid icons"></i>
            <i className="bi bi-grid-3x3 icons"></i>
          </div>
        </div>
        <h4>Trending Now</h4>
        <Films></Films>
        <h4>Watch it Again</h4>
        <Row2></Row2>
        <h4>New Releases</h4>
        <Row3></Row3>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
