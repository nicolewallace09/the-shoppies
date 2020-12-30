import './App.css';
import Nav from "./components/Nav.js"
import Search from "./components/Search.js"


function App() {
  return (
    <>
    <Nav></Nav>
    
     <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <h1>Welcome to The Shoppies!</h1>
        </div>

        <div class="card col-lg-8 bg-white search-card">
          <p>Movie Title</p>
          <Search></Search>
        </div>
      </div>

      <div class="row">
        <div class="card col-lg-4 bg-white nom-card">
          <p>Results for ""</p>
        </div>

        <div class="card col-lg-4 bg-white nom-card">
          <p>Nominations</p>
        </div>
      </div>

    </div>

    </>
  );
}

export default App;
