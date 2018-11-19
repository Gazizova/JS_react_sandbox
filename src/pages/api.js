import React from "react";
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
        <td>{this.props.postcode}</td>
        <td>{this.props.city}</td>
        <td>{this.props.street}</td>
        <td>{this.props.number}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    let lastCategory = null;
    const row = [];

    this.props.data.forEach(i => {
      if (!i.name.toLowerCase().includes(this.props.filterText.toLowerCase())) {
        return;
      }
      if (this.props.inStockOnly & !i.stoked) {
        return;
      }
      if (i.category !== lastCategory) {
        row.push(<ProductCategoryRow category={i.category} key={i.category} />);
        lastCategory = i.category;
      }

      row.push(<ProductRow key={i.name} name={i.name} price={i.price} />);
    });

    return (
      <div>
        <table className="table-price">
          <thead className="table-price-head">
            <tr>
              <td>Name</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody className="table-price-body">{row}</tbody>
        </table>
      </div>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }
  handleFilterChange(e) {
    this.props.onFilterChange(e.target.value);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="search"
          value={this.props.filterText}
          onChange={this.handleFilterChange}
          ref={this.props.inputRef}
        />
      </form>
    );
  }
}
class Swapi extends React.Component {
  state = {
    houses: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    this.fetchPlanet();
  }

  fetchPlanet = () => {
    axios
      .get(
        `https://api-adresse.data.gouv.fr/search/?q=${
          this.props.filterText
        }&limit=15`
      )
      .then(response => {
        console.log(response.data.features);
        this.setState({ houses: response.data.features, loading: false });
      })
      .catch(() => this.setState({ error: true, loading: false }));
  };

  render() {
    const row = [];

    if (this.state.loading) {
      return "loading";
    }

    if (this.state.error) {
      return "error";
    }
    let items = this.state.houses;
    console.log(items);
    this.state.houses.forEach(i => {
      row.push(
        <ProductRow
          key={i.properties.id}
          city={i.properties.city}
          postcode={i.properties.postcode}
          street={i.properties.street}
          number={i.properties.housenumber}
        />
      );
    });

    return (
      <div>
        <table className="table-price">
          <thead className="table-price-head">
            <tr>
              <td>postcode</td>
              <td>City</td>
              <td>Street</td>
              <td>#</td>
            </tr>
          </thead>
          <tbody className="table-price-body">{row}</tbody>
        </table>
      </div>
    );
  }
}

export default class FinalProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "a"
    };
    this.handleChange = this.handleChange.bind(this);
    this.textInputFocus = React.createRef();
  }
  componentDidMount() {
    this.focus();
  }
  handleChange(filterText) {
    this.setState({ filterText });
  }

  onStockChange(inStockOnly) {
    this.setState({ inStockOnly });
  }
  focus() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInputFocus.current.focus();
  }

  // localData = JSON.parse(JSON.stringify(data));
  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterChange={this.handleChange}
          inputRef={this.textInputFocus}
        />
        {/* <ProductTable
          data={this.localData}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        /> */}
        <Swapi filterText={this.state.filterText} />
        <input
          type="text"
          // ref={this.textInput}
        />
      </div>
    );
  }
}
