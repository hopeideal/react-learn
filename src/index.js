import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Slider from './components/Slider';
import Calendar from './components/Calendar';
import Hook from './components/Hook';
import Load from './components/Load';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import image1 from './images/11590738292567.jpg';
import image2 from './images/7161594627556256.jpg';
import image3 from './images/44441594369441190.jpg';
import image4 from './images/LUNBO1594626113465.jpg';
import image5 from './images/yinhang1586863514101.jpg';

const images = [image1, image2, image3, image4, image5];

ReactDOM.render(
  <BrowserRouter>
    <nav>
      <li>
        <Link to="/">App</Link>
      </li>
      <li>
        <Link to="/slider">Slider</Link>
      </li>
      <li>
        <Link to="/calendar">Calendar</Link>
      </li>
      <li>
        <Link to="/hook">Hook</Link>
      </li>
      <li>
        <Link to="/load">Load</Link>
      </li>
    </nav>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/slider">
        <Slider sources={images} />
      </Route>
      <Route path="/calendar">
        <Calendar />
      </Route>
      <Route path="/hook">
        <Hook />
      </Route>
      <Route path="/load">
        <Load />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
