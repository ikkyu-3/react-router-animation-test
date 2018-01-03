import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';

import Home from './components/Home';
import A from './components/A';
import B from './components/B';
import C from './components/C';

// import logo from './logo.svg';
import './App.css';

const App = (props) => {
    return (
      <Router>

        <div className="App">
          <nav className="navi">
            <div className="home"><Link to="/">HOME</Link></div>        
            <div className="a"><Link to="/a">A</Link></div>
            <div className="b"><Link to="/b">B</Link></div>
            <div className="c"><Link to="/c">C</Link></div>
          </nav>
          <div className="contents">
            <Route render={ ({location}) => {
              return (
                <TransitionGroup>

                  <CSSTransition
                    key={location.key}
                    timeout={{
                      enter: 10000,
                      exit: 10000
                    }}
                    classNames="fade">

                    <Switch  location={location}>
                      <Route exact path="/" component={Home} />
                      <Route path="/a" component={A} />
                      <Route path="/b" component={B} />
                      <Route path="/c" component={C} />
                    </Switch>

                  </CSSTransition>

                </TransitionGroup>
              );
            }} />
          </div>
        </div>
      </Router>
    );
};

export default App;
