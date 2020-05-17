import React, { useRef, useState, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { hot } from 'react-hot-loader';
import Header from './components/common/header';
import Routes from './routes';
import NotFound from './components/common/notFound';
import { GlobalStyles } from './common/global';
import theme from './common/theme';
import Burger from './components/common/hamburger';
import Spinner from './components/common/Spinner';
import { useOnClickOutside } from './hooks/index';

import CommonContextProvider from './context/commonContext';

function App() {
  const [ open, setOpen ] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));


  return (
    <CommonContextProvider>
      <ThemeProvider theme={ theme }>
        <GlobalStyles />
        <Router>
          <div ref={node}>
            <Header open={ open } />
            <Burger open={ open } setOpen={ setOpen } />
          </div>
          <Spinner />
          <Switch>
            { 
              Routes.map( (route, index) => (
                <Route
                  path={ route.path }
                  component={ route.component }
                  exact={ route.exact }
                  key={ `${route.component}-${index}` } />
              )) 
            }
            <Route component={ NotFound } />
          </Switch>
        </Router>
      </ThemeProvider>
    </CommonContextProvider>
  );
}

export default hot(module)(App);
