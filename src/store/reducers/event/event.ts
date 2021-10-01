import {IUser} from "../../../models/IUser";
import {IEvent} from "../../../models/IEvent";

export interface EventState {
    guests: IUser[]
    events: IEvent[]
}

export enum EventActionEnum {
    SET_GUESTS = 'SET_GUESTS',
    SET_EVENTS = 'SET_EVENTS',
}

export interface SetGuestsAction {
    type: EventActionEnum.SET_GUESTS
    payload: IUser[]
}

export interface SetEventsAction {
    type: EventActionEnum.SET_EVENTS
    payload: IEvent[]
}

export type EventAction = SetEventsAction | SetGuestsAction

const initialState: EventState = {
    guests: [],
    events: [],
}

export default function EventReducer(state = initialState, action: EventAction): EventState {
    switch (action.type) {
        case EventActionEnum.SET_GUESTS:
            return {...state, guests: action.payload}
        case EventActionEnum.SET_EVENTS:
            return {...state, events: action.payload}

        default:
            return state
    }
}