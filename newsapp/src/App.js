import React from "react";
import { Routes, Route } from "react-router-dom";
import NNavbar from "./component/NNavbar";
import News from "./component/News";

let pageSize = 5;
const App = () => {
  return (
    <>
      <NNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <News pageSize={pageSize} country="in" category="business" />
          }
        />
        <Route
          path="/sports"
          element={<News pageSize={pageSize} country="in" category="sports" />}
        />
        <Route
          path="/business"
          element={
            <News pageSize={pageSize} country="in" category="business" />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News pageSize={pageSize} country="in" category="entertainment" />
          }
        />
        <Route
          path="/health"
          element={<News pageSize={pageSize} country="in" category="health" />}
        />
        <Route
          path="/sports"
          element={<News pageSize={pageSize} country="in" category="sports" />}
        />
        <Route
          path="/technology"
          element={
            <News pageSize={pageSize} country="in" category="technology" />
          }
        />
        <Route
          path="/science"
          element={<News pageSize={pageSize} country="in" category="science" />}
        />
        <Route
          path="/general"
          element={<News pageSize={pageSize} country="in" category="general" />}
        />
      </Routes>
    </>
  );
};

export default App;
