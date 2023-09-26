import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/Default.layout";
import NoMatch from "./layouts/NoMatch";

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
