import "./App.css";
import { Routes, Route } from "react-router-dom";

// import Main from "./main/Main";
import Info from "./info/Info";
import Header from "./components/header/Header";
import NavMain from "./components/navs/nav-main/Nav-main";
import Options from "./options/options";
import GameMode from "./game-mode/GameMode";
import StartGame from "./start-game/StartGame";
import PersonDescription from "./components/person-Description/PersonDescription";

const React = require("react");

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/menu" element={<NavMain />} />
        <Route path="/" element={<NavMain />} />
        <Route path="/start-game" element={<StartGame />} />
        <Route path="/game-mode" element={<GameMode />} />
        <Route path="/options" element={<Options />} />
        <Route path="/info" element={<Info />} />

        {/* <Route path="/about-game" element={<AboutGame />} /> */}
        <Route path="/person-description" element={<PersonDescription />} />
      </Routes>
    </div>
  );
}

export default App;
