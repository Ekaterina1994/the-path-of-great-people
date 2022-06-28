import "./App.css";
import Main from "./main/Main";
import Header from "./components/header/Header";
import NavMain from "./components/navs/nav-main/Nav-main";

const React = require("react");

function App() {
  return (
    <div className="App">
      <Main />
      <Header />
      <NavMain />
    </div>
  );
}

export default App;
