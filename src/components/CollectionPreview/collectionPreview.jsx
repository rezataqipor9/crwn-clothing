import React from "react";
import './collectionPreview.style.scss'
import CollectionItem from '../collection-item/collectionitem'
const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h2 className='title'>{title.toUpperCase()}</h2>
      <div className='preview '>
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...props }) => (
        //   <div  key={id}> {name}</div>
        <CollectionItem key={id} {...props}/>
        ))}
        </div>
    </div>
  );
};

export default CollectionPreview;
