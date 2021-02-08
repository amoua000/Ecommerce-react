

import React from "react";
import items from "./products.json";
import "./Product.css";
import Products from "./ProductData";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "default",
      cost: "default",
    };
  }

  handlePriceDropdownSelect = (event) => {
    this.setState({
      cost: event.target.value,
      type: event.target.value,
    });
  };

  render() {
    const { type, cost } = this.state;
    return (
      <React.Fragment>
        <div className="form-container">
          <div className="gridfilter">
            <label className="filters">Type:</label>
            <select
              id="filterSelect"
              value={type}
              onChange={this.handlePriceDropdownSelect}
            >
              <option value="default">All</option>
              <option value="fish">All Fish</option>
              <option value="Crustacean">Crustaceans</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div>
            <label className="filters">Price:</label>
            <select
              id="priceSelect"
              value={cost}
              onChange={this.handlePriceDropdownSelect}
            >
              <option value="default">All</option>
              <option value="low">$0 - $50</option>
              <option value="medium">$50 - $100</option>
              <option value="high">$100-$200</option>
            </select>
          </div>
        </div>

        <div className="filter">
          {items.items.map((item) => {
            if (type === "default" && cost === "default") {
              return <Products key={item.id} item={item} />;
            } else if (type === item.type && cost === item.cost) {
              return <Products item={item} />;
            } else if (type === item.type || cost === item.cost) {
              return <Products item={item} />;
            }
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
