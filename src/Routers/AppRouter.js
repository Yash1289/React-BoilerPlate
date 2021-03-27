const React = require("react");
import { Router, Route, Switch, Link , NavLink } from "react-router-dom"


import DashboardPage from "../components/DashboardPage"
import LoginPage from "../components/LoginPage"
import NotFound from "../components/NotFound"
import {createBrowserHistory} from "history"
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"

import PropTypes from 'prop-types';

 Route.propTypes.component = PropTypes.oneOfType([
    Route.propTypes.component,
    PropTypes.object,
]);

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
          
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;