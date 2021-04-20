import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import './collection-overview.style.scss'
import {ShopSelector} from '../../redux/shop/shop.selector'
import CollectionPreview from '../CollectionPreview/collectionPreview'
const CollectionOverView = ({collection}) => {
    return (  
        <div className='collections-overview'>
        {collection.map(({ id, ...props }) => (
            <CollectionPreview key={id} {...props} />
          ))}
        </div>
    );
}
 const MapStateToProps=createStructuredSelector({
    collection:ShopSelector
 })
export default connect(MapStateToProps) (CollectionOverView);