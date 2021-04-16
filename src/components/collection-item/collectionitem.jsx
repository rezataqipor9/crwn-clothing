import React from "react";
import './collectionitem.style.scss'
import CustomButton from '../custom-button/custom-button'
import {connect} from 'react-redux'
import {addItem} from '../../redux/user/user-action'
const CollectionItem = ({ item,addItem,cardItem}) => {
  const { name, price, imageUrl } = item;
  
  
  return (
    <div onClick={()=>addItem(item)} className="collection-item">
      <div 
      className="image" 
      style={{ backgroundImage: `url(${imageUrl})` }}
       />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <CustomButton  inverted>
        Add to cart
      </CustomButton>
      </div>
    </div>
  );
};
const MapStateToProps=(state)=>({
  cardItem:state.cart.cardItem
})

export default connect(MapStateToProps,{addItem})(CollectionItem);
