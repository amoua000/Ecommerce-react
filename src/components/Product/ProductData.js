import React from 'react';
import './ProductData.css';

class Products extends React.Component {
    render() {
        return (
            <article className="products">

                <div className="product-card">
                    <div className="product-image">
                              <img alt="product" src={this.props.item.image} />
                    </div>
                    <div className="product-info">
                              <h3 className="Product-name">{this.props.item.title}</h3>
                              <p className="price">{this.props.item.price}</p>
                              <p>{this.props.item.description}</p>
                              <button className="product-btn">Add to Cart</button>
                    </div>
                </div>

            </article>
        )
    }
}

export default Products;