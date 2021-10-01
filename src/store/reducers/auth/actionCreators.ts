import {AuthActionsEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction} from "./types";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../store";
import UserService from "../../../api/UserService";


export const AuthACs = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionsEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionsEnum.SET_AUTH, payload: auth}),
    setError: (payload: string): SetErrorAction => ({type: AuthActionsEnum.SET_ERROR, payload: payload}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: AuthActionsEnum.SET_IS_LOADING, payload}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthACs.setIsLoading(true))
            setTimeout(async () => {
                const response = await UserService.getUsers()
                const mockUsers = response.data.find(user => user.username === username && user.password === password)
                if (mockUsers) {
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('username', mockUsers.username)
                    dispatch(AuthACs.setIsAuth(true))
                    dispatch(AuthACs.setUser(mockUsers))
                } else {
                    dispatch(AuthACs.setError('Неверный логин или пароль'))
                }
                dispatch(AuthACs.setIsLoading(false))
            }, 1000)
        } catch (e) {
            dispatch(AuthACs.setError('Ошибка логина'))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('auth')
        localStorage.removeItem('username')
        dispatch(AuthACs.setUser({} as IUser))
        dispatch(AuthACs.setIsAuth(false))
    }
}