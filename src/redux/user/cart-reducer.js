import * as Actiontype from '../actionType/actionType'
import {addItemToCart} from './card_util'
// import _ from 'lodash'
const initialShow=({
    isShow:false,
    cardItem:[]
})
export const DropDownReducer=(state=initialShow,action)=>{
    switch (action.type) {
        case Actiontype.TOGGLE_DROPDOWN:
            return{...state,isShow:! state.isShow}   
        case Actiontype.ADD_ITEM:
            return {
                ...state,cardItem:addItemToCart(state.cardItem,action.payload)
             }
        default:
            return state;
    }
}