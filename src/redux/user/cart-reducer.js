import * as Actiontype from '../actionType/actionType'
import {addItemToCart,EliminateCart} from './card_util'
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
             case Actiontype.CLEAR_IETM_FROM_CART:
                 return {...state,cardItem:state.cardItem.filter(item=>item.id!==action.payload.id)}
             case Actiontype.ELIMINATE_CART_ITEM:
                 return {...state,cardItem:EliminateCart(state.cardItem,action.payload)}
        default:
            return state;
    }
}