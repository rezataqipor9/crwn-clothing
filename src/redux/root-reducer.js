import {combineReducers} from 'redux'
import {userReducer} from './user/userReducer'
import {DropDownReducer} from './user/cart-reducer'
import { directoryReducer} from './directory/directory-reducer'
import {shopReducer} from './shop/shop.reducer'
export default combineReducers({
    user:userReducer,
    cart:DropDownReducer,
    directory:directoryReducer,
    shop:shopReducer
    
    

})