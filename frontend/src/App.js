import './App.css';
import Content from './pages/Content';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { QuizPage } from './pages/QuizPage';


function App() {
  return (
    <div className="App" >
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Content/>
          </Route>
          <Route exact path="/attemptQuiz/:id">
            <QuizPage/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
