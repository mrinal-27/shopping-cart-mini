import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                    style={{ alignItems: "center" }}
                >
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <button
                                type="button"
                                className="btn btn-warning mr-3 mt-1"
                                onClick={() => this.props.pageSwitch("home")}
                            >
                                <strong>Home</strong>
                            </button>
                        </li>
                        <li className="nav-item active mt-1">
                            <button
                                type="button"
                                className="btn btn-warning"
                                onClick={() =>
                                    this.props.pageSwitch("shopping-cart")
                                }
                            >
                                <strong>Shopping Cart</strong>
                            </button>
                        </li>
                        <li className="nav-item active ml-3 mt-2">
                            <h4 style={{ color: "white" }}>
                                Items in cart:{" "}
                                <span className="badge badge-pill badge-secondary">
                                    {
                                        this.props.data.filter(
                                            (product) => product.qty > 0
                                        ).length
                                    }
                                </span>
                            </h4>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
