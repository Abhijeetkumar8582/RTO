import {combineReducers} from 'redux';
import user_phone_state from './UserPhone';
import is_Number_verified from './IsNumberverified';
import CouponSelectedID from './Coupon'
import ModalProgess from './ModalProgess'

const reducer = combineReducers({
    user_phone_state : user_phone_state,
    is_Number_verified:is_Number_verified,
    CouponSelectedID:CouponSelectedID,
    ModalProgess:ModalProgess
    
})
export default reducer