import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import EntryPoint from './EntryPoint';
import ComplaintFiling from './ComplaintFiling';
import LegalAdvice from './LegalAdvice';
import MyCases from './MyCases';
import AwarenessZone from './AwarenessZone';
import Settings from './Settings';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <main>
          <Switch>
            <Route path="/" exact component={EntryPoint} />
            <Route path="/complaint-filing" component={ComplaintFiling} />
            <Route path="/legal-advice" component={LegalAdvice} />
            <Route path="/my-cases" component={MyCases} />
            <Route path="/awareness-zone" component={AwarenessZone} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App; 