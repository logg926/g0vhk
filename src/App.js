import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import DefaultLayout from 'views/DefaultLayout';
import Loading from 'components/Loading';
import 'typeface-roboto';
import './App.scss';

const Homepage = React.lazy(() => import('./views/Homepage'));
const Bills = React.lazy(() => import('./views/Bills'));
const Category = React.lazy(() => import('./views/Category'));

const routes = [
  { path: '/', exact: true, name: '主頁', component: Homepage },
  { path: '/bills', name: '議員', component: Bills },
  { path: '/categories', name: '議員', component: Category },

];

class App extends Component {
  render() {
    return (
      <DefaultLayout>
        <HashRouter>
            <React.Suspense fallback={Loading}>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={props => (
                        <route.component {...props} />
                      )} />
                  ) : (null);
                })}
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </React.Suspense>
        </HashRouter>
      </DefaultLayout>
    );
  }
}

export default App;
