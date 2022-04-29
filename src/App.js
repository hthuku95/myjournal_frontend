import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotePage from './pages/NotePage';


function App() {
  return (
   <Router>
      <div className="App">
        <Header/>

        <Switch>

          <Route exact path="/">
            <NotesListPage/>
          </Route>

          <Route path="/note/:id">
            <NotePage/>
          </Route>
          
        </Switch>
      </div>
   </Router>
  );
}

export default App;
