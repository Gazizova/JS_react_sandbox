import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class SearchInput extends PureComponent {
    handleChange = event => {
        this.props.textChange(event);
    };

    render() {
        return (
            <div className="component-search-input">
                    <label htmlFor="search">Find user</label>
                    <input onChange={this.handleChange} id="search" name="searchfield" />
                <button onClick={this.props.asc} type="button" value="SortAsc" id="sort-button-asc">Sort Asc</button>
                <button onClick={this.props.desc} type="button" value="SortDesc" id="sort-button-desc">Sort Desc</button>
                <button onClick={this.props.clear} type="button" value="Clear" id="clear-button">Clear All</button>
            </div>
        );
    }
}

SearchInput.propTypes = {
    textChange: PropTypes.func
};

export default SearchInput;
