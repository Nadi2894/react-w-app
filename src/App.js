import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="App container">
        <Weather defaultCity="Tokyo" />
        <footer>
          This page was made by Nadira-Begim and is {""}
          <a
            href="https://github.com/Nadi2894/react-w-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub{" "}
          </a>{" "}
          and
          <a
            href="https://famous-mochi-3b1a23.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
