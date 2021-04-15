import React from 'react';
import CustomButton from '../custom-button/custom-button'
import './card-dropdown.style.scss'
import CardItemDropDown from '../card-item-dropdown/card-item.component'
import {connect} from 'react-redux'
const CardDropDown = ({cardItem}) => {
    return (  
        <div className='cart-dropdown'>
        
        <div className='cart-items' >
        {cardItem.map(item=><CardItemDropDown key={item.id} item={item}/>)}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    );
}
const MapStateToProps = (state) => ({
  
  
  cardItem:state.isShow.cardItem

});
export default connect(MapStateToProps)(CardDropDown);