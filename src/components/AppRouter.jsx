import React, {useContext} from 'react';
import {Redirect, Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPages from "../pages/PostIdPages";
import {publicRoutes, privateRoutes} from "../router";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    console.log(isAuth);
    return (
        isAuth
            ?
            <Switch>
                {privateRoutes.map(routes =>
                    <Route
                        component={routes.component}
                        path={routes.path}
                        exact={routes.exact}
                        key={routes.path}
                    />
                )}

                <Redirect to="/posts"/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(routes =>
                    <Route
                        component={routes.component}
                        path={routes.path}
                        exact={routes.exact}
                        key={routes.path}
                    />
                )}
                <Redirect to="/login"/>
            </Switch>
    );
};

export default AppRouter;