import React from "react";
import TodoFeature from "./features/Todo";
import { Route } from "react-router-dom";
import AlbumFeature from "./features/Song";

function App() {
  return (
    <div className="App">
      Home Page
      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />
    </div>
  );
}

export default App;
