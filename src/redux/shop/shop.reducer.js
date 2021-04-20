import SHOP_DATA from '../../pages/ShopPage/ShopData'
const initalStae={
    collection:SHOP_DATA
}
export const shopReducer =(state=initalStae,action)=>{
    switch (action.type) {
        default:
            return state
    }
}