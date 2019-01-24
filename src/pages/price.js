import React from 'react';
import data from '../data/price.json';

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

      row.push(
        <ProductRow
          key={i.name}
          name={i.name}
          price={i.price}
          style={i.stocked ? {} : { color: 'red' }}
        />
      );
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
          ref={this.props.inputRef}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleinStockChange}
          />{' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default class FinalProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.onStockChange = this.onStockChange.bind(this);
    this.textInputFocus = React.createRef();
  }
  componentDidMount() {
    this.focus();
  }
  handleChange(filterText) {
    this.setState({ filterText: filterText });
  }

  onStockChange(inStockOnly) {
    this.setState({ inStockOnly: inStockOnly });
  }
  focus() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInputFocus.current.focus();
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
          inputRef={this.textInputFocus}
        />
        <ProductTable
          data={this.localData}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
        <input
          type="text"
          // ref={this.textInput}
        />
      </div>
    );
  }
}
