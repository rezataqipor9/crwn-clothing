import React from "react";
import CollectionOverView from "../../components/collection-overview/collection-overview.js";
import { Route } from "react-router-dom";
import CallectionPage from "../collection/collectionCoponent";
const ShopPage = ({ match }) => {
console.log(match)
  return (
    <div className='shop-page'>           
        <Route exact path={`${match.path}`} component={CollectionOverView} />
        <Route  path={`${match.path}/:id`}  component={CallectionPage} />      
    </div>
  );
};

export default ShopPage;
