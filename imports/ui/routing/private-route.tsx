import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React from 'react';
import { Redirect } from 'react-router';

interface PrivateRouteProps {
  Component: () => React.ReactElement;
}

function PrivateRoute({ Component }: PrivateRouteProps) {
  const user = useTracker(() => Meteor.user());
  const isLoggedIn = !!user;

  return isLoggedIn ? <Component /> : <Redirect to="/login" />;
}

export { PrivateRoute };
