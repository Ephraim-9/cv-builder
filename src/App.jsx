import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles.css"

function App() {
  return (
    <div>
      <h1>CV Builder</h1>
      <GeneralInfo />
      <Education />
      <Experience />
      </div>
  );
}

export default App;
