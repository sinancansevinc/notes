import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import NotePage from "./pages/NotePage";
import NotesList from './pages/NotesList';



function App() {
  return (

    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<NotesList />} />
          <Route path="/note/:id" Component={NotePage} />
        </Routes>

      </div>
    </Router>

  );
}

export default App;
