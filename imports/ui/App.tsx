import React from 'react';
import { Meteor } from 'meteor/meteor';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';

import { publicRoutes, privateRoutes, PrivateRoute } from './routing';
import { Header, Layout } from './components';

function App(): JSX.Element {
  const user = useTracker(() => Meteor.user());
  const isLoggedIn = !!user;

  return (
    <BrowserRouter>
      <Layout>
        {isLoggedIn && <Header />}
        <Switch>
          {publicRoutes.map(({ path, exact, Component }) => (
            <Route path={path} exact={exact} key={path}>
              <Component />
            </Route>
          ))}
          {privateRoutes.map(({ path, exact, Component }) => (
            <Route path={path} exact={exact} key={path}>
              <PrivateRoute Component={Component} />
            </Route>
          ))}
          {isLoggedIn && (
            <Route path="*">
              <p>This isn't the page you're looking for</p>
            </Route>
          )}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export { App };
