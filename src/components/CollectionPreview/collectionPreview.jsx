import React from "react";
import './collectionPreview.style.scss'
import CollectionItem from '../collection-item/collectionitem'
const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h2 className='title'>{title.toUpperCase()}</h2>
      <div className='preview '>
      {items
        .filter((item, index) => index < 14)
        .map( item  => (
        <CollectionItem key={item.id} item={item}/>
        ))}
        </div>
    </div>
  );
};

export default CollectionPreview;
