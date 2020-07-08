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
                { id: 3, name: "Comforter", price: 4000, qty: 0 },
                { id: 4, name: "Drawer", price: 8000, qty: 0 },
            ],
        };

        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.pageSwitch = this.pageSwitch.bind(this);
    }

    pageSwitch(location) {
        const pageNo = location === "home" ? 0 : 1;
        this.setState({ pageNo });
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

    // M ki pehli mehnat ki निशानी
    // handleDecrement(product) {
    //     const products = [...this.state.products];
    //     const index = products.indexOf(product);
    //     if (products[index].qty-- >= 1) this.setState({ products });
    //     else {
    //         products.splice(index, 1);
    //     }

    render() {
        const makeTheSwitch = () => {
            switch (
                this.state.pageNo // initially 0
            ) {
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
                    console.log("Page couldn't change.");
                    break;
            }
        };
        return (
            <React.Fragment>
                <Navbar
                    data={this.state.products}
                    showShoppingCart={this.showShoppingCart}
                    showHome={this.showHome}
                    pageSwitch={this.pageSwitch}
                />
                {makeTheSwitch()}
            </React.Fragment>
        );
    }
}

export default App;
