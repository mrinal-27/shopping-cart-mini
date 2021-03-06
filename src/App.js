import React from "react";
import "./App.css";

import ProductBox from "./components/productBox";
import Navbar from "./components/navbar";
import ShoppingCart from "./components/shoppingcart";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNo: 0,
            products: [
                { id: 1, name: "PictureFrame", price: 1000, qty: 0 },
                { id: 2, name: "Lamp", price: 3500, qty: 0 },
                { id: 3, name: "Rug", price: 4000, qty: 0 },
                { id: 4, name: "Bedside Table", price: 6000, qty: 0 },
                { id: 5, name: "Comforter", price: 4500, qty: 0 },
                { id: 6, name: "Pillows", price: 3250, qty: 0 },
            ],
        };

        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.pageSwitch = this.pageSwitch.bind(this);
    }

    handleIncrement(product) {
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index].qty++;
        this.setState(products);
    }

    handleDecrement(product) {
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index].qty--;
        this.setState(products);
    }

    pageSwitch(loc) {
        const pageNo = loc === "home" ? 0 : 1;
        this.setState({ pageNo });
        console.log("pageSwitch clicked");
    }

    render() {
        const makeSwitch = () => {
            switch (this.state.pageNo) {
                case 0:
                    console.log("page 0");
                    return this.state.products.map((product, id) => (
                        <ProductBox
                            key={id}
                            product={product}
                            name={product.name}
                            price={product.price}
                            onAddToCart={this.handleIncrement}
                        />
                    ));
                case 1:
                    console.log("page 1");
                    return (
                        <ShoppingCart
                            data={this.state.products}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                        />
                    );
                default:
                    console.log("Page couldn't be displayed");
                    break;
            }
        };
        return (
            <React.Fragment>
                <Navbar
                    data={this.state.products}
                    pageSwitch={this.pageSwitch}
                />
                {makeSwitch()};
            </React.Fragment>
        );
    }
}

export default App;
