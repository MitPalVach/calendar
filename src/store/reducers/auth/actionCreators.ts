import {AuthActionsEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction} from "./types";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../store";
import axios from "axios";

export const AuthACs = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionsEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionsEnum.SET_AUTH, payload: auth}),
    setError: (payload: string): SetErrorAction => ({type: AuthActionsEnum.SET_ERROR, payload: payload}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: AuthActionsEnum.SET_IS_LOADING, payload}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthACs.setIsLoading(true))
            const mockUsers = await axios.get('./users.json')
            console.log(mockUsers);
        } catch (e) {
dispatch(AuthACs.setError('Ошибка логина'))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        try {

        } catch (e) {

        }
    },
}