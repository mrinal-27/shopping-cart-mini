import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./productBox.css";

class ProductBox extends Component {
    render() {
        return (
            <div
                className="card m-3 shadow p-3 mb-5 bg-white rounded productcard"
                style={{ display: "inline-block" }}
            >
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>

                    <p className="card-text">Rs. {this.props.price}</p>

                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() =>
                            this.props.onAddToCart(this.props.product)
                        }
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        );
    }
}

export default ProductBox;
