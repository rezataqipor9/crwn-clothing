import {combineReducers} from 'redux'
import {userReducer} from './user/userReducer'
import {DropDownReducer} from './user/cart-reducer'
export default combineReducers({
    user:userReducer,
    isShow:DropDownReducer,
    

})