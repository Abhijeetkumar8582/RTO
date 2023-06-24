import {combineReducers} from 'redux';
import user_phone_state from './UserPhone'


const reducer = combineReducers({
    user_phone_state : user_phone_state,
    // displayTest:displayText
})
export default reducer