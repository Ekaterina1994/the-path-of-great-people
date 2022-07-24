import "./App.css";
import Main from "./main/Main";
import Info from "./info/Info";
import Header from "./components/header/Header";
import NavMain from "./components/navs/nav-main/Nav-main";
import { Routes, Route } from "react-router-dom";
import Options from "./options/options";
import GameMode from "./game-mode/GameMode";

const React = require("react");

function App() {
  return (
    <div className="App">
      <Main />
      <Header />

      <Routes>
        <Route path="/menu" element={<NavMain />} />

        <Route path="/start-game" />
        <Route path="/game-mode" element={<GameMode />} />
        <Route path="/options" element={<Options />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
