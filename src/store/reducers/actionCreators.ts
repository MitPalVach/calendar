import {AuthACs} from "./auth/actionCreators";
import {EventActionCreators} from "./event/actionCreators";

export const allActionCreators = {
    ...AuthACs,
    ...EventActionCreators,
}