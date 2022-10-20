import "./App.css";
import Counter from "./components/counter/Counter";
import Posts from "./components/posts/Posts";
import Dragons from "./components/dragons/Dragons";
import NavBar from "./components/NavBar";
import ReservedDragons from "./components/ReservedDragons";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/dragons" element={<Dragons />} />
          <Route path="/reserved" element={<ReservedDragons />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
