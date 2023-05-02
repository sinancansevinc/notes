import './App.css';
import Header from './components/Header';
import NotesList from './pages/NotesList';


function App() {
  return (
    <div className="App">
      <Header />
      <NotesList />
    </div>
  );
}

export default App;