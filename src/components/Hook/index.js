import React from 'react';
import { BrowserRouter, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import State from './State';
import Effect from './Effect';
import Input from './Input';
import Context from './Context';
import Reducer from './Reducer';
import Memorize from './Memorize';

export default () => {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <nav>
        <li>
          <Link to={`${url}/state`}>useState</Link>
        </li>
        <li>
          <Link to={`${url}/effect`}>useEffect</Link>
        </li>
        <li>
          <Link to={`${url}/ref`}>useRef</Link>
        </li>
        <li>
          <Link to={`${url}/context`}>useContext</Link>
        </li>
        <li>
          <Link to={`${url}/reducer`}>useReducer</Link>
        </li>
        <li>
          <Link to={`${url}/memorize`}>useMemo</Link>
        </li>
      </nav>
      <BrowserRouter>
        <Switch>
          <Route path={`${path}/state`}>
            <State />
          </Route>
          <Route path={`${path}/effect`}>
            <Effect />
          </Route>
          <Route path={`${path}/ref`}>
            <Input />
          </Route>
          <Route path={`${path}/context`}>
            <Context />
          </Route>
          <Route path={`${path}/reducer`}>
            <Reducer />
          </Route>
          <Route path={`${path}/memorize`}>
            <Memorize />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
