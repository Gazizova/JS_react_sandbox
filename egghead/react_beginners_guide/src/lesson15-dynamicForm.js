import React from 'react'


class Lesson15 extends React.Component {
    handleSubmit = event => {
        event.preventDefault()
        const value =
            event.target.elements.username.value;
        const error = this.props.getErrorMessage(value);
        if (error) {
            alert(`error: ${error}`)
        } else {
            alert(`success: ${value}`)
        }
    }

    // handleChange = event => {
    //     const {value} = event.target
    //     this.setState({
    //         error: this.props.getErrorMessage(value),
    //     })
    // }

    render() {
        return (
            <div>
                <h3> Lesson 15:</h3>

            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="username"
                        // onChange={this.handleChange}
                    />
                </label>
                {/* {this.error ? (
                    <div style={{color: 'red'}}>
                        {this.error}
                    </div>
                ) : null} */}
                <button disabled={Boolean(this.error)}
                    type="submit">Submit</button>
            </form>
            </div>
        )
    }
}


export default Lesson15
