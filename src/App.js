import FunctionComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <FunctionComponent name="Maulida" message="This message functional component" />
      <hr />
      <ClassComponent name="Jusolihun" message="This message class component" />
    </div>
  );
}

export default App;
