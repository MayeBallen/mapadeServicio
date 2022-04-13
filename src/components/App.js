import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import DashContextProvider from "../context/dashboard";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <DashContextProvider>
        <Dashboard />
      </DashContextProvider>
    </Router>
  );
}

export default App;
