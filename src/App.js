import "./App.css";
import { Route, Routes, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import AddReview from "./components/add-review";
import Login from "./components/login";
import MoviesList from "./components/movie-list";
import Movie from "./components/movie";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  function login(user = null) {
    setUser(user);
  }
  function logout() {
    setUser(null);
  }

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Movie Reviews</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to={"/movie"}>Movies</Link>
              </Nav.Link>
              <Nav.Link>
                {user ? (
                  <a href="#" onClick={logout}>
                    Logout User
                  </a>
                ) : (
                  <Link to={"/login"} onClick={() => login(true)}>
                    Login
                  </Link>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path="/" element={<MoviesList/>}  />
        <Route
          path="/movies/:id/review"
          element = {<AddReview user={user}/>}
        />
        <Route
          path="/movies/:id"
          element ={<Movie user={user}/>}
        />
        <Route
          path="/login"
          element={<Login login={login}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
