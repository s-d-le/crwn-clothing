import React from "react";

import SHOP_DATA from "./shop.data.js";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections
          .filter((item, index) => index < 4)
          .map(({ id, ...props }) => (
            <CollectionPreview key={id} {...props} />
          ))}
      </div>
    );
  }
}

export default ShopPage;
