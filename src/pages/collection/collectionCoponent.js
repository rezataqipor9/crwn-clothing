import React from "react";
import "./collection.style.scss";
import {ShopSelector} from '../../redux/shop/shop.selector'
import {createStructuredSelector} from 'reselect'
import {connect } from 'react-redux'
import _ from 'lodash'
import CollectionItem from '../../components/collection-item/collectionitem'
const CallectionPage = ({ match ,collection}) => {
  const objCollection=_.mapKeys(collection,"routeName")
  const colle=objCollection[match.params.id]
  console.log('objCollection',objCollection[match.params.id]);

  // const colle=collection.find(x=>x.title.toLowerCase()===match.params.id)
  if (!colle) {
    return <h1>we got no {match.params.id}</h1>
  }
  const {title,items}=colle
  
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>   
    <div className='items'>
  {items.map(item=><CollectionItem key={item.id} item={item}/>)}
    </div>
    </div>
  );
};
const MapStateToProps=createStructuredSelector({
  collection:ShopSelector
})

export default connect(MapStateToProps) (CallectionPage);
