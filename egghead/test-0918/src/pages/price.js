import React from "react";
import data from '../data/price.json'

class ProductRow extends React.Component{
    render() {
        return(
        <tr>
            <td>{this.props.name}</td>
            <td>{this.props.price}</td>
        </tr>
    )
    }
}

export default class ProductTable extends React.Component{

    localData = JSON.parse(JSON.stringify(data));
     
    render() {
        // this.localData.array.forEach(element => {
        //     return <ProductRow name={element.name} price={element.price} />
        // });
        debugger
        return(
            
            <div>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                </tbody>
                </table>
                    {this.localData.forEach(element => {
            return (<div>{element.name}</div>)})}
            </div>

                
            
    )
}
};

