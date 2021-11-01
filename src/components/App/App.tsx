import logo from "../../assets/images/logo.svg";
import Toggle from "../Toggle";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <Toggle
          buttons={[
            {
              className: "App-link",
              // onClick: () => (window.location.href = "https://reactjs.org"),
              title: "Toggle 1",
              type: "clear",
            },
            {
              className: "App-link",
              // onClick: () => (window.location.href = "https://reactjs.org"),
              title: "Toggle 2",
              type: "clear",
            },
            {
              className: "App-link",
              // onClick: () => (window.location.href = "https://reactjs.org"),
              title: "Toggle 3",
              type: "clear",
            },
            {
              className: "App-link",
              // onClick: () => (window.location.href = "https://reactjs.org"),
              title: "Toggle 4",
              type: "clear",
            },
          ]}
        />
      </header>
    </div>
  );
}

export default App;
