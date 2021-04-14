import * as Actiontype from '../actionType/actionType'
const initialShow=({
    isShow:false
})
export const DropDownReducer=(state=initialShow,action)=>{
    switch (action.type) {
        case Actiontype.TOGGLE_DROPDOWN:
            return{...state,isShow:! state.isShow}          
    
        default:
            return state;
    }
}