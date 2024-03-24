import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="App container">
        <Weather defaultCity="Tokyo" />
        <footer>
          This page was made by Nadira-Begim and is {""}
          <a href="https://github.com/Nadi2894/react-w-app">
            open-sourced on GitHub{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
