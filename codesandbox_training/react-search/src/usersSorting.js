import React, { PureComponent } from 'react';
import './App.css';
import clientList from "./data.json";


class UserSorting extends PureComponent {

    // constructor(props) {
    //     super(props)
    //     this.state = { clientList }
    //     this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
    //     this.sortByPriceDesc = this.sortByPriceDesc.bind(this);
    // }
    //
    // sortByPriceAsc() {
    //     this.setState(prevState => {
    //         this.state.clientList.sort((a, b) => (a.price - b.price))
    //     });
    // }
    //
    // sortByPriceDesc() {
    //     this.setState(prevState => {
    //         this.state.clientList.sort((a, b) => (b.price - a.price))
    //     });
    // }

    render() {
        return (
            <div>
                Sorteren:
                <button onClick={this.sortByPriceAsc}>
                    Aflopend
                </button>
                <button onClick={this.sortByPriceDesc}>
                    Oplopend
                </button>
                <div className="Product">
                    { this.state.products.map((product, index) =>
                        <div key ={index} className="card">
                            <img src={ product.product.details.image } alt={ product.product.details.ean }/>
                            <h3>Prijs: { product.price } Euro</h3>
                            <p>Staat: { product.description }</p>
                            <p>Verkoper: { product.user.details.firstname }</p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default UserSorting;