import React from "react";
import data from "../data/price.json";
import axios from "axios";

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
    let lastCategory = null;
    const row = [];

    this.props.data.forEach(i => {

      if(!i.name.toLowerCase().includes(this.props.filterText.toLowerCase())){
        return;
      }
      if(this.props.inStockOnly & !i.stoked){
        return;
      }
      if (i.category !== lastCategory) {
        row.push(
          <ProductCategoryRow 
          category={i.category} 
          key={i.category} 
          />
        );
        lastCategory = i.category;
      } 
      
        row.push(
          <ProductRow
            key={i.name}
            name={i.name}
            price={i.price}
            style={i.stocked ? {} : { color: "red" }}
          />
        );
      
    });
    debugger
    return (
      <div>
        <table class="table-price">
          <thead class="table-price-head">
            <tr>
              <td>Name</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody class="table-price-body">{row}</tbody>
        </table>
      </div>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleinStockChange = this.handleinStockChange.bind(this);
  }
  handleFilterChange(e) {
    this.props.onFilterChange(e.target.value);
  }

  handleinStockChange(e) {
    this.props.onStockChange(e.target.chacked);
  }
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="search"
          value={this.props.filterText}
          onChange={this.handleFilterChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleinStockChange}
          />{" "}
          Only show products in stock
        </p>
      </form>
    );
  }
}
class Swapi extends React.Component {
  state = {
    planets: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    this.fetchPlanet();
  }

  fetchPlanet = () => {
    axios
      .get("https://swapi.co/api/planets/1/")
      .then(response => {
        // throw new Error('blabla')
        this.setState({ planets: response.data, loading: false });
      })
      .catch(() => this.setState({ error: true, loading: false }));
  };

  render() {
    if (this.state.loading) {
      return "loading";
    }

    if (this.state.error) {
      return "error";
    }

    return <div>{this.state.planets.name}</div>;
  }
}
export default class FinalProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      inStockOnly: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.onStockChange = this.onStockChange.bind(this);
  }
  handleChange(filterText) {
    this.setState({ filterText: filterText });
  }

  onStockChange(inStockOnly) {
    this.setState({ inStockOnly: inStockOnly });
  }

  localData = JSON.parse(JSON.stringify(data));
  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterChange={this.handleChange}
          onStockChange={this.onStockChange}
        />
        <ProductTable 
          data={this.localData} 
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
        <Swapi />
      </div>
    );
  }
}
