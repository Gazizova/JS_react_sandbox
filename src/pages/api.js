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
  console.log(filteredText);
  let filteredTextUpdated
  if(filteredText.includes(' ')){
    filteredTextUpdated=filteredText.split(' ').join('+');
    console.log(filteredTextUpdated)
  }
  else{
    filteredTextUpdated=filteredText;
  }

  console.log(`https://api-adresse.data.gouv.fr/search/?q=${filteredTextUpdated}&limit=10`)
  return axios.get(`https://api-adresse.data.gouv.fr/search/?q=${filteredTextUpdated}&limit=10`)
  
}

class BuildAddressTable extends React.Component {
  render(){
    return (
      <div>
        <table className="table-address">
          <thead className="table-address-head">
            <tr>
              <td>{this.props.togglep}Postcode</td>
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
const AddressesForMap = ({ text }) => <div className="map-pointer">{text}</div>;

function SortingToggle(sort){
  return(
    <a clasName="sort-toggle">
      <img className="sort-toggle-img" src='ic-sort-default.svg' onClick={()=>sort}/>
    </a>
  )
}

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
      loading: true,
      houses:[],
      error: false,
      failSearch: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.textInputFocus = React.createRef();
  }

  searchFailMessage =" ";

  componentDidMount() {
    getAddress(this.state.filterText).then(response => {
      console.log("Mounted"+response.data.features);
      this.setState({ houses: response.data.features, loading: false });
    })
  }
  componentDidUpdate(){
    console.log("Updated");
    console.log(this.state.failSearch)
    this.state.failSearch===true? this.searchFailMessage=<div>Can't find address..</div>: this.searchFailMessage=" "
  }
  

  handleChange(filterText) {
    this.setState({ filterText});
  }

  handleSubmit(e){
      e.preventDefault();
      getAddress(this.state.filterText).then(response => {
        console.log(response.data.features.length);
        console.log(typeof(response.data.features));
        if(response.data.features.length > 0){
          this.setState({ houses: response.data.features, loading: false, failSearch: false});
        }else{this.setState({ houses:[], failSearch: true})}        
      })
      .catch(() => this.setState({ error: true, loading: false }));
      
  };

  onStockChange(inStockOnly) {
    this.setState({ inStockOnly });
  }
  focus() {
    this.textInputFocus.current.focus();
  }

  // objs = [
  //   { g:{first_nom: 'Lazslo'}, p:{last_nom: 'Jamf'} },
  //   { g:{first_nom: 'Pig'}, p:{last_nom: 'Bodine'} }
  // ];

  compare=()=>{
    const objs = [
      { g:{first_nom: 'Lazslo'}, p:{last_nom: 'Jamf'} },
      { g:{first_nom: 'Pig'}, p:{last_nom: 'Bodine'} }
    ];
     
      // let newArray = [];
      // newArray =array.slice();
      console.log("Array123");

      objs.sort=(a,b)=>{
        debugger
        console.log("a");
        console.log(a);
        console.log(b);
        // if (a.last_nom < b.last_nom)
        //   return -1;
        // if (a.last_nom > b.last_nom)
        //   return 1;
        // return 0;
      }

    }

  render() {
    let row = [];
    console.log(this.state.houses)
    

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
        coordinat.push(
             { "lat": i.geometry.coordinates[1], "lng":i.geometry.coordinates[0], "label":i.properties.label}
      )
    })
    
    // console.log(coordinat);
    let addressesForMap=[];
    coordinat.forEach(i=>{
      addressesForMap.push(<AddressesForMap
        key={i.lat}
        lat={i.lat}
        lng={i.lng}
        text={i.label}
      />)
    })
    console.log(addressesForMap);

    const objs = [
      { g:{first_nom: 'Lazslo'}, p:{last_nom: 'Jamf'} },
      { g:{first_nom: 'Pig'}, p:{last_nom: 'Bodine'} }
    ];
    
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
            <BuildAddressTable 
              togglep={ 
  
                <img className="sort-toggle-img" src='ic-sort-default.svg' onClick={this.compare}/>
              }
                > 
              {row}
            </BuildAddressTable>
            {this.searchFailMessage}
        </div>   
        <div className="map-container">
            <SimpleMap>{addressesForMap}</SimpleMap>
        </div>    
      </div>
    );
  }
}


function sortByName(cnt, array, item){
  debugger
  let newArray =array.slice();
  let sortByFirstName = newArray.sort(function (a, b) {
      let nameA = a.properties.item.toLowerCase();
      let nameB = b.properties.item.toLowerCase();
      if (cnt===0) {
          if (nameA < nameB) {
              return -1;
          }
          if (nameA > nameB) {
              return 1;
          }
          return 0;
      }else if(cnt === 1){
          if (nameA > nameB) {
              return -1;
          }
          if (nameA < nameB) {
              return 1;
          }
          return 0;
      }
  });
  return sortByFirstName
}

function Compare(array) {
  debugger
  let newArray =array.slice();
  console.log(newArray);
  let sortByFirstName=newArray.sort=(a,b)=>{
    if (a.properties.postcode < b.properties.postcode)
      return -1;
    if (a.properties.postcode > b.properties.postcode)
      return 1;
    return 0;
  }
  return sortByFirstName
}

// var objs = [
//   { g:{first_nom: 'Lazslo'}, p:{last_nom: 'Jamf'} },
//   { g:{first_nom: 'Pig'}, p:{last_nom: 'Bodine'} }
// ];

// function sortbyAsc(){
//   const arr = sortByName(0, clientList)
//   console.log("sortbyAsc")
//   console.log(arr)
//   this.setState({
//       filterUserList: FilterUserList(arr, '')
//   })
// }

// function sortbyDesc(){
//   const arr = sortByName(1, clientList)
//   console.log("sortbyDesc")
//   console.log(arr)
//   this.setState({
//       filterUserList: FilterUserList(arr, '')
//   })
// }