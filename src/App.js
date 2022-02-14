import "./App.css";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";
import Notes from "./components/Notes/Notes";
import Textarea from "./components/Textarea/Textarea";

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <Textarea />
      <Notes />
    </div>
  );
}

export default App;
