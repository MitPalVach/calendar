import React from "react";
import Login from "../pages/Login/Login";
import Event from "../pages/Event/Event";


export interface IRoute {
    path: string
    component: React.ComponentType
    exact?: boolean // точная идентификация маршрута
}

export enum RouteNames { // словарь маршрутов
    LOGIN = '/login',
    EVENT = '/'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, exact: true, component: Login}
]
export const privateRoutes: IRoute[] = [
    {path: RouteNames.EVENT, exact: true, component: Event}
]