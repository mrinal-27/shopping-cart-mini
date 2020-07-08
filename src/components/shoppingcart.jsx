import React from "react";

class ShoppingCart extends React.Component {
    render() {
        return (
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">S.No.</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data
                        .filter((product) => product.qty > 0)
                        .map((product, idx) => (
                            <tr key={idx}>
                                <th scope="row">{idx + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    {product.qty}
                                    <button
                                        type="button"
                                        className="btn btn-success ml-4"
                                        style={{
                                            fontSize: "1.2rem",
                                            fontWeight: "bold",
                                        }}
                                        onClick={() =>
                                            this.props.onIncrement(product)
                                        }
                                    >
                                        +
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger ml-3"
                                        style={{
                                            fontSize: "1.2rem",
                                            fontWeight: "bold",
                                        }}
                                        onClick={() =>
                                            this.props.onDecrement(product)
                                        }
                                    >
                                        {"  "}-{"  "}
                                    </button>
                                </td>
                                <td>Rs. {product.qty * product.price}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        );
    }
}

export default ShoppingCart;
