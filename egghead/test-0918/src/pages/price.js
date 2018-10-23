import React from "react";
import data from "../data/price.json";

class ProductCategoryRow extends React.Component {
  render() {
    return (
      <tr>
        <td colSpan="2">{this.props.category}</td>
      </tr>
    );
  }
}
class ProductRow extends React.Component {
  render() {
    return (
      <tr>
        <td style={this.props.style}>{this.props.name}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    debugger;
    let lastCategory = null;
    const row = [];
    this.props.data.forEach(i => {
      if (i.category !== lastCategory) {
        row.push(<ProductCategoryRow category={i.category} key={i.category} />);
        lastCategory = i.category;
      } else {
        row.push(
          <ProductRow
            key={i.name}
            name={i.name}
            price={i.price}
            style={i.stocked ? {} : { color: "red" }}
          />
        );
      }
    });

    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>{row}</tbody>
        </table>
      </div>
    );
  }
}

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.handleChange1(e.target.value)
    }
  render() {
    return (
      <form>
        <input type="text" placeholder="search" value={this.props.value} onChange={this.handleChange}/>
        <p>
        <input type="checkbox"/>
        Only show products in stock
        </p>
      </form>
    );
  }
}

export default class FinalProductTable extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            filterText: '123', 
            inStockOnly: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(filterText){
        this.setState({filterText})
    }
    
    localData = JSON.parse(JSON.stringify(data));
    render() {
        debugger
        return (
        <div>
            <SearchBar value={this.state.filterText} handleChange1={this.handleChange}/>
            <ProductTable data={this.localData}/>
        </div>
        );
    }
}
