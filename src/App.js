import "./App.css";
import Favorites from "./Favorites";
import Meals from "./Meals";
import Modal from "./Modal";
import Search from "./Search";

function App() {
  return (
    <main className="App">
      <Search />
      <Favorites />
      <Meals />
      <Modal />
    </main>
  );
}

export default App;
