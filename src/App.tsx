import React from "react";
import { useState } from "react";
import { List, ListItem } from "@mui/material";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import modules from "./modules"; // All the parent knows is that it has modules ...

const App = () => {
  const [currentTab, setCurrentTab] = useState("dashboard");

  return (
    <BrowserRouter>
      {/*<div className="App">*/}
      {/*    <header className="App-header">*/}
      {/*    <img src={logo} className="App-logo" alt="logo" />*/}
      {/*    <ul className="App-nav">*/}
      {/*    </ul>*/}
      {/*    </header>*/}
      {/*    <div className="App-content">*/}
      {/*    </div>*/}
      {/*</div>*/}
      <List component="nav">
        {modules.map(
          (
            module // with a name, and routes
          ) => (
            <ListItem
              key={module.name}
              className={currentTab === module.name ? "active" : ""}
            >
              <Link
                to={module.routeProps.path}
                onClick={() => setCurrentTab(module.name)}
              >
                {module.name}
              </Link>
            </ListItem>
          )
        )}
      </List>
      <Routes>
        {modules.map((module) => (
          <Route {...module.routeProps} key={module.name} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
