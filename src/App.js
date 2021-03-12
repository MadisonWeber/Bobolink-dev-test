import Nav from './components/Nav'
import QuestionOne from './components/QuestionOne'
import QuestionTwo from './components/QuestionTwo'
import QuestionFive from './components/QuestionFive'

import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './css/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          
            <Route path = '/' exact component = {QuestionOne} />
            <Route path = '/questiontwo' component = {QuestionTwo} />
            <Route path = '/questionfive' component = {QuestionFive} />
    
        </Switch>
      </div>
    </Router>

  );
}

export default App;
