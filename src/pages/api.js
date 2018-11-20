import React from "react";
import axios from "axios";
import GoogleMapReact from 'google-map-react';


class StreetRow extends React.Component {
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
      <form onSubmit={this.props.onSubmit}>
        <input
          type="text"
          placeholder="search"
          value={this.props.filterText}
          onChange={this.handleFilterChange}
          ref={this.props.inputRef}
        />
        <input className="api-submit" type="submit" value="Find"/>
      </form>
    );
  }
}

function getAddress(filteredText){
  return axios.get(`https://api-adresse.data.gouv.fr/search/?q=${filteredText}&limit=10`)
  
}

class BuildAddressList extends React.Component {
  state = {
    houses: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    this.fetchAdresses();
  }

  fetchAdresses = () => {
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
        <StreetRow
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

function parseTable(data){
  let row =[];
  data.forEach(i => {
    row.push(
      <StreetRow
        key={i.properties.id}
        city={i.properties.city}
        postcode={i.properties.postcode}
        street={i.properties.street}
      />
    );
  });
  return row;
}
class BuildAddressTable extends React.Component {
  render(){
    return (
      <div>
        <table className="table-price">
          <thead className="table-price-head">
            <tr>
              <td>postcode</td>
              <td>City</td>
              <td>Address</td>
            </tr>
          </thead>
          <tbody className="table-price-body">{this.props.children}</tbody>
        </table>
      </div>
    );
  }
}
const AddressesForMap = ({ text }) => <div style={{
  color: 'white', 
  background: 'grey',
  padding: '15px 10px',
  display: 'inline-flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
  transform: 'translate(-50%, -50%)'
}}>{text}</div>;

class SimpleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: 47.760852,
      lng: 4.070423
    },
    zoom: 6
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyDRdx47eRI-WR5cqdT9hbtfE6V_z6QZJOc'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        {this.props.children}
        </GoogleMapReact>
      </div>
    );
  }
}
export default class FinalProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: " ",
      loading: false,
      houses:[],
      error: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.textInputFocus = React.createRef();
  }
  componentDidMount() {
    
    getAddress(this.state.filterText).then(response => {
      console.log(response.data.features);
      this.setState({ houses: response.data.features, loading: false });
    })
  }

  handleChange(filterText) {
    
    this.setState({ filterText});
  }

  handleSubmit(e){
      e.preventDefault();
      // let a;
      // let filterText = this.state.filterText
    //   console.log(this.state.filterText)
    //     if (this.state.filterText.includes(' ')){
    //        a = this.state.filterText.slice(0).split(' ').join('&')
    //        this.setState({filterText:a})
    //        console.log("a:" +a)
    //     }
    //     console.log(this.state.filterText)

      getAddress(this.state.filterText).then(response => {
        console.log(response.data.features);
        this.setState({ houses: response.data.features, loading: false });
      })
      .catch(() => this.setState({ error: true, loading: false }));
  };

  onStockChange(inStockOnly) {
    this.setState({ inStockOnly });
  }
  focus() {
    this.textInputFocus.current.focus();
  }

  render() {
    let row = [];
    

    if (this.state.loading) {
      return "loading";
    }

    if (this.state.error) {
      return "error";
    }
    this.state.houses.forEach(i => {
      row.push(
        <StreetRow
          key={i.properties.x}
          city={i.properties.city}
          postcode={i.properties.postcode}
          street={i.properties.label}
        />
      );
      
    });
    let coordinat=[];
      this.state.houses.forEach(i => {
        console.log(i)
        coordinat.push(
             { "lat": i.geometry.coordinates[1], "lng":i.geometry.coordinates[0], "label":i.properties.label}
      )
    })
    
    console.log(coordinat);
    let addressesForMap=[];
    coordinat.forEach(i=>{
      console.log(i.label);
      addressesForMap.push(<AddressesForMap
        key={i.lat}
        lat={i.lat}
        lng={i.lng}
        text={i.label}
      />)
    })
    console.log(addressesForMap);
    return (
      <div className="component-api-conteiner">
        <div className="address-table">
            <SearchBar
              filterText={this.state.filterText}
              inStockOnly={this.state.inStockOnly}
              onFilterChange={this.handleChange}
              inputRef={this.textInputFocus}
              onSubmit={this.handleSubmit}
            />
            <BuildAddressTable>
              {row}
            </BuildAddressTable>
        </div>   
        <div className="map-container">
            <SimpleMap>{addressesForMap}</SimpleMap>
        </div>    
      </div>
    );
  }
}
