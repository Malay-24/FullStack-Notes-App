
import './App.css';
import {Routes, Route} from "react-router-dom"
import Register from "./components/Register"
import Login from "./components/Login"
import CreateNote from './components/CreateNote';
import Notes from './components/Notes';
function App() {
  return (
    <div className="App">
      <h1>Notes App</h1>
      <Routes>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/createnote" element={<CreateNote/>}></Route>
        <Route path="/note" element={<Notes/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
