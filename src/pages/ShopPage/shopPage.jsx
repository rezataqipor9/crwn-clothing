import React, { Component } from "react";
import SHOP_DATA from "./ShopData.js";
import CollectionPreview from "../../components/CollectionPreview/collectionPreview";
class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = { collection: SHOP_DATA };
  }
  render() {
      const {collection} =this.state
    return (
      <>
        <h1>Collections</h1>
       {
        collection.map(({id,...props})=>(
            <CollectionPreview key={id}{...props}/>
        ))
       }
      </>
    );
  }
}

export default ShopPage;
