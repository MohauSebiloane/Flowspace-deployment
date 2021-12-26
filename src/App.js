import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Nav from './components/nav';
import Landing from './components/landing.js';
import Features from './components/features';
import Templates from './components/templates'
import Resources from './components/resources'
import Pricing from './components/pricing'
import LoginForm from './components/loginForm'
import Download from './components/download'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

    AOS.init({duration: 800, once: true});

  return (
    <Router>
      <div id="Application">
      <Nav/>
        <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/features" exact component={Features}/>
            <Route path="/templates" exact component={Templates}/>
            <Route path="/resources" exact component={Resources}/>
            <Route path="/pricing" exact component={Pricing}/>
            <Route path="/login" exact component={LoginForm}/>
            <Route path="/download" exact component={Download}/>
        </Switch>
      </div> 
    </Router>
  );
}

export default App;
