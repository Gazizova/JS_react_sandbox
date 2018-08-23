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

            </div>
        );
    }
}

SearchInput.propTypes = {
    textChange: PropTypes.func
};

export default SearchInput;
