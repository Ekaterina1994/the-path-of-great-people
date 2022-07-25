import "./App.css";
import { Routes, Route } from "react-router-dom";

// import Main from "./main/Main";
import Info from "./info/Info";
import Header from "./components/header/Header";
import NavMain from "./components/navs/nav-main/Nav-main";
import Options from "./options/options";
import GameMode from "./game-mode/GameMode";
import StartGame from "./start-game/StartGame";

const React = require("react");

function App() {
  return (
    <div className="App">
      {/* <Main /> */}
      <Header />

      <Routes>
        <Route path="/menu" element={<NavMain />} />
        <Route path="/" element={<NavMain />} />
        <Route path="/start-game" element={<StartGame />} />
        <Route path="/game-mode" element={<GameMode />} />
        <Route path="/options" element={<Options />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
