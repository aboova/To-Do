import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { Auth } from "aws-amplify";
import { LinkContainer } from "react-router-bootstrap";

import Routes from "./Routes";
import { AppContext } from "./libs/contextLib";
import { onError } from "./libs/errorLib";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    } catch (e) {
      if (e !== "No current user") {
        onError(e);
      }
    }

    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut();

    userHasAuthenticated(false);
  }

  return (
    !isAuthenticating && (
      <div className="App container">
        <Navbar fluid="true" collapseOnSelect bg="light">
          <Navbar.Brand>
            <Link to="/">Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              {isAuthenticated ? (
                <NavItem onClick={handleLogout} id="logout">Logout</NavItem>
              ) : (
                <>
                  <Navbar.Brand>
                    <Link to="/settings">Settings</Link>
                  </Navbar.Brand>

                  <Navbar.Brand>
                    <Link to="/signup">SignUp</Link>
                  </Navbar.Brand>

                  <Navbar.Brand>
                    <Link to="/login">Login</Link>
                  </Navbar.Brand>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Routes />
        </AppContext.Provider>
      </div>
    )
  );
}

export default App;
