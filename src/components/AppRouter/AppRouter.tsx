import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../../routes/routes";
import {useTypedSelector} from "../../hooks/useTypedSelector";


const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.auth)

    return (
        isAuth ?
            <Switch> // позволяет выбрать один маршрут из тех, которые находятся внутри
                него, и если не один из маршрутов не был найден - можно сделать редирект
                {privateRoutes.map(route =>
                    <Route key={route.path}
                           path={route.path}
                           exact={route.exact}
                           component={route.component}/>
                )}
                <Redirect to={RouteNames.EVENT}/> // если не один путь не отработает, то
                будет отрабатывать этот редирект
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route key={route.path}
                           path={route.path}
                           exact={route.exact}
                           component={route.component}/>
                )}
                <Redirect to={RouteNames.LOGIN}/>
            </Switch>
    );
};

export default AppRouter;