import { Switch, Route, Redirect } from 'react-router-dom';
import React, { FC } from 'react';
import { publicRoutes, RouteNames } from '../routes';

const AppRouter: FC = () => (
   <Switch>
      {publicRoutes.map((route) => (
         <Route {...route} key={route.path} />
      ))}
      <Redirect to={RouteNames.HOME} />
   </Switch>);

export default AppRouter;